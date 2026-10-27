---
name: creacion-de-infografias
description: >-
  Estándar y flujo maestro para la creación de infografías técnicas, hojas de control de calidad,
  blueprints metrológicos y folletos divulgativos de alta precisión en entornos web y de impresión A4.
---

# Skill: Creación de Infografías Técnicas y de Calidad

Esta skill define el procedimiento obligatorio, las especificaciones de diseño, las directivas de metrología y los estándares de desarrollo web para producir infografías técnicas, hojas de procesos y pósters de control de calidad en formato digital e impreso.

---

## 1. Reglas Fundamentales de Operación

1. **Si te falta un dato, pregunta en lugar de inventar:**
   - Ante especificaciones ausentes, formatos no definidos, cotas, marcas o tolerancias dudosas, **consultar siempre al usuario** (usando `ask_question`) antes de asumir o generar contenido arbitrario.
2. **Apunta por tu cuenta todo lo que te convenga recordar:**
   - Mantener actualizada la carpeta `MEMORIA/` del espacio de trabajo con notas estructuradas, requerimientos confirmados por el usuario, decisiones de diseño tomadas y datos técnicos extraídos de cada proyecto.
3. **Prioridad Absoluta de Archivos Reales del Proyecto:**
   - Revisar siempre la carpeta del proyecto (`PROYECTOS/<nombre_proyecto>/`).
   - Si existen fotografías o planos reales (archivos `.jfif`, `.png`, `.jpg`, `.svg`, `.pdf`), **utilizarlos e integrarlos directamente** en lugar de dibujos vectoriales ficticios o sintetizados.

---

## 2. Anatomía y Estructura Estándar de la Infografía

Toda infografía debe incorporar de forma estructurada las siguientes 7 secciones maestras:

### Sección 1: Encabezado Institucional y Metadatos de Trazabilidad
- **Identidad de Empresa Obligatoria:** Usar **SIEMPRE** la imagen oficial del logotipo triangular (`logo_villalba.png`, respaldada en `CONTEXTO/logo_villalba.png`). La empresa se denomina **SIEMPRE** `VILLALBA HNOS. IMPLANTES S.A.` en el cuadrante superior izquierdo, acompañada debajo por su eslogan institucional: *"Innovación, liderazgo y experiencia al servicio de la salud."*.
- **Identificación Documental:** Código normativo, versión/revisión y estado auditado (ej. `DOC: QC-HL-08 | REV. 04 / 2026 | ORIGINAL AUDITADO`).
- **Título y Subtítulo:** Título en mayúsculas destacado con el color primario técnico, acompañado de la especificación técnica y aleaciones/materiales (ej. Titanio Grado 5, Acero Quirúrgico 316L).
- **Grilla Estandarizada de Trazabilidad (4 campos unificados):**
  1. *Fecha de inspección:* Campo numérico estricto (máscara DD/MM/AAAA) con disparador de calendario interactivo.
  2. *Inspector responsable:* Campo editable (`contenteditable="true"`).
  3. *Orden de compra:* Campo editable (`contenteditable="true"`).
  4. *Documento Remito / Despacho:* Botón interactivo integrado con la estética de las cajas de trazabilidad para adjuntar archivo de remito (PDF o Imagen).
- **Inclusión de Hoja N° 2 (Anexo de Remito):** Al adjuntar el remito, se genera automáticamente la Hoja N° 2 con encabezado institucional y trazabilidad sincronizada, integrándose de forma continua en la exportación/impresión A4 de 2 páginas (`page-break-before: always;`).

### Sección 2: Introducción y Fundamento Técnico
- Tarjeta destacada con icono metrológico explicando el propósito del control, la relevancia funcional/biomecánica de la pieza y los objetivos de conformidad.

### Sección 3: Cuerpo Visual Central / Mapa Metrológico
- **Esquema Multivista:** Vistas frontal (A-P) y lateral (Perfil) u orientaciones ortogonales requeridas.
- **Fondo Milimetrado:** Retícula técnica SVG con líneas sutiles y ejes de simetría discontinuos.
- **Regla Estricta de Disposición Gráfica (Sin Superposiciones):**
  - Todas las balizas circulares numeradas, flechas guía y etiquetas de texto deben ubicarse en zonas exteriores despejadas respecto a la pieza.
  - Ningún texto debe superponerse sobre la imagen del vástago/pieza ni sobre otras referencias.
  - Aplicar halo protector antireflectante en SVG (`paint-order: stroke fill; stroke-width: 3.5px;`) para garantizar legibilidad absoluta sobre cualquier fondo o retícula.
