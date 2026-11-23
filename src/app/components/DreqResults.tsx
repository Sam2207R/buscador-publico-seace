import { useState } from 'react';
import { X, Download, List, LayoutGrid, Columns2, ArrowUpDown, Eye } from 'lucide-react';

interface CronogramaEtapa {
  etapa: string;
  inicio: string;
  fin: string;
}
interface DocFile {
  nombre: string;
  tam: string;
  fecha: string;
}
interface ReqDoc {
  nro: number;
  nombre: string;
  tipo: 'pdf' | 'docx';
  tam: string;
  fechaDoc?: string;
}
interface DdrRecord {
  id: number;
  codigo: string;
  entidad: string;
  nReq: number;
  objeto: 'Bien' | 'Servicio' | 'Obra';
  desc: string;
  fechaPub: string;
  fechaFormCons: string;
  cronograma: CronogramaEtapa[];
  pliAbs: DocFile | null;
  actaAbs: DocFile | null;
  docs: ReqDoc[];
  dir: string;
}

const DDR_DATA: DdrRecord[] = [
  {
    id: 166, codigo: 'DDR-3773-CSJJUN',
    entidad: 'CORTE SUPERIOR DE JUSTICIA DE JUNIN',
    nReq: 3773, objeto: 'Bien',
    desc: 'ADQUISICIÓN DE UNIFORME INSTITUCIONAL PARA EL PERSONAL JURISDICCIONAL Y ADMINISTRATIVO DE LA CORTE SUPERIOR DE JUSTICIA DE JUNIN',
    fechaPub: '06/05/2026 17:35', fechaFormCons: '07/05/2026 - 13/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '06/05/2026', fin: '06/05/2026' },
      { etapa: 'Formulación de Consultas y Observaciones al requerimiento', inicio: '07/05/2026', fin: '13/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma de Acto de Público de Absolución Presencial', inicio: '14/05/2026', fin: '14/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '15/05/2026', fin: '15/05/2026' },
    ],
    pliAbs: null, actaAbs: { nombre: 'EE.TT. UNIFORME 113 PAG...pdf', tam: '388.8 KB', fecha: '27/05/2026' },
    docs: [
      { nro: 1, nombre: 'EE.TT. UNIFORME 113 PAG...pdf', tipo: 'pdf', tam: '3524.4 KB' },
      { nro: 2, nombre: 'EE.TT. UNIFORME 1456 PAG...pdf', tipo: 'pdf', tam: '11348.2 KB' },
      { nro: 3, nombre: 'INFORMACION SOBRE REQUERIMIENTO MENSAJERIA.docx', tipo: 'docx', tam: '27.5 KB' },
    ],
    dir: 'JR. PARRA DEL RIEGO NRO. 400 JUNIN - HUANCAYO - EL TAMBO',
  },
  {
    id: 167, codigo: 'DDR-3769-EPSGRAU',
    entidad: 'ENTIDAD PRESTADORA DE SERVICIO DE SANEAMIENTO GRAU S.A.',
    nReq: 3769, objeto: 'Bien',
    desc: 'ADQUISICIÓN DE MATERIALES DIVERSOS Y REACTIVOS QUÍMICOS PARA LOS LABORATORIOS DE CONTROL DE CALIDAD DE LAS PLANTAS DE TRATAMIENTO DE AGUA POTABLE DE CURUMUY, ARENAL, SULLANA Y LAS LOMAS',
    fechaPub: '06/05/2026 15:06', fechaFormCons: '07/05/2026 - 13/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '06/05/2026', fin: '06/05/2026' },
      { etapa: 'Formulación de Consultas y Observaciones al requerimiento', inicio: '07/05/2026', fin: '13/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma', inicio: '14/05/2026', fin: '14/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '15/05/2026', fin: '15/05/2026' },
    ],
    pliAbs: { nombre: 'Pliego_Absolutorio_3769.pdf', tam: '718.5 KB', fecha: '19/05/2026' },
    actaAbs: null,
    docs: [{ nro: 1, nombre: 'Requerimiento_Reactivos_GRAU.pdf', tipo: 'pdf', tam: '2.3 MB' }],
    dir: 'AV. LUIS MONTERO NRO. 201 PIURA',
  },
  {
    id: 168, codigo: 'DDR-3760-GORELAM',
    entidad: 'GOBIERNO REGIONAL DE LAMBAYEQUE - HOSPITAL REGIONAL LAMBAYEQUE',
    nReq: 3760, objeto: 'Bien',
    desc: 'ADQUISICIÓN DE INSUMOS PARA PRUEBAS DE INMUNOHEMATOLOGÍA CON EQUIPO EN COMODATO DEL SERVICIO DE BANCO DE SANGRE DEL DEPARTAMENTO DE APOYO AL DIAGNÓSTICO',
    fechaPub: '05/05/2026 16:57', fechaFormCons: '06/05/2026 - 12/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '05/05/2026', fin: '05/05/2026' },
      { etapa: 'Formulación de Consultas y Observaciones', inicio: '06/05/2026', fin: '12/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma', inicio: '13/05/2026', fin: '13/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '14/05/2026', fin: '14/05/2026' },
    ],
    pliAbs: { nombre: 'Pliego_Absolutorio_3760.pdf', tam: '2377.7 KB', fecha: '25/05/2026' },
    actaAbs: { nombre: 'Acta_Absolucion_3760.pdf', tam: '2377.7 KB', fecha: '25/05/2026' },
    docs: [{ nro: 1, nombre: 'Especificaciones_Tecnicas_Insumos_Hematologia.pdf', tipo: 'pdf', tam: '2377.7 KB' }],
    dir: 'CAL. JUAN CUGLIEVAN NRO. 752 CHICLAYO - LAMBAYEQUE',
  },
  {
    id: 169, codigo: 'DDR-3757-GRL403',
    entidad: 'GOBIERNO REGIONAL DE LA LIBERTAD - U.E. 403-SALUD TRUJILLO-SUR OESTE',
    nReq: 3757, objeto: 'Bien',
    desc: 'SUMINISTRO DE REACTIVOS DE BIOQUIMICA',
    fechaPub: '05/05/2026 11:56', fechaFormCons: '06/05/2026 - 12/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '05/05/2026', fin: '05/05/2026' },
      { etapa: 'Formulación de Consultas y Observaciones', inicio: '06/05/2026', fin: '12/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma', inicio: '13/05/2026', fin: '13/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '14/05/2026', fin: '14/05/2026' },
    ],
    pliAbs: null, actaAbs: { nombre: 'Acta_Absolucion_3757.pdf', tam: '329.7 KB', fecha: '24/06/2026' },
    docs: [{ nro: 1, nombre: 'Requerimiento_Reactivos_Bioquimica.pdf', tipo: 'pdf', tam: '81.2 KB' }],
    dir: 'JR. DIEGO DE ALMAGRO NRO. S/N LA LIBERTAD - TRUJILLO',
  },
  {
    id: 170, codigo: 'DDR-3756-GRL403',
    entidad: 'GOBIERNO REGIONAL DE LA LIBERTAD - U.E. 403-SALUD TRUJILLO-SUR OESTE',
    nReq: 3756, objeto: 'Bien',
    desc: 'SUMINISTRO DE REACTIVO PARA PANEL INMUNOLOGICO',
    fechaPub: '05/05/2026 11:54', fechaFormCons: '06/05/2026 - 12/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '05/05/2026', fin: '05/05/2026' },
      { etapa: 'Formulación de Consultas y Observaciones', inicio: '06/05/2026', fin: '12/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma', inicio: '13/05/2026', fin: '13/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '14/05/2026', fin: '14/05/2026' },
    ],
    pliAbs: null, actaAbs: { nombre: 'Acta_Absolucion_3756.pdf', tam: '430.2 KB', fecha: '11/06/2026' },
    docs: [{ nro: 1, nombre: 'Requerimiento_Panel_Inmunologico.pdf', tipo: 'pdf', tam: '430.2 KB' }],
    dir: 'JR. DIEGO DE ALMAGRO NRO. S/N LA LIBERTAD - TRUJILLO',
  },
  {
    id: 171, codigo: 'DDR-3752-HIDRAND',
    entidad: 'EMPRESA REGIONAL DE SERVICIO PUBLICO DE ELECTRICIDAD ELECTRO NOR MEDIO SA HIDRANDINA',
    nReq: 3752, objeto: 'Bien',
    desc: 'ADQUISICION DE ACEITE DIELECTRICO PARA MANTENIMIENTO DE TRANSFORMADORES DE POTENCIA DE HIDRANDINA S.A.',
    fechaPub: '04/05/2026 17:36', fechaFormCons: '05/05/2026 - 11/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '04/05/2026', fin: '04/05/2026' },
      { etapa: 'Formulación de Consultas y Observaciones', inicio: '05/05/2026', fin: '11/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma', inicio: '12/05/2026', fin: '12/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '13/05/2026', fin: '13/05/2026' },
    ],
    pliAbs: null, actaAbs: { nombre: 'Acta_Absolucion_3752.pdf', tam: '249.7 KB', fecha: '13/05/2026' },
    docs: [{ nro: 1, nombre: 'EETT_Aceite_Dielectrico.pdf', tipo: 'pdf', tam: '249.7 KB' }],
    dir: 'CAL. CONSUELO NRO. 470 LA LIBERTAD - TRUJILLO',
  },
  {
    id: 172, codigo: 'DDR-3749-GRLSALUD',
    entidad: 'GOBIERNO REGIONAL DE LA LIBERTAD - DIRECCIÓN REGIONAL DE SALUD LA LIBERTAD',
    nReq: 3749, objeto: 'Bien',
    desc: 'ADQUISICIÓN DE: AMBULANCIA RURAL TIPO I, AMBULANCIA RURAL TIPO II, AMBULANCIA URBANA TIPO II, PARA 51 ESTABLECIMIENTOS DE SALUD DEL DEPARTAMENTO DE LA LIBERTAD',
    fechaPub: '04/05/2026 12:42', fechaFormCons: '05/05/2026 - 11/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '04/05/2026', fin: '04/05/2026' },
      { etapa: 'Formulación de Consultas y Observaciones', inicio: '05/05/2026', fin: '11/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma', inicio: '12/05/2026', fin: '12/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '13/05/2026', fin: '13/05/2026' },
    ],
    pliAbs: { nombre: 'Pliego_Absolutorio_3749.pdf', tam: '118.3 KB', fecha: '25/05/2026' },
    actaAbs: { nombre: 'Acta_Absolucion_3749.pdf', tam: '553.7 KB', fecha: '03/06/2026' },
    docs: [{ nro: 1, nombre: 'Requerimiento_Ambulancias_GRLL.pdf', tipo: 'pdf', tam: '553.7 KB' }],
    dir: 'AV. METROPOLITANA NRO. 261 LA LIBERTAD - TRUJILLO',
  },
  {
    id: 173, codigo: 'DDR-3747-MUNIENC',
    entidad: 'MUNICIPALIDAD DISTRITAL DE LA ENCAÑADA',
    nReq: 3747, objeto: 'Bien',
    desc: 'ADQUISICION DE COMBUSTIBLE DIESEL B5 PARA LA EJECUCION DE LA IOARR: REPARACION DE VIAS VECINALES EN EL (LA) TROCHA CARROZABLE TRAMO: SIERRA MORENA-SAN MARTIN-MAQUI MAQUI-LA PACCHA',
    fechaPub: '04/05/2026 12:24', fechaFormCons: '05/05/2026 - 11/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '04/05/2026', fin: '04/05/2026' },
      { etapa: 'Formulación de Consultas y Observaciones', inicio: '05/05/2026', fin: '11/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma', inicio: '12/05/2026', fin: '12/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '13/05/2026', fin: '13/05/2026' },
    ],
    pliAbs: null, actaAbs: { nombre: 'Acta_3747.pdf', tam: '96.5 KB', fecha: '13/05/2026' },
    docs: [{ nro: 1, nombre: 'Requerimiento_Combustible_3747.pdf', tipo: 'pdf', tam: '96.5 KB' }],
    dir: 'JR. LIMA NRO. 100 CAJAMARCA - ENCAÑADA',
  },
  {
    id: 174, codigo: 'DDR-3746-MUNIENC',
    entidad: 'MUNICIPALIDAD DISTRITAL DE LA ENCAÑADA',
    nReq: 3746, objeto: 'Bien',
    desc: 'ADQUISICION DE COMBUSTIBLE DIESEL B5 PARA EJECUCION DE IOARR: MEJORAMIENTO DEL SERVICIO DE TRANSITABILIDAD VIAL INTERURBANA EN VIA VECINAL TRAMO (CHANTA BAJA - BAÑOS CHANTA)',
    fechaPub: '04/05/2026 12:18', fechaFormCons: '05/05/2026 - 11/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '04/05/2026', fin: '04/05/2026' },
      { etapa: 'Formulación de Consultas y Observaciones', inicio: '05/05/2026', fin: '11/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma', inicio: '12/05/2026', fin: '12/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '13/05/2026', fin: '13/05/2026' },
    ],
    pliAbs: null, actaAbs: { nombre: 'Acta_3746.pdf', tam: '76.6 KB', fecha: '13/05/2026' },
    docs: [{ nro: 1, nombre: 'Requerimiento_Combustible_3746.pdf', tipo: 'pdf', tam: '76.6 KB' }],
    dir: 'JR. LIMA NRO. 100 CAJAMARCA - ENCAÑADA',
  },
  {
    id: 175, codigo: 'DDR-3735-MUNIMALA',
    entidad: 'MUNICIPALIDAD DISTRITAL DE MALA',
    nReq: 3735, objeto: 'Bien',
    desc: 'ADQUISICIÓN DE LECHE PARA EL PERSONAL OBRERO DE LIMPIEZA PÚBLICA Y RECOJO DE RESIDUOS SÓLIDOS, ÁREAS VERDES, CEMENTERIO MUNICIPAL, FISCALIZADORES, SERENAZGO Y CANAL MUNICIPAL',
    fechaPub: '30/04/2026 13:41', fechaFormCons: '04/05/2026 - 08/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '30/04/2026', fin: '30/04/2026' },
      { etapa: 'Formulación de Consultas y Observaciones', inicio: '04/05/2026', fin: '08/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma', inicio: '09/05/2026', fin: '09/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '10/05/2026', fin: '10/05/2026' },
    ],
    pliAbs: null, actaAbs: { nombre: 'Acta_3735.pdf', tam: '586.5 KB', fecha: '11/05/2026' },
    docs: [{ nro: 1, nombre: 'Requerimiento_Leche_Mala.pdf', tipo: 'pdf', tam: '586.5 KB' }],
    dir: 'AV. 28 DE JULIO NRO. 100 LIMA - MALA',
  },
  {
    id: 176, codigo: 'DDR-3724-SANABAN',
    entidad: 'EMPRESA DE GENERACION ELECTRICA SAN GABAN S.A.',
    nReq: 3724, objeto: 'Bien',
    desc: 'ADQUISICION DE REPUESTOS PARA EL SISTEMA DE PUESTA A TIERRA DE LINEAS Y SUBESTACIONES',
    fechaPub: '30/04/2026 08:22', fechaFormCons: '04/05/2026 - 08/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '30/04/2026', fin: '30/04/2026' },
      { etapa: 'Formulación de Consultas y Observaciones', inicio: '04/05/2026', fin: '08/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma', inicio: '09/05/2026', fin: '09/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '10/05/2026', fin: '10/05/2026' },
    ],
    pliAbs: null, actaAbs: { nombre: 'Acta_3724.pdf', tam: '365.3 KB', fecha: '11/05/2026' },
    docs: [{ nro: 1, nombre: 'Requerimiento_Repuestos_SanGaban.pdf', tipo: 'pdf', tam: '365.3 KB' }],
    dir: 'JR. AYACUCHO NRO. 239 PUNO - SAN ANTONIO DE PUTINA',
  },
  {
    id: 177, codigo: 'DDR-3721-SANABAN',
    entidad: 'EMPRESA DE GENERACION ELECTRICA SAN GABAN S.A.',
    nReq: 3721, objeto: 'Servicio',
    desc: 'ADQUISICIÓN DE UN VEHÍCULO AÉREO PILOTADA A DISTANCIA (RPAS) CON ACCESORIOS PARA LA GERENCIA DE PROYECTOS',
    fechaPub: '29/04/2026 17:54', fechaFormCons: '30/04/2026 - 07/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '29/04/2026', fin: '29/04/2026' },
      { etapa: 'Formulación de Consultas y Observaciones', inicio: '30/04/2026', fin: '07/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma', inicio: '08/05/2026', fin: '08/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '09/05/2026', fin: '09/05/2026' },
    ],
    pliAbs: null, actaAbs: { nombre: 'Acta_3721.pdf', tam: '407.9 KB', fecha: '08/05/2026' },
    docs: [{ nro: 1, nombre: 'Requerimiento_RPAS_SanGaban.pdf', tipo: 'pdf', tam: '407.9 KB' }],
    dir: 'JR. AYACUCHO NRO. 239 PUNO - SAN ANTONIO DE PUTINA',
  },
  {
    id: 178, codigo: 'DDR-3718-GOREUCS',
    entidad: 'GOBIERNO REGIONAL DE UCAYALI SEDE CENTRAL',
    nReq: 3718, objeto: 'Bien',
    desc: 'ADQUISICION DE COMBUSTIBLE GASOLINA REGULAR, QUE PERMITA LA OPERATIVIDAD DE LAS EMBARCACIONES FLUVIALES (DESLIZADOR) PARA LA BRIGADA TECNICA E INSPECTOR DE TRABAJO DEL SERVICIO DE HIDROGRAFIA Y NAVEGACION',
    fechaPub: '29/04/2026 16:09', fechaFormCons: '30/04/2026 - 07/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '29/04/2026', fin: '29/04/2026' },
      { etapa: 'Formulación de Consultas y Observaciones', inicio: '30/04/2026', fin: '07/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma', inicio: '08/05/2026', fin: '08/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '09/05/2026', fin: '09/05/2026' },
    ],
    pliAbs: null, actaAbs: { nombre: 'Acta_3718.pdf', tam: '524.8 KB', fecha: '08/05/2026' },
    docs: [{ nro: 1, nombre: 'Requerimiento_Combustible_Ucayali.pdf', tipo: 'pdf', tam: '524.8 KB' }],
    dir: 'JR. TARAPACA NRO. 499 UCAYALI - CORONEL PORTILLO',
  },
  {
    id: 179, codigo: 'DDR-3711-GOREPIURA',
    entidad: 'GOBIERNO REGIONAL DE PIURA SEDE CENTRAL',
    nReq: 3711, objeto: 'Bien',
    desc: 'ADQUISICION DE TRACTOR AGRICOLA CON RASTRA A TODO COSTO, PARA EL PLAN DE NEGOCIO: AMPLIACION Y MEJORAMIENTO DE LA PRODUCCION DE MENESTRAS DE LA ASOCIACION AGROPECUARIA UNIDOS POR SIEMPRE LA UNION',
    fechaPub: '28/04/2026 17:34', fechaFormCons: '29/04/2026 - 06/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '28/04/2026', fin: '28/04/2026' },
      { etapa: 'Formulación de Consultas y Observaciones', inicio: '29/04/2026', fin: '06/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma', inicio: '07/05/2026', fin: '07/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '08/05/2026', fin: '08/05/2026' },
    ],
    pliAbs: { nombre: 'Pliego_Absolutorio_3711.pdf', tam: '15988.3 KB', fecha: '14/05/2026' },
    actaAbs: { nombre: 'Acta_3711.pdf', tam: '2733.7 KB', fecha: '20/05/2026' },
    docs: [{ nro: 1, nombre: 'Requerimiento_Tractor_Piura.pdf', tipo: 'pdf', tam: '2733.7 KB' }],
    dir: 'AV. CHULUCANAS NRO. S/N PIURA - PIURA',
  },
  {
    id: 180, codigo: 'DDR-3708-SUNASS',
    entidad: 'SUPERINTENDENCIA NACIONAL DE SERVICIOS DE SANEAMIENTO',
    nReq: 3708, objeto: 'Bien',
    desc: 'ADQUISICION DE ESTACIONES PARA MONITOREO REMOTO DE LA CALIDAD DE LA PRESTACION DEL SERVICIO DE AGUA EN PEQUEÑAS CIUDADES- CUI 2693824',
    fechaPub: '28/04/2026 15:47', fechaFormCons: '29/04/2026 - 06/05/2026',
    cronograma: [
      { etapa: 'Publicación del Requerimiento', inicio: '28/04/2026', fin: '28/04/2026' },
      { etapa: 'Formulación de Consultas y Observaciones', inicio: '29/04/2026', fin: '06/05/2026' },
      { etapa: 'Absolución preliminar y Cronograma', inicio: '07/05/2026', fin: '07/05/2026' },
      { etapa: 'Acto Público de Absolución Presencial', inicio: '08/05/2026', fin: '08/05/2026' },
    ],
    pliAbs: { nombre: 'Pliego_Absolutorio_3708.pdf', tam: '122.0 KB', fecha: '11/05/2026' },
    actaAbs: { nombre: 'Acta_3708.pdf', tam: '657.9 KB', fecha: '14/05/2026' },
    docs: [{ nro: 1, nombre: 'Requerimiento_Estaciones_Monitoreo.pdf', tipo: 'pdf', tam: '657.9 KB' }],
    dir: 'AV. LUIS MONTERO NRO. 201 PIURA',
  },
];

