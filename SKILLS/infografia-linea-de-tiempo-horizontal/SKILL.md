---
name: infografia-linea-de-tiempo-horizontal
description: >-
  Estándar y especificación para el diseño y desarrollo de infografías de línea de tiempo
  horizontal procesal continua, en versión exclusivamente clara (Light), sin barras de controles
  y con animación fluida activada al pasar el cursor (hover).
---

# Skill: Infografía de Línea de Tiempo Horizontal Interactiva (Versión Light & Hover)

Esta skill define las especificaciones técnicas, directivas de diseño visual y desarrollo para crear infografías basadas en una **línea de tiempo horizontal procesal continua** (*Timeline Process Ribbon*), con hitos alternados arriba/abajo, barra continua en degradé cromático multicolor, **en versión exclusivamente clara (Light), sin controles ni barras superiores, activada fluidamente por el movimiento del cursor (hover)**.

---

## 1. Reglas Maestras Obligatorias de Composición (REGLAS DE ORO)

> [!IMPORTANT]
> **REGLAS DEFINITIVAS DE DISEÑO CONFIRMADAS POR EL USUARIO:**
> 1. **VERSIÓN EXCLUSIVAMENTE LIGHT:**
>    - No implementar modo oscuro / Blueprint ni selectores de temas.
>    - Base luminosa, fondo de página suave (`#f1f5f9`), hoja de presentación blanca pura (`#ffffff`) con tarjetas y acentos de color limpios.
> 2. **SIN BARRAS DE HERRAMIENTAS NI CONTROLES EXTERNOS:**
>    - **NO incluir barra superior de herramientas (`.top-toolbar`):** Sin códigos de auditoría, sin botones de "Anterior" / "Siguiente", sin botón de imprimir.
>    - **NO incluir encabezado corporativo pesado ni badges previos (`.intro-tag`):** Sin logotipos gigantes, sin pastillas previas al título (como "INFOGRAFÍA ESTRUCTURAL DE PROCESOS"), sin metadatos de planta. El título principal debe iniciar limpiamente.
>    - **NO incluir pastillas de métricas ni estadísticas (`.intro-badges` / `.stat-pill`):** El encabezado debe estar libre de cajas con cifras (+60 años, 100%, etc.), mostrando únicamente el título principal y la descripción explicativa limpia.
>    - **NO incluir footer de auditoría (`.audit-footer`):** Sin firmas de inspectores, sellos de dictamen ni fechas de revisión.
>    - **NO incluir tarjetas secundarias de pilares (`.corporate-pillars-section`):** Sin bloques adicionales de misión o sucursales que saturen la vista.
> 3. **INTERACTIVIDAD EXCLUSIVAMENTE AL PASAR EL CURSOR (HOVER):**
>    - Toda la animación y actualización de datos ocurre al pasar el cursor del ratón sobre los nodos o las tarjetas.
>    - Sin clics forzados ni botones de navegación: la experiencia debe ser fluida, reactiva e intuitiva al simple movimiento del puntero.
> 4. **ESTRUCTURA VISUAL PURA Y COMPACTA (DE ARRIBA A ABAJO):**
>    - **A.** Título del proceso + Subtítulo breve explicativo (sin píldoras de métricas ni tags).
>    - **B.** Fila superior de tarjetas (Hitos impares 1, 3, 5).
>    - **C.** Pista central *Ribbon* en degradé continuo con números, separadores circulares blancos y flechas indicadoras alternadas.
>    - **D.** Fila inferior de tarjetas (Hitos pares 2, 4).
>    - **E.** Cierre con la Ficha Técnica Dinámica (`.step-detail-panel`) que responde instantáneamente al cursor.

---

## 2. Anatomía y Componentes Gráficos

```
                  [ TÍTULO HITO 1 ]       [ TÍTULO HITO 3 ]       [ TÍTULO HITO 5 ]
                  Descripción paso 1      Descripción paso 3      Descripción paso 5
                          ▲                       ▲                       ▲
                          │                       │                       │
      ╭──────────┬───▲────┴─────┬───▲─────┬───▲───┴─────┬───▲─────┬───▲───┴──────────╮
      │   2021   │ (O)   2022   │ (O)    2023   │ (O)   2024    │ (O)   2025       │  ◄── Barra Continua en Degradé
      ╰──────────┴───▼────┬─────┴───▼─────┴───▼───┬─────┴───▼─────┴───▼──────────────╯
                          │                       │
                          ▼                       ▼
                  [ TÍTULO HITO 2 ]       [ TÍTULO HITO 4 ]
                  Descripción paso 2      Descripción paso 4
```

