export const PROCESOS: any[] = [
  {
    codigo: "LP-SM-2-2026-MDC-1",
    objeto: "Ejecución de obra: Red de agua potable (Tramo 1: Zona Urbana)",
    monto: 3850000.00,
    estado: "contratado" as const,
    estadoLabel: "Contratado",
    faseActualIdx: 2,
    fasesCompletas: [0,1,2],
    proveedor: "CONSORCIO VIAL AMAZONAS S.A.C.",
    comite: {
      nroConvocatoria: 1,
      tipoConductor: "Comité",
      descripcionConductor: "",
      tipoDocumento: "RESOLUCIÓN N° 052-2026-MPCH-GM",
      fechaEmision: "25/02/2026",
      integrantes: [
        { nombre: "WALTER ANTONIO CHÁVEZ RUIZ", tipo: "Titular Presidente" },
        { nombre: "KAREN LISBETH TORRES VEGA", tipo: "Titular Miembro 1" },
        { nombre: "EDWIN MARCOS HUAMÁN SOTO", tipo: "Titular Miembro 2" },
        { nombre: "DIANA ROCÍO PAREDES LUNA", tipo: "Suplente Presidente" },
        { nombre: "VÍCTOR RAÚL ESPINOZA CRUZ", tipo: "Suplente Miembro 1" },
        { nombre: "GIANELLA STEFANY BRAVO RÍOS", tipo: "Suplente Miembro 2" }
      ]
    },
    ofertas: [
      { ruc: "20527909059", nombre: "CONSORCIO VIAL AMAZONAS S.A.C.", fecha: "13/05/2026", hora: "09:40:11", usuario: "20527909059",
        esConsorcio: true,
        repLegal: { nombre: "HORTENSIA", apPat: "MARCELIANO", apMat: "DE LA CRUZ", tipoDoc: "DNI", nroDoc: "19578272" },
        registro: { estadoRegistro: "Válido", estadoPropuesta: "Enviado", motivoObs: "", justificacion: "" },
        integrantes: [
          { tipo: "Proveedor con RUC", ruc: "20601122778", nombre: "INVERSIONES Y CONSTRUCCIONES AMAZONAS S.A.C.", rnp: "Ejecutor de Obras", participacion: 55, pais: "PERÚ", mype: "", discapacitados: "", estadoConsentimiento: "Aceptado", fechaConsentimiento: "12/05/2026 17:07" },
          { tipo: "Proveedor con RUC", ruc: "20532066991", nombre: "VIAL Y SANEAMIENTO ORIENTE S.A.C.", rnp: "Ejecutor de Obras", participacion: 45, pais: "PERÚ", mype: "", discapacitados: "", estadoConsentimiento: "Aceptado", fechaConsentimiento: "12/05/2026 17:08" }
        ],
        documentos: [ { nombre: "CONSORCIO_VIAL_AMAZONAS_OFERTA_TECNICA.pdf", tipo: "pdf", tamano: "118 MB" } ],
        items: [ { descripcion: "TUBERÍA PVC PARA RED DE AGUA POTABLE — TRAMO 1", cantSolicitada: 1, vrve: "S/ 2,150,000.00", cantOfertada: 1, montoOfertado: "S/ 2,070,000.00", docEspecificos: "—", leySelva: "No" } ]
      },
      { ruc: "20601987654", nombre: "CONSTRUCTORA NORTE ORIENTE S.A.C.", fecha: "13/05/2026", hora: "12:15:29", usuario: "20601987654" }
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
      objetoContratacion: "Obra",
      descripcionObjeto: "Mejoramiento de la red de agua potable — Tramo 1: Zona Urbana",
      alcance: "Ejecución de obra conforme al expediente técnico aprobado, incluyendo trazo, excavación, instalación de tuberías, pruebas hidráulicas y reposición de pavimento, según cronograma valorizado de obra.",
      cantidad: "3,200 ml",
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
        objeto: "Obra",
        descripcion: "Mejoramiento y ampliación del sistema de agua potable — Tramo 1: Zona Urbana, incluyendo redes de distribución, conexiones domiciliarias y cámaras de inspección, conforme al expediente técnico aprobado.",
        vrVeImporte: "S/ 3,850,000.00",
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
          descripcion: "TUBERÍA PVC PARA RED DE AGUA POTABLE — TRAMO 1",
          cubso: "7215000010",
          cantidad: "3,200 ml — Unidad",
          vrve: "S/ 2,150,000.00",
          mype: "S/N",
          paquete: "Sí",
          estado: "Contratado",
          postores: [
            { postor: "CONSORCIO VIAL AMAZONAS S.A.C.", mype: "No", selva: "No", bonif: "0%", cantAdj: "3,200 ml", montoAdj: "S/ 2,070,000.00" }
          ]
        },
        {
          n: 2,
          descripcion: "CONEXIONES DOMICILIARIAS Y CÁMARAS DE INSPECCIÓN — TRAMO 1",
          cubso: "7215000011",
          cantidad: "480 und — Unidad",
          vrve: "S/ 1,700,000.00",
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
    indicadoresRiesgo: {
      cumplimientoPlazo: {
        totalEventos: 3,
        riesgoGlobal: 'Medio',
        grupos: [
          {
            tipo: 'Postergaciones de Cronograma y Reconvocación de Comité',
            total: 2,
            items: [
              { titulo: 'Postergación — Presentación de propuestas', detalle: '30/04/2026 — 13/05/2026', badge: '+14 días', color: 'naranja' },
              { titulo: 'Postergación — Otorgamiento de la Buena Pro', detalle: '16/05/2026 — 30/06/2026', badge: '+15 días', color: 'naranja' }
            ]
          },
          {
            tipo: 'Reconformación de Comité de Selección',
            total: 1,
            items: [
              { titulo: '1 reconformación de comité de selección y 1 reconformación del método de evaluación de propuestas detectadas durante el proceso.', detalle: '', badge: '1 cambio', color: 'azul' }
            ]
          }
        ]
      },
      datosAbiertos: {
        indiceTransparencia: 82,
        nivel: 'Satisfactorio',
        criterios: [
          { nombre: 'Convocatoria pública publicada', cumple: true },
          { nombre: 'Bases integradas en SEACE', cumple: true },
          { nombre: 'Acta de buena pro publicada', cumple: true },
          { nombre: 'Contrato público publicado', cumple: true },
          { nombre: 'Pagos registrados en SIAF', cumple: false }
        ]
      }
    },
    documentos: ["Bases del proceso.pdf", "Expediente Técnico de Obra.pdf", "Estudio de Impacto Ambiental.pdf", "Buena Pro - Acta de otorgamiento.pdf"],
    eto: {
      fReg: "20/02/2026 09:15:00",
      aprobacion: {
        tipo: "Resolución",
        nro: "RESOLUCIÓN N° 045-2026-MPCH-GM",
        fecha: "20/02/2026",
        archivo: "RD_N_045_2026_MPCH_GM.pdf",
        tamKb: 3120.4
      },
      funcionario: {
        tipoDoc: "DNI",
        nro: "41758623",
        apPat: "RAMOS",
        apMat: "QUISPE",
        nombres: "CARLOS ALBERTO",
        cargo: "JEFE DE LA OFICINA DE INFRAESTRUCTURA Y DESARROLLO URBANO"
      },
      formulacion: {
        forma: "Por la Entidad",
        unidad: "GERENCIA DE INFRAESTRUCTURA Y DESARROLLO URBANO"
      },
      plazoEjecucion: "120 días calendarios",
      sec2: [
        { doc: "Índice del Expediente Técnico de Obra", arch: "1. INDICE.pdf", kb: 2140.5 },
        { doc: "Memoria descriptiva", arch: "2. MEMORIA DESCRIPTIVA.pdf", kb: 3860.8 },
        { doc: "Especificaciones Técnicas", arch: "3. ESPECIFICACIONES TECNICAS.pdf", kb: 18709.3 },
        { doc: "Planos de ejecución de obra", arch: "4. PLANOS DE EJECUCION.pdf", kb: 22692.6 },
        { doc: "Metrados", arch: "5. METRADOS.pdf", kb: 5465.2 }
      ],
      presupuesto: { arch: "6. PRESUPUESTO.pdf", fDeterm: "15/02/2026", kb: 980.5 },
      analisisPrecios: { arch: "7. ANALISIS DE PRECIO UNITARIO.pdf", kb: 4162.9 },
      relacionPrecios: { arch: "8. RELACION DE PRECIO UNITARIO.pdf", kb: 52130.4 },
      calendarioAvance: { arch: "9. CALENDARIO DE AVANCE.pdf", kb: 6977.6 },
      formulaPolinomica: { arch: "10. FORMULA POLINOMICA.pdf", kb: 281.3 },
      estudios: [
        { nombre: "Estudio Topográfico y Georreferenciación", arch: "11.1 ESTUDIO TOPOGRAFICO Y GEORREFERENCIACION.pdf", kb: 31262.76 },
        { nombre: "Estudio de Hidrología e Hidráulica", arch: "11.2 ESTUDIO DE HIDROLOGIA E HIDRAULICA.pdf", kb: 38375.46 },
        { nombre: "Estudio Geológico", arch: "11.3 ESTUDIO GEOLOGICO.pdf", kb: 9407.06 },
        { nombre: "Estudio Geotécnico", arch: "11.4 ESTUDIO GEOTECNICO.pdf", kb: 12366.95 }
      ],
      gestionRiesgos: { arch: "12. GESTION DE RIESGOS.pdf", kb: 7657.4 },
      gastosGenerales: { arch: "13. GASTOS GENERALES FIJOS Y VARIABLES.pdf", kb: 35957.3 },
      equipamiento: { arch: "14. EQUIPAMIENTO Y MAQUINARIA.pdf", kb: 198.7 },
      terreno: [
        { arch: "15.1 ACTAS DE COMPROMISO Y OTROS.pdf", kb: 18205.9 },
        { arch: "15.2 CERTIFICADO DE DISPONIBILIDAD DE TERRENO.pdf", kb: 841.0 }
      ],
      licencias: [
        { doc: "OTROS", arch: "16. ESTUDIO DE CANTERAS.pdf", kb: 16803.02 }
      ],
      otrosDocs: [
        { doc: "VOLUMEN I - TOMO 1", arch: "TOMO I V1.pdf", kb: 39713.15 },
        { doc: "VOLUMEN I - TOMO 2", arch: "TOMO I V2.pdf", kb: 35828.68 },
        { doc: "VOLUMEN II - TOMO 1", arch: "TOMO II V1.pdf", kb: 52328.31 },
        { doc: "VOLUMEN II - TOMO 2 Y 3", arch: "VOLUMEN II TOMO 2 Y 3.rar", kb: 78854.04 }
      ]
    }
  },
  {
    codigo: "LP-SM-2-2026-MDC-2",
    objeto: "Ejecución de obra: Red de alcantarillado sanitario (Tramo 2: Zona Periurbana)",
    monto: 3120000.00,
    estado: "publicado" as const,
    estadoLabel: "Publicado",
    faseActualIdx: 1,
    fasesCompletas: [0],
    proveedor: null,
    comite: {
      nroConvocatoria: 1,
      tipoConductor: "Comité",
      descripcionConductor: "",
      tipoDocumento: "RESOLUCIÓN N° 052-2026-MPCH-GM",
      fechaEmision: "25/02/2026",
      integrantes: [
        { nombre: "WALTER ANTONIO CHÁVEZ RUIZ", tipo: "Titular Presidente" },
        { nombre: "KAREN LISBETH TORRES VEGA", tipo: "Titular Miembro 1" },
        { nombre: "EDWIN MARCOS HUAMÁN SOTO", tipo: "Titular Miembro 2" },
        { nombre: "DIANA ROCÍO PAREDES LUNA", tipo: "Suplente Presidente" },
        { nombre: "VÍCTOR RAÚL ESPINOZA CRUZ", tipo: "Suplente Miembro 1" },
        { nombre: "GIANELLA STEFANY BRAVO RÍOS", tipo: "Suplente Miembro 2" }
      ]
    },
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
      objetoContratacion: "Obra",
      descripcionObjeto: "Mejoramiento de la red de alcantarillado sanitario — Tramo 2: Zona Periurbana",
      alcance: "Ejecución de obra conforme al expediente técnico aprobado, incluyendo trazo, excavación, instalación de tuberías, pruebas hidráulicas y reposición de pavimento, según cronograma valorizado de obra.",
      cantidad: "2,850 ml",
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
        objeto: "Obra",
        descripcion: "Mejoramiento de la red de alcantarillado sanitario — Tramo 2: Zona Periurbana, incluyendo colectores, buzones de inspección y conexiones domiciliarias, conforme al expediente técnico aprobado.",
        vrVeImporte: "S/ 3,120,000.00",
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
        { etapa: "Calificación y Evaluación de propuestas", inicio: "En evaluación", fin: "—" }
      ],
      items: [
        {
          n: 1,
          descripcion: "TUBERÍA PVC PARA RED DE ALCANTARILLADO SANITARIO — TRAMO 2",
          cubso: "7215000012",
          cantidad: "2,850 ml — Unidad",
          vrve: "S/ 3,120,000.00",
          mype: "S/N",
          paquete: "No",
          estado: "Publicado",
          postores: []
        }
      ],
      documentos: [
        { n: 1, etapa: "Convocatoria", documento: "Bases Administrativas", archivo: "Bases_Admin_L2.pdf", tamanio: "2754 KB", fecha: "11/07/2026 09:00" },
        { n: 2, etapa: "Absolución de consultas y observaciones", documento: "Pliego de absolución de consultas y observaciones", archivo: "Absolucion_L2.pdf", tamanio: "1 KB", fecha: "22/07/2026 17:30" },
        { n: 3, etapa: "Integración de las Bases", documento: "Bases Integradas", archivo: "Bases_Integradas_L2.pdf", tamanio: "2811 KB", fecha: "25/07/2026 16:00" },
        { n: 4, etapa: "Presentación de propuestas", documento: "Documentos de Presentación de Propuestas", archivo: "DPP_L2.pdf", tamanio: "18 KB", fecha: "05/08/2026 23:59" }
      ]
    },
    documentos: ["Bases del proceso.pdf", "Expediente Técnico de Obra.pdf", "Acta de absolución de consultas.pdf"]
  }
];

