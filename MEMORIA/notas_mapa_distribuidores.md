# NOTAS TÉCNICAS: RED NACIONAL DE DISTRIBUCIÓN (MAPA DE DISTRIBUIDORES)

## 1. Identificación y Metadatos
- **Proyecto:** `PROYECTOS/ARTÍSTICOS/Mapa de Distribuidores`
- **Empresa:** `VILLALBA HNOS. IMPLANTES S.A.`
- **Eslogan Obligatorio:** *"Innovación, liderazgo y experiencia al servicio de la salud."*
- **Logotipo Oficial:** `logo_villalba.png` (cuadrante superior izquierdo)
- **Código Normativo:** `DOC: RED-LOG-01 | REV. 04 / 2026 | COBERTURA NACIONAL AUDITADA`
- **Normas Aplicables:** ISO 13485:2016, ANMAT Disposición 3266/13, Sistema Nacional de Trazabilidad (SNT).

---

## 2. Requerimientos del Usuario
- Usar la imagen de referencia provista para crear un nuevo proyecto infográfico en la carpeta `Mapa de distribuidores`.
- Mapa interactivo con los 8 puntos exactos de la referencia:
  1. **Jujuy** (San Salvador de Jujuy)
  2. **Chaco** (Resistencia)
  3. **Córdoba** (Córdoba Capital)
  4. **Rosario** (Rosario, Santa Fe)
  5. **Junín** (Junín, Bs. As.)
  6. **La Plata** (La Plata, Bs. As.)
  7. **Mar del Plata** (Mar del Plata, Bs. As.)
  8. **Bahía Blanca** (Bahía Blanca, Bs. As.)
- **Comportamiento interactivo:**
  - Al pasar el cursor sobre los puntos, se despliega fluidamente una flecha neón cyan animada conectada a la insignia/badge con el nombre del centro de distribución.
  - La insignia cuenta con resplandor neón cyan (`box-shadow`), tipografía nítida y acabado de precisión metrológica.
  - Sincronización bidireccional con la matriz de centros de distribución: hover en mapa ilumina la tarjeta en la matriz y viceversa.
  - Selector de modo: Modo Hoja Técnica Clara (Print) y Modo Taller Blueprint Nocturno.
  - Controles de vista: "Modo Interactivo (Hover)", "Ver Toda la Red Desplegada" (vista idéntica a la referencia estática) y botón de impresión A4.
  - Persistencia en `localStorage` de firmas, notas y estados de checklist.

---

## 3. Coordenadas Metrológicas en el Mapa (Base 896 x 1200) - Calibración Concéntrica 100%
- **Jujuy:** Nodo (417, 197) | Badge (145, 58) | Flecha (417, 197) -> (290, 92)
- **Chaco:** Nodo (538, 265) | Badge (675, 125) | Flecha (538, 265) -> (670, 156)
- **Córdoba:** Nodo (444, 400) | Badge (72, 375) | Flecha (444, 400) -> (246, 400)
- **Rosario:** Nodo (533, 450) | Badge (665, 325) | Flecha (533, 450) -> (658, 358)
- **Junín:** Nodo (549, 471) | Badge (684, 420) | Flecha (549, 471) -> (678, 448)
- **La Plata:** Nodo (588, 485) | Badge (690, 534) | Flecha (588, 485) -> (684, 550)
- **Mar del Plata:** Nodo (612, 577) | Badge (600, 674) | Flecha (612, 577) -> (676, 668)
- **Bahía Blanca:** Nodo (490, 604) | Badge (500, 780) | Flecha (490, 604) -> (566, 774)

---

## 4. Evolución de Requerimientos y Diseño
- **Versión Minimalista Exclusiva:** A solicitud del usuario, se eliminaron encabezados institucionales, barras de herramientas, tarjetas de matriz y pies de página, dejando **exclusivamente el mapa interactivo** con animación de flechas y balizas al pasar el cursor (hover), replicando el diseño enfocado y limpio de la *Línea de tiempo*.
- **Fondo 100% Transparente:**
  - Se configuró el fondo en `html, body` y contenedores con `background: transparent;`.
  - Se procesó `mapa_base_distribuidores.png` eliminando completamente el fondo blanco exterior mediante flood-fill periférico y desmezclado matemático de bordes (*alpha unblending*), conservando el resplandor neón cian periférico sin halos blancos ni bordes aserrados.
  - La silueta de Argentina y sus circuitos internos se mantienen 100% opacos y nítidos.
  - Permite incrustar el mapa sobre cualquier fondo (blanco, gris, oscuro, degradados o CMS) de forma flotante.

---

## 5. Estructura de Archivos del Proyecto
- `PROYECTOS/ARTÍSTICOS/Mapa de Distribuidores/index.html`: Estructura HTML5 limpia y semántica (únicamente el viewport del mapa).
- `PROYECTOS/ARTÍSTICOS/Mapa de Distribuidores/style.css`: Estilos Vanilla CSS con fondo transparente, trazo SVG dinámico (`stroke-dashoffset`), badges con resplandor neón y anillos de pulso.
- `PROYECTOS/ARTÍSTICOS/Mapa de Distribuidores/app.js`: Lógica ligera para soporte táctil (tap/click en móvil) y accesibilidad de hover.
- `PROYECTOS/ARTÍSTICOS/Mapa de Distribuidores/mapa_base_distribuidores.png`: Imagen rasterizada de alta definición con fondo 100% transparente (Alpha 0) y silueta cyber intacta.
- `PROYECTOS/ARTÍSTICOS/Mapa de Distribuidores/autocontenido.html`: Versión empaquetada autónoma con CSS, JS y mapa rasterizado incrustado en Base64 data URI, lista para distribución o CMS.

---

## 6. Resolución de Errores de Estructura e Incrustación en Sitio Web
- **Diagnóstico del problema:**
  1. En `style.css` existían reglas globales no acotadas (`*, *::before, *::after` con `margin:0; padding:0;` y `body { min-height: 100vh; display: flex; justify-content: center; }`).
  2. Si se pegaba directamente en el CMS o se usaba en iframe con altura menor a 1150px, `justify-content: center` empujaba el mapa hacia arriba, decapitando el norte del país (Jujuy, Chaco y Salta quedaban ocultos detrás del header del sitio).
  3. Si se insertaba el CSS en la página anfitriona, el reset global destruía los márgenes y alineación del navbar y footer del sitio web.
- **Solución implementada:**
  1. **Aislamiento y Scoping Estricto:** Se eliminó cualquier selector global sobre `*` o `body`. Todos los estilos de layout, box-sizing y variables quedaron encapsulados bajo `.map-viewport` y `.map-interactive-container`.
  2. **Alineación Vertical Segura (`align-items: flex-start`):** El norte del mapa se ancla desde arriba hacia abajo, impidiendo cualquier corte o desbordamiento hacia el header.
  3. **Auto-Escalado Proporcional:** `max-width: min(860px, calc(90vh * 896 / 1200))` con `aspect-ratio: 896 / 1200` y `overflow: visible` para garantizar que ni el mapa ni las balizas laterales queden truncadas.
