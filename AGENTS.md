# REGLAS Y ESPECIFICACIONES GENERALES DEL AGENTE

## 1. Reglas Fundamentales de Operación
1. **Si te falta un dato, pregunta en lugar de inventar:**
   - Ante especificaciones ausentes, formatos no definidos, marcas o tolerancias dudosas, consultar siempre al usuario antes de asumir o generar contenido arbitrario.
2. **Apunta por tu cuenta todo lo que te convenga recordar:**
   - Mantener actualizada la carpeta `MEMORIA/` con notas estructuradas, requerimientos confirmados por el usuario, decisiones de diseño tomadas y datos técnicos de cada proyecto.

---

## 2. Especificaciones Generales para Definir una Infografía

Cada infografía técnica o divulgativa creada en este entorno debe estructurarse conforme a los siguientes estándares de diseño, metrología y desarrollo web:

### A. Estructura y Distribución de Secciones
1. **Encabezado Institucional y Metadatos de Trazabilidad:**
   - **Logotipo y Empresa Obligatorios:** Usar **SIEMPRE** la imagen oficial del logotipo (`logo_villalba.png`, respaldada en `CONTEXTO/logo_villalba.png`). La empresa se llama **SIEMPRE** `VILLALBA HNOS. IMPLANTES S.A.` en el cuadrante superior izquierdo, acompañada debajo por el eslogan: *"Innovación, liderazgo y experiencia al servicio de la salud."*.
   - Código de documento normativo, versión/revisión y estado de auditoría (ej. `QC-HL-08 REV. 04 / 2026`).
   - Título principal en mayúsculas destacado a color y subtítulo con la especificación técnica/materiales.
   - Grilla editable de trazabilidad: Pieza/Lote, Fecha de inspección, Inspector responsable, Orden de compra, Remito/Despacho.
2. **Introducción y Fundamento Técnico:**
   - Tarjeta destacada con el concepto clave: qué es la pieza/procedimiento, objetivos de control y relevancia biomecánica o funcional.
3. **Cuerpo Visual Central / Diagrama Anatómico o Blueprint:**
   - Gráfico vectorial SVG de alta definición con múltiples vistas (ej. Frontal A-P y Lateral Perfil).
   - Fondo técnico milimetrado o retícula con ejes de simetría.
   - Llamadas visuales numeradas (balizas circulares con flechas guía) conectadas exactamente a cada cota o punto de interés.
   - Bloque lateral con las directivas ineludibles y reglas de oro del taller.
4. **Matriz Detallada de Puntos de Control:**
   - Tarjetas individuales para cada punto numerado en grilla equilibrada.
   - Contenido estándar por tarjeta:
     - Número identificador y nombre técnico del punto.
     - Ubicación o zona anatómica.
     - *¿Qué se mide?*: parámetros geométricos, cotas y tolerancias explícitas (ej. ángulos, diámetros, profundidades).
     - *Instrumental necesario*: herramientas metrológicas específicas con su precisión requerida (calibres digitales, micrómetros, bloques patrón, plantillas, V-block, comparadores).
     - *Criterios de alerta o rechazo*: límites dimensionales críticos y directivas de acción (ej. qué hacer ante holgura, derivación a ingeniería vs. rechazo directo por excentricidad).
     - Checkbox de verificación para seguimiento operativo.
5. **Secuencia Estandarizada de Control (Workflow):**
   - Flujo lineal o cronológico de paso de pieza con números de etapa y flechas indicadoras para optimizar tiempos de inspección.
6. **Verificación Visual Final y Dictamen de Calidad:**
   - Checklist de verificación visual al 100% de la pieza (rebabas, rayones, acabado superficial, falta de llenado, óxido o contaminación).
   - **Sellos de Dictamen y Cantidades por Categoría:**
     - Sellos de dictamen (*✓ CONFORME* en verde esmeralda y *✕ NO CONFORME* en carmesí) **permanentemente activos y encendidos simultáneamente** (con bordes sólidos, fondo coloreado tenue y 100% de opacidad), sin exclusión mutua de radio buttons, ya que en una inspección de lote conviven piezas conformes y no conformes.
     - **Campos numéricos interactivos de cantidad:** Cada categoría debe incluir obligatoriamente su campo numérico para registrar piezas (**`CANT. CONFORME`** y **`CANT. NO CONFORME`**), con etiqueta de unidad (`piezas`), borde guía lateral cromático, tipografía de precisión `Inter` con cifras tabulares (`font-feature-settings: "tnum" on`), dígitos en peso destacado (`Inter Black` o semibold) y persistencia en `localStorage`.
   - Bloque de observaciones técnicas.
   - Campos formales interactivos y editables (`contenteditable="true"`) para *Firma y Matrícula del Inspector* y *Fecha/Hora Registrada*, con placeholder de ayuda, efectos visuales de edición y guardado automático.
7. **Pie de Página Normativo:**
   - Normas internacionales aplicables (ISO 13485, ASTM F136 u otras según la industria).
   - Datos de contacto, web o leyenda de confidencialidad y control interno.

---

