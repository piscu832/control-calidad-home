---
name: empaquetado-html-autocontenido
description: >-
  Estándar y procedimiento para unificar y compilar proyectos web, infografías interactivas y componentes
  (HTML + CSS + JavaScript + assets) en un único archivo HTML 100% autocontenido y autónomo, listo para abrir localmente,
  distribuir sin dependencias o incrustar directamente en CMS como WordPress, Elementor o Divi.
---

# Skill: Empaquetado en un Único Archivo HTML 100% Autocontenido

Esta skill define el procedimiento técnico y las mejores prácticas para transformar cualquier desarrollo web compuesto por múltiples archivos (`index.html`, `style.css`, `app.js`, imágenes o fuentes) en un **único archivo `.html` completamente autónomo**, eliminando dependencias externas de archivos locales y asegurando máxima portabilidad.

---

## 1. Casos de Uso y Objetivos
- **Incrustación en CMS (WordPress, Drupal, Joomla):** Pegar el código directamente en bloques de tipo "HTML Personalizado" (Gutenberg), widgets HTML (Elementor) o módulos Código (Divi) sin tener que subir archivos CSS o JS por FTP.
- **Distribución Rápida y Offline:** Enviar infografías técnicas, blueprints o reportes interactivos por email o almacenarlos en repositorios documentales, abriéndose con doble clic en cualquier navegador sin servidor local.
- **Aislamiento de Entorno:** Evitar problemas de rutas rotas (`404 Not Found`), bloqueos por CORS al abrir localmente (`file:///`), o desfases de caché del navegador.

---

## 2. Anatomía del Archivo HTML Único

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Título del Proyecto o Infografía]</title>

  <!-- 1. TIPOGRAFÍAS EXTERNAS (Google Fonts o Data URIs) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">

  <!-- 2. HOJA DE ESTILOS EMBEBIDA COMPLETA -->
  <style>
    /* Reset, variables CSS y estilos completos */
    :root { ... }
    *, *::before, *::after { box-sizing: border-box; }
    html { overflow-y: scroll; }
    ...
  </style>