function objBgClass(_obj: string) {
  return 'bg-[#EDF0F4] text-[#5B6472] border border-[#DEE3EA]';
}

function TrazPills() {
  return (
    <div className="flex items-center gap-1 flex-wrap">
      <span className="px-2 py-0.5 rounded-[4px] text-[10px] font-bold border bg-[#FFF3EA] text-[#D75600] border-[#D75600]/30 font-['Roboto',sans-serif]">
        DDR
      </span>
      <span className="text-gray-400 text-[10px]">›</span>
      <span className="px-2 py-0.5 rounded-[4px] text-[10px] font-semibold border bg-[#F6F9FC] text-gray-400 border-gray-200 font-['Roboto',sans-serif]">
        Selección
      </span>
      <span className="text-gray-400 text-[10px]">›</span>
      <span className="px-2 py-0.5 rounded-[4px] text-[10px] font-semibold border bg-[#F6F9FC] text-gray-400 border-gray-200 font-['Roboto',sans-serif]">
        Contratos
      </span>
    </div>
  );
}

function PdfIcon({ fill = '#E53935', label = 'PDF' }: { fill?: string; label?: string }) {
  return (
    <svg width="24" height="28" viewBox="0 0 40 50" fill="none" className="cursor-pointer">
      <rect width="40" height="50" rx="4" fill={fill} />
      <text x="4" y="44" fill="#fff" fontSize="12" fontWeight="700" fontFamily="Arial,sans-serif">{label}</text>
    </svg>
  );
}

