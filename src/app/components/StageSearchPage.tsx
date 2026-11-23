import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { ResultsHeader } from './ResultsHeader';
import { MainSearch } from './MainSearch';
import { ResultsTable } from './ResultsTable';
import { ResultsCards } from './ResultsCards';
import { ResultsCardsHorizontal } from './ResultsCardsHorizontal';
import { SearchFiltersPlanning } from './SearchFiltersPlanning';
import { SearchFiltersSelection } from './SearchFiltersSelection';
import { SearchFiltersFup } from './SearchFiltersFup';

type ViewMode = 'table' | 'cards' | 'list';

type Page =
  | { type: 'home' }
  | { type: 'search-planning' }
  | { type: 'search-selection' }
  | { type: 'search-fup' }
  | { type: 'search-contratos-menores' }
  | { type: 'search-all'; query: string }
  | { type: 'detail'; id: string };

interface StageSearchPageProps {
  stage: 'planning' | 'selection' | 'fup' | 'contratos-menores';
  navigate: (page: Page) => void;
}

const stageInfo = {
  planning: {
    title: 'Actuaciones Preparatorias',
    subtitle: 'Buscador Público de Contrataciones del Estado',
    accentColor: '#294269',
  },
  selection: {
    title: 'Selección',
    subtitle: 'Buscador Público de Contrataciones del Estado',
    accentColor: '#294269',
  },
  fup: {
    title: 'Contratos',
    subtitle: 'Buscador Público de Contrataciones del Estado',
    accentColor: '#294269',
  },
  'contratos-menores': {
    title: 'Contratos Menores',
    subtitle: 'Buscador Público de Contrataciones del Estado',
    accentColor: '#294269',
  },
};

const resultsCount: Record<string, number> = { planning: 423, selection: 356, fup: 298, 'contratos-menores': 187 };

export function StageSearchPage({ stage, navigate }: StageSearchPageProps) {
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [searchQuery, setSearchQuery] = useState('');
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

  const info = stageInfo[stage];

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <aside className={`bg-[#f5f5f5] border-r border-gray-200 transition-all duration-300 ${filtersOpen ? 'w-64' : 'w-0'} overflow-hidden shrink-0`}>
        {stage === 'planning' && <SearchFiltersPlanning onFiltersChange={setAppliedFilters} appliedFilters={appliedFilters} />}
        {stage === 'selection' && <SearchFiltersSelection onFiltersChange={setAppliedFilters} appliedFilters={appliedFilters} />}
        {stage === 'fup' && <SearchFiltersFup onFiltersChange={setAppliedFilters} appliedFilters={appliedFilters} navigate={navigate as any} />}
        {stage === 'contratos-menores' && <SearchFiltersPlanning onFiltersChange={setAppliedFilters} appliedFilters={appliedFilters} />}
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="absolute top-4 left-0 bg-[#63c9c4] text-white p-2 rounded-r-md hover:bg-[#3F5578] transition-colors z-10"
        >
          {filtersOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>

        <div className="flex-1 overflow-auto p-6 pt-2">
          {/* Back */}
          <button
            onClick={() => navigate({ type: 'home' })}
            className="flex items-center gap-2 text-[#294269] hover:text-[#9a0707] mb-4 font-['Roboto',sans-serif] font-medium"
          >
            <ArrowLeft size={20} />
            Volver al inicio
          </button>

          {/* Title */}
          <div className="mb-6 mt-2">
            <div className="flex items-center gap-4 mb-1">
              <div className="h-[47px] w-[5px] rounded-[2px]" style={{ backgroundColor: info.accentColor }} />
              <div>
                <h1 className="text-[24px] font-semibold text-[#294269] font-['Roboto',sans-serif]">
                  {info.title}
                </h1>
                <p className="text-sm text-gray-500 font-['Roboto',sans-serif]">{info.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Search bar with year */}
          <MainSearch
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={() => {}}
          />

          {/* Applied Filters */}
          {appliedFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {appliedFilters.map((filter, idx) => (
                <div key={idx} className="bg-gray-100 border border-gray-300 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm">
                  <span className="text-[#26292e] font-['Roboto',sans-serif]">{filter}</span>
                  <button onClick={() => setAppliedFilters(appliedFilters.filter((_, i) => i !== idx))} className="hover:bg-gray-200 rounded-full p-0.5">
                    <X size={13} className="text-gray-500" />
                  </button>
                </div>
              ))}
              <button onClick={() => setAppliedFilters([])} className="text-[#294269] hover:underline text-sm font-medium font-['Roboto',sans-serif]">
                Limpiar filtros
              </button>
            </div>
          )}

          {/* Results box */}
          <div className="bg-white rounded-[8px] shadow-sm mb-4">
            <ResultsHeader
              title="Resultados"
              count={`${resultsCount[stage].toLocaleString('es-PE')} encontrados`}
              viewMode={viewMode}
              onViewChange={setViewMode}
            />

            <div className="p-4">
              {viewMode === 'table' && <ResultsTable activeStage={stage} onSelectItem={(id) => String(id).startsWith('obra:') ? navigate({ type: 'obra-detail', id: String(id) }) : stage !== 'contratos-menores' && navigate({ type: 'detail', id: String(id), stage })} />}
              {viewMode === 'cards' && <ResultsCards activeStage={stage} onSelectItem={(id) => String(id).startsWith('obra:') ? navigate({ type: 'obra-detail', id: String(id) }) : stage !== 'contratos-menores' && navigate({ type: 'detail', id: String(id), stage })} />}
              {viewMode === 'list' && <ResultsCardsHorizontal activeStage={stage} onSelectItem={(id) => String(id).startsWith('obra:') ? navigate({ type: 'obra-detail', id: String(id) }) : stage !== 'contratos-menores' && navigate({ type: 'detail', id: String(id), stage })} />}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-4 border-t">
              <div className="text-sm text-gray-600 font-['Roboto',sans-serif]">
                Total: <span className="font-semibold">{resultsCount[stage].toLocaleString('es-PE')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 font-['Roboto',sans-serif]">Por página:</span>
                <select className="border rounded px-2 py-1 text-sm font-['Roboto',sans-serif]">
                  <option>10</option><option>25</option><option>50</option><option>100</option>
                </select>
                <div className="flex items-center gap-1 ml-2">
                  <button className="p-2 hover:bg-gray-100 rounded"><ChevronLeft size={16} /></button>
                  <button className="px-3 py-1 bg-[#63c9c4] text-white rounded text-sm">1</button>
                  <button className="px-3 py-1 hover:bg-gray-100 rounded text-sm">2</button>
                  <button className="px-3 py-1 hover:bg-gray-100 rounded text-sm">3</button>
                  <button className="p-2 hover:bg-gray-100 rounded"><ChevronRight size={16} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
