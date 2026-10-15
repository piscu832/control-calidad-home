# Memoria Técnica: Skill Infografía Línea de Tiempo Horizontal (Estándar Definitivo)

Fecha: 2026-10-09
Autor: Antigravity Agent
Proyecto: Creador de Infografías / VILLALBA HNOS. IMPLANTES S.A.

---

## 1. Directivas Maestras Aprendidas (Reglas Inmutables para Líneas de Tiempo)

El usuario confirmó los siguientes requisitos estrictos para **TODAS las infografías de Línea de Tiempo Horizontal**:

1. **Versión Exclusivamente Light:**
   - Sin modo Blueprint / Taller nocturno.
   - Sin botones ni selectores de tema.
   - Base blanca `#ffffff` y fondo de página claro `#f1f5f9`.
2. **Sin Barra Superior ni Controles Manuales:**
   - Sin barra fija superior (`.top-toolbar`).
   - Sin botones de "Anterior" ni "Siguiente".
   - Sin botón de "Imprimir A4".
   - Sin códigos de auditoría o badges en barra superior.
3. **Sin Encabezado Institucional Pesado, Badges Previos, Pastillas de Métricas ni Footers de Auditoría:**
   - Sin `.company-header` con logotipos gigantes o fichas de metadatos de planta.
   - Sin pastillas o etiquetas previas al título (ej. `.intro-tag` con textos como "INFOGRAFÍA ESTRUCTURAL DE PROCESOS"). El título principal debe iniciar directamente.
   - Sin pastillas o cajas de estadísticas métricas en el encabezado (ej. `.intro-badges` con "+60 Años", "100% Cobertura", etc.). La sección introductoria consta únicamente del título principal y el párrafo explicativo limpio.
   - Sin `.audit-footer` con firmas de inspectores ni dictámenes sellados.
   - Sin `.corporate-pillars-section` con tarjetas secundarias redundantes.
4. **Interactividad Exclusivamente por Movimiento del Cursor (Hover):**
   - La infografía reacciona de inmediato al pasar el puntero sobre cualquier segmento de la barra (`.ribbon-node`) o sobre cualquiera de las tarjetas (`.timeline-card`).
   - El nodo se ilumina, la flecha indicadora resalta y el panel inferior de ficha técnica (`.step-detail-panel`) se actualiza al instante con los datos de ese hito.
5. **Inmovilidad Estructural Absoluta (0px Layout Shift):**
   - La estructura general, las tarjetas y la barra deben permanecer **completamente estáticas** sin saltos ni desplazamientos verticales (`0px delta`).
   - Prohibido `transform: translateY` en tarjetas y flechas, o `scale` que altere dimensiones.
   - Alturas mínimas fijadas en tarjetas (`min-height: 200px;`), filas (`min-height: 215px;`), cajas de detalle (`min-height: 125px;`) y panel (`min-height: 240px;`).
   - `html { overflow-y: scroll; }` para evitar oscilaciones de scrollbar.
   - Textos de los 5 hitos rigurosamente armonizados en cantidad de caracteres y líneas.
6. **Tipografía Inter & Inter Black:**
   - La familia tipográfica rectora es **Inter** en todos sus pesos (300 a 900).
   - **Inter Black (`font-weight: 900;`)**: Aplicado a título principal (`.main-timeline-title`), cifras estadísticas (`.stat-number`), años en la pista ribbon (`.node-year`), títulos de tarjeta (`.card-title`) y título de ficha técnica (`.detail-title`).
   - **Inter ExtraBold (`font-weight: 800;`)**: Aplicado a etiquetas de año (`.card-year-tag`) y subtítulos de detalle (`.detail-subhead`).
   - **Inter Regular/Medium (`font-weight: 400`, `500`, `600`)**: Aplicado a descripciones, badges y cuerpo de texto.
7. **Integración Fluida sin Marco Exterior (Cero Marco Blanco / No Outer Card):**
   - El contenedor raíz (`.page-sheet` o `#wp-villalba-timeline`) debe tener `background: transparent; border: none; box-shadow: none; border-radius: 0; padding: 10px 0;`.
   - Prohibido encerrar la infografía completa en una hoja o tarjeta con fondo blanco, bordes y sombra perimetral, ya que en CMS (WordPress, Kadence, etc.) produce un "marco blanco" artificial redundante.
   - La infografía se integra 100% limpia y nativa directamente sobre el lienzo de la página web.
