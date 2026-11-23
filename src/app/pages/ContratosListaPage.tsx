import { useState } from 'react';
import { ArrowLeft, Download, LayoutGrid, List, AlignJustify, ArrowRight, Search, ArrowUpDown, ChevronDown } from 'lucide-react';
import type { Page } from '../App';

interface ContratosListaPageProps {
  navigate: (page: Page) => void;
}

type Contrato = {
  id: string;
  seqLabel: string;
  nct: string;
  object: 'BIEN' | 'SERVICIO' | 'OBRA';
  estado: 'vigente' | 'observado' | 'nulo' | 'suspendido';
  desc: string;
  nomenclatura: string;
  cuantia: string | null;
  fechaSuscripcion: string;
  fechaInicio: string;
  fechaTermino: string;
  lugarEjecucion: string;
  avance: number;
  chips: { label: string; type: 'gar' | 'conf' | 'adic' | 'penal' }[];
  ruc: string;
  proveedor: string;
  alerta?: React.ReactNode;
  alertaTipo?: 'warn' | 'info';
  pendiente?: boolean;
  fechaAdjudicacion?: string;
  plazoSuscripcion?: string;
  buenaPro?: string;
};

const contratos: Contrato[] = [
  {
    id: 'CONT-2026-001', seqLabel: 'Contrato N° 1 de 4 · LP-1234567890', nct: 'CONTRATO N° 05-2026-MDM-Q/GM',
    object: 'BIEN', estado: 'vigente',
    desc: 'Adquisición de hojuelas precocidas para el Programa de Complementación Alimentaria — Lote 1: Sierra Norte',
    nomenclatura: 'LP-SM-1-2025-MDM-1', cuantia: 'S/ 412,500.00',
    fechaSuscripcion: '30/03/2026', fechaInicio: '31/03/2026', fechaTermino: '31/07/2026',
    lugarEjecucion: 'CAJAMARCA / CORTEGANA', avance: 60,
    chips: [{ label: 'Garantía fiel cumplimiento', type: 'gar' }, { label: '3 conformidades', type: 'conf' }],
    ruc: '20527909059', proveedor: 'AGROINDUSTRIAS DEL NORTE S.A.C.',
  },
  {
    id: 'CONT-2026-002', seqLabel: 'Contrato N° 2 de 4 · LP-1234568080', nct: 'CONTRATO N° 06-2026-MDM-Q/GM',
    object: 'BIEN', estado: 'vigente',
    desc: 'Adquisición y transporte de hojuelas precocidas para el Programa de Complementación Alimentaria — Lote 2: Sierra Centro',
    nomenclatura: 'LP-SM-1-2025-MDM-2', cuantia: 'S/ 389,200.00',
    fechaSuscripcion: '15/04/2026', fechaInicio: '16/04/2026', fechaTermino: '14/08/2026',
    lugarEjecucion: 'CAJAMARCA / SANTA CRUZ', avance: 42,
    chips: [{ label: 'Garantía fiel cumplimiento', type: 'gar' }, { label: '2 conformidades', type: 'conf' }, { label: '+ Adicional', type: 'adic' }],
    ruc: '20527909059', proveedor: 'AGROINDUSTRIAS DEL NORTE S.A.C.',
  },
  {
    id: 'CONT-2026-003', seqLabel: 'Contrato N° 3 de 4 · LP-1234569012', nct: 'CONTRATO N° 07-2026-MDM-Q/GM',
    object: 'BIEN', estado: 'observado',
    desc: 'Adquisición de leche entera en polvo y azúcar para el Programa de Complementación Alimentaria — Lote 3: Costa Norte',
    nomenclatura: 'LP-SM-1-2025-MDM-3', cuantia: 'S/ 256,000.00',
    fechaSuscripcion: '28/04/2026', fechaInicio: '29/04/2026', fechaTermino: '27/08/2026',
    lugarEjecucion: 'LA LIBERTAD / TRUJILLO', avance: 28,
    chips: [{ label: 'Garantía fiel cumplimiento', type: 'gar' }, { label: '⚠ Penalidad aplicada', type: 'penal' }, { label: '1 conformidad', type: 'conf' }],
    ruc: '20601234567', proveedor: 'DISTRIBUIDORA ALIMENTARIA DEL NORTE S.R.L.',
    alerta: <><strong className="font-bold">Alerta de avance:</strong> Valorización acumulada (28%) inferior al 50% de lo programado a la fecha. Pendiente informe del supervisor.</>,
    alertaTipo: 'warn',
  },
  {
    id: 'CONT-2026-004', seqLabel: 'Contrato N° 4 de 4 · LP-1234570001', nct: 'CONTRATO N° 08-2026-MDM-Q/GM',
    object: 'BIEN', estado: 'vigente',
    desc: 'Adquisición de kiwicha y maca procesada para el Programa de Complementación Alimentaria — Lote 4: Selva',
    nomenclatura: 'LP-SM-1-2025-MDM-4', cuantia: null,
    fechaSuscripcion: '', fechaInicio: '', fechaTermino: '',
    lugarEjecucion: 'LORETO / MAYNAS', avance: 0,
    chips: [],
    ruc: '20527909059 (adjudicado)', proveedor: 'AGROINDUSTRIAS DEL NORTE S.A.C.',
    alerta: 'Pendiente de suscripción. Se habilitará la ficha completa una vez registrado el contrato en SEACE.',
    alertaTipo: 'info',
    pendiente: true,
    fechaAdjudicacion: '20/06/2026',
    plazoSuscripcion: 'Hasta 04/07/2026',
    buenaPro: 'AGROINDUSTRIAS DEL NORTE S.A.C.',
  },
];

