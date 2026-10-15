/**
 * MAPA DE DISTRIBUIDORES - VILLALBA HNOS. IMPLANTES S.A.
 * Lógica interactiva de despliegue de flechas al pasar el cursor (hover)
 */

document.addEventListener('DOMContentLoaded', () => {
  const hubItems = document.querySelectorAll('.hub-item');

  hubItems.forEach(item => {
    // Al pasar el cursor sobre el punto o insignia
    item.addEventListener('mouseenter', () => {
      item.classList.add('is-active');
    });

    // Al retirar el cursor
    item.addEventListener('mouseleave', () => {
      item.classList.remove('is-active');
    });

    // Soporte para dispositivos táctiles (tap para activar/desactivar)
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasActive = item.classList.contains('is-active');
      hubItems.forEach(i => i.classList.remove('is-active'));
      if (!wasActive) {
        item.classList.add('is-active');
      }
    });
  });

  // Cerrar punto activo al tocar fuera en pantallas táctiles
  document.addEventListener('click', () => {
    hubItems.forEach(i => i.classList.remove('is-active'));
  });
});
