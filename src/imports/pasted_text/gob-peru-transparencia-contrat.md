Diseña una interfaz web (Dashboard completo de extremo a extremo) para una plataforma del Gobierno Peruano (estilo Gob.pe), enfocada en "Transparencia" en contrataciones públicas. Diseño limpio, UI profesional, estructurado al 100% con Auto-Layout y sistema de rejilla (grid) de 8px.

COLORES Y MARCA:
- Color Principal: Rojo Gob.pe (#C3002F) para estados activos, botones y enlaces principales.
- Fondo Oscuro: Carbón/Azul noche oscuro (#1F2937) para el encabezado principal.
- Fondos Claros: Blanco puro (#FFFFFF) para tarjetas/inputs, y gris ultra claro (#F9FAFB) para el fondo general de la página.
- Colores de Alerta/Estado: Verde (#15803D) para cumplimiento alto, Naranja/Amarillo (#D97706 o #EAB308) para estado medio/parcial, y Rojo (#DC2626) para riesgo alto o estado crítico.
- Tipografía: Sans-serif limpia (Inter o Roboto), con alto contraste.

ESTRUCTURA DEL DISEÑO (De arriba hacia abajo):

1. BARRA DE NAVEGACIÓN SUPERIOR:
- Encabezado delgado y blanco con menú de texto horizontal. Izquierda: "Indicadores de convocatorias", "Explora contrataciones", "Mapa infraestructura". Centro/Derecha: "Transparencia" (Activo: Texto rojo con línea sólida roja debajo) y "Ayuda".

2. BANNER PRINCIPAL (Fondo oscuro):
- Sección de ancho completo en gris oscuro (#1F2937).
- Izquierda: Enlace pequeño "← Volver al inicio" en rojo. Abajo, título grande "Transparencia" en blanco y subtítulo en gris claro: "Indicadores de transparencia e integridad en las contrataciones públicas."
- Derecha: Espacio reservado para un escudo institucional simplificado.

3. FILA DE FILTROS (Tarjeta Flotante):
- Tarjeta blanca con bordes redondeados y sombra suave. Formulario horizontal con:
  * "ENTIDAD": Input de búsqueda ("Buscar entidad...").
  * "OBJETO DE CONTRATACIÓN": Dropdown select.
  * "AÑO": Dropdown select ("2026").
  * "MES": Dropdown select ("Junio").
  * Botón "Actualizar": Relleno en Rojo Gob.pe (#C3002F), texto blanco e icono de lupa.
  * Botón "Limpiar": Outline con borde gris e icono de "X".

4. BARRA DE ESTADO:
- Banner de alerta en azul claro (#EFF6FF) con icono de información y texto azul: "Mostrando todas las entidades · 2026 · Jun".

5. CUADRÍCULA DE MÉTRICAS (6 Tarjetas KPI):
- Fila horizontal con 6 tarjetas blancas idénticas (centradas con Auto-Layout):
  * Tarjeta 1: Icono trofeo, valor "85/100" (azul), etiqueta "Índice de transparencia global".
  * Tarjeta 2: Icono advertencia, valor "22%" (rojo), etiqueta "Tasa de postor único".
  * Tarjeta 3: Icono balanza, valor "4.8%" (naranja), etiqueta "Apelaciones fundadas".
  * Tarjeta 4: Icono campana, valor "4" (rojo oscuro), etiqueta "Alertas activas".
  * Tarjeta 5: Icono documento-check, valor "68%" (verde), etiqueta "Contratos publicados OCDS".
  * Tarjeta 6: Icono gráfico, valor "32%" (azul oscuro), etiqueta "Pagos vinculados SIAF".

6. SECCIÓN DE GRÁFICOS ESTADÍSTICOS (Cuadrícula de 2x2 Tarjetas Grandes):
- Una rejilla de dos columnas que contiene 4 tarjetas blancas independientes con títulos e iconos pequeños:
  * Tarjeta A - "Checklist de Transparencia Activa (OCDS)": 4 gráficos de anillo (donuts) alineados horizontalmente: "100%" (Verde, "Convocatoria"), "95%" (Verde, "Bases Integradas"), "68%" (Naranja, "Contratos Firmados"), "32%" (Rojo, "Pagos SIAF"). Cada uno con su respectivo badge de estado ("✓ Cumple", "⚠ Parcial", "⚠ Crítico").
  * Tarjeta B - "Tasa de postor único por sector": Gráfico de barras verticales (Salud, Transportes, Educación, Defensa, Vivienda, Agricultura, Otros). Las barras alternan entre color Rojo y Naranja.
  * Tarjeta C - "Apelaciones ante el Tribunal OSCE": Gráfico de dona (donut chart) grande dividido en 4 secciones (Verde oscuro, gris, naranja y rojo). Leyenda horizontal inferior.
  * Tarjeta D - "Evolución del índice de transparencia": Gráfico de líneas continuo con área sombreada azul claro debajo. Eje X con meses (Ene a Jun) mostrando tendencia ascendente.

7. SECCIÓN FINAL: ALERTAS DE INTEGRIDAD (Contenedor de Tarjetas de Riesgo):
- Una tarjeta blanca contenedora grande de ancho completo.
- Cabecera: Título "⚠ Alertas de Integridad" en color rojo oscuro y subtítulo en texto gris: "Situaciones que requieren revisión o intervención institucional".
- Cuadrícula de Tarjetas de Alerta (Grid de 3 columnas x 2 filas, total 6 tarjetas internas):
  * Estilo de tarjetas de riesgo alto (Tarjetas 1 y 2): Fondo teñido de un rojo muy sutil (#FEF2F2), borde delgado color rojo pastel. En la esquina superior izquierda un badge con un punto rojo que dice "● ALTO" en mayúsculas.
  * Estilo de tarjetas de riesgo medio (Tarjetas 3, 4, 5 y 6): Fondo teñido de un amarillo/naranja muy sutil (#FEFCE8), borde delgado color amarillo pastel. En la esquina superior izquierda un badge con un punto amarillo que dice "● MEDIO" en mayúsculas.
  * Contenido interno de cada tarjeta (Alineado a la izquierda con Auto-Layout):
    - Título de la Entidad en texto negro y negrita (Ej: "Gobierno Regional de Ucayali", "Municipalidad Provincial de Iquitos", "Hospital Regional de Lambayeque", "UGEL Arequipa Norte", "PRONIED – UE 108", "Municipalidad Distrital de Villa El Salvador").
    - Descripción del problema en texto gris oscuro mediano (Ej: "Contratos sin publicar en SEACE...", "Postor único en procesos consecutivos...", "Apelación fundada...").
    - Fila de metadatos en texto gris claro y tipografía pequeña con un icono de calendario: "📅 Detectado: DD/MM/AAAA - Área: [Nombre de área o número de expediente]".
    - Enlace inferior: Texto interactivo en color Rojo Gob.pe con una flecha hacia la derecha (Ej: "Ver procesos →" o "Ver contrato →").
- Esquina inferior derecha del contenedor grande: Un enlace destacado en negrita y color Rojo Gob.pe que dice "Ver todas las alertas →".

Asegúrate de que toda la jerarquía visual sea impecable y fácil de editar de manera modular en Figma.