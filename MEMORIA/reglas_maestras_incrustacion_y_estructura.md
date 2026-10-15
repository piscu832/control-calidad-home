# REGLAS MAESTRAS DE AISLAMIENTO ESTRUCTURAL E INCRUSTACIÓN WEB (OBLIGATORIAS PARA TODAS LAS INFOGRAFÍAS)

**Fecha de Establecimiento:** 13 de Octubre de 2026  
**Ámbito:** Todas las infografías técnicas, hojas de calidad, mapas y líneas de tiempo (`PROYECTOS/*`).

---

## 1. Problema Histórico Registrado
Al incrustar la infografía en el sitio web institucional de la empresa (o mediante constructores como WordPress, Elementor, Divi), se generaban **errores graves de estructura**:
1. **Decapitación y corte superior:** El norte de las piezas o los títulos quedaban cortados y ocultos detrás de la barra de navegación (*sticky navbar*) del sitio.
2. **Invasión de estilos globales:** Los selectores universales `*, *::before, *::after` y modificaciones sobre la etiqueta `body` eliminaban los márgenes y paddings del menú, botones y pies de página de la web anfitriona.

---

## 2. Reglas Ineludibles para TODAS las Infografías

### Regla 1: Prohibición de Reseteo Universal Agresivo (`*`)
- **PROHIBIDO:** `*, *::before, *::after { margin: 0; padding: 0; }` a nivel raíz.
- **OBLIGATORIO:** Encapsular todo reset dentro del contenedor raíz de la infografía:
  ```css
  .infographic-root,
  .infographic-root *,
  .infographic-root *::before,
  .infographic-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  ```

### Regla 2: Prohibición de Secuestrar el `body` o `html` con Layouts Flexbox
- **PROHIBIDO:** `body { min-height: 100vh; display: flex; align-items: center; justify-content: center; }`.
- **Razón:** El centrado vertical flexbox en `body` genera *scroll clipping*, empujando la parte superior fuera del viewport cuando el contenedor o iframe es más pequeño que la pieza.
- **OBLIGATORIO:** `html, body` solo deben llevar estilos transparentes y neutrales:
  ```css
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    background: transparent !important;
    background-color: transparent !important;
  }
  ```

### Regla 3: Alineación Vertical Segura (`align-items: flex-start`)
- Todo contenedor flexbox debe alinear los elementos iniciando desde la parte superior (`align-items: flex-start;`).
- Esto garantiza que títulos, logotipos y cabeceras de la infografía fluyan de arriba hacia abajo y **nunca queden recortados bajo barras de navegación fijas**.

### Regla 4: Auto-Escalado Proporcional Responsivo
- No forzar anchos fijos que requieran alturas desmedidas.
- Emplear siempre `aspect-ratio` nativo y topes responsivos bidireccionales:
  ```css
  .infographic-container {
    position: relative;
    width: 100%;
    max-width: min(860px, calc(90vh * [ratio_ancho_alto]));
    aspect-ratio: [ancho] / [alto];
    margin: 0 auto;
    overflow: visible;
  }
  ```

### Regla 5: Capas Vectoriales SVG con `overflow: visible`
- Para evitar que flechas, balizas circulares o insignias/badges desplegados en hover se recorten si tocan los extremos de la caja `viewBox`:
  ```css
  .svg-overlay {
    overflow: visible;
    pointer-events: none;
  }
  ```

### Regla 6: Transparencia Total y Canal Alfa Puro en Recursos Raster
- En infografías flotantes o mapas, cualquier imagen base rasterizada debe tener fondo exterior con canal alfa puro (`alpha = 0`) y desmezclado matemático de bordes (*alpha unblending*), para que se integre de forma nativa en cualquier fondo sin halos blancos ni bordes aserrados.
