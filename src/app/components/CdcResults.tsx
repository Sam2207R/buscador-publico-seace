import { useState } from 'react';
import { Download, List, LayoutGrid, Columns2, ArrowUpDown, Eye } from 'lucide-react';

interface CdcRecord {
  id: number;
  codigo: string;
  entidad: string;
  numero: string;
  desc: string;
  tipoProcedimiento: string;
  objeto: 'Bien' | 'Servicio' | 'Obra' | 'Consultoría';
  fechaPub: string;
  pecConvocado: 'Sí' | 'No';
  dir: string;
  web: string;
  telefono: string;
}

const CDC_DATA: CdcRecord[] = [
  {
    id: 1, codigo: 'CDC-212025-ANI',
    entidad: 'AUTORIDAD NACIONAL DE INFRAESTRUCTURA',
    numero: '212025',
    desc: 'DISEÑO Y CONSTRUCCIÓN DEL PROYECTO DE INVERSION PUBLICA: MEJORAMIENTO Y AMPLIACIÓN DEL SERVICIO DE ATENCIÓN DE SALUD BÁSICOS EN AGALLPAMPA, DISTRITO DE AGALLPAMPA DE LA PROVINCIA DE OTUZCO DEL DEPARTAMENTO DE LA LIBERTAD, CUI: 2643849.',
    tipoProcedimiento: 'Contratos Estandarizados',
    objeto: 'Obra', fechaPub: '30/12/2025 16:10:38',
    pecConvocado: 'Sí', dir: 'CALLE SCHELL 310 MIRAFLORES LIMA LIMA',
    web: 'HTTPS://WWW.GOB.PE/ANIN', telefono: '975417375',
  },
  {
    id: 2, codigo: 'CDC-212026-ANI',
    entidad: 'AUTORIDAD NACIONAL DE INFRAESTRUCTURA',
    numero: '212026',
    desc: 'CONSTRUCCIÓN DE PUENTE PEATONAL Y VÍA DE ACCESO EN EL CENTRO POBLADO DE SANTA ROSA, DISTRITO DE UCHIZA, PROVINCIA DE TOCACHE, DEPARTAMENTO DE SAN MARTÍN, CUI: 2589301.',
    tipoProcedimiento: 'Contratos Estandarizados',
    objeto: 'Obra', fechaPub: '02/01/2026 09:15:22',
    pecConvocado: 'Sí', dir: 'CALLE SCHELL 310 MIRAFLORES LIMA LIMA',
    web: 'HTTPS://WWW.GOB.PE/ANIN', telefono: '975417375',
  },
  {
    id: 3, codigo: 'CDC-212027-GORE-LA-LIB',
    entidad: 'GOBIERNO REGIONAL DE LA LIBERTAD',
    numero: '212027',
    desc: 'MEJORAMIENTO DE LA INFRAESTRUCTURA VIAL DE LA CARRETERA REGIONAL LI-103 TRAMO: OTUZCO - PARANDAY - TULPO, PROVINCIA DE OTUZCO, DEPARTAMENTO LA LIBERTAD, CUI: 2701234.',
    tipoProcedimiento: 'Contratos Estandarizados',
    objeto: 'Obra', fechaPub: '05/01/2026 14:30:10',
    pecConvocado: 'No', dir: 'AV. ESPAÑA 1800 TRUJILLO LA LIBERTAD',
    web: 'HTTPS://WWW.REGIONLALIBERTAD.GOB.PE', telefono: '044-234567',
  },
  {
    id: 4, codigo: 'CDC-212028-MINEM',
    entidad: 'MINISTERIO DE ENERGÍA Y MINAS',
    numero: '212028',
    desc: 'ELECTRIFICACIÓN RURAL DE 45 CENTROS POBLADOS EN LAS PROVINCIAS DE CHANCHAMAYO Y SATIPO, REGIÓN JUNÍN, BAJO LA MODALIDAD LLAVE EN MANO, CUI: 2712450.',
    tipoProcedimiento: 'Contratos Estandarizados',
    objeto: 'Obra', fechaPub: '08/01/2026 11:00:45',
    pecConvocado: 'Sí', dir: 'AV. LAS ARTES SUR 260 SAN BORJA LIMA',
    web: 'HTTPS://WWW.GOB.PE/MINEM', telefono: '01-4752612',
  },
  {
    id: 5, codigo: 'CDC-212029-MTC',
    entidad: 'MINISTERIO DE TRANSPORTES Y COMUNICACIONES',
    numero: '212029',
    desc: 'REHABILITACIÓN Y MEJORAMIENTO DE LA CARRETERA PE-3N: TRAMO TAYABAMBA - ONGÓN, PROVINCIA DE PATAZ, LA LIBERTAD. CUI: 2698745.',
    tipoProcedimiento: 'Contratos Estandarizados',
    objeto: 'Obra', fechaPub: '10/01/2026 08:45:30',
    pecConvocado: 'Sí', dir: 'JR. ZORRITOS 1203 LIMA CERCADO',
    web: 'HTTPS://WWW.GOB.PE/MTC', telefono: '01-6157800',
  },
  {
    id: 6, codigo: 'CDC-212030-MVCS',
    entidad: 'MINISTERIO DE VIVIENDA, CONSTRUCCIÓN Y SANEAMIENTO',
    numero: '212030',
    desc: 'INSTALACIÓN DEL SISTEMA DE AGUA POTABLE Y ALCANTARILLADO EN EL SECTOR 4 DEL DISTRITO DE CHANCAY, PROVINCIA DE HUARAL, LIMA. CUI: 2723891.',
    tipoProcedimiento: 'Contratos Estandarizados',
    objeto: 'Obra', fechaPub: '12/01/2026 16:20:00',
    pecConvocado: 'No', dir: 'AV. PASEO DE LA REPÚBLICA 3361 SAN ISIDRO LIMA',
    web: 'HTTPS://WWW.GOB.PE/VIVIENDA', telefono: '01-2119900',
  },
  {
    id: 7, codigo: 'CDC-212031-MINSA',
    entidad: 'MINISTERIO DE SALUD',
    numero: '212031',
    desc: 'CONSTRUCCIÓN Y EQUIPAMIENTO DEL HOSPITAL NIVEL II-1 EN EL DISTRITO DE TARAPOTO, PROVINCIA DE SAN MARTÍN, REGIÓN SAN MARTÍN. CUI: 2745621.',
    tipoProcedimiento: 'Contratos Estandarizados',
    objeto: 'Obra', fechaPub: '15/01/2026 10:35:15',
    pecConvocado: 'Sí', dir: 'AV. SALAVERRY 801 JESÚS MARÍA LIMA',
    web: 'HTTPS://WWW.GOB.PE/MINSA', telefono: '01-3156600',
  },
  {
    id: 8, codigo: 'CDC-212032-MEF',
    entidad: 'MINISTERIO DE ECONOMÍA Y FINANZAS',
    numero: '212032',
    desc: 'MODERNIZACIÓN DE LOS SISTEMAS DE INFORMACIÓN FINANCIERA DEL SECTOR PÚBLICO - FASE III: INTEGRACIÓN CON PLATAFORMAS SUBNACIONALES.',
    tipoProcedimiento: 'Contratos Estandarizados',
    objeto: 'Servicio', fechaPub: '18/01/2026 09:00:00',
    pecConvocado: 'No', dir: 'JR. JUNÍN 319 LIMA CERCADO',
    web: 'HTTPS://WWW.GOB.PE/MEF', telefono: '01-3115930',
  },
];

