# MEMORIA TÉCNICA: PORTAL CENTRAL HOME (index.html)

**Fecha:** 2026-10-27  
**Proyecto:** Creador de Infografías / VILLALBA HNOS. IMPLANTES S.A.  
**Repositorio GitHub:** https://github.com/piscu832/control-calidad-home.git  
**GitHub Pages URL:** https://piscu832.github.io/control-calidad-home/  

---

## 1. Criterios Obligatorios y Reglas de la HOME (Confirmados por el Usuario)

1. **Exclusividad para Proyectos Técnicos:**
   - La página HOME (index.html en la raíz) está destinada **ÚNICA Y EXCLUSIVAMENTE** a proyectos, protocolos metrológicos y hojas de control de calidad técnica (PROYECTOS/TÉCNICOS/*).
   - **PROHIBIDO** mostrar, listar o enlazar proyectos artísticos o institucionales (*Línea de tiempo*, *Mapa de Distribuidores*) en la HOME. Los proyectos artísticos residen exclusivamente en su carpeta PROYECTOS/ARTÍSTICOS/ y no deben mezclarse en el portal de calidad.

2. **Prohibición de Acceso al PDF Original en la HOME:**
   - **NO** se debe mostrar ni incluir botones o enlaces de acceso directo al archivo Verificacion_Hip_Lock_Puntos.pdf u otros PDF originales de trabajo en las tarjetas del portal HOME.
   - El acceso debe limitarse estrictamente a:
     - **Abrir Hoja Técnica:** Enlace a pantalla completa al index.html de la infografía interactiva de planta.
     - **Vista Rápida:** Visualización modal interactiva (*iframe*) integrada en la misma ventana.

3. **Estructura y Branding Obligatorio:**
   - Logotipo oficial logo_villalba.png en el cuadrante superior izquierdo.
   - Empresa: **VILLALBA HNOS. IMPLANTES S.A.**
   - Eslogan: *"Innovación, liderazgo y experiencia al servicio de la salud."*
   - Selector de modo: Modo Hoja Clara / Modo Blueprint Taller persistente en localStorage.
   - Buscador en tiempo real de cotas, tolerancias, materiales y códigos documentales.

4. **Diseño y Adaptabilidad 100% Responsiva (Móviles y Tablets):**
   - **Zero Horizontal Overflow:** html, body { overflow-x: hidden; max-width: 100vw; width: 100%; }.
   - **Breakpoints calibrados:**
     - <= 960px (Tablets apaisadas): Grilla fluida y paddings adaptados.
     - <= 768px (Tablets verticales y phablets): Banner superior apilado, métricas en 3 columnas fluidas, controles al 100% de ancho.
     - <= 640px (Smartphones estándar): Encabezado vertical ergonómico, botones de acción táctiles de mínimo 44px de alto apilados verticalmente, buscador táctil amplio.
     - <= 480px (Smartphones compactos 360-412px): Tarjetas de previsualización técnica en columna y modal a pantalla completa adaptativa.

5. **Exclusión de Normas Regulatorias Genéricas (2026-10-27):**
   - Queda formalmente desestimado incluir textos, leyendas o badges alusivos a normas genéricas (ISO 13485:2016, ANMAT DISP. 3266/13, ASTM F136 / F138) tanto en el pie de página del portal como en los cuadros/tarjetas de control técnico.
   - Las etiquetas de las tarjetas quedan reservadas con exclusividad para instrumental metrológico (*Calibres Digitales*, *Plantilla de Forma*), tolerancias y especificaciones operativas.

6. **Estándar de Representación de Nuevos Proyectos en la HOME (2026-10-27):**
   - Ante la incorporación de cualquier nuevo proyecto en PROYECTOS/TÉCNICOS/<nuevo_proyecto>/:
     - Debe crearse en la grilla #cardsGridTecnicos una tarjeta (.tech-card) con el **mismo diseño exacto y componentes visuales** que la tarjeta de Hip-Lock.
     - **Extracción de Datos del PDF Principal:** Toda la información de la tarjeta debe extraerse del PDF técnico de control de la carpeta correspondiente:
       - **Badge Documental (.doc-pill):** Código de documento y revisión según el PDF (ej. DOC: QC-XX-YY | REV. ZZ).
       - **Badge de Auditoría (.status-badge):** Estado oficial (ej. ● HOMOLOGADO o ● AUDITADO).
       - **Título (<h3>):** Nombre técnico normalizado de la pieza (ej. Tallo Hip-Lock Semielaborados).
       - **Familia/Subtítulo (.card-family):** Categoría biomecánica o especialidad quirúrgica con prefijo #.
       - **Caja de Cotas Metrológicas (.card-preview-thumb):** 4 filas clave:
         1. *Puntos de control:* cantidad de cotas críticas (ej. N cotas críticas).
         2. *Rasgo principal / conexión:* tipo de cono, rosca o característica geométrica destacada.
         3. *Tolerancia crítica:* la tolerancia más estricta o crítica del PDF (ej. runout, excentricidad, paralelismo).
         4. *Materiales:* aleación o materiales normados (ej. Titanio / Acero 316L, etc.).
         - Icono metrológico a la derecha dentro de la pastilla .thumb-icon-box.
       - **Etiquetas de Instrumental (.card-tags):** Herramientas metrológicas usadas en la inspección (ej. Calibres Digitales, Plantilla de Forma, Micrómetro, Doble Entorno A4/Web), sin normas genéricas.
       - **Acciones:**
         - Abrir Hoja Técnica (.btn-action-primary): enlace a ./PROYECTOS/TÉCNICOS/<nombre_proyecto>/index.html.
         - Vista Rápida (.btn-action-secondary): abre el modal con el visor interactivo de la hoja.
     - **Actualización de Métricas del Banner:** Incrementar el contador de hojas técnicas (#metric-docs) y sumar los puntos críticos al total global.