import { useState } from 'react';
import { Search, X, LayoutGrid, List, AlignJustify, Download, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { MainSearch } from '../components/MainSearch';
import { SearchFilters } from '../components/SearchFilters';
import { ResultsTable } from '../components/ResultsTable';
import { ResultsCards } from '../components/ResultsCards';
import { ResultsCardsHorizontal } from '../components/ResultsCardsHorizontal';

import type { Page } from '../App';

interface SearchPageProps {
  stage: 'planning' | 'selection' | 'fup' | 'contracts';
  navigate: (page: Page) => void;
}

export function SearchPage({ stage, navigate }: SearchPageProps) {
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [viewMode, setViewMode] = useState<'table' | 'cards' | 'list'>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

  const stageLabels = {
    planning: 'Planificación y ACF',
    selection: 'Procedimientos de selección',
    fup: 'FUP',
    contracts: 'Contratos'
  };

  // Mock: Total de resultados para esta etapa específica
  const resultsCount = {
    planning: 423,
    selection: 356,
    fup: 298,
    contracts: 188
  };

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar Filters */}
      <aside className={`bg-[#f5f5f5] border-r border-gray-200 transition-all duration-300 ${filtersOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
        <SearchFilters
          onFiltersChange={setAppliedFilters}
          appliedFilters={appliedFilters}
        />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Toggle Filters Button */}
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="absolute top-4 left-0 bg-[#63c9c4] text-white p-2 rounded-r-md hover:bg-[#3F5578] transition-colors z-10"
        >
          {filtersOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>

        <div className="flex-1 overflow-auto p-6 pt-2">
          {/* Back Button */}
          <button
            onClick={() => navigate({ type: 'home' })}
            className="flex items-center gap-2 text-[#294269] hover:text-[#9a0707] mb-4 font-['Roboto',sans-serif] font-medium"
          >
            <ArrowLeft size={20} />
            Volver al inicio
          </button>

          {/* Page Title with accent */}
          <div className="mb-6 mt-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#e2a615] h-[47px] w-[5px] rounded-[2px]" />
              <h1 className="text-[24px] font-semibold text-[#294269] font-['Roboto',sans-serif]">
                Buscador de {stageLabels[stage]}
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <MainSearch
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={() => console.log('Searching:', searchQuery)}
          />

          {/* Applied Filters */}
          {appliedFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {appliedFilters.map((filter, idx) => (
                <div
                  key={idx}
                  className="bg-[#e9f7f7] border border-[#8fd9d5] flex items-center gap-2 px-4 py-2 rounded-lg text-sm"
                >
                  <span className="text-[#26292e] font-['Roboto',sans-serif]">{filter}</span>
                  <button
                    onClick={() => setAppliedFilters(appliedFilters.filter((_, i) => i !== idx))}
                    className="hover:bg-[#8fd9d5]/20 rounded-full p-0.5"
                  >
                    <X size={14} className="text-[#2CB2A9]" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => setAppliedFilters([])}
                className="text-[#26292E] hover:text-[#007ba3] text-sm font-medium font-['Roboto',sans-serif]"
              >
                Limpiar filtro
              </button>
            </div>
          )}

          {/* Results Header */}
          <div className="bg-white rounded-lg shadow-sm mb-4">
            <div className="flex flex-wrap items-center justify-between gap-2 p-4 border-b">
              <div className="flex items-center gap-3 min-w-0">
                <h2 className="font-semibold text-[#294269] font-['Roboto',sans-serif] whitespace-nowrap">Resultados</h2>
                <div className="px-3 py-1 bg-[#e2a615]/10 border border-[#e2a615]/30 rounded-full whitespace-nowrap">
                  <span className="text-sm font-bold text-[#0056AC] font-['Roboto',sans-serif]">
                    {resultsCount[stage].toLocaleString('es-PE')} encontrados
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {/* View Mode Toggle */}
                <div className="flex bg-gray-100 rounded-md p-1 shrink-0">
                  <button
                    onClick={() => setViewMode('table')}
                    className={`p-2 rounded transition-colors ${viewMode === 'table' ? 'bg-white shadow text-[#63c9c4]' : 'text-gray-500 hover:text-[#26292E]'}`}
                    title="Vista de tabla"
                  >
                    <List size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('cards')}
                    className={`p-2 rounded transition-colors ${viewMode === 'cards' ? 'bg-white shadow text-[#63c9c4]' : 'text-gray-500 hover:text-[#26292E]'}`}
                    title="Vista de tarjetas"
                  >
                    <LayoutGrid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-white shadow text-[#63c9c4]' : 'text-gray-500 hover:text-[#26292E]'}`}
                    title="Vista de lista horizontal"
                  >
                    <AlignJustify size={16} />
                  </button>
                </div>

                {/* Search within results */}
                <div className="relative shrink-0">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
                  <input
                    type="text"
                    placeholder="Buscar..."
                    className="pl-8 pr-3 py-1.5 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#26292E] font-['Roboto',sans-serif] w-36"
                  />
                </div>

                {/* Export Button */}
                <button className="flex items-center gap-1.5 px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded-md transition-colors font-['Roboto',sans-serif] text-sm shrink-0 border border-gray-200">
                  <Download size={15} />
                  Exportar
                </button>
              </div>
            </div>

            {/* Results Content */}
            <div className="p-4">
              {viewMode === 'table' && (
                <ResultsTable
                  activeStage={stage}
                  onSelectItem={(id) => navigate({ type: 'detail', id: String(id) })}
                />
              )}
              {viewMode === 'cards' && (
                <ResultsCards
                  activeStage={stage}
                  onSelectItem={(id) => navigate({ type: 'detail', id: String(id) })}
                />
              )}
              {viewMode === 'list' && (
                <ResultsCardsHorizontal
                  activeStage={stage}
                  onSelectItem={(id) => navigate({ type: 'detail', id: String(id) })}
                />
              )}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 border-t">
              <div className="text-sm text-gray-600 font-['Roboto',sans-serif]">
                Total de registros: <span className="font-semibold">{resultsCount[stage].toLocaleString('es-PE')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 font-['Roboto',sans-serif]">Registros por página:</span>
                <select className="border rounded px-2 py-1 text-sm font-['Roboto',sans-serif]">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
                <div className="flex items-center gap-1 ml-4">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <ChevronLeft size={18} />
                  </button>
                  <button className="px-3 py-1 bg-[#63c9c4] text-white rounded">1</button>
                  <button className="px-3 py-1 hover:bg-gray-100 rounded">2</button>
                  <button className="px-3 py-1 hover:bg-gray-100 rounded">3</button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