export const EC_DATA: Record<string, any> = {
  "LP-SM-2-2026-MDC-1": {
    desc: "CONTRATO PARA LA EJECUCIÓN DE LA OBRA MEJORAMIENTO DE LA RED DE AGUA POTABLE — TRAMO 1: ZONA URBANA",
    nom: "LP-SM-2-2026-MDC-1",
    ent: "20214061474-MUNICIPALIDAD DISTRITAL DE CORTEGANA",
    con: "20527909059-CONSORCIO VIAL AMAZONAS S.A.C.",
    nct: "CONTRATO N°08-2026-MPCH-GM",
    mto: 2070000.00, ccp: 2070000.00, mon: "Soles", obj: "OBRA",
    fsus: "30/03/2026", fpub: "26/05/2026", fini: "31/03/2026", ffin: "27/09/2026", lug: "AMAZONAS",
    item: {
      cubso: "7215000010-TUBERIA PVC PARA RED DE AGUA POTABLE",
      desc: "EJECUCIÓN DE OBRA — RED DE AGUA POTABLE TRAMO 1: ZONA URBANA",
      lugar: "AMAZONAS/CHACHAPOYAS/CHACHAPOYAS", monto: 2070000.00, um: "Unidad", cant: 1
    },
    gar: {
      clase: "Garantía de fiel cumplimiento", tipo: "Carta Fianza",
      num: "0011-0083-9800004616-33", monto: 207000.00, emisor: "BANCO DE CRÉDITO DEL PERÚ",
      femi: "18/03/2026", fven: "27/10/2026", cond: "Vigente", fpub: "26/05/2026 02:05:12"
    },
    inv: {
      nombre: "MEJORAMIENTO Y AMPLIACIÓN DEL SISTEMA DE AGUA POTABLE Y ALCANTARILLADO SANITARIO EN LA LOCALIDAD DE CHACHAPOYAS - CHACHAPOYAS - AMAZONAS",
      cui: "2489321", url: "https://ofi5.mef.gob.pe/repseguim/proyinv09.html?codigo=2489321"
    },
    af: {
      total: 2070000.00, pag: 1242000.00, pen: 828000.00, pct: 60,
      vals: [
        {n:1,per:"Abr 2026",mto:414000,st:"ok",f:"15/04/2026"},
        {n:2,per:"May 2026",mto:414000,st:"ok",f:"16/05/2026"},
        {n:3,per:"Jun 2026",mto:414000,st:"ok",f:"12/06/2026"},
        {n:4,per:"Ago 2026",mto:414000,st:"pe",f:"—"},
        {n:5,per:"Sep 2026 (final)",mto:414000,st:"pe",f:"—"}
      ]
    },
    fis: {
      pct: 55, total: 5, comp: 3,
      ents: [
        {desc:"Trazo, replanteo topográfico y cronograma de obra aprobado",st:"ok",f:"05/04/2026"},
        {desc:"Primera valorización — excavación y tendido de tubería, 1,120 ml zona norte",st:"ok",f:"22/04/2026"},
        {desc:"Segunda valorización — excavación y tendido de tubería, 1,150 ml zona centro",st:"ok",f:"20/05/2026"},
        {desc:"Tercera valorización — conexiones domiciliarias y cámaras pendientes",st:"pe",f:"—"},
        {desc:"Informe final de conformidad y acta de recepción de obra",st:"pe",f:"—"}
      ]
    },
    ub: {lat:-6.2296,lng:-77.8712,ubg:"AMAZONAS / CHACHAPOYAS / CHACHAPOYAS"},
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

/* ================================================================
   HELPERS
   ================================================================ */
function descargarGarantia(btn){
  var num = (btn && btn.getAttribute("data-gar-num")) || "GARANTIA";
  var tipo = (btn && btn.getAttribute("data-gar-tipo")) || "Documento de garantia";
  var contenido = tipo+"\n"+"Nro. de garantia: "+num+"\n"+"Documento generado por el prototipo SEACE 4.0 (simulado)."+"\n";
  var blob = new Blob([contenido], {type:"text/plain;charset=utf-8"});
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "Garantia_"+num.replace(/[^a-zA-Z0-9-]/g,"_")+".txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
}
function ecFmt(n){ return "S/ "+n.toLocaleString("es-PE",{minimumFractionDigits:2,maximumFractionDigits:2}); }
function montoAdjudicadoProceso(codigo){
  /* Replica la misma lógica de montoContratado(p): suma solo los ítems en
     estado "Contratado" (excluye desiertos), usando el monto adjudicado
     por el postor ganador. Así "Monto contratado" (pestaña Contratos)
     coincide siempre con "Monto adjudicado" (cabecera del procedimiento). */
  var proc = PROCESOS.filter(function(p){ return p.codigo===codigo; })[0];
  if(!proc) return null;
  if(proc.seleccion && Array.isArray(proc.seleccion.items) && proc.seleccion.items.length){
    return proc.seleccion.items.filter(function(it){ return it.estado === "Contratado"; })
      .reduce(function(acc,it){
        var postorGanador = (it.postores && it.postores[0]) || null;
        var valor = postorGanador ? postorGanador.montoAdj : it.vrve;
        var n = parseFloat(((valor||"0")+"").replace(/[^0-9.]/g,""));
        return acc + (isNaN(n)?0:n);
      }, 0);
  }
  return proc.monto;
}
function ecBc(p){ return p>=80?"var(--verde)":p>=40?"var(--naranja)":"var(--rojo)"; }
function ecCmp(l,v,cls){ return '<div class="ec-cg"><span class="ec-cl">'+l+'</span><span class="ec-cv'+(cls?" "+cls:"")+'">'+v+'</span></div>'; }
function ecD(l,v,cls,fl){ return '<div class="ec-d'+(fl?" fl":"")+'"><span class="ec-dl">'+l+'</span><span class="ec-dv'+(cls?" "+cls:"")+'">'+v+'</span></div>'; }
function ecKpi(v,l,cls){ return '<div class="ec-kpi"><div class="ec-kv'+(cls?" "+cls:"")+'">'+v+'</div><div class="ec-kl">'+l+'</div></div>'; }
function ecBarra(pct){ return '<div class="ec-bt"><div class="ec-bf" style="width:'+pct+'%;background:'+ecBc(pct)+'"></div></div><div class="ec-bm"><span>0%</span><span style="font-weight:700;color:var(--gris-700)">'+pct+'% completado</span><span>100%</span></div>'; }

var SVG_CHEV_DOWN = '<svg aria-hidden="true" focusable="false" class="ac-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 9l6 6 6-6"></path></svg>';
var SVG_CHEV_UP   = '<svg aria-hidden="true" focusable="false" class="ac-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 15l-6-6-6 6"></path></svg>';

/* ================================================================
   EXPEDIENTE TÉCNICO DE OBRA (ETO) — contenido tabulado por secciones
   Se muestra únicamente si proceso.eto está definido.
   ================================================================ */
function etoFmtKb(n){ return n.toLocaleString("es-PE",{minimumFractionDigits:1,maximumFractionDigits:2}); }

function buildEtoHTML(uid, proceso){
  var eto = proceso.eto;
  if(!eto) return '';
  var fReg = eto.fReg || "—";

  function grp(titulo, inner){
    return '<div class="eto-grp"><div class="eto-grp-tit">'+titulo+'</div><div class="eto-grp-body">'+inner+'</div></div>';
  }
  function docTblSimple(archivo, kb){
    return '<table class="eto-tbl"><thead><tr><th style="width:50px">Nro</th><th>Nombre del Archivo</th><th style="width:150px">Fecha de Registro</th><th style="width:110px">Tamaño (KB)</th></tr></thead>'
      +'<tbody><tr><td>1</td><td><span class="eto-doc-link">'+archivo+'</span></td><td>'+fReg+'</td><td>'+etoFmtKb(kb)+'</td></tr></tbody></table>';
  }
  function docTblMulti(rows){
    return '<table class="eto-tbl"><thead><tr><th style="width:50px">Nro</th><th>Nombre del Archivo</th><th style="width:150px">Fecha de Registro</th><th style="width:110px">Tamaño (KB)</th></tr></thead>'
      +'<tbody>'+rows.map(function(r,i){
        return '<tr><td>'+(i+1)+'</td><td><span class="eto-doc-link">'+r.arch+'</span></td><td>'+fReg+'</td><td>'+etoFmtKb(r.kb)+'</td></tr>';
      }).join('')+'</tbody></table>';
  }
  function docTblConNombre(colNombre, rows){
    return '<table class="eto-tbl"><thead><tr><th style="width:50px">Nro</th><th>'+colNombre+'</th><th>Nombre del Archivo</th><th style="width:150px">Fecha de Registro</th><th style="width:110px">Tamaño (KB)</th></tr></thead>'
      +'<tbody>'+rows.map(function(r,i){
        return '<tr><td>'+(i+1)+'</td><td>'+r.doc+'</td><td><span class="eto-doc-link">'+r.arch+'</span></td><td>'+fReg+'</td><td>'+etoFmtKb(r.kb)+'</td></tr>';
      }).join('')+'</tbody></table>';
  }

  /* ── Sección 1: Datos del Expediente Técnico de Obra ── */
  var s1 = [
    '<p class="eto-def">Según el Anexo de definiciones del Reglamento de la LCE, es el conjunto de documentos que comprende: memoria descriptiva, especificaciones técnicas, planos de ejecución de obra, metrados, presupuesto de obra, fecha de determinación del presupuesto de obra, análisis de precios, calendario de avance de obra valorizado, fórmulas polinómicas y, si el caso lo requiere, estudio de suelos, estudio geológico, de impacto ambiental u otros complementarios.</p>',
    grp('Datos de aprobación del Expediente Técnico de Obra',
      '<table class="eto-kv"><tbody>'
      +'<tr><td>Tipo de documento de aprobación</td><td>'+eto.aprobacion.tipo+'</td></tr>'
      +'<tr><td>Nro.</td><td>'+eto.aprobacion.nro+'</td></tr>'
      +'<tr><td>Fecha de Aprobación del Expediente Técnico de Obra</td><td>'+eto.aprobacion.fecha+'</td></tr>'
      +'<tr><td>Documento de Aprobación del Expediente Técnico de Obra</td><td><span class="eto-doc-link">'+eto.aprobacion.archivo+'</span> ('+etoFmtKb(eto.aprobacion.tamKb)+' KB)</td></tr>'
      +'</tbody></table>'),
    grp('Funcionario que aprueba el Expediente Técnico de Obra',
      '<table class="eto-kv"><tbody>'
      +'<tr><td>Tipo de documento de identidad</td><td>'+eto.funcionario.tipoDoc+'</td></tr>'
      +'<tr><td>Nro.</td><td>'+eto.funcionario.nro+'</td></tr>'
      +'<tr><td>Apellido Paterno</td><td>'+eto.funcionario.apPat+'</td></tr>'
      +'<tr><td>Apellido Materno</td><td>'+eto.funcionario.apMat+'</td></tr>'
      +'<tr><td>Nombres</td><td>'+eto.funcionario.nombres+'</td></tr>'
      +'<tr><td>Cargo</td><td>'+eto.funcionario.cargo+'</td></tr>'
      +'</tbody></table>'),
    grp('Formulación del Expediente Técnico de Obra',
      '<table class="eto-kv"><tbody>'
      +'<tr><td>Forma de elaboración del Expediente Técnico de Obra</td><td>'+eto.formulacion.forma+'</td></tr>'
      +'<tr><td>Unidad Orgánica de la Entidad</td><td>'+eto.formulacion.unidad+'</td></tr>'
      +'</tbody></table>'),
    grp('Plazo de Ejecución de la Obra',
      '<table class="eto-kv"><tbody><tr><td>Plazo de ejecución de la obra</td><td>'+eto.plazoEjecucion+'</td></tr></tbody></table>')
  ].join('');

  /* ── Sección 2: Documentos base del expediente ── */
  var s2 = eto.sec2.map(function(d){
    return grp(d.doc, docTblSimple(d.arch, d.kb));
  }).join('');

  /* ── Sección 3: Presupuesto, precios, cronograma y estudios ── */
  var s3 = [
    grp('Presupuesto de Obra',
      '<table class="eto-tbl"><thead><tr><th style="width:50px">Nro</th><th>Nombre del Archivo</th><th style="width:170px">Fecha de determinación del presupuesto</th><th style="width:150px">Fecha de Registro</th><th style="width:110px">Tamaño (KB)</th></tr></thead>'
      +'<tbody><tr><td>1</td><td><span class="eto-doc-link">'+eto.presupuesto.arch+'</span></td><td>'+eto.presupuesto.fDeterm+'</td><td>'+fReg+'</td><td>'+etoFmtKb(eto.presupuesto.kb)+'</td></tr></tbody></table>'),
    grp('Análisis de precios', docTblSimple(eto.analisisPrecios.arch, eto.analisisPrecios.kb)),
    grp('Relación de precios y cantidades de recursos requeridos por tipo', docTblSimple(eto.relacionPrecios.arch, eto.relacionPrecios.kb)),
    grp('Programa de ejecución de obra y calendario de avance', docTblSimple(eto.calendarioAvance.arch, eto.calendarioAvance.kb)),
    grp('Fórmulas polinómicas', docTblSimple(eto.formulaPolinomica.arch, eto.formulaPolinomica.kb)),
    grp('Estudios Técnicos', docTblConNombre('Nombre del estudio', eto.estudios.map(function(s){ return {doc:s.nombre, arch:s.arch, kb:s.kb}; }))),
    grp('Gestión de riesgos', docTblSimple(eto.gestionRiesgos.arch, eto.gestionRiesgos.kb)),
    grp('Gastos generales fijos y variables', docTblSimple(eto.gastosGenerales.arch, eto.gastosGenerales.kb))
  ].join('');

  /* ── Sección 4: Equipamiento, terreno, licencias y otros ── */
  var s4 = [
    grp('Equipamiento y/o Mobiliario', docTblSimple(eto.equipamiento.arch, eto.equipamiento.kb)),
    grp('Documentos de disponibilidad física del terreno', docTblMulti(eto.terreno)),
    grp('Licencias, autorizaciones y permisos (de corresponder)', docTblConNombre('Nombre del documento', eto.licencias)),
    grp('Otros documentos del expediente técnico', docTblConNombre('Nombre del documento', eto.otrosDocs))
  ].join('');

  return [
    '<div class="eto-tabs" role="tablist">',
      '<button class="eto-tab active" onclick="etoTab(\''+uid+'\',1,this)">Sección 1</button>',
      '<button class="eto-tab" onclick="etoTab(\''+uid+'\',2,this)">Sección 2</button>',
      '<button class="eto-tab" onclick="etoTab(\''+uid+'\',3,this)">Sección 3</button>',
      '<button class="eto-tab" onclick="etoTab(\''+uid+'\',4,this)">Sección 4</button>',
    '</div>',
    '<div class="eto-panels" id="eto-panels-'+uid+'">',
      '<div class="eto-panel active" data-panel="1">'+s1+'</div>',
      '<div class="eto-panel" data-panel="2">'+s2+'</div>',
      '<div class="eto-panel" data-panel="3">'+s3+'</div>',
      '<div class="eto-panel" data-panel="4">'+s4+'</div>',
    '</div>'
  ].join('');
}

function etoTab(uid, n, btn){
  var wrap = document.getElementById('eto-panels-'+uid);
  if(!wrap) return;
  var tabsWrap = btn.parentElement;
  var tabs = tabsWrap.querySelectorAll('.eto-tab');
  for(var i=0;i<tabs.length;i++){ tabs[i].classList.remove('active'); }
  btn.classList.add('active');
  var panels = wrap.querySelectorAll('.eto-panel');
  for(var j=0;j<panels.length;j++){ panels[j].classList.remove('active'); }
  var target = wrap.querySelector('[data-panel="'+n+'"]');
  if(target) target.classList.add('active');
  /* Recalcular alto del acordeón contenedor si está abierto */
  var acWrap = wrap.closest('.ac-wrap');
  if(acWrap && acWrap.classList.contains('ac-open')){
    var body = acWrap.querySelector('.ac-body');
    if(body) body.style.maxHeight = body.scrollHeight + 'px';
  }
}

/* ================================================================
   CONDUCTOR DEL TIPO DE SELECCIÓN (Comité de Selección / OEC / etc.)
   Aplica a cualquier tipo de procedimiento; el rótulo "Tipo" se toma
   de proceso.comite.tipoConductor para reflejar el conductor que
   corresponda (Comité de Selección, Comité de Selección Permanente,
   Órgano Encargado de las Contrataciones, etc.).
   ================================================================ */
function buildComiteHTML(proceso, pr, a, en){
  var cs = proceso.comite;
  if(!cs){
    return "<p style='font-size:12px;color:var(--gris-500,#717A7E)'>No se ha registrado información del conductor de este procedimiento.</p>";
  }
  var integrantesRows = (cs.integrantes||[]).map(function(m,i){
    return "<tr><td>"+(i+1)+"</td><td>"+m.nombre+"</td><td>"+m.tipo+"</td></tr>";
  }).join("");

  return [
    "<div class='doc-grp'>",
      "<div class='doc-grp-tit'>Tipo de Conductor del Tipo de Selección</div>",
      "<div class='doc-grp-body'>",
        "<table class='doc-kv'><tbody>",
          "<tr><td>Tipo</td><td>"+(cs.tipoConductor||"—")+"</td></tr>",
          "<tr><td>Tipo de documento</td><td>"+(cs.tipoDocumento||"—")+"</td></tr>",
          "<tr><td>Fecha de emisión</td><td>"+(cs.fechaEmision||"—")+"</td></tr>",
        "</tbody></table>",
      "</div>",
    "</div>",
    "<div class='doc-grp'>",
      "<div class='doc-grp-tit'>Lista de Integrantes</div>",
      "<div class='doc-grp-body'>",
        "<table class='doc-tbl'><thead><tr><th style='width:50px'>Nro.</th><th>Apellidos y Nombres</th><th style='width:170px'>Tipo de Integrante</th></tr></thead>",
        "<tbody>"+integrantesRows+"</tbody></table>",
      "</div>",
    "</div>"
  ].join("");
}

function acordeon(id, titulo, contenido) {
  return [
    '<div class="ac-wrap" id="acw-'+id+'">',
      '<button class="ac-hdr" onclick="ecAc(\'acw-'+id+'\')">',
        '<span class="ac-tit">'+titulo+'</span>',
        SVG_CHEV_DOWN,
      '</button>',
      '<div class="ac-body" id="acb-'+id+'">',
        '<div class="ac-inner">'+contenido+'</div>',
      '</div>',
    '</div>'
  ].join("");
}

function ecAc(wid) {
  var w = document.getElementById(wid);
  if (!w) return;
  var body = w.querySelector(".ac-body");
  var chev = w.querySelector(".ac-chev");
  var open = w.classList.toggle("ac-open");
  if (open) {
    body.style.maxHeight = body.scrollHeight + "px";
    chev.outerHTML = SVG_CHEV_UP;
  } else {
    body.style.maxHeight = "0";
    w.querySelector(".ac-chev").outerHTML = SVG_CHEV_DOWN;
  }
}

/* ================================================================
   ACTUACIONES PREPARATORIAS — acordeones
   ================================================================ */
function buildActuacionesHTML(proceso) {
  var a  = proceso.anuncio      || {};
  var ac = proceso.actuaciones  || {};
  var en = ac.entidad           || {};
  var pr = ac.procedimiento     || {};
  var ec = ac.entidadContratante|| {};
  var uid = "ap" + proceso.codigo.replace(/[^a-z0-9]/gi,"");

  var svgEnt = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"></path></svg>';
  var svgPr  = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 10h16M4 14h10"></path></svg>';
  var svgCo  = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"></path></svg>';
  var svgAc  = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>';
  var svgAn  = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>';
  var svgCs  = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 00-3-3.87"></path><path d="M16 3.13a4 4 0 010 7.75"></path></svg>';
  var svgEto = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"></path></svg>';

  var acuerdos = (ac.acuerdosComerciales||[]).map(function(a,i){
    return '<tr><td style="padding:5px 9px;border-bottom:1px solid var(--gris-100);color:var(--gris-500);font-size:11px;width:36px">'+(i+1)+'</td><td style="padding:5px 9px;border-bottom:1px solid var(--gris-100);font-size:12px">'+a+'</td></tr>';
  }).join("");

  return [
    '<div class="fase-contenido ec-ficha">',

    /* 1 — Información general de la entidad */
    acordeon(uid+"-ent", svgEnt+" Información general de la entidad", [
      '<div class="ec-dg">',
      ecD("Entidad convocante:", en.nombre||"—"),
      ecD("RUC:", en.ruc||"—"),
      ecD("Dirección legal:", en.direccion||"—","",true),
      ecD("Página web:", en.web||"—"),
      ecD("Teléfono de la entidad:", en.telefono||"—"),
      '</div>'
    ].join("")),

    /* 1.1 — Expediente Técnico de Obra (solo si el proceso lo define) */
    (proceso.eto ? acordeon(uid+"-eto", svgEto+" Expediente Técnico de Obra", buildEtoHTML(uid, proceso)) : ''),

    /* 2 — Información general del procedimiento */
    acordeon(uid+"-proc", svgPr+" Información general del procedimiento", [
      '<div class="ec-dg">',
      ecD("Objeto de contratación:", pr.objeto||a.objetoContratacion||"—"),
      ecD("Descripción del objeto:", pr.descripcion||a.descripcionObjeto||"—","",true),
      ecD("Cuantía de la contratación:", (proceso.seleccion && Array.isArray(proceso.seleccion.items) && proceso.seleccion.items.some(function(it){ return it.estado==="Contratado"; })) ? (pr.vrVeImporte||"—") : "—"),
      ecD("Monto del Derecho de Participación:", pr.derechoPart||"—"),
      ecD("Fecha y hora de publicación:", pr.fechaPublicacion||a.fechaPublicacion||"—"),
      ecD("Normativa aplicable:", pr.normativa||"—","",true),
      '</div>'
    ].join("")),

    /* 3 — Entidad contratante */
    acordeon(uid+"-ec", svgCo+" Entidad contratante", [
      '<table style="width:100%;border-collapse:collapse">',
      '<thead><tr>',
      '<th style="background:var(--azul-petroleo);color:#fff;padding:7px 9px;font-size:11px;text-align:left;border-radius:4px 0 0 0;width:130px">N° Ruc</th>',
      '<th style="background:var(--azul-petroleo);color:#fff;padding:7px 9px;font-size:11px;text-align:left;border-radius:0 4px 0 0">Entidad Contratante</th>',
      '</tr></thead><tbody>',
      '<tr><td style="padding:7px 9px;font-size:12px;font-family:var(--fuente-mono)">'+ec.ruc+'</td><td style="padding:7px 9px;font-size:12px">'+ec.nombre+'</td></tr>',
      '</tbody></table>'
    ].join("")),

    /* 4 — Acuerdos comerciales */
    acordeon(uid+"-ac", svgAc+" Acuerdos comerciales", [
      '<p style="font-size:12px;color:var(--gris-700);margin:0 0 10px">El procedimiento se encuentra bajo la cobertura del o de los siguientes acuerdos comerciales:</p>',
      '<table style="width:100%;border-collapse:collapse">',
      '<thead><tr>',
      '<th style="background:var(--azul-petroleo);color:#fff;padding:6px 9px;font-size:11px;text-align:left;border-radius:4px 0 0 0;width:40px">Nro.</th>',
      '<th style="background:var(--azul-petroleo);color:#fff;padding:6px 9px;font-size:11px;text-align:left;border-radius:0 4px 0 0">Descripción del Acuerdo Comercial</th>',
      '</tr></thead><tbody>',
      acuerdos,
      '</tbody></table>'
    ].join("")),

    /* 5 — Anuncio de contratación futura */
    acordeon(uid+"-anuncio", svgAn+" Anuncio de contratación futura", [
      '<div class="ec-dg">',
      ecD("N°:", a.n||"—"),
      ecD("Nombre o sigla de la entidad:", a.entidad||"—"),
      ecD("Fecha de la publicación:", a.fechaPublicacion||"—"),
      ecD("Tipo de selección:", a.tipoSeleccion||"—"),
      ecD("Objeto de la contratación:", a.objetoContratacion||"—"),
      ecD("Cantidad:", a.cantidad||"—"),
      ecD("Plazo en días:", a.plazoDias?""+a.plazoDias:"—"),
      ecD("Fecha aprox. de la convocatoria:", a.fechaConvocatoria||"—"),
      ecD("Descripción del objeto:", a.descripcionObjeto||"—","",true),
      ecD("Alcance:", a.alcance||"—","",true),
      '</div>',
      '<div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--gris-200,#DEE3EA)">',
        '<a href="22_ficha_acf.html?acf=8" class="gar-dl-btn" style="text-decoration:none">',
          '<svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg>',
          ' Volver al Anuncio de Contratación Futura (ACF-0038-MPCH)',
        '</a>',
      '</div>'
    ].join("")),

    /* 6 — Conductor del Tipo de Selección (Comité de Selección / OEC / etc.) */
    acordeon(uid+"-comite", svgCs+" Conductor del Tipo de Selección", buildComiteHTML(proceso, pr, a, en)),

    '</div>'
  ].join("");
}

/* ================================================================
   SELECCIÓN — acordeones
   ================================================================ */
/* ================================================================
   LISTADO DE PRESENTACIÓN DE OFERTAS DEL PROCEDIMIENTO
   Solo se muestra cuando el procedimiento tiene al menos un ítem
   "Contratado" (es decir, cuando efectivamente se presentaron ofertas
   y se llegó a adjudicar). Usa los colores oficiales de gob.pe
   (naranja) en vez de la paleta propia de SEACE 4.0, tal como se ve
   en el portal de origen.
   ================================================================ */
/* ================================================================
   MODAL — Detalle de una oferta presentada (postor)
   ================================================================ */
function abrirOferta(codigoProceso, idx){
  var proceso = PROCESOS.find(function(p){ return p.codigo === codigoProceso; });
  if(!proceso || !proceso.ofertas || !proceso.ofertas[idx]) return;
  var o   = proceso.ofertas[idx];
  var s   = proceso.seleccion || {};

  var integrantesHtml = "";
  if(o.esConsorcio && Array.isArray(o.integrantes) && o.integrantes.length){
    var filasInt = o.integrantes.map(function(m,i){
      return "<tr><td>"+(i+1)+"</td><td>"+m.tipo+"</td><td style='font-family:var(--fuente-mono)'>"+m.ruc+"</td>"
        +"<td style='text-align:left'>"+m.nombre+"</td><td>"+m.rnp+"</td><td>"+m.participacion+"%</td><td>"+m.pais+"</td>"
        +"<td>"+(m.mype||"—")+"</td><td>"+(m.discapacitados||"—")+"</td><td>"+m.estadoConsentimiento+"</td><td>"+m.fechaConsentimiento+"</td></tr>";
    }).join("");
    integrantesHtml = "<div class='doc-grp'><div class='doc-grp-tit'>Integrantes del consorcio</div><div class='doc-grp-body'>"
      +"<table class='doc-tbl'><thead><tr><th>Nro.</th><th>Tipo de Proveedor</th><th>RUC/Código</th><th style='text-align:left'>Nombre o Razón Social</th>"
      +"<th>Registro RNP</th><th>% Participación</th><th>País Origen</th><th>MYPE</th><th>Empresa integrada por discapacitados</th>"
      +"<th>Estado de Consentimiento</th><th>Fecha y Hora de Consentimiento</th></tr></thead><tbody>"+filasInt+"</tbody></table></div></div>";
  }

  var documentos = (o.documentos && o.documentos.length) ? o.documentos : [
    { nombre: (o.nombre||"OFERTA")+" - OFERTA TECNICA.pdf", tipo:"pdf", tamano:"—" }
  ];
  var filasDoc = documentos.map(function(d,i){
    return "<tr><td>"+(i+1)+"</td><td style='text-align:left'>"+d.nombre+"</td><td>"+d.tipo+"</td><td>"+d.tamano+"</td>"
      +"<td><button type='button' class='doc-link' style='background:none;border:none;color:#B3432F;font-weight:700;font-size:11.5px;cursor:pointer;font-family:inherit'>Descargar</button></td></tr>";
  }).join("");

  var itemsSrc = (o.items && o.items.length) ? o.items : (s.items||[]).filter(function(it){ return it.estado === "Contratado"; }).map(function(it){
    var postorGanador = (it.postores && it.postores[0]) || null;
    return {
      descripcion: it.descripcion,
      cantSolicitada: 1,
      vrve: it.vrve,
      cantOfertada: 1,
      montoOfertado: postorGanador ? postorGanador.montoAdj : it.vrve,
      leySelva: "No"
    };
  });
  var filasItems = itemsSrc.map(function(it,i){
    return "<tr><td>"+(i+1)+"</td><td style='text-align:left'>"+it.descripcion+"</td><td>"+(it.cantSolicitada||1)+"</td>"
      +"<td>"+it.vrve+"</td><td>"+(it.cantOfertada||1)+"</td><td>"+it.montoOfertado+"</td>"
      +"<td>"+(it.leySelva||"No")+"</td>"
      +"<td><button type='button' class='doc-link' style='background:none;border:none;color:#B3432F;font-weight:700;font-size:11.5px;cursor:pointer;font-family:inherit'>Descargar</button></td></tr>";
  }).join("");

  var html = [
    integrantesHtml,

    "<div class='doc-grp'><div class='doc-grp-tit'>Listado de documentos</div><div class='doc-grp-body'>",
      "<table class='doc-tbl'><thead><tr><th>Nro.</th><th style='text-align:left'>Nombre Archivo</th><th>Tipo Archivo</th><th>Tamaño Archivo</th><th>Documento</th></tr></thead>",
      "<tbody>"+filasDoc+"</tbody></table>",
    "</div></div>",

    "<div class='doc-grp'><div class='doc-grp-tit'>Listado de ítems</div><div class='doc-grp-body'>",
      "<table class='doc-tbl'><thead><tr><th>Nro.</th><th style='text-align:left'>Descripción del ítem</th><th>Cantidad solicitada</th>"
        +"<th>VR/VE/Cuantía de la contratación</th><th>Cantidad ofertada</th><th>Monto ofertado</th>"
        +"<th>Ley de promoción de la Selva</th><th>Archivo con detalle de monto ofertado</th></tr></thead>",
      "<tbody>"+filasItems+"</tbody></table>",
    "</div></div>"
  ].join("");

  document.getElementById("ofModalBody").innerHTML = html;
  document.getElementById("ofModalOverlay").classList.add("open");
}
function cerrarOferta(){
  var el = document.getElementById("ofModalOverlay");
  if(el) el.classList.remove("open");
}

var HISTORIAL_VERSION_ANTERIOR = {
  "Convocatoria": { documento:"Bases Administrativas (versión preliminar)", archivo:"Bases_Admin_v1.pdf", tamanio:"2850 KB", fecha:"05/04/2026 09:10", motivo:"Versión preliminar publicada por el comité de selección" },
  "Absolución de consultas y observaciones": { documento:"Pliego de absolución de consultas y observaciones (primera ronda)", archivo:"Absolucion_v1.pdf", tamanio:"1 KB", fecha:"24/04/2026 16:40", motivo:"Primera ronda de absolución" },
  "Integración de las Bases": { documento:"Bases Integradas (versión preliminar)", archivo:"Bases_Integradas_v1.pdf", tamanio:"2870 KB", fecha:"26/04/2026 11:05", motivo:"Versión preliminar, pendiente de visto bueno del titular" }
};
function mostrarHistorialDocs(btn){
  var d; try{ d = JSON.parse(decodeURIComponent(btn.getAttribute("data-doc"))); }catch(e){ d = null; }
  if(!d) return;
  var prev = HISTORIAL_VERSION_ANTERIOR[d.etapa];
  var filaPrev = prev ? (
    '<tr style="background:var(--gris-100,#EDEFEA)">'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100);font-size:11.5px;font-family:var(--fuente-mono);color:var(--gris-500)">v1</td>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100);font-size:11.5px;color:var(--gris-500)">'+prev.documento+'</td>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100);font-size:11px;color:var(--gris-500)">'+prev.archivo+' ('+prev.tamanio+')</td>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100);font-size:11px;color:var(--gris-500);white-space:nowrap">'+prev.fecha+'</td>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100)"><span class="doc-link" style="font-size:11px">Descargar</span></td>'
      +'</tr>'
  ) : '';
  var html = [
    '<div style="margin-bottom:14px;font-size:12.5px;color:var(--gris-500,#717A7E)">Etapa: <strong style="color:var(--gris-900,#23282B)">'+d.etapa+'</strong></div>',
    '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse">',
    '<thead><tr>',
    '<th style="background:var(--gris-700,#4B5358);color:#fff;padding:7px 9px;font-size:11px;text-align:left;border-radius:4px 0 0 0">Versión</th>',
    '<th style="background:var(--gris-700,#4B5358);color:#fff;padding:7px 9px;font-size:11px;text-align:left">Documento</th>',
    '<th style="background:var(--gris-700,#4B5358);color:#fff;padding:7px 9px;font-size:11px;text-align:left">Archivo</th>',
    '<th style="background:var(--gris-700,#4B5358);color:#fff;padding:7px 9px;font-size:11px;text-align:left;white-space:nowrap">Fecha y hora pub.</th>',
    '<th style="background:var(--gris-700,#4B5358);color:#fff;padding:7px 9px;font-size:11px;border-radius:0 4px 0 0">Acciones</th>',
    '</tr></thead><tbody>',
    filaPrev,
    '<tr>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100);font-size:11.5px;font-family:var(--fuente-mono);color:var(--gris-500)">'+(prev?'v2 (vigente)':'v1 (vigente)')+'</td>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100);font-size:11.5px">'+d.documento+'</td>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100);font-size:11px;color:var(--gris-500)">'+d.archivo+' ('+d.tamanio+')</td>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100);font-size:11px;color:var(--gris-500);white-space:nowrap">'+d.fecha+'</td>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100)"><span class="doc-link" style="font-size:11px">Descargar</span></td>'
      +'</tr>',
    '</tbody></table></div>',
    prev
      ? '<p style="margin-top:12px;font-size:11.5px;color:var(--gris-500,#717A7E)">'+prev.motivo+'.</p>'
      : '<p style="margin-top:12px;font-size:11.5px;color:var(--gris-500,#717A7E)">No se registran versiones anteriores para esta etapa.</p>'
  ].join("");
  document.getElementById("docHistModalTitulo").textContent = "Historial de documentos — "+d.etapa;
  document.getElementById("docHistModalBody").innerHTML = html;
  document.getElementById("docHistModalOverlay").classList.add("open");
}
function cerrarHistorialDocs(){
  var el = document.getElementById("docHistModalOverlay");
  if(el) el.classList.remove("open");
}

