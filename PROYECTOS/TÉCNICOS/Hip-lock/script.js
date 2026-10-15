/**
 * Script Interactivo - Infografía Técnica Control de Calidad Hip-Lock
 */

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const btnTheme = document.getElementById('btn-theme');
  const btnReset = document.getElementById('btn-reset');
  const btnPrint = document.getElementById('btn-print');
  const callouts = document.querySelectorAll('.callout');
  const pointCards = document.querySelectorAll('.point-card');
  const checkboxes = document.querySelectorAll('.chk-conform');

  // 1. Cambio de Tema (Light Sheet <-> Dark Blueprint)
  btnTheme.addEventListener('click', () => {
    if (body.classList.contains('theme-light')) {
      body.classList.remove('theme-light');
      body.classList.add('theme-blueprint');
      btnTheme.querySelector('span').textContent = 'Modo Hoja Clara (Impresión)';
    } else {
      body.classList.remove('theme-blueprint');
      body.classList.add('theme-light');
      btnTheme.querySelector('span').textContent = 'Modo Blueprint / Taller';
    }
  });

  // 2. Acción de Impresión / Guardar PDF
  btnPrint.addEventListener('click', () => {
    window.print();
  });

  // 3. Resaltado Cruzado entre Diagrama SVG y Tarjetas de Puntos
  callouts.forEach(callout => {
    const targetId = callout.getAttribute('data-target');
    const targetCard = document.getElementById(targetId);

    // Hover sobre el punto en el SVG
    callout.addEventListener('mouseenter', () => {
      callout.classList.add('active');
      if (targetCard) {
        targetCard.classList.add('is-targeted');
      }
    });

    callout.addEventListener('mouseleave', () => {
      callout.classList.remove('active');
      if (targetCard) {
        targetCard.classList.remove('is-targeted');
      }
    });

    // Clic sobre el punto en el SVG para desplazarse suavemente
    callout.addEventListener('click', () => {
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.add('is-targeted');
        setTimeout(() => {
          targetCard.classList.remove('is-targeted');
        }, 1800);
      }
    });
  });

  // Hover sobre las tarjetas para resaltar el punto en el SVG
  pointCards.forEach(card => {
    const cardId = card.id;
    const matchingCallout = document.querySelector(`.callout[data-target="${cardId}"]`);

    card.addEventListener('mouseenter', () => {
      if (matchingCallout) {
        matchingCallout.classList.add('active');
      }
    });

    card.addEventListener('mouseleave', () => {
      if (matchingCallout) {
        matchingCallout.classList.remove('active');
      }
    });
  });

  // 4. Campo de Fecha de Inspección (Editable, solo números y calendario interactivo)
  const traceDateInput = document.getElementById('trace-date-input');
  const btnCalendarTrigger = document.getElementById('btn-calendar-trigger');
  const traceNativeDate = document.getElementById('trace-native-date');

  function syncTextToNativeDate() {
    if (!traceDateInput || !traceNativeDate) return;
    const text = traceDateInput.value.trim();
    const parts = text.split('/');
    if (parts.length === 3 && parts[0].length === 2 && parts[1].length === 2 && parts[2].length === 4) {
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];
      const iso = `${year}-${month}-${day}`;
      if (!isNaN(Date.parse(iso))) {
        traceNativeDate.value = iso;
      }
    }
  }

  if (traceDateInput) {
    // 4.1 Bloqueo estricto de letras en teclado
    traceDateInput.addEventListener('keydown', (e) => {
      // Permitir teclas de control y navegación
      const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', 'Home', 'End'];
      if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
        return;
      }
      // Bloquear todo carácter que no sea número del 0 al 9 o barra diagonal
      if (!/^[0-9\/]$/.test(e.key)) {
        e.preventDefault();
      }
    });

    // 4.2 Filtrado en input y máscara inteligente DD/MM/AAAA
    traceDateInput.addEventListener('input', () => {
      let raw = traceDateInput.value.replace(/[^0-9\/]/g, '');
      
      // Si el usuario escribe dígitos continuos, aplicar formato DD/MM/AAAA
      const digits = raw.replace(/\D/g, '').slice(0, 8);
      if (raw.indexOf('/') === -1 && digits.length >= 2) {
        let formatted = digits.slice(0, 2);
        if (digits.length >= 4) {
          formatted += '/' + digits.slice(2, 4) + '/' + digits.slice(4, 8);
        } else if (digits.length > 2) {
          formatted += '/' + digits.slice(2);
        }
        raw = formatted;
      } else {
        raw = raw.slice(0, 10);
      }

      traceDateInput.value = raw;
      syncTextToNativeDate();
      saveState();
    });

    // 4.3 Control de pegado (bloquear letras pegadas)
    traceDateInput.addEventListener('paste', (e) => {
      e.preventDefault();
      const pasted = (e.clipboardData || window.clipboardData).getData('text');
      const clean = pasted.replace(/[^0-9\/]/g, '').slice(0, 10);
      traceDateInput.value = clean;
      syncTextToNativeDate();
      saveState();
    });
  }

  // 4.4 Disparador de Calendario Interactivo
  if (btnCalendarTrigger && traceNativeDate && traceDateInput) {
    btnCalendarTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      syncTextToNativeDate();
      try {
        if (typeof traceNativeDate.showPicker === 'function') {
          traceNativeDate.showPicker();
        } else {
          traceNativeDate.focus();
          traceNativeDate.click();
        }
      } catch (err) {
        traceNativeDate.focus();
        traceNativeDate.click();
      }
    });

    // Al seleccionar una fecha en el calendario
    traceNativeDate.addEventListener('change', () => {
      if (traceNativeDate.value) {
        const [year, month, day] = traceNativeDate.value.split('-');
        traceDateInput.value = `${day}/${month}/${year}`;
        saveState();
      }
    });
  }

  // 5. Persistencia en LocalStorage para inspectores de planta
  const STORAGE_KEY = 'hip_lock_qc_state_v1';
  const sigField = document.getElementById('inspector-signature');
  const dateField = document.getElementById('inspector-date');
  const qtyConforme = document.getElementById('qty-conforme');
  const qtyNoConforme = document.getElementById('qty-no-conforme');
  const obsField = document.querySelector('.obs-lines');

  function saveState() {
    const state = {
      checks: Array.from(checkboxes).map(c => c.checked),
      qtyConforme: qtyConforme ? qtyConforme.value : '1',
      qtyNoConforme: qtyNoConforme ? qtyNoConforme.value : '0',
      obs: obsField ? obsField.innerText : '',
      signature: sigField ? sigField.innerText : '',
      date: dateField ? dateField.innerText : '',
      traceDate: traceDateInput ? traceDateInput.value : '29/09/2026'
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('LocalStorage no disponible');
    }
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const state = JSON.parse(saved);
        if (state.checks) {
          checkboxes.forEach((cb, idx) => {
            if (state.checks[idx] !== undefined) {
              cb.checked = state.checks[idx];
            }
          });
        }
        if (state.qtyConforme !== undefined && qtyConforme) {
          qtyConforme.value = state.qtyConforme;
        }
        if (state.qtyNoConforme !== undefined && qtyNoConforme) {
          qtyNoConforme.value = state.qtyNoConforme;
        }
        if (state.obs && obsField) {
          obsField.innerText = state.obs;
        }
        if (state.signature && sigField) {
          sigField.innerText = state.signature;
        }
        if (state.date && dateField) {
          dateField.innerText = state.date;
        }
        if (state.traceDate && traceDateInput) {
          traceDateInput.value = state.traceDate;
          syncTextToNativeDate();
        }
      }
    } catch (e) {
      console.warn('Error al cargar estado previo');
    }
  }

  checkboxes.forEach(cb => cb.addEventListener('change', saveState));
  if (qtyConforme) qtyConforme.addEventListener('input', saveState);
  if (qtyNoConforme) qtyNoConforme.addEventListener('input', saveState);
  if (obsField) obsField.addEventListener('input', saveState);
  if (sigField) sigField.addEventListener('input', saveState);
  if (dateField) dateField.addEventListener('input', saveState);

  // 6. Reiniciar Puntos
  btnReset.addEventListener('click', () => {
    if (confirm('¿Desea reiniciar todas las marcas de verificación de los 9 puntos?')) {
      checkboxes.forEach(cb => cb.checked = false);
      saveState();
    }
  });

  loadState();
});