### A. Barra Continua en Degradé (*Ribbon Track*)
- Forma de cápsula alargada con puntas redondeadas (`border-radius: 9999px; height: 54px;`).
- **Gradiente Lineal Continuo de 5 Fases (Paleta Institucional Médica Villalba):**
  - Fase 1: Azul marino corporativo insignia (`#193f89`).
  - Fase 2: Azul real médico quirúrgico (`#1d58a8`).
  - Fase 3: Azul cerúleo / océano clínico (`#0284c7`).
  - Fase 4: Cian quirúrgico radiante (`#0ea5e9`).
  - Fase 5: Índigo tecnológico / IA & vanguardia (`#6366f1`).
- **Separadores Circulares Blancos (*Node Dots*):** Discos blancos (`width: 22px; height: 22px; border-radius: 50%; box-shadow: 0 2px 6px rgba(0,0,0,0.18);`) centrados simétricamente entre cada segmento.
- **Flechas Indicadoras Triangulares (*Chevrons*):**
  - Impares (1, 3, 5): Apuntan hacia **ARRIBA** hacia las tarjetas superiores.
  - Pares (2, 4): Apuntan hacia **ABAJO** hacia las tarjetas inferiores.
  - Cada flecha coincide con el color exacto del segmento del gradiente donde nace.

### B. Tarjetas Alternadas
- Cada tarjeta contiene una etiqueta de fase, el año/número, título en mayúsculas en el color de su fase y texto explicativo en tono pizarra neutro (`#334155`).

### C. Ficha Técnica Dinámica (`.step-detail-panel`)
- Panel inferior que resume la información ampliada (hito estratégico, productos/alcance, calidad y logística) del nodo sobre el cual se encuentra posado el cursor.

---

## 3. Tokens CSS de la Versión Light

```css
:root {
  /* Fases cromáticas del degradé (Paleta Oficial Villalba) */
  --tl-step-1: #193f89;
  --tl-step-2: #1d58a8;
  --tl-step-3: #0284c7;
  --tl-step-4: #0ea5e9;
  --tl-step-5: #6366f1;

  /* Degradé continuo */
  --tl-gradient-track: linear-gradient(
    90deg,
    var(--tl-step-1) 0%,
    var(--tl-step-2) 25%,
    var(--tl-step-3) 50%,
    var(--tl-step-4) 75%,
    var(--tl-step-5) 100%
  );

  /* Superficies Light */
  --bg-page: #f1f5f9;
  --sheet-bg: #ffffff;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #64748b;
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --panel-bg: #f8fafc;
  --panel-border: #cbd5e1;
  --accent-blue: #0284c7;

  /* Tipografías */
  --font-heading: 'Chakra Petch', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

---

## 4. Lógica de Interacción al Pasar el Cursor (app.js)

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const nodes = document.querySelectorAll('.ribbon-node');
  const cards = document.querySelectorAll('.timeline-card');
  const detailPanel = document.getElementById('stepDetailPanel');

  function setHoverStep(stepNumber) {
    const step = parseInt(stepNumber, 10);
    if (isNaN(step)) return;

    // Actualizar nodos
    nodes.forEach(node => {
      node.classList.toggle('is-active', parseInt(node.getAttribute('data-step'), 10) === step);
    });

    // Actualizar tarjetas
    cards.forEach(card => {
      card.classList.toggle('is-active', parseInt(card.getAttribute('data-step'), 10) === step);
    });

    // Actualizar ficha técnica con los datos del hito
    updateDetailPanel(step);
  }

  // Activar con hover sobre nodos
  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => setHoverStep(node.getAttribute('data-step')));
  });

  // BARRIDO HORIZONTAL CONTINUO E ININTERRUMPIDO
  // Permite que al desplazar el cursor horizontalmente de izquierda a derecha a cualquier
  // altura de la infografía, los hitos 1 a 5 respondan fluidamente sin saltos ni zonas muertas
  const timelineSection = document.getElementById('timelineSection');
  if (timelineSection) {
    timelineSection.addEventListener('mousemove', (e) => {
      const rect = timelineSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      if (width <= 0) return;
      const ratio = Math.max(0, Math.min(0.999, x / width));
      const step = Math.floor(ratio * 5) + 1;
      setHoverStep(step);
    });
  }

  // Inicializar en el primer hito
  setHoverStep(1);
});
```