### B. Estándares Técnicos y Tecnológicos (Web & Print)
- **Tecnologías Base:** HTML5 semántico + CSS3 Vanilla (sin frameworks innecesarios) + JavaScript modular y ligero.
- **Doble Entorno (Pantalla e Impresión):**
  - **Entorno Pantalla (Interactivo):**
    - Sincronización hover/click bidireccional entre las llamadas del SVG y las tarjetas de la matriz.
    - Selector de modo visual: Modo Hoja Técnica Clara (Print) y Modo Taller / Blueprint nocturno de alto contraste.
    - Persistencia en `localStorage` de marcas de verificación, dictamen final, notas y firma/matrícula del inspector para evitar pérdidas de datos en planta.
  - **Entorno Impresión / Exportación PDF (`@media print`):**
    - Configurado para formato A4 vertical (`size: A4 portrait; margin: 8mm;`).
    - Eliminación de barras de herramientas (`.no-print`).
    - Protección contra cortes de página indebidos en tarjetas (`page-break-inside: avoid;`).
    - Forzado de colores y fondos nítidos en impresión (`print-color-adjust: exact;`).

---

### C. Sistema de Diseño, Paleta y Tipografía
- **Paleta de Colores Metrológica:**
  - *Fondo hoja:* Blanco puro `#ffffff` (o azul noche profundo `#0b1727` en modo blueprint, o `transparent` para integración web).
  - *Color Primario Técnico:* Azul cian / celeste de precisión (`#0284c7` / `#38bdf8`).
  - *Texto y estructura:* Carbón oscuro `#1e293b` y pizarra `#64748b`.
  - *Alertas y Precauciones:* Amarillo / Ámbar técnico (`#d97706`).
  - *Rechazos y No Conformidades:* Carmesí de alta visibilidad (`#dc2626`).
  - *Conformidad y Aprobación:* Verde esmeralda (`#16a34a`).
- **Tipografía (Familia Inter e Inter Black):**
  - *Familia única y obligatoria:* Todos los textos deben ser exclusivamente `Inter` o `Inter Black` (`font-weight: 900`). Queda desestimado el uso de familias adicionales (Chakra Petch, JetBrains Mono).
  - *Títulos, balizas SVG, códigos y sellos de dictamen:* `Inter Black` (`font-weight: 900`) para máxima jerarquía visual.
  - *Cuerpo de texto, subtítulos y listas:* `Inter` en pesos regular (400), medium (500) y semibold (600/700).
  - *Cotas, tolerancias, trazabilidad e instrumental:* `Inter` con cifras tabulares OpenType activadas (`font-feature-settings: "tnum" on, "zero" on;`) para asegurar alineación vertical estricta.

---

### D. Aislamiento Estructural, Scoping e Incrustación Segura en CMS / Sitios Web
Para garantizar que **NINGUNA infografía o componente interactivo rompa la estructura ni el diseño del sitio web anfitrión** (WordPress, Elementor, Divi, Shopify o maquetas HTML externas), se deben cumplir estrictamente las siguientes reglas:
1. **PROHIBIDO el Reseteo Universal Agresivo (`*`):**
   - **Nunca** aplicar `*, *::before, *::after { margin: 0; padding: 0; }` de forma global, ya que despoja de márgenes y paddings a los menús de navegación, botones y encabezados de la página anfitriona.
   - **Regla obligatoria:** Todo reset debe estar rigurosamente encapsulado en el contenedor raíz de la infografía (ej. `.infographic-container, .infographic-container *, .infographic-container *::before, .infographic-container *::after`).
2. **PROHIBIDO Secuestrar el `body` o `html` con Layouts Invasivos:**
   - **Nunca** asignar al `body` reglas como `min-height: 100vh; display: flex; align-items: center; justify-content: center;` en componentes o infografías destinadas a embeber.
   - El centrado vertical flexbox en `body` genera **pérdida de datos por desbordamiento (*scroll clipping*)**, empujando la parte superior de la infografía fuera de la pantalla (decapitando el norte/títulos detrás de la barra de navegación del sitio).
   - `html, body` solo deben llevar estilos neutros o de transparencia (`background: transparent !important; margin: 0; padding: 0; width: 100%;`).
3. **Alineación Vertical Segura (`align-items: flex-start`):**
   - Los contenedores maestros deben anclarse desde la parte superior (`flex-start`), garantizando que títulos, encabezados o extremos superiores nunca queden ocultos o truncados bajo barras de navegación fijas.
4. **Auto-Escalado Proporcional Responsivo:**
   - Todo contenedor visual debe definir su tamaño mediante `aspect-ratio` nativo y topes bidireccionales: `max-width: min([ancho_px], calc([vh_max] * ratio))` para garantizar que la infografía se adapte tanto al ancho como a la altura de la pantalla o del `iframe`, sin forzar barras dobles de scroll ni cortes indeseados.
5. **Contenedores SVG con `overflow: visible`:**
   - Toda capa vectorial superpuesta debe declarar `overflow: visible;` para asegurar que las balizas, flechas o etiquetas desplegadas en hover que se extiendan hacia los márgenes laterales nunca se recorten.
6. **Fondo 100% Transparente y Canal Alfa Puro en Recursos Raster:**
   - En infografías flotantes o mapas, las imágenes base rasterizadas deben procesarse con canal alfa puro (`alpha = 0` en el exterior) y bordes desmezclados (*alpha unblending*) para que resplandores o efectos neón se fusionen con cualquier fondo (claro u oscuro) sin halos blancos ni bordes aserrados.
