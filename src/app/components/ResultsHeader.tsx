import { useState } from 'react';
import { Search, LayoutGrid, List, AlignJustify, Download, ArrowUpDown } from 'lucide-react';

type ViewMode = 'table' | 'cards' | 'list';

interface ResultsHeaderProps {
  title: string;
  count: number | string;
  viewMode: ViewMode;
  onViewChange: (v: ViewMode) => void;
}

export function ResultsHeader({ title, count, viewMode, onViewChange }: ResultsHeaderProps) {
  const [sortBy, setSortBy] = useState('');

  return (
    <>
      {/* Row 1: title + count + view toggle */}
      <div className="flex items-center justify-between gap-3 px-4 pt-3 pb-2 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <h2 className="font-semibold text-[#294269] font-['Roboto',sans-serif] whitespace-nowrap">{title}</h2>
          <div className="px-3 py-1 bg-[#63c9c4]/10 border border-[#63c9c4]/20 rounded-[8px]">
            <span className="text-sm font-bold text-[#0056AC] font-['Roboto',sans-serif]">{count}</span>
          </div>
        </div>
        <div className="flex bg-gray-100 rounded-[6px] p-1">
          <button onClick={() => onViewChange('table')} title="Vista tabla"
            className={`p-1.5 rounded-[4px] transition-colors ${viewMode === 'table' ? 'bg-white shadow text-[#63c9c4]' : 'text-gray-500 hover:text-[#26292E]'}`}>
            <List size={16} />
          </button>
          <button onClick={() => onViewChange('cards')} title="Vista tarjetas"
            className={`p-1.5 rounded-[4px] transition-colors ${viewMode === 'cards' ? 'bg-white shadow text-[#63c9c4]' : 'text-gray-500 hover:text-[#26292E]'}`}>
            <LayoutGrid size={16} />
          </button>
          <button onClick={() => onViewChange('list')} title="Vista lista horizontal"
            className={`p-1.5 rounded-[4px] transition-colors ${viewMode === 'list' ? 'bg-white shadow text-[#63c9c4]' : 'text-gray-500 hover:text-[#26292E]'}`}>
            <AlignJustify size={16} />
          </button>
        </div>
      </div>

      {/* Row 2: sort + search + export */}
      <div className="flex items-center gap-3 px-4 py-2 border-b border-gray-100 bg-gray-50/50">
        <ArrowUpDown size={13} className="text-gray-400 shrink-0" />
        <span className="text-[12px] text-gray-500 font-['Roboto',sans-serif] shrink-0">Ordenar por:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-200 rounded-[6px] py-1 px-2 text-[13px] text-[#26292E] font-['Roboto',sans-serif] bg-white focus:outline-none focus:border-[#63c9c4] cursor-pointer"
        >
          <option value="">Sin ordenar</option>
          <option value="fecha-desc">Fecha — más reciente</option>
          <option value="fecha-asc">Fecha — más antigua</option>
          <option value="tipo">Tipo de objeto</option>
          <option value="fase">Fase actual</option>
          <option value="entidad">Entidad</option>
          <option value="plazo">Plazo vigente</option>
        </select>
        <div className="flex-1" />
        <div className="relative shrink-0">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input
            type="text"
            placeholder="Buscar en resultados..."
            className="pl-8 pr-3 py-1 border border-gray-200 rounded-[6px] text-[13px] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif] w-48"
          />
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-[6px] transition-colors font-['Roboto',sans-serif] text-[13px] shrink-0 border border-gray-200">
          <Download size={14} />
          Exportar
        </button>
      </div>
    </>
  );
}
