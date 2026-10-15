---
name: publicacion-github-y-responsive
description: Estándar operativo para la publicación de infografías técnicas en GitHub Pages y criterios de diseño responsive para móviles y tablets, preservando la fidelidad de impresión A4.
---

# Skill: Publicación en GitHub Pages y Adaptabilidad Responsive para Infografías

Esta skill establece las directivas obligatorias para transformar cualquier infografía técnica desarrollada en el entorno local en un sitio web público, seguro y accesible mediante **GitHub Pages**, garantizando simultáneamente una **adaptabilidad fluida y táctil en dispositivos móviles y tablets**, sin comprometer la rigurosidad dimensional ni la exportación en hoja A4.

---

## 1. Principios Rectores

1. **Doble Fidelidad Operativa:** La infografía debe comportarse como una aplicación web táctil, fluida y reactiva en smartphones/tablets para inspectores de planta en movimiento, pero debe mantenerse idéntica e inmutable a una hoja técnica normalizada al imprimirse o exportarse a PDF (`@media print` en tamaño A4 vertical).
2. **Despliegue Cero Fricción:** Cada proyecto de infografía ubicado en `PROYECTOS/<nombre_proyecto>/` debe ser autosuficiente, contener rutas relativas estáticas y desplegarse en GitHub Pages sin necesidad de compiladores externos pesados.
3. **Persistencia y Ergonomía en Planta:** Los campos interactivos (`contenteditable="true"`, casillas de verificación, dictamen de calidad) deben ser cómodos de pulsar y editar con teclados virtuales táctiles, persistiendo su estado en `localStorage`.

---

## 2. Protocolo de Publicación en GitHub Pages

### A. Preparación del Proyecto Local
Antes de inicializar o subir el repositorio, verificar en la carpeta del proyecto (`PROYECTOS/<nombre_proyecto>/`):
1. **Punto de Entrada:** Debe existir un archivo `index.html` en la raíz de la carpeta.
2. **Rutas Relativas Estrictas:** Todas las dependencias (CSS, JS, imágenes `.jfif`, `.png`, `.jpg`, `.svg`) deben referenciarse relativamente (ej. `href="styles.css"`, `src="logo_villalba.png"`), nunca con rutas absolutas locales como `C:\...` o `a:\...`.
3. **Creación Obligatoria de `.nojekyll`:**
   - Crear un archivo vacío denominado `.nojekyll` en la raíz de la carpeta del proyecto.
   - *Motivo:* Por defecto, GitHub Pages procesa los sitios con el motor Jekyll. El archivo `.nojekyll` desactiva este procesamiento, evitando que se omitan archivos especiales y asegurando un despliegue instantáneo de los archivos estáticos.

### B. Inicialización y Vinculación Git
Ejecutar los siguientes comandos en PowerShell dentro del directorio del proyecto:

```powershell
# 1. Asegurar la posición en la carpeta del proyecto
cd "PROYECTOS/<nombre_proyecto>"

# 2. Inicializar repositorio y nombrar rama principal
git init
git branch -M main

# 3. Incluir todos los archivos y realizar commit inicial
git add .
git commit -m "Publicación inicial de infografía técnica y protocolo de inspección"

# 4. Vincular con el repositorio remoto de GitHub proporcionado por el usuario
git remote add origin https://github.com/<usuario>/<repositorio>.git

# 5. Enviar a GitHub
git push -u origin main
```

### C. Activación de GitHub Pages
1. Instruir o verificar la configuración en:
   `https://github.com/<usuario>/<repositorio>/settings/pages`
2. Configurar:
   - **Source:** `Deploy from a branch`
   - **Branch:** Seleccionar `main` y en la carpeta contigua `/ (root)`
   - **Guardar:** Presionar el botón **Save**.
3. **URL Resultante:**
   `https://<usuario>.github.io/<repositorio>/`

### D. Verificación del Despliegue en Terminal
Para comprobar de manera programática si el sitio ya está online y responde correctamente:

```powershell
# Verificar respuesta del servidor (debe devolver HTTP/1.1 200 OK)
curl.exe -I https://<usuario>.github.io/<repositorio>/

# Consultar estado de despliegue mediante la API pública de GitHub
curl.exe -s https://api.github.com/repos/<usuario>/<repositorio>/deployments
```

> [!NOTE]
> La primera vez que se activa GitHub Pages, el CDN (Fastly/Varnish) puede tardar entre 30 y 90 segundos en refrescar la caché. Si responde 404 inicialmente, verificar que el commit con `.nojekyll` esté presente y reintentar la comprobación.

### E. Mantenimiento y Actualizaciones Posteriores
Cada vez que se introduzcan mejoras de diseño o datos técnicos en la infografía:

```powershell
git add .
git commit -m "Actualización técnica / optimización responsive"
git push origin main
```

---

## 3. Estándares Mandatorios de Diseño Responsive

Toda infografía técnica debe incorporar en su archivo `styles.css` una arquitectura responsive rigurosa basada en los siguientes lineamientos:

### A. Prevención de Desborde Horizontal (Zero Horizontal Overflow)
En dispositivos móviles, ningún elemento debe forzar el scroll horizontal de la ventana principal:

```css
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}
```

### B. Jerarquía de Breakpoints Recomendada

