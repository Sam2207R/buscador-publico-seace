import { useState } from 'react';
import { ArrowLeft, ChevronDown, Printer, Download, Eye } from 'lucide-react';
import type { Page } from '../App';

interface CdcDetailPageProps {
  id: string;
  navigate: (page: Page) => void;
}

/* ─── Data ─── */
const CRONOGRAMA = [
  { etapa: 'Publicación de condiciones de contratación',              inicio: '30/12/2025', fin: '30/12/2025', est: 'done' },
  { etapa: 'Registro de participantes (Electrónico)',                 inicio: '31/12/2025', fin: '02/02/2026', est: 'done' },
  { etapa: 'Resultados de participantes',                             inicio: '03/02/2026', fin: '05/02/2026', est: 'done' },
  { etapa: 'Instrucciones de compromiso',                             inicio: '06/02/2026', fin: '06/02/2026', est: 'done' },
  { etapa: 'Presentación de compromiso (Electrónico)',                inicio: '09/02/2026', fin: '09/02/2026', est: 'done' },
  { etapa: 'Resultados de compromiso',                                inicio: '12/02/2026', fin: '12/02/2026', est: 'done' },
  { etapa: 'Instrucciones de precalificación',                        inicio: '13/02/2026', fin: '13/02/2026', est: 'done' },
  { etapa: 'Formulación de consultas (Electrónico)',                  inicio: '16/02/2026', fin: '17/02/2026', est: 'done' },
  { etapa: 'Absolución de consultas (Electrónico)',                   inicio: '18/02/2026', fin: '20/02/2026', est: 'done' },
  { etapa: 'Presentación para la precalificación (Electrónico)',      inicio: '23/02/2026', fin: '02/03/2026', est: 'active' },
  { etapa: 'Resultados de precalificación',                           inicio: '19/03/2026', fin: '24/03/2026', est: 'pending' },
];

const DOCUMENTOS = [
  { nro: 1,  act: 'Publicación de condiciones de contratación', fecha: '30/12/2025 16:10:43' },
  { nro: 2,  act: 'Resultados de participantes',                fecha: '05/02/2026 17:34:11' },
  { nro: 3,  act: 'Instrucciones de compromiso',                fecha: '06/02/2026 16:58:15' },
  { nro: 4,  act: 'Resultados de compromiso',                   fecha: '12/02/2026 17:39:12' },
  { nro: 5,  act: 'Instrucciones de precalificación',           fecha: '13/02/2026 17:37:26' },
  { nro: 6,  act: 'Formulación de consultas',                   fecha: '16/02/2026 09:00:00' },
  { nro: 7,  act: 'Absolución de consultas',                    fecha: '18/02/2026 14:20:00' },
  { nro: 8,  act: 'Instrucciones presentación precalificación', fecha: '20/02/2026 11:00:00' },
  { nro: 9,  act: 'Presentación de propuestas - Listado',       fecha: '23/02/2026 08:00:00' },
  { nro: 10, act: 'Extensión de plazo de presentación',         fecha: '25/02/2026 10:30:00' },
];

