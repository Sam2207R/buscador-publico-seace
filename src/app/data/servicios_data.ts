export const PROCESOS: any[] = [
  {
    codigo: "LP-SM-2-2026-MDC-1",
    objeto: "Adquisición de equipos de protección personal técnico y administrativo de Electro Oriente S.A. (Lote 1)",
    monto: 412500.00,
    estado: "contratado" as const,
    estadoLabel: "Contratado",
    faseActualIdx: 2,
    fasesCompletas: [0,1,2],
    proveedor: "AGROINDUSTRIAS DEL NORTE S.A.C.",
    comite: {
      nroConvocatoria: 1,
      tipoConductor: "Comité",
      descripcionConductor: "",
      tipoDocumento: "RESOLUCIÓN N° 018-2026-MDM-GM",
      fechaEmision: "18/03/2026",
      integrantes: [
        { nombre: "JORGE LUIS RAMOS TORRES", tipo: "Titular Presidente" },
        { nombre: "MARÍA ELENA VÁSQUEZ DÍAZ", tipo: "Titular Miembro 1" },
        { nombre: "CARLOS ALBERTO NÚÑEZ SILVA", tipo: "Titular Miembro 2" },
        { nombre: "ROSA AMELIA CASTRO LEÓN", tipo: "Suplente Presidente" },
        { nombre: "LUIS FERNANDO ORTIZ MEJÍA", tipo: "Suplente Miembro 1" },
        { nombre: "ANA PATRICIA SALAZAR RUIZ", tipo: "Suplente Miembro 2" }
      ]
    },
    ofertas: [
      { ruc: "20527909059", nombre: "AGROINDUSTRIAS DEL NORTE S.A.C.", fecha: "13/05/2026", hora: "09:15:22", usuario: "20527909059",
        esConsorcio: false,
        repLegal: { nombre: "MIGUEL ANGEL", apPat: "TORRES", apMat: "BAZÁN", tipoDoc: "DNI", nroDoc: "27834561" },
        registro: { estadoRegistro: "Válido", estadoPropuesta: "Enviado", motivoObs: "", justificacion: "" },
        documentos: [ { nombre: "AGROINDUSTRIAS_NORTE_OFERTA_TECNICA.pdf", tipo: "pdf", tamano: "84 MB" } ],
        items: [ { descripcion: "HOJUELAS PRECOCIDAS MULTI-CEREAL (AVENA, QUINUA, KIWICHA)", cantSolicitada: 1, vrve: "S/ 206,250.00", cantOfertada: 1, montoOfertado: "S/ 198,500.00", docEspecificos: "—", leySelva: "No" } ]
      },
      { ruc: "20601234567", nombre: "COMERCIALIZADORA ANDINA DE ALIMENTOS S.A.C.", fecha: "13/05/2026", hora: "11:42:08", usuario: "20601234567" }
    ],
    datos: {
      numeroFup: "FUP-2026-001234",
      estadoFicha: "Aprobado",
      fechaAprobacion: "20/06/2026",
      fechaRegistro: "20/06/2026"
    },
    anuncio: {
      n: "01",
      fechaPublicacion: "24/06/2026 17:00",
      entidad: "MUNICIPALIDAD DISTRITAL DE CORTEGANA",
      tipoSeleccion: "Licitación Pública",
      objetoContratacion: "Bien",
      descripcionObjeto: "Adquisición de equipos de protección personal técnico y administrativo — Lote 1",
      alcance: "Adquisición y transporte de insumos hasta los almacenes municipales de Cortegana, según programación de despacho solicitada por la entidad.",
      cantidad: "45,800 kg",
      plazoDias: 120,
      fechaConvocatoria: "10/07/2026"
    },
    actuaciones: {
      entidad: {
        nombre: "MUNICIPALIDAD DISTRITAL DE CORTEGANA",
        ruc: "20214061474",
        direccion: "JR. GRAU N° 100 - CORTEGANA, CAJAMARCA",
        web: "www.municortegana.gob.pe",
        telefono: "(076) 555-0101"
      },
      procedimiento: {
        objeto: "Bien",
        descripcion: "Adquisición de equipos de protección personal técnico y administrativo de Electro Oriente S.A. — Lote 1.",
        vrVeImporte: "S/ 412,500.00",
        derechoPart: "GRATUITO",
        fechaPublicacion: "24/06/2026 17:00",
        normativa: "Ley N° 32069 - Ley General de Contrataciones Públicas"
      },
      entidadContratante: { ruc: "20214061474", nombre: "MUNICIPALIDAD DISTRITAL DE CORTEGANA" },
      acuerdosComerciales: [
        "Acuerdo de Alianza del Pacífico Perú-México",
        "Tratado de Libre Comercio Perú-Corea",
        "Acuerdo de Libre Comercio Perú-Costa Rica"
      ]
    },
    seleccion: {
      nomenclatura: "LP-SM-2-2026-MDC-1",
      nConvocatoria: "1",
      tipoCompra: "Por la Entidad",
      normativa: "Ley N° 32069 - Ley General de Contrataciones Públicas",
      versionSEACE: "4",
      cronograma: [
        { etapa: "Convocatoria", inicio: "07/04/2026", fin: "07/04/2026" },
        { etapa: "Registro de participantes (Electrónica)", inicio: "08/04/2026 00:01", fin: "12/05/2026 23:59" },
        { etapa: "Formulación de consultas y observaciones (Electrónica)", inicio: "08/04/2026 00:01", fin: "16/04/2026 23:59" },
        { etapa: "Absolución de consultas y observaciones (Electrónica)", inicio: "27/04/2026", fin: "27/04/2026" },
        { etapa: "Integración de las Bases — A TRAVÉS DEL SEACE", inicio: "27/04/2026", fin: "27/04/2026" },
        { etapa: "Presentación de propuestas (Electrónica)", inicio: "13/05/2026 00:01", fin: "13/05/2026 23:59" },
        { etapa: "Calificación y Evaluación de propuestas", inicio: "30/06/2026", fin: "30/06/2026" },
        { etapa: "Otorgamiento de la Buena Pro — A TRAVÉS DEL SEACE", inicio: "30/06/2026 08:30", fin: "30/06/2026" }
      ],
      items: [
        {
          n: 1,
          descripcion: "HOJUELAS PRECOCIDAS MULTI-CEREAL (AVENA, QUINUA, KIWICHA)",
          cubso: "5000260010",
          cantidad: "22,900 kg — Unidad",
          vrve: "S/ 206,250.00",
          mype: "S/N",
          paquete: "Sí",
          estado: "Contratado",
          postores: [
            { postor: "AGROINDUSTRIAS DEL NORTE S.A.C.", mype: "No", selva: "No", bonif: "0%", cantAdj: "22,900 kg", montoAdj: "S/ 198,500.00" }
          ]
        },
        {
          n: 2,
          descripcion: "LECHE ENTERA EN POLVO Y AZÚCAR PARA PROGRAMA ALIMENTARIO",
          cubso: "5000260011",
          cantidad: "22,900 kg — Unidad",
          vrve: "S/ 206,250.00",
          mype: "S/N",
          paquete: "Sí",
          estado: "Desierto",
          postores: []
        }
      ],
      documentos: [
        { n: 1, etapa: "Convocatoria", documento: "Bases Administrativas", archivo: "Bases_Admin.pdf", tamanio: "2897 KB", fecha: "07/04/2026 17:26" },
        { n: 2, etapa: "Absolución de consultas y observaciones", documento: "Pliego de absolución de consultas y observaciones", archivo: "Absolucion.pdf", tamanio: "1 KB", fecha: "27/04/2026 18:25" },
        { n: 3, etapa: "Integración de las Bases", documento: "Bases Integradas", archivo: "Bases_Integradas.pdf", tamanio: "2903 KB", fecha: "27/04/2026 18:25" },
        { n: 4, etapa: "Presentación de propuestas", documento: "Documentos de Presentación de Propuestas", archivo: "DPP.pdf", tamanio: "23 KB", fecha: "27/05/2026 16:51" },
        { n: 5, etapa: "Otorgamiento de la Buena Pro", documento: "Acta de otorgamiento de Buena Pro", archivo: "Acta_BuenaPro.pdf", tamanio: "1180 KB", fecha: "30/06/2026 08:30" }
      ]
    },
    documentos: ["Bases del proceso.pdf", "TDR - Términos de referencia.pdf", "Expediente técnico.pdf", "Buena Pro - Acta de otorgamiento.pdf"]
  },
  {
    codigo: "LP-SM-2-2026-MDC-2",
    objeto: "Adquisición de equipos de protección personal técnico y administrativo de Electro Oriente S.A. (Lote 2)",
    monto: 389200.00,
    estado: "publicado" as const,
    estadoLabel: "Publicado",
    faseActualIdx: 1,
    fasesCompletas: [0],
    proveedor: "3 proveedores adjudicados (Ítems 1, 2 y 3)",
    comite: {
      nroConvocatoria: 1,
      tipoConductor: "Comité",
      descripcionConductor: "",
      tipoDocumento: "RESOLUCIÓN N° 018-2026-MDM-GM",
      fechaEmision: "18/03/2026",
      integrantes: [
        { nombre: "JORGE LUIS RAMOS TORRES", tipo: "Titular Presidente" },
        { nombre: "MARÍA ELENA VÁSQUEZ DÍAZ", tipo: "Titular Miembro 1" },
        { nombre: "CARLOS ALBERTO NÚÑEZ SILVA", tipo: "Titular Miembro 2" },
        { nombre: "ROSA AMELIA CASTRO LEÓN", tipo: "Suplente Presidente" },
        { nombre: "LUIS FERNANDO ORTIZ MEJÍA", tipo: "Suplente Miembro 1" },
        { nombre: "ANA PATRICIA SALAZAR RUIZ", tipo: "Suplente Miembro 2" }
      ]
    },
    ofertas: [
      { ruc: "20601122334", nombre: "CEREALES ANDINOS DEL CENTRO S.A.C.", fecha: "05/08/2026", hora: "08:52:14", usuario: "20601122334",
        esConsorcio: false,
        repLegal: { nombre: "PATRICIA ISABEL", apPat: "MENDOZA", apMat: "RIVERA", tipoDoc: "DNI", nroDoc: "31245678" },
        registro: { estadoRegistro: "Válido", estadoPropuesta: "Enviado", motivoObs: "", justificacion: "" },
        documentos: [ { nombre: "CEREALES_ANDINOS_OFERTA_TECNICA.pdf", tipo: "pdf", tamano: "62 MB" } ],
        items: [ { descripcion: "HOJUELAS DE AVENA PRECOCIDA — SIERRA CENTRO", cantSolicitada: 1, vrve: "S/ 144,000.00", cantOfertada: 1, montoOfertado: "S/ 138,600.00", docEspecificos: "—", leySelva: "No" } ]
      },
      { ruc: "20527909059", nombre: "AGROINDUSTRIAS DEL NORTE S.A.C.", fecha: "05/08/2026", hora: "10:20:47", usuario: "20527909059" }
    ],
    datos: {
      numeroFup: "FUP-2026-001235",
      estadoFicha: "En evaluación de propuestas",
      fechaAprobacion: "—",
      fechaRegistro: "22/06/2026"
    },
    anuncio: {
      n: "32",
      fechaPublicacion: "24/06/2026 17:05",
      entidad: "MUNICIPALIDAD DISTRITAL DE CORTEGANA",
      tipoSeleccion: "Licitación Pública",
      objetoContratacion: "Bien",
      descripcionObjeto: "Adquisición de equipos de protección personal técnico y administrativo — Lote 2",
      alcance: "Adquisición y transporte de insumos hasta los almacenes municipales de Cortegana, según programación de despacho solicitada por la entidad.",
      cantidad: "41,200 kg",
      plazoDias: 120,
      fechaConvocatoria: "11/07/2026"
    },
    actuaciones: {
      entidad: {
        nombre: "MUNICIPALIDAD DISTRITAL DE CORTEGANA",
        ruc: "20214061474",
        direccion: "JR. GRAU N° 100 - CORTEGANA, CAJAMARCA",
        web: "www.municortegana.gob.pe",
        telefono: "(076) 555-0101"
      },
      procedimiento: {
        objeto: "Bien",
        descripcion: "Adquisición de equipos de protección personal técnico y administrativo de Electro Oriente S.A. — Lote 2, conforme al requerimiento aprobado por la gerencia de administración.",
        vrVeImporte: "S/ 389,200.00",
        derechoPart: "GRATUITO",
        fechaPublicacion: "24/06/2026 17:05",
        normativa: "Ley N° 32069 - Ley General de Contrataciones Públicas"
      },
      entidadContratante: { ruc: "20214061474", nombre: "MUNICIPALIDAD DISTRITAL DE CORTEGANA" },
      acuerdosComerciales: [
        "Acuerdo de Alianza del Pacífico Perú-México",
        "Tratado de Libre Comercio Perú-Corea",
        "Acuerdo de Libre Comercio Perú-Costa Rica"
      ]
    },
    seleccion: {
      nomenclatura: "LP-SM-2-2026-MDC-2",
      nConvocatoria: "2",
      tipoCompra: "Por la Entidad",
      normativa: "Ley N° 32069 - Ley General de Contrataciones Públicas",
      versionSEACE: "4",
      cronograma: [
        { etapa: "Convocatoria — A TRAVÉS DEL SEACE", inicio: "11/07/2026", fin: "11/07/2026" },
        { etapa: "Registro de participantes (Electrónica)", inicio: "12/07/2026 00:01", fin: "25/07/2026 23:59" },
        { etapa: "Formulación de consultas y observaciones (Electrónica)", inicio: "12/07/2026 00:01", fin: "18/07/2026 23:59" },
        { etapa: "Absolución de consultas y observaciones — A TRAVÉS DEL SEACE", inicio: "22/07/2026", fin: "22/07/2026" },
        { etapa: "Integración de las Bases — A TRAVÉS DEL SEACE", inicio: "25/07/2026", fin: "25/07/2026" },
        { etapa: "Presentación de propuestas (Electrónica)", inicio: "05/08/2026 00:01", fin: "05/08/2026 23:59" },
        { etapa: "Calificación y Evaluación de propuestas", inicio: "12/08/2026", fin: "12/08/2026" },
        { etapa: "Otorgamiento de la Buena Pro — A TRAVÉS DEL SEACE", inicio: "20/08/2026 15:00", fin: "20/08/2026" }
      ],
      items: [
        {
          n: 1,
          descripcion: "HOJUELAS DE AVENA PRECOCIDA — SIERRA CENTRO",
          cubso: "5000260010",
          cantidad: "16,000 kg — Unidad",
          vrve: "S/ 144,000.00",
          mype: "S/N",
          paquete: "Sí",
          estado: "Publicado",
          postores: [
            { postor: "CEREALES ANDINOS DEL CENTRO S.A.C.", mype: "No", selva: "No", bonif: "0%", cantAdj: "16,000 kg", montoAdj: "S/ 138,600.00" }
          ]
        },
        {
          n: 2,
          descripcion: "HOJUELAS DE QUINUA PRECOCIDA — SIERRA CENTRO",
          cubso: "5000260011",
          cantidad: "9,480 kg — Unidad",
          vrve: "S/ 128,000.00",
          mype: "S/N",
          paquete: "Sí",
          estado: "Publicado",
          postores: [
            { postor: "AGROINDUSTRIAS DEL NORTE S.A.C.", mype: "No", selva: "No", bonif: "0%", cantAdj: "9,480 kg", montoAdj: "S/ 123,200.00" }
          ]
        },
        {
          n: 3,
          descripcion: "HOJUELAS DE KIWICHA PRECOCIDA — SIERRA CENTRO",
          cubso: "5000260012",
          cantidad: "7,220 kg — Unidad",
          vrve: "S/ 79,200.00",
          mype: "S/N",
          paquete: "Sí",
          estado: "Publicado",
          postores: [
            { postor: "NUTRIALIMENTOS SIERRA CENTRO E.I.R.L.", mype: "No", selva: "No", bonif: "0%", cantAdj: "7,220 kg", montoAdj: "S/ 76,300.00" }
          ]
        },
        {
          n: 4,
          descripcion: "LECHE ENTERA EN POLVO — SIERRA CENTRO",
          cubso: "5000260013",
          cantidad: "5,800 kg — Unidad",
          vrve: "S/ 24,500.00",
          mype: "S/N",
          paquete: "Sí",
          estado: "Desierto",
          postores: []
        },
        {
          n: 5,
          descripcion: "AZÚCAR RUBIA DOMÉSTICA — SIERRA CENTRO",
          cubso: "5000260014",
          cantidad: "2,700 kg — Unidad",
          vrve: "S/ 13,500.00",
          mype: "S/N",
          paquete: "Sí",
          estado: "Desierto",
          postores: []
        }
      ],
      documentos: [
        { n: 1, etapa: "Convocatoria", documento: "Bases Administrativas", archivo: "Bases_Admin_L2.pdf", tamanio: "2754 KB", fecha: "11/07/2026 09:00" },
        { n: 2, etapa: "Absolución de consultas y observaciones", documento: "Pliego de absolución de consultas y observaciones", archivo: "Absolucion_L2.pdf", tamanio: "1 KB", fecha: "22/07/2026 17:30" },
        { n: 3, etapa: "Integración de las Bases", documento: "Bases Integradas", archivo: "Bases_Integradas_L2.pdf", tamanio: "2811 KB", fecha: "25/07/2026 16:00" },
        { n: 4, etapa: "Presentación de propuestas", documento: "Documentos de Presentación de Propuestas", archivo: "DPP_L2.pdf", tamanio: "18 KB", fecha: "05/08/2026 23:59" },
        { n: 5, etapa: "Otorgamiento de la Buena Pro", documento: "Acta de otorgamiento de Buena Pro (Ítems 1, 2 y 3) y declaratoria de desierto (Ítems 4 y 5)", archivo: "Acta_BuenaPro_Desierto_L2.pdf", tamanio: "1420 KB", fecha: "20/08/2026 15:00" }
      ]
    },
    documentos: ["Bases del proceso.pdf", "TDR - Términos de referencia.pdf", "Acta de absolución de consultas.pdf", "Buena Pro - Acta de otorgamiento.pdf", "Acta de declaratoria de desierto - Ítems 4 y 5.pdf"]
  }
];
export const EC_DATA: Record<string, any> = {
  "LP-SM-2-2026-MDC-1": {
    desc: "CONTRATO PARA LA ADQUISICIÓN DE HOJUELAS PRECOCIDAS PARA EL PROGRAMA DE COMPLEMENTACIÓN ALIMENTARIA — LOTE 1: SIERRA NORTE",
    nom: "LP-SM-2-2026-MDC-1",
    ent: "20214061474-MUNICIPALIDAD DISTRITAL DE CORTEGANA",
    con: "20527909059-AGROINDUSTRIAS DEL NORTE S.A.C.",
    nct: "CONTRATO N°05-2026-MDM-Q/GM",
    mto: 198500.00, ccp: 198500.00, mon: "Soles", obj: "BIEN",
    fsus: "30/03/2026", fpub: "26/05/2026", fini: "31/03/2026", ffin: "31/07/2026", lug: "CAJAMARCA",
    item: {
      cubso: "5612150600070970-CARPETA MULTIPLE DE MADERA",
      desc: "ADQUISICIÓN DE HOJUELAS PRECOCIDAS PARA EL PROGRAMA SOCIAL — SIERRA NORTE",
      lugar: "CAJAMARCA/SANTA CRUZ/CORTEGANA", monto: 198500.00, um: "Unidad", cant: 1
    },
    gar: {
      clase: "Garantía de fiel cumplimiento", tipo: "Carta Fianza",
      num: "0011-0083-9800004616-33", monto: 17865.00, emisor: "BANCO BBVA PERÚ",
      femi: "18/03/2026", fven: "16/06/2026", cond: "No vigente", fpub: "26/05/2026 02:05:12"
    },
    inv: {
      nombre: "MEJORAMIENTO Y AMPLIACION DE LOS SERVICIOS EDUCATIVOS DEL NIVEL SECUNDARIO DE LA I.E. SAN FRANCISCO DE ASIS - MARCAPATA - QUISPICANCHI - CUSCO",
      cui: "2275110", url: "https://ofi5.mef.gob.pe/repseguim/proyinv09.html?codigo=2275110"
    },
    af: {
      total: 198500.00, pag: 119100.00, pen: 79400.00, pct: 60,
      vals: [
        {n:1,per:"Abr 2026",mto:39700,st:"ok",f:"15/04/2026"},
        {n:2,per:"May 2026",mto:39700,st:"ok",f:"16/05/2026"},
        {n:3,per:"Jun 2026",mto:39700,st:"ok",f:"12/06/2026"},
        {n:4,per:"Jul 2026",mto:39700,st:"pe",f:"—"},
        {n:5,per:"Jul 2026 (final)",mto:39700,st:"pe",f:"—"}
      ]
    },
    fis: {
      pct: 55, total: 5, comp: 3,
      ents: [
        {desc:"Plan de distribución y cronograma logístico aprobado",st:"ok",f:"05/04/2026"},
        {desc:"Primera entrega parcial — 18,410 kg almacenes zona norte",st:"ok",f:"22/04/2026"},
        {desc:"Segunda entrega parcial — 18,410 kg almacenes zona centro",st:"ok",f:"20/05/2026"},
        {desc:"Tercera entrega parcial — 4,980 kg almacenes pendientes",st:"pe",f:"—"},
        {desc:"Informe final de conformidad y acta de cierre",st:"pe",f:"—"}
      ]
    },
    ub: {lat:-6.050,lng:-79.010,ubg:"CAJAMARCA / SANTA CRUZ / CORTEGANA"},
    ci: {
      ent: "MINISTERIO DE TRANSPORTES Y COMUNICACIONES",
      obra: "EJECUCIÓN DE LA OBRA REHABILITACIÓN DE PUENTES PAQUETE 7 OBRA 3: PUENTE LA PISHGA Y ACCESOS - CAJAMARCA",
      cui: "2437746", fsus: "01/12/2023", fap: "01/10/2026",
      con: "GUARNIZO CORP S.A.C.", res: "TELLO GONZALES, JOSE REYNALDO", sup: "MEZA CARBAJAL, GREGORIO WENCESLAO",
      asientos: [
        {n:390,tit:"PARTIDAS ATRASADAS DE ACUERDO AL CRONOGRAMA DE AVANCE DE OBRA",tipo:"CONSTATACIÓN FÍSICA DE LA OBRA",f:"18/06/2025 04:55 PM",u:"MEZA CARBAJAL, GREGORIO WENCESLAO",rol:"Supervisor"},
        {n:389,tit:"RATIFICACION DE LA NECESIDAD DEL ADICIONAL N°02",tipo:"ADICIONALES DE OBRA",f:"18/06/2025 10:55 AM",u:"MEZA CARBAJAL, GREGORIO WENCESLAO",rol:"Supervisor"},
        {n:388,tit:"OCURRENCIA DE LLUVIAS",tipo:"OTRAS OCURRENCIAS",f:"16/06/2025 11:19 PM",u:"TELLO GONZALES, JOSE REYNALDO",rol:"Residente"},
        {n:387,tit:"PRESENTACIÓN DEL INFORME QUINCENAL N°5 – MES DE JUNIO 2025",tipo:"OTRAS OCURRENCIAS",f:"15/06/2025 11:18 PM",u:"TELLO GONZALES, JOSE REYNALDO",rol:"Residente"},
        {n:386,tit:"PRESENTACION DE SCTR ACTUALIZADO (SALUD Y PENSIÓN) DEL MES DE JUNIO-2025",tipo:"OTRAS OCURRENCIAS",f:"14/06/2025 10:58 PM",u:"TELLO GONZALES, JOSE REYNALDO",rol:"Residente"}
      ]
    }
  },
  "LP-SM-2-2026-MDC-2-1": {
    desc: "CONTRATO PARA LA ADQUISICIÓN DE HOJUELAS DE AVENA PRECOCIDA — LOTE 2: SIERRA CENTRO (ÍTEM 1)",
    nom: "LP-SM-2-2026-MDC-2",
    ent: "20214061474-MUNICIPALIDAD DISTRITAL DE CORTEGANA",
    con: "20601122334-CEREALES ANDINOS DEL CENTRO S.A.C.",
    nct: "CONTRATO N°06-2026-MDM-Q/GM",
    mto: 138600.00, ccp: 138600.00, mon: "Soles", obj: "BIEN",
    fsus: "20/08/2026", fpub: "25/08/2026", fini: "21/08/2026", ffin: "20/10/2026", lug: "CAJAMARCA",
    item: {
      cubso: "5000260010-HOJUELAS DE AVENA PRECOCIDA",
      desc: "ADQUISICIÓN DE HOJUELAS DE AVENA PRECOCIDA — SIERRA CENTRO (ÍTEM 1)",
      lugar: "CAJAMARCA/SANTA CRUZ/CORTEGANA", monto: 138600.00, um: "Unidad", cant: 1
    },
    gar: {
      clase: "Garantía de fiel cumplimiento", tipo: "Carta Fianza",
      num: "0011-0083-9800005721-10", monto: 12474.00, emisor: "BANCO DE CRÉDITO DEL PERÚ",
      femi: "18/08/2026", fven: "25/10/2026", cond: "Vigente", fpub: "25/08/2026 09:12:00"
    },
    inv: {
      nombre: "MEJORAMIENTO DEL PROGRAMA DE COMPLEMENTACIÓN ALIMENTARIA EN EL DISTRITO DE CORTEGANA - CAJAMARCA",
      cui: "2412987", url: "https://ofi5.mef.gob.pe/repseguim/proyinv09.html?codigo=2412987"
    },
    af: {
      total: 138600.00, pag: 83160.00, pen: 55440.00, pct: 60,
      vals: [
        {n:1,per:"Set 2026",mto:27720,st:"ok",f:"05/09/2026"},
        {n:2,per:"Set 2026",mto:27720,st:"ok",f:"20/09/2026"},
        {n:3,per:"Oct 2026",mto:27720,st:"ok",f:"10/10/2026"},
        {n:4,per:"Oct 2026",mto:27720,st:"pe",f:"—"},
        {n:5,per:"Oct 2026 (final)",mto:27720,st:"pe",f:"—"}
      ]
    },
    fis: {
      pct: 60, total: 5, comp: 3,
      ents: [
        {desc:"Plan de distribución y cronograma logístico aprobado",st:"ok",f:"25/08/2026"},
        {desc:"Primera entrega parcial — 6,000 kg zona centro",st:"ok",f:"10/09/2026"},
        {desc:"Segunda entrega parcial — 6,000 kg zona centro",st:"ok",f:"25/09/2026"},
        {desc:"Tercera entrega parcial — 4,000 kg pendientes",st:"pe",f:"—"},
        {desc:"Informe final de conformidad y acta de cierre",st:"pe",f:"—"}
      ]
    },
    ub: {lat:-6.050,lng:-79.010,ubg:"CAJAMARCA / SANTA CRUZ / CORTEGANA"},
    ci: {
      ent: "MINISTERIO DE TRANSPORTES Y COMUNICACIONES",
      obra: "EJECUCIÓN DE LA OBRA REHABILITACIÓN DE PUENTES PAQUETE 7 OBRA 3: PUENTE LA PISHGA Y ACCESOS - CAJAMARCA",
      cui: "2437746", fsus: "01/12/2023", fap: "01/10/2026",
      con: "GUARNIZO CORP S.A.C.", res: "TELLO GONZALES, JOSE REYNALDO", sup: "MEZA CARBAJAL, GREGORIO WENCESLAO",
      asientos: [
        {n:390,tit:"PARTIDAS ATRASADAS DE ACUERDO AL CRONOGRAMA DE AVANCE DE OBRA",tipo:"CONSTATACIÓN FÍSICA DE LA OBRA",f:"18/06/2025 04:55 PM",u:"MEZA CARBAJAL, GREGORIO WENCESLAO",rol:"Supervisor"},
        {n:389,tit:"RATIFICACION DE LA NECESIDAD DEL ADICIONAL N°02",tipo:"ADICIONALES DE OBRA",f:"18/06/2025 10:55 AM",u:"MEZA CARBAJAL, GREGORIO WENCESLAO",rol:"Supervisor"},
        {n:388,tit:"OCURRENCIA DE LLUVIAS",tipo:"OTRAS OCURRENCIAS",f:"16/06/2025 11:19 PM",u:"TELLO GONZALES, JOSE REYNALDO",rol:"Residente"},
        {n:387,tit:"PRESENTACIÓN DEL INFORME QUINCENAL N°5 – MES DE JUNIO 2025",tipo:"OTRAS OCURRENCIAS",f:"15/06/2025 11:18 PM",u:"TELLO GONZALES, JOSE REYNALDO",rol:"Residente"},
        {n:386,tit:"PRESENTACION DE SCTR ACTUALIZADO (SALUD Y PENSIÓN) DEL MES DE JUNIO-2025",tipo:"OTRAS OCURRENCIAS",f:"14/06/2025 10:58 PM",u:"TELLO GONZALES, JOSE REYNALDO",rol:"Residente"}
      ]
    }
  },
  "LP-SM-2-2026-MDC-2-2": {
    desc: "CONTRATO PARA LA ADQUISICIÓN DE HOJUELAS DE QUINUA PRECOCIDA — LOTE 2: SIERRA CENTRO (ÍTEM 2)",
    nom: "LP-SM-2-2026-MDC-2",
    ent: "20214061474-MUNICIPALIDAD DISTRITAL DE CORTEGANA",
    con: "20527909059-AGROINDUSTRIAS DEL NORTE S.A.C.",
    nct: "CONTRATO N°07-2026-MDM-Q/GM",
    mto: 123200.00, ccp: 123200.00, mon: "Soles", obj: "BIEN",
    fsus: "20/08/2026", fpub: "25/08/2026", fini: "21/08/2026", ffin: "20/10/2026", lug: "CAJAMARCA",
    item: {
      cubso: "5000260011-HOJUELAS DE QUINUA PRECOCIDA",
      desc: "ADQUISICIÓN DE HOJUELAS DE QUINUA PRECOCIDA — SIERRA CENTRO (ÍTEM 2)",
      lugar: "CAJAMARCA/SANTA CRUZ/CORTEGANA", monto: 123200.00, um: "Unidad", cant: 1
    },
    gar: {
      clase: "Garantía de fiel cumplimiento", tipo: "Carta Fianza",
      num: "0011-0083-9800005722-27", monto: 11088.00, emisor: "BANCO BBVA PERÚ",
      femi: "18/08/2026", fven: "25/10/2026", cond: "Vigente", fpub: "25/08/2026 09:14:00"
    },
    inv: {
      nombre: "MEJORAMIENTO DEL PROGRAMA DE COMPLEMENTACIÓN ALIMENTARIA EN EL DISTRITO DE CORTEGANA - CAJAMARCA",
      cui: "2412987", url: "https://ofi5.mef.gob.pe/repseguim/proyinv09.html?codigo=2412987"
    },
    af: {
      total: 123200.00, pag: 73920.00, pen: 49280.00, pct: 60,
      vals: [
        {n:1,per:"Set 2026",mto:24640,st:"ok",f:"05/09/2026"},
        {n:2,per:"Set 2026",mto:24640,st:"ok",f:"20/09/2026"},
        {n:3,per:"Oct 2026",mto:24640,st:"ok",f:"10/10/2026"},
        {n:4,per:"Oct 2026",mto:24640,st:"pe",f:"—"},
        {n:5,per:"Oct 2026 (final)",mto:24640,st:"pe",f:"—"}
      ]
    },
    fis: {
      pct: 60, total: 5, comp: 3,
      ents: [
        {desc:"Plan de distribución y cronograma logístico aprobado",st:"ok",f:"25/08/2026"},
        {desc:"Primera entrega parcial — 3,600 kg zona centro",st:"ok",f:"10/09/2026"},
        {desc:"Segunda entrega parcial — 3,600 kg zona centro",st:"ok",f:"25/09/2026"},
        {desc:"Tercera entrega parcial — 2,280 kg pendientes",st:"pe",f:"—"},
        {desc:"Informe final de conformidad y acta de cierre",st:"pe",f:"—"}
      ]
    },
    ub: {lat:-6.050,lng:-79.010,ubg:"CAJAMARCA / SANTA CRUZ / CORTEGANA"},
    ci: {
      ent: "MINISTERIO DE TRANSPORTES Y COMUNICACIONES",
      obra: "EJECUCIÓN DE LA OBRA REHABILITACIÓN DE PUENTES PAQUETE 7 OBRA 3: PUENTE LA PISHGA Y ACCESOS - CAJAMARCA",
      cui: "2437746", fsus: "01/12/2023", fap: "01/10/2026",
      con: "GUARNIZO CORP S.A.C.", res: "TELLO GONZALES, JOSE REYNALDO", sup: "MEZA CARBAJAL, GREGORIO WENCESLAO",
      asientos: [
        {n:390,tit:"PARTIDAS ATRASADAS DE ACUERDO AL CRONOGRAMA DE AVANCE DE OBRA",tipo:"CONSTATACIÓN FÍSICA DE LA OBRA",f:"18/06/2025 04:55 PM",u:"MEZA CARBAJAL, GREGORIO WENCESLAO",rol:"Supervisor"},
        {n:389,tit:"RATIFICACION DE LA NECESIDAD DEL ADICIONAL N°02",tipo:"ADICIONALES DE OBRA",f:"18/06/2025 10:55 AM",u:"MEZA CARBAJAL, GREGORIO WENCESLAO",rol:"Supervisor"},
        {n:388,tit:"OCURRENCIA DE LLUVIAS",tipo:"OTRAS OCURRENCIAS",f:"16/06/2025 11:19 PM",u:"TELLO GONZALES, JOSE REYNALDO",rol:"Residente"},
        {n:387,tit:"PRESENTACIÓN DEL INFORME QUINCENAL N°5 – MES DE JUNIO 2025",tipo:"OTRAS OCURRENCIAS",f:"15/06/2025 11:18 PM",u:"TELLO GONZALES, JOSE REYNALDO",rol:"Residente"},
        {n:386,tit:"PRESENTACION DE SCTR ACTUALIZADO (SALUD Y PENSIÓN) DEL MES DE JUNIO-2025",tipo:"OTRAS OCURRENCIAS",f:"14/06/2025 10:58 PM",u:"TELLO GONZALES, JOSE REYNALDO",rol:"Residente"}
      ]
    }
  },
  "LP-SM-2-2026-MDC-2-3": {
    desc: "CONTRATO PARA LA ADQUISICIÓN DE HOJUELAS DE KIWICHA PRECOCIDA — LOTE 2: SIERRA CENTRO (ÍTEM 3)",
    nom: "LP-SM-2-2026-MDC-2",
    ent: "20214061474-MUNICIPALIDAD DISTRITAL DE CORTEGANA",
    con: "20609933221-NUTRIALIMENTOS SIERRA CENTRO E.I.R.L.",
    nct: "CONTRATO N°08-2026-MDM-Q/GM",
    mto: 76300.00, ccp: 76300.00, mon: "Soles", obj: "BIEN",
    fsus: "20/08/2026", fpub: "25/08/2026", fini: "21/08/2026", ffin: "20/10/2026", lug: "CAJAMARCA",
    item: {
      cubso: "5000260012-HOJUELAS DE KIWICHA PRECOCIDA",
      desc: "ADQUISICIÓN DE HOJUELAS DE KIWICHA PRECOCIDA — SIERRA CENTRO (ÍTEM 3)",
      lugar: "CAJAMARCA/SANTA CRUZ/CORTEGANA", monto: 76300.00, um: "Unidad", cant: 1
    },
    gar: {
      clase: "Garantía de fiel cumplimiento", tipo: "Carta Fianza",
      num: "0011-0083-9800005723-44", monto: 6867.00, emisor: "SCOTIABANK PERÚ",
      femi: "18/08/2026", fven: "25/10/2026", cond: "Vigente", fpub: "25/08/2026 09:16:00"
    },
    inv: {
      nombre: "MEJORAMIENTO DEL PROGRAMA DE COMPLEMENTACIÓN ALIMENTARIA EN EL DISTRITO DE CORTEGANA - CAJAMARCA",
      cui: "2412987", url: "https://ofi5.mef.gob.pe/repseguim/proyinv09.html?codigo=2412987"
    },
    af: {
      total: 76300.00, pag: 45780.00, pen: 30520.00, pct: 60,
      vals: [
        {n:1,per:"Set 2026",mto:15260,st:"ok",f:"05/09/2026"},
        {n:2,per:"Set 2026",mto:15260,st:"ok",f:"20/09/2026"},
        {n:3,per:"Oct 2026",mto:15260,st:"ok",f:"10/10/2026"},
        {n:4,per:"Oct 2026",mto:15260,st:"pe",f:"—"},
        {n:5,per:"Oct 2026 (final)",mto:15260,st:"pe",f:"—"}
      ]
    },
    fis: {
      pct: 60, total: 5, comp: 3,
      ents: [
        {desc:"Plan de distribución y cronograma logístico aprobado",st:"ok",f:"25/08/2026"},
        {desc:"Primera entrega parcial — 2,700 kg zona centro",st:"ok",f:"10/09/2026"},
        {desc:"Segunda entrega parcial — 2,700 kg zona centro",st:"ok",f:"25/09/2026"},
        {desc:"Tercera entrega parcial — 1,820 kg pendientes",st:"pe",f:"—"},
        {desc:"Informe final de conformidad y acta de cierre",st:"pe",f:"—"}
      ]
    },
    ub: {lat:-6.050,lng:-79.010,ubg:"CAJAMARCA / SANTA CRUZ / CORTEGANA"},
    ci: {
      ent: "MINISTERIO DE TRANSPORTES Y COMUNICACIONES",
      obra: "EJECUCIÓN DE LA OBRA REHABILITACIÓN DE PUENTES PAQUETE 7 OBRA 3: PUENTE LA PISHGA Y ACCESOS - CAJAMARCA",
      cui: "2437746", fsus: "01/12/2023", fap: "01/10/2026",
      con: "GUARNIZO CORP S.A.C.", res: "TELLO GONZALES, JOSE REYNALDO", sup: "MEZA CARBAJAL, GREGORIO WENCESLAO",
      asientos: [
        {n:390,tit:"PARTIDAS ATRASADAS DE ACUERDO AL CRONOGRAMA DE AVANCE DE OBRA",tipo:"CONSTATACIÓN FÍSICA DE LA OBRA",f:"18/06/2025 04:55 PM",u:"MEZA CARBAJAL, GREGORIO WENCESLAO",rol:"Supervisor"},
        {n:389,tit:"RATIFICACION DE LA NECESIDAD DEL ADICIONAL N°02",tipo:"ADICIONALES DE OBRA",f:"18/06/2025 10:55 AM",u:"MEZA CARBAJAL, GREGORIO WENCESLAO",rol:"Supervisor"},
        {n:388,tit:"OCURRENCIA DE LLUVIAS",tipo:"OTRAS OCURRENCIAS",f:"16/06/2025 11:19 PM",u:"TELLO GONZALES, JOSE REYNALDO",rol:"Residente"},
        {n:387,tit:"PRESENTACIÓN DEL INFORME QUINCENAL N°5 – MES DE JUNIO 2025",tipo:"OTRAS OCURRENCIAS",f:"15/06/2025 11:18 PM",u:"TELLO GONZALES, JOSE REYNALDO",rol:"Residente"},
        {n:386,tit:"PRESENTACION DE SCTR ACTUALIZADO (SALUD Y PENSIÓN) DEL MES DE JUNIO-2025",tipo:"OTRAS OCURRENCIAS",f:"14/06/2025 10:58 PM",u:"TELLO GONZALES, JOSE REYNALDO",rol:"Residente"}
      ]
    }
  }
};