function objBgClass(_obj: string) {
  return 'bg-[#EDF0F4] text-[#5B6472] border border-[#DEE3EA]';
}

function PecBadge({ val }: { val: 'Sí' | 'No' }) {
  return val === 'Sí' ? (
    <span className="inline-flex items-center gap-1 text-[9.5px] font-bold px-2 py-0.5 rounded-[4px] bg-[#dcfce7] text-[#166534]">
      ● PEC convocado
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-[9.5px] font-bold px-2 py-0.5 rounded-[4px] bg-[#EDF0F4] text-[#515458]">
      ○ Sin PEC
    </span>
  );
}

function TrazPills() {
  return (
    <div className="flex items-center gap-1 flex-wrap">
      <span className="px-2 py-0.5 rounded-[4px] text-[10px] font-bold border bg-[#63c9c4] text-white border-[#63c9c4] font-['Roboto',sans-serif]">
        CDC
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

type Vista = 'grid' | 'lista' | 'ext';
type SortKey = '' | 'num-desc' | 'num-asc' | 'ent-asc';

interface CdcResultsProps {
  onSelectItem: (id: string) => void;
}

/* ── CARD GRID (3-col) ── */
function CardGrid({ r, onOpen }: { r: CdcRecord; onOpen: () => void }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[8px] flex flex-col overflow-hidden hover:shadow-md hover:border-gray-300 transition-all font-['Roboto',sans-serif]">
      <div className="p-3 flex-1 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <span className="text-[11px] font-bold text-[#0056AC] font-['Roboto',sans-serif] leading-tight">
            {r.codigo} · N° {r.numero}
          </span>
        </div>
        <p className="text-[11.5px] font-bold text-[#26292E] leading-snug">{r.entidad}</p>
        <p className="text-[11px] text-gray-500 uppercase leading-snug line-clamp-3">{r.desc}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-[10px] px-2 py-0.5 rounded-[4px] border font-semibold ${objBgClass(r.objeto)}`}>{r.objeto}</span>
          <PecBadge val={r.pecConvocado} />
        </div>
        <div className="mt-auto pt-2 border-t border-gray-100 flex gap-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Tipo procedimiento</span>
            <span className="text-[10px] font-medium text-[#26292E]">{r.tipoProcedimiento}</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">Publicación</span>
            <span className="text-[10px] font-medium font-['Roboto',sans-serif]">{r.fechaPub.split(' ')[0]}</span>
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
      <div className="h-[4px] bg-[#63c9c4]" />
    </div>
  );
}

/* ── CARD LISTA (horizontal) ── */
function CardLista({ r, onOpen }: { r: CdcRecord; onOpen: () => void }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[8px] overflow-hidden hover:shadow-md hover:border-gray-300 transition-all font-['Roboto',sans-serif]">
      <div className="flex items-stretch">
        <div className="flex-1 min-w-0 p-3 flex flex-col gap-1.5">
          <span className="text-[11px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">
            {r.codigo} · N° <strong>{r.numero}</strong>
          </span>
          <p className="text-[12px] font-bold text-[#26292E]">{r.entidad}</p>
          <p className="text-[11px] text-gray-500 uppercase line-clamp-2">{r.desc}</p>
          <div className="flex items-center gap-2 flex-wrap mt-1">
            <span className={`text-[10px] px-2 py-0.5 rounded-[4px] border font-semibold ${objBgClass(r.objeto)}`}>{r.objeto}</span>
            <PecBadge val={r.pecConvocado} />
            <span className="text-[10px] text-gray-400">{r.tipoProcedimiento}</span>
            <span className="text-[10px] text-gray-400">Pub.: <strong className="text-[#26292E]">{r.fechaPub.split(' ')[0]}</strong></span>
          </div>
        </div>
        <div className="shrink-0 border-l border-gray-100 p-3 flex flex-col items-end justify-between min-w-[160px]">
          <div className="flex flex-col gap-0.5 items-end">
            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">TRAZABILIDAD</span>
            <TrazPills />
          </div>
          <button
            onClick={onOpen}
            className="flex items-center gap-1 px-2.5 py-1 bg-[#63c9c4] text-white rounded-[5px] text-[11px] font-semibold hover:bg-[#3F5578] transition-colors mt-3 whitespace-nowrap"
          >
            <Eye size={11} />
            Ver detalle
          </button>
        </div>
      </div>
      <div className="h-[3px] bg-[#63c9c4]" />
    </div>
  );
}

/* ── CARD EXTENDIDA (2-col) ── */
function CardExt({ r, onOpen }: { r: CdcRecord; onOpen: () => void }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[8px] overflow-hidden hover:shadow-md hover:border-gray-300 transition-all font-['Roboto',sans-serif]">
      <div className="flex items-center justify-between px-3 py-2 bg-[#edf0f4] border-b border-gray-200">
        <span className="text-[11px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">{r.codigo}</span>
        <span className={`text-[10px] px-2 py-0.5 rounded-[4px] border font-semibold ${objBgClass(r.objeto)}`}>{r.objeto}</span>
      </div>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-[12px] font-bold text-[#26292E]">{r.entidad}</p>
        <p className="text-[11px] text-gray-500 uppercase line-clamp-2">{r.desc}</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-1">
          <div className="flex justify-between gap-2">
            <span className="text-[10px] text-gray-400">N° Proceso</span>
            <span className="text-[11px] font-bold text-[#26292E] font-['Roboto',sans-serif]">{r.numero}</span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-[10px] text-gray-400">Tipo Procedimiento</span>
            <span className="text-[10px] font-medium text-right">{r.tipoProcedimiento}</span>
          </div>
          <div className="flex justify-between gap-2 col-span-2">
            <span className="text-[10px] text-gray-400">Publicación</span>
            <span className="text-[10px] font-medium font-['Roboto',sans-serif]">{r.fechaPub}</span>
          </div>
          <div className="col-span-2">
            <PecBadge val={r.pecConvocado} />
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
      <div className="h-[4px] bg-[#63c9c4]" />
    </div>
  );
}

export function CdcResults({ onSelectItem }: CdcResultsProps) {
  const [vista, setVista] = useState<Vista>('grid');
  const [objFilter, setObjFilter] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('');

  let filtered = CDC_DATA.filter(d => !objFilter || d.objeto === objFilter);
  if (sortKey === 'num-desc') filtered = [...filtered].sort((a, b) => Number(b.numero) - Number(a.numero));
  else if (sortKey === 'num-asc') filtered = [...filtered].sort((a, b) => Number(a.numero) - Number(b.numero));
  else if (sortKey === 'ent-asc') filtered = [...filtered].sort((a, b) => a.entidad.localeCompare(b.entidad));

  const CHIPS = [
    { label: 'Todos', value: '' },
    { label: 'Bien', value: 'Bien' },
    { label: 'Servicio', value: 'Servicio' },
    { label: 'Obra', value: 'Obra' },
    { label: 'Consultoría', value: 'Consultoría' },
  ];

  return (
    <div className="flex flex-col gap-3 font-['Roboto',sans-serif]">
      {/* Subtitle */}
      <p className="text-[13px] text-gray-500">
        Mostrando resultados de <strong className="text-[#26292E]">Condiciones de Contratación (CDC)</strong> · Actuaciones Preparatorias
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
                ? 'bg-[#63c9c4] text-white border-[#63c9c4]'
                : 'bg-white text-[#26292E] border-gray-300 hover:border-[#63c9c4]/50 hover:text-[#63c9c4]'
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
          <span className="bg-[#63c9c4]/10 text-[#294269] border border-[#63c9c4]/20 px-2 py-0.5 rounded-full text-[11px] font-bold">
            {filtered.length} encontrado{filtered.length !== 1 ? 's' : ''}
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
              <option value="num-desc">Mayor N°</option>
              <option value="num-asc">Menor N°</option>
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
          {filtered.map(d => <CardGrid key={d.id} r={d} onOpen={() => onSelectItem(`cdc:${d.id}`)} />)}
        </div>
      ) : vista === 'lista' ? (
        <div className="flex flex-col gap-2">
          {filtered.map(d => <CardLista key={d.id} r={d} onOpen={() => onSelectItem(`cdc:${d.id}`)} />)}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {filtered.map(d => <CardExt key={d.id} r={d} onOpen={() => onSelectItem(`cdc:${d.id}`)} />)}
        </div>
      )}
    </div>
  );
}