function DocCell({ doc }: { doc: DocFile | null }) {
  if (!doc) return <span className="text-gray-400 text-[11px]">—</span>;
  return (
    <div className="flex flex-col items-center gap-0.5">
      <PdfIcon />
      <span className="text-[9px] text-gray-400 text-center leading-tight">({doc.tam})<br />{doc.fecha}</span>
    </div>
  );
}

function ModalDDR({ record, onClose }: { record: DdrRecord; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-[10px] shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden font-['Roboto',sans-serif]">
        {/* Header — amber/orange matching the HTML */}
        <div className="flex items-center justify-between px-4 py-2.5" style={{ background: 'linear-gradient(90deg,#F59E0B,#FBBF24)' }}>
          <span className="text-[13px] font-bold text-white">Ficha de Difusión de Requerimiento</span>
          <button onClick={onClose} className="w-6 h-6 flex items-center justify-center bg-white/25 rounded-full text-white hover:bg-white/40 transition-colors">
            <X size={13} />
          </button>
        </div>

        {/* Trazabilidad strip */}
        <div className="flex items-center gap-2 px-4 py-1.5 bg-[#FFF8F0] border-b border-[#63c9c4]/12 flex-wrap">
          <span className="text-[9.5px] font-extrabold text-[#294269] uppercase tracking-wider">TRAZABILIDAD:</span>
          <TrazPills />
        </div>

        {/* Body — 2-col grid */}
        <div className="overflow-y-auto flex-1 p-4 grid grid-cols-2 gap-4">
          {/* LEFT */}
          <div className="flex flex-col gap-3">
            {/* Requerimiento */}
            <div className="border border-gray-200 rounded-[8px] overflow-hidden">
              <div className="bg-[#F59E0B] px-3 py-1.5">
                <span className="text-[12px] font-bold text-white">Requerimiento</span>
              </div>
              <div className="p-3">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Información general del requerimiento</p>
                <table className="w-full border-collapse text-[12px]">
                  <tbody>
                    <tr>
                      <td className="px-2 py-1 border border-gray-200 bg-[#F6F9FC] font-semibold text-gray-600 w-[45%]">Nro. del requerimiento</td>
                      <td className="px-2 py-1 border border-gray-200 font-extrabold text-[#294269] font-['Roboto',sans-serif]">{record.nReq}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-1 border border-gray-200 bg-[#F6F9FC] font-semibold text-gray-600">Objeto</td>
                      <td className="px-2 py-1 border border-gray-200">
                        <span className={`text-[10px] px-2 py-0.5 rounded-[4px] border font-semibold ${objBgClass(record.objeto)}`}>{record.objeto}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-2 py-1 border border-gray-200 bg-[#F6F9FC] font-semibold text-gray-600">Publicación del Requerimiento</td>
                      <td className="px-2 py-1 border border-gray-200 font-['Roboto',sans-serif] text-[11px]">{record.fechaPub}</td>
                    </tr>
                  </tbody>
                </table>

                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-3 mb-2">Información general de la entidad</p>
                <table className="w-full border-collapse text-[12px]">
                  <tbody>
                    <tr>
                      <td className="px-2 py-1 border border-gray-200 bg-[#F6F9FC] font-semibold text-gray-600 w-[45%]">Entidad convocante</td>
                      <td className="px-2 py-1 border border-gray-200 font-bold text-[#0056AC]">{record.entidad}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-1 border border-gray-200 bg-[#F6F9FC] font-semibold text-gray-600">Dirección legal</td>
                      <td className="px-2 py-1 border border-gray-200 text-[11px]">{record.dir}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-1 border border-gray-200 bg-[#F6F9FC] font-semibold text-gray-600">Página Web</td>
                      <td className="px-2 py-1 border border-gray-200 text-gray-400 text-[11px]">—</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-1 border border-gray-200 bg-[#F6F9FC] font-semibold text-gray-600">Teléfono</td>
                      <td className="px-2 py-1 border border-gray-200 text-gray-400 text-[11px]">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Listado de archivos */}
            <div className="border border-gray-200 rounded-[8px] overflow-hidden">
              <div className="bg-[#F59E0B] px-3 py-1.5">
                <span className="text-[12px] font-bold text-white">Listado de archivos del requerimiento</span>
              </div>
              <div className="grid grid-cols-[30px_1fr_55px_85px_45px] bg-[#F59E0B] px-2.5 py-1">
                {['Nro.', 'Nombre del Archivo', 'Tipo', 'Tamaño (KB)', 'Archivo'].map(h => (
                  <span key={h} className="text-[10px] font-bold text-white">{h}</span>
                ))}
              </div>
              <table className="w-full border-collapse">
                <tbody>
                  {record.docs.map(doc => (
                    <tr key={doc.nro}>
                      <td className="px-2 py-1.5 border-b border-gray-100 text-[12px] text-[#0056AC]">{doc.nro}</td>
                      <td className="px-2 py-1.5 border-b border-gray-100 text-[12px] text-[#0056AC] break-words">{doc.nombre}</td>
                      <td className="px-2 py-1.5 border-b border-gray-100 text-[11px] text-gray-500">{doc.tipo}</td>
                      <td className="px-2 py-1.5 border-b border-gray-100 text-[11px] text-gray-500">{doc.tam}</td>
                      <td className="px-2 py-1.5 border-b border-gray-100 text-center">
                        <PdfIcon fill={doc.tipo === 'pdf' ? '#E53935' : '#1565C0'} label={doc.tipo === 'pdf' ? 'PDF' : 'DOC'} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-2 py-1.5 bg-[#F6F9FC] text-center text-[10px] text-gray-400 border-t border-gray-200">
                (1 of 1) &nbsp; « ‹ 1 › »
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-3">
            {/* Cronograma */}
            <div className="border border-gray-200 rounded-[8px] overflow-hidden">
              <div className="bg-[#F59E0B] px-3 py-1.5">
                <span className="text-[12px] font-bold text-white">Cronograma</span>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="px-2 py-2 bg-[#F6F9FC] border-b-2 border-[#F59E0B] text-[11px] font-bold text-[#0056AC] text-left">Etapa</th>
                    <th className="px-2 py-2 bg-[#F6F9FC] border-b-2 border-[#F59E0B] text-[11px] font-bold text-[#0056AC] text-center whitespace-nowrap">Fecha Inicio</th>
                    <th className="px-2 py-2 bg-[#F6F9FC] border-b-2 border-[#F59E0B] text-[11px] font-bold text-[#0056AC] text-center whitespace-nowrap">Fecha Fin</th>
                  </tr>
                </thead>
                <tbody>
                  {record.cronograma.map((c, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F6F9FC]'}>
                      <td className="px-2 py-1.5 border-b border-gray-100 text-[12px]">{c.etapa}</td>
                      <td className="px-2 py-1.5 border-b border-gray-100 text-[11px] text-[#0056AC] font-semibold text-center whitespace-nowrap">{c.inicio}</td>
                      <td className="px-2 py-1.5 border-b border-gray-100 text-[11px] text-[#0056AC] font-semibold text-center whitespace-nowrap">{c.fin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Documentos del proceso */}
            <div className="border border-gray-200 rounded-[8px] overflow-hidden">
              <div className="bg-[#F59E0B] px-3 py-1.5">
                <span className="text-[12px] font-bold text-white">Documentos del proceso</span>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {[
                      'Cronograma Acto público absolución presencial',
                      'Pliego Absolutorio Preliminar',
                      'Acta de absolución / Acta de no formulación',
                      'Acciones',
                    ].map(h => (
                      <th key={h} className="px-2 py-2 bg-[#F6F9FC] border-b-2 border-[#F59E0B] text-[10px] font-bold text-[#0056AC] text-center">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 py-2 border-b border-gray-100 text-center">
                      <span className="text-gray-400 text-[11px]">—</span>
                    </td>
                    <td className="px-2 py-2 border-b border-gray-100 text-center">
                      <DocCell doc={record.pliAbs} />
                    </td>
                    <td className="px-2 py-2 border-b border-gray-100 text-center">
                      <DocCell doc={record.actaAbs} />
                    </td>
                    <td className="px-2 py-2 border-b border-gray-100 text-center">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0056AC" strokeWidth="2" className="cursor-pointer mx-auto">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M8 10h8M8 14h5" />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-gray-200 bg-[#F6F9FC]">
          <span className="text-[11px] text-gray-400">SEACE 4.0 · Ley N° 32069 · DDR N° {record.nReq}</span>
          <div className="flex gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-[6px] text-[12px] text-[#26292E] hover:bg-gray-50 transition-colors">
              <Download size={11} />
              Descargar ficha
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-[#294269] text-white rounded-[6px] text-[12px] font-semibold hover:bg-[#3F5578] transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── CARD GRID (3-col) ── */
function CardGrid({ record, onOpen }: { record: DdrRecord; onOpen: () => void }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[8px] flex flex-col overflow-hidden hover:shadow-md hover:border-gray-300 transition-all font-['Roboto',sans-serif]">
      <div className="p-3 flex-1 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <span className="text-[11px] font-bold text-[#0056AC] font-['Roboto',sans-serif] leading-tight">{record.codigo} · N° Req: {record.nReq}</span>
        </div>
        <p className="text-[11.5px] font-bold text-[#26292E] leading-snug">{record.entidad}</p>
        <p className="text-[11px] text-gray-500 uppercase leading-snug line-clamp-3">{record.desc}</p>
        <span className={`self-start text-[10px] px-2 py-0.5 rounded-[4px] border font-semibold ${objBgClass(record.objeto)}`}>{record.objeto}</span>
        <div className="flex gap-3 mt-auto pt-2 border-t border-gray-100">
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Publicación</span>
            <span className="text-[10px] font-medium text-[#26292E] font-['Roboto',sans-serif]">{record.fechaPub.split(' ')[0]}</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Cons/Obs</span>
            <span className="text-[10px] font-medium text-[#26292E]">{record.fechaFormCons}</span>
          </div>
        </div>
      </div>
      <div className="px-3 pb-3 flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">TRAZABILIDAD</span>
          <TrazPills />
        </div>
        <button
          onClick={onOpen}
          className="flex items-center gap-1 px-2.5 py-1 bg-[#63c9c4] text-white rounded-[5px] text-[11px] font-semibold hover:bg-[#3F5578] transition-colors whitespace-nowrap"
        >
          <Eye size={11} />
          Ver detalle
        </button>
      </div>
      <div className="h-[4px] bg-[#F59E0B]" />
    </div>
  );
}

/* ── CARD LISTA (horizontal) ── */
function CardLista({ record, onOpen }: { record: DdrRecord; onOpen: () => void }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[8px] overflow-hidden hover:shadow-md hover:border-gray-300 transition-all font-['Roboto',sans-serif]">
      <div className="flex items-stretch">
        <div className="flex-1 min-w-0 p-3 flex flex-col gap-1.5">
          <span className="text-[11px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">{record.codigo} · Req N° <strong>{record.nReq}</strong></span>
          <p className="text-[12px] font-bold text-[#26292E]">{record.entidad}</p>
          <p className="text-[11px] text-gray-500 uppercase line-clamp-2">{record.desc}</p>
          <div className="flex items-center gap-2 flex-wrap mt-1">
            <span className={`text-[10px] px-2 py-0.5 rounded-[4px] border font-semibold ${objBgClass(record.objeto)}`}>{record.objeto}</span>
            <span className="text-[10px] text-gray-400">Pub.: <strong className="text-[#26292E]">{record.fechaPub.split(' ')[0]}</strong></span>
            <span className="text-[10px] text-gray-400">Cons/Obs: <strong className="text-[#26292E]">{record.fechaFormCons}</strong></span>
          </div>
        </div>
        <div className="shrink-0 border-l border-gray-100 p-3 flex flex-col items-end justify-between min-w-[160px]">
          <div className="flex flex-col gap-0.5 items-end">
            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">TRAZABILIDAD</span>
            <TrazPills />
          </div>
          <button
            onClick={onOpen}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#63c9c4] text-white rounded-[5px] text-[11px] font-semibold hover:bg-[#3F5578] transition-colors mt-3"
          >
            <Eye size={11} />
            Ver detalle
          </button>
        </div>
      </div>
      <div className="h-[3px] bg-[#F59E0B]" />
    </div>
  );
}

/* ── CARD EXTENDIDA (2-col) ── */
function CardExt({ record, onOpen }: { record: DdrRecord; onOpen: () => void }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[8px] overflow-hidden hover:shadow-md hover:border-gray-300 transition-all font-['Roboto',sans-serif]">
      <div className="flex items-center justify-between px-3 py-2 bg-[#FFFBF0] border-b border-gray-200">
        <span className="text-[11px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">{record.codigo}</span>
        <span className={`text-[10px] px-2 py-0.5 rounded-[4px] border font-semibold ${objBgClass(record.objeto)}`}>{record.objeto}</span>
      </div>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-[12px] font-bold text-[#26292E]">{record.entidad}</p>
        <p className="text-[11px] text-gray-500 uppercase line-clamp-2">{record.desc}</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
          <div className="flex justify-between gap-2">
            <span className="text-[10px] text-gray-400">N° Requerimiento</span>
            <span className="text-[11px] font-bold text-[#26292E] font-['Roboto',sans-serif]">{record.nReq}</span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-[10px] text-gray-400">Publicación</span>
            <span className="text-[10px] font-medium font-['Roboto',sans-serif]">{record.fechaPub}</span>
          </div>
          <div className="flex justify-between gap-2 col-span-2">
            <span className="text-[10px] text-gray-400">Formulación Cons/Obs</span>
            <span className="text-[10px] font-medium">{record.fechaFormCons}</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex flex-col gap-0.5">
            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">TRAZABILIDAD</span>
            <TrazPills />
          </div>
          <button
            onClick={onOpen}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#63c9c4] text-white rounded-[5px] text-[11px] font-semibold hover:bg-[#3F5578] transition-colors"
          >
            <Eye size={11} />
            Ver detalle
          </button>
        </div>
      </div>
      <div className="h-[4px] bg-[#F59E0B]" />
    </div>
  );
}

/* ── MAIN COMPONENT ── */
type Vista = 'grid' | 'lista' | 'ext';
type SortKey = '' | 'req-desc' | 'req-asc' | 'ent-asc';

export function DreqResults() {
  const [vista, setVista] = useState<Vista>('grid');
  const [objFilter, setObjFilter] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('');
  const [modalRecord, setModalRecord] = useState<DdrRecord | null>(null);

  let filtered = DDR_DATA.filter(d => !objFilter || d.objeto === objFilter);
  if (sortKey === 'req-desc') filtered = [...filtered].sort((a, b) => b.nReq - a.nReq);
  else if (sortKey === 'req-asc') filtered = [...filtered].sort((a, b) => a.nReq - b.nReq);
  else if (sortKey === 'ent-asc') filtered = [...filtered].sort((a, b) => a.entidad.localeCompare(b.entidad));

  const CHIPS: { label: string; value: string }[] = [
    { label: 'Todos', value: '' },
    { label: 'Bien', value: 'Bien' },
    { label: 'Servicio', value: 'Servicio' },
    { label: 'Obra', value: 'Obra' },
    { label: 'Consultoría', value: 'Consultoría' },
  ];

  return (
    <div className="flex flex-col gap-3 font-['Roboto',sans-serif]">
      {modalRecord && <ModalDDR record={modalRecord} onClose={() => setModalRecord(null)} />}

      {/* Subtitle */}
      <p className="text-[13px] text-gray-500">
        Mostrando resultados de <strong className="text-[#26292E]">Difusión de Requerimientos (DDR)</strong> · Actuaciones Preparatorias
      </p>

      {/* Object chips */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[11px] font-bold text-gray-500 mr-1">Objeto:</span>
        {CHIPS.map(chip => (
          <button
            key={chip.value}
            onClick={() => setObjFilter(chip.value)}
            className={`px-3 py-1 rounded-full text-[11px] font-semibold border transition-colors ${
              objFilter === chip.value
                ? 'bg-[#F59E0B] text-white border-[#F59E0B]'
                : 'bg-white text-[#26292E] border-gray-300 hover:border-[#F59E0B] hover:text-[#D97706]'
            }`}
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-bold text-[#26292E]">Resultados de búsqueda</span>
          <span className="bg-[#F59E0B]/15 text-[#D97706] border border-[#F59E0B]/30 px-2 py-0.5 rounded-full text-[11px] font-bold">
            {filtered.length} encontrados
          </span>
        </div>
        <div className="flex items-center gap-2">
          {/* Vista switcher */}
          <div className="flex gap-0.5 bg-gray-100 border border-gray-200 rounded-[6px] p-0.5">
            {([
              { v: 'lista' as Vista, icon: <List size={14} />, title: 'Vista lista' },
              { v: 'grid' as Vista, icon: <LayoutGrid size={14} />, title: 'Vista grilla' },
              { v: 'ext' as Vista, icon: <Columns2 size={14} />, title: 'Vista extendida' },
            ] as const).map(({ v, icon, title }) => (
              <button
                key={v}
                onClick={() => setVista(v)}
                title={title}
                className={`p-1.5 rounded-[4px] transition-colors ${vista === v ? 'bg-white shadow-sm text-[#294269]' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-1 border border-gray-200 rounded-[6px] px-2 py-1 bg-white">
            <ArrowUpDown size={12} className="text-gray-400 shrink-0" />
            <select
              value={sortKey}
              onChange={e => setSortKey(e.target.value as SortKey)}
              className="text-[12px] text-[#26292E] outline-none bg-transparent"
            >
              <option value="">Sin ordenar</option>
              <option value="req-desc">Mayor N° Req.</option>
              <option value="req-asc">Menor N° Req.</option>
              <option value="ent-asc">Entidad A-Z</option>
            </select>
          </div>

          {/* Export */}
          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 rounded-[6px] text-[12px] text-[#26292E] hover:bg-gray-50 transition-colors">
            <Download size={12} />
            Exportar
          </button>
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-gray-400">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-30 mb-3">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <p className="text-[15px] font-bold text-gray-600">Sin resultados</p>
          <small className="text-[12px]">Ajuste los filtros o limpie la búsqueda</small>
        </div>
      ) : vista === 'grid' ? (
        <div className="grid grid-cols-3 gap-3">
          {filtered.map(d => <CardGrid key={d.id} record={d} onOpen={() => setModalRecord(d)} />)}
        </div>
      ) : vista === 'lista' ? (
        <div className="flex flex-col gap-2">
          {filtered.map(d => <CardLista key={d.id} record={d} onOpen={() => setModalRecord(d)} />)}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {filtered.map(d => <CardExt key={d.id} record={d} onOpen={() => setModalRecord(d)} />)}
        </div>
      )}
    </div>
  );
}
