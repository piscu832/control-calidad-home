# Memoria del Proyecto - Creador de Infografías

## Reglas Principales (AGENTS.md)
1. Si falta un dato, preguntar en lugar de inventar.
2. Apuntar por cuenta propia todo lo que convenga recordar.

## Estructura de Referencia (CONTEXTO/Estructura.json.txt)
- Formato: Vertical (A4 / Flyer).
- Distribución estándar:
  1. Encabezado: Logotipo superior izquierdo, firma/especialidad a la derecha, título principal en mayúsculas a color.
  2. Introducción: Contexto explicativo breve.
  3. Cuerpo visual / Diagrama técnico: Esquema con los puntos críticos numerados y flechas/etiquetas.
  4. Puntos de verificación / Recomendaciones y advertencias.
  5. Pie de página: Guía o referencia y web/contacto.
- Paleta sugerida:
  - Fondo: Blanco (#FFFFFF)
  - Color principal: Azul (#3ABFE7)
  - Textos: Gris carbón (#333333 / #4A4A4A)
  - Acentos: Amarillo (#FDCB2F), Magenta (#E63A8D)
  - Tipografía: Sans-serif geométrica limpia, etiquetas técnicas legibles.

## Datos del Proyecto Hip-Lock (PROYECTOS/TÉCNICOS/Hip-lock/Verificacion_Hip_Lock_Puntos.pdf)
- **Título**: Control de Calidad — Tallo Hip Lock Semielaborados (Forjados/Mecanizados) (Titanio o Acero).
- **Campos de registro**: Orden de Producción, Fecha, Inspector, Orden de Compra, N° de remito.
- **Puntos de control (9 puntos clave)**:
  1. Cono 12/14 (Ápice): Ángulo 12–14°, sin defectos, terminación rugosa ("rallada"). Calibre fijo hembra (12-14°) + inspección visual.
  2. Diámetro máximo del cono: Calibre digital (±0.05 mm).
  3. Orificio roscado / ranura proximal: Rosca métrica funcional sin daños, profundidad correcta. Calibre de profundidad (±0.1 mm) + test de paso con tornillo.
  4. Perfil de tallo: Plantilla de forma sin holgura excesiva. Si hay holgura -> enviar a Ingeniería (no rechazar automáticamente).
  5. Ranura de cementado: Presencia, profundidad, perpendicular al eje, sin rebabas. Calibre (±0.2 mm) + visual.
  6. Espesor cuello (superior): Calibre digital (±0.1 mm) en múltiples puntos.
  7. Espesor lomo (centro/medio): Calibre digital (±0.1 mm) en zona de máximo espesor.
  8. Espesor abajo (inferior): Calibre digital en zona distal (±0.1 mm), midiendo espesor y curvatura en extremo de punta distal (sin biselado).
  9. Simetría de cabeza: Cabeza centrada respecto al eje, diferencia pareja cono vs cara plana, runout ≤ 0.2 mm. Calibre de altura. Si excentricidad > 0.2 mm -> Rechazo.
- **Inspección visual final**: Sin rebabas, sin daños/rayones, sin falta de llenado, sin óxido ni contaminación.
- **Orden de control recomendado**:
  1. Inspección visual
  2. Cono
  3. Diámetro máximo
  4. Orificio roscado
  5. Perfil
  6. Ranura cementado
  7. Espesores (6, 7, 8)
  8. Simetría de cabeza
- **Criterio de conformidad**: Conforme / No conforme, observaciones, firma y fecha/hora obligatoria.

## Decisiones y Requisitos Confirmados por el Usuario (2026-09-29)
1. **Formato**: Infografía web en HTML/CSS (`index.html` + `styles.css`) en la carpeta `PROYECTOS/TÉCNICOS/Hip-lock/`, optimizada tanto para visualización en pantalla de alta resolución como para impresión/guardado en PDF en formato vertical A4.
2. **Enfoque y Público**: Guía técnica visual / Póster de control de calidad para operarios e inspectores de planta técnica, con el desglose exacto de los 9 puntos de control, instrumentos de medición, tolerancias, advertencias críticas (ej. derivar a Ingeniería antes de rechazar por perfil) y flujo ordenado de verificación.
3. **Identidad / Encabezado Obligatorio**:
   - **Logotipo Oficial**: Imagen triangular `logo_villalba.png` (respaldada en `CONTEXTO/logo_villalba.png`). Usar **SIEMPRE**.
   - **Razón Social / Empresa**: **SIEMPRE** `VILLALBA HNOS. IMPLANTES S.A.`
   - **Eslogan Oficial**: *"Innovación, liderazgo y experiencia al servicio de la salud."*
   - Datos de trazabilidad: Orden de Producción, Inspector, Fecha, Orden de Compra, Remito.
4. **Paleta y Estilo**:
   - Integrar la paleta de `Estructura.json.txt`: Base blanca/clara para impresión limpia, acentos azul cian/celeste técnico (`#0284c7` / `#38bdf8` / `#0f172a`), alertas en amarillo/ámbar (`#d97706`), no conformidades en carmesí/magenta (`#e11d48`), y elementos de precisión.
   - **Imágenes Reales del Tallo de Forja**: Aplicación de `Vista frontal.jpg` (1216x3412) y `Vista lateral.jfif` (1056x3918) provistas por el usuario en lugar de gráficos SVG vectoriales simulados, mapeando con precisión milimétrica los puntos de control 1 a 9 sobre las fotografías reales de producción.
   - **Despeje y No Superposición**: Calibración de cotas en `viewBox="0 0 940 500"`, desplazando todas las etiquetas de texto a zonas libres exteriores respecto a las fotos reales, con halo protector `paint-order: stroke fill` de 3.5px.
   - **Campos de Aprobación Interactivos**: Campo de 'FIRMA Y MATRÍCULA DEL INSPECTOR' totalmente editable (`contenteditable="true"`), con placeholder visual, efectos focus/hover y persistencia en `localStorage`.
    - **Registro de Cantidades de Piezas (2026-10-15)**: Incorporación de campos numéricos dedicados con ambos sellos de dictamen permanentemente activos/encendidos (sin exclusión mutua de radio) (CANT. CONFORME y CANT. NO CONFORME), con estilo metrológico con borde guía verde/rojo, visualización de unidad (piezas), soporte en modo Blueprint / Taller e impresión A4, y persistencia automática en localStorage (qtyConforme, qtyNoConforme, obs).
    - **Campo FECHA DE INSPECCIÓN Interactivo (2026-10-15)**: Campo editable con validación estricta que no admite letras (solo dígitos y `/`, con máscara automática DD/MM/AAAA) y botón con icono interactivo de calendario para seleccionar fechas del selector visual, con sincronización bidireccional y persistencia en localStorage.
    - **Campo FECHA / HORA REGISTRADA Interactivo (2026-10-15)**: Integración en el bloque de firmas de escritorio PC y móvil de la fecha editable sin letras con disparador de calendario interactivo (`📅`) y hora numérica (`HH:MM hs`), perfectamente alineado sobre la línea de firma horizontal simétrica con la firma del inspector, con preservación estética en PC, modo Blueprint e impresión A4 sin controles visibles.
    - **Estandarización Tipográfica Exclusiva (2026-10-15)**: Todos los textos de la infografía deben utilizar estrictamente la familia tipográfica **Inter** (regular, medium, semibold, bold) e **Inter Black** (`font-weight: 900`) para títulos, numeración, cabecera y sellos de aprobación, eliminando fuentes previas (Chakra Petch y JetBrains Mono) y manteniendo la alineación de datos numéricos mediante `font-feature-settings: "tnum" on`.
    - **Alineación de Barra Superior (2026-10-27)**: Se removió la etiqueta/badge con el texto `ISO 13485 / ASTM F136` de la barra de utilidades superior, posicionando el título `SISTEMA DE CONTROL DE CALIDAD DE PLANTA` directamente en el extremo izquierdo.
    - **Visor Modal de Planos por Talle (2026-10-27)**: Se incorporó el botón `Planos por Talle` antes de `Reiniciar Puntos` en la barra de utilidades superior. Despliega una ventana modal con visor embebido de los planos PDF de fabricación y control ubicados en `Planos por talle/` (`Plano Control - Tallo Hip-Lock 5-(1_2).pdf` y `Plano Control - Tallo Hip-Lock 5-(2_2).pdf`), con selector desplegable (`<select>` personalizado) con etiqueta metrológica (`PLANO:`), botones de descarga directa y apertura en pestaña independiente, cierre por botón, fondo o tecla Escape, y blindaje no imprimible.


## Decisiones de Despliegue y Adaptabilidad
- **Portal Central HOME Publicado**: Repositorio `https://github.com/piscu832/control-calidad-home.git` desplegado en GitHub Pages ([https://piscu832.github.io/control-calidad-home/](https://piscu832.github.io/control-calidad-home/)).
- **Estructura Integral de Despliegue**: El portal raíz actúa como índice exclusivo de proyectos **TÉCNICOS** (`PROYECTOS/TÉCNICOS/Hip-lock/index.html`), sin visualización de proyectos artísticos ni acceso directo al PDF de trabajo en la HOME.
- **Archivo Crítico**: Se incluye `.nojekyll` en la raíz para bypass de Jekyll y asegurar despliegue estático sin errores 404.
- **Diseño Mobile-First**: Layout adaptable en móviles (1 columna vertical, sin scroll horizontal, balizas con `scrollIntoView` al tacto, barra superior en grilla táctil).

## Skills Registradas
1. **`creacion-de-infografias`** (`.agents/skills/creacion-de-infografias/SKILL.md`): Estándar y flujo de diseño técnico e impresión A4.
2. **`publicacion-github-y-responsive`** (`.agents/skills/publicacion-github-y-responsive/SKILL.md`): Despliegue en GitHub Pages y directivas de diseño responsive.