function buildOfertasHTML(proceso){
  var estaContratado = (proceso.seleccion && Array.isArray(proceso.seleccion.items))
    ? proceso.seleccion.items.some(function(it){ return it.estado === "Contratado"; })
    : false;
  if(!estaContratado) return "";

  var ofertas = proceso.ofertas || [];

  var filas = ofertas.map(function(o,i){
    return "<tr><td>"+(i+1)+"</td>"
      +"<td style='font-family:var(--fuente-mono)'>"+o.ruc+"</td>"
      +"<td style='text-align:left;font-weight:600'>"+o.nombre+"</td>"
      +"<td>"+o.fecha+"</td>"
      +"<td>"+o.hora+"</td>"
      +"<td style='font-family:var(--fuente-mono)'>"+o.usuario+"</td>"
      +"<td><span class='gpe-eye' title='Ver oferta presentada' onclick=\"abrirOferta('"+proceso.codigo+"',"+i+")\" style='font-weight:700;font-size:11px'>Ver detalle</span></td></tr>";
  }).join("");

  return [
    "<div class='gpe-box'>",
      "<div class='gpe-hdr'>Listado de ofertas calificadas</div>",
      "<div class='gpe-body'>",
        "<div class='gpe-tbl-wrap'>",
          "<table class='gpe-tbl'><thead><tr><th>Nro.</th><th>RUC/Código</th><th style='text-align:left'>Nombre o Razón Social</th><th>Fecha de Presentación</th><th>Hora de Presentación</th><th>Usuario de Presentación</th><th>Acciones</th></tr></thead>",
          "<tbody>"+filas+"</tbody></table>",
        "</div>",
      "</div>",
    "</div>"
  ].join("");
}

