import { useState } from 'react';
import {
  Eye, Bookmark, Info, User,
  List, LayoutGrid, AlignJustify, ArrowUpDown,
  Search, Download
} from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';

interface RocosResultsProps {
  onSelectItem: (id: string) => void;
}

const mockRocosCards = [
  {
    id: '1',
    idec: '2026-000123-ROCOS',
    supuesto: 'Art. 5° inciso a - Contrataciones por montos < 8 UIT',
    entidad: 'Ministerio de Salud - MINSA',
    objeto: 'Bien',
    monto: 'S/ 12,450.00',
    fecha: '15/06/2026',
    titulo: 'Adquisición de insumos médicos para emergencias',
    descripcion: 'Compra de kits de primeros auxilios y material de curación para la atención inmediata en la región norte ante desastres naturales.',
    usuario: 'J. Perez',
    ocNum: 'O/C N° 10',
  },
  {
    id: '2',
    idec: '2026-000456-ROCOS',
    supuesto: 'Art. 5° inciso b - Contrataciones con proveedores extranjeros',
    entidad: 'Ministerio de Transportes y Comunicaciones',
    objeto: 'Servicio',
    monto: 'S/ 45,800.00',
    fecha: '14/06/2026',
    titulo: 'Servicio de mantenimiento preventivo de radares',
    descripcion: 'Mantenimiento especializado de sistemas de comunicación y radar para el control del tráfico aéreo nacional.',
    usuario: 'M. Lopez',
    ocNum: 'O/C N° 11',
  },
  {
    id: '3',
    idec: '2026-000789-ROCOS',
    supuesto: 'Normativa especial - Decreto de Urgencia 002-2026',
    entidad: 'EsSalud - Sede Central',
    objeto: 'Bien',
    monto: 'S/ 8,200.00',
    fecha: '13/06/2026',
    titulo: 'Adquisición de reactivos para laboratorio',
    descripcion: 'Compra directa de reactivos químicos necesarios para pruebas oncológicas de alta complejidad.',
    usuario: 'A. Garcia',
    ocNum: 'O/C N° 12',
  },
  {
    id: '4',
    idec: '2026-000912-ROCOS',
    supuesto: 'Art. 5° inciso d - Servicios de capacitación',
    entidad: 'Universidad Nacional Mayor de San Marcos',
    objeto: 'Servicio',
    monto: 'S/ 5,600.00',
    fecha: '12/06/2026',
    titulo: 'Capacitación en gestión pública moderna',
    descripcion: 'Servicio de capacitación especializada para el personal administrativo sobre el nuevo marco legal de contrataciones.',
    usuario: 'R. Torres',
    ocNum: 'O/C N° 13',
  },
  {
    id: '5',
    idec: '2026-001024-ROCOS',
    supuesto: 'Art. 5° inciso a - Contrataciones por montos < 8 UIT',
    entidad: 'Municipalidad Provincial del Cusco',
    objeto: 'Bien',
    monto: 'S/ 28,400.00',
    fecha: '11/06/2026',
    titulo: 'Adquisición de mobiliario para oficinas',
    descripcion: 'Equipamiento de las nuevas oficinas de atención al ciudadano con escritorios y sillas ergonómicas.',
    usuario: 'E. Ruiz',
    ocNum: 'O/C N° 14',
  },
  {
    id: '6',
    idec: '2026-001150-ROCOS',
    supuesto: 'Art. 5° inciso f - Servicios de defensa legal',
    entidad: 'Gobierno Regional de Piura',
    objeto: 'Servicio',
    monto: 'S/ 15,000.00',
    fecha: '10/06/2026',
    titulo: 'Asesoría legal para arbitrajes internacionales',
    descripcion: 'Contratación de estudio jurídico para la defensa de los intereses regionales en el proceso de arbitraje por obras viales.',
    usuario: 'D. Castillo',
    ocNum: 'O/C N° 15',
  },
  {
    id: '7',
    idec: '2026-001280-ROCOS',
    supuesto: 'Art. 5° inciso c - Arrendamiento de bienes inmuebles',
    entidad: 'RENIEC - Sede Lima',
    objeto: 'Servicio',
    monto: 'S/ 120,000.00',
    fecha: '09/06/2026',
    titulo: 'Arrendamiento de local para centro de datos',
    descripcion: 'Alquiler de infraestructura física para la instalación del nuevo centro de procesamiento de datos institucional.',
    usuario: 'S. Ramos',
    ocNum: 'O/C N° 16',
  },
  {
    id: '8',
    idec: '2026-001400-ROCOS',
    supuesto: 'Art. 5° inciso a - Contrataciones por montos < 8 UIT',
    entidad: 'Banco de la Nación',
    objeto: 'Bien',
    monto: 'S/ 4,500.00',
    fecha: '08/06/2026',
    titulo: 'Adquisición de papelería institucional',
    descripcion: 'Suministro de útiles de escritorio y papelería para las agencias del interior del país.',
    usuario: 'L. Vega',
    ocNum: 'O/C N° 17',
  },
];