- **Tarjeta de Directivas Ineludibles:** Bloque lateral destacado con las *Reglas de Oro* del taller (calibración obligatoria, frecuencia de verificación contra patrones, criterios de escalado a Ingeniería).

### Sección 4: Matriz Detallada de Puntos de Control
- Grilla equilibrada de tarjetas individuales para cada punto numerado.
- **Contenido obligatorio por tarjeta:**
  1. Número identificador prominente y denominación técnica normalizada.
  2. Ubicación o zona anatómica/geométrica.
  3. **¿Qué se mide?:** Parámetros geométricos, cotas nominales y tolerancias cuantitativas explícitas (ángulos, diámetros, profundidades, excentricidades).
  4. **Instrumental necesario:** Herramientas metrológicas específicas con su precisión requerida (calibres digitales $\pm 0.05\text{ mm}$, micrómetros $\pm 0.01\text{ mm}$, plantillas de forma, bloques en V, relojes comparadores).
  5. **Criterios de alerta o rechazo:** Criterios claros de acción (ej. qué hacer ante holgura mínima, derivación a ingeniería vs. rechazo directo si supera el runout permitido).
  6. **Checkbox de verificación:** Selector interactivo para control operativo del inspector.

### Sección 5: Secuencia Estandarizada de Control (Workflow)
- Flujo cronológico secuencial de paso de pieza con números de etapa, títulos y flechas indicadoras para optimizar la eficiencia y reducir tiempos muertos en la línea de inspección.

### Sección 6: Verificación Visual Final (100%) y Dictamen de Calidad
- **Sellos de Dictamen y Registro de Cantidades por Categoría:**
  - Sellos de dictamen (*✓ CONFORME* en verde esmeralda y *✕ NO CONFORME* en carmesí de alerta) **permanentemente activos y encendidos simultáneamente** (con bordes sólidos, fondo coloreado tenue y 100% de opacidad). No deben utilizarse selectores excluyentes (radios), ya que en cada lote o auditoría conviven piezas aprobadas y piezas rechazadas.
  - **Campos Numéricos de Conteo Obligatorios:** Cada columna de dictamen debe incluir un campo numérico interactivo vinculado (**`CANT. CONFORME`** y **`CANT. NO CONFORME`**), con indicación de unidad (`piezas`), borde guía lateral cromático, tipografía de precisión `Inter` con cifras tabulares (`font-feature-settings: "tnum" on`), dígitos en peso destacado (`Inter Black` o semibold) y persistencia automática en `localStorage`.
- **Observaciones Técnicas:** Campo editable para registrar valores medidos o notas de auditoría.
- **Bloque de Cierre Formal Interactivo:** Campos editables directos (`contenteditable="true"`) para *Firma y Matrícula del Inspector* y *Fecha/Hora Registrada*, con placeholder de ayuda (`data-placeholder`), respuesta visual a la interacción (hover, focus iluminado) e integración con el guardado en planta.

### Sección 7: Pie de Página Institucional (Exclusión de Normas Genéricas)
- **Criterio Maestro:** No incluir textos, etiquetas ni badges de normas genéricas (ISO 13485, ASTM F136/F138, ANMAT DISP. 3266/13) ni en las tarjetas de control ni en los pies de página.
- Leyenda técnica de documento interno de producción, control metrológico y trazabilidad de planta de VILLALBA HNOS. IMPLANTES S.A.

---

## 3. Estándares Técnicos y Tecnológicos (Web & Print)