function buildSeleccionHTML(proceso) {
  var s   = proceso.seleccion || {};
  var uid = "sel" + proceso.codigo.replace(/[^a-z0-9]/gi,"");

  var svgIn  = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4m0 4h.01"></path></svg>';
  var svgCr  = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>';
  var svgIt  = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7L12 3 4 7m16 0l-8 4m8-4v10l-8 4M4 7l8 4M4 7v10l8 4m0-10v10"></path></svg>';
  var svgDoc = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><path d="M14 2v6h6"></path></svg>';

  /* cronograma */
  var crono = (s.cronograma||[]).map(function(c){
    return '<tr><td style="padding:6px 9px;border-bottom:1px solid var(--gris-100);font-size:11.5px">'+c.etapa+'</td>'
      +'<td style="padding:6px 9px;border-bottom:1px solid var(--gris-100);font-size:11.5px;font-family:var(--fuente-mono);color:#1a5cb5;white-space:nowrap">'+c.inicio+'</td>'
      +'<td style="padding:6px 9px;border-bottom:1px solid var(--gris-100);font-size:11.5px;font-family:var(--fuente-mono);color:#1a5cb5;white-space:nowrap">'+c.fin+'</td>'
      +'</tr>';
  }).join("");

  /* items / listado */
  var items = (s.items||[]).map(function(it){
    var postores = it.postores && it.postores.length
      ? '<table style="width:100%;border-collapse:collapse;margin-top:8px"><thead><tr>'
        +'<th style="background:var(--azul-petroleo-100);color:var(--azul-petroleo);padding:5px 8px;font-size:10.5px;text-align:left">Postor</th>'
        +'<th style="background:var(--azul-petroleo-100);color:var(--azul-petroleo);padding:5px 8px;font-size:10.5px;text-align:left">MYPE</th>'
        +'<th style="background:var(--azul-petroleo-100);color:var(--azul-petroleo);padding:5px 8px;font-size:10.5px;text-align:left">Ley Selva</th>'
        +'<th style="background:var(--azul-petroleo-100);color:var(--azul-petroleo);padding:5px 8px;font-size:10.5px;text-align:left">Bonif.</th>'
        +'<th style="background:var(--azul-petroleo-100);color:var(--azul-petroleo);padding:5px 8px;font-size:10.5px;text-align:right">Cant. adjudicada</th>'
        +'<th style="background:var(--azul-petroleo-100);color:var(--azul-petroleo);padding:5px 8px;font-size:10.5px;text-align:right">Monto adjudicado</th>'
        +'</tr></thead><tbody>'
        +it.postores.map(function(p){
          return '<tr><td style="padding:5px 8px;font-size:11.5px;border-bottom:1px solid var(--gris-100)">'+p.postor+'</td>'
            +'<td style="padding:5px 8px;font-size:11.5px;border-bottom:1px solid var(--gris-100)">'+p.mype+'</td>'
            +'<td style="padding:5px 8px;font-size:11.5px;border-bottom:1px solid var(--gris-100)">'+p.selva+'</td>'
            +'<td style="padding:5px 8px;font-size:11.5px;border-bottom:1px solid var(--gris-100)">'+p.bonif+'</td>'
            +'<td style="padding:5px 8px;font-size:11.5px;border-bottom:1px solid var(--gris-100);text-align:right;font-family:var(--fuente-mono)">'+p.cantAdj+'</td>'
            +'<td style="padding:5px 8px;font-size:11.5px;border-bottom:1px solid var(--gris-100);text-align:right;font-family:var(--fuente-mono);font-weight:700;color:var(--verde)">'+p.montoAdj+'</td>'
            +'</tr>';
        }).join("")
        +'</tbody></table>'
      : '<div style="font-size:11.5px;color:var(--gris-500);padding:6px 0;font-style:italic">No se encontraron datos</div>';

    return '<div style="border:1px solid var(--linea);border-radius:8px;padding:13px;margin-bottom:10px;background:var(--superficie-alt)">'
      +'<div style="font-size:12px;font-weight:800;color:var(--azul-petroleo);margin-bottom:8px">'+it.n+' — '+it.descripcion+'</div>'
      +'<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:4px 14px">'
      +ecD("Código CUBSO:", it.cubso)
      +ecD("Cantidad:", it.cantidad)
      +ecD("Cuantía:", it.estado==="Publicado" ? "—" : (it.vrve||"—"), "mn")
      +ecD("Reserva para MYPE:", it.mype)
      +ecD("Paquete:", it.paquete)
      +ecD("Estado:", (function(){var bg=it.estado==="Adjudicado"?"var(--verde-100)":it.estado==="Desierto"?"var(--rojo-100)":"#e0f2fe";var fg=it.estado==="Adjudicado"?"var(--verde)":it.estado==="Desierto"?"var(--rojo)":"#0369a1";return '<span style="background:'+bg+';color:'+fg+';padding:2px 7px;border-radius:3px;font-size:10.5px;font-weight:700">'+it.estado+'</span>';})())
      +'</div>'
      +postores
      +'</div>';
  }).join("");

  /* documentos */
  var ETAPAS_CON_HISTORIAL = ["Convocatoria","Absolución de consultas y observaciones","Integración de las Bases"];
  var SVG_EYE_DOC = '<svg aria-hidden="true" focusable="false" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
  var docs = (s.documentos||[]).map(function(d){
    var tieneHistorial = ETAPAS_CON_HISTORIAL.indexOf(d.etapa) !== -1;
    var btnHistorial = tieneHistorial
      ? '<button type="button" class="gpe-eye" style="background:none;border:none;padding:0;cursor:pointer;display:inline-flex" data-doc="'+encodeURIComponent(JSON.stringify(d))+'" onclick="mostrarHistorialDocs(this)" title="Ver historial de documentos" aria-label="Ver historial de documentos">'+SVG_EYE_DOC+'</button>'
      : '';
    return '<tr>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100);font-size:11.5px;font-family:var(--fuente-mono);color:var(--gris-500)">'+d.n+'</td>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100);font-size:11.5px">'+d.etapa+'</td>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100);font-size:11.5px">'+d.documento+'</td>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100)">'
        +'<div style="display:flex;align-items:center;gap:5px">'
        +'<svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B3432F" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><path d="M14 2v6h6"></path></svg>'
        +'<span style="font-size:11px;color:var(--gris-500)">'+d.archivo+'</span>'
        +'<span style="font-size:10px;color:var(--gris-500)">('+d.tamanio+')</span>'
        +'</div></td>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100);font-size:11px;color:var(--gris-500);white-space:nowrap">'+d.fecha+'</td>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100)"><span class="doc-link" style="font-size:11px">Descargar</span></td>'
      +'<td style="padding:7px 9px;border-bottom:1px solid var(--gris-100);text-align:center">'+btnHistorial+'</td>'
      +'</tr>';
  }).join("");

  return [
    '<div class="fase-contenido ec-ficha">',

    /* 1 — Convocatoria: Información general */
    acordeon(uid+"-info", svgIn+" Convocatoria — Información general", [
      '<div class="ec-dg">',
      ecD("Nomenclatura:", s.nomenclatura||"—"),
      ecD("N° Convocatoria:", s.nConvocatoria||"—"),
      ecD("Tipo Compra o Selección:", s.tipoCompra||"—"),
      ecD("Normativa aplicable:", s.normativa||"—","",true),
      ecD("Versión SEACE:", s.versionSEACE||"4"),
      '</div>'
    ].join("")),

    /* 2 — Cronograma */
    acordeon(uid+"-cron", svgCr+" Cronograma", [
      '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse">',
      '<thead><tr>',
      '<th style="background:var(--azul-petroleo);color:#fff;padding:7px 9px;font-size:11px;text-align:left;border-radius:4px 0 0 0">Etapa</th>',
      '<th style="background:var(--azul-petroleo);color:#fff;padding:7px 9px;font-size:11px;text-align:left;white-space:nowrap">Fecha Inicio</th>',
      '<th style="background:var(--azul-petroleo);color:#fff;padding:7px 9px;font-size:11px;text-align:left;border-radius:0 4px 0 0;white-space:nowrap">Fecha Fin</th>',
      '</tr></thead><tbody>',
      crono,
      '</tbody></table></div>'
    ].join("")),

    /* 3 — Documentos por etapa */
    acordeon(uid+"-docs", svgDoc+" Documentos por etapa", [
      '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse">',
      '<thead><tr>',
      '<th style="background:var(--naranja);color:#fff;padding:7px 9px;font-size:11px;text-align:left;border-radius:4px 0 0 0;width:36px">Nro.</th>',
      '<th style="background:var(--naranja);color:#fff;padding:7px 9px;font-size:11px;text-align:left">Etapa</th>',
      '<th style="background:var(--naranja);color:#fff;padding:7px 9px;font-size:11px;text-align:left">Documento</th>',
      '<th style="background:var(--naranja);color:#fff;padding:7px 9px;font-size:11px;text-align:left">Archivo</th>',
      '<th style="background:var(--naranja);color:#fff;padding:7px 9px;font-size:11px;text-align:left;white-space:nowrap">Fecha y hora pub.</th>',
      '<th style="background:var(--naranja);color:#fff;padding:7px 9px;font-size:11px">Acciones</th>',
      '<th style="background:var(--naranja);color:#fff;padding:7px 9px;font-size:11px;border-radius:0 4px 0 0;width:56px">Historial</th>',
      '</tr></thead><tbody>',
      docs,
      '</tbody></table></div>'
    ].join("")),

    /* 4 — Listado de ítems */
    acordeon(uid+"-items", svgIt+" Listado de ítems", items||'<p style="font-size:12px;color:var(--gris-500)">Sin ítems registrados.</p>'),

    /* 5 — Listado de presentación de ofertas (solo si hay al menos un ítem Contratado) */
    buildOfertasHTML(proceso),

    /* 6 — Indicadores de riesgo de contratación (al final de todas las etapas) */
    buildRiskIndicators(uid),

    '</div>'
  ].join("");
}