type ViewMode = 'cards' | 'table' | 'horizontal';

// ── Card view ────────────────────────────────────────────────
function RocosCard({ data, index, onSelect }: { data: typeof mockRocosCards[0]; index: number; onSelect: (id: string) => void }) {
  const objColor: Record<string, string> = {
    'Bien': 'bg-blue-50 text-blue-700 border-blue-200',
    'Servicio': 'bg-purple-50 text-purple-700 border-purple-200',
    'Obra': 'bg-orange-50 text-orange-700 border-orange-200',
  };
  return (
    <div className="bg-white rounded-[8px] border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group">
      {/* Top: ID + OC tag (sin bookmark ni flecha) */}
      <div className="px-4 pt-4 pb-3 flex items-center justify-between gap-2">
        <span className="text-[13px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">{data.idec}</span>
        <span className="px-2 py-0.5 bg-[#edf0f4] text-[#294269] border border-[#dee3ea] rounded-[4px] text-[10px] font-bold shrink-0">{data.ocNum}</span>
      </div>

      {/* Título */}
      <div className="px-4 pb-2">
        <h4 className="text-[13px] font-bold text-[#26292E] leading-snug">{data.titulo}</h4>
      </div>

      {/* Supuesto strip — debajo del título */}
      <div className="mx-4 mb-3 px-3 py-2 bg-[#fff8ec] rounded-[6px] border border-orange-100 flex items-start gap-1.5">
        <Info size={12} className="text-orange-500 shrink-0 mt-0.5" />
        <p className="text-[10px] text-orange-700 leading-snug line-clamp-2">
          <span className="font-bold">Supuesto:</span> {data.supuesto}
        </p>
      </div>

      {/* Entidad / Objeto */}
      <div className="px-4 pb-3 grid grid-cols-2 gap-x-4 gap-y-2">
        <div>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Entidad</p>
          <p className="text-[12px] font-bold text-[#26292E] leading-snug line-clamp-2">{data.entidad}</p>
        </div>
        <div>
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Objeto</p>
          <span className={`inline-block px-2 py-0.5 rounded-[4px] text-[10px] font-bold border ${objColor[data.objeto] ?? 'bg-gray-50 text-gray-600 border-gray-200'}`}>{data.objeto}</span>
        </div>
      </div>

      {/* Monto / Fecha Registro — con fondo */}
      <div className="mx-4 mb-4 bg-[#f6f9fc] border border-gray-100 rounded-[6px] px-3 py-2.5 grid grid-cols-2 gap-x-4 divide-x divide-gray-200">
        <div className="pr-3">
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Monto</p>
          <p className="text-[14px] font-extrabold text-[#294269]">{data.monto}</p>
        </div>
        <div className="pl-3">
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Fecha Registro</p>
          <p className="text-[12px] font-semibold text-[#26292E]">{data.fecha}</p>
        </div>
      </div>

      {/* Ver detalle full-width */}
      <div className="mt-auto px-4 pb-4">
        <button
          onClick={() => onSelect(data.id)}
          className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#294269] text-white rounded-[16px] text-[12px] font-bold font-['Roboto',sans-serif] hover:bg-[#63c9c4] transition-colors"
        >
          <Eye size={14} />
          Ver detalle
        </button>
      </div>
    </div>
  );
}