</head>
<body class="theme-light">

  <!-- 3. ESTRUCTURA Y CONTENIDO HTML SEMÁNTICO -->
  <main class="page-sheet">
    ...
  </main>

  <!-- 4. LÓGICA JAVASCRIPT EMBEBIDA Y PROTEGIDA -->
  <script>
    (function() {
      function init() {
        // Lógica de interactividad, eventos y estado
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    })();
  </script>
</body>
</html>
```

---

## 3. Protocolo de Unificación Paso a Paso

### Paso 1: Fusión y Tratamiento de CSS (`<style>`)
1. **Inserción en el `<head>`:** Reemplazar las etiquetas `<link rel="stylesheet" href="...">` por una única etiqueta `<style>`.
2. **Preservación Total de Reglas:** Copiar íntegramente las variables CSS (`:root`), estilos de componentes, media queries de responsividad (`@media (max-width: ...)`) y directivas de impresión (`@media print`).
3. **Estabilidad de Layout (Zero Jitter):**
   - Asegurar `html { overflow-y: scroll; }` para que la barra de desplazamiento sea fija y constante.
   - Definir `box-sizing: border-box` en todos los elementos.
   - Bloquear alturas (`min-height`) en componentes dinámicos para evitar saltos estructurales.

### Paso 2: Aislamiento y Scoping Obligatorio de CSS (Protección de la Web Anfitriona)
Para evitar **errores de estructura en sitios web** (WordPress, Elementor, Divi o páginas personalizadas):
1. **PROHIBIDO el reset universal agresivo (`*`):**
   - **NUNCA** usar `*, *::before, *::after { margin: 0; padding: 0; }` global. Destruye los márgenes y paddings de los menús, botones y encabezados del sitio anfitrión.
   - **Forma obligatoria:** Encapsular todo reset dentro del contenedor raíz de la infografía:
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
2. **PROHIBIDO secuestrar `body` o `html` con layouts invasivos:**
   - **NUNCA** aplicar `body { min-height: 100vh; display: flex; align-items: center; justify-content: center; }`.
   - Dicha regla provoca **scroll clipping**, decapitando el norte, cabeceras o títulos de la infografía detrás de barras de navegación fijas al insertar en iframes o secciones estándar.
   - Todo centrado o layout flex/grid debe pertenecer exclusivamente al contenedor raíz (`.infographic-root`).
   - `html, body` solo llevan estilos neutros (`background: transparent !important; margin: 0; padding: 0; width: 100%;`).
3. **Alineación Vertical Segura (`align-items: flex-start`):**
   - Asegura que el contenido fluya de arriba hacia abajo sin cortarse bajo el navbar.
4. **Auto-Escalado Proporcional Responsivo:**
   - Definir `max-width: min([ancho_max], calc([vh_max] * ratio))` junto a `aspect-ratio` nativo y `overflow: visible` para que ni el lienzo ni las balizas o badges flotantes se recorten.

### Paso 3: Incrustación de Recursos Gráficos
- **Iconos e Ilustraciones Técnicas:** Utilizar formato SVG vectorial inline directamente en el código HTML.
- **Logotipos o Imágenes Bitmap (PNG/JPG):**
  - Si el archivo debe funcionar 100% offline sin conexión a internet, convertir la imagen a **Base64 Data URI**:
    ```html
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..." alt="Logo">
    ```
  - Si el archivo se despliega en web, enlazar la URL pública del CDN o directorio de medios.

### Paso 4: Fusión y Protección de JavaScript (`<script>`)
1. **Inserción antes de `</body>`:** Reemplazar `<script src="app.js"></script>` por `<script> ... </script>` directo.
2. **Encapsulamiento IIFE:** Envolver todo el código en una función auto-ejecutable `(function() { ... })();` para evitar colisiones con variables globales (`window`) de otros scripts del sitio huésped.
3. **Carga Segura Asíncrona:** Utilizar verificación dual de carga de DOM para que funcione tanto al cargar normalmente como cuando es inyectado por constructores visuales (Elementor, AJAX):
   ```javascript
   if (document.readyState === 'loading') {
     document.addEventListener('DOMContentLoaded', init);
   } else {
     init();
   }
   ```
4. **Blindaje Estricto contra Filtros de WordPress (`wpautop` y minificadores):**
   - **PROHIBIDO usar comentarios de una sola línea `//` dentro de `<script>`:** Los minificadores de WordPress o plugins de caché (LiteSpeed Cache, Hostinger Cache) unen líneas adyacentes; un comentario `//` dejará el resto de la función comentado, provocando `Uncaught SyntaxError: Invalid or unexpected token`.
   - **PROHIBIDO dejar líneas en blanco dentro de `<script>`:** La función nativa `wpautop()` de WordPress inyecta etiquetas `<p>` y `<br />` en las líneas vacías dentro del script, rompiendo la sintaxis JS con tokens inesperados.
   - Utilizar siempre comillas dobles `"` en cadenas literales para evitar colisiones con `wptexturize()`.
5. **Despeje Superior para Temas con Header Fijo / Sticky:**
   - Asignar siempre `margin-top: 40px+; padding-top: 40px+; position: relative; z-index: 1; clear: both;` al contenedor raíz para que los menús sticky del tema huésped (ej. Kadence WP) nunca tapen el banner o las tarjetas superiores.

---

## 4. Checklist de Verificación de Calidad

- [ ] ¿El archivo tiene extensión `.html` y contiene **todo** su CSS en `<style>` y su JS en `<script>`?
- [ ] ¿Se eliminaron todos los `<link rel="stylesheet">` y `<script src="...">` que apuntaban a archivos locales inexistentes en entornos externos?
- [ ] ¿Funciona al abrirlo directamente mediante doble clic en el explorador de archivos (`file:///...`) sin necesidad de ejecutar un servidor web?
- [ ] ¿Todas las interacciones de hover, clic y dinámicas responden con exactitud al 100% respecto a la versión multi-archivo?
- [ ] ¿La estructura es inmóvil (0px layout shift) y preserva la responsividad y reglas de impresión A4?
- [ ] ¿El JavaScript está encapsulado en un ámbito privado (IIFE) para no generar conflictos con scripts de WordPress u otros CMS?