const ACCIONES = [
  { nro: 1, accion: 'Publicado',             fecha: '30/12/2025 16:07:09', motivo: 'Publicación de condiciones de contratación' },
  { nro: 2, accion: 'Postergación',          fecha: '06/03/2026 12:10:16', motivo: 'SE POSTERGA LA PRESENTE ETAPA, YA QUE EL AGENTE DE SELECCION CONTINUA CON LA EVALUACION DE LAS PROPUESTAS PRESENTADAS.' },
  { nro: 3, accion: 'Postergación',          fecha: '10/03/2026 17:35:02', motivo: 'LA PRESENTE ETAPA SE POSTERGA, YA QUE EL AGENTE DE SELECCION CONTINUA CON LA EVALUACION DE LOS DOCUMENTOS PRESENTADOS EN LA PLATAFORMA DEL SEACE.' },
  { nro: 4, accion: 'Postergación',          fecha: '11/03/2026 18:56:33', motivo: 'SE POSTERGA LA PRESENTE ETAPA, CONSIDERANDO QUE EL AGENTE DE SELECCION CONTINUA CON LA EVALUACION DE LA DOCUMENTACION PRESENTADA.' },
  { nro: 5, accion: 'Postergación',          fecha: '13/03/2026 12:38:27', motivo: 'SE POSTERGA LA ETAPA DE RESULTADO DE PRECALIFICACION, YA QUE EL AGENTE DE SELECCION SE ENCUENTRA EVALUANDO LAS PROPUESTAS PRESENTADAS.' },
  { nro: 6, accion: 'Postergación',          fecha: '17/03/2026 16:59:48', motivo: 'SE POSTERGA LA PRESENTE ETAPA, YA QUE SE CONTINUA CON LA EVALUACION DE LOS DOCUMENTOS PRESENTADOS.' },
  { nro: 7, accion: 'Postergación',          fecha: '19/03/2026 08:42:25', motivo: 'SE POSTERGA LA PRESENTE ESTAPA CONSIDERANDO QUE EL AGENTE DE SELECCION CONTINUA CON LA EVALUACION DE LOS DOCUMENTOS PRESENTADOS.' },
  { nro: 8, accion: 'Postergación',          fecha: '23/03/2026 18:26:21', motivo: 'SE POSTERGA LA PRESENTE ETAPA, CONSIDERANDO QUE EL AGENTE DE SELECCION CONTINUA CON LA REVISION Y EVALUACION DE LOS DOCUMENTOS PRESENTADOS EN ESTA ETAPA.' },
  { nro: 9, accion: 'Continúa en selección', fecha: '24/03/2026 18:39:31', motivo: "Se genera el cambio de estado de 'Publicado' a 'Continúa En Selección' en la actividad 'Resultados de precalificación'." },
];

