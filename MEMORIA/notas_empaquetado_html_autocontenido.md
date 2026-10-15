# Memoria Técnica: Skill Empaquetado HTML Autocontenido

Fecha: 2026-10-09
Autor: Antigravity Agent
Proyecto: Creador de Infografías / VILLALBA HNOS. IMPLANTES S.A.

---

## 1. Propósito y Origen
Creada a solicitud del usuario tras consolidar con éxito la **Línea de Tiempo Histórica & Procesos** de Villalba en un archivo único (`index.html`) que integra toda la presentación, estilos y lógica en un solo documento sin dependencias externas.

---

## 2. Archivos Maestros de la Skill
- **Ruta de Descubrimiento Activo:** [.agents/skills/empaquetado-html-autocontenido/SKILL.md](file:///a:/PROYECTOS%20ANTIGRAVITY/CREADOR%20DE%20INFOGRAF%C3%8DAS/.agents/skills/empaquetado-html-autocontenido/SKILL.md)
- **Ruta Espejo en Workspace:** [SKILLS/empaquetado-html-autocontenido/SKILL.md](file:///a:/PROYECTOS%20ANTIGRAVITY/CREADOR%20DE%20INFOGRAF%C3%8DAS/SKILLS/empaquetado-html-autocontenido/SKILL.md)
- **Implementación de Referencia:** [PROYECTOS/ARTÍSTICOS/Línea de tiempo/index.html](file:///a:/PROYECTOS%20ANTIGRAVITY/CREADOR%20DE%20INFOGRAF%C3%8DAS/PROYECTOS/ART%C3%8DSTICOS/L%C3%ADnea%20de%20tiempo/index.html)

---

## 3. Principios Fundamentales
1. **Zero External Local Dependencies:** Todo CSS dentro de `<style>` y todo JS dentro de `<script>`.
2. **Compatibilidad Universal:** Abrir con doble clic en Windows/Mac (`file:///`) sin requerir servidor HTTP local.
3. **Incrustación Inmediata en CMS:** Compatible con Gutenberg, Elementor, Divi o cualquier bloque HTML.
4. **Protección de Scope:** Encapsulación de scripts en IIFE `(function() { ... })();` y aislamiento de selectores si se destina a páginas huésped.
5. **Inmovilidad Estructural:** Conservación estricta de `box-sizing: border-box`, `html { overflow-y: scroll; }` y alturas bloqueadas (`min-height`).