const estadoBadge = (e: Contrato['estado']) => {
  if (e === 'vigente')   return <span className="flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[10px] font-bold bg-[#dcfce7] text-[#166534]">● Vigente</span>;
  if (e === 'observado') return <span className="flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[10px] font-bold bg-[#FFF3EA] text-[#D75600] border border-[#FDBA74]">⚠ Observado</span>;
  if (e === 'nulo')      return <span className="flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[10px] font-bold bg-[#FEE2E2] text-[#B91C1C]">✕ Nulo</span>;
  return <span className="flex items-center gap-1 px-2 py-0.5 rounded-[4px] text-[10px] font-bold bg-[#EDF0F4] text-[#515458]">Suspendido</span>;
};

const objPill = (o: string) => {
  const cls = o === 'BIEN' ? 'bg-[#edf0f4] text-[#294269]' : o === 'SERVICIO' ? 'bg-[#E1F0FF] text-[#0056AC]' : 'bg-[#E3F3EC] text-[#126B49]';
  return <span className={`px-1.5 py-0.5 rounded-[4px] text-[9.5px] font-bold ${cls}`}>{o}</span>;
};

const chipCls = (t: string) => {
  if (t === 'gar')   return 'bg-[#EFF6FF] text-[#1d4ed8] border-[#bfdbfe]';
  if (t === 'conf')  return 'bg-[#F0FDF4] text-[#166534] border-[#bbf7d0]';
  if (t === 'adic')  return 'bg-[#F0FDF4] text-[#166534] border-[#bbf7d0]';
  if (t === 'penal') return 'bg-[#FEF2F2] text-[#b91c1c] border-[#fecaca]';
  return 'bg-[#EDF0F4] text-[#515458] border-[#DEE3EA]';
};

const avanceFillCls = (pct: number) =>
  pct >= 40 ? 'bg-[#D75600]' : pct >= 1 ? 'bg-[#63c9c4]' : 'bg-[#DEE3EA]';

const avancePctCls = (pct: number, obs: boolean) =>
  obs ? 'text-[#D75600]' : 'text-[#26292E]';

type FilterType = 'todos' | 'vigente' | 'observado' | 'bien' | 'servicio' | 'obra';
type ViewMode = 'grid' | 'list' | 'horizontal';