### Tecnologías Base
- **HTML5 Semántico:** Estructura limpia y accesible (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`).
- **CSS3 Vanilla:** Variables CSS organizadas en `:root` y clases reutilizables. Sin dependencias externas pesadas.
- **JavaScript Modular y Ligero:** Gestión de interactividad, persistencia local y eventos sin bloquear el hilo principal.

### Doble Entorno Operativo

#### A. Entorno Pantalla (Interactivo)
- **Barra de Herramientas Superior Estandarizada:**
  - Título a la izquierda: `SISTEMA DE CONTROL DE CALIDAD DE PLANTA` (sin badges ni menciones de normas genéricas como ISO 13485 o ASTM).
  - Acciones a la derecha: Botón de *Planos por Talle / Fabricación* (modal con selector desplegable de archivos PDF y descarga directa), botón *Reiniciar Puntos*, selector de *Modo Blueprint / Modo Claro*, y botón principal *Imprimir / Exportar PDF (A4)*.
- **Sincronización Bidireccional:** Al pasar el cursor o hacer clic sobre una baliza del diagrama SVG, la tarjeta correspondiente de la matriz se resalta y se desplaza a la vista. Al posar el cursor sobre una tarjeta, se resalta la baliza en el diagrama.
- **Selector de Modo Visual:** Alternancia fluida entre:
  - *Modo Hoja Técnica Clara (Print Preview)*: Base blanca y neutra para lectura diurna.
  - *Modo Blueprint / Taller Nocturno*: Fondo azul oscuro profundo (`#0b1727`), alto contraste y resaltes luminiscentes para estaciones de trabajo con poca luz.
- **Persistencia en LocalStorage:** Guardado automático de los checkboxes, dictamen final, cantidades conforme/no conforme, observaciones técnicas y firma/matrícula del inspector para evitar pérdidas de datos en caso de recarga o corte eléctrico en planta.

#### B. Entorno Impresión y Exportación PDF (`@media print`)
- **Tamaño de Hoja:** Formato estándar A4 vertical:
  ```css
  @page {
    size: A4 portrait;
    margin: 8mm;
  }
  ```
- **Supresión de Elementos No Imprimibles:** Ocultar toolbars y controles interactivos (`.no-print { display: none !important; }`).
- **Protección contra Cortes Indeseados:** Aplicar `page-break-inside: avoid;` en tarjetas, diagramas y tablas de trazabilidad.
- **Fidelidad Cromática:** Forzar renderizado exacto de colores de fondo y bordes:
  ```css
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  ```

---

## 4. Sistema de Diseño, Paleta y Tipografía

### Paleta Metrológica de Alta Precisión
- **Color Primario Técnico:** Azul cian de precisión (`#0284c7` / `#38bdf8`) para títulos, balizas, bordes activos y vástagos.
- **Base y Superficie:** Blanco puro (`#ffffff`) en modo claro; Azul noche profundo (`#0b1727` / `#0f172a`) en modo blueprint.
- **Estructura y Texto:** Carbón pizarra (`#1e293b`) y gris técnico (`#64748b`).
- **Alertas y Precauciones:** Ámbar industrial (`#d97706` / fondo `#fffbeb`).
- **Rechazos y No Conformidades:** Carmesí de alta visibilidad (`#dc2626` / fondo `#fef2f2`).
- **Conformidad y Aprobación:** Verde esmeralda de certificación (`#16a34a` / fondo `#f0fdf4`).

### Sistema Tipográfico Exclusivo (Familia Inter e Inter Black)
- **Familia Tipográfica Única y Obligatoria:** Todos los textos de la infografía deben utilizar **exclusivamente la tipografía `Inter`** en sus distintos pesos, o **`Inter Black`** (`font-weight: 900`). Queda expresamente desestimado el uso de familias tipográficas adicionales como *Chakra Petch* o *JetBrains Mono*.
- **Títulos Principales, Razón Social, Balizas, Códigos y Sellos de Dictamen:** Utilizar **`Inter Black`** (`font-weight: 900`) para lograr un impacto visual sobrio, robusto y de máxima jerarquía institucional (ej. encabezado de empresa `VILLALBA HNOS. IMPLANTES S.A.`, título de infografía, números de puntos de control, estampillas *CONFORME* / *NO CONFORME*, rótulos de vistas SVG).
- **Subtítulos, Nombres de Puntos y Encabezados Secundarios:** `Inter` en pesos intermedios o fuertes (`font-weight: 600` / `700` / `800`).
- **Cuerpo de Texto, Listas, Instrucciones y Párrafos:** `Inter` regular y medium (`font-weight: 400` / `500`).
- **Cotas, Tolerancias, Trazabilidad, Cifras Numéricas e Instrumental:** `Inter` con activación de cifras tabulares OpenType (`font-feature-settings: "tnum" on, "zero" on;`). Esto garantiza que los números mantengan un ancho constante y alineación vertical estricta como en fuentes monospace técnicas, preservando la coherencia visual con la familia Inter.
- **Carga en HTML:** Enlace oficial de Google Fonts con el rango completo de pesos:
  `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">`

---

## 5. Checklist de Verificación de Calidad Pre-Entrega

Antes de dar por finalizada cualquier infografía, comprobar obligatoriamente:
- [ ] ¿Se consultó al usuario cualquier duda técnica en lugar de inventar?
- [ ] ¿Se actualizaron las notas en `MEMORIA/`?
- [ ] ¿Se utilizaron las fotografías o planos reales de la carpeta del proyecto si existen?
- [ ] ¿Están presentes las 7 secciones obligatorias?
- [ ] ¿Están libres de superposición todos los textos, balizas y flechas conectoras del diagrama?
- [ ] ¿Se verificó la interactividad (hover bidireccional y persistencia)?
- [ ] ¿Se probó la exportación/impresión A4 con `@media print` asegurando márgenes correctos y sin cortes de página rotos?
