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

  // 4. Persistencia en LocalStorage para inspectores de planta
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
      date: dateField ? dateField.innerText : ''
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

  // 5. Reiniciar Puntos
  btnReset.addEventListener('click', () => {
    if (confirm('¿Desea reiniciar todas las marcas de verificación de los 9 puntos?')) {
      checkboxes.forEach(cb => cb.checked = false);
      saveState();
    }
  });

  loadState();
});