export function ContratosListaPage({ navigate }: ContratosListaPageProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('todos');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [anio, setAnio] = useState('2026');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [sortBy, setSortBy] = useState('Nro. contrato');
  const [showAnio, setShowAnio] = useState(false);

  const filtered = contratos.filter(c => {
    const matchFilter =
      activeFilter === 'todos' ? true :
      activeFilter === 'vigente' ? c.estado === 'vigente' :
      activeFilter === 'observado' ? c.estado === 'observado' :
      activeFilter === 'bien' ? c.object === 'BIEN' :
      activeFilter === 'servicio' ? c.object === 'SERVICIO' :
      activeFilter === 'obra' ? c.object === 'OBRA' : true;
    const q = searchResults.toLowerCase();
    const matchSearch = !q || c.nct.toLowerCase().includes(q) || c.proveedor.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  const viewButtons: { key: ViewMode; Icon: typeof List; label: string }[] = [
    { key: 'list',       Icon: List,         label: 'Vista tabla' },
    { key: 'grid',       Icon: LayoutGrid,   label: 'Vista tarjetas' },
    { key: 'horizontal', Icon: AlignJustify, label: 'Vista lista' },
  ];

  return (
    <div className="flex-1 overflow-auto bg-[#F6F9FC] font-['Roboto',sans-serif]">

      {/* ── Volver + Título ── */}
      <div className="bg-white border-b border-[#DEE3EA] px-8 pt-4 pb-0">
        <button
          onClick={() => navigate({ type: 'bienes-detail', id: 'bien:1' })}
          className="flex items-center gap-1.5 text-[#294269] hover:text-[#9a0707] text-[12.5px] font-bold mb-3 transition-colors"
        >
          <ArrowLeft size={14} />
          Volver al inicio
        </button>

        {/* Title block with left red border */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-[4px] bg-[#63c9c4] self-stretch rounded-full shrink-0" />
          <div>
            <h1 className="text-[26px] font-bold text-[#26292E] leading-tight font-['Roboto',sans-serif]">Contratos</h1>
            <p className="text-[13px] text-[#515458] font-['Roboto',sans-serif] mt-0.5">Buscador Público de Contrataciones del Estado</p>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex items-stretch mb-5 max-w-[780px] rounded-[8px] border border-[#DEE3EA] overflow-hidden shadow-sm">
          <div className="relative">
            <button
              onClick={() => setShowAnio(!showAnio)}
              className="flex items-center gap-2 px-4 h-full bg-[#294269] text-white text-[14px] font-bold font-['Roboto',sans-serif] hover:bg-[#3C3E43] transition-colors whitespace-nowrap"
            >
              {anio}
              <ChevronDown size={14} className={`transition-transform ${showAnio ? 'rotate-180' : ''}`} />
            </button>
            {showAnio && (
              <div className="absolute left-0 top-full mt-1 bg-white border border-[#DEE3EA] rounded-[6px] shadow-xl z-20 min-w-[90px] overflow-hidden">
                {['2024', '2025', '2026'].map(y => (
                  <button key={y} onClick={() => { setAnio(y); setShowAnio(false); }}
                    className={`w-full text-left px-4 py-2 text-[13px] font-['Roboto',sans-serif] hover:bg-[#F6F9FC] transition-colors ${anio === y ? 'font-bold text-[#0056AC]' : 'text-[#26292E]'}`}>
                    {y}
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Buscar por código de contrato, proveedor, descripción..."
            className="flex-1 px-4 py-3 text-[13px] text-[#26292E] bg-white font-['Roboto',sans-serif] focus:outline-none placeholder-gray-300"
          />
          <button className="px-5 bg-[#63c9c4] hover:bg-[#3F5578] text-white transition-colors flex items-center justify-center">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* ── Results toolbar ── */}
      <div className="bg-white border-b border-[#DEE3EA]">
        {/* Row 1: Resultados label + count + view toggles */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#F0F2F5]">
          <div className="flex items-center gap-3">
            <span className="text-[16px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">Resultados</span>
            <span className="px-2.5 py-1 bg-[#63c9c4]/10 text-[#294269] border border-[#63c9c4]/20 rounded-[6px] text-[12px] font-bold font-['Roboto',sans-serif]">
              {filtered.length} encontrados
            </span>
          </div>
          <div className="flex items-center border border-[#DEE3EA] rounded-[6px] overflow-hidden">
            {viewButtons.map(({ key, Icon, label }) => (
              <button
                key={key}
                onClick={() => setViewMode(key)}
                title={label}
                className={`px-3 py-2 transition-colors border-r border-[#DEE3EA] last:border-r-0 ${viewMode === key ? 'bg-[#63c9c4] text-white' : 'bg-white text-gray-400 hover:bg-gray-50 hover:text-[#26292E]'}`}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>
        {/* Row 2: sort + search in results + export */}
        <div className="flex items-center gap-3 px-6 py-2.5 bg-[#F6F9FC]">
          <div className="flex items-center gap-2 shrink-0">
            <ArrowUpDown size={13} className="text-gray-400" />
            <span className="text-[11px] text-gray-500 font-['Roboto',sans-serif]">Ordenar por:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-[11px] border border-gray-200 rounded-[5px] px-2 py-1 bg-white text-[#26292E] font-['Roboto',sans-serif] focus:outline-none focus:border-[#63c9c4]"
            >
              {['Sin ordenar', 'Nro. contrato', 'Mayor cuantía', 'Más reciente', 'Mayor avance', 'Proveedor A-Z'].map(o => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 relative">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchResults}
              onChange={e => setSearchResults(e.target.value)}
              placeholder="Buscar en resultados..."
              className="w-full pl-8 pr-3 py-1.5 text-[11px] border border-gray-200 rounded-[5px] bg-white font-['Roboto',sans-serif] focus:outline-none focus:border-[#63c9c4] placeholder-gray-300"
            />
          </div>
          <button className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-[5px] bg-white text-[11px] font-semibold text-[#26292E] hover:bg-gray-50 transition-colors font-['Roboto',sans-serif]">
            <Download size={13} className="text-gray-500" />
            Exportar
          </button>
        </div>
      </div>

      {/* IDEC Header */}
      <div className="bg-white border-b border-[#DEE3EA] px-6 py-4">
        <div className="inline-flex items-center gap-1.5 bg-[#edf0f4] text-[#294269] border border-[#546887]/20 rounded-full text-[10.5px] font-bold px-3 py-1 mb-3">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
          Expediente de Contratación · IDEC
        </div>
        <div className="font-['IBM_Plex_Mono',monospace] text-[22px] font-bold text-[#26292E] leading-tight mb-1">IDEC-2026-001234</div>
        <div className="text-[13px] font-bold text-[#0056AC] mb-1">MUNICIPALIDAD DISTRITAL DE CORTEGANA</div>
        <p className="text-[12.5px] text-[#515458] mb-3 max-w-3xl leading-snug">
          Adquisición de hojuelas precocidas de avena, quinua, kiwicha, maca, soya, leche entera en polvo y azúcar, destinadas al programa de complementación alimentaria de la jurisdicción.
        </p>
        <div className="flex items-center gap-6 flex-wrap">
          {[
            { l: 'Cuantía referencial', v: 'S/ 1,057,700.00', red: true },
            { l: 'Objeto', v: 'BIEN' },
            { l: 'Tipo de procedimiento', v: 'Licitación Pública' },
            { l: 'Creación', v: '24/12/2025' },
            { l: 'Normativa', v: 'Ley N° 32069' },
          ].map(({ l, v, red }) => (
            <div key={l} className="flex flex-col gap-0.5">
              <span className="text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider">{l}</span>
              <span className={`font-['IBM_Plex_Mono',monospace] text-[12px] font-bold ${red ? 'text-[#294269]' : 'text-[#26292E]'}`}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trazabilidad */}
      <div className="bg-[#F6F9FC] border-b border-[#DEE3EA] px-6 py-2 flex items-center gap-2 flex-wrap">
        <span className="text-[10px] font-bold text-[#8A94A2] uppercase tracking-wider">Trazabilidad:</span>
        {[
          { label: 'Act. Preparatorias', state: 'done' },
          { label: 'Selección', state: 'done' },
          { label: 'Contratos', state: 'active' },
        ].map((s, i, arr) => (
          <div key={s.label} className="flex items-center gap-1">
            <span className={`px-2 py-0.5 rounded-full text-[9.5px] font-bold flex items-center gap-1 ${
              s.state === 'done' ? 'bg-[#EAF3DE] text-[#3B6D11]' :
              s.state === 'active' ? 'bg-[#63c9c4] text-white' :
              'bg-[#EDF0F4] text-[#8A94A2] border border-[#DEE3EA]'
            }`}>
              {s.state === 'done' && (
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
              )}
              {s.label}
            </span>
            {i < arr.length - 1 && <span className="text-[#C5CDDA] text-[9px]">›</span>}
          </div>
        ))}
      </div>

      {/* KPI Band */}
      <div className="bg-white border-b border-[#DEE3EA] flex overflow-x-auto">
        {[
          { l: 'Total contratos', v: '4', sub: 'del expediente', red: true },
          { l: 'Cuantía total contratada', v: 'S/ 1,057,700', sub: 'suma de contratos suscritos' },
          { l: 'Pagado acumulado', v: 'S/ 577,650', sub: '54.6% ejecutado', grn: true },
          { l: 'Por pagar', v: 'S/ 480,050', sub: '45.4% pendiente', org: true },
          { l: 'Vigentes', v: '3', sub: '1 con observación', grn: true },
          { l: 'Proveedores únicos', v: '2', sub: 'RNP activos' },
        ].map(({ l, v, sub, red, grn, org }) => (
          <div key={l} className="flex-1 min-w-[130px] px-4 py-3 border-r border-[#DEE3EA] last:border-r-0 flex flex-col gap-0.5">
            <span className="text-[10px] font-bold text-[#8A94A2] uppercase tracking-wider">{l}</span>
            <span className={`font-['IBM_Plex_Mono',monospace] text-[18px] font-bold leading-tight ${red ? 'text-[#294269]' : grn ? 'text-[#126B49]' : org ? 'text-[#D75600]' : 'text-[#26292E]'}`}>{v}</span>
            <span className="text-[10.5px] text-[#8A94A2]">{sub}</span>
          </div>
        ))}
      </div>


      {/* Filter chips */}
      <div className="bg-[#F6F9FC] border-b border-[#DEE3EA] px-6 py-2.5 flex items-center gap-2 flex-wrap">
        <span className="text-[11.5px] font-bold text-[#515458] mr-1">Filtrar:</span>
        {([
          { key: 'todos',     label: 'Todos (4)' },
          { key: 'vigente',   label: 'Vigentes (3)' },
          { key: 'observado', label: 'Con observación (1)' },
          { key: 'bien',      label: 'Bien' },
          { key: 'servicio',  label: 'Servicio' },
          { key: 'obra',      label: 'Obra' },
        ] as { key: FilterType; label: string }[]).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveFilter(key)}
            className={`px-3 py-1 rounded-full text-[11.5px] font-semibold border-[1.5px] transition-colors ${
              activeFilter === key
                ? 'border-[#63c9c4] bg-[#edf0f4] text-[#294269]'
                : 'border-[#DEE3EA] bg-white text-[#515458] hover:border-[#63c9c4] hover:text-[#63c9c4]'
            }`}
          >{label}</button>
        ))}
      </div>

      {/* Cards / Table */}
      <div className="p-5 max-w-[1400px] mx-auto">
        <div className="text-[11px] font-bold text-[#515458] uppercase tracking-[.06em] mb-3 flex items-center gap-3">
          Contratos suscritos del expediente
          <span className="flex-1 h-px bg-[#DEE3EA]" />
        </div>

        {/* ── Vista lista horizontal (table-like rows) ── */}
        {viewMode === 'horizontal' && (
          <div className="space-y-2">
            {filtered.map((c, i) => (
              <div key={c.id} className="bg-white border border-[#DEE3EA] rounded-[8px] hover:border-[#63c9c4] hover:shadow-md transition-all overflow-hidden flex group">
                {/* Left accent */}
                <div className="w-[6px] shrink-0 bg-[#63c9c4]" />
                {/* Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-center px-4 py-3 gap-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-bold text-[#0056AC] font-['IBM_Plex_Mono',monospace]">{c.nct}</span>
                    {objPill(c.object)}
                    {estadoBadge(c.estado)}
                  </div>
                  <p className="text-[12px] font-semibold text-[#26292E] line-clamp-1">{c.desc}</p>
                  <div className="flex items-center gap-4 flex-wrap text-[11px] text-[#515458]">
                    <span><span className="font-bold text-[#8A94A2] uppercase text-[9.5px] tracking-wider mr-1">Proveedor</span>{c.proveedor}</span>
                    <span><span className="font-bold text-[#8A94A2] uppercase text-[9.5px] tracking-wider mr-1">Lugar</span>{c.lugarEjecucion}</span>
                    {c.fechaSuscripcion && <span><span className="font-bold text-[#8A94A2] uppercase text-[9.5px] tracking-wider mr-1">Suscripción</span>{c.fechaSuscripcion}</span>}
                  </div>
                  {!c.pendiente && (
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex-1 max-w-[180px] h-[4px] bg-[#EDF0F4] rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${avanceFillCls(c.avance)}`} style={{ width: `${c.avance}%` }} />
                      </div>
                      <span className="text-[10px] font-bold text-[#515458]">{c.avance}% avance</span>
                    </div>
                  )}
                </div>
                {/* Right: cuantía + action */}
                <div className="shrink-0 flex flex-col items-end justify-center gap-2 px-4 border-l border-[#F0F2F5]">
                  {c.cuantia ? (
                    <span className="font-['IBM_Plex_Mono',monospace] text-[15px] font-bold text-[#0056AC]">{c.cuantia}</span>
                  ) : (
                    <span className="text-[11px] text-[#8A94A2] italic">Pendiente</span>
                  )}
                  {c.pendiente ? (
                    <button disabled className="px-3 py-1.5 bg-[#DEE3EA] text-[#8A94A2] rounded-[4px] text-[11px] font-bold cursor-not-allowed">Pendiente</button>
                  ) : (
                    <button onClick={() => navigate({ type: 'contrato-detail', id: c.id })}
                      className="flex items-center gap-1 px-3 py-1.5 bg-[#294269] text-white rounded-[4px] text-[11px] font-bold hover:bg-[#DC362E] transition-colors">
                      Ver ficha <ArrowRight size={10} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Vista tabla (list) ── */}
        {viewMode === 'list' && (
          <div className="overflow-x-auto rounded-[8px] border border-[#DEE3EA] bg-white">
            <table className="w-full border-collapse text-[12px]">
              <thead>
                <tr>
                  {['#', 'N° Contrato', 'Tipo', 'Estado', 'Descripción', 'Proveedor', 'Cuantía', 'Avance', 'Acción'].map(col => (
                    <th key={col} className="bg-[#294269] text-white px-3 py-2.5 text-left text-[11px] font-semibold font-['Roboto',sans-serif] whitespace-nowrap first:rounded-tl-[7px] last:rounded-tr-[7px]">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((c, i) => (
                  <tr key={c.id} className={`border-b border-[#F0F2F5] hover:bg-[#FEF2F2]/40 transition-colors ${i % 2 === 1 ? 'bg-[#F6F9FC]/60' : 'bg-white'}`}>
                    <td className="px-3 py-2.5 text-gray-400 font-bold text-center">{i + 1}</td>
                    <td className="px-3 py-2.5 whitespace-nowrap">
                      <p className="font-bold text-[#0056AC] text-[10.5px] font-['IBM_Plex_Mono',monospace]">{c.nct}</p>
                      <p className="text-[9.5px] text-[#8A94A2] mt-0.5">{c.nomenclatura}</p>
                    </td>
                    <td className="px-3 py-2.5">{objPill(c.object)}</td>
                    <td className="px-3 py-2.5">{estadoBadge(c.estado)}</td>
                    <td className="px-3 py-2.5 max-w-[200px]">
                      <p className="text-[#26292E] line-clamp-2 leading-snug">{c.desc}</p>
                    </td>
                    <td className="px-3 py-2.5 max-w-[160px]">
                      <p className="font-semibold text-[#26292E] line-clamp-1">{c.proveedor}</p>
                      <p className="text-[9.5px] text-[#8A94A2] font-['IBM_Plex_Mono',monospace]">{c.ruc}</p>
                    </td>
                    <td className="px-3 py-2.5 whitespace-nowrap">
                      {c.cuantia ? <span className="font-extrabold text-[#294269] font-['IBM_Plex_Mono',monospace]">{c.cuantia}</span> : <span className="text-[#8A94A2] italic text-[11px]">Pendiente</span>}
                    </td>
                    <td className="px-3 py-2.5">
                      {!c.pendiente && (
                        <div className="flex items-center gap-2">
                          <div className="w-[60px] h-[5px] bg-[#EDF0F4] rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${avanceFillCls(c.avance)}`} style={{ width: `${c.avance}%` }} />
                          </div>
                          <span className="text-[10px] font-bold text-[#515458]">{c.avance}%</span>
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-2.5 text-center">
                      {c.pendiente ? (
                        <button disabled className="px-2.5 py-1.5 bg-[#DEE3EA] text-[#8A94A2] rounded-[4px] text-[10px] font-bold cursor-not-allowed">Pendiente</button>
                      ) : (
                        <button onClick={() => navigate({ type: 'contrato-detail', id: c.id })}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#294269] text-white rounded-[4px] text-[10px] font-bold hover:bg-[#DC362E] transition-colors">
                          Ver ficha <ArrowRight size={9} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ── Vista grid (tarjetas) ── */}
        {viewMode === 'grid' && (
        <div className={`grid gap-4 grid-cols-1 md:grid-cols-2`}>
          {filtered.map(c => (
            <div
              key={c.id}
              className="bg-white border-[1.5px] border-[#DEE3EA] rounded-[8px] overflow-hidden shadow-sm hover:border-[#63c9c4] hover:shadow-md transition-all flex flex-col relative"
            >
              {/* Red bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#63c9c4]" />

              {/* Dark header */}
              <div className="bg-[#294269] px-3.5 py-2.5 flex items-center justify-between gap-2">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] text-white/55 font-['IBM_Plex_Mono',monospace]">{c.seqLabel}</span>
                  <span className="text-[12.5px] font-bold text-white font-['IBM_Plex_Mono',monospace] leading-tight">{c.nct}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {objPill(c.object)}
                  {estadoBadge(c.estado)}
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 p-3.5 flex flex-col gap-0 pb-6">
                <p className="text-[12.5px] text-[#3C3E43] line-clamp-2 leading-snug mb-3">{c.desc}</p>

                {/* Fields grid */}
                <div className="grid grid-cols-2 gap-x-2.5 gap-y-0 mb-2.5">
                  {/* Nomenclatura full width */}
                  <div className="col-span-2 flex flex-col py-1 border-b border-[#F6F9FC]">
                    <span className="text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider">Nomenclatura del proceso</span>
                    <span className="font-['IBM_Plex_Mono',monospace] text-[11.5px] font-bold text-[#26292E]">{c.nomenclatura}</span>
                  </div>
                  {/* Cuantía */}
                  {c.cuantia ? (
                    <>
                      <div className="flex flex-col py-1 border-b border-[#F6F9FC]">
                        <span className="text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider">Cuantía</span>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[14px] font-bold text-[#0056AC]">{c.cuantia}</span>
                      </div>
                      <div className="flex flex-col py-1 border-b border-[#F6F9FC]">
                        <span className="text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider">Moneda</span>
                        <span className="text-[11.5px] text-[#26292E]">Soles</span>
                      </div>
                      <div className="flex flex-col py-1 border-b border-[#F6F9FC]">
                        <span className="text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider">Fecha suscripción</span>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[11.5px] text-[#26292E]">{c.fechaSuscripcion}</span>
                      </div>
                      <div className="flex flex-col py-1 border-b border-[#F6F9FC]">
                        <span className="text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider">Fecha de inicio</span>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[11.5px] text-[#26292E]">{c.fechaInicio}</span>
                      </div>
                      <div className="flex flex-col py-1 border-b border-[#F6F9FC]">
                        <span className="text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider">Fecha de término</span>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[11.5px] text-[#26292E]">{c.fechaTermino}</span>
                      </div>
                      <div className="flex flex-col py-1 border-b border-[#F6F9FC]">
                        <span className="text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider">Lugar ejecución</span>
                        <span className="text-[11.5px] text-[#26292E]">{c.lugarEjecucion}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-span-2 flex flex-col py-1 border-b border-[#F6F9FC]">
                        <span className="text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider">Cuantía</span>
                        <span className="text-[11.5px] text-[#8A94A2] italic">Pendiente de suscripción — proceso de selección adjudicado</span>
                      </div>
                      <div className="flex flex-col py-1 border-b border-[#F6F9FC]">
                        <span className="text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider">Fecha adjudicación BP</span>
                        <span className="font-['IBM_Plex_Mono',monospace] text-[11.5px] text-[#26292E]">{c.fechaAdjudicacion}</span>
                      </div>
                      <div className="flex flex-col py-1 border-b border-[#F6F9FC]">
                        <span className="text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider">Plazo suscripción</span>
                        <span className="text-[11.5px] text-[#26292E]">{c.plazoSuscripcion}</span>
                      </div>
                      <div className="col-span-2 flex flex-col py-1 border-b border-[#F6F9FC]">
                        <span className="text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider">Buena pro otorgada a</span>
                        <span className="text-[11.5px] text-[#0056AC] underline cursor-pointer font-medium">{c.buenaPro}</span>
                      </div>
                      <div className="flex flex-col py-1 border-b border-[#F6F9FC]">
                        <span className="text-[9.5px] font-bold text-[#8A94A2] uppercase tracking-wider">Lugar ejecución</span>
                        <span className="text-[11.5px] text-[#26292E]">{c.lugarEjecucion}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Alert */}
                {c.alerta && (
                  <div className={`flex items-start gap-2 px-3 py-2 rounded-[4px] text-[11px] mb-2 ${
                    c.alertaTipo === 'warn'
                      ? 'bg-[#FFF3EA] border border-[#FDBA74] text-[#D75600]'
                      : 'bg-[#E1F0FF] border border-[#93C5FD] text-[#0056AC]'
                  }`}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5">
                      {c.alertaTipo === 'warn'
                        ? <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><path d="M12 9v4m0 4h.01"/></>
                        : <><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></>
                      }
                    </svg>
                    <span className="leading-snug">{c.alerta}</span>
                  </div>
                )}

                {/* Avance bar */}
                {!c.pendiente && (
                  <div className="mb-2.5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-[#8A94A2] uppercase tracking-wider">Avance financiero</span>
                      <span className={`text-[12px] font-bold font-['IBM_Plex_Mono',monospace] ${avancePctCls(c.avance, c.estado === 'observado')}`}>{c.avance}%</span>
                    </div>
                    <div className="h-[5px] bg-[#EDF0F4] rounded-[3px] overflow-hidden">
                      <div className={`h-full rounded-[3px] transition-all ${avanceFillCls(c.avance)}`} style={{ width: `${c.avance}%` }} />
                    </div>
                  </div>
                )}

                {/* Chips */}
                {c.chips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {c.chips.map((chip, i) => (
                      <span key={i} className={`px-1.5 py-0.5 rounded-[4px] text-[9.5px] font-bold border flex items-center gap-1 ${chipCls(chip.type)}`}>
                        {chip.type === 'gar' && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>}
                        {chip.type === 'conf' && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
                        {chip.label}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between gap-2 pt-2.5 border-t border-[#EDF0F4] mt-auto">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9.5px] text-[#8A94A2] font-['IBM_Plex_Mono',monospace]">RUC: {c.ruc}</span>
                    <span className="text-[11.5px] font-bold text-[#3C3E43] truncate">{c.proveedor}</span>
                  </div>
                  {c.pendiente ? (
                    <button disabled className="px-3 py-1.5 bg-[#DEE3EA] text-[#8A94A2] rounded-[4px] text-[11px] font-bold cursor-not-allowed">
                      Pendiente
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate({ type: 'contrato-detail', id: c.id })}
                      className="flex items-center gap-1 px-3 py-1.5 bg-[#294269] text-white rounded-[4px] text-[11px] font-bold hover:bg-[#DC362E] transition-colors shrink-0"
                    >
                      Ver ficha
                      <ArrowRight size={10} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}
