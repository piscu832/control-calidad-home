/**
 * LÓGICA DE INTERACCIÓN MODULAR - LÍNEA DE TIEMPO HORIZONTAL
 * Empresa: VILLALBA HNOS. IMPLANTES S.A.
 * Barrido continuo e interactividad por hover y clic sin saltos estructurales
 */

(function() {
  function initTimeline() {
    var milestonesData = {
      1: {
        year: '1966',
        phaseTag: 'HITO 01 — ORIGEN HISTÓRICO',
        title: '1966 — Fundación por Arnaldo y Norberto Villalba',
        pill: 'Pilar Familiar & Industrial',
        objective: 'Fundación por Arnaldo y Norberto Villalba en Caseros con foco en instrumental quirúrgico y osteosíntesis de precisión.',
        products: 'Instrumental quirúrgico especializado, fresas para traumatología y fijaciones óseas tempranas de alta resistencia mecánica.',
        quality: 'Control dimensional al 100%, ajuste micrométrico manual y ensayos funcionales con cirujanos ortopédicos pioneros.',
        logistics: 'Planta Matriz en Caseros con abastecimiento inicial a hospitales metropolitanos y clínicas ortopédicas especializadas.'
      },
      2: {
        year: '1985',
        phaseTag: 'HITO 02 — EXPANSIÓN TRAUMATOLÓGICA',
        title: '1985 — Especialización en Cadera y Osteosíntesis',
        pill: 'Implantes Reconstructivos',
        objective: 'Desarrollo de los primeros sistemas estandarizados de reemplazo de cadera y elementos de osteosíntesis interna hospitalaria.',
        products: 'Prótesis femorales de cadera, clavos endomedulares, placas de compresión dinámica y tornillos corticales normalizados.',
        quality: 'Adopción de aceros inoxidables grado quirúrgico 316L con trazabilidad metalúrgica certificada por colada y forja.',
        logistics: 'Creación de las primeras rutas de distribución hacia el interior del país y vínculo estrecho con sociedades médicas.'
      },
      3: {
        year: '2002',
        phaseTag: 'HITO 03 — SALTO TECNOLÓGICO',
        title: '2002 — Centros de Mecanizado CNC & Normas ANMAT / ISO',
        pill: 'Precisión Computarizada',
        objective: 'Reconversión tecnológica incorporando centros de mecanizado multieje CNC, salas limpias y sistemas de calidad certificada.',
        products: 'Vástagos femorales anatómicos, cotilos no cementados con recubrimientos bioactivos y tornillería de titanio de precisión.',
        quality: 'Certificación de Buenas Prácticas ANMAT y acreditación según norma internacional ISO 13485 de productos médicos.',
        logistics: 'Sistema de trazabilidad individual por número de serie y lote para control y seguimiento hospitalario estricto.'
      },
      4: {
        year: '2015',
        phaseTag: 'HITO 04 — ARTROPLASTIA AVANZADA & RED FEDERAL',
        title: '2015 — Rodilla ANV II, Hip-Lock & Sucursales Directas',
        pill: 'Artroplastia de Avanzada',
        objective: 'Lanzamiento del sistema multicorte Rodilla ANV II y prótesis autobloqueante de cadera Hip-Lock con despliegue federal.',
        products: 'Sistema completo Rodilla ANV II con instrumental multicorte, vástagos Hip-Lock pulidos y rugosos de titanio Grado 5.',
        quality: 'Ensayos mecánicos de fatiga según normas ASTM F136 e ISO 5832 con validación en bancos biomecánicos oficiales.',
        logistics: 'Apertura de sucursales oficiales en Mar del Plata, Bahía Blanca, La Plata y Rosario para provisión inmediata.'
      },
      5: {
        year: 'ACTUALIDAD',
        phaseTag: 'HITO 05 — VANGUARDIA BIOMÉDICA & COMUNIDAD',
        title: '2026 — Workshops Hospitalarios, Capacitaciones & Excelencia',
        pill: 'Liderazgo Nacional',
        objective: 'Más de seis décadas liderando el mercado médico nacional con fabricación de clase mundial y asistencia en quirófano.',
        products: 'Cajas de instrumental quirúrgico ergonómico, instrumental radiolúcido, tutores externos biplanares y a medida.',
        quality: 'Workshops continuos de limpieza y esterilización hospitalaria, con asesoramiento técnico directo en intervenciones.',
        logistics: 'Red logística integral con cobertura en las 23 provincias argentinas y coordinación médica permanente 24/7.'
      }
    };

    var nodes = document.querySelectorAll('.ribbon-node');
    var cards = document.querySelectorAll('.timeline-card');

    var detailTag = document.getElementById('detailTag');
    var detailTitle = document.getElementById('detailTitle');
    var detailPill = document.getElementById('detailPill');
    var detailObjective = document.getElementById('detailObjective');
    var detailProducts = document.getElementById('detailProducts');
    var detailQuality = document.getElementById('detailQuality');
    var detailLogistics = document.getElementById('detailLogistics');

    var activeStep = 0; // Inicializar en 0 para forzar actualización limpia del Hito 1

    function setStep(stepNumber) {
      var step = parseInt(stepNumber, 10);
      if (isNaN(step) || step < 1 || step > 5) return;
      if (step === activeStep) return;
      activeStep = step;

      // Actualizar nodos del ribbon
      for (var i = 0; i < nodes.length; i++) {
        var nodeStep = parseInt(nodes[i].getAttribute('data-step'), 10);
        if (nodeStep === activeStep) {
          nodes[i].classList.add('is-active');
        } else {
          nodes[i].classList.remove('is-active');
        }
      }

      // Actualizar tarjetas
      for (var j = 0; j < cards.length; j++) {
        var cardStep = parseInt(cards[j].getAttribute('data-step'), 10);
        if (cardStep === activeStep) {
          cards[j].classList.add('is-active');
        } else {
          cards[j].classList.remove('is-active');
        }
      }

      // Actualizar panel de detalle
      var data = milestonesData[activeStep];
      if (data && detailTitle) {
        detailTag.textContent = data.phaseTag;
        detailTitle.textContent = data.title;
        detailPill.textContent = data.pill;
        detailObjective.textContent = data.objective;
        detailProducts.textContent = data.products;
        detailQuality.textContent = data.quality;
        detailLogistics.textContent = data.logistics;
      }
    }

    // Interacción sobre nodos (hover y clic)
    for (var k = 0; k < nodes.length; k++) {
      (function(node) {
        var step = node.getAttribute('data-step');
        node.addEventListener('mouseenter', function() { setStep(step); });
        node.addEventListener('click', function() { setStep(step); });
      })(nodes[k]);
    }

    // Interacción sobre tarjetas (hover y clic)
    for (var m = 0; m < cards.length; m++) {
      (function(card) {
        var step = card.getAttribute('data-step');
        card.addEventListener('mouseenter', function() { setStep(step); });
        card.addEventListener('click', function() { setStep(step); });
      })(cards[m]);
    }

    // Barrido horizontal continuo e ininterrumpido sobre toda la sección
    var timelineSection = document.getElementById('timelineSection');
    if (timelineSection) {
      timelineSection.addEventListener('mousemove', function(e) {
        var rect = timelineSection.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var width = rect.width;
        if (width <= 0) return;
        var ratio = Math.max(0, Math.min(0.999, x / width));
        var step = Math.floor(ratio * 5) + 1;
        setStep(step);
      });
    }

    // Inicializar limpiamente en el Hito 1
    setStep(1);
  }

  // Carga asíncrona dual segura: funciona inmediatamente o tras DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTimeline);
  } else {
    initTimeline();
  }
})();
