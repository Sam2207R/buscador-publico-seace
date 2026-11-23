import { useState } from 'react';
import { ArrowLeft, Building2, Calendar, FileText, ChevronDown, History, Download, CheckCircle, Clock, GitBranch, Eye } from 'lucide-react';
import svgPaths from "../../imports/TemplateBuscadorPublico-4/svg-muqxpbpr0o";
import type { Page } from '../App';
import type { Herramienta } from '../components/mockData';

interface DetailPageProps {
  id: string;
  stage: 'planning' | 'selection' | 'fup';
  navigate: (page: Page) => void;
}

// Collapsible section — open by default
function Section({ title, icon, children, defaultOpen = true }: {
  title: string; icon: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-semibold text-[#294269] text-[14px] font-['Roboto',sans-serif]">{title}</span>
        </div>
        <ChevronDown size={17} className={`text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="bg-white">{children}</div>}
    </div>
  );
}

function DataGrid({ items }: { items: { label: string; value: string; icon: any }[] }) {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="flex items-start gap-3">
            <div className="p-1.5 bg-gray-100 rounded shrink-0">
              <Icon size={14} className="text-[#26292E]" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] text-gray-500 mb-0.5 font-['Roboto',sans-serif]">{item.label}</div>
              <div className="text-[13px] font-medium text-gray-800 break-words font-['Roboto',sans-serif]">{item.value}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Sección: Cronograma de Actuaciones Preparatorias ──
function SectionCronogramaActPrep() {
  const etapas = [
    { nombre: 'Convocatoria',                          ejecucion: 'Por la entidad',  dias: '01', inicio: '24/01/2026', fin: '24/01/2026', pct: 100 },
    { nombre: 'Registro de participaciones',           ejecucion: 'Electrónico',     dias: '03', inicio: '25/01/2026', fin: '27/01/2026', pct: 80  },
    { nombre: 'Formulación de consultas y observaciones', ejecucion: 'Electrónico',  dias: '05', inicio: '28/01/2026', fin: '01/02/2026', pct: 60  },
    { nombre: 'Absolución de consultas y observaciones',  ejecucion: 'Por la entidad', dias: '02', inicio: '02/02/2026', fin: '03/02/2026', pct: 40 },
    { nombre: 'Integración de las Bases',              ejecucion: 'Por la entidad',  dias: '02', inicio: '04/02/2026', fin: '05/02/2026', pct: 30  },
    { nombre: 'Presentación de ofertas',               ejecucion: 'Electrónico',     dias: '01', inicio: '06/02/2026', fin: '06/02/2026', pct: 20  },
    { nombre: 'Evaluación y calificación',             ejecucion: 'Por la entidad',  dias: '03', inicio: '07/02/2026', fin: '09/02/2026', pct: 10  },
    { nombre: 'Otorgamiento de la Buena Pro',          ejecucion: 'Por la entidad',  dias: '01', inicio: '10/02/2026', fin: '10/02/2026', pct: 0   },
  ];

  return (
    <Section
      title="Estrategia cronograma de la contratación"
      icon={<div className="w-2 h-2 rounded-full bg-[#e2a615]" />}
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[12px] text-gray-500 font-['Roboto',sans-serif]">Cronograma del procedimiento de selección</span>
          <span className="px-2 py-0.5 bg-amber-50 border border-amber-200 text-amber-700 rounded text-[10px] font-bold font-['Roboto',sans-serif] uppercase tracking-wide">Pendiente</span>
        </div>
        <div className="space-y-3">
          {etapas.map((e, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#63c9c4] shrink-0" />
                  <span className="text-[13px] font-semibold text-[#26292E] font-['Roboto',sans-serif]">{e.nombre}</span>
                </div>
                <span className="text-[11px] text-gray-500 font-['Roboto',sans-serif]">{e.dias} días</span>
              </div>
              <div className="px-4 py-3 grid grid-cols-3 gap-4 text-[12px] font-['Roboto',sans-serif]">
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Forma de ejecución</div>
                  <div className="font-semibold text-[#26292E]">{e.ejecucion}</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Fecha de inicio</div>
                  <div className="font-medium text-[#26292E]">{e.inicio}</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5">Fecha de fin</div>
                  <div className="font-medium text-[#26292E]">{e.fin}</div>
                </div>
              </div>
              {/* Mini progress bar */}
              <div className="px-4 pb-3">
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#63c9c4] rounded-full transition-all" style={{ width: `${e.pct}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── Sección: Cronograma de Selección ──
function SectionCronogramaSeleccion() {
  const etapas = [
    { etapa: 'Convocatoria',                            inicio: '24/01/2026 08:00', fin: '24/01/2026 17:00' },
    { etapa: 'Registro de participantes',               inicio: '25/01/2026 08:00', fin: '27/01/2026 23:59' },
    { etapa: 'Formulación de consultas y observaciones', inicio: '28/01/2026 08:00', fin: '01/02/2026 23:59' },
    { etapa: 'Absolución de consultas y observaciones', inicio: '02/02/2026 08:00', fin: '03/02/2026 17:00' },
    { etapa: 'Integración de las Bases',               inicio: '04/02/2026 08:00', fin: '05/02/2026 17:00' },
    { etapa: 'Presentación de ofertas',                inicio: '06/02/2026 08:00', fin: '06/02/2026 23:59' },
    { etapa: 'Evaluación y calificación',              inicio: '07/02/2026 08:00', fin: '09/02/2026 17:00' },
    { etapa: 'Otorgamiento de la Buena Pro',           inicio: '10/02/2026 08:00', fin: '10/02/2026 17:00' },
  ];

  return (
    <Section
      title="Cronograma de Selección"
      icon={<Calendar size={16} className="text-[#26292E]" />}
    >
      <div className="p-4 overflow-x-auto">
        <table className="w-full text-[12px] font-['Roboto',sans-serif]">
          <thead className="bg-[#f5f5f5] border-b border-gray-200">
            <tr>
              <th className="py-2.5 px-4 text-left text-[#26292E] font-semibold">Etapa</th>
              <th className="py-2.5 px-4 text-left text-[#26292E] font-semibold whitespace-nowrap">Fecha y hora de inicio</th>
              <th className="py-2.5 px-4 text-left text-[#26292E] font-semibold whitespace-nowrap">Fecha y hora de fin</th>
            </tr>
          </thead>
          <tbody>
            {etapas.map((e, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-2.5 px-4">
                  <button className="text-[#294269] hover:underline text-left font-medium">{e.etapa}</button>
                </td>
                <td className="py-2.5 px-4 text-gray-600 whitespace-nowrap">{e.inicio}</td>
                <td className="py-2.5 px-4 text-gray-600 whitespace-nowrap">{e.fin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

// ── Sección: Anuncio de Contratación Futura ──
function SectionACF() {
  const metaItems = [
    { label: 'Nombre de Entidad', value: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA' },
    { label: 'Cod. de ACF',       value: 'ACF-2025-031' },
    { label: 'Procedimiento',     value: 'Licitación Pública' },
    { label: 'Objeto',            value: 'Bien' },
    { label: 'Alcance',           value: 'Cajamarca / Celendín / Cortegana' },
    { label: 'Año',               value: '2025' },
    { label: 'Plazo de entrega',  value: '90 días calendario' },
  ];

  const items = [
    { ref: '234', desc: 'ADQUISICIÓN DE HOJUELAS DE AVENA', nItem: '1', itemDesc: 'Hojuelas precocidas de avena', cant: '500', unidad: 'Unidad', fechaConv: '31/10/2025', origen: 'SEACE' },
    { ref: '235', desc: 'ADQUISICIÓN DE QUINUA', nItem: '2', itemDesc: 'Quinua blanca orgánica', cant: '300', unidad: 'Kg', fechaConv: '31/10/2025', origen: 'SEACE' },
  ];

  return (
    <Section title="Anuncio de Contratación Futura" icon={<div className="w-2 h-2 rounded-full bg-[#63c9c4]" />}>
      <div className="px-5 py-4 space-y-5">

        {/* Datos del Expediente */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold text-[#294269] uppercase tracking-wider whitespace-nowrap font-['Roboto',sans-serif]">Datos del Expediente</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {metaItems.map((m, i) => (
              <div key={i}>
                <div className="text-[10px] text-gray-400 mb-0.5 font-['Roboto',sans-serif] uppercase tracking-wide">{m.label}</div>
                <div className="text-[13px] font-semibold text-[#26292E] font-['Roboto',sans-serif]">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Descripción preliminar */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold text-[#294269] uppercase tracking-wider whitespace-nowrap font-['Roboto',sans-serif]">Descripción preliminar del requerimiento</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <p className="text-[13px] text-[#26292E] font-['Roboto',sans-serif] leading-snug uppercase">
            ADQUISICIÓN DE HOJUELAS PRECOCIDAS DE AVENA, QUINUA, KIWICHA, MACA, SOYA, LECHE ENTERA EN POLVO Y AZÚCAR
          </p>
        </div>

        {/* Cantidad de ítems */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] font-bold text-[#294269] uppercase tracking-wider whitespace-nowrap font-['Roboto',sans-serif]">Cantidad de ítems por contratación</span>
            <span className="text-[11px] text-gray-400 font-['Roboto',sans-serif]">{items.length} ítems</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[12px] font-['Roboto',sans-serif]">
              <thead>
                <tr>
                  {['N° Referencia', 'Descripción', 'N° Ítem', 'Descripción del Ítem', 'Cantidad', 'Unidad', 'Fecha Aprox. Conv.', 'Origen'].map(h => (
                    <th key={h} className="py-2 px-3 text-left bg-[#294269] text-white font-semibold text-[11px] whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((r, i) => (
                  <tr key={i} className={`border-b border-[#DEE3EA] ${i % 2 === 0 ? 'bg-white' : 'bg-[#F6F9FC]'}`}>
                    <td className="py-2 px-3 font-medium text-[#26292E]">{r.ref}</td>
                    <td className="py-2 px-3 text-gray-600 max-w-[180px] truncate">{r.desc}</td>
                    <td className="py-2 px-3 text-gray-600">{r.nItem}</td>
                    <td className="py-2 px-3 text-gray-600 max-w-[160px] truncate">{r.itemDesc}</td>
                    <td className="py-2 px-3 text-gray-600">{r.cant}</td>
                    <td className="py-2 px-3 text-gray-600">{r.unidad}</td>
                    <td className="py-2 px-3 text-gray-600 whitespace-nowrap">{r.fechaConv}</td>
                    <td className="py-2 px-3 text-gray-600 uppercase">{r.origen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fecha aprox convocatoria */}
        <div className="flex items-center gap-3">
          <span className="text-[12px] text-gray-500 font-['Roboto',sans-serif]">Fecha aproximada de la convocatoria:</span>
          <div className="flex items-center gap-1.5 bg-[#edf0f4] text-[#294269] text-[12px] font-semibold px-3 py-1 rounded-[6px] font-['Roboto',sans-serif]">
            <Calendar size={13} />
            31/10/2025
          </div>
        </div>

      </div>
    </Section>
  );
}

// ── Sección: Gestión del Requerimiento ──
function SectionGestionRequerimiento() {
  const steps = [
    { label: 'Formulación del requerimiento', active: true },
    { label: 'Estrategia interacción con el mercado', active: false },
    { label: 'Estrategia cronograma', active: false },
    { label: 'Estrategia presupuesto', active: false },
    { label: 'Estrategia análisis de variables', active: false },
    { label: 'Designación de evaluadores', active: false },
    { label: 'Aprobación de expediente', active: false },
    { label: 'Elaboración de las bases', active: false },
  ];

  const tabs = ['Definición de requerimiento', 'Relación de ítems', 'Entregas', 'Condiciones de contratación', 'Requisitos', 'Especificaciones técnicas'];
  const activeTab = 3;

  const requerimientosItems = [
    { n: '01', desc: 'COMPRA DE ARROZ PILADO',    avance: 10, total: 10 },
    { n: '02', desc: 'COMPRA DE AZUCAR RUBIA',    avance: 10, total: 10 },
    { n: '03', desc: 'COMPRA DE LENTEJA BEBE',    avance: 8,  total: 10 },
    { n: '04', desc: 'COMPRA DE ESPECERIAS',       avance: 3,  total: 10 },
  ];

  return (
    <Section title="Gestión del Requerimiento" icon={<div className="w-2 h-2 rounded-full bg-[#294269]" />}>
      <div className="p-4 space-y-4">
        {/* Stepper */}
        <div className="overflow-x-auto pb-1">
          <div className="flex items-start gap-0 min-w-max">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center" style={{ minWidth: 110 }}>
                <div className="flex items-center w-full">
                  {i > 0 && <div className="flex-1 h-0.5 bg-gray-200" />}
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${step.active ? 'border-[#63c9c4] bg-white' : 'border-gray-300 bg-white'}`}>
                    {step.active && <div className="w-2.5 h-2.5 rounded-full bg-[#63c9c4]" />}
                  </div>
                  {i < steps.length - 1 && <div className="flex-1 h-0.5 bg-gray-200" />}
                </div>
                <p className={`text-center text-[10px] mt-1.5 leading-tight max-w-[100px] font-['Roboto',sans-serif] ${step.active ? 'font-bold text-[#0056AC]' : 'text-gray-400'}`}>
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 flex overflow-x-auto">
          {tabs.map((tab, i) => (
            <button key={i} className={`px-4 py-2.5 text-[12px] whitespace-nowrap font-['Roboto',sans-serif] border-b-2 transition-colors ${
              i === activeTab
                ? 'border-[#294269] text-[#26292E] font-bold'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Formulación de requerimiento title */}
        <div className="flex items-center justify-between">
          <h4 className="text-[16px] font-semibold text-[#26292E] font-['Roboto',sans-serif]">Lista de ítems</h4>
          <div className="flex items-center gap-2 text-[12px] font-['Roboto',sans-serif]">
            <span className="text-gray-500">Completados</span>
            <span className="bg-[#294269] text-white text-[10px] px-2 py-0.5 rounded-full font-semibold">2</span>
            <span className="text-gray-500">de {requerimientosItems.length}</span>
          </div>
        </div>

        {/* Items table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-[12px] font-['Roboto',sans-serif]">
            <thead className="bg-[#e8f2f7]">
              <tr>
                <th className="py-2.5 px-3 text-left text-[#26292E] font-semibold border-b border-gray-200 w-12">N°</th>
                <th className="py-2.5 px-3 text-left text-[#26292E] font-semibold border-b border-gray-200">Descripción</th>
                <th className="py-2.5 px-3 text-center text-[#26292E] font-semibold border-b border-gray-200 w-36">Avance de condiciones</th>
              </tr>
            </thead>
            <tbody>
              {requerimientosItems.map((r, i) => (
                <tr key={i} className={`border-b border-gray-100 last:border-0 ${i === 0 ? 'bg-blue-50/40' : 'bg-white'} hover:bg-gray-50 transition-colors`}>
                  <td className="py-3 px-3 font-medium text-[#26292E]">{r.n}</td>
                  <td className="py-3 px-3 text-[#26292E] uppercase">{r.desc}</td>
                  <td className="py-3 px-3">
                    {/* Semi-circle progress indicator */}
                    <div className="flex flex-col items-center gap-0.5">
                      <div className="relative w-10 h-5">
                        <svg viewBox="0 0 40 20" className="w-full h-full">
                          <path d="M4 20 A16 16 0 0 1 36 20" stroke="#e5e7eb" strokeWidth="3" fill="none" strokeLinecap="round" />
                          <path d="M4 20 A16 16 0 0 1 36 20" stroke="#26292E" strokeWidth="3" fill="none" strokeLinecap="round"
                            strokeDasharray={`${(r.avance / r.total) * 50.3} 50.3`} />
                        </svg>
                      </div>
                      <span className="text-[10px] text-gray-600">{r.avance}/{r.total}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="bg-gray-50 border-t border-gray-200 px-4 py-2 flex items-center justify-between">
            <span className="text-[11px] text-gray-500 font-['Roboto',sans-serif]">Total de registros: {requerimientosItems.length}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ── Sección: Expresión de Interés ──
function SectionExpresionInteres() {
  return (
    <Section title="Expresión de Interés" icon={<div className="w-2 h-2 rounded-full bg-[#294269]" />}>
      <div className="p-4">
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-['Roboto',sans-serif]">IDEC</span>
              <span className="text-[14px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">1222041</span>
            </div>
          </div>
          <div className="bg-white px-5 py-4">
            <div className="space-y-1.5 text-[13px] text-[#26292E] font-['Roboto',sans-serif]">
              <p><span className="text-gray-500">Entidad Convocante:</span> 20165782233 - MUNICIPALIDAD DISTRITAL DE YAMBRASBAMBA</p>
              <p><span className="text-gray-500">Entidad Contratante:</span> 20165782233 - MUNICIPALIDAD DISTRITAL DE YAMBRASBAMBA</p>
              <p><span className="text-gray-500">Descripción del contrato:</span> CONTRATO DE EJECUCIÓN DE OBRA</p>
              <p><span className="text-gray-500">Nomenclatura del Proceso:</span> LP-SM-1-2025-JURADO/MDY-1</p>
              <p><span className="text-gray-500">Número del contrato:</span> 0001-2026-MDY/GM</p>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 text-right">
              <span className="text-[13px] font-bold text-[#26292E] font-['Roboto',sans-serif]">Monto: S/ 450,450.00</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ── Sección: Documentos Adjuntos ──
function SectionDocumentosAdjuntos() {
  const docs = [
    { n: '1', name: 'bases.pdf',             tipo: 'PDF', size: '1,248 KB' },
    { n: '2', name: 'bases_electronicas.pdf', tipo: 'PDF', size: '896 KB'   },
  ];

  return (
    <Section title="Documentos Adjuntos" icon={<FileText size={16} className="text-[#26292E]" />}>
      <div className="p-4">
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-[12px] font-['Roboto',sans-serif]">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="py-2 px-3 text-left text-gray-500 font-medium w-10">Nro.</th>
                <th className="py-2 px-3 text-left text-gray-500 font-medium">Nombre del Archivo</th>
                <th className="py-2 px-3 text-left text-gray-500 font-medium">Tipo</th>
                <th className="py-2 px-3 text-left text-gray-500 font-medium">Tamaño</th>
                <th className="py-2 px-3 text-center text-gray-500 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {docs.map((doc) => (
                <tr key={doc.n} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="py-2.5 px-3 text-gray-500">{doc.n}</td>
                  <td className="py-2.5 px-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1 bg-red-50 rounded shrink-0">
                        <FileText size={13} className="text-[#294269]" />
                      </div>
                      <span className="text-[#26292E] font-medium">{doc.name}</span>
                    </div>
                  </td>
                  <td className="py-2.5 px-3 text-gray-500">{doc.tipo}</td>
                  <td className="py-2.5 px-3 text-gray-500">{doc.size}</td>
                  <td className="py-2.5 px-3">
                    <div className="flex items-center justify-center gap-2">
                      <button className="flex items-center gap-1 px-2.5 py-1 border border-gray-300 rounded-[4px] text-[11px] text-[#26292E] hover:bg-gray-100 transition-colors font-['Roboto',sans-serif]">
                        <svg className="size-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                        </svg>
                        Visualizar
                      </button>
                      <button className="flex items-center gap-1 px-2.5 py-1 bg-[#294269] text-white rounded-[4px] text-[11px] hover:bg-[#3F5578] transition-colors font-['Roboto',sans-serif]">
                        <Download size={11} />
                        Descargar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

// ── Sección: Herramientas (contenedor para planning tab) ──
function HerramientasSection({ herramientas }: { herramientas: Herramienta[] }) {
  const hasExpresion = herramientas.includes('Expresión de interés');
  return (
    <div className="space-y-3">
      <SectionACF />
      {hasExpresion && <SectionExpresionInteres />}
      <SectionDocumentosAdjuntos />
    </div>
  );
}

// Historial panel
const historialMock = [
  { date: '10/06/2026', version: 'v3', event: 'Documento de ejecución actualizado', user: 'Sistema SEACE' },
  { date: '05/05/2026', version: 'v2', event: 'Buena pro otorgada — INVERSIONES LAS TORRES', user: 'Comité de Selección' },
  { date: '15/04/2026', version: 'v1', event: 'Convocatoria publicada en SEACE', user: 'Entidad Convocante' },
  { date: '20/03/2026', version: 'v0', event: 'Actuaciones preparatorias registradas', user: 'Entidad Convocante' },
];

function HistorialPanel({ onClose }: { onClose: () => void }) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  return (
    <div className="w-72 shrink-0 border-l border-gray-200 bg-gray-50 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-[#294269] text-white">
        <div className="flex items-center gap-2">
          <History size={16} />
          <span className="text-[13px] font-semibold font-['Roboto',sans-serif]">Historial global</span>
        </div>
        <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
          <ChevronDown size={16} className="rotate-90" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-3">
        <p className="text-[11px] text-gray-500 mb-3 font-['Roboto',sans-serif]">
          Versiones y documentos del procedimiento. Haz clic en una fecha para ver el estado en ese momento.
        </p>
        <div className="space-y-2">
          {historialMock.map((h, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDate(selectedDate === h.date ? null : h.date)}
              className={`w-full text-left rounded-lg p-3 border transition-all ${
                selectedDate === h.date
                  ? 'border-[#63c9c4] bg-[#63c9c4]/5'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className={`text-[11px] font-semibold font-['Roboto',sans-serif] ${selectedDate === h.date ? 'text-[#294269]' : 'text-gray-400'}`}>
                  {h.date}
                </span>
                <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-['Roboto',sans-serif]">
                  {h.version}
                </span>
              </div>
              <p className="text-[12px] text-[#26292E] font-['Roboto',sans-serif] leading-tight">{h.event}</p>
              <p className="text-[11px] text-gray-400 mt-0.5 font-['Roboto',sans-serif]">{h.user}</p>
            </button>
          ))}
        </div>
        {selectedDate && (
          <div className="mt-3 p-3 bg-[#63c9c4]/5 border border-[#63c9c4]/20 rounded-lg">
            <p className="text-[11px] font-semibold text-[#294269] mb-1 font-['Roboto',sans-serif]">
              Estado al {selectedDate}
            </p>
            <p className="text-[12px] text-gray-600 font-['Roboto',sans-serif]">
              Visualización del proceso en la fecha seleccionada. Los documentos corresponden a la versión vigente en esa fecha.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Procesos derivados mock ──
const procesosDerivados = [
  { id: 'p1', code: 'LP-1234567880', lot: 'Lote 1: Sierra Norte',  description: 'Adquisición y transporte de hojuelas precocidas (Lote 1)',  status: 'Adjudicado',             amount: 412200.00,  statusCls: 'bg-green-100 text-green-700' },
  { id: 'p2', code: 'LP-1234568888', lot: 'Lote 2: Sierra Centro', description: 'Adquisición y transporte de hojuelas precocidas (Lote 2)',  status: 'En proceso de selección', amount: 389200.00,  statusCls: 'bg-amber-100 text-amber-700' },
  { id: 'p3', code: 'LP-1234564012', lot: 'Lote 3',                description: 'Adquisición de leche entera en polvo',                     status: 'Desierto',                amount: 256000.00,  statusCls: 'bg-[#63c9c4]/10 text-[#294269]' },
  { id: 'p4', code: 'LP-12345780144',lot: 'Lote 4',                description: 'Adquisición de azúcar y soya',                             status: 'Convocatoria programada', amount: 198750.50,  statusCls: 'bg-gray-100 text-gray-600' },
];

export function DetailPage({ id, stage, navigate }: DetailPageProps) {
  const [activeTab, setActiveTab] = useState<'planning' | 'selection' | 'fup'>(stage);
  const [showHistorial, setShowHistorial] = useState(false);
  const [selectedProcessId, setSelectedProcessId] = useState('p2');

  const detailData = {
    id,
    code: 'LP-1234567890',
    entity: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA',
    description: 'ADQUISICIÓN DE HOJUELAS PRECOCIDAS DE AVENA, QUINUA, KIWICHA, MACA, SOYA, LECHE ENTERA EN POLVO Y AZÚCAR',
    location: 'LORETO/UCAYALI/CONTAMANA',
    publicationDate: '12/04/2025',
    herramientas: ['ACF', 'Expresión de interés'] as Herramienta[],
    completedStages: ['planning', 'selection', 'fup'],
    stages: {
      planning: {
        available: true,
        date: '12/04/2025',
        data: [
          { label: 'Entidad Convocante (RUC)', value: '20601958064', icon: Building2 },
          { label: 'Entidad Convocante', value: 'GOBIERNO REGIONAL DE LORETO UNIDAD EJECUTORA SALUD UCAYALI', icon: Building2 },
          { label: 'Descripción', value: 'ADQUISICIÓN DE HOJUELAS PRECOCIDAS DE AVENA, QUINUA, KIWICHA', icon: FileText },
          { label: 'Lugar de ejecución', value: 'LORETO/UCAYALI/CONTAMANA', icon: Building2 },
          { label: 'Año', value: '2025', icon: Calendar },
        ],
      },
      selection: {
        available: true,
        date: '15/05/2025',
        substages: [
          { name: 'Convocatoria', date: '15/05/2025', status: 'Completado', data: [
            { label: 'Proceso de selección', value: 'LP-001-2025', icon: FileText },
            { label: 'Monto referencial', value: 'S/ 150,000.00', icon: FileText },
            { label: 'Fecha de convocatoria', value: '15/05/2025', icon: Calendar },
          ]},
          { name: 'Participantes', date: '20/05/2025', status: 'Completado', data: [
            { label: 'Participantes registrados', value: '5 empresas', icon: Building2 },
            { label: 'Fecha de registro', value: '20/05/2025', icon: Calendar },
          ]},
          { name: 'Pliego de absolución', date: '25/05/2025', status: 'Completado', data: [
            { label: 'Consultas recibidas', value: '12 consultas', icon: FileText },
            { label: 'Fecha de absolución', value: '25/05/2025', icon: Calendar },
          ]},
          { name: 'Resultados de evaluación', date: '05/06/2025', status: 'Completado', data: [
            { label: 'Evaluación técnica', value: 'Completada', icon: FileText },
            { label: 'Evaluación económica', value: 'Completada', icon: FileText },
          ]},
          { name: 'Buena pro', date: '10/06/2025', status: 'Completado', data: [
            { label: 'Ganador', value: 'INVERSIONES Y PROYECTOS LAS TORRES', icon: Building2 },
            { label: 'Monto adjudicado', value: 'S/ 148,500.00', icon: FileText },
            { label: 'Fecha', value: '10/06/2025', icon: Calendar },
          ]},
        ],
        data: [
          { label: 'Proceso de selección', value: 'LP-001-2025', icon: FileText },
          { label: 'Monto referencial', value: 'S/ 150,000.00', icon: FileText },
          { label: 'Ganador', value: 'INVERSIONES Y PROYECTOS LAS TORRES', icon: Building2 },
        ],
      },
      fup: {
        available: true,
        date: '20/06/2025',
        data: [
          { label: 'Número FUP', value: 'FUP-2025-001234', icon: FileText },
          { label: 'Estado', value: 'Aprobado', icon: FileText },
          { label: 'Fecha de aprobación', value: '20/06/2025', icon: Calendar },
        ],
      },
    },
  };

  const tabs = [
    { id: 'planning', label: 'Actuaciones Preparatorias', short: 'ActPrep', icon: 'campaign' },
    { id: 'selection', label: 'Selección', short: 'Selección', icon: 'rule' },
    { id: 'fup', label: 'Contratos', short: 'EjecContrat', icon: 'widgets' },
  ];

  const fichaTitle: Record<string, string> = {
    planning: 'Ficha de Actuaciones Preparatorias',
    selection: 'Ficha de Selección',
    fup: 'Ficha de Contratos',
  };

  const backPage: Record<string, Page> = {
    planning: { type: 'search-planning' },
    selection: { type: 'search-selection' },
    fup: { type: 'search-fup' },
  };

  const currentStage = detailData.stages[activeTab];
  const selectedProcess = procesosDerivados.find(p => p.id === selectedProcessId) ?? procesosDerivados[0];

  return (
    <div className="flex-1 overflow-auto bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto p-5">
        {/* Back */}
        <button onClick={() => navigate(backPage[stage])}
          className="flex items-center gap-2 text-[#294269] hover:text-[#9a0707] mb-4 font-['Roboto',sans-serif] font-medium text-[13px]">
          <ArrowLeft size={16} />
          Volver a resultados
        </button>

        {/* ── HEADER CARD ── */}
        <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm mb-4">
          <div className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#63c9c4]" />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest font-['Roboto',sans-serif]">
                  Expediente de Contratación – IDEC
                </span>
              </div>
              <div className="flex items-center gap-6 shrink-0">
                <div className="text-right">
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide font-['Roboto',sans-serif]">Publicación</div>
                  <div className="text-[14px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">12/04/2026</div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wide font-['Roboto',sans-serif]">Cierre</div>
                  <div className="text-[14px] font-bold text-[#26292E] font-['Roboto',sans-serif]">30/11/2026</div>
                </div>
              </div>
            </div>
            <div className="text-[24px] font-bold text-[#0056AC] font-['Roboto',sans-serif] mb-0.5">IDEC-2026-001234</div>
            <button className="text-[13px] font-bold text-[#26292E] hover:text-[#63c9c4] transition-colors font-['Roboto',sans-serif] mb-1 text-left">
              {detailData.entity}
            </button>
            <p className="text-[12px] text-gray-500 font-['Roboto',sans-serif] max-w-3xl leading-relaxed">
              {detailData.description}
            </p>
          </div>
          {/* KPI bar */}
          <div className="border-t border-gray-100 grid grid-cols-4 divide-x divide-gray-100">
            {[
              { icon: GitBranch,   value: '4',               label: 'Procesos derivados',      color: 'text-[#26292E]'  },
              { icon: null,        value: 'S/ 1,256,450.50', label: 'Monto referencial total', color: 'text-[#26292E]'  },
              { icon: CheckCircle, value: '1',               label: 'Adjudicados',             color: 'text-green-600'  },
              { icon: Clock,       value: '2',               label: 'En curso',                color: 'text-amber-500'  },
            ].map((kpi, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3.5">
                {kpi.icon
                  ? <kpi.icon size={20} className={`${kpi.color} shrink-0`} />
                  : <svg className="size-5 text-[#26292E] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                }
                <div>
                  <div className={`text-[18px] font-bold font-['Roboto',sans-serif] leading-none ${kpi.color}`}>{kpi.value}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wide font-['Roboto',sans-serif] mt-0.5">{kpi.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="flex gap-4 items-start">

          {/* LEFT: Procesos derivados */}
          <div className="w-[255px] shrink-0 bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-[#294269]">
              <GitBranch size={13} className="text-white" />
              <span className="text-[11px] font-bold text-white uppercase tracking-widest font-['Roboto',sans-serif]">Procesos Derivados</span>
              <span className="ml-auto bg-[#e2a615] text-[#26292E] text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {procesosDerivados.length}
              </span>
            </div>
            <div className="divide-y divide-gray-100">
              {procesosDerivados.map(p => (
                <button key={p.id} onClick={() => setSelectedProcessId(p.id)}
                  className={`w-full text-left p-3.5 hover:bg-gray-50 transition-colors ${
                    selectedProcessId === p.id ? 'bg-[#63c9c4]/5 border-l-2 border-[#63c9c4]' : 'border-l-2 border-transparent'
                  }`}
                >
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <span className="text-[11px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">{p.code}</span>
                    <span className={`shrink-0 text-[9px] font-bold px-1.5 py-0.5 rounded-full font-['Roboto',sans-serif] ${p.statusCls}`}>{p.status}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-['Roboto',sans-serif] line-clamp-2 mb-1.5 leading-snug">{p.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-400 font-['Roboto',sans-serif]">{p.lot}</span>
                    <span className="text-[11px] font-semibold text-[#26292E] font-['Roboto',sans-serif]">
                      S/ {p.amount.toLocaleString('es-PE', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${
                      p.status === 'Adjudicado' ? 'bg-green-400' :
                      p.status === 'En proceso de selección' ? 'bg-amber-400' :
                      p.status === 'Desierto' ? 'bg-[#63c9c4]/40' : 'bg-gray-300'
                    }`} style={{ width: `${(p.amount / 450000) * 100}%` }} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Selected process detail */}
          <div className="flex-1 min-w-0 bg-white rounded-[10px] border border-gray-200 shadow-sm overflow-hidden">

            {/* Process header */}
            <div className="px-5 py-4 border-b border-gray-200">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[15px] font-bold text-[#26292E] font-['Roboto',sans-serif] mb-0.5">{selectedProcess.code}</div>
                  <p className="text-[12px] text-gray-500 font-['Roboto',sans-serif] leading-snug">{selectedProcess.description}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full font-['Roboto',sans-serif] ${selectedProcess.statusCls}`}>
                    {selectedProcess.status}
                  </span>
                  <div className="text-right">
                    <div className="text-[10px] text-gray-400 font-['Roboto',sans-serif]">Monto referencial</div>
                    <div className="text-[14px] font-bold text-[#26292E] font-['Roboto',sans-serif]">
                      S/ {selectedProcess.amount.toLocaleString('es-PE', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab navigation */}
            <div className="flex items-center border-b border-gray-200 bg-gray-50/40">
              {tabs.map(tab => {
                const isActive = activeTab === tab.id;
                const iconFill = isActive ? '#63c9c4' : '#9CA3AF';
                return (
                  <button key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'planning' | 'selection' | 'fup')}
                    className={`flex items-center gap-2 px-5 py-3.5 text-[12px] font-semibold font-['Roboto',sans-serif] border-b-2 transition-colors ${
                      isActive ? 'border-[#294269] text-[#294269]' : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <div className="size-4 shrink-0">
                      {tab.icon === 'campaign' && <svg className="size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19"><path d={svgPaths.p26087100} fill={iconFill}/><path clipRule="evenodd" d={svgPaths.p2794ae70} fill={iconFill} fillRule="evenodd"/></svg>}
                      {tab.icon === 'rule' && <svg className="size-full" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p5319ef0} fill={iconFill}/></svg>}
                      {tab.icon === 'widgets' && <svg className="size-full" fill="none" viewBox="0 0 24 24"><path d={svgPaths.p3c36e280} fill={iconFill}/></svg>}
                    </div>
                    {tab.label}
                  </button>
                );
              })}
              <div className="flex-1" />
              <button onClick={() => setShowHistorial(!showHistorial)}
                className={`flex items-center gap-1.5 mr-4 px-3 py-2 rounded-[6px] border text-[12px] font-medium font-['Roboto',sans-serif] transition-all ${
                  showHistorial ? 'bg-[#294269] text-white border-[#294269]' : 'bg-white text-[#26292E] border-gray-200 hover:bg-gray-50'
                }`}
              >
                <History size={13} />
                Historial
              </button>
            </div>

            {/* Tab content */}
            <div className="flex">
              <div className="flex-1 min-w-0 p-5 overflow-auto" style={{ maxHeight: '68vh' }}>
                {!currentStage.available ? (
                  <div className="text-center py-12 text-gray-400">
                    <GitBranch size={36} className="mx-auto mb-3 opacity-30" />
                    <p className="font-['Roboto',sans-serif] text-[13px]">El procedimiento no llegó a esta etapa</p>
                  </div>
                ) : (
                  <>
                    {/* ACTUACIONES PREPARATORIAS */}
                    {activeTab === 'planning' && (
                      <>
                        <div className="mb-4">
                          <h2 className="text-[15px] font-semibold text-[#26292E] font-['Roboto',sans-serif] border-l-4 border-[#63c9c4] pl-3">
                            Ficha de Actuaciones Preparatorias
                          </h2>
                        </div>
                        <Section title="Datos generales — Ficha de Actuaciones Preparatorias" icon={<FileText size={15} className="text-[#26292E]" />}>
                          <DataGrid items={currentStage.data} />
                          <div className="px-5 pb-4 border-t border-gray-100 pt-3">
                            <div className="flex items-start gap-3">
                              <div className="p-1.5 bg-gray-100 rounded shrink-0"><Calendar size={13} className="text-[#26292E]" /></div>
                              <div>
                                <div className="text-[11px] text-gray-500 mb-0.5 font-['Roboto',sans-serif]">Fecha de registro</div>
                                <div className="text-[13px] font-medium text-gray-800 font-['Roboto',sans-serif]">{currentStage.date}</div>
                              </div>
                            </div>
                          </div>
                        </Section>
                        <HerramientasSection herramientas={detailData.herramientas} />
                        <SectionCronogramaActPrep />
                      </>
                    )}

                    {/* SELECCIÓN */}
                    {activeTab === 'selection' && (
                      <>
                        <div className="mb-4">
                          <h2 className="text-[15px] font-semibold text-[#26292E] font-['Roboto',sans-serif] border-l-4 border-[#63c9c4] pl-3">
                            Ficha de Selección
                          </h2>
                        </div>
                        <Section title="Estado del proceso de selección" icon={<FileText size={15} className="text-[#26292E]" />}>
                          <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                              { label: 'Estado',            value: 'En evaluación de propuestas' },
                              { label: 'Monto referencial', value: `S/ ${selectedProcess.amount.toLocaleString('es-PE', { minimumFractionDigits: 2 })}` },
                              { label: 'Fecha de registro', value: '22/06/2026' },
                              { label: 'Proveedor postor',  value: 'Aún no definido' },
                            ].map((f, i) => (
                              <div key={i}>
                                <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5 font-['Roboto',sans-serif]">{f.label}</div>
                                <div className="text-[13px] font-semibold text-[#26292E] font-['Roboto',sans-serif]">{f.value}</div>
                              </div>
                            ))}
                          </div>
                        </Section>
                        {'substages' in currentStage && (
                          <Section title="Etapas del procedimiento" icon={<FileText size={15} className="text-[#26292E]" />}>
                            <div className="p-4 space-y-2">
                              {(currentStage as any).substages.map((sub: any, idx: number) => (
                                <Section key={idx} defaultOpen={false}
                                  title={`${idx + 1}. ${sub.name}`}
                                  icon={<div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#294269] text-white text-[10px] font-bold shrink-0">{idx + 1}</div>}
                                >
                                  <DataGrid items={sub.data} />
                                </Section>
                              ))}
                            </div>
                          </Section>
                        )}
                        <SectionCronogramaSeleccion />
                        <Section title="Documentos adjuntos" icon={<FileText size={15} className="text-[#26292E]" />}>
                          <div className="p-4 space-y-2">
                            {['Bases del proceso.pdf', 'TDR - Términos de referencia.pdf', 'Acta de absolución de consultas.pdf'].map((doc, i) => (
                              <div key={i} className="flex items-center justify-between py-2 px-3 border border-gray-100 rounded-[8px] hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-2">
                                  <FileText size={13} className="text-[#294269] shrink-0" />
                                  <span className="text-[13px] text-[#26292E] font-['Roboto',sans-serif]">{doc}</span>
                                </div>
                                <button className="flex items-center gap-1 text-[12px] text-[#294269] hover:underline font-semibold font-['Roboto',sans-serif]">
                                  <Download size={13} />
                                  Descargar
                                </button>
                              </div>
                            ))}
                          </div>
                        </Section>
                      </>
                    )}

                    {/* CONTRATOS */}
                    {activeTab === 'fup' && (
                      <>
                        <div className="mb-4">
                          <h2 className="text-[15px] font-semibold text-[#26292E] font-['Roboto',sans-serif] border-l-4 border-[#63c9c4] pl-3">
                            Ficha de Contratos
                          </h2>
                        </div>
                        <Section title="Datos generales — Ficha de Contratos" icon={<FileText size={15} className="text-[#26292E]" />}>
                          <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                              { label: 'N° Contrato',          value: '0001-2026-MDY/GM' },
                              { label: 'Estado',               value: 'Vigente' },
                              { label: 'Monto del contrato',   value: `S/ ${selectedProcess.amount.toLocaleString('es-PE', { minimumFractionDigits: 2 })}` },
                              { label: 'Proveedor',            value: 'INVERSIONES Y PROYECTOS LAS TORRES SAC' },
                              { label: 'Fecha de suscripción', value: '01/07/2026' },
                              { label: 'Plazo de ejecución',   value: '90 días calendario' },
                            ].map((f, i) => (
                              <div key={i}>
                                <div className="text-[10px] text-gray-400 uppercase tracking-wide mb-0.5 font-['Roboto',sans-serif]">{f.label}</div>
                                <div className="text-[13px] font-semibold text-[#26292E] font-['Roboto',sans-serif]">{f.value}</div>
                              </div>
                            ))}
                          </div>
                        </Section>
                        <Section title="Documentos adjuntos" icon={<FileText size={15} className="text-[#26292E]" />}>
                          <div className="p-4 space-y-2">
                            {['Contrato de ejecución.pdf', 'Garantía de fiel cumplimiento.pdf'].map((doc, i) => (
                              <div key={i} className="flex items-center justify-between py-2 px-3 border border-gray-100 rounded-[8px] hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-2">
                                  <FileText size={13} className="text-[#294269] shrink-0" />
                                  <span className="text-[13px] text-[#26292E] font-['Roboto',sans-serif]">{doc}</span>
                                </div>
                                <button className="flex items-center gap-1 text-[12px] text-[#294269] hover:underline font-semibold font-['Roboto',sans-serif]">
                                  <Download size={13} />
                                  Descargar
                                </button>
                              </div>
                            ))}
                          </div>
                        </Section>
                      </>
                    )}

                    {/* Ubicación */}
                    <Section title="Ubicación del proyecto" icon={<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#26292E" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 size={13} className="text-gray-500" />
                          <span className="text-[12px] text-gray-700 font-['Roboto',sans-serif]">{detailData.location}</span>
                        </div>
                        <div className="rounded-lg overflow-hidden border border-gray-200">
                          <iframe width="100%" height="200" style={{ border: 0 }} loading="lazy" allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31552.856634531668!2d-74.75!3d-8.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjInNDguMCJTIDc0wrA0NScwMC4wIlc!5e0!3m2!1ses!2spe!4v1234567890"
                          />
                        </div>
                      </div>
                    </Section>
                  </>
                )}
              </div>
              {showHistorial && <HistorialPanel onClose={() => setShowHistorial(false)} />}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#294269] text-white py-4 px-6 text-[12px] font-['Roboto',sans-serif] mt-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <span>Central de consultas: (01) 614-5656 · Opción 7</span>
          <a href="#" className="hover:text-[#e2a615] transition-colors">Formulario de contacto</a>
        </div>
      </footer>
    </div>
  );
}