---

## 5. Inmovilidad Estructural Absoluta (0px Layout Shift en Hover)
Para garantizar una experiencia visualmente sólida e imperturbable donde la estructura de la infografía **nunca salte ni se desplace**:
1. **Cero desplazamientos físicos en hover:**
   - **PROHIBIDO** el uso de `transform: translateY(...)` en tarjetas o flechas indicadoras al activarse.
   - **PROHIBIDO** el uso de `transform: scale(...)` en los textos de años (`.node-year`) o separadores circulares.
   - La activación visual debe realizarse **exclusivamente mediante resplandores cromáticos, bordes y sombras** (`box-shadow`, `border-color`, `filter: drop-shadow`, `text-shadow`).
2. **Alturas bloqueadas y balanceadas:**
   - Las filas de tarjetas (`.timeline-row`) deben tener `min-height: 215px;` y `align-items: stretch;`.
   - Las tarjetas (`.timeline-card`) deben tener `height: 100%; min-height: 200px;` con `display: flex; flex-direction: column; justify-content: space-between;`.
   - Las cajas de detalle de la ficha técnica (`.detail-box`) deben tener `height: 125px; min-height: 125px; max-height: 125px; overflow: hidden; box-sizing: border-box;`.
   - El panel de detalle (`.step-detail-panel`) debe tener `height: 245px; min-height: 245px; max-height: 245px; overflow: hidden; box-sizing: border-box;`.
3. **Barrido Horizontal Continuo e Ininterrumpido:**
   - Al pasar el cursor horizontalmente de izquierda a derecha sobre cualquier altura, el cálculo por ratio X (`ratio * 5`) garantiza una transición suave y continua entre hitos (1 ➔ 2 ➔ 3 ➔ 4 ➔ 5) sin saltos de espaciadores.
   - Los elementos secundarios como `.node-separator` y `.node-arrow` deben llevar siempre `pointer-events: none;` para evitar interrupciones o micro-saltos en el barrido.
4. **Prohibición de `transition: all`:**
   - Nunca aplicar `transition: all` sobre contenedores con texto dinámico. Emplear únicamente transiciones puntuales: `transition: border-color 0.2s ease, box-shadow 0.2s ease;`.
5. **Estabilidad del scrollbar:**
   - Aplicar siempre `html { overflow-y: scroll; }` para evitar que la aparición o desaparición de barras de scroll desplace horizontalmente la infografía.
6. **Integración fluida sin marco blanco exterior:**
   - El contenedor maestro (`.page-sheet` o `#wp-villalba-timeline`) debe tener `background: transparent; border: none; box-shadow: none; border-radius: 0; padding: 10px 0;`.
   - Prohibido encerrar la infografía en una tarjeta con marco perimetral blanco y sombra, ya que al incrustarse en sitios web (WordPress / temas) genera un marco artificial redundante.

---

## 6. Checklist de Verificación de Calidad

- [ ] ¿La presentación es exclusivamente **Light** (sin temas oscuros ni botones de conmutación)?
- [ ] ¿Está **libre de barras de herramientas**, botones de Anterior/Siguiente y botones de imprimir?
- [ ] ¿Está **libre de encabezados pesados**, firmas de auditoría de planta y tarjetas de pilares corporativos?
- [ ] ¿La interactividad responde **inmediatamente al pasar el cursor (hover)** sobre cualquier nodo o tarjeta?
- [ ] ¿La estructura es **100% inmóvil (0px de movimiento/salto)** al pasar de un hito a otro?
- [ ] ¿La barra central presenta el degradé continuo en 5 fases con separadores circulares blancos y flechas indicadoras alternadas arriba/abajo?
- [ ] ¿La infografía cierra de forma limpia y directa con la ficha técnica dinámica?