| Breakpoint | Entorno Destino | Comportamiento Principal |
| :--- | :--- | :--- |
| **> 960px** | Estación Desktop / Pantalla Metrología | Layout completo en grilla: Lámina A4 centrada, SVG + Directivas laterales, 3 columnas de puntos. |
| **≤ 960px** | Tablets Apaisadas | Matriz de puntos a 2 columnas. Layout del diagrama a 1 columna. Trazabilidad a 3 columnas. |
| **≤ 768px** | Tablets Verticales y Phablets | Toolbar en grilla táctil. Contenedor sin márgenes forzados. Workflow en slider horizontal con swipe. |
| **≤ 640px** | Smartphones Estándar | Matriz de puntos a 1 columna vertical. Trazabilidad en 1 columna. Encabezado apilado. |
| **≤ 480px** | Smartphones Compactos | Campos de firma apilados, botones de dictamen en columna, tipografía de cotas calibrada. |

---

### C. Especificaciones por Componente en Pantallas Móviles

#### 1. Barra de Herramientas Superior (`.top-toolbar`)
- Reorganizarse en columna o grilla táctil.
- Botones de acción (`.btn`) con altura mínima de **42px a 44px** para facilitar el toque dactilar.
- El botón de impresión/exportación A4 (`.btn-primary`) debe ocupar el ancho completo (`grid-column: 1 / -1`) en pantallas pequeñas.

#### 2. Encabezado Institucional y Metadatos (`.sheet-header`)
- Apilar verticalmente el logotipo de `VILLALBA HNOS. IMPLANTES S.A.` y los sellos documentales (`.header-doc-code`).
- Reducir proporcionalmente el título principal (`.main-title`) entre `1.05rem` y `1.22rem` para que no ocupe más de dos renglones.

#### 3. Grilla de Trazabilidad (`.traceability-grid`)
- En pantallas `≤ 640px`, pasar obligatoriamente a **1 sola columna vertical** (`grid-template-columns: 1fr;`).
- Los campos editables (`.trace-input`) deben tener un área táctil mínima de 32px de alto y tipografía monoespaciada legible.

#### 4. Diagrama Central SVG y Balizas de Precisión (`.stem-blueprint-canvas`)
- El SVG vectorial debe utilizar `viewBox="0 0 W H"` y dimensiones fluidas (`width: 100%; height: auto; min-width: 310px;`).
- El contenedor debe admitir toque y desplazamiento táctil (`-webkit-overflow-scrolling: touch`).
- **Navegación Táctil Sincronizada:** Al pulsar una baliza numerada del diagrama en el móvil, el script debe ejecutar `targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' })` y activar la clase visual transitoria `.is-targeted` durante ~1.8 segundos para enfocar de inmediato la tarjeta correspondiente.

#### 5. Matriz de Puntos de Control (`.points-grid`)
- En teléfonos (`≤ 640px`), organizar en **1 columna vertical fluida**.
- Las casillas de verificación de conformidad (`.chk-conform` / `.custom-checkbox`) deben tener un contenedor táctil de al menos **38px a 42px** de alto.
- Parámetros, tolerancias e instrumentos deben mostrarse con saltos de línea claros y viñetas identificadoras.

#### 6. Flujo de Control Secuencial (`.workflow-steps`)
- Configurar como barra horizontal continua con desplazamiento táctil suave:
```css
.workflow-steps {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  overflow-x: auto;
  padding: 12px 10px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
}
.wf-step {
  flex: 0 0 85px;
  min-width: 85px;
}
```

#### 7. Dictamen de Calidad y Bloque de Firmas
- Los sellos de *Conforme* y *No Conforme* deben ocupar el ancho disponible para evitar toques accidentales.
- El bloque de firmas (`.signature-grid`) debe apilarse en una sola columna en móviles estrechos (`≤ 480px`).
- La línea de firma del inspector con `contenteditable="true"` debe responder a eventos táctiles y mostrar su `data-placeholder` cuando esté vacía.

---

## 4. Blindaje Obligatorio de Impresión A4 (`@media print`)

La adaptación a pantallas móviles **nunca debe alterar ni degradar** los estilos de exportación e impresión física. En el archivo `styles.css`, la sección `@media print` debe permanecer blindada:

```css
@media print {
  @page {
    size: A4 portrait;
    margin: 8mm;
  }
  body {
    background-color: #ffffff !important;
    color: #000000 !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  .no-print {
    display: none !important;
  }
  .sheet-container {
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
    box-shadow: none !important;
    background: #ffffff !important;
  }
  .point-card {
    box-shadow: none !important;
    border: 1px solid #cbd5e1 !important;
    page-break-inside: avoid;
  }
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
```

---

## 5. Checklist de Entrega y Auditoría

Antes de considerar concluida la publicación de una infografía:
- [ ] ¿Existe el archivo `.nojekyll` en la raíz del proyecto?
- [ ] ¿Se verificaron todas las rutas de imágenes y archivos para descartar enlaces absolutos locales?
- [ ] ¿El repositorio en GitHub fue actualizado y la rama `main` subida?
- [ ] ¿GitHub Pages fue activado en los ajustes del repositorio?
- [ ] ¿Se probó la web con `curl.exe -I` recibiendo estado HTTP 200?
- [ ] ¿La página fue evaluada en anchos móviles (360px a 480px) sin presentar scroll horizontal invasivo?
- [ ] ¿La interacción táctil (tap en SVG, checklist, cambio de tema) responde con agilidad?
- [ ] ¿La previsualización de impresión (Ctrl + P) genera una hoja A4 nítida y perfectamente encuadrada?