/* ================================================================
   BUILDER HTML — EJECUCIÓN CONTRACTUAL
   ================================================================ */
/* ================================================================
   FILTRO DE CONTRATOS — Ejecución Contractual
   Si el IDEC tiene más de un procedimiento con contrato, muestra un
   selector para elegir cuál contrato visualizar.
   ================================================================ */
function buildEjecucionConFiltro(proceso){
  /* Un procedimiento puede tener más de un contrato (adjudicación por ítems).
     Los contratos de un mismo procedimiento se registran en EC_DATA con claves
     "<codigo>" (contrato único) o "<codigo>-1", "<codigo>-2"... (contratos por ítem). */
  var contratos = Object.keys(EC_DATA).filter(function(k){
    return k === proceso.codigo || k.indexOf(proceso.codigo + "-") === 0;
  });
  if(contratos.length === 0) contratos = [proceso.codigo];
  var codigoInicial = contratos[0];
  var selectorHtml = "";
  if(contratos.length > 1){
    var opts = contratos.map(function(k){
      var d = EC_DATA[k] || {};
      var con = (d.con || "").split("-").slice(1).join("-") || d.con || "—";
      var sel = k === codigoInicial ? " selected" : "";
      var esItem = k.indexOf(proceso.codigo + "-") === 0;
      var nroItem = esItem ? k.slice((proceso.codigo+"-").length) : null;
      var etiquetaItem = nroItem ? "Ítem "+nroItem+" — " : "";
      return "<option value='"+k+"'"+sel+">"+etiquetaItem+con+" — "+ecFmt(d.mto||0)+"</option>";
    }).join("");
    selectorHtml = [
      "<div class='ec-filtro-contrato'>",
        "<label for='selContratoEC' class='ec-filtro-lbl'>"+contratos.length+" contratos derivados de este procedimiento — Seleccionar:</label>",
        "<select id='selContratoEC' class='ec-filtro-select' onchange='cambiarContratoEC(this.value)'>",
          opts,
        "</select>",
      "</div>"
    ].join("");
  }
  return "<div id='ecFiltroWrap'>" + selectorHtml + "<div id='ecContenidoBody'>" + buildEjecucionHTML(codigoInicial) + "</div></div>";
}