/* ─── Sub-components ─── */
function AccordionSection({ title, icon, open: initOpen, children }: {
  title: string; icon: React.ReactNode; open?: boolean; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(initOpen ?? true);
  return (
    <div className={`border-[1.5px] border-[#DEE3EA] rounded-[8px] mb-2 overflow-hidden bg-white shadow-[0_1px_3px_rgba(0,0,0,.08)] ${open ? 'open' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${open ? 'bg-[#edf0f4]' : 'bg-white hover:bg-[#edf0f4]'}`}
      >
        <span className="flex items-center gap-2 text-[12.5px] font-bold text-[#0056AC]">
          {icon}
          {title}
        </span>
        <ChevronDown size={13} className={`text-[#294269] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div>{children}</div>}
    </div>
  );
}

function Field({ label, value, mono, red, full, link }: {
  label: string; value: React.ReactNode; mono?: boolean; red?: boolean; full?: boolean; link?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-0.5 py-1.5 border-b border-[#EDF0F4] ${full ? 'col-span-full' : ''}`}>
      <span className="text-[10px] font-bold text-[#979797] uppercase tracking-[.03em]">{label}</span>
      <span className={`text-[12.5px] font-medium leading-snug ${
        mono ? "font-['IBM_Plex_Mono',monospace] font-bold" : ''
      } ${red ? 'text-[#294269] text-[15px]' : 'text-[#26292E]'} ${link ? 'text-[#0056AC] underline cursor-pointer' : ''}`}>
        {value}
      </span>
    </div>
  );
}

function SectionDivider({ n, label, id }: { n: number; label: string; id: string }) {
  return (
    <div className="flex items-center gap-3 mt-5 mb-3 scroll-mt-28" id={id}>
      <div className="w-5 h-5 rounded-full bg-[#63c9c4] flex items-center justify-center shrink-0">
        <span className="text-[10px] font-extrabold text-white">{n}</span>
      </div>
      <span className="text-[10px] font-extrabold text-[#979797] uppercase tracking-[.07em]">{label}</span>
      <div className="flex-1 h-px bg-[#DEE3EA]" />
    </div>
  );
}

function accionBadgeCls(accion: string) {
  if (accion === 'Publicado') return 'bg-[#dcfce7] text-[#166534]';
  if (accion === 'Continúa en selección') return 'bg-[#E1F0FF] text-[#0056AC]';
  return 'bg-[#FFF3EA] text-[#D75600]';
}

function estadoCls(est: string) {
  if (est === 'done') return 'bg-[#126B49]';
  if (est === 'active') return 'bg-[#63c9c4]';
  return 'bg-[#C5CDDA]';
}

/* ─── Main page ─── */
export function CdcDetailPage({ navigate }: CdcDetailPageProps) {
  const [activeSection, setActiveSection] = useState('sec-info');
  const [docPage, setDocPage] = useState(1);
  const DOC_PS = 5;
  const docTotal = Math.ceil(DOCUMENTOS.length / DOC_PS);
  const docSlice = DOCUMENTOS.slice((docPage - 1) * DOC_PS, docPage * DOC_PS);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navItems = [
    { id: 'sec-info',      label: '1 · Información general' },
    { id: 'sec-crono',     label: '2 · Cronograma' },
    { id: 'sec-docs',      label: '3 · Documentos' },
    { id: 'sec-acciones',  label: '4 · Acciones CDC' },
  ];

  return (
    <div className="flex flex-col h-full overflow-auto bg-[#F4F4F4] font-['Roboto',sans-serif]">

      {/* ── Ficha header ── */}
      <div className="bg-white border-b-[3px] border-[#63c9c4] px-6 py-4">
        {/* Back */}
        <button
          onClick={() => navigate({ type: 'search-all', query: '' })}
          className="flex items-center gap-1.5 text-[#294269] hover:text-[#9a0707] text-[12px] font-bold mb-3 transition-colors"
        >
          <ArrowLeft size={13} />
          Volver a Condiciones de Contratación
        </button>

        {/* Tag */}
        <div className="inline-flex items-center gap-1.5 bg-[#edf0f4] text-[#294269] border border-[#63c9c4]/22 rounded-full text-[10px] font-bold px-3 py-1 mb-3">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
          </svg>
          Condiciones de Contratación · CDC · Actuaciones Preparatorias
        </div>

        <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
          <div className="flex-1 min-w-0">
            <h1 className="text-[22px] font-extrabold text-[#26292E] font-['IBM_Plex_Mono',monospace] leading-tight mb-1">
              CDC-212025-ANI
            </h1>
            <p className="text-[13px] font-bold text-[#0056AC] mb-1">AUTORIDAD NACIONAL DE INFRAESTRUCTURA</p>
            <p className="text-[12.5px] text-[#515458] leading-snug max-w-2xl">
              DISEÑO Y CONSTRUCCIÓN DEL PROYECTO DE INVERSION PUBLICA: MEJORAMIENTO Y AMPLIACIÓN DEL SERVICIO DE ATENCIÓN DE SALUD BÁSICOS EN AGALLPAMPA, DISTRITO DE AGALLPAMPA DE LA PROVINCIA DE OTUZCO DEL DEPARTAMENTO DE LA LIBERTAD, CUI: 2643849.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className="inline-flex items-center px-3 py-1 rounded-[4px] text-[11px] font-bold bg-[#dcfce7] text-[#166534]">Obra</span>
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#294269] text-white rounded-[4px] text-[12px] font-bold hover:bg-[#3C3E43] transition-colors">
                <Printer size={11} /> Imprimir
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border-[1.5px] border-[#0056AC] text-[#0056AC] rounded-[4px] text-[12px] font-bold hover:bg-[#E1F0FF] transition-colors">
                <Download size={11} /> Descargar
              </button>
            </div>
            <span className="text-[11px] text-[#979797]">N° 212025</span>
          </div>
        </div>

        {/* KPI strip */}
        <div className="flex items-stretch border-t-[1.5px] border-[#DEE3EA] overflow-x-auto -mx-6 px-6">
          {[
            { l: 'N° Proceso',            v: '212025',                  mono: true, red: true },
            { l: 'Tipo procedimiento',     v: 'Contratos Estandarizados', mono: false },
            { l: 'Objeto',                 v: 'Obra',                    mono: false },
            { l: 'Publicación',            v: '30/12/2025 16:10:38',     mono: false },
            { l: 'Acciones registradas',   v: '9',                       mono: true },
            { l: 'Documentos',             v: '10',                      mono: true },
            { l: 'Normativa',              v: 'Ley N° 32069',            mono: false },
          ].map((k, i, arr) => (
            <div key={k.l} className={`flex-1 min-w-[110px] py-2 px-3 ${i < arr.length - 1 ? 'border-r border-[#DEE3EA]' : ''} flex flex-col gap-0.5`}>
              <span className="text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-[.03em]">{k.l}</span>
              <span className={`text-[13px] font-extrabold leading-tight ${k.mono ? "font-['IBM_Plex_Mono',monospace]" : 'font-bold text-[11px]'} ${(k as any).red ? 'text-[#294269]' : 'text-[#26292E]'}`}>
                {k.v}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Trazabilidad band ── */}
      <div className="bg-[#EDF0F4] border-b border-[#DEE3EA] px-6 py-2 flex items-center gap-3 flex-wrap">
        <span className="text-[9.5px] font-extrabold text-[#8A94A2] uppercase tracking-[.04em]">Trazabilidad:</span>
        <div className="flex items-center gap-1">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9.5px] font-bold bg-[#63c9c4] text-white">
            <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 11l3 3L22 4"/>
            </svg>
            Act. Preparatorias — CDC
          </span>
          <span className="text-[#C5CDDA] text-[10px] mx-1">›</span>
          <span className="px-2.5 py-1 rounded-[4px] text-[9.5px] font-bold bg-[#EDF0F4] text-[#8A94A2] border border-[#DEE3EA]">Selección</span>
          <span className="text-[#C5CDDA] text-[10px] mx-1">›</span>
          <span className="px-2.5 py-1 rounded-[4px] text-[9.5px] font-bold bg-[#EDF0F4] text-[#8A94A2] border border-[#DEE3EA]">Contratos</span>
        </div>
        <span className="ml-auto text-[11px] text-[#979797]">Versión SEACE: 4.0</span>
      </div>

      {/* ── Layout ── */}
      <div className="flex-1 max-w-[1160px] w-full mx-auto grid grid-cols-[210px_1fr] gap-5 px-6 py-5 items-start">

        {/* ── Left rail ── */}
        <aside className="sticky top-4 bg-white border-[1.5px] border-[#DEE3EA] rounded-[8px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,.08)]">
          <div className="bg-[#294269] text-white px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[.05em]">Secciones</div>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full flex items-center gap-2 px-3.5 py-2 text-[11.5px] font-medium text-left border-b border-[#EDF0F4] last:border-0 transition-all ${
                activeSection === item.id
                  ? 'bg-[#edf0f4] text-[#294269] font-bold border-l-[3px] border-l-[#63c9c4] pl-[11px]'
                  : 'text-[#3C3E43] hover:bg-[#edf0f4] hover:text-[#63c9c4]'
              }`}
            >
              <div className={`w-2 h-2 rounded-full shrink-0 ${activeSection === item.id ? 'bg-[#63c9c4]' : 'bg-[#DEE3EA]'}`} />
              {item.label}
            </button>
          ))}
        </aside>

        {/* ── Main content ── */}
        <div className="flex flex-col min-w-0">

          {/* ══ SECCIÓN 1: INFO GENERAL ══ */}
          <SectionDivider n={1} label="Información general" id="sec-info" />

          <AccordionSection
            title="1.1 Información general del proceso"
            icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4z"/></svg>}
          >
            <div className="p-4 grid grid-cols-2 gap-x-6">
              <Field label="Número" value="212025" mono red />
              <Field label="Tipo de Procedimiento" value="Contratos Estandarizados" />
              <Field label="Objeto" value="Obra" />
              <Field label="Fecha de Publicación" value="30/12/2025 16:10:38" mono />
              <Field label="Descripción del Objeto de Contratación" full
                value="DISEÑO Y CONSTRUCCIÓN DEL PROYECTO DE INVERSION PUBLICA: MEJORAMIENTO Y AMPLIACIÓN DEL SERVICIO DE ATENCIÓN DE SALUD BÁSICOS EN AGALLPAMPA, DISTRITO DE AGALLPAMPA DE LA PROVINCIA DE OTUZCO DEL DEPARTAMENTO DE LA LIBERTAD, CUI: 2643849." />
              <Field label="Normativa aplicable" full value="Ley N° 32069 — Ley General de Contrataciones Públicas" />
            </div>
          </AccordionSection>

          <AccordionSection
            title="1.2 Información general de la entidad"
            icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>}
          >
            <div className="p-4">
              <div className="bg-[#F6F9FC] border-[1.5px] border-[#DEE3EA] rounded-[8px] p-3.5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-[6px] bg-[#edf0f4] flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BF0909" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>
                  </div>
                  <div>
                    <p className="text-[14px] font-extrabold text-[#294269]">AUTORIDAD NACIONAL DE INFRAESTRUCTURA</p>
                    <p className="text-[11px] text-[#979797] mt-0.5">Organismo Público Ejecutor · Sector Vivienda</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-6">
                  <Field label="Dirección legal" value="CALLE SCHELL 310 MIRAFLORES LIMA LIMA" full />
                  <Field label="Página Web" value="HTTPS://WWW.GOB.PE/ANIN" link />
                  <Field label="Teléfono de la Entidad" value="975417375" mono />
                </div>
              </div>
            </div>
          </AccordionSection>

          {/* ══ SECCIÓN 2: CRONOGRAMA ══ */}
          <SectionDivider n={2} label="Cronograma" id="sec-crono" />

          <AccordionSection
            title="2.1 Etapas del proceso"
            icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>}
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#63c9c4]">
                    <th className="py-2 px-3 text-[11px] font-bold text-white text-center w-10"></th>
                    <th className="py-2 px-3 text-[11px] font-bold text-white text-left">Etapa</th>
                    <th className="py-2 px-3 text-[11px] font-bold text-white text-center min-w-[105px]">Fecha Inicio</th>
                    <th className="py-2 px-3 text-[11px] font-bold text-white text-center min-w-[105px]">Fecha Fin</th>
                  </tr>
                </thead>
                <tbody>
                  {CRONOGRAMA.map((c, i) => (
                    <tr key={i} className={c.est === 'active' ? 'bg-[#edf0f4]' : i % 2 === 1 ? 'bg-[#F6F9FC]' : 'bg-white'}>
                      <td className="py-2 px-3 text-center border-b border-[#EDF0F4]">
                        <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-extrabold text-white ${estadoCls(c.est)}`}>
                          {c.est === 'done' ? '✓' : i + 1}
                        </span>
                      </td>
                      <td className={`py-2 px-3 border-b border-[#EDF0F4] text-[12px] ${c.est === 'active' ? 'font-bold text-[#0056AC]' : 'text-[#3C3E43]'}`}>
                        {c.etapa}
                      </td>
                      <td className="py-2 px-3 border-b border-[#EDF0F4] text-[11.5px] text-[#0056AC] font-bold text-center font-['IBM_Plex_Mono',monospace] whitespace-nowrap">
                        {c.inicio}
                      </td>
                      <td className="py-2 px-3 border-b border-[#EDF0F4] text-[11.5px] text-[#0056AC] font-bold text-center font-['IBM_Plex_Mono',monospace] whitespace-nowrap">
                        {c.fin}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AccordionSection>

          {/* ══ SECCIÓN 3: DOCUMENTOS ══ */}
          <SectionDivider n={3} label="Documentos" id="sec-docs" />

          <AccordionSection
            title="3.1 Lista de Documentos"
            icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>}
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#294269]">
                    <th className="py-2 px-3 text-[11px] font-bold text-white text-center w-11">Nro.</th>
                    <th className="py-2 px-3 text-[11px] font-bold text-white text-left">Nombre de la actividad</th>
                    <th className="py-2 px-3 text-[11px] font-bold text-white text-center w-44">Fecha y Hora de Publicación</th>
                    <th className="py-2 px-3 text-[11px] font-bold text-white text-center w-16">Archivo</th>
                  </tr>
                </thead>
                <tbody>
                  {docSlice.map((d, i) => (
                    <tr key={d.nro} className={i % 2 === 1 ? 'bg-[#F6F9FC]' : 'bg-white'}>
                      <td className="py-2 px-3 border-b border-[#EDF0F4] text-[12px] font-bold text-[#0056AC] text-center">{d.nro}</td>
                      <td className="py-2 px-3 border-b border-[#EDF0F4]">
                        <span className="text-[12px] text-[#0056AC] font-bold underline cursor-pointer hover:text-[#184397]">{d.act}</span>
                      </td>
                      <td className="py-2 px-3 border-b border-[#EDF0F4] text-[11px] text-[#515458] font-['IBM_Plex_Mono',monospace] text-center">{d.fecha}</td>
                      <td className="py-2 px-3 border-b border-[#EDF0F4] text-center">
                        <button className="w-7 h-7 border-[1.5px] border-[#0056AC] rounded-[4px] bg-white flex items-center justify-center text-[#0056AC] hover:bg-[#0056AC] hover:text-white transition-colors mx-auto">
                          <Eye size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Paginador docs */}
            <div className="bg-[#63c9c4] px-3 py-1.5 flex items-center justify-center gap-2 flex-wrap">
              <span className="text-[11px] text-white">({docPage} of {docTotal})</span>
              <button onClick={() => setDocPage(1)} className="w-[22px] h-[22px] border border-white/50 rounded-[4px] text-white text-[11px] hover:bg-white/20 flex items-center justify-center">|«</button>
              <button onClick={() => setDocPage(Math.max(1, docPage - 1))} className="w-[22px] h-[22px] border border-white/50 rounded-[4px] text-white text-[11px] hover:bg-white/20 flex items-center justify-center">«</button>
              {Array.from({ length: docTotal }, (_, i) => i + 1).map(pg => (
                <button key={pg} onClick={() => setDocPage(pg)}
                  className={`w-[22px] h-[22px] border border-white/50 rounded-[4px] text-white text-[11px] hover:bg-white/20 flex items-center justify-center ${pg === docPage ? 'bg-white/30 font-bold' : ''}`}>
                  {pg}
                </button>
              ))}
              <button onClick={() => setDocPage(Math.min(docTotal, docPage + 1))} className="w-[22px] h-[22px] border border-white/50 rounded-[4px] text-white text-[11px] hover:bg-white/20 flex items-center justify-center">»</button>
              <button onClick={() => setDocPage(docTotal)} className="w-[22px] h-[22px] border border-white/50 rounded-[4px] text-white text-[11px] hover:bg-white/20 flex items-center justify-center">»|</button>
            </div>
          </AccordionSection>

          {/* ══ SECCIÓN 4: ACCIONES CDC ══ */}
          <SectionDivider n={4} label="Acciones de Condiciones de Contratación" id="sec-acciones" />

          <AccordionSection
            title="4.1 Listado de acciones"
            icon={<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
          >
            {/* Cabecera resumen */}
            <div className="px-4 py-3 bg-[#F6F9FC] border-b border-[#DEE3EA] grid grid-cols-2 gap-x-6">
              <Field label="Entidad convocante" value={<span className="font-bold text-[#0056AC]">AUTORIDAD NACIONAL DE INFRAESTRUCTURA</span>} />
              <Field label="Número" value="212025" mono red />
              <Field label="Tipo de Procedimiento" value="Contratos Estandarizados" />
              <Field label="Objeto" value="Obra" />
              <Field label="Fecha de Publicación" value="30/12/2025 16:10:38" mono />
              <Field label="Descripción del Objeto" full
                value="DISEÑO Y CONSTRUCCIÓN DEL PROYECTO DE INVERSION PUBLICA: MEJORAMIENTO Y AMPLIACIÓN DEL SERVICIO DE ATENCIÓN DE SALUD BÁSICOS EN AGALLPAMPA, DISTRITO DE AGALLPAMPA DE LA PROVINCIA DE OTUZCO DEL DEPARTAMENTO DE LA LIBERTAD, CUI: 2643849." />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#63c9c4]">
                    <th className="py-2 px-3 text-[11px] font-bold text-white text-center w-11">Nro.</th>
                    <th className="py-2 px-3 text-[11px] font-bold text-white text-left w-36">Acción</th>
                    <th className="py-2 px-3 text-[11px] font-bold text-white text-center min-w-[160px]">Fecha y hora de publicación</th>
                    <th className="py-2 px-3 text-[11px] font-bold text-white text-left">Motivo de la acción</th>
                    <th className="py-2 px-3 text-[11px] font-bold text-white text-center w-16">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {ACCIONES.map((a, i) => (
                    <tr key={a.nro} className={i % 2 === 1 ? 'bg-[#F6F9FC]' : 'bg-white'}>
                      <td className="py-2 px-3 border-b border-[#EDF0F4] text-[12px] font-bold text-[#0056AC] text-center">{a.nro}</td>
                      <td className="py-2 px-3 border-b border-[#EDF0F4]">
                        <span className={`inline-flex px-2.5 py-1 rounded-[4px] text-[10.5px] font-bold ${accionBadgeCls(a.accion)}`}>
                          {a.accion}
                        </span>
                      </td>
                      <td className="py-2 px-3 border-b border-[#EDF0F4] text-[11px] text-[#515458] font-['IBM_Plex_Mono',monospace] text-center whitespace-nowrap">{a.fecha}</td>
                      <td className="py-2 px-3 border-b border-[#EDF0F4] text-[11.5px] text-[#3C3E43] leading-snug">{a.motivo}</td>
                      <td className="py-2 px-3 border-b border-[#EDF0F4] text-center">
                        <button className="w-7 h-7 border-[1.5px] border-[#0056AC] rounded-[4px] bg-white flex items-center justify-center text-[#0056AC] hover:bg-[#0056AC] hover:text-white transition-colors mx-auto">
                          <Eye size={13} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Paginador acciones */}
            <div className="bg-[#63c9c4] px-3 py-1.5 flex items-center justify-center gap-2">
              <span className="text-[11px] text-white">[ Mostrando de 1 a 9 del total 9 · Página: 1/1 ]</span>
              {['|«', '«', '1', '»', '»|'].map((b, i) => (
                <button key={i} className={`w-[22px] h-[22px] border border-white/50 rounded-[4px] text-white text-[11px] hover:bg-white/20 flex items-center justify-center ${b === '1' ? 'bg-white/30 font-bold' : ''}`}>
                  {b}
                </button>
              ))}
            </div>
          </AccordionSection>

          {/* ── Footer note ── */}
          <div className="flex items-center gap-2 px-3 py-2.5 bg-[#F0FDF4] border border-[#bbf7d0] rounded-[4px] mt-3">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#126B49" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span className="text-[12px] text-[#126B49]"><strong>SEACE 4.0</strong> · Estándar OCDS · Ley N° 32069 — Ley General de Contrataciones Públicas</span>
          </div>

          <div className="flex gap-2 mt-4 mb-2">
            <button
              onClick={() => navigate({ type: 'search-all', query: '' })}
              className="flex items-center gap-1.5 px-3 py-2 bg-[#294269] text-white rounded-[4px] text-[12.5px] font-bold hover:bg-[#3F5578] transition-colors"
            >
              <ArrowLeft size={12} /> Volver a lista de CDC
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 bg-white border-[1.5px] border-[#0056AC] text-[#0056AC] rounded-[4px] text-[12.5px] font-bold hover:bg-[#E1F0FF] transition-colors">
              <Download size={12} /> Descargar ficha completa
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
