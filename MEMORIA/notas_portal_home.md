# MEMORIA TÉCNICA: PORTAL CENTRAL HOME (`index.html`)

**Fecha:** 2026-10-15  
**Proyecto:** Creador de Infografías / VILLALBA HNOS. IMPLANTES S.A.  
**Repositorio GitHub:** `https://github.com/piscu832/control-calidad-home.git`  
**GitHub Pages URL:** `https://piscu832.github.io/control-calidad-home/`  

---

## 1. Criterios Obligatorios y Reglas de la HOME (Confirmados por el Usuario)

1. **Exclusividad para Proyectos Técnicos:**
   - La página HOME (`index.html` en la raíz) está destinada **ÚNICA Y EXCLUSIVAMENTE** a proyectos, protocolos metrológicos y hojas de control de calidad técnica (`PROYECTOS/TÉCNICOS/*`).
   - **PROHIBIDO** mostrar, listar o enlazar proyectos artísticos o institucionales (*Línea de tiempo*, *Mapa de Distribuidores*) en la HOME. Los proyectos artísticos residen exclusivamente en su carpeta `PROYECTOS/ARTÍSTICOS/` y no deben mezclarse en el portal de calidad.

2. **Prohibición de Acceso al PDF Original en la HOME:**
   - **NO** se debe mostrar ni incluir botones o enlaces de acceso directo al archivo `Verificacion_Hip_Lock_Puntos.pdf` u otros PDF originales de trabajo en las tarjetas del portal HOME.
   - El acceso debe limitarse estrictamente a:
     - **Abrir Hoja Técnica:** Enlace a pantalla completa al `index.html` de la infografía interactiva de planta.
     - **Vista Rápida:** Visualización modal interactiva (*iframe*) integrada en la misma ventana.

3. **Estructura y Branding Obligatorio:**
   - Logotipo oficial `logo_villalba.png` en el cuadrante superior izquierdo.
   - Empresa: **`VILLALBA HNOS. IMPLANTES S.A.`**
   - Eslogan: *"Innovación, liderazgo y experiencia al servicio de la salud."*
   - Selector de modo: Modo Hoja Clara / Modo Blueprint Taller persistente en `localStorage`.
   - Buscador en tiempo real de cotas, tolerancias, materiales y códigos documentales.

4. **Diseño y Adaptabilidad 100% Responsiva (Móviles y Tablets):**
   - **Zero Horizontal Overflow:** `html, body { overflow-x: hidden; max-width: 100vw; width: 100%; }`.
   - **Breakpoints calibrados:**
     - `≤ 960px` (Tablets apaisadas): Grilla fluida y paddings adaptados.
     - `≤ 768px` (Tablets verticales y phablets): Banner superior apilado, métricas en 3 columnas fluidas, controles al 100% de ancho.
     - `≤ 640px` (Smartphones estándar): Encabezado vertical ergonómico, botones de acción táctiles de mínimo 44px de alto apilados verticalmente, buscador táctil amplio.
     - `≤ 480px` (Smartphones compactos 360-412px): Tarjetas de previsualización técnica en columna y modal a pantalla completa adaptativa.

5. **Exclusi�n de Normas Regulatorias Gen�ricas (2026-10-27):**
   - Queda formalmente desestimado incluir textos, leyendas o badges alusivos a normas como ? ISO 13485:2016, ? ANMAT DISP. 3266/13, ? ASTM F136 / F138 tanto en el pie de p�gina del portal como en los cuadros/tarjetas de control t�cnico.
   - Las etiquetas de las tarjetas quedan reservadas con exclusividad para instrumental metrol�gico (*Calibres Digitales*, *Plantilla de Forma*), tolerancias y especificaciones operativas.