function cambiarContratoEC(codigo){
  var el = document.getElementById("ecContenidoBody");
  if(!el) return;
  el.innerHTML = buildEjecucionHTML(codigo);
  if(typeof ecAfterRender==="function") ecAfterRender();
}

function buildEjecucionHTML(codigo) {
  var e = EC_DATA[codigo];
  if (!e) return '<div class="fase-contenido"><p style="padding:20px;color:var(--gris-500)">Sin datos de ejecución.</p></div>';
  var uid = "ec" + codigo.replace(/[^a-z0-9]/gi,"");

  /* valorizaciones */
  var vals = e.af.vals.map(function(v){
    return '<div class="ec-vr'+(v.st==="pe"?" pe":"")+'"><div class="ec-vn">'+v.n+'</div><div>'+v.per+'</div><div class="ec-vm">'+ecFmt(v.mto)+'</div><div class="ec-vf">'+v.f+'</div><div><span class="ec-eb '+(v.st==="ok"?"ok":"pe")+'">'+(v.st==="ok"?"✓ Pagado":"⏳ Pendiente")+'</span></div></div>';
  }).join("");

  /* entregables */
  var ents = e.fis.ents.map(function(t){
    var ok = t.st==="ok";
    var ic = ok
      ? '<svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"></path></svg>'
      : '<svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path></svg>';
    return '<div class="ec-ent '+(ok?"ok":"pe")+'"><div class="ec-ei">'+ic+'</div><div><div class="ec-ed">'+t.desc+'</div><div class="ec-ef">'+(ok?"Entregado el "+t.f:"Pendiente de entrega")+'</div></div></div>';
  }).join("");

  /* asientos — ordenados de mayor a menor N° (como imagen de referencia) */
  var sortedAsi = (e.ci.asientos||[]).slice().sort(function(a,b){ return b.n - a.n; });
  var asi = sortedAsi.map(function(a){
    var rolCls = a.rol==='Supervisor' ? 'ec-cirl-sup' : 'ec-cirl-res';
    return [
      '<div class="ec-cir">',
        '<div class="ec-cin">'+a.n+'</div>',
        '<div style="flex:1;min-width:0">',
          '<div class="ec-citt">'+a.tit+'</div>',
          '<div class="ec-cim">',
            '<span class="ec-citp">'+a.tipo+'</span>',
            '<span class="ec-cisp">·</span>',
            '<span class="ec-cif">'+a.f+'</span>',
            '<span class="ec-cisp">·</span>',
            '<span class="ec-ciu">'+a.u+'</span>',
            '<span class="ec-cirl '+rolCls+'">'+a.rol+'</span>',
          '</div>',
        '</div>',
      '</div>'
    ].join('');
  }).join("");

  var svgF  = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M2 10h20"></path></svg>';
  var svgI  = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 10h16M4 14h10"></path></svg>';
  var svgG  = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>';
  var svgB  = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><path d="M8 21h8M12 17v4"></path></svg>';
  var svgMn = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"></path></svg>';
  var svgCh = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path></svg>';
  var svgBk = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path></svg>';
  var svgPin= '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>';
  var svgEx = '<svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"></path></svg>';

  var h = [];
  h.push('<div class="fase-contenido ec-ficha">');

  /* ── Card buscador (sin botones de navegación interna) ── */
  h.push('<div class="ec-card-buscador"><div class="ec-card-hdr">'+e.desc+'</div><div class="ec-card-body">');
  h.push('<div class="ec-cgrid">');
  h.push(ecCmp("Entidad contratante:",e.ent));
  h.push(ecCmp("Contratista:",e.con,"lnk"));
  h.push(ecCmp("Nomenclatura del proceso:",e.nom));
  h.push(ecCmp("Número del contrato:",e.nct));
  var montoContratadoCard = montoAdjudicadoProceso(codigo);
  h.push(ecCmp("Monto contratado:", (montoContratadoCard!==null && !isNaN(montoContratadoCard)) ? ecFmt(montoContratadoCard) : ecFmt(e.mto), "mn"));
  h.push(ecCmp("Objeto:",e.obj));
  h.push(ecCmp("Fecha inicio:",e.fini));
  h.push(ecCmp("Fecha suscripción:",e.fsus));
  h.push(ecCmp("Fecha fin:",e.ffin));
  h.push('</div>');
  h.push('<div class="ec-acc"><button class="ec-bp">Descargar Contrato</button><button class="ec-bp bl">Descargar Todos los Documentos</button></div>');
  h.push('</div></div>');

  /* Las secciones de Garantías, Proyecto de Inversión y Cuaderno de Incidencias
     solo aplican a contratos de OBRA; para Bienes y Servicios se omiten y la
     numeración de los acordeones se recalcula para no dejar saltos. */
  var esObra = (e.obj === "OBRA");
  var nAcc = 2;

  /* ── ACORDEÓN: Ítem del contrato ── */
  h.push(acordeon(uid+"-item", svgI+" "+(nAcc++)+". Ítem del contrato", [
    '<div class="ec-itm">',
    '<div class="ec-itn">'+e.item.desc+'</div>',
    '<div style="font-size:11.5px;color:var(--gris-500);margin-top:5px">Código único de inversión: <strong>'+e.inv.cui+'</strong></div>',
    '<div class="ec-dg" style="margin-top:11px">',
    ecD("CUBSO:",e.item.cubso,"","","fl"),
    ecD("Lugar de ejecución:",e.item.lugar),
    ecD("Monto:",ecFmt(e.item.monto),"mn"),
    ecD("Unidad de medida:",e.item.um),
    ecD("Cantidad contratada:",""+e.item.cant),
    '</div>',
    '<div class="ec-nov" style="margin-top:11px"><svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4m0 4h.01"></path></svg> <strong>Novedad:</strong> Visualiza el <strong>Presupuesto</strong> del contrato.</div>',
    '<div class="ec-inv">'+svgMn+' REPORTE DE LA FASE DE EJECUCIÓN — INVIERTE.PE '+svgEx+'</div>',
    '<div class="ec-arc" style="margin-top:11px"><svg aria-hidden="true" focusable="false" width="18" height="22" viewBox="0 0 24 28" fill="none" stroke="#B3432F" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v20a2 2 0 002 2h12a2 2 0 002-2V8z"></path><path d="M14 2v6h6"></path></svg><div><div style="font-size:12px;font-weight:600">CONTRATO LP01-2025.pdf</div><div style="font-size:11px;color:var(--gris-500)">26/05/2026 · 0.77 MB</div></div><span class="doc-link" style="margin-left:auto">Descargar</span></div>',
    '</div>'
  ].join("")));

  if(esObra){
  /* ── ACORDEÓN: Garantías ── */
  h.push(acordeon(uid+"-gar", svgG+" "+(nAcc++)+". Garantías del contrato", [
    '<div class="ec-gc"><div class="ec-dg">',
    ecD("Clase de garantía:",e.gar.clase),
    ecD("Tipo de garantía:",e.gar.tipo),
    ecD("Nro de garantía:",e.gar.num),
    ecD("Monto:",ecFmt(e.gar.monto),"mn"),
    ecD("Entidad emisora:",e.gar.emisor),
    ecD("Archivo adjunto:",'<button type="button" class="gar-dl-btn" onclick="descargarGarantia(this)" data-gar-num="'+e.gar.num+'" data-gar-tipo="'+e.gar.tipo+'" title="Descargar documento de garantía"><svg aria-hidden="true" focusable="false" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14"></path></svg> Descargar</button>'),
    ecD("Fecha de emisión:",e.gar.femi),
    ecD("Condición:",'<span class="ec-bc-cond '+(e.gar.cond==="Vigente"?"v":"nv")+'">'+e.gar.cond+'</span>'),
    ecD("Fecha de vencimiento:",e.gar.fven),
    ecD("Fecha de publicación:",e.gar.fpub),
    '</div></div>'
  ].join("")));

  /* ── ACORDEÓN: Banco de Inversiones ── */
  h.push(acordeon(uid+"-inv", svgB+" "+(nAcc++)+". Proyecto de Inversión — Banco de Inversiones MEF", [
    '<div class="ec-bkc">',
    '<div class="ec-cui"><div class="ec-cuil">CUI</div><div class="ec-cuiv">'+e.inv.cui+'</div></div>',
    '<div class="ec-bkn">'+e.inv.nombre+'</div>',
    '<a href="'+e.inv.url+'" target="_blank" class="ec-bkl">'+svgEx+' Ver en Banco de Inversiones — ofi5.mef.gob.pe</a>',
    '<div class="ec-bkp">',
    '<div style="font-size:12px;font-weight:700;color:var(--azul-petroleo);margin-bottom:6px">Banco de Inversiones · MEF</div>',
    '<div style="font-size:11.5px;margin-bottom:3px">CUI: <strong>'+e.inv.cui+'</strong></div>',
    '<div style="font-size:11.5px;color:var(--gris-700);line-height:1.5">'+e.inv.nombre+'</div>',
    '<div style="margin-top:10px;padding:7px 11px;background:#e8f0fb;border-radius:6px;font-size:11px;color:#1a3a6b"><strong>Fase:</strong> Ejecución &nbsp;·&nbsp; <strong>Estado:</strong> En ejecución &nbsp;·&nbsp; <strong>Monto:</strong> '+ecFmt(e.mto)+'</div>',
    '</div></div>'
  ].join("")));
  }

  /* ── ACORDEÓN: Avance financiero ── */
  h.push(acordeon(uid+"-af", svgMn+" "+(nAcc++)+". Avance financiero", [
    '<div class="ec-kpis">',
    ecKpi(ecFmt(e.af.pag),"Pagos realizados ("+e.af.pct+"%)", "gn"),
    ecKpi(ecFmt(e.af.pen),"Pago pendiente ("+(100-e.af.pct)+"%)", "or"),
    ecKpi(ecFmt(e.af.total),"Monto total del contrato",""),
    '</div>',
    ecBarra(e.af.pct),
    '<div class="ec-sub">Valorizaciones registradas</div>',
    '<div class="ec-vh"><div>N°</div><div>Período</div><div>Monto</div><div>Fecha de pago</div><div>Estado</div></div>',
    vals,
    '<div class="budget-dual" style="margin-top:16px">',
      '<div style="font-size:10px;font-weight:700;color:#9ca3af;margin-bottom:6px">Presupuesto Programado vs. Ejecutado</div>',
      '<div class="budget-row">',
        '<span class="budget-row-lbl">Programado</span>',
        '<div class="budget-bar-track"><div class="budget-bar-prog" style="width:100%"></div></div>',
        '<span class="budget-row-val">'+ecFmt(e.af.total)+'</span>',
      '</div>',
      '<div class="budget-row">',
        '<span class="budget-row-lbl">Ejecutado</span>',
        '<div class="budget-bar-track"><div class="budget-bar-exec" style="width:'+e.af.pct+'%"></div></div>',
        '<span class="budget-row-val">'+ecFmt(e.af.pag)+'</span>',
      '</div>',
      '<div class="budget-row">',
        '<span class="budget-row-lbl">Pendiente</span>',
        '<div class="budget-bar-track"><div style="height:100%;width:'+(100-e.af.pct)+'%;border-radius:4px;background:linear-gradient(90deg,#d1d5db,#e5e7eb)"></div></div>',
        '<span class="budget-row-val" style="color:#9ca3af">'+ecFmt(e.af.pen)+'</span>',
      '</div>',
    '</div>',
    '<div class="risk-card-finding" style="margin-top:8px"><strong>'+e.af.pct+'%</strong> del presupuesto ejecutado.</div>'
  ].join("")));

  /* ── ACORDEÓN: Avance físico ── */
  h.push(acordeon(uid+"-fis", svgCh+" "+(nAcc++)+". Avance físico", [
    '<div class="ec-kpis">',
    ecKpi(""+e.fis.comp,"Entregables completados","gn"),
    ecKpi(""+(e.fis.total-e.fis.comp),"Entregables pendientes","or"),
    ecKpi(""+e.fis.total,"Total de entregables",""),
    '</div>',
    ecBarra(e.fis.pct),
    '<div class="ec-sub">Entregables del contrato</div>',
    '<div class="ec-ents">'+ents+'</div>'
  ].join("")));

  if(esObra){
  /* ── ACORDEÓN: Cuaderno de incidencias ── */
  h.push(acordeon(uid+"-ci", svgBk+" "+(nAcc++)+". Cuaderno de Incidencias", [
    '<div class="ec-cio">',
    ecD("Entidad:",e.ci.ent),
    ecD("Obra:",e.ci.obra,"",true),
    ecD("CUI:",e.ci.cui),
    ecD("Fecha de suscripción:",e.ci.fsus),
    ecD("Fecha de apertura:",e.ci.fap),
    ecD("Contratista:",e.ci.con),
    ecD("Residente:",e.ci.res),
    ecD("Supervisor:",e.ci.sup),
    '</div>',
    '<div class="ec-tlw"><div class="ec-tlh"><div class="ec-tlt">Time Lapse — Avance visual de la obra</div><div class="ec-tlc"><button class="ec-tlp" id="tlPB" onclick="tlTog()"><svg aria-hidden="true" focusable="false" id="tlIc" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"></polygon></svg> <span id="tlLb">Reproducir</span></button><span class="ec-tlm" id="tlML">Ene 2025</span></div></div>',
    '<canvas id="tlCv" width="700" height="220"></canvas>',
    '<div class="ec-tlb"><input type="range" id="tlSc" class="ec-tls" min="0" max="11" value="0" oninput="tlGo(parseInt(this.value))"><div class="ec-tlmb" id="tlMB"></div></div></div>',
    '<div class="ec-sub" style="margin-top:14px">Asientos del Cuaderno de Incidencias</div>',
    '<div class="ec-cih"><div>N°</div><div>Título del asiento</div><div style="display:none"></div><div style="display:none"></div><div style="display:none"></div></div>',
    '<div class="ec-cil">'+asi+'</div>'
  ].join("")));
  }

  /* ── ACORDEÓN: Mapa ── */
  h.push(acordeon(uid+"-map", svgPin+" "+(nAcc++)+". Ubicación referencial de la "+(esObra?"obra / prestación":"prestación"), [
    '<div class="ec-ubg"><span>'+e.ub.ubg+'</span><span style="font-size:11px;color:var(--gris-500);font-family:var(--fuente-mono)">Lat: '+e.ub.lat+' · Lng: '+e.ub.lng+'</span></div>',
    '<div id="ecMap-'+uid+'" class="ec-map" data-lat="'+e.ub.lat+'" data-lng="'+e.ub.lng+'" data-ub="'+e.ub.ubg+'"></div>'
  ].join("")));

  /* ── ACORDEÓN: Controversias ── */
  var svgContro = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="2"></rect><path d="M9 3v3a1 1 0 001 1h4a1 1 0 001-1V3"></path><path d="M9 12l2 2 4-4"></path></svg>';
  var svgJprd = '<svg aria-hidden="true" focusable="false" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="2"></rect><path d="M9 3v3a1 1 0 001 1h4a1 1 0 001-1V3"></path><path d="M9 12l2 2 4-4"></path></svg>';
  h.push(acordeon(uid+"-contro", svgContro+" "+(nAcc++)+". Controversias", [
    '<div style="border:1px solid var(--gris-200);border-radius:10px;overflow:hidden;margin-bottom:16px">',
      '<div style="background:var(--gris-700);color:#fff;padding:10px 14px;display:flex;align-items:center;gap:8px;font-weight:700;font-size:13px">'+svgJprd+'<span>Junta de Prevención y Resolución de Disputas</span></div>',
      '<div class="ec-dg" style="padding:14px 16px">',
        ecD("Instituciones que administran medios de Solución de Controversias:","CENTRO DE ANÁLISIS Y RESOLUCIÓN DE CONFLICTOS DE LA PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ","",true),
        ecD("Código de JPRD:","JPRD-504-2026"),
        ecD("Fecha de Audiencia:","03/06/2026"),
        ecD("Fecha de registro de la JPRD:","26/06/2026"),
        ecD("Nro. Miembros:","1"),
        ecD("Contrato Tripartito:",'<span class="doc-link">Descargar</span>'),
        ecD("Acta de Instalación:",'<span class="doc-link">Descargar</span>'),
        ecD("Fecha de documento de decisión:","—"),
        ecD("Decisión emitida:",'<span class="doc-link">Descargar</span>'),
      '</div>',
    '</div>',
    '<div style="border:1px solid var(--gris-200);border-radius:10px;overflow:hidden;margin-bottom:16px">',
      '<div style="background:var(--gris-700);color:#fff;padding:10px 14px;font-weight:700;font-size:13px">Arbitraje</div>',
      '<div style="padding:14px 16px"><p style="font-size:12px;color:var(--gris-500,#717A7E)">No hay datos</p></div>',
    '</div>',
    '<div style="border:1px solid var(--gris-200);border-radius:10px;overflow:hidden;margin-bottom:16px">',
      '<div style="background:var(--gris-700);color:#fff;padding:10px 14px;font-weight:700;font-size:13px">Conciliación</div>',
      '<div style="padding:14px 16px"><p style="font-size:12px;color:var(--gris-500,#717A7E)">No hay datos</p></div>',
    '</div>',
    '<div style="border:1px solid var(--gris-200);border-radius:10px;overflow:hidden">',
      '<div style="background:var(--gris-700);color:#fff;padding:10px 14px;font-weight:700;font-size:13px">Otros Mecanismos</div>',
      '<div style="padding:14px 16px"><p style="font-size:12px;color:var(--gris-500,#717A7E)">No hay datos</p></div>',
    '</div>'
  ].join("")));


  /* ── INDICADORES DE PROCESO EC ── */
  h.push(buildEcIndicators(uid, e));

  h.push('</div>'); /* cierre ec-ficha */
  return h.join("");
}

