# Buscador Público de Contrataciones del Estado

Prototipo funcional de una interfaz pública de búsqueda para **SEACE 4.0**, la nueva plataforma de compras del Estado peruano. Es un anexo complementario del módulo de preparación de compras (Actuaciones Preparatorias) en el que trabajé en el OECE (Organismo Especializado para las Contrataciones Públicas Eficientes).

Cualquier persona (ciudadanía, proveedores, entidades) puede buscar licitaciones, contratos y entidades públicas sin iniciar sesión.

> **Es un prototipo de diseño, no el sistema oficial.** Funciona con datos de ejemplo, sin conexión a servicios reales.

**Autora:** Sandra Ramírez, Product Designer (UX/UI) · [LinkedIn](https://www.linkedin.com/in/sandra-ram%C3%ADrez-r%C3%ADos-47439b173/) · [Portafolio](https://sam2207r.github.io)

## Ver el prototipo

- Página publicada (GitHub Pages): [sam2207r.github.io/buscador-publico-seace](https://sam2207r.github.io/buscador-publico-seace/)
- Prototipo en Figma Make: [abrir buscador](https://www.figma.com/make/L9p6jQMMn6gB8svnyXPweb/%F0%9F%94%B5AZUL--Public-Search-Interface--copia-?fullscreen=1&code-node-id=0-9)

## Qué incluye

- **Buscador principal** con filtro por año (2004 a 2026), campo de texto y botón de búsqueda, más búsqueda avanzada.
- **Temas más buscados** como accesos rápidos (por ejemplo, Vaso de Leche, Material de Construcción, Medicamentos, Maquinarias).
- **Búsqueda por etapa del proceso:** Contratos Menores, Actuaciones Preparatorias, Selección y Contratos.
- **Resultados** en tarjetas y en tabla, con filtros laterales dinámicos según el tipo de búsqueda.
- **Fichas de detalle** de bienes, servicios, obras y contratos.
- **Obras públicas, indicadores, transparencia y ayuda.**
- **Favoritos** para guardar resultados.

## Decisiones de diseño

- Lenguaje claro para quien no conoce el sistema: las etapas del proceso se explican con nombres y descripciones breves, no con jerga técnica.
- Un solo punto de entrada de búsqueda, con filtros que cambian según lo que la persona busca.
- Identidad visual institucional de SEACE, con jerarquía clara y alto contraste.

## Tecnologías

React 18 · TypeScript · Vite · Tailwind CSS 4 · Radix UI / shadcn/ui · Material UI · Recharts · Motion

Generado y refinado en [Figma Make](https://www.figma.com/make/).

## Cómo correrlo en local

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev
```

Se abre en `http://localhost:5173`. Para generar la versión de producción: `npm run build`.

## Estructura

```
src/
  app/
    App.tsx          navegación entre pantallas
    pages/           pantallas (inicio, búsqueda, fichas de detalle, obras, indicadores…)
    components/      componentes de búsqueda, filtros, resultados y tarjetas
    data/            datos de ejemplo
  imports/           referencias de pantallas del sistema actual usadas como insumo
  styles/            tema y estilos globales
```

## Datos y créditos

- Los datos son de ejemplo y sirven solo para demostrar la interfaz.
- Componentes de [shadcn/ui](https://ui.shadcn.com/) (licencia MIT) y fotografías de [Unsplash](https://unsplash.com) (ver `ATTRIBUTIONS.md`).
- El nombre y la identidad visual de OECE y SEACE pertenecen a sus titulares. Este repositorio es una muestra de trabajo de diseño.

---

## English summary

Working prototype of a public search interface for **SEACE 4.0**, Peru's new government procurement platform, built as a complementary annex to the purchase-preparation module I worked on at OECE. Anyone can search tenders, contracts and public entities without signing in.

It is a design prototype, not the official system, and runs on sample data. Built with React, TypeScript, Vite and Tailwind CSS, generated and refined in Figma Make. Run it with `npm install && npm run dev`.

Author: Sandra Ramírez, Product Designer (UX/UI).