// ── Horizontal list view ─────────────────────────────────────
function RocosRowHorizontal({ data, index, onSelect }: { data: typeof mockRocosCards[0]; index: number; onSelect: (id: string) => void }) {
  const objColor: Record<string, string> = {
    'Bien': 'bg-blue-50 text-blue-700 border-blue-200',
    'Servicio': 'bg-purple-50 text-purple-700 border-purple-200',
    'Obra': 'bg-orange-50 text-orange-700 border-orange-200',
  };
  return (
    <div className="bg-white rounded-[8px] border border-gray-200 hover:shadow-md transition-all overflow-hidden flex group">
      {/* Left index badge */}
      <div className="w-[40px] shrink-0 flex items-center justify-center bg-[#edf0f4] border-r border-gray-100">
        <span className="text-[12px] font-bold text-[#294269]">{String(index + 1).padStart(2, '0')}</span>
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0 flex flex-col justify-between py-3 px-4 gap-1.5">
        {/* Top row: ID + tag + monto */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex items-center gap-2 flex-wrap">
            <span className="text-[12px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">{data.idec}</span>
            <span className={`px-1.5 py-0.5 rounded-[3px] text-[9px] font-bold border ${objColor[data.objeto] ?? 'bg-gray-50 text-gray-600 border-gray-200'}`}>{data.objeto.toUpperCase()}</span>
            <span className="text-[10px] font-bold text-[#294269] bg-[#edf0f4] px-1.5 py-0.5 rounded-[3px]">{data.ocNum}</span>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[11px] font-extrabold text-[#294269]">{data.monto}</p>
          </div>
        </div>

        {/* Entity + title */}
        <div>
          <p className="text-[12px] font-bold text-[#26292E] leading-snug truncate">{data.entidad}</p>
          <p className="text-[11px] text-gray-500 leading-snug line-clamp-1">{data.titulo}</p>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5">
            <Info size={11} className="text-[#294269] shrink-0" />
            <span className="text-[10px] text-gray-500 line-clamp-1 max-w-[300px]">{data.supuesto}</span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <User size={11} className="text-gray-400 shrink-0" />
            <span className="text-[10px] text-gray-500">{data.usuario}</span>
            <span className="text-[10px] text-gray-400 ml-2">{data.fecha}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="shrink-0 flex flex-col items-center justify-center gap-2 px-3 border-l border-gray-100">
        <button className="p-1.5 text-gray-400 hover:text-[#294269] hover:bg-[#edf0f4] rounded transition-colors" title="Guardar">
          <Bookmark size={14} />
        </button>
        <button
          onClick={() => onSelect(data.id)}
          className="flex items-center gap-1 px-2.5 py-1.5 text-white bg-[#294269] hover:bg-[#3F5578] rounded-[6px] transition-all text-[11px] font-semibold"
          title="Ver detalle"
        >
          <Eye size={12} />
          Ver
        </button>
      </div>
    </div>
  );
}

// ── Table view ───────────────────────────────────────────────
function RocosTable({ data, onSelect }: { data: typeof mockRocosCards; onSelect: (id: string) => void }) {
  const cols = ['#', 'ID / N° OC', 'Entidad', 'Objeto', 'Supuesto', 'Monto', 'Fecha', 'Usuario', 'Acción'];
  return (
    <div className="overflow-x-auto rounded-[8px] border border-gray-200 bg-white">
      <table className="w-full border-collapse text-[12px]">
        <thead>
          <tr>
            {cols.map(c => (
              <th key={c} className="bg-[#294269] text-white px-3 py-2.5 text-left text-[11px] font-semibold font-['Roboto',sans-serif] whitespace-nowrap first:rounded-tl-[7px] last:rounded-tr-[7px]">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={item.id} className={`border-b border-gray-100 hover:bg-[#FEF2F2]/40 transition-colors ${i % 2 === 1 ? 'bg-[#F6F9FC]/60' : 'bg-white'}`}>
              <td className="px-3 py-2.5 text-gray-400 font-bold text-center">{i + 1}</td>
              <td className="px-3 py-2.5">
                <p className="font-bold text-[#0056AC] text-[11px] font-['Roboto',sans-serif] whitespace-nowrap">{item.idec}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{item.ocNum}</p>
              </td>
              <td className="px-3 py-2.5 max-w-[180px]">
                <p className="font-semibold text-[#26292E] line-clamp-1">{item.entidad}</p>
              </td>
              <td className="px-3 py-2.5">
                <span className={`px-2 py-0.5 rounded-[4px] text-[10px] font-bold border ${item.objeto === 'Bien' ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-purple-50 text-purple-700 border-purple-200'}`}>
                  {item.objeto}
                </span>
              </td>
              <td className="px-3 py-2.5 max-w-[200px]">
                <p className="text-gray-600 line-clamp-2 leading-snug">{item.supuesto}</p>
              </td>
              <td className="px-3 py-2.5 whitespace-nowrap">
                <span className="font-extrabold text-[#294269]">{item.monto}</span>
              </td>
              <td className="px-3 py-2.5 whitespace-nowrap text-gray-600">{item.fecha}</td>
              <td className="px-3 py-2.5">
                <div className="flex items-center gap-1.5">
                  <div className="size-5 rounded-full bg-gray-100 flex items-center justify-center">
                    <User size={10} className="text-gray-500" />
                  </div>
                  <span className="text-gray-700">{item.usuario}</span>
                </div>
              </td>
              <td className="px-3 py-2.5 text-center">
                <button
                  onClick={() => onSelect(item.id)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white border border-gray-200 rounded-[6px] text-[#294269] hover:bg-[#294269] hover:text-white hover:border-[#294269] transition-all text-[11px] font-semibold shadow-sm"
                  title="Ver detalle"
                >
                  <Eye size={12} />
                  Ver
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────
export function RocosResults({ onSelectItem }: RocosResultsProps) {
  const [view, setView] = useState<ViewMode>('cards');
  const [sortBy, setSortBy] = useState('Sin ordenar');
  const [search, setSearch] = useState('');

  const filtered = search.trim()
    ? mockRocosCards.filter(r =>
        r.idec.toLowerCase().includes(search.toLowerCase()) ||
        r.entidad.toLowerCase().includes(search.toLowerCase()) ||
        r.titulo.toLowerCase().includes(search.toLowerCase()) ||
        r.supuesto.toLowerCase().includes(search.toLowerCase())
      )
    : mockRocosCards;

  const viewButtons: { key: ViewMode; Icon: typeof List; label: string }[] = [
    { key: 'table',      Icon: List,         label: 'Vista tabla' },
    { key: 'cards',      Icon: LayoutGrid,   label: 'Vista tarjetas' },
    { key: 'horizontal', Icon: AlignJustify, label: 'Vista lista' },
  ];

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">

      {/* ── Toolbar ── */}
      <div className="bg-white border border-gray-200 rounded-[8px] overflow-hidden shadow-sm">
        {/* Row 1: título + view toggles */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <h2 className="text-[16px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">Resultados de búsqueda</h2>
            <span className="px-2.5 py-1 bg-[#edf0f4] text-[#294269] border border-[#dee3ea] rounded-[6px] text-[12px] font-bold font-['Roboto',sans-serif]">
              {filtered.length} encontrados
            </span>
          </div>
          <div className="flex items-center border border-gray-200 rounded-[6px] overflow-hidden">
            {viewButtons.map(({ key, Icon, label }) => (
              <button
                key={key}
                onClick={() => setView(key)}
                title={label}
                className={`px-3 py-2 transition-colors border-r border-gray-200 last:border-r-0 ${view === key ? 'bg-[#294269] text-white' : 'bg-white text-gray-400 hover:bg-gray-50 hover:text-[#26292E]'}`}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: sort + search + export */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-[#F6F9FC]">
          <div className="flex items-center gap-2 shrink-0">
            <ArrowUpDown size={13} className="text-gray-400" />
            <span className="text-[11px] text-gray-500 font-['Roboto',sans-serif]">Ordenar por:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-[11px] border border-gray-200 rounded-[5px] px-2 py-1 bg-white text-[#26292E] font-['Roboto',sans-serif] focus:outline-none focus:border-[#294269] cursor-pointer"
            >
              {['Sin ordenar', 'Fecha (más reciente)', 'Fecha (más antigua)', 'Monto (mayor)', 'Monto (menor)', 'Entidad A-Z'].map(o => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="flex-1 relative">
            <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar en resultados..."
              className="w-full pl-8 pr-3 py-1.5 text-[11px] border border-gray-200 rounded-[5px] bg-white font-['Roboto',sans-serif] focus:outline-none focus:border-[#294269] placeholder-gray-300"
            />
          </div>
          <button className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-[5px] bg-white text-[11px] font-semibold text-[#26292E] hover:bg-gray-50 transition-colors font-['Roboto',sans-serif]">
            <Download size={13} className="text-gray-500" />
            Exportar
          </button>
        </div>
      </div>

      {/* ── Views ── */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-14 text-gray-400 gap-2 bg-white rounded-[8px] border border-gray-200">
          <Search size={32} className="opacity-30" />
          <p className="text-[13px] font-['Roboto',sans-serif]">No se encontraron resultados para tu búsqueda.</p>
        </div>
      ) : view === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((item, idx) => (
            <RocosCard key={item.id} data={item} index={idx} onSelect={onSelectItem} />
          ))}
        </div>
      ) : view === 'horizontal' ? (
        <div className="space-y-3">
          {filtered.map((item, idx) => (
            <RocosRowHorizontal key={item.id} data={item} index={idx} onSelect={onSelectItem} />
          ))}
        </div>
      ) : (
        <RocosTable data={filtered} onSelect={onSelectItem} />
      )}
    </div>
  );
}