/* ================================================================
   TAB SWITCHER EC
   ================================================================ */
function ecT(btn, pid, wid) {
  var w = document.getElementById(wid);
  if (!w) return;
  w.querySelectorAll(".ec-tab").forEach(function(t){ t.classList.remove("on"); });
  w.querySelectorAll(".ec-pnl").forEach(function(p){ p.classList.remove("on"); });
  btn.classList.add("on");
  var p = document.getElementById(pid);
  if (p) p.classList.add("on");
}

/* ================================================================
   TIME LAPSE CANVAS
   ================================================================ */
var tlFr=0, tlPl=false, tlIv=null;
var TLM=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

function tlDr(f) {
  var cv = document.getElementById("tlCv");
  if (!cv) return;
  var ctx = cv.getContext("2d"), W=cv.width, H=cv.height, t=f/11;
  ctx.clearRect(0,0,W,H);
  var sk=ctx.createLinearGradient(0,0,0,H*.55);
  sk.addColorStop(0,"hsl("+(200+t*20)+","+(60+t*10)+"%,"+(70-t*15)+"%)");
  sk.addColorStop(1,"hsl("+(200+t*20)+",40%,85%)");
  ctx.fillStyle=sk; ctx.fillRect(0,0,W,H*.6);
  var gn=ctx.createLinearGradient(0,H*.55,0,H);
  gn.addColorStop(0,"hsl(100,"+(25+t*20)+"%,"+(40+t*10)+"%)");
  gn.addColorStop(1,"#8B7355");
  ctx.fillStyle=gn; ctx.fillRect(0,H*.55,W,H);
  ctx.fillStyle="hsl(220,20%,"+(50-t*5)+"%)";
  ctx.beginPath(); ctx.moveTo(0,H*.55);
  [.05,.15,.25,.35,.45,.55,.65,.75,.85,.95,1.05].forEach(function(x,i){ ctx.lineTo(W*x,H*(.55-.15-Math.sin(i*1.3)*.08)); });
  ctx.lineTo(W,H*.55); ctx.closePath(); ctx.fill();
  var bp=Math.min(1,f/8),bx=W*.22,bw=W*.55*bp,by=H*.52,bh=H*.12,np=Math.floor(3*bp)+1;
  ctx.fillStyle="#8B7E72";
  for(var i=0;i<=np;i++){ var px=bx+(bw/np)*i; ctx.fillRect(px-5,by,10,bh+H*.05); }
  if(bp>.1){
    ctx.fillStyle="#A09080"; ctx.fillRect(bx,by,bw,14);
    ctx.strokeStyle="#C0B8A8"; ctx.lineWidth=1.5; ctx.beginPath();
    ctx.moveTo(bx,by+7); ctx.lineTo(bx+bw*.5,by-bh*.8); ctx.lineTo(bx+bw,by+7); ctx.stroke();
  }
  if(f>=2){
    var mp=Math.min(1,(f-2)/5),cx2=bx+bw*.7;
    ctx.strokeStyle="#E8702A"; ctx.lineWidth=3; ctx.beginPath();
    ctx.moveTo(cx2,by+bh*.1); ctx.lineTo(cx2,by-H*.22*mp); ctx.lineTo(cx2-W*.08*mp,by-H*.18*mp); ctx.stroke();
    if(f>=3){ [[.35,0],[.45,0],[.55,0],[.6,-.01]].forEach(function(r){ ctx.fillStyle="#E8702A"; ctx.beginPath(); ctx.arc(bx+bw*r[0],by+r[1]*H+5,4,0,Math.PI*2); ctx.fill(); }); }
  }
  var bY=H-20;
  ctx.fillStyle="rgba(0,0,0,0.3)"; ctx.fillRect(10,bY-2,W-20,10);
  ctx.fillStyle="#2D6E4E"; ctx.fillRect(10,bY-2,(W-20)*(f/11),10);
  ctx.fillStyle="rgba(0,0,0,0.55)"; ctx.fillRect(10,8,90,26);
  ctx.fillStyle="#FFF"; ctx.font="bold 13px sans-serif"; ctx.fillText(TLM[f]+" 2025",18,26);
  ctx.fillStyle="rgba(0,0,0,0.55)"; ctx.fillRect(W-80,8,70,26);
  ctx.fillStyle="#FFF"; ctx.fillText(Math.round(f/11*100)+"% obra",W-75,26);
  var sc=document.getElementById("tlSc"); if(sc) sc.value=f;
  var ml=document.getElementById("tlML"); if(ml) ml.textContent=TLM[f]+" 2025";
}

function tlGo(f){ tlFr=f; tlDr(f); }

function tlTog(){
  var pb=document.getElementById("tlPB"),ic=document.getElementById("tlIc"),lb=document.getElementById("tlLb");
  if(tlPl){
    clearInterval(tlIv); tlPl=false;
    if(ic) ic.innerHTML='<polygon points="5,3 19,12 5,21"></polygon>';
    if(lb) lb.textContent="Reproducir";
  } else {
    if(tlFr>=11) tlFr=0; tlPl=true;
    if(ic) ic.innerHTML='<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
    if(lb) lb.textContent="Pausar";
    tlIv=setInterval(function(){ tlFr++; tlDr(tlFr); if(tlFr>=11){ clearInterval(tlIv); tlPl=false; if(ic) ic.innerHTML='<polygon points="5,3 19,12 5,21"></polygon>'; if(lb) lb.textContent="Reproducir"; } },600);
  }
}

/* ================================================================
   LEAFLET MAPS + TIMELAPSE INIT — llamado tras cada render
   ================================================================ */