8. **Barrido Horizontal Continuo e Ininterrumpido (Cero Saltos al Mover el Mouse):**
   - Al pasar el cursor de izquierda a derecha a **cualquier altura** de la infografía (tarjetas de arriba, cinta central, tarjetas de abajo o espaciadores), el contenedor maestro `.timeline-master-container` escucha el evento `mousemove` y mapea el ratio horizontal `x / width` en 5 franjas proporcionales de 20%.
   - Esto garantiza que el usuario experimente una progresión suave y secuencial 1 ➔ 2 ➔ 3 ➔ 4 ➔ 5 sin saltarse ningún hito ni experimentar vacíos o brincos al atravesar espaciadores.
   - Los elementos decorativos como `.node-separator` y `.node-arrow` tienen `pointer-events: none;` para no generar interferencias ni parpadeos.
   - Las alturas del panel (`245px`) y de las cajas (`125px`) están rígidamente fijadas con `overflow: hidden;` para garantizar 0px layout shift.

---

## 2. Parámetros Gráficos del Patrón Ribbon

| Elemento | Especificación | Valores |
| :--- | :--- | :--- |
| **Pista Continua (Ribbon)** | Cápsula alargada | `border-radius: 9999px; height: 54px;` |
| **Degradé 5 Fases Oficial** | Azul marino a cian e índigo | `#193f89` (Marino) ➔ `#1d58a8` (Real) ➔ `#0284c7` (Cerúleo) ➔ `#0ea5e9` (Cian) ➔ `#6366f1` (Índigo IA) |
| **Separadores de Nodos** | Círculos blancos en relieve | `width: 22px; height: 22px; border-radius: 50%; background: #ffffff;` |
| **Flechas (Chevrons)** | Alternadas arriba/abajo | Impares (1, 3, 5) arriba; Pares (2, 4) abajo con color de fase |
| **Ficha Técnica Inferior** | Cierre dinámico elegante | 4 dimensiones: Hito, Alcance/Productos, Calidad, Logística |

---

## 3. Archivos Maestros
- [.agents/skills/infografia-linea-de-tiempo-horizontal/SKILL.md](file:///a:/PROYECTOS%20ANTIGRAVITY/CREADOR%20DE%20INFOGRAF%C3%8DAS/.agents/skills/infografia-linea-de-tiempo-horizontal/SKILL.md)
- [SKILLS/infografia-linea-de-tiempo-horizontal/SKILL.md](file:///a:/PROYECTOS%20ANTIGRAVITY/CREADOR%20DE%20INFOGRAF%C3%8DAS/SKILLS/infografia-linea-de-tiempo-horizontal/SKILL.md)
- [PROYECTOS/ARTÍSTICOS/Línea de tiempo/index.html](file:///a:/PROYECTOS%20ANTIGRAVITY/CREADOR%20DE%20INFOGRAF%C3%8DAS/PROYECTOS/ART%C3%8DSTICOS/L%C3%ADnea%20de%20tiempo/index.html)
- [PROYECTOS/ARTÍSTICOS/Línea de tiempo/style.css](file:///a:/PROYECTOS%20ANTIGRAVITY/CREADOR%20DE%20INFOGRAF%C3%8DAS/PROYECTOS/ART%C3%8DSTICOS/L%C3%ADnea%20de%20tiempo/style.css)
- [PROYECTOS/ARTÍSTICOS/Línea de tiempo/app.js](file:///a:/PROYECTOS%20ANTIGRAVITY/CREADOR%20DE%20INFOGRAF%C3%8DAS/PROYECTOS/ART%C3%8DSTICOS/L%C3%ADnea%20de%20tiempo/app.js)
- [PROYECTOS/ARTÍSTICOS/Línea de tiempo/wordpress_embed.html](file:///a:/PROYECTOS%20ANTIGRAVITY/CREADOR%20DE%20INFOGRAF%C3%8DAS/PROYECTOS/ART%C3%8DSTICOS/L%C3%ADnea%20de%20tiempo/wordpress_embed.html)
- [PROYECTOS/ARTÍSTICOS/Línea de tiempo/wordpress_shortcode.php](file:///a:/PROYECTOS%20ANTIGRAVITY/CREADOR%20DE%20INFOGRAF%C3%8DAS/PROYECTOS/ART%C3%8DSTICOS/L%C3%ADnea%20de%20tiempo/wordpress_shortcode.php)
