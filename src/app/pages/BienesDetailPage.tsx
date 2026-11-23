import { useState } from 'react';
import {
  ArrowLeft, LayoutList, LayoutGrid, GitBranch, ChevronDown, ChevronUp,
  Building2, FileText, Users, Shield, Calendar, Package, X, Download,
  Banknote, Clock, CheckCircle, BarChart2, Eye, AlertTriangle
} from 'lucide-react';
import type { Page } from '../App';

interface BienesDetailPageProps {
  id: string;
  navigate: (page: Page) => void;
  from?: Page;
}

// ─── Mock data ───────────────────────────────────────────────────────────────

const FASES = ['Actuaciones Preparatorias', 'Selección', 'Contratos'];

const PROCESOS = [
  {
    codigo: 'LP-SM-2-2026-MDC-1',
    objeto: 'Adquisición de equipos de protección personal técnico y administrativo de Electro Oriente S.A. (Lote 1)',
    monto: 587700,
    estado: 'contratado' as const,
    estadoLabel: 'Contratado',
    faseActualIdx: 2,
    fasesCompletas: [0, 1, 2],
    proveedor: 'AGROINDUSTRIAS DEL NORTE S.A.C.',
    comite: {
      tipoConductor: 'Comité',
      tipoDocumento: 'RESOLUCIÓN N° 018-2026-MDM-GM',
      fechaEmision: '18/03/2026',
      integrantes: [
        { nombre: 'JORGE LUIS RAMOS TORRES', tipo: 'Titular Presidente' },
        { nombre: 'MARÍA ELENA VÁSQUEZ DÍAZ', tipo: 'Titular Miembro 1' },
        { nombre: 'CARLOS ALBERTO NÚÑEZ SILVA', tipo: 'Titular Miembro 2' },
        { nombre: 'ROSA AMELIA CASTRO LEÓN', tipo: 'Suplente Presidente' },
        { nombre: 'LUIS FERNANDO ORTIZ MEJÍA', tipo: 'Suplente Miembro 1' },
        { nombre: 'ANA PATRICIA SALAZAR RUIZ', tipo: 'Suplente Miembro 2' },
      ],
    },
    anuncio: {
      n: '01',
      fechaPublicacion: '24/06/2026 17:00',
      entidad: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA',
      tipoSeleccion: 'Licitación Pública',
      objetoContratacion: 'Bien',
      descripcionObjeto: 'Adquisición de equipos de protección personal — Lote 1',
      alcance: 'Adquisición y transporte de insumos hasta los almacenes municipales de Cortegana.',
      cantidad: '45,800 kg',
      plazoDias: 120,
      fechaConvocatoria: '10/07/2026',
    },
    actuaciones: {
      entidad: {
        nombre: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA',
        ruc: '20214061474',
        direccion: 'JR. GRAU N° 100 - CORTEGANA, CAJAMARCA',
        web: 'www.municortegana.gob.pe',
        telefono: '(076) 555-0101',
      },
      procedimiento: {
        objeto: 'Bien',
        descripcion: 'Adquisición de equipos de protección personal — Lote 1.',
        vrVeImporte: 'S/ 587,700.00',
        derechoPart: 'GRATUITO',
        fechaPublicacion: '24/06/2026 17:00',
        normativa: 'Ley N° 32069 - Ley General de Contrataciones Públicas',
      },
      entidadContratante: { ruc: '20214061474', nombre: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA' },
      acuerdosComerciales: [
        'Acuerdo de Alianza del Pacífico Perú-México',
        'Tratado de Libre Comercio Perú-Corea',
        'Acuerdo de Libre Comercio Perú-Costa Rica',
      ],
    },
    seleccion: {
      nomenclatura: 'LP-SM-2-2026-MDC-1',
      nConvocatoria: '1',
      tipoCompra: 'Por la Entidad',
      normativa: 'Ley N° 32069 - Ley General de Contrataciones Públicas',
      versionSEACE: '4',
      cronograma: [
        { etapa: 'Convocatoria', inicio: '07/04/2026', fin: '07/04/2026' },
        { etapa: 'Registro de participantes (Electrónica)', inicio: '08/04/2026 00:01', fin: '12/05/2026 23:59' },
        { etapa: 'Formulación de consultas y observaciones (Electrónica)', inicio: '08/04/2026 00:01', fin: '16/04/2026 23:59' },
        { etapa: 'Absolución de consultas y observaciones (Electrónica)', inicio: '27/04/2026', fin: '27/04/2026' },
        { etapa: 'Integración de las Bases — A TRAVÉS DEL SEACE', inicio: '27/04/2026', fin: '27/04/2026' },
        { etapa: 'Presentación de propuestas (Electrónica)', inicio: '13/05/2026 00:01', fin: '13/05/2026 23:59' },
        { etapa: 'Calificación y Evaluación de propuestas', inicio: '30/06/2026', fin: '30/06/2026' },
        { etapa: 'Otorgamiento de la Buena Pro — A TRAVÉS DEL SEACE', inicio: '30/06/2026 08:30', fin: '30/06/2026' },
      ],
      items: [
        {
          n: 1,
          descripcion: 'HOJUELAS PRECOCIDAS MULTI-CEREAL (AVENA, QUINUA, KIWICHA)',
          cubso: '5000260010',
          cantidad: '22,900 kg — Unidad',
          vrve: 'S/ 206,250.00',
          mype: 'S/N',
          paquete: 'Sí',
          estado: 'Contratado',
          postores: [{ postor: 'AGROINDUSTRIAS DEL NORTE S.A.C.', mype: 'No', selva: 'No', bonif: '0%', cantAdj: '22,900 kg', montoAdj: 'S/ 198,500.00' }],
        },
        {
          n: 2,
          descripcion: 'LECHE ENTERA EN POLVO Y AZÚCAR PARA PROGRAMA ALIMENTARIO',
          cubso: '5000260011',
          cantidad: '22,900 kg — Unidad',
          vrve: 'S/ 206,250.00',
          mype: 'S/N',
          paquete: 'Sí',
          estado: 'Desierto',
          postores: [],
        },
      ],
      documentos: [
        { n: 1, etapa: 'Convocatoria', documento: 'Bases Administrativas', archivo: 'Bases_Admin.pdf', tamanio: '2897 KB', fecha: '07/04/2026 17:26' },
        { n: 2, etapa: 'Absolución de consultas y observaciones', documento: 'Pliego de absolución', archivo: 'Absolucion.pdf', tamanio: '1 KB', fecha: '27/04/2026 18:25' },
        { n: 3, etapa: 'Integración de las Bases', documento: 'Bases Integradas', archivo: 'Bases_Integradas.pdf', tamanio: '2903 KB', fecha: '27/04/2026 18:25' },
        { n: 4, etapa: 'Presentación de propuestas', documento: 'Documentos de Presentación de Propuestas', archivo: 'DPP.pdf', tamanio: '23 KB', fecha: '27/05/2026 16:51' },
        { n: 5, etapa: 'Otorgamiento de la Buena Pro', documento: 'Acta de otorgamiento de Buena Pro', archivo: 'Acta_BuenaPro.pdf', tamanio: '1180 KB', fecha: '30/06/2026 08:30' },
      ],
      ofertas: [
        {
          ruc: '20527909059',
          nombre: 'AGROINDUSTRIAS DEL NORTE S.A.C.',
          fecha: '13/05/2026',
          hora: '09:15:22',
          usuario: 'PVELASQUEZ',
          esConsorcio: false,
          documentos: [
            { nombre: 'ANEXO_N_01.pdf', tipo: 'pdf', tamano: '145 KB' },
            { nombre: 'ANEXO_N_02.pdf', tipo: 'pdf', tamano: '98 KB' },
            { nombre: 'ANEXO_N_03.pdf', tipo: 'pdf', tamano: '210 KB' },
            { nombre: 'OFERTA_TECNICA.pdf', tipo: 'pdf', tamano: '1450 KB' },
            { nombre: 'OFERTA_ECONOMICA.pdf', tipo: 'pdf', tamano: '115 KB' },
          ],
          items: [
            {
              descripcion: 'HOJUELAS PRECOCIDAS MULTI-CEREAL (AVENA, QUINUA, KIWICHA)',
              cantSolicitada: 22900,
              vrve: 'S/ 206,250.00',
              cantOfertada: 22900,
              montoOfertado: 'S/ 198,500.00',
              leySelva: 'No',
            },
          ],
        },
        {
          ruc: '20601234567',
          nombre: 'COMERCIALIZADORA ANDINA DE ALIMENTOS S.A.C.',
          fecha: '13/05/2026',
          hora: '11:42:08',
          usuario: 'JRAMIREZ',
          esConsorcio: false,
          documentos: [
            { nombre: 'ANEXO_01_CAA.pdf', tipo: 'pdf', tamano: '150 KB' },
            { nombre: 'OFERTA_COMPLETA_CAA.pdf', tipo: 'pdf', tamano: '2100 KB' },
          ],
          items: [
            {
              descripcion: 'HOJUELAS PRECOCIDAS MULTI-CEREAL (AVENA, QUINUA, KIWICHA)',
              cantSolicitada: 22900,
              vrve: 'S/ 206,250.00',
              cantOfertada: 22900,
              montoOfertado: 'S/ 204,800.00',
              leySelva: 'No',
            },
          ],
        },
      ],
    },
    contrato: {
      nroContrato: 'CONTRATO N°05-2026-MDM-Q/GM',
      montoContratado: 198500,
      contratista: 'AGROINDUSTRIAS DEL NORTE S.A.C.',
      rucContratista: '20527909059',
      fechaSuscripcion: '30/03/2026',
      fechaInicio: '31/03/2026',
      fechaFin: '31/07/2026',
      lugar: 'CAJAMARCA',
      avanceFinanciero: { total: 198500, pagado: 119100, pendiente: 79400, pct: 60 },
      avanceFisico: { pct: 55, completadas: 3, total: 5 },
      garantia: {
        clase: 'Garantía de fiel cumplimiento',
        tipo: 'Carta Fianza',
        numero: '0011-0083-9800004616-33',
        monto: 17865,
        emisor: 'BANCO BBVA PERÚ',
        fechaEmision: '18/03/2026',
        fechaVencimiento: '16/06/2026',
        condicion: 'No vigente',
      },
    },
  },
  {
    codigo: 'LP-SM-2-2026-MDC-2',
    objeto: 'Adquisición de equipos de protección personal técnico y administrativo de Electro Oriente S.A. (Lote 2)',
    monto: 0,
    estado: 'publicado' as const,
    estadoLabel: 'Publicado',
    faseActualIdx: 1,
    fasesCompletas: [0],
    proveedor: null as string | null,
    comite: {
      tipoConductor: 'Comité',
      tipoDocumento: 'RESOLUCIÓN N° 018-2026-MDM-GM',
      fechaEmision: '18/03/2026',
      integrantes: [
        { nombre: 'JORGE LUIS RAMOS TORRES', tipo: 'Titular Presidente' },
        { nombre: 'MARÍA ELENA VÁSQUEZ DÍAZ', tipo: 'Titular Miembro 1' },
        { nombre: 'CARLOS ALBERTO NÚÑEZ SILVA', tipo: 'Titular Miembro 2' },
        { nombre: 'ROSA AMELIA CASTRO LEÓN', tipo: 'Suplente Presidente' },
        { nombre: 'LUIS FERNANDO ORTIZ MEJÍA', tipo: 'Suplente Miembro 1' },
        { nombre: 'ANA PATRICIA SALAZAR RUIZ', tipo: 'Suplente Miembro 2' },
      ],
    },
    anuncio: {
      n: '32',
      fechaPublicacion: '24/06/2026 17:05',
      entidad: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA',
      tipoSeleccion: 'Licitación Pública',
      objetoContratacion: 'Bien',
      descripcionObjeto: 'Adquisición de equipos de protección personal — Lote 2',
      alcance: 'Adquisición y transporte de insumos hasta los almacenes municipales de Cortegana.',
      cantidad: '41,200 kg',
      plazoDias: 120,
      fechaConvocatoria: '11/07/2026',
    },
    actuaciones: {
      entidad: {
        nombre: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA',
        ruc: '20214061474',
        direccion: 'JR. GRAU N° 100 - CORTEGANA, CAJAMARCA',
        web: 'www.municortegana.gob.pe',
        telefono: '(076) 555-0101',
      },
      procedimiento: {
        objeto: 'Bien',
        descripcion: 'Adquisición de equipos de protección personal — Lote 2.',
        vrVeImporte: 'S/ 0.00',
        derechoPart: 'GRATUITO',
        fechaPublicacion: '24/06/2026 17:05',
        normativa: 'Ley N° 32069 - Ley General de Contrataciones Públicas',
      },
      entidadContratante: { ruc: '20214061474', nombre: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA' },
      acuerdosComerciales: [
        'Acuerdo de Alianza del Pacífico Perú-México',
        'Tratado de Libre Comercio Perú-Corea',
        'Acuerdo de Libre Comercio Perú-Costa Rica',
      ],
    },
    seleccion: {
      nomenclatura: 'LP-SM-2-2026-MDC-2',
      nConvocatoria: '2',
      tipoCompra: 'Por la Entidad',
      normativa: 'Ley N° 32069 - Ley General de Contrataciones Públicas',
      versionSEACE: '4',
      cronograma: [
        { etapa: 'Convocatoria — A TRAVÉS DEL SEACE', inicio: '11/07/2026', fin: '11/07/2026' },
        { etapa: 'Registro de participantes (Electrónica)', inicio: '12/07/2026 00:01', fin: '25/07/2026 23:59' },
        { etapa: 'Formulación de consultas y observaciones (Electrónica)', inicio: '12/07/2026 00:01', fin: '18/07/2026 23:59' },
        { etapa: 'Absolución de consultas y observaciones — A TRAVÉS DEL SEACE', inicio: '22/07/2026', fin: '22/07/2026' },
        { etapa: 'Integración de las Bases — A TRAVÉS DEL SEACE', inicio: '25/07/2026', fin: '25/07/2026' },
        { etapa: 'Presentación de propuestas (Electrónica)', inicio: '05/08/2026 00:01', fin: '05/08/2026 23:59' },
        { etapa: 'Calificación y Evaluación de propuestas', inicio: 'En evaluación', fin: '—' },
      ],
      items: [
        {
          n: 1,
          descripcion: 'HOJUELAS PRECOCIDAS MULTI-CEREAL (AVENA, QUINUA, KIWICHA) — SIERRA CENTRO',
          cubso: '5000260010',
          cantidad: '41,200 kg — Unidad',
          vrve: 'S/ 389,200.00',
          mype: 'S/N',
          paquete: 'No',
          estado: 'Publicado',
          postores: [],
        },
      ],
      documentos: [
        { n: 1, etapa: 'Convocatoria', documento: 'Bases Administrativas', archivo: 'Bases_Admin_L2.pdf', tamanio: '2754 KB', fecha: '11/07/2026 09:00' },
        { n: 2, etapa: 'Absolución de consultas y observaciones', documento: 'Pliego de absolución', archivo: 'Absolucion_L2.pdf', tamanio: '1 KB', fecha: '22/07/2026 17:30' },
        { n: 3, etapa: 'Integración de las Bases', documento: 'Bases Integradas', archivo: 'Bases_Integradas_L2.pdf', tamanio: '2811 KB', fecha: '25/07/2026 16:00' },
        { n: 4, etapa: 'Presentación de propuestas', documento: 'Documentos de Presentación de Propuestas', archivo: 'DPP_L2.pdf', tamanio: '18 KB', fecha: '05/08/2026 23:59' },
      ],
      ofertas: [],
    },
    contrato: null as null | {
      nroContrato: string; montoContratado: number; contratista: string; rucContratista: string;
      fechaSuscripcion: string; fechaInicio: string; fechaFin: string; lugar: string;
      avanceFinanciero: { total: number; pagado: number; pendiente: number; pct: number };
      avanceFisico: { pct: number; completadas: number; total: number };
      garantia: { clase: string; tipo: string; numero: string; monto: number; emisor: string; fechaEmision: string; fechaVencimiento: string; condicion: string };
    },
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmtMoneda(n: number) {
  return 'S/ ' + n.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function estadoBadge(estado: string, label: string) {
  const cls: Record<string, string> = {
    contratado: 'bg-white text-[#126B49] border-[#126B49]',
    publicado:  'bg-white text-[#0056AC] border-[#0056AC]',
    desierto:   'bg-white text-[#6a7b96] border-[#6a7b96]',
    convocatoria: 'bg-white text-[#D75600] border-[#D75600]',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold border rounded-[4px] font-['Roboto',sans-serif] shrink-0 ${cls[estado] || 'bg-white text-gray-600 border-gray-400'}`}>
      {label}
    </span>
  );
}

function MiniFases({ proceso }: { proceso: typeof PROCESOS[0] }) {
  return (
    <div className="flex gap-1 mt-2">
      {FASES.map((_, i) => {
        const done = proceso.fasesCompletas.includes(i);
        const current = i === proceso.faseActualIdx && !done;
        return (
          <div
            key={i}
            className={`h-[4px] flex-1 rounded-full transition-colors ${done ? 'bg-[#126B49]' : current ? 'bg-[#D75600]' : 'bg-[#DEE3EA]'}`}
          />
        );
      })}
    </div>
  );
}

// ─── Accordion ───────────────────────────────────────────────────────────────

function Accordion({ id, title, children, openSet, toggle }: {
  id: string; title: React.ReactNode; children: React.ReactNode;
  openSet: Set<string>; toggle: (id: string) => void;
}) {
  const open = openSet.has(id);
  return (
    <div className="border border-[#DEE3EA] rounded-[6px] overflow-hidden mb-2">
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-[#F6F9FC] hover:bg-[#EEF3FA] transition-colors text-left"
        onClick={() => toggle(id)}
      >
        <span className="flex items-center gap-2 text-[12.5px] font-semibold text-[#294269] font-['Roboto',sans-serif]">
          {title}
        </span>
        {open ? <ChevronUp size={15} className="text-[#294269] shrink-0" /> : <ChevronDown size={15} className="text-gray-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-4 py-3 bg-white text-[12px] font-['Roboto',sans-serif] text-[#26292E]">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Info field ──────────────────────────────────────────────────────────────

function Field({ label, value, mono, full }: { label: string; value: string; mono?: boolean; full?: boolean }) {
  return (
    <div className={`flex flex-col gap-0.5 ${full ? 'col-span-2' : ''}`}>
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</span>
      <span className={`text-[12px] text-[#26292E] ${mono ? "font-['Roboto',sans-serif]" : ''}`}>{value}</span>
    </div>
  );
}

// ─── Phase content ───────────────────────────────────────────────────────────

function ActuacionesPreparatorias({ proceso, openSet, toggle }: {
  proceso: typeof PROCESOS[0]; openSet: Set<string>; toggle: (id: string) => void;
}) {
  const a = proceso.anuncio;
  const ac = proceso.actuaciones;
  const en = ac.entidad;
  const pr = ac.procedimiento;
  const uid = 'ap-' + proceso.codigo;

  return (
    <div className="space-y-1">
      <Accordion id={uid + '-ent'} title={<><Building2 size={13} />Información general de la entidad</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Entidad convocante" value={en.nombre} full />
          <Field label="RUC" value={en.ruc} mono />
          <Field label="Teléfono" value={en.telefono} />
          <Field label="Dirección legal" value={en.direccion} full />
          <Field label="Página web" value={en.web} />
        </div>
      </Accordion>

      <Accordion id={uid + '-proc'} title={<><FileText size={13} />Información general del procedimiento</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Objeto de contratación" value={pr.objeto} />
          <Field label="Derecho de participación" value={pr.derechoPart} />
          <Field label="Cuantía" value={pr.vrVeImporte} mono />
          <Field label="Fecha de publicación" value={pr.fechaPublicacion} />
          <Field label="Descripción del objeto" value={pr.descripcion} full />
          <Field label="Normativa aplicable" value={pr.normativa} full />
        </div>
      </Accordion>

      <Accordion id={uid + '-ec'} title={<><Users size={13} />Entidad contratante</>} openSet={openSet} toggle={toggle}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[11.5px]">
            <thead>
              <tr>
                <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px] rounded-tl-[4px] w-36">N° RUC</th>
                <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px] rounded-tr-[4px]">Entidad Contratante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 font-['Roboto',sans-serif] text-[11.5px] border-b border-[#DEE3EA]">{ac.entidadContratante.ruc}</td>
                <td className="px-3 py-2 border-b border-[#DEE3EA]">{ac.entidadContratante.nombre}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Accordion>

      <Accordion id={uid + '-ac'} title={<><Shield size={13} />Acuerdos comerciales</>} openSet={openSet} toggle={toggle}>
        <p className="text-[11.5px] text-gray-500 mb-3">El procedimiento se encuentra bajo la cobertura del o de los siguientes acuerdos comerciales:</p>
        <table className="w-full border-collapse text-[11.5px]">
          <thead>
            <tr>
              <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px] rounded-tl-[4px] w-10">Nro.</th>
              <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px] rounded-tr-[4px]">Descripción del Acuerdo Comercial</th>
            </tr>
          </thead>
          <tbody>
            {ac.acuerdosComerciales.map((ac2, i) => (
              <tr key={i} className="border-b border-[#DEE3EA]">
                <td className="px-3 py-2 text-gray-500">{i + 1}</td>
                <td className="px-3 py-2">{ac2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Accordion>

      <Accordion id={uid + '-anuncio'} title={<><Calendar size={13} />Anuncio de contratación futura</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="N°" value={a.n} />
          <Field label="Tipo de selección" value={a.tipoSeleccion} />
          <Field label="Nombre de la entidad" value={a.entidad} full />
          <Field label="Fecha de publicación" value={a.fechaPublicacion} />
          <Field label="Objeto de la contratación" value={a.objetoContratacion} />
          <Field label="Cantidad" value={a.cantidad} />
          <Field label="Plazo en días" value={String(a.plazoDias)} />
          <Field label="Fecha aprox. de convocatoria" value={a.fechaConvocatoria} />
          <Field label="Descripción del objeto" value={a.descripcionObjeto} full />
          <Field label="Alcance" value={a.alcance} full />
        </div>
      </Accordion>

      <Accordion id={uid + '-comite'} title={<><Users size={13} />Conductor del Tipo de Selección</>} openSet={openSet} toggle={toggle}>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <Field label="Tipo" value={proceso.comite.tipoConductor} />
            <Field label="Tipo de documento" value={proceso.comite.tipoDocumento} full />
            <Field label="Fecha de emisión" value={proceso.comite.fechaEmision} />
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Lista de Integrantes</p>
          <table className="w-full border-collapse text-[11.5px]">
            <thead>
              <tr>
                <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px] w-12">Nro.</th>
                <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px]">Apellidos y Nombres</th>
                <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px] w-44">Tipo de Integrante</th>
              </tr>
            </thead>
            <tbody>
              {proceso.comite.integrantes.map((m, i) => (
                <tr key={i} className="border-b border-[#DEE3EA]">
                  <td className="px-3 py-2 text-gray-500">{i + 1}</td>
                  <td className="px-3 py-2 font-medium">{m.nombre}</td>
                  <td className="px-3 py-2 text-gray-600">{m.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Accordion>



    </div>
  );
}

// Datos de versiones anteriores por etapa (para el modal de historial)
const HISTORIAL_VERSION_ANTERIOR: Record<string, { documento: string; archivo: string; tamanio: string; fecha: string; motivo: string }> = {
  'Convocatoria': { documento: 'Bases Administrativas (versión preliminar)', archivo: 'Bases_Admin_v1.pdf', tamanio: '2850 KB', fecha: '05/04/2026 09:10', motivo: 'Versión preliminar publicada por el comité de selección' },
  'Absolución de consultas y observaciones': { documento: 'Pliego de absolución de consultas y observaciones (primera ronda)', archivo: 'Absolucion_v1.pdf', tamanio: '1 KB', fecha: '24/04/2026 16:40', motivo: 'Primera ronda de absolución' },
  'Integración de las Bases': { documento: 'Bases Integradas (versión preliminar)', archivo: 'Bases_Integradas_v1.pdf', tamanio: '2870 KB', fecha: '26/04/2026 11:05', motivo: 'Versión preliminar, pendiente de visto bueno del titular' },
};

const ETAPAS_CON_HISTORIAL = Object.keys(HISTORIAL_VERSION_ANTERIOR);

interface HistorialDoc {
  etapa: string;
  documento: string;
  archivo: string;
  tamanio: string;
  fecha: string;
}


interface OfertaDoc {
  nombre: string;
  tipo: string;
  tamano: string;
}

interface OfertaItem {
  descripcion: string;
  cantSolicitada: number;
  vrve: string;
  cantOfertada: number;
  montoOfertado: string;
  docEspecificos: string;
  leySelva: string;
}

function OfertaModal({ oferta, onClose }: { oferta: any; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-[8px] shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col font-['Roboto',sans-serif]">
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#294269] shrink-0">
          <h3 className="text-[14px] font-bold text-white">Listado de presentación ofertas del procedimiento</h3>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            aria-label="Cerrar"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-5 overflow-y-auto space-y-5 bg-white">
          {oferta.esConsorcio && oferta.integrantes && (
            <div className="border border-[#DEE3EA] rounded-[6px] relative pt-2">
              <div className="absolute top-[-11px] left-2.5 bg-white border border-[#DEE3EA] rounded-[5px] px-2.5 py-0.5 text-[11px] font-bold text-[#0056AC]">
                Integrantes del consorcio
              </div>
              <div className="p-3.5 pt-4 pb-2.5 overflow-x-auto">
                <table className="w-full border-collapse text-[11.5px]">
                  <thead>
                    <tr>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[40px]">Nro.</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Tipo de Proveedor</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">RUC/Código</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Nombre o Razón Social</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Registro RNP</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">% Participación</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">País Origen</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">MYPE</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Empresa integrada por discapacitados</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Estado de Consentimiento</th>
                      <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] whitespace-nowrap">Fecha y Hora de Consentimiento</th>
                    </tr>
                  </thead>
                  <tbody>
                    {oferta.integrantes.map((m: any, i: number) => (
                      <tr key={i} className="hover:bg-[#F6F9FC]">
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-600">{i + 1}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{m.tipo}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-[#0056AC] font-['Roboto',sans-serif] font-bold">{m.ruc}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] font-semibold text-gray-800">{m.nombre}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{m.rnp}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{m.participacion}%</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{m.pais}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{m.mype || '—'}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{m.discapacitados || '—'}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{m.estadoConsentimiento}</td>
                        <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700 whitespace-nowrap">{m.fechaConsentimiento}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="border border-[#DEE3EA] rounded-[6px] relative pt-2">
            <div className="absolute top-[-11px] left-2.5 bg-white border border-[#DEE3EA] rounded-[5px] px-2.5 py-0.5 text-[11px] font-bold text-[#0056AC]">
              Listado de documentos
            </div>
            <div className="p-3.5 pt-4 pb-2.5 overflow-x-auto">
              <table className="w-full border-collapse text-[11.5px]">
                <thead>
                  <tr>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[40px]">Nro.</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Nombre Archivo</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[120px]">Tipo Archivo</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[120px]">Tamaño Archivo</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[100px]">Documento</th>
                  </tr>
                </thead>
                <tbody>
                  {(oferta.documentos || []).map((d: any, i: number) => (
                    <tr key={i} className="hover:bg-[#F6F9FC]">
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-600">{i + 1}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] font-medium text-gray-800">{d.nombre}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{d.tipo}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{d.tamano}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">
                        <button className="text-[11.5px] font-bold text-[#0056AC] hover:underline">Descargar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="border border-[#DEE3EA] rounded-[6px] relative pt-2">
            <div className="absolute top-[-11px] left-2.5 bg-white border border-[#DEE3EA] rounded-[5px] px-2.5 py-0.5 text-[11px] font-bold text-[#0056AC]">
              Listado de ítems
            </div>
            <div className="p-3.5 pt-4 pb-2.5 overflow-x-auto">
              <table className="w-full border-collapse text-[11.5px]">
                <thead>
                  <tr>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA] w-[40px]">Nro.</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Descripción del ítem</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Cantidad solicitada</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">VR/VE/Cuantía de la contratación</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Cantidad ofertada</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Monto ofertado</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Ley de promoción de la Selva</th>
                    <th className="bg-[#F6F9FC] text-gray-500 font-bold px-2.5 py-1.5 text-left border-b-[1.5px] border-[#DEE3EA]">Archivo con detalle de monto ofertado</th>
                  </tr>
                </thead>
                <tbody>
                  {(oferta.items || []).map((it: any, i: number) => (
                    <tr key={i} className="hover:bg-[#F6F9FC]">
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-600">{i + 1}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] font-medium text-gray-800">{it.descripcion}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{it.cantSolicitada}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700 font-['Roboto',sans-serif]">{it.vrve}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{it.cantOfertada}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700 font-['Roboto',sans-serif]">{it.montoOfertado}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4] text-gray-700">{it.leySelva}</td>
                      <td className="px-2.5 py-1.5 border-b border-[#F0F2F4]">
                        <button className="text-[11.5px] font-bold text-[#0056AC] hover:underline">Descargar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HistorialModal({ doc, onClose }: { doc: HistorialDoc; onClose: () => void }) {
  const prev = HISTORIAL_VERSION_ANTERIOR[doc.etapa];
  const vigenteLabel = prev ? 'v2 (vigente)' : 'v1 (vigente)';

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-[8px] shadow-2xl w-full max-w-2xl overflow-hidden font-['Roboto',sans-serif]">
        {/* Red header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#294269]">
          <h3 className="text-[14px] font-bold text-white">Historial de documentos — {doc.etapa}</h3>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            aria-label="Cerrar"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-[12.5px] text-[#26292E] mb-4">
            Etapa: <strong>{doc.etapa}</strong>
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-[11.5px]">
              <thead>
                <tr>
                  {['Versión', 'Documento', 'Archivo', 'Fecha y hora pub.', 'Acciones'].map((h, i, arr) => (
                    <th key={h} className={`bg-[#294269] text-white px-3 py-2 text-left text-[11px] ${i === 0 ? 'rounded-tl-[4px] w-28' : ''} ${i === arr.length - 1 ? 'rounded-tr-[4px] w-24' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {prev && (
                  <tr className="bg-[#F6F9FC] border-b border-[#DEE3EA]">
                    <td className="px-3 py-2 font-['Roboto',sans-serif] text-gray-400 text-[11px]">v1</td>
                    <td className="px-3 py-2 text-gray-500">{prev.documento}</td>
                    <td className="px-3 py-2 text-gray-400 text-[11px]">{prev.archivo} ({prev.tamanio})</td>
                    <td className="px-3 py-2 text-gray-400 whitespace-nowrap">{prev.fecha}</td>
                    <td className="px-3 py-2">
                      <button className="text-[11px] text-[#294269] font-bold hover:underline">Descargar</button>
                    </td>
                  </tr>
                )}
                <tr className="border-b border-[#DEE3EA]">
                  <td className="px-3 py-2 font-['Roboto',sans-serif] text-[11px] text-gray-600">{vigenteLabel}</td>
                  <td className="px-3 py-2 font-medium">{doc.documento}</td>
                  <td className="px-3 py-2 text-gray-500 text-[11px]">{doc.archivo} ({doc.tamanio})</td>
                  <td className="px-3 py-2 text-gray-500 whitespace-nowrap">{doc.fecha}</td>
                  <td className="px-3 py-2">
                    <button className="text-[11px] text-[#294269] font-bold hover:underline">Descargar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {prev && (
            <p className="text-[11.5px] text-gray-500">{prev.motivo}.</p>
          )}
          {!prev && (
            <p className="text-[11.5px] text-gray-500">No se registran versiones anteriores para esta etapa.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Seleccion({ proceso, openSet, toggle, setOfertaModal }: {
  proceso: typeof PROCESOS[0]; openSet: Set<string>; toggle: (id: string) => void; setOfertaModal: (o: any) => void;
}) {
  const s = proceso.seleccion;
  const uid = 'sel-' + proceso.codigo;
  const tieneOfertas = s.ofertas && s.ofertas.length > 0;
  const [historialDoc, setHistorialDoc] = useState<HistorialDoc | null>(null);

  return (
    <div className="space-y-1">
      {historialDoc && <HistorialModal doc={historialDoc} onClose={() => setHistorialDoc(null)} />}

      <Accordion id={uid + '-info'} title={<><FileText size={13} />Convocatoria — Información general</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Nomenclatura" value={s.nomenclatura} mono />
          <Field label="N° Convocatoria" value={s.nConvocatoria} />
          <Field label="Tipo Compra o Selección" value={s.tipoCompra} />
          <Field label="Versión SEACE" value={s.versionSEACE} />
          <Field label="Normativa aplicable" value={s.normativa} full />
        </div>
      </Accordion>

      <Accordion id={uid + '-cron'} title={<><Calendar size={13} />Cronograma</>} openSet={openSet} toggle={toggle}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[11.5px]">
            <thead>
              <tr>
                <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px] rounded-tl-[4px]">Etapa</th>
                <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px] whitespace-nowrap">Fecha Inicio</th>
                <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px] rounded-tr-[4px] whitespace-nowrap">Fecha Fin</th>
              </tr>
            </thead>
            <tbody>
              {s.cronograma.map((c, i) => (
                <tr key={i} className="border-b border-[#DEE3EA]">
                  <td className="px-3 py-2">{c.etapa}</td>
                  <td className="px-3 py-2 font-['Roboto',sans-serif] text-[#1a5cb5] whitespace-nowrap">{c.inicio}</td>
                  <td className="px-3 py-2 font-['Roboto',sans-serif] text-[#1a5cb5] whitespace-nowrap">{c.fin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Accordion>

      <Accordion id={uid + '-docs'} title={<><FileText size={13} />Documentos por etapa</>} openSet={openSet} toggle={toggle}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[11.5px]">
            <thead>
              <tr>
                <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px] rounded-tl-[4px] w-10">Nro.</th>
                <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px]">Etapa</th>
                <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px]">Documento</th>
                <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px]">Archivo</th>
                <th className="bg-[#294269] text-white px-3 py-2 text-left text-[11px] whitespace-nowrap">Fecha y hora pub.</th>
                <th className="bg-[#294269] text-white px-3 py-2 text-[11px] text-center">Acciones</th>
                <th className="bg-[#294269] text-white px-3 py-2 text-[11px] rounded-tr-[4px] text-center w-20">Historial</th>
              </tr>
            </thead>
            <tbody>
              {s.documentos.map((d) => {
                const tieneHistorial = ETAPAS_CON_HISTORIAL.includes(d.etapa);
                return (
                  <tr key={d.n} className="border-b border-[#DEE3EA] hover:bg-[#F6F9FC]">
                    <td className="px-3 py-2 text-gray-500 font-['Roboto',sans-serif]">{d.n}</td>
                    <td className="px-3 py-2">{d.etapa}</td>
                    <td className="px-3 py-2">{d.documento}</td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-1.5">
                        <FileText size={12} className="text-[#294269]" />
                        <span className="text-[11px] text-gray-500">{d.archivo}</span>
                        <span className="text-[10px] text-gray-400">({d.tamanio})</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-gray-500 whitespace-nowrap">{d.fecha}</td>
                    <td className="px-3 py-2 text-center">
                      <button className="inline-flex items-center gap-1 text-[11px] text-[#294269] font-bold hover:underline">
                        <Download size={11} />Descargar
                      </button>
                    </td>
                    <td className="px-3 py-2 text-center">
                      {tieneHistorial && (
                        <button
                          onClick={() => setHistorialDoc({ etapa: d.etapa, documento: d.documento, archivo: d.archivo, tamanio: d.tamanio, fecha: d.fecha })}
                          className="p-1 hover:bg-[#F6F9FC] rounded transition-colors text-gray-500 hover:text-[#0056AC]"
                          title="Ver historial de documentos"
                          aria-label="Ver historial de documentos"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Accordion>

      <Accordion id={uid + '-items'} title={<><Package size={13} />Listado de ítems</>} openSet={openSet} toggle={toggle}>
        <div className="space-y-3">
          {s.items.map((it) => {
            const estColor = it.estado === 'Contratado'
              ? 'bg-[#E6F4ED] text-[#126B49]'
              : it.estado === 'Desierto'
              ? 'bg-[#edf0f4] text-[#294269]'
              : 'bg-[#EFF6FF] text-[#0056AC]';
            return (
              <div key={it.n} className="border border-[#DEE3EA] rounded-[6px] p-3 bg-[#F6F9FC]">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-[12px] font-bold text-[#0056AC]">{it.n} — {it.descripcion}</p>
                  <span className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-[3px] ${estColor}`}>{it.estado}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <Field label="Código CUBSO" value={it.cubso} mono />
                  <Field label="Cantidad" value={it.cantidad} />
                  <Field label="Cuantía" value={it.estado === 'Publicado' ? '—' : it.vrve} />
                  <Field label="Reserva MYPE" value={it.mype} />
                  <Field label="Paquete" value={it.paquete} />
                </div>
                {it.postores.length > 0 && (
                  <table className="w-full border-collapse text-[11.5px] mt-1">
                    <thead>
                      <tr>
                        {['Postor', 'MYPE', 'Ley Selva', 'Bonif.', 'Cant. adjudicada', 'Monto adjudicado'].map(h => (
                          <th key={h} className="bg-[#EFF6FF] text-[#0056AC] px-2 py-1.5 text-left text-[10.5px]">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {it.postores.map((p, pi) => (
                        <tr key={pi} className="border-b border-[#DEE3EA]">
                          <td className="px-2 py-1.5">{p.postor}</td>
                          <td className="px-2 py-1.5">{p.mype}</td>
                          <td className="px-2 py-1.5">{p.selva}</td>
                          <td className="px-2 py-1.5">{p.bonif}</td>
                          <td className="px-2 py-1.5 font-['Roboto',sans-serif] text-right">{p.cantAdj}</td>
                          <td className="px-2 py-1.5 font-['Roboto',sans-serif] text-right font-bold text-[#126B49]">{p.montoAdj}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            );
          })}
        </div>
      </Accordion>

      {/* ── Listado de ofertas calificadas ── */}
      {tieneOfertas && (
        <div className="border border-[#DEE3EA] rounded-[6px] overflow-hidden mb-2">
          <div className="px-4 py-3 bg-[#294269] text-white">
            <p className="text-[12.5px] font-bold font-['Roboto',sans-serif]">Listado de ofertas calificadas</p>
          </div>
          <div className="px-4 py-3 overflow-x-auto bg-white">
            <table className="w-full border-collapse text-[11.5px]">
              <thead>
                <tr>
                  {['Nro.', 'RUC/Código', 'Nombre o Razón Social', 'Fecha de Presentación', 'Hora de Presentación', 'Usuario de Presentación', 'Acciones'].map(h => (
                    <th key={h} className="bg-[#F6F9FC] text-gray-600 px-3 py-2 text-center text-[11px] border-b-2 border-[#DEE3EA]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(s.ofertas ?? []).map((o: any, i: number) => (
                  <tr key={i} className="border-b border-[#DEE3EA] hover:bg-[#F6F9FC]">
                    <td className="px-3 py-2 text-gray-700 text-center">{i + 1}</td>
                    <td className="px-3 py-2 font-['Roboto',sans-serif] text-gray-700 text-center">{o.ruc}</td>
                    <td className="px-3 py-2 font-semibold text-gray-700 text-center">{o.nombre}</td>
                    <td className="px-3 py-2 text-gray-700 text-center">{o.fecha}</td>
                    <td className="px-3 py-2 text-gray-700 text-center">{o.hora}</td>
                    <td className="px-3 py-2 font-['Roboto',sans-serif] text-gray-700 text-center">{o.usuario}</td>
                    <td className="px-3 py-2 text-center">
                      <button onClick={() => setOfertaModal(o)} title="Ver detalle" aria-label="Ver detalle" className="inline-flex items-center justify-center w-7 h-7 rounded-[4px] bg-[#EFF6FF] text-[#0056AC] hover:bg-[#0056AC] hover:text-white transition-colors"><Eye size={14} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Indicadores de Riesgo de la Contratación ── */}
      <div className="border border-[#DEE3EA] rounded-[8px] bg-white overflow-hidden">
        <button
          onClick={() => toggle(uid + '-risk')}
          className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#edf0f4]/40 transition-colors text-left"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-[6px] bg-[#edf0f4] flex items-center justify-center shrink-0">
              <AlertTriangle size={14} className="text-[#294269]" />
            </div>
            <span className="text-[13px] font-bold text-[#26292E] font-['Roboto',sans-serif]">Indicadores de Riesgo de la Contratación</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Riesgo global</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FFF3EA] text-[#D75600] border border-[#D75600]/30">
              ⚠ Medio
            </span>
            {openSet.has(uid + '-risk')
              ? <ChevronUp size={14} className="text-gray-400 shrink-0" />
              : <ChevronDown size={14} className="text-gray-400 shrink-0" />}
          </div>
        </button>

        {openSet.has(uid + '-risk') && (
          <div className="p-4 border-t border-[#DEE3EA] grid grid-cols-1 md:grid-cols-2 gap-3">

            {/* Card Cronograma */}
            <div className="border-[1.5px] border-[#DEE3EA] rounded-[8px] p-3.5 relative overflow-hidden bg-gradient-to-br from-[#FFF3EA] to-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D75600]" />
              <div className="flex items-start justify-between mb-2.5 pl-2">
                <div>
                  <div className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 font-['Roboto',sans-serif]">Cumplimiento de plazos y conducción del proceso</div>
                  <div className="text-[12.5px] font-bold text-[#26292E] font-['Roboto',sans-serif]">Postergaciones de Cronograma y Reconformación de Comité</div>
                </div>
                <div className="text-right shrink-0 ml-3">
                  <div className="text-[26px] font-bold font-['Roboto',sans-serif] text-[#D75600] leading-none">3</div>
                  <div className="text-[9px] text-gray-400">eventos registrados</div>
                </div>
              </div>
              <div className="pl-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FFF3EA] text-[#D75600] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 font-['Roboto',sans-serif]">!</div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold text-[#26292E] font-['Roboto',sans-serif]">Postergación — Presentación de propuestas</div>
                    <div className="text-[10px] text-gray-500 font-['Roboto',sans-serif]">29/04/2026 → 13/05/2026 · Solicitud de prórroga por complejidad técnica</div>
                  </div>
                  <div className="text-[11px] font-bold bg-[#FFF3EA] text-[#D75600] px-2 py-0.5 rounded-[4px] shrink-0">+14 días</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#FFF3EA] text-[#D75600] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 font-['Roboto',sans-serif]">!</div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold text-[#26292E] font-['Roboto',sans-serif]">Postergación — Otorgamiento de la Buena Pro</div>
                    <div className="text-[10px] text-gray-500 font-['Roboto',sans-serif]">15/06/2026 → 30/06/2026 · Ampliación de plazo para evaluación de propuestas</div>
                  </div>
                  <div className="text-[11px] font-bold bg-[#FFF3EA] text-[#D75600] px-2 py-0.5 rounded-[4px] shrink-0">+15 días</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#edf0f4] text-[#294269] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">⟳</div>
                  <div className="flex-1">
                    <div className="text-[11px] font-bold text-[#26292E] font-['Roboto',sans-serif]">Reconformación de Comité de Selección</div>
                    <div className="text-[10px] text-gray-500 font-['Roboto',sans-serif]">10/05/2026 · RESOLUCIÓN N° 025-2026-MDM-GM</div>
                  </div>
                  <div className="text-[11px] font-bold bg-[#edf0f4] text-[#294269] px-2 py-0.5 rounded-[4px] shrink-0">1 cambio</div>
                </div>
                <p className="text-[10.5px] text-gray-500 mt-1.5 font-['Roboto',sans-serif]">2 postergaciones de cronograma y 1 reconformación de comité detectadas durante el proceso.</p>
              </div>
            </div>

            {/* Card OCDS */}
            <div className="border-[1.5px] border-[#DEE3EA] rounded-[8px] p-3.5 relative overflow-hidden bg-gradient-to-br from-[#F0FDF4] to-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#16a34a]" />
              <div className="flex items-start justify-between mb-2.5 pl-2">
                <div>
                  <div className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 font-['Roboto',sans-serif]">Datos abiertos OCDS</div>
                  <div className="text-[12.5px] font-bold text-[#26292E] font-['Roboto',sans-serif]">Índice de Transparencia</div>
                </div>
                <div className="text-right shrink-0 ml-3">
                  <div className="text-[26px] font-bold font-['Roboto',sans-serif] text-[#16a34a] leading-none">82</div>
                  <div className="text-[9px] text-gray-400">/ 100 puntos</div>
                </div>
              </div>
              <div className="pl-2 mb-2.5">
                <div className="flex justify-between text-[10px] text-gray-400 mb-1 font-['Roboto',sans-serif]">
                  <span>Puntaje OCDS</span>
                  <span className="text-[#16a34a] font-bold">Satisfactorio</span>
                </div>
                <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#22c55e] to-[#4ade80] rounded-full" style={{ width: '82%' }} />
                </div>
              </div>
              <div className="flex items-center gap-3 pl-2 mb-2.5">
                <div className="relative w-[68px] h-[68px] shrink-0">
                  <svg width="68" height="68" viewBox="0 0 68 68" className="-rotate-90">
                    <circle cx="34" cy="34" r="28" fill="none" stroke="#e5e7eb" strokeWidth="7" />
                    <circle cx="34" cy="34" r="28" fill="none" stroke="#16a34a" strokeWidth="7" strokeDasharray="144 176" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[13px] font-bold font-['Roboto',sans-serif] text-[#166634]">82%</div>
                </div>
                <div className="flex-1 space-y-1">
                  {[
                    { label: 'Convocatoria pública publicada', ok: true },
                    { label: 'Bases integradas en SEACE', ok: true },
                    { label: 'Acta de buena pro publicada', ok: true },
                    { label: 'Contrato firmado publicado', ok: null },
                    { label: 'Pagos registrados en SIAF', ok: false },
                  ].map(({ label, ok }) => (
                    <div key={label} className="flex items-center justify-between text-[10.5px] border-b border-[#F0F2F4] pb-0.5 last:border-0 font-['Roboto',sans-serif]">
                      <span className="text-gray-600">{label}</span>
                      <span className={`font-bold ml-2 ${ok === true ? 'text-[#16a34a]' : ok === null ? 'text-[#D75600]' : 'text-[#294269]'}`}>
                        {ok === true ? '✓' : ok === null ? '○' : '✕'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10.5px] text-gray-500 pl-2 font-['Roboto',sans-serif]">3 de 5 criterios cumplidos al 100%. Pendiente: registro de pagos y publicación de contrato.</p>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}

function Contratos({ proceso, openSet, toggle, setOfertaModal }: {
  proceso: typeof PROCESOS[0]; openSet: Set<string>; toggle: (id: string) => void; setOfertaModal: (o: any) => void;
}) {
  const c = proceso.contrato;
  const uid = 'ec-' + proceso.codigo;

  if (!c) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-gray-400 gap-2">
        <Clock size={32} className="opacity-40" />
        <p className="text-[12px] font-['Roboto',sans-serif]">Este procedimiento aún no ha llegado a la fase de Contratos.</p>
      </div>
    );
  }

  const pctF = c.avanceFinanciero.pct;
  const pctFis = c.avanceFisico.pct;
  const barColor = (p: number) => p >= 80 ? '#126B49' : p >= 40 ? '#D75600' : '#BF0909';

  return (
    <div className="space-y-1">
      <Accordion id={uid + '-info'} title={<><FileText size={13} />Información general del contrato</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="N° de Contrato" value={c.nroContrato} mono />
          <Field label="Monto contratado" value={fmtMoneda(c.montoContratado)} mono />
          <Field label="Contratista" value={c.contratista} full />
          <Field label="RUC Contratista" value={c.rucContratista} mono />
          <Field label="Fecha suscripción" value={c.fechaSuscripcion} />
          <Field label="Fecha inicio" value={c.fechaInicio} />
          <Field label="Fecha fin" value={c.fechaFin} />
          <Field label="Lugar de ejecución" value={c.lugar} />
        </div>
      </Accordion>

      <Accordion id={uid + '-av'} title={<><BarChart2 size={13} />Avance de ejecución</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Financiero */}
          <div className="bg-[#F6F9FC] border border-[#DEE3EA] rounded-[6px] p-3">
            <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-2">Avance Financiero</p>
            <div className="flex gap-3 mb-3">
              <div className="text-center"><div className="text-[18px] font-bold text-[#294269] font-['Roboto',sans-serif]">{pctF}%</div><div className="text-[10px] text-gray-500">Ejecutado</div></div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between text-[11px]"><span className="text-gray-500">Total</span><span className="font-['Roboto',sans-serif]">{fmtMoneda(c.avanceFinanciero.total)}</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#126B49]">Pagado</span><span className="font-['Roboto',sans-serif] text-[#126B49]">{fmtMoneda(c.avanceFinanciero.pagado)}</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#D75600]">Pendiente</span><span className="font-['Roboto',sans-serif] text-[#D75600]">{fmtMoneda(c.avanceFinanciero.pendiente)}</span></div>
              </div>
            </div>
            <div className="h-2 bg-[#DEE3EA] rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${pctF}%`, background: barColor(pctF) }} />
            </div>
            <div className="flex justify-between mt-1 text-[10px] text-gray-400"><span>0%</span><span className="font-bold text-[#26292E]">{pctF}% completado</span><span>100%</span></div>
          </div>

          {/* Físico */}
          <div className="bg-[#F6F9FC] border border-[#DEE3EA] rounded-[6px] p-3">
            <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-2">Avance Físico</p>
            <div className="flex gap-3 mb-3">
              <div className="text-center"><div className="text-[18px] font-bold text-[#D75600] font-['Roboto',sans-serif]">{pctFis}%</div><div className="text-[10px] text-gray-500">Ejecutado</div></div>
              <div className="flex-1 space-y-1">
                <div className="flex justify-between text-[11px]"><span className="text-gray-500">Hitos totales</span><span className="font-bold">{c.avanceFisico.total}</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#126B49]">Completados</span><span className="font-bold text-[#126B49]">{c.avanceFisico.completadas}</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-[#D75600]">Pendientes</span><span className="font-bold text-[#D75600]">{c.avanceFisico.total - c.avanceFisico.completadas}</span></div>
              </div>
            </div>
            <div className="h-2 bg-[#DEE3EA] rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${pctFis}%`, background: barColor(pctFis) }} />
            </div>
            <div className="flex justify-between mt-1 text-[10px] text-gray-400"><span>0%</span><span className="font-bold text-[#26292E]">{pctFis}% completado</span><span>100%</span></div>
          </div>
        </div>
      </Accordion>

      <Accordion id={uid + '-gar'} title={<><Shield size={13} />Garantías</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Clase de garantía" value={c.garantia.clase} full />
          <Field label="Tipo" value={c.garantia.tipo} />
          <Field label="N° de garantía" value={c.garantia.numero} mono />
          <Field label="Monto" value={fmtMoneda(c.garantia.monto)} mono />
          <Field label="Emisor" value={c.garantia.emisor} />
          <Field label="Fecha de emisión" value={c.garantia.fechaEmision} />
          <Field label="Fecha de vencimiento" value={c.garantia.fechaVencimiento} />
          <Field label="Condición" value={c.garantia.condicion} />
        </div>
        <div className="mt-3 pt-3 border-t border-[#DEE3EA]">
          <button className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0056AC] hover:underline">
            <Download size={12} />
            Descargar garantía
          </button>
        </div>
      </Accordion>

      {/* ── Listado de ofertas calificadas ── */}
      {(proceso.seleccion.ofertas ?? []).length > 0 && (
        <div className="border border-[#DEE3EA] rounded-[6px] overflow-hidden mb-2">
          <div className="px-4 py-3 bg-[#294269] text-white">
            <p className="text-[12.5px] font-bold font-['Roboto',sans-serif]">Listado de ofertas calificadas</p>
          </div>
          <div className="px-4 py-3 overflow-x-auto bg-white">
            <table className="w-full border-collapse text-[11.5px]">
              <thead>
                <tr>
                  {['Nro.', 'RUC/Código', 'Nombre o Razón Social', 'Fecha de Presentación', 'Hora de Presentación', 'Usuario de Presentación', 'Acciones'].map(h => (
                    <th key={h} className="bg-[#F6F9FC] text-gray-600 px-3 py-2 text-center text-[11px] border-b-2 border-[#DEE3EA]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {(proceso.seleccion.ofertas ?? []).map((o: any, i: number) => (
                  <tr key={i} className="border-b border-[#DEE3EA] hover:bg-[#F6F9FC]">
                    <td className="px-3 py-2 text-gray-700 text-center">{i + 1}</td>
                    <td className="px-3 py-2 font-['Roboto',sans-serif] text-gray-700 text-center">{o.ruc}</td>
                    <td className="px-3 py-2 font-semibold text-gray-700 text-center">{o.nombre}</td>
                    <td className="px-3 py-2 text-gray-700 text-center">{o.fecha}</td>
                    <td className="px-3 py-2 text-gray-700 text-center">{o.hora}</td>
                    <td className="px-3 py-2 font-['Roboto',sans-serif] text-gray-700 text-center">{o.usuario}</td>
                    <td className="px-3 py-2 text-center">
                      <button onClick={() => setOfertaModal(o)} title="Ver detalle" aria-label="Ver detalle" className="inline-flex items-center justify-center w-7 h-7 rounded-[4px] bg-[#EFF6FF] text-[#0056AC] hover:bg-[#0056AC] hover:text-white transition-colors"><Eye size={14} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Indicadores de Riesgo de la Contratación ── */}
      <div className="border border-[#DEE3EA] rounded-[8px] bg-white overflow-hidden">
        <button onClick={() => toggle(uid + '-risk')} className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#edf0f4]/40 transition-colors text-left">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-[6px] bg-[#edf0f4] flex items-center justify-center shrink-0"><AlertTriangle size={14} className="text-[#294269]" /></div>
            <span className="text-[13px] font-bold text-[#26292E] font-['Roboto',sans-serif]">Indicadores de Riesgo de la Contratación</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Riesgo global</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FFF3EA] text-[#D75600] border border-[#D75600]/30">⚠ Medio</span>
            {openSet.has(uid + '-risk') ? <ChevronUp size={14} className="text-gray-400 shrink-0" /> : <ChevronDown size={14} className="text-gray-400 shrink-0" />}
          </div>
        </button>
        {openSet.has(uid + '-risk') && (
          <div className="p-4 border-t border-[#DEE3EA] grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="border-[1.5px] border-[#DEE3EA] rounded-[8px] p-3.5 relative overflow-hidden bg-gradient-to-br from-[#FFF3EA] to-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D75600]" />
              <div className="flex items-start justify-between mb-2.5 pl-2">
                <div>
                  <div className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 font-['Roboto',sans-serif]">Cumplimiento de plazos y conducción del proceso</div>
                  <div className="text-[12.5px] font-bold text-[#26292E] font-['Roboto',sans-serif]">Postergaciones de Cronograma y Reconformación de Comité</div>
                </div>
                <div className="text-right shrink-0 ml-3"><div className="text-[26px] font-bold font-['Roboto',sans-serif] text-[#D75600] leading-none">3</div><div className="text-[9px] text-gray-400">eventos registrados</div></div>
              </div>
              <div className="pl-2 space-y-2">
                {[{label:'Postergación — Presentación de propuestas',sub:'29/04/2026 → 13/05/2026 · Solicitud de prórroga por complejidad técnica',badge:'+14 días',color:'D75600'},{label:'Postergación — Otorgamiento de la Buena Pro',sub:'15/06/2026 → 30/06/2026 · Ampliación de plazo para evaluación de propuestas',badge:'+15 días',color:'D75600'}].map(({label,sub,badge,color})=>(
                  <div key={label} className="flex items-start gap-2">
                    <div className={`w-5 h-5 rounded-full bg-[#FFF3EA] text-[#${color}] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5`}>!</div>
                    <div className="flex-1"><div className="text-[11px] font-bold text-[#26292E] font-['Roboto',sans-serif]">{label}</div><div className="text-[10px] text-gray-500 font-['Roboto',sans-serif]">{sub}</div></div>
                    <div className={`text-[11px] font-bold bg-[#FFF3EA] text-[#${color}] px-2 py-0.5 rounded-[4px] shrink-0`}>{badge}</div>
                  </div>
                ))}
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#edf0f4] text-[#294269] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">⟳</div>
                  <div className="flex-1"><div className="text-[11px] font-bold text-[#26292E] font-['Roboto',sans-serif]">Reconformación de Comité de Selección</div><div className="text-[10px] text-gray-500 font-['Roboto',sans-serif]">10/05/2026 · RESOLUCIÓN N° 025-2026-MDM-GM</div></div>
                  <div className="text-[11px] font-bold bg-[#edf0f4] text-[#294269] px-2 py-0.5 rounded-[4px] shrink-0">1 cambio</div>
                </div>
                <p className="text-[10.5px] text-gray-500 mt-1.5 font-['Roboto',sans-serif]">2 postergaciones de cronograma y 1 reconformación de comité detectadas durante el proceso.</p>
              </div>
            </div>
            <div className="border-[1.5px] border-[#DEE3EA] rounded-[8px] p-3.5 relative overflow-hidden bg-gradient-to-br from-[#F0FDF4] to-white">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#16a34a]" />
              <div className="flex items-start justify-between mb-2.5 pl-2">
                <div><div className="text-[9.5px] font-bold text-gray-400 uppercase tracking-wider mb-0.5 font-['Roboto',sans-serif]">Datos abiertos OCDS</div><div className="text-[12.5px] font-bold text-[#26292E] font-['Roboto',sans-serif]">Índice de Transparencia</div></div>
                <div className="text-right shrink-0 ml-3"><div className="text-[26px] font-bold font-['Roboto',sans-serif] text-[#16a34a] leading-none">82</div><div className="text-[9px] text-gray-400">/ 100 puntos</div></div>
              </div>
              <div className="pl-2 mb-2.5">
                <div className="flex justify-between text-[10px] text-gray-400 mb-1 font-['Roboto',sans-serif]"><span>Puntaje OCDS</span><span className="text-[#16a34a] font-bold">Satisfactorio</span></div>
                <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[#22c55e] to-[#4ade80] rounded-full" style={{width:'82%'}} /></div>
              </div>
              <div className="flex items-center gap-3 pl-2 mb-2.5">
                <div className="relative w-[68px] h-[68px] shrink-0">
                  <svg width="68" height="68" viewBox="0 0 68 68" className="-rotate-90"><circle cx="34" cy="34" r="28" fill="none" stroke="#e5e7eb" strokeWidth="7" /><circle cx="34" cy="34" r="28" fill="none" stroke="#16a34a" strokeWidth="7" strokeDasharray="144 176" strokeLinecap="round" /></svg>
                  <div className="absolute inset-0 flex items-center justify-center text-[13px] font-bold font-['Roboto',sans-serif] text-[#166634]">82%</div>
                </div>
                <div className="flex-1 space-y-1">
                  {[{label:'Convocatoria pública publicada',ok:true},{label:'Bases integradas en SEACE',ok:true},{label:'Acta de buena pro publicada',ok:true},{label:'Contrato firmado publicado',ok:null},{label:'Pagos registrados en SIAF',ok:false}].map(({label,ok})=>(
                    <div key={label} className="flex items-center justify-between text-[10.5px] border-b border-[#F0F2F4] pb-0.5 last:border-0 font-['Roboto',sans-serif]">
                      <span className="text-gray-600">{label}</span>
                      <span className={`font-bold ml-2 ${ok===true?'text-[#16a34a]':ok===null?'text-[#D75600]':'text-[#294269]'}`}>{ok===true?'✓':ok===null?'○':'✕'}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[10.5px] text-gray-500 pl-2 font-['Roboto',sans-serif]">3 de 5 criterios cumplidos al 100%. Pendiente: registro de pagos y publicación de contrato.</p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

// ─── Phase tabs ───────────────────────────────────────────────────────────────

function PhaseTabs({ proceso, activeTab, onTabChange, openSet, toggleAccordion, setOfertaModal }: {
  proceso: typeof PROCESOS[0];
  activeTab: number;
  onTabChange: (i: number) => void;
  openSet: Set<string>;
  toggleAccordion: (id: string) => void;
  setOfertaModal: (o: any) => void;
}) {
  return (
    <div>
      <div className="flex border-b border-[#DEE3EA] mb-3">
        {FASES.map((fase, i) => {
          const done = proceso.fasesCompletas.includes(i);
          const active = i === activeTab;
          return (
            <button
              key={i}
              onClick={() => onTabChange(i)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-[12px] font-semibold border-b-2 transition-colors font-['Roboto',sans-serif] ${
                active
                  ? 'border-[#294269] text-[#294269] bg-[#edf0f4]/40'
                  : 'border-transparent text-gray-500 hover:text-[#26292E]'
              }`}
            >
              {done ? (
                <CheckCircle size={12} className={active ? 'text-[#126B49]' : 'text-[#126B49]/60'} />
              ) : (
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${active ? 'bg-[#63c9c4] text-white' : 'bg-gray-200 text-gray-500'}`}>{i + 1}</span>
              )}
              {fase}
            </button>
          );
        })}
      </div>
      {activeTab === 0 && <ActuacionesPreparatorias proceso={proceso} openSet={openSet} toggle={toggleAccordion} />}
      {activeTab === 1 && <Seleccion proceso={proceso} openSet={openSet} toggle={toggleAccordion} setOfertaModal={setOfertaModal} />}
      {activeTab === 2 && <Contratos proceso={proceso} openSet={openSet} toggle={toggleAccordion} setOfertaModal={setOfertaModal} />}
    </div>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────

export function BienesDetailPage({ id, navigate, from }: BienesDetailPageProps) {
  const [ofertaModal, setOfertaModal] = useState<any | null>(null);
  const [activeView, setActiveView] = useState<'rail' | 'cards' | 'timeline'>('rail');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const [modalTab, setModalTab] = useState(0);
  const [modalAccordions, setModalAccordions] = useState<Set<string>>(new Set());
  const [timelineIdx, setTimelineIdx] = useState(0);
  const [timelineTab, setTimelineTab] = useState(0);

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleModalAccordion = (id: string) => {
    setModalAccordions(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const totalMonto = PROCESOS.reduce((acc, p) => acc + p.monto, 0);
  const itemsAdj = PROCESOS.reduce((acc, p) => acc + p.seleccion.items.filter(it => it.estado === 'Contratado' || it.estado === 'Adjudicado').length, 0);
  const enCurso = PROCESOS.reduce((acc, p) => acc + p.seleccion.items.filter(it => !['Nulo', 'Adjudicado', 'Contratado', 'Desierto'].includes(it.estado)).length, 0);

  const selectedProcess = PROCESOS[selectedIdx];

  const views = [
    { key: 'rail' as const, label: 'Maestro / Detalle', Icon: LayoutList },
  ];

  return (
    <div className="flex flex-col flex-1 overflow-auto bg-[#F6F9FC] font-['Roboto',sans-serif]">
      {ofertaModal && <OfertaModal oferta={ofertaModal} onClose={() => setOfertaModal(null)} />}

      {/* ── Centered container ── */}
      <div className="max-w-[1200px] mx-auto w-full px-5 py-5 space-y-4">

        {/* Back nav */}
        <button
          onClick={() => navigate(from ?? { type: 'search-all', query: '' })}
          className="flex items-center gap-1.5 text-[#294269] hover:text-[#63c9c4] text-[12px] font-bold transition-colors"
        >
          <ArrowLeft size={13} />
          {from?.type === 'search-planning' ? 'Volver al Anuncio de Contratación Futura' : 'Volver a resultados'}
        </button>

        {/* ── Header card ── */}
        <div className="bg-white border border-[#DEE3EA] rounded-[12px] px-6 pt-5 pb-0 overflow-hidden">

          {/* IDEC info row */}
          <div className="flex items-start justify-between gap-6 mb-4">
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-1.5 bg-[#edf0f4] text-[#6a7b96] text-[10px] font-bold px-2 py-0.5 rounded-[4px] mb-1.5 uppercase tracking-wider">
                IDEC · Bienes
              </div>
              <h1 className="text-[11px] font-bold text-[#8A94A2] uppercase tracking-wider mb-0.5">Expediente de Contratación – IDEC</h1>
              <h2 className="text-[26px] font-bold text-[#294269] leading-tight mb-1 font-['Roboto',sans-serif]">IDEC-2025-001235</h2>
              <p className="text-[13px] font-bold text-[#26292E] mb-0.5">MUNICIPALIDAD DISTRITAL DE CORTEGANA</p>
              <p className="text-[11.5px] text-[#6a7b96] mt-0.5 leading-snug">Adquisición de equipos de protección personal técnico y administrativo de Electro Oriente S.A.</p>
            </div>
            <div className="shrink-0 flex gap-6 text-right">
              <div>
                <div className="text-[10px] font-bold text-[#8A94A2] uppercase tracking-wider mb-0.5">Publicación</div>
                <div className="text-[15px] font-bold text-[#294269] font-['Roboto',sans-serif]">12/04/2026</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-[#8A94A2] uppercase tracking-wider mb-0.5">Cierre</div>
                <div className="text-[15px] font-bold text-[#D75600] font-['Roboto',sans-serif]">En curso</div>
              </div>
            </div>
          </div>

          {/* KPI strip — full width, flush to card edges */}
          <div className="grid grid-cols-4 divide-x divide-[#DEE3EA] border-t border-[#DEE3EA] -mx-6">
            {[
              { icon: <LayoutList size={15} />, color: 'text-[#294269]', bg: 'bg-[#EFF6FF]', val: PROCESOS.length, label: 'Procedimientos derivados' },
              { icon: <Banknote size={15} />, color: 'text-[#126B49]', bg: 'bg-[#E6F4ED]', val: fmtMoneda(totalMonto), label: 'Monto total contratado' },
              { icon: <CheckCircle size={15} />, color: 'text-[#294269]', bg: 'bg-[#E6F4ED]', val: itemsAdj, label: 'Ítems adjudicados' },
              { icon: <Clock size={15} />, color: 'text-[#D75600]', bg: 'bg-[#FFF7ED]', val: enCurso, label: 'En curso' },
            ].map(({ icon, color, bg, val, label }, i) => (
              <div key={i} className="flex items-center gap-2.5 px-6 py-3">
                <div className={`w-8 h-8 rounded-[6px] ${bg} ${color} flex items-center justify-center shrink-0`}>{icon}</div>
                <div>
                  <div className={`text-[16px] font-bold ${color} font-['Roboto',sans-serif] leading-tight`}>{val}</div>
                  <div className="text-[10px] text-gray-500 leading-tight">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── View switcher ── */}
        <div className="flex items-center gap-2">
          {views.map(({ key, label, Icon }) => (
            <button
              key={key}
              onClick={() => setActiveView(key)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[11.5px] font-semibold transition-colors ${
                activeView === key
                  ? 'bg-[#294269] text-white'
                  : 'bg-white border border-[#DEE3EA] text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon size={13} />
              {label}
            </button>
          ))}
        </div>

        {/* ── Content area ── */}

        {/* ── VISTA 1: MAESTRO / DETALLE ── */}
        {activeView === 'rail' && (
          <div className="flex gap-4 items-start">

            {/* Left card — Procesos derivados */}
            <div className="w-[280px] shrink-0 bg-white border border-[#DEE3EA] rounded-[12px] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#DEE3EA] bg-[#294269]">
                <h3 className="text-[11px] font-bold text-white uppercase tracking-wider font-['Roboto',sans-serif]">Procesos derivados</h3>
                <span className="bg-[#E2A615] text-[#294269] text-[11px] font-bold px-2 py-0.5 rounded-[4px] font-['Roboto',sans-serif]">{PROCESOS.length}</span>
              </div>
              {PROCESOS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => { setSelectedIdx(i); setActiveTab(0); setOpenAccordions(new Set()); }}
                  className={`w-full text-left px-4 py-3 border-b border-[#DEE3EA] transition-colors font-['Roboto',sans-serif] ${
                    i === selectedIdx ? 'bg-[#edfaf9] border-l-[3px] border-l-[#63c9c4]' : 'hover:bg-[#F6F9FC]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-['Roboto',sans-serif] text-[#294269] font-bold truncate">{p.seleccion.nomenclatura}</span>
                    {estadoBadge(p.estado, p.estadoLabel)}
                  </div>
                  <p className="text-[11px] text-gray-600 leading-snug line-clamp-2 mb-1.5 font-['Roboto',sans-serif]">{p.objeto}</p>
                  <p className="text-[11px] font-bold font-['Roboto',sans-serif] text-[#26292E]">{fmtMoneda(p.monto)}</p>
                  <MiniFases proceso={p} />
                </button>
              ))}
            </div>

            {/* Right detail card */}
            <div className="flex-1 min-w-0 bg-white border border-[#DEE3EA] rounded-[12px] overflow-hidden p-5">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-[14px] font-bold font-['Roboto',sans-serif] text-[#294269] mb-1">{selectedProcess.seleccion.nomenclatura}</h2>
                  <p className="text-[12.5px] text-[#26292E] leading-snug">{selectedProcess.objeto}</p>
                </div>
                <div className="shrink-0 text-right">
                  {estadoBadge(selectedProcess.estado, selectedProcess.estadoLabel)}
                  {selectedProcess.estado === 'contratado' && (
                    <p className="text-[12px] font-bold font-['Roboto',sans-serif] text-[#126B49] mt-1">{fmtMoneda(selectedProcess.monto)}</p>
                  )}
                </div>
              </div>
              <PhaseTabs
                proceso={selectedProcess}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                openSet={openAccordions}
                toggleAccordion={toggleAccordion}
                setOfertaModal={setOfertaModal}
              />
            </div>
          </div>
        )}

        {/* ── VISTA 2: TABLERO DE TARJETAS ── */}
        {activeView === 'cards' && (
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROCESOS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => { setModalIdx(i); setModalTab(p.faseActualIdx); setModalAccordions(new Set()); }}
                  className="bg-white border border-[#DEE3EA] rounded-[8px] p-4 text-left hover:shadow-md transition-shadow hover:border-[#63c9c4]/40 group"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="text-[11px] font-['Roboto',sans-serif] text-[#294269] font-bold">{p.codigo}</div>
                      <div className="text-[10.5px] text-gray-400">Licitación pública</div>
                    </div>
                    {estadoBadge(p.estado, p.estadoLabel)}
                  </div>
                  <p className="text-[12px] text-[#26292E] leading-snug mb-3 line-clamp-3">{p.objeto}</p>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Cuantía</span>
                    <span className="text-[12px] font-bold font-['Roboto',sans-serif] text-[#26292E]">{fmtMoneda(p.monto)}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#D75600] shrink-0" />
                    <span className="text-[10.5px] text-gray-500">Fase actual: {FASES[p.faseActualIdx]}</span>
                  </div>
                  <MiniFases proceso={p} />
                  <div className="mt-3 pt-3 border-t border-[#DEE3EA] text-[11px] text-[#294269] font-semibold group-hover:underline">
                    Ver ficha completa →
                  </div>
                </button>
              ))}
            </div>

            <p className="text-[11.5px] text-gray-500 mt-4 px-1">
              <strong>Patrón de Tarjetas:</strong> cada proceso hijo es una unidad visual autónoma. El detalle completo se abre en modal.
            </p>
          </div>
        )}

        {/* ── VISTA 3: TIMELINE ── */}
        {activeView === 'timeline' && (
          <div className="p-5">
            <div className="bg-white border border-[#DEE3EA] rounded-[8px] p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[13px] font-bold text-[#26292E]">Línea de procedimientos derivados del IDEC</h3>
                <div className="flex items-center gap-4 text-[10.5px] text-gray-500">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#126B49] inline-block" />Fase completada</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#D75600] inline-block" />Fase actual</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#DEE3EA] inline-block" />Fase pendiente</span>
                </div>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {PROCESOS.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => { setTimelineIdx(i); setTimelineTab(0); setOpenAccordions(new Set()); }}
                    className={`shrink-0 w-52 text-left border rounded-[8px] p-3 transition-all ${
                      i === timelineIdx
                        ? 'border-[#63c9c4] bg-[#edf0f4] shadow-sm'
                        : 'border-[#DEE3EA] bg-[#F6F9FC] hover:border-[#63c9c4]/40'
                    }`}
                  >
                    <div className="text-[10.5px] font-['Roboto',sans-serif] text-[#294269] font-bold mb-1 truncate">{p.codigo}</div>
                    <div className="text-[11px] font-bold font-['Roboto',sans-serif] text-[#26292E] mb-1">{fmtMoneda(p.monto)}</div>
                    <MiniFases proceso={p} />
                    <div className="mt-2">{estadoBadge(p.estado, p.estadoLabel)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Detail */}
            <div className="bg-white border border-[#DEE3EA] rounded-[8px] p-5">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-[14px] font-bold font-['Roboto',sans-serif] text-[#294269] mb-1">{PROCESOS[timelineIdx].seleccion.nomenclatura}</h2>
                  <p className="text-[12.5px] text-[#26292E] leading-snug">{PROCESOS[timelineIdx].objeto}</p>
                </div>
                <div className="shrink-0 text-right">
                  {estadoBadge(PROCESOS[timelineIdx].estado, PROCESOS[timelineIdx].estadoLabel)}
                  <p className="text-[12px] font-bold font-['Roboto',sans-serif] text-[#26292E] mt-1">{fmtMoneda(PROCESOS[timelineIdx].monto)}</p>
                </div>
              </div>
              <PhaseTabs
                proceso={PROCESOS[timelineIdx]}
                activeTab={timelineTab}
                onTabChange={setTimelineTab}
                openSet={openAccordions}
                toggleAccordion={toggleAccordion}
                setOfertaModal={setOfertaModal}
              />
            </div>

            <p className="text-[11.5px] text-gray-500 mt-4 px-1">
              <strong>Patrón de Río de Procesos:</strong> los nodos recrean la secuencia cronológica. Al hacer clic, la ficha completa se ancla debajo.
            </p>
          </div>
        )}

      </div>{/* end max-w container */}

      {/* ── Modal (Cards view) ── */}
      {modalIdx !== null && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          onClick={e => { if (e.target === e.currentTarget) setModalIdx(null); }}
        >
          <div className="bg-white rounded-[8px] shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
            <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-[#DEE3EA] shrink-0">
              <div>
                <div className="text-[13px] font-bold font-['Roboto',sans-serif] text-[#294269]">{PROCESOS[modalIdx].seleccion.nomenclatura}</div>
                <div className="text-[12px] text-[#26292E] mt-0.5 leading-snug">{PROCESOS[modalIdx].objeto}</div>
              </div>
              <button
                onClick={() => setModalIdx(null)}
                className="shrink-0 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Cerrar"
              >
                <X size={16} className="text-gray-500" />
              </button>
            </div>
            <div className="flex items-center justify-between px-5 py-2.5 border-b border-[#DEE3EA] shrink-0">
              {estadoBadge(PROCESOS[modalIdx].estado, PROCESOS[modalIdx].estadoLabel)}
              <span className="text-[12px] font-bold font-['Roboto',sans-serif] text-[#26292E]">
                {fmtMoneda(PROCESOS[modalIdx].monto)}
              </span>
            </div>
            <div className="overflow-y-auto flex-1 p-5">
              <PhaseTabs
                proceso={PROCESOS[modalIdx]}
                activeTab={modalTab}
                onTabChange={setModalTab}
                openSet={modalAccordions}
                toggleAccordion={toggleModalAccordion}
                setOfertaModal={setOfertaModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
