import { useState } from 'react';
import { Download, Share2, ChevronDown, ChevronUp, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import type { Page } from '../App';

interface ContratoDetailPageProps {
  id: string;
  navigate: (page: Page) => void;
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2.5 my-6">
      <span className="flex-1 h-px bg-[#E8E8E8]" />
      <span className="text-[10.5px] font-bold text-[#979797] uppercase tracking-[.06em] whitespace-nowrap">{label}</span>
      <span className="flex-1 h-px bg-[#E8E8E8]" />
    </div>
  );
}

function Accordion({ title, badge, badgeRed, defaultOpen, children }: {
  title: React.ReactNode; badge?: string; badgeRed?: boolean; defaultOpen?: boolean; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  return (
    <div className={`border-[1.5px] rounded-[8px] mb-2 overflow-hidden bg-white ${open ? 'border-[#E8E8E8]' : 'border-[#E8E8E8]'}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${open ? 'bg-[#fde8e8] border-b border-[rgba(192,40,42,.12)]' : 'bg-white hover:bg-[#fde8e8]'}`}
      >
        <span className="text-[12.5px] font-bold text-[#C0282A] flex items-center gap-2">
          {title}
          {badge && <span className={`text-[9.5px] font-bold px-1.5 py-0.5 rounded-[4px] ${badgeRed ? 'bg-[#FEE2E2] text-[#B91C1C]' : 'bg-[#EDF0F4] text-[#515458]'}`}>{badge}</span>}
        </span>
        {open ? <ChevronUp size={13} className="text-[#C0282A] shrink-0" /> : <ChevronDown size={13} className="text-[#C0282A] shrink-0" />}
      </button>
      {open && <div className="p-4">{children}</div>}
    </div>
  );
}

function DataGrid({ items }: {
  items: { l: string; v: React.ReactNode; mono?: boolean; red?: boolean; grn?: boolean; org?: boolean; lnk?: boolean; full?: boolean; w2?: boolean }[]
}) {
  return (
    <div className="grid gap-x-3.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex flex-col gap-px py-[5px] border-b border-[#E8E8E8] ${item.full ? 'col-span-full' : item.w2 ? 'col-span-2' : ''}`}
        >
          <span className="text-[10px] font-bold text-[#555] uppercase tracking-[.03em]">{item.l}</span>
          <span className={`text-[12.5px] font-medium leading-snug ${item.mono ? "font-['IBM_Plex_Mono',monospace] font-bold" : ''} ${item.red ? 'text-[#C0282A] font-bold text-[14px]' : item.grn ? 'text-[#126B49] font-bold' : item.org ? 'text-[#D75600] font-bold' : item.lnk ? 'text-[#0056AC] underline cursor-pointer' : 'text-[#111]'}`}>
            {item.v}
          </span>
        </div>
      ))}
    </div>
  );
}

const navContratos = [
  { num: 'Contrato 1', estado: 'Vigente', color: '' },
  { num: 'Contrato 2', estado: 'Vigente', color: '' },
  { num: 'Contrato 3', estado: 'Observado', color: 'bg-[#FEE2E2] text-[#B91C1C]' },
  { num: 'Contrato 4', estado: 'Pendiente', color: 'bg-[#E1F0FF] text-[#0056AC]' },
];