function ecAfterRender(){
  setTimeout(function(){
    /* abrir todos los acordeones por defecto */
    document.querySelectorAll(".ac-wrap:not(.ac-open)").forEach(function(w){
      var body = w.querySelector(".ac-body");
      if(body){ w.classList.add("ac-open"); body.style.maxHeight = "9999px"; }
    });
    /* meses bar + canvas init */
    var mb=document.getElementById("tlMB");
    if(mb && !mb._init){
      mb._init=true;
      mb.innerHTML=TLM.map(function(m,i){ return '<span onclick="tlGo('+i+')">'+ m +'</span>'; }).join("");
      tlDr(0);
    }
    /* leaflet maps */
    if(typeof L==="undefined") return;
    document.querySelectorAll(".ec-map").forEach(function(el){
      if(el._lf) return; el._lf=true;
      var lat=parseFloat(el.dataset.lat), lng=parseFloat(el.dataset.lng), ub=el.dataset.ub||"";
      var map=L.map(el).setView([lat,lng],13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap",maxZoom:18}).addTo(map);
      L.marker([lat,lng]).addTo(map).bindPopup("<strong>"+ub+"</strong>").openPopup();
    });
  }, 120);
}


/* ================================================================
   INDICADORES DE PROCESO — EJECUCIÓN CONTRACTUAL
   3 indicadores normativos del sistema de contrataciones peruano
   ================================================================ */
function buildEcIndicators(uid, e) {
  var SVG_STAR = '<svg aria-hidden="true" focusable="false" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';

  /* ── 1. Desempeño y Reputación del Proveedor (RNP / Pladicop) ── */
  var card1 = [
    '<div class="ind-card ind-c-verde">',
      '<div class="ind-card-accent"></div>',
      '<div class="ind-card-inner">',
        '<div class="ind-nro">Indicador 1 · RNP / Pladicop</div>',
        '<div class="ind-titulo">Desempeño y Reputación del Proveedor</div>',
        '<div class="ind-fuente f-verde">Registro Nacional de Proveedores — medición trimestral</div>',
        '<div class="ind-metrica">',
          '<div>',
            '<span class="ind-pct c-verde">92%</span>',
            '<span class="ind-pct-lbl">Ratio de cumplimiento</span>',
          '</div>',
          '<div style="flex:1">',
            '<div class="ind-bar-track"><div class="ind-bar-fill bf-verde" style="width:92%"></div></div>',
            '<div style="display:flex;justify-content:space-between;font-size:10px;color:var(--n500);margin-top:3px"><span>0%</span><span>Meta: ≥85%</span><span>100%</span></div>',
          '</div>',
        '</div>',
        '<div class="ind-finding ok">Proveedor <strong>CONSORCIO VIAL AMAZONAS S.A.C.</strong> registra 0 penalidades por mora en sus últimos 12 contratos con conformidad. Calificación trimestral: <strong>Excelente</strong>.</div>',
        '<div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap">',
          '<div class="ind-sem"><div class="ind-sem-dot sem-verde"></div>Sin penalidades por mora</div>',
          '<div class="ind-sem"><div class="ind-sem-dot sem-verde"></div>Habilitado en RNP</div>',
          '<div class="ind-sem"><div class="ind-sem-dot sem-verde"></div>Sin impedimentos legales</div>',
        '</div>',
      '</div>',
    '</div>'
  ].join('');

  /* ── 2. Avance Físico y Financiero en Obras ── */
  var card2 = [
    '<div class="ind-card ind-c-naranja">',
      '<div class="ind-card-accent"></div>',
      '<div class="ind-card-inner">',
        '<div class="ind-nro">Indicador 2 · Supervisión de Obra</div>',
        '<div class="ind-titulo">Avance Físico y Financiero en Obras</div>',
        '<div class="ind-fuente f-naranja">Ratio de ejecución — Avance Real vs. Programado</div>',
        '<div class="ind-dual">',
          '<div class="ind-dual-row">',
            '<span class="ind-dual-lbl">Programado</span>',
            '<div class="ind-dual-bar"><div class="ind-dual-fill df-prog" style="width:100%"></div></div>',
            '<span class="ind-dual-val" style="color:var(--r)">S/ 412,500</span>',
          '</div>',
          '<div class="ind-dual-row">',
            '<span class="ind-dual-lbl">Ejecutado</span>',
            '<div class="ind-dual-bar"><div class="ind-dual-fill df-exec" style="width:60%"></div></div>',
            '<span class="ind-dual-val" style="color:var(--grn)">S/ 247,500</span>',
          '</div>',
        '</div>',
        '<div class="ind-sem" style="margin-bottom:8px"><div class="ind-sem-dot sem-naranja"></div><strong>Ratio de ejecución: 60%</strong> — Por debajo del umbral crítico (80%)</div>',
        '<div class="ind-finding">La valorización acumulada ejecutada (60%) es menor al 80% de la programada.</div>',
      '</div>',
    '</div>'
  ].join('');

  /* ── 3. Penalidades Aplicadas ── */
  var penaltyPct = 0.01;
  var penaltyAmount = e.mto * penaltyPct;
  var card4 = [
    '<div class="ind-card ind-c-rojo">',
      '<div class="ind-card-accent"></div>',
      '<div class="ind-card-inner">',
        '<div class="ind-nro">Indicador 4 · Desempeño Contractual</div>',
        '<div class="ind-titulo">Penalidades Aplicadas</div>',
        '<div class="ind-fuente f-rojo">Ley N° 32069</div>',
        '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:12px">',
          '<div style="text-align:center;padding:10px;border:1px solid var(--n300);border-radius:var(--rad)">',
            '<div style="font-size:20px;font-weight:800;color:var(--r);font-family:var(--mono)">1</div>',
            '<div style="font-size:10px;color:var(--n500);font-weight:600;margin-top:2px">Penalidad aplicada</div>',
          '</div>',
          '<div style="text-align:center;padding:10px;border:1px solid var(--n300);border-radius:var(--rad)">',
            '<div style="font-size:20px;font-weight:800;color:var(--org);font-family:var(--mono)">'+ecFmt(penaltyAmount)+'</div>',
            '<div style="font-size:10px;color:var(--n500);font-weight:600;margin-top:2px">Monto penalizado</div>',
          '</div>',
        '</div>',
        '<div class="ind-finding">Penalidad por mora aplicada por un retraso de <strong>5 días calendario</strong>.</div>',
      '</div>',
    '</div>'
  ].join('');

  return [
    '<div class="ec-ind-wrap">',
      '<div class="ec-ind-header" onclick="toggleEcInd(\''+uid+'\')">',
        '<div class="ec-ind-title">',
          '<svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>',
          'Indicadores de Proceso — Contratos',
        '</div>',
        '<div style="display:flex;align-items:center;gap:8px">',
          '<span style="background:rgba(255,255,255,.18);padding:2px 10px;border-radius:12px;font-size:12px;font-weight:700;color:#fff">3 indicadores activos</span>',
          '<span class="ec-ind-chev" id="ec-ind-chev-'+uid+'">▲</span>',
        '</div>',
      '</div>',
      '<div class="ec-ind-body" id="ec-ind-body-'+uid+'">',
        '<div class="ec-ind-grid">',
          card1, card2, card4,
        '</div>',
      '</div>',
    '</div>'
  ].join('');
}

function toggleEcInd(uid){
  var body = document.getElementById('ec-ind-body-'+uid);
  var chev = document.getElementById('ec-ind-chev-'+uid);
  var closed = body.classList.toggle('closed');
  if(chev) chev.textContent = closed ? '▼' : '▲';
}

/* ================================================================
   INDICADORES DE RIESGO DE CONTRATACIÓN
   Genera el bloque HTML con los 4 indicadores:
   1. Postor único / competencia
   2. Riesgo de cronograma
   3. Transparencia OCDS
   4. Presupuesto programado vs ejecutado
   ================================================================ */
function buildRiskIndicators(uid) {
  var SVG_WARN = '<svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
  var SVG_SHIELD = '<svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>';
  var SVG_CLOCK  = '<svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>';
  var SVG_MONEY  = '<svg aria-hidden="true" focusable="false" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>';
  var SVG_CHECK  = '<svg aria-hidden="true" focusable="false" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>';

  /* ── Indicador 1: Postergaciones de Cronograma y Reconformación de Comité ── */
  var cardCronoComite = [
    '<div class="risk-card rc-medio">',
      '<div class="risk-card-accent"></div>',
      '<div class="risk-card-top">',
        '<div>',
          '<div class="risk-card-label">Cumplimiento de plazos y conducción del proceso</div>',
          '<div class="risk-card-name">Postergaciones de Cronograma y Reconformación de Comité</div>',
        '</div>',
        '<div class="risk-card-value">',
          '<div class="risk-card-pct">3</div>',
          '<div style="font-size:9.5px;color:#9ca3af;text-align:right">eventos registrados</div>',
        '</div>',
      '</div>',
      '<div class="risk-card-detail">',
        '<div class="crono-risk-row">',
          '<div class="crono-risk-icon cri-warn">!</div>',
          '<div class="crono-risk-info"><div class="crono-risk-etapa">Postergación — Presentación de propuestas</div><div class="crono-risk-dias">29/04/2026 → 13/05/2026 · Solicitud de prórroga por complejidad técnica</div></div>',
          '<span class="crono-risk-delta crd-warn">+14 días</span>',
        '</div>',
        '<div class="crono-risk-row">',
          '<div class="crono-risk-icon cri-warn">!</div>',
          '<div class="crono-risk-info"><div class="crono-risk-etapa">Postergación — Otorgamiento de la Buena Pro</div><div class="crono-risk-dias">15/06/2026 → 30/06/2026 · Ampliación de plazo para evaluación de propuestas</div></div>',
          '<span class="crono-risk-delta crd-warn">+15 días</span>',
        '</div>',
        '<div class="crono-risk-row">',
          '<div class="crono-risk-icon cri-bad">⟳</div>',
          '<div class="crono-risk-info"><div class="crono-risk-etapa">Reconformación de Comité de Selección</div><div class="crono-risk-dias">10/05/2026 · RESOLUCIÓN N° 025-2026-MDM-GM</div></div>',
          '<span class="crono-risk-delta crd-bad">1 cambio</span>',
        '</div>',
        '<div class="risk-card-sub" style="margin-top:4px">2 postergaciones de cronograma y 1 reconformación de comité detectadas durante el proceso.</div>',
      '</div>',
    '</div>'
  ].join('');

  /* ── Indicador 3: Transparencia OCDS ── */
  var cardTransp = [
    '<div class="risk-card rc-bajo">',
      '<div class="risk-card-accent"></div>',
      '<div class="risk-card-top">',
        '<div>',
          '<div class="risk-card-label">Datos abiertos OCDS</div>',
          '<div class="risk-card-name">Índice de Transparencia</div>',
        '</div>',
        '<div class="risk-card-value">',
          '<div class="risk-card-pct" style="color:#16a34a">82</div>',
          '<div style="font-size:9.5px;color:#9ca3af;text-align:right">/ 100 puntos</div>',
        '</div>',
      '</div>',
      '<div class="risk-bar-wrap">',
        '<div style="display:flex;justify-content:space-between;font-size:10px;color:#9ca3af;margin-bottom:3px"><span>Puntaje OCDS</span><span style="color:#16a34a;font-weight:700">Satisfactorio</span></div>',
        '<div class="risk-bar-track"><div class="risk-bar-fill rb-bajo" style="width:82%"></div></div>',
      '</div>',
      '<div class="transp-score">',
        '<div class="transp-circle">',
          '<svg aria-hidden="true" focusable="false" width="68" height="68" viewBox="0 0 68 68"><circle cx="34" cy="34" r="28" fill="none" stroke="#e5e7eb" stroke-width="7"/><circle cx="34" cy="34" r="28" fill="none" stroke="#16a34a" stroke-width="7" stroke-dasharray="144 176" stroke-linecap="round"/></svg>',
          '<div class="transp-circle-val">82%</div>',
        '</div>',
        '<div class="transp-detail">',
          '<div class="transp-row"><span class="transp-item">Convocatoria pública publicada</span><span class="transp-check ok">✓</span></div>',
          '<div class="transp-row"><span class="transp-item">Bases integradas en SEACE</span><span class="transp-check ok">✓</span></div>',
          '<div class="transp-row"><span class="transp-item">Acta de buena pro publicada</span><span class="transp-check ok">✓</span></div>',
          '<div class="transp-row"><span class="transp-item">Contrato firmado publicado</span><span class="transp-check warn">○</span></div>',
          '<div class="transp-row"><span class="transp-item">Pagos registrados en SIAF</span><span class="transp-check bad">✕</span></div>',
        '</div>',
      '</div>',
      '<div class="risk-card-sub" style="padding-left:8px">3 de 5 criterios cumplidos al 100%. Pendiente: registro de pagos y publicación de contrato.</div>',
    '</div>'
  ].join('');

  /* ── Contenedor accordion ── */
  return [
    '<div class="risk-wrap" id="risk-wrap-'+uid+'">',
      '<div class="risk-header" id="risk-hdr-'+uid+'" onclick="toggleRisk(\''+uid+'\')">',
        '<div class="risk-title">',
          '<div class="risk-title-icon">',
            '<svg aria-hidden="true" focusable="false" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C0282A" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
          '</div>',
          'Indicadores de Riesgo de la Contratación',
        '</div>',
        '<div class="risk-badge-global">',
          '<span class="risk-glob-lbl">Riesgo global</span>',
          '<span class="risk-pill rp-medio">⚠ Medio</span>',
          '<span class="risk-chev" id="risk-chev-'+uid+'">▼</span>',
        '</div>',
      '</div>',
      '<div class="risk-body open" id="risk-body-'+uid+'">',
        '<div class="risk-grid">',
          cardCronoComite,
          cardTransp,
        '</div>',
      '</div>',
    '</div>'
  ].join('');
}

function toggleRisk(uid){
  var hdr = document.getElementById('risk-hdr-'+uid);
  var body = document.getElementById('risk-body-'+uid);
  var chev = document.getElementById('risk-chev-'+uid);
  var open = body.classList.toggle('open');
  hdr.classList.toggle('open', open);
  chev.textContent = open ? '▲' : '▼';
}