export function ContratoDetailPage({ navigate }: ContratoDetailPageProps) {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <div className="flex-1 overflow-auto bg-[#F4F4F4] font-['Roboto',sans-serif]">

      {/* Breadcrumb */}
      <div className="bg-[#F4F4F4] border-b border-[#D0D0D0] px-6 py-2 flex items-center gap-1.5 text-[12.5px] text-[#555] flex-wrap">
        <button onClick={() => navigate({ type: 'home' })} className="text-[#0056AC] hover:underline font-medium">Inicio</button>
        <span className="text-[#B0B0B0]">›</span>
        <button onClick={() => navigate({ type: 'search-fup' })} className="text-[#0056AC] hover:underline font-medium">Resultados · Contratos</button>
        <span className="text-[#B0B0B0]">›</span>
        <button onClick={() => navigate({ type: 'contratos-lista' })} className="text-[#0056AC] hover:underline font-medium">IDEC-2026-001234 · Lista contratos</button>
        <span className="text-[#B0B0B0]">›</span>
        <span className="text-[#111] font-bold">CONTRATO N° 05-2026-MDM-Q/GM</span>
      </div>

      {/* IDEC reference bar */}
      <div className="bg-white border-b-[3px] border-[#C0282A] px-6 py-2.5 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-[#fde8e8] text-[#C0282A] border border-[rgba(192,40,42,.22)] rounded-full text-[9.5px] font-bold px-2.5 py-1 whitespace-nowrap">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
            IDEC padre
          </span>
          <span className="font-['IBM_Plex_Mono',monospace] text-[14px] font-bold text-[#111] whitespace-nowrap">IDEC-2026-001234</span>
          <span className="text-[#B0B0B0]">·</span>
          <span className="text-[12px] font-bold text-[#C0282A]">MUNICIPALIDAD DISTRITAL DE CORTEGANA</span>
          <span className="text-[#B0B0B0] hidden md:inline">·</span>
          <span className="text-[11.5px] text-[#555] hidden md:block truncate max-w-[400px]">Adquisición de hojuelas precocidas — Programa de Complementación Alimentaria</span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[11px] text-[#888]">Contrato 1 de 4</span>
          <button onClick={() => navigate({ type: 'bienes-detail', id: 'bien:1' })} className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0056AC] underline hover:text-[#184397]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
            Ir a Ficha IDEC
          </button>
        </div>
      </div>

      {/* Trazabilidad — double group */}
      <div className="bg-[#E8E8E8] border-b border-[#D0D0D0] px-6 py-2 flex items-center gap-3 flex-wrap">
        {/* IDEC group */}
        <div className="flex items-center gap-1.5">
          <span className="text-[9.5px] font-bold text-[#888] uppercase tracking-[.04em] whitespace-nowrap">IDEC:</span>
          <div className="flex items-center">
            {['Act. Preparatorias', 'Selección', 'Contratos'].map((s, i, arr) => (
              <span key={s} className="flex items-center">
                <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] font-bold whitespace-nowrap leading-[1.5] ${
                  i < 2 ? 'bg-[#EAF3DE] text-[#3B6D11]' : 'bg-[#C0282A] text-white'
                }`}>
                  {i < 2 && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
                  {s}
                </span>
                {i < arr.length - 1 && <span className="text-[#B0B0B0] text-[9px] mx-0.5">›</span>}
              </span>
            ))}
          </div>
        </div>
        {/* Separator */}
        <div className="w-px h-4 bg-[#D0D0D0]" />
        {/* Este contrato group */}
        <div className="flex items-center gap-1.5">
          <span className="text-[9.5px] font-bold text-[#888] uppercase tracking-[.04em] whitespace-nowrap">Este contrato:</span>
          <div className="flex items-center flex-wrap gap-0">
            {[
              { l: 'Suscripción', state: 'done' },
              { l: 'Garantías', state: 'done' },
              { l: 'Ejecución 60%', state: 'active' },
              { l: 'Conformidad', state: 'pending' },
              { l: 'Liquidación', state: 'pending' },
            ].map((s, i, arr) => (
              <span key={s.l} className="flex items-center">
                <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[9.5px] font-bold whitespace-nowrap leading-[1.5] ${
                  s.state === 'done' ? 'bg-[#EAF3DE] text-[#3B6D11]' :
                  s.state === 'active' ? 'bg-[#C0282A] text-white' :
                  'bg-[#E8E8E8] text-[#888] border-[.5px] border-[#D0D0D0]'
                }`}>{s.l}</span>
                {i < arr.length - 1 && <span className="text-[#B0B0B0] text-[9px] mx-0.5">›</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Contract header */}
      <div className="bg-white border-b border-[#E8E8E8] px-6 py-4">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-1.5 bg-[#fde8e8] text-[#C0282A] border border-[rgba(192,40,42,.22)] rounded-full text-[10.5px] font-bold px-2.5 py-1 mb-2">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
              Contrato · Ejecución Contractual
            </div>
            <div className="text-[10px] font-bold text-[#C0282A] uppercase tracking-[.05em] mb-0.5">Número de contrato</div>
            <div className="font-['IBM_Plex_Mono',monospace] text-[20px] font-bold text-[#111] leading-tight mb-1">CONTRATO N° 05-2026-MDM-Q/GM</div>
            <div className="text-[13px] font-bold text-[#333] mb-1">LP-SM-1-2025-MDM-1 · Licitación Pública · Bien</div>
            <p className="text-[12.5px] text-[#555] leading-snug max-w-2xl">
              Adquisición de hojuelas precocidas para el Programa de Complementación Alimentaria — Lote 1: Sierra Norte. Incluye transporte hasta almacenes municipales de Cortegana según cronograma de despacho.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-[12px] font-bold bg-[#dcfce7] text-[#166534]">● Vigente</span>
            <div className="flex gap-1.5">
              <button className="flex items-center gap-1 px-3 py-1.5 bg-[#294269] text-white rounded-[4px] text-[12.5px] font-bold hover:bg-[#3a3f46] transition-colors">
                <Download size={12} /> Descargar
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-[#0056AC] text-[#0056AC] rounded-[4px] text-[12.5px] font-bold hover:bg-[#E1F0FF] transition-colors">
                <Share2 size={12} /> Compartir
              </button>
            </div>
          </div>
        </div>

        {/* KPI strip */}
        <div className="border-t-[1.5px] border-b-[1.5px] border-[#E8E8E8] flex overflow-x-auto -mx-6">
          {[
            { l: 'Cuantía', v: 'S/ 412,500.00', red: true },
            { l: 'Pagado (60%)', v: 'S/ 247,500', grn: true },
            { l: 'Pendiente (40%)', v: 'S/ 165,000', org: true },
            { l: 'Suscripción', v: '30/03/2026', small: true },
            { l: 'Término', v: '31/07/2026', small: true },
            { l: 'Proveedor', v: 'AGROINDUSTRIAS DEL NORTE S.A.C.', sub: 'RUC 20527909059', smallest: true },
          ].map(({ l, v, red, grn, org, sub, small, smallest }) => (
            <div key={l} className="flex-1 min-w-[110px] px-3.5 py-2.5 border-r border-[#E8E8E8] last:border-r-0 flex flex-col gap-0.5">
              <span className="text-[9.5px] font-bold text-[#888] uppercase tracking-[.03em]">{l}</span>
              <span className={`font-['IBM_Plex_Mono',monospace] font-bold leading-tight ${red ? 'text-[#C0282A] text-[16px]' : grn ? 'text-[#126B49] text-[16px]' : org ? 'text-[#D75600] text-[16px]' : small ? 'text-[#111] text-[13px]' : smallest ? 'text-[#111] text-[11.5px]' : 'text-[#111] text-[16px]'}`}>{v}</span>
              {sub && <span className="text-[10px] text-[#888]">{sub}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Contract nav bar */}
      <div className="bg-white border-b-2 border-[#E8E8E8] px-6 flex items-center overflow-x-auto sticky top-0 z-20">
        {navContratos.map((c, i) => (
          <span key={c.num} className="flex items-center">
            <button
              onClick={() => setActiveNav(i)}
              className={`flex items-center gap-1.5 py-2.5 px-4 text-[12.5px] font-semibold whitespace-nowrap border-b-[3px] -mb-[2px] transition-colors ${
                activeNav === i ? 'border-[#C0282A] text-[#C0282A] font-bold' : 'border-transparent text-[#555] hover:text-[#C0282A]'
              }`}
            >
              {c.num}
              <span className={`text-[9.5px] font-bold px-1.5 py-px rounded-[10px] ${
                activeNav === i
                  ? 'bg-[#C0282A] text-white'
                  : c.color || 'bg-[#E8E8E8] text-[#555]'
              }`}>{c.estado}</span>
            </button>
            {i < navContratos.length - 1 && <div className="w-px h-5 bg-[#E8E8E8] mx-1" />}
          </span>
        ))}
        <div className="ml-auto pl-4 flex items-center">
          <button
            onClick={() => navigate({ type: 'contratos-lista' })}
            className="text-[11px] font-bold text-[#0056AC] underline hover:text-[#184397] flex items-center gap-1"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
            Ver lista completa
          </button>
        </div>
      </div>

      {/* Scroll continuo — sections */}
      <div className="max-w-[1100px] mx-auto px-6 pb-16">

        {/* ── SECCIÓN 1: DATOS DEL CONTRATO ── */}
        <SectionDivider label="1 · Datos del contrato" />

        <Accordion title={<><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>1.1 Información general</>} defaultOpen>
          <DataGrid items={[
            { l: 'Descripción del objeto', v: 'Adquisición de hojuelas precocidas para el Programa de Complementación Alimentaria — Lote 1: Sierra Norte', full: true },
            { l: 'Número de contrato', v: 'CONTRATO N° 05-2026-MDM-Q/GM', mono: true },
            { l: 'Nomenclatura del proceso', v: 'LP-SM-1-2025-MDM-1', mono: true },
            { l: 'Cuantía', v: 'S/ 412,500.00', red: true, mono: true },
            { l: 'Moneda', v: 'Soles (PEN)' },
            { l: 'Objeto', v: 'Bien' },
            { l: 'Fecha de suscripción', v: '30/03/2026', mono: true },
            { l: 'Fecha de publicación SEACE', v: '26/05/2026 02:05', mono: true },
            { l: 'Fecha de inicio', v: '31/03/2026', mono: true },
            { l: 'Fecha de término', v: '31/07/2026', mono: true },
            { l: 'Lugar de ejecución', v: 'CAJAMARCA / SANTA CRUZ / CORTEGANA' },
            { l: 'Normativa', v: 'Ley N° 32069' },
          ]} />
          <div className="flex gap-2 mt-3">
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#294269] text-white rounded-[4px] text-[12.5px] font-bold hover:bg-[#3a3f46] transition-colors">
              <Download size={12} /> Descargar contrato PDF
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#294269] text-white rounded-[4px] text-[12.5px] font-bold hover:bg-[#3a3f46] transition-colors">
              <Download size={12} /> Descargar todos los documentos
            </button>
          </div>
        </Accordion>

        <Accordion title={<><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>1.2 Entidad contratante y contratista</>} defaultOpen>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-[10px] font-bold text-[#888] uppercase tracking-[.04em] mb-2">Entidad contratante</div>
              <DataGrid items={[
                { l: 'Denominación', v: 'MUNICIPALIDAD DISTRITAL DE CORTEGANA', red: true, full: true },
                { l: 'RUC', v: '20214061474', mono: true },
                { l: 'Dirección', v: 'JR. GRAU N° 100 - CORTEGANA, CAJAMARCA', full: true },
                { l: 'Responsable OEC', v: 'HUAMÁN SÁNCHEZ, PEDRO LUIS', full: true },
              ]} />
            </div>
            <div>
              <div className="text-[10px] font-bold text-[#888] uppercase tracking-[.04em] mb-2">Contratista / Proveedor</div>
              <DataGrid items={[
                { l: 'Denominación', v: 'AGROINDUSTRIAS DEL NORTE S.A.C.', lnk: true, full: true },
                { l: 'RUC', v: '20527909059', mono: true },
                { l: 'Estado RNP', v: '● Habilitado', grn: true },
                { l: 'Representante legal', v: 'QUIROZ VEGA, ERNESTO ALFREDO', full: true },
                { l: 'Tipo', v: 'Persona jurídica · No MYPE' },
                { l: 'Sanciones vigentes', v: '● Ninguna', grn: true },
              ]} />
            </div>
          </div>
        </Accordion>

        {/* ── SECCIÓN 2: ÍTEM ── */}
        <SectionDivider label="2 · Ítem contratado" />

        <Accordion title={<><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4a1 1 0 011 1v10a1 1 0 01-1 1h-4"/></svg>2.1 Bien / Servicio / Obra</>} defaultOpen>
          {/* Novedad */}
          <div className="flex items-center gap-2 bg-[#FFF9E6] border border-[#F5C842] rounded-[4px] p-2.5 mb-3 text-[12px] text-[#7A5400]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg>
            <span><strong>Novedad SEACE 4.0:</strong> Ítem vinculado al CUBSO unificado y al Banco de Inversiones MEF (CUI).</span>
          </div>
          <DataGrid items={[
            { l: 'Descripción del ítem', v: 'Adquisición de hojuelas precocidas multi-cereal (avena, quinua, kiwicha, maca, soya) con leche entera en polvo y azúcar para el programa alimentario.', full: true },
            { l: 'CUBSO', v: '5612150600070970', mono: true, full: true },
            { l: 'Lugar de entrega', v: 'CAJAMARCA / SANTA CRUZ / CORTEGANA', full: true },
            { l: 'Cuantía del ítem', v: 'S/ 412,500.00', red: true, mono: true },
            { l: 'Cantidad contratada', v: '45,800 kg', mono: true },
            { l: 'Unidad de medida', v: 'Kilogramo' },
          ]} />
          {/* Banco Inversiones */}
          <div className="bg-[#F4F4F4] border-[1.5px] border-[#E8E8E8] rounded-[4px] p-3.5 mt-3">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-[#C0282A] text-white text-[11px] font-bold px-2.5 py-1 rounded-[4px] font-['IBM_Plex_Mono',monospace]">CUI 2275110</span>
              <span className="text-[12px] font-bold text-[#111]">Banco de Inversiones · MEF</span>
            </div>
            <p className="text-[12.5px] text-[#333] mb-2 leading-snug">MEJORAMIENTO Y AMPLIACIÓN DE LOS SERVICIOS EDUCATIVOS DEL NIVEL SECUNDARIO DE LA I.E. SAN FRANCISCO DE ASÍS - MARCAPATA - QUISPICANCHI - CUSCO</p>
            <div className="bg-[#E1F0FF] rounded-[4px] px-2.5 py-2 text-[11.5px] text-[#0056AC] mb-2">
              <strong>Fase:</strong> Ejecución &nbsp;·&nbsp; <strong>Estado:</strong> En ejecución &nbsp;·&nbsp; <strong>Monto:</strong> S/ 412,500.00
            </div>
            <a href="#" className="inline-flex items-center gap-1 text-[12px] font-bold text-[#0056AC] underline hover:text-[#184397]">
              <ExternalLink size={11} /> Ver en Banco de Inversiones — ofi5.mef.gob.pe
            </a>
          </div>
        </Accordion>

        {/* ── SECCIÓN 3: GARANTÍAS ── */}
        <SectionDivider label="3 · Garantías" />

        {/* Garantía fiel cumplimiento — gar-card direct (not inside accordion) */}
        <div className="bg-[#fde8e8] border border-[rgba(192,40,42,.18)] rounded-[8px] p-3.5 mb-2">
          <div className="flex items-center justify-between mb-2.5">
            <div>
              <div className="text-[11px] font-bold text-[#C0282A] uppercase tracking-[.04em]">Garantía de fiel cumplimiento</div>
              <div className="text-[11.5px] text-[#555] mt-0.5">Carta Fianza · BANCO BBVA PERÚ</div>
            </div>
            <span className="bg-[#FEE2E2] text-[#B91C1C] text-[10px] font-bold px-2 py-0.5 rounded-[4px]">✕ No vigente</span>
          </div>
          <DataGrid items={[
            { l: 'N° de garantía', v: '0011-0083-9800004616-33', mono: true },
            { l: 'Cuantía', v: 'S/ 36,840.00', red: true, mono: true },
            { l: 'Fecha de emisión', v: '18/03/2026', mono: true },
            { l: 'Fecha de vencimiento', v: '16/06/2026 ⚠', mono: true, red: true },
            { l: 'Entidad emisora', v: 'BANCO BBVA PERÚ' },
            { l: 'Fecha publicación SEACE', v: '26/05/2026 02:05', mono: true },
            { l: 'Archivo adjunto', v: 'Carta_Fianza_0011-0083-9800004616-33.pdf ↓', lnk: true, full: true },
          ]} />
          <div className="flex items-start gap-2 bg-[#FFF3EA] border border-[#FDBA74] rounded-[4px] p-2.5 mt-3 text-[12px] text-[#D75600]">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4m0 4h.01"/></svg>
            <div><strong>Garantía vencida.</strong> El contrato continúa en ejecución (60% de avance). La entidad debe solicitar al contratista la renovación o sustitución de la garantía conforme al Art. 178° del Reglamento de la Ley N° 32069.</div>
          </div>
        </div>

        {/* ── SECCIÓN 4: AVANCE FINANCIERO ── */}
        <SectionDivider label="4 · Avance financiero" />

        <div className="grid grid-cols-3 gap-2.5 mb-3">
          {[
            { l: 'Cuantía total', v: 'S/ 412,500', red: true, dest: true },
            { l: 'Pagado (60%)', v: 'S/ 247,500', grn: true },
            { l: 'Pendiente (40%)', v: 'S/ 165,000', org: true },
          ].map(({ l, v, red, grn, org, dest }) => (
            <div key={l} className={`rounded-[4px] border-[1.5px] p-2.5 ${dest ? 'bg-[#fde8e8] border-[rgba(192,40,42,.2)]' : 'bg-[#F4F4F4] border-[#E8E8E8]'}`}>
              <div className="text-[10px] font-bold text-[#888] uppercase tracking-[.03em]">{l}</div>
              <div className={`font-['IBM_Plex_Mono',monospace] text-[18px] font-bold leading-tight mt-0.5 ${red ? 'text-[#C0282A]' : grn ? 'text-[#126B49]' : org ? 'text-[#D75600]' : 'text-[#111]'}`}>{v}</div>
            </div>
          ))}
        </div>
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-bold text-[#888] uppercase tracking-[.03em]">Ejecución financiera</span>
            <span className="text-[13px] font-bold text-[#111] font-['IBM_Plex_Mono',monospace]">60%</span>
          </div>
          <div className="h-[7px] bg-[#E8E8E8] rounded-[4px] overflow-hidden">
            <div className="h-full bg-[#D75600] rounded-[4px] w-[60%]" />
          </div>
        </div>

        <Accordion title={<><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>4.1 Valorizaciones registradas</>} defaultOpen>
          <table className="w-full text-[12px] rounded-[8px] overflow-hidden border border-[#E8E8E8] border-collapse">
            <thead>
              <tr className="bg-[#111] text-white">
                {['N°', 'Período', 'Cuantía', 'Fecha de pago', 'Estado'].map(h => (
                  <th key={h} className="py-1.5 px-3 text-left text-[11px] font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { n: '1', per: 'Abr 2026', monto: 'S/ 82,500.00', fecha: '15/04/2026', ok: true },
                { n: '2', per: 'May 2026', monto: 'S/ 82,500.00', fecha: '16/05/2026', ok: true },
                { n: '3', per: 'Jun 2026', monto: 'S/ 82,500.00', fecha: '12/06/2026', ok: true },
                { n: '4', per: 'Jul 2026', monto: 'S/ 82,500.00', fecha: '—', ok: false },
                { n: '5', per: 'Jul 2026 (final)', monto: 'S/ 82,500.00', fecha: '—', ok: false },
              ].map(r => (
                <tr key={r.n} className="border-b border-[#E8E8E8] last:border-0 even:bg-[#F4F4F4]">
                  <td className="py-1.5 px-3">{r.n}</td>
                  <td className="py-1.5 px-3 text-[#333]">{r.per}</td>
                  <td className="py-1.5 px-3 font-['IBM_Plex_Mono',monospace] font-bold">{r.monto}</td>
                  <td className={`py-1.5 px-3 font-['IBM_Plex_Mono',monospace] text-[11px] ${!r.ok ? 'text-[#888]' : ''}`}>{r.fecha}</td>
                  <td className="py-1.5 px-3">
                    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-[4px] text-[10px] font-bold ${r.ok ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#E8E8E8] text-[#888]'}`}>
                      {r.ok ? '✓ Pagado' : 'Pendiente'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Accordion>

        <Accordion title={<><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>4.2 Penalidades aplicadas</>} defaultOpen>
          <div className="flex items-center gap-2 bg-[#F0FDF4] border border-[#bbf7d0] rounded-[4px] p-2.5 text-[12px] text-[#126B49]">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Sin penalidades registradas. El proveedor no registra penalidades por mora en sus últimos 12 contratos con conformidad.
          </div>
        </Accordion>

        {/* ── SECCIÓN 5: AVANCE FÍSICO ── */}
        <SectionDivider label="5 · Avance físico — Entregables" />

        <div className="grid grid-cols-3 gap-2.5 mb-3">
          {[{ l: 'Completados', v: '3', grn: true }, { l: 'Pendientes', v: '2', org: true }, { l: 'Total entregables', v: '5' }].map(({ l, v, grn, org }) => (
            <div key={l} className="bg-[#F4F4F4] border-[1.5px] border-[#E8E8E8] rounded-[4px] p-2.5">
              <div className="text-[10px] font-bold text-[#888] uppercase tracking-[.03em]">{l}</div>
              <div className={`font-['IBM_Plex_Mono',monospace] text-[18px] font-bold leading-tight mt-0.5 ${grn ? 'text-[#126B49]' : org ? 'text-[#D75600]' : 'text-[#111]'}`}>{v}</div>
            </div>
          ))}
        </div>
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[10px] font-bold text-[#888] uppercase tracking-[.03em]">Avance físico</span>
            <span className="text-[13px] font-bold text-[#111] font-['IBM_Plex_Mono',monospace]">55%</span>
          </div>
          <div className="h-[7px] bg-[#E8E8E8] rounded-[4px] overflow-hidden">
            <div className="h-full bg-[#D75600] rounded-[4px] w-[55%]" />
          </div>
        </div>
        {[
          { ok: true, desc: 'Plan de distribución y cronograma logístico aprobado', fecha: '05/04/2026' },
          { ok: true, desc: 'Primera entrega parcial — 18,410 kg almacenes zona norte', fecha: '22/04/2026' },
          { ok: true, desc: 'Segunda entrega parcial — 18,410 kg almacenes zona centro', fecha: '20/05/2026' },
          { ok: false, desc: 'Tercera entrega parcial — 4,980 kg almacenes pendientes', fecha: 'Pendiente — Programado Jul 2026', org: true },
          { ok: false, desc: 'Informe final de conformidad y acta de cierre', fecha: 'Pendiente — Al término del contrato' },
        ].map((e, i) => (
          <div key={i} className="flex items-start gap-2.5 p-2.5 border border-[#E8E8E8] rounded-[4px] mb-1.5 bg-white">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${e.ok ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#E8E8E8] text-[#888]'}`}>
              {e.ok ? '✓' : '○'}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[12.5px] text-[#111] font-medium leading-snug">{e.desc}</div>
              <div className={`font-['IBM_Plex_Mono',monospace] text-[11px] mt-0.5 ${e.org ? 'text-[#D75600]' : 'text-[#888]'}`}>{e.fecha}</div>
            </div>
          </div>
        ))}

        {/* ── SECCIÓN 6: CUADERNO ── */}
        <SectionDivider label="6 · Cuaderno de incidencias" />

        <Accordion title={<><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>6.1 Datos del cuaderno</>} defaultOpen>
          <DataGrid items={[
            { l: 'Obra / Prestación', v: 'REHABILITACIÓN DE PUENTES PAQUETE 7 — OBRA 3: PUENTE LA PISHGA Y ACCESOS', full: true },
            { l: 'CUI', v: '2437746', mono: true },
            { l: 'Fecha suscripción', v: '01/12/2023', mono: true },
            { l: 'Fecha apertura', v: '01/10/2026', mono: true },
            { l: 'Residente', v: 'TELLO GONZALES, JOSE REYNALDO', full: true },
            { l: 'Supervisor', v: 'MEZA CARBAJAL, GREGORIO WENCESLAO', full: true },
          ]} />
          <div className="text-[11px] font-bold text-[#888] uppercase tracking-[.04em] mt-3 mb-2">Últimos asientos</div>
          {[
            { n: '#390', tipo: 'CONSTATACIÓN FÍSICA', fecha: '18/06/2025 04:55 PM', titulo: 'PARTIDAS ATRASADAS DE ACUERDO AL CRONOGRAMA DE AVANCE DE OBRA', user: 'MEZA CARBAJAL, GREGORIO WENCESLAO — Supervisor' },
            { n: '#389', tipo: 'ADICIONALES DE OBRA', fecha: '18/06/2025 10:55 AM', titulo: 'RATIFICACIÓN DE LA NECESIDAD DEL ADICIONAL N° 02', user: 'MEZA CARBAJAL, GREGORIO WENCESLAO — Supervisor' },
            { n: '#388', tipo: 'OTRAS OCURRENCIAS', fecha: '16/06/2025 11:19 PM', titulo: 'OCURRENCIA DE LLUVIAS INTENSAS — ZONA NORTE DEL PROYECTO', user: 'TELLO GONZALES, JOSE REYNALDO — Residente' },
          ].map(a => (
            <div key={a.n} className="p-2.5 border border-[#E8E8E8] rounded-[4px] mb-1.5 bg-white">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="font-['IBM_Plex_Mono',monospace] text-[11px] font-bold text-[#C0282A]">{a.n}</span>
                <span className="px-1.5 py-0.5 rounded-[4px] text-[10px] font-bold bg-[#fde8e8] text-[#C0282A]">{a.tipo}</span>
                <span className="font-['IBM_Plex_Mono',monospace] text-[10.5px] text-[#888] ml-auto">{a.fecha}</span>
              </div>
              <div className="text-[12.5px] font-bold text-[#111] mb-0.5 leading-snug">{a.titulo}</div>
              <div className="text-[11px] text-[#555] flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                {a.user}
              </div>
            </div>
          ))}
          <button className="mt-2 flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#0056AC] text-[#0056AC] rounded-[4px] text-[12px] font-bold hover:bg-[#E1F0FF] transition-colors">
            Ver todos los asientos (390) <ArrowRight size={11} />
          </button>
        </Accordion>

        {/* ── SECCIÓN 7: DOCUMENTOS ── */}
        <SectionDivider label="7 · Documentos" />

        {[
          { name: 'CONTRATO LP01-2026.pdf', meta: '26/05/2026 · 0.77 MB' },
          { name: 'Carta_Fianza_0011-0083-9800004616-33.pdf', meta: '26/05/2026 · 0.42 MB' },
          { name: 'Acta_Conformidad_1ra_Entrega.pdf', meta: '25/04/2026 · 0.38 MB' },
          { name: 'Acta_Conformidad_2da_Entrega.pdf', meta: '23/05/2026 · 0.41 MB' },
          { name: 'Acta_Conformidad_3ra_Entrega.pdf', meta: '20/06/2026 · 0.39 MB' },
        ].map(d => (
          <div key={d.name} className="flex items-center gap-2.5 p-2.5 border border-[#E8E8E8] rounded-[4px] mb-1.5 bg-white">
            <FileText size={18} className="text-[#C0282A] shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[12.5px] font-bold text-[#111] truncate">{d.name}</div>
              <div className="text-[11px] text-[#888]">{d.meta}</div>
            </div>
            <button className="text-[11.5px] font-bold text-[#C0282A] underline hover:text-[#9e1f21] shrink-0 flex items-center gap-1">
              <Download size={11} /> Descargar
            </button>
          </div>
        ))}

        {/* ── SECCIÓN 8: TRANSPARENCIA ── */}
        <SectionDivider label="8 · Transparencia e integridad (OCDS)" />

        <div className="bg-white border-[1.5px] border-[#E8E8E8] rounded-[8px] p-3.5 mb-2.5">
          <div className="text-[12.5px] font-bold text-[#111] mb-2.5 flex items-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Criterios de publicidad — estándar OCDS
          </div>
          {[
            { label: 'Contrato firmado publicado en SEACE', ok: false, warn: true },
            { label: 'Cuantía del contrato registrada', ok: true },
            { label: 'Proveedor identificado (RUC)', ok: true },
            { label: 'Registro de pagos / Valorizaciones', ok: true },
            { label: 'Actas de conformidad publicadas', ok: true },
          ].map(t => (
            <div key={t.label} className="flex items-center justify-between py-1.5 border-b border-[#E8E8E8] last:border-0 text-[12px] text-[#333]">
              <span>{t.label}</span>
              <span className={`w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-bold ${t.ok ? 'bg-[#dcfce7] text-[#166534]' : t.warn ? 'bg-[#FFF3EA] text-[#D75600]' : 'bg-[#FEE2E2] text-[#B91C1C]'}`}>
                {t.ok ? '✓' : '○'}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-3 mt-3 bg-[#F4F4F4] rounded-[4px] p-2.5">
            <span className="font-['IBM_Plex_Mono',monospace] text-[24px] font-bold text-[#C0282A]">4/5</span>
            <div className="text-[11.5px] text-[#555] leading-snug">criterios OCDS cumplidos.<br />Pendiente: publicación del archivo del contrato firmado.</div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#F0FDF4] border border-[#bbf7d0] rounded-[4px] p-2.5 text-[12px] text-[#126B49]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Riesgo bajo. Proveedor sin sanciones, valorizaciones al día. Pendiente: renovación de carta fianza vencida.
        </div>

        {/* ── SECCIÓN 9: UBICACIÓN ── */}
        <SectionDivider label="9 · Ubicación del lugar de ejecución" />

        <div className="flex items-center justify-between text-[12px] text-[#555] mb-1.5">
          <span>CAJAMARCA / SANTA CRUZ / CORTEGANA</span>
          <span className="font-['IBM_Plex_Mono',monospace] text-[11px] text-[#888]">Lat: -6.050 · Lng: -79.010</span>
        </div>
        <div className="h-[220px] bg-[#E1F0FF] border-[1.5px] border-[#E8E8E8] rounded-[8px] flex items-center justify-center mt-2">
          <div className="text-center">
            <div className="w-3.5 h-3.5 bg-[#C0282A] rounded-full border-2 border-white shadow-md mx-auto mb-2" />
            <div className="text-[12px] font-bold text-[#0056AC]">CAJAMARCA / SANTA CRUZ / CORTEGANA</div>
            <div className="font-['IBM_Plex_Mono',monospace] text-[11px] text-[#888]">CONTRATO N° 05-2026-MDM-Q/GM</div>
          </div>
        </div>

      </div>
    </div>
  );
}
