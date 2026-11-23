import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowLeft, Search } from 'lucide-react';
import { UnifiedSidebarFilter } from '../components/UnifiedSidebarFilter';
import { ResultsTable } from '../components/ResultsTable';
import { ResultsCards } from '../components/ResultsCards';
import { ResultsCardsHorizontal } from '../components/ResultsCardsHorizontal';
import { ResultsHeader } from '../components/ResultsHeader';
import { RocosResults } from '../components/RocosResults';
import { ContratosResults } from '../components/ContratosResults';
import { SeaceV3Results } from '../components/SeaceV3Results';
import { AcfResults } from '../components/AcfResults';
import { DreqResults } from '../components/DreqResults';
import { CdcResults } from '../components/CdcResults';
import { CMResults } from '../components/CMResults';
import type { Page } from '../App';

interface SearchAllPageProps {
  query: string;
  navigate: (page: Page) => void;
}

export function SearchAllPage({ query, navigate }: SearchAllPageProps) {
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [viewMode, setViewMode] = useState<'table' | 'cards' | 'list'>('list');
  const [searchQuery, setSearchQuery] = useState(query);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

  const totalResults = 1265;
  
  // Detectamos si la fase seleccionada en los filtros es ROCOS
  const isRocos = appliedFilters.some(f => f.toLowerCase().includes('rocos')) || 
                  appliedFilters.some(f => f.toLowerCase().includes('excluidos'));
  
  // Detectamos si la fase seleccionada en los filtros es CONTRATOS
  const isContratos = appliedFilters.some(f => (f.toLowerCase().includes('fase: contratos') || f.toLowerCase().includes('contrato')) && !f.toLowerCase().includes('menores'));
  const isContratosMenores = appliedFilters.some(f => f.toLowerCase().includes('contratos menores'));

  // Detectamos si la versión SEACE es V3
  const isSeaceV3 = appliedFilters.some(f => f.toUpperCase().includes('V3'));

  // Detectamos si la herramienta seleccionada es ACF
  const isACF = appliedFilters.some(f => f.toLowerCase() === 'herramienta: acf');

  // Detectamos si la herramienta seleccionada es DDR (Difusión de Requerimientos)
  const isDREQ = appliedFilters.some(f => f.toLowerCase() === 'herramienta: difusion');

  // Detectamos si la herramienta seleccionada es CDC (Condiciones de Contratación)
  const isCDC = appliedFilters.some(f => f.toLowerCase() === 'herramienta: condiciones');

  const handleSidebarSearch = (q: string, f: string, other: any) => {
    setSearchQuery(q);
    // Si la fase que viene del Sidebar es 'rocos', forzamos el filtro
    if (f === 'rocos') {
      if (!appliedFilters.includes('Fase: ROCOS - Supuestos Excluidos')) {
        setAppliedFilters([...appliedFilters, 'Fase: ROCOS - Supuestos Excluidos']);
      }
    }
  };

  const activeStage = 'all';

  return (
    <div className="flex flex-1 overflow-hidden">

      {/* ── Sidebar Filters ── */}
      <aside className={`bg-[#f5f5f5] border-r border-gray-200 transition-all duration-300 flex flex-col ${filtersOpen ? 'w-72' : 'w-0'} overflow-hidden shrink-0`}>
        <UnifiedSidebarFilter
          onFiltersChange={(filters) => {
            // Si el filtro contiene explícitamente "Contratos" y no es "Contratos menores"
            const isContratosFilter = filters.some(f => 
              (f.toLowerCase().includes('contrato') || f.toLowerCase().includes('fase: contratos')) 
              && !f.toLowerCase().includes('menores')
            );
            
            if (isContratosFilter) {
              // Redirigir directamente a la vista de lista de contratos según lo solicitado
              navigate({ type: 'contratos-lista' });
            } else {
              setAppliedFilters(filters);
            }
          }}
          appliedFilters={appliedFilters}
        />
      </aside>

      {/* ── Main Content ── */}
      <main className="flex-1 flex flex-col overflow-hidden relative">

        {/* Toggle sidebar button */}
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="absolute top-4 left-0 bg-[#63c9c4] text-white p-1.5 rounded-r-md hover:bg-[#3F5578] transition-colors z-10"
        >
          {filtersOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>

        <div className="flex-1 overflow-auto px-6 pt-4 pb-6">

          {/* Back */}
          <button
            onClick={() => navigate({ type: 'home' })}
            className="flex items-center gap-2 text-[#294269] hover:text-[#9a0707] mb-4 font-['Roboto',sans-serif] font-medium text-[13px]"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </button>

          {/* Title */}
          <div className="flex items-center gap-4 mb-5">
            <div className="bg-[#e2a615] h-[40px] w-[5px] rounded-[2px]" />
            <div>
              <h1 className="text-[22px] font-semibold text-[#294269] font-['Roboto',sans-serif]">
                Buscador Público de Contrataciones del Estado
              </h1>
              <p className="text-[13px] text-gray-500 font-['Roboto',sans-serif]">
                Resultados para: <strong className="text-[#26292E]">"{query}"</strong>
              </p>
            </div>
          </div>

          {/* Search bar inline */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex-1 flex items-center border-2 border-gray-200 rounded-[8px] bg-white overflow-hidden focus-within:border-[#63c9c4] transition-colors shadow-sm">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && navigate({ type: 'search-all', query: searchQuery })}
                placeholder="Refinar búsqueda..."
                className="flex-1 px-4 py-2.5 text-[14px] bg-transparent outline-none font-['Roboto',sans-serif] text-[#26292E] placeholder-gray-400"
              />
              <button
                onClick={() => navigate({ type: 'search-all', query: searchQuery })}
                className="px-4 bg-[#63c9c4] text-white h-full hover:bg-[#3F5578] transition-colors flex items-center py-2.5"
              >
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Applied filter chips */}
          {appliedFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {appliedFilters.map((filter, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-[#63c9c4]/8 border border-[#63c9c4]/20 px-2.5 py-1 rounded-[6px] text-[12px] font-['Roboto',sans-serif]">
                  <span className="text-[#26292E]">{filter}</span>
                  <button
                    onClick={() => setAppliedFilters(appliedFilters.filter((_, i) => i !== idx))}
                    className="text-gray-400 hover:text-[#63c9c4] transition-colors"
                  >
                    <X size={11} />
                  </button>
                </div>
              ))}
              <button
                onClick={() => setAppliedFilters([])}
                className="flex items-center gap-1 text-[12px] text-[#0056AC] hover:underline font-medium font-['Roboto',sans-serif]"
              >
                <X size={12} />
                Limpiar todos
              </button>
            </div>
          )}

          <div className="bg-[#F9FAFB] rounded-[8px] overflow-hidden">
            {!isRocos && !isContratos && !isContratosMenores && !isSeaceV3 && !isACF && !isDREQ && !isCDC && (
              <div className="bg-white shadow-sm mb-4 border border-gray-200 rounded-[8px]">
                <ResultsHeader
                  title="Resultados de búsqueda"
                  count={`${totalResults.toLocaleString('es-PE')} encontrados`}
                  viewMode={viewMode}
                  onViewChange={setViewMode}
                />
              </div>
            )}
            <div className="p-0">
              {isCDC ? (
                <div className="p-4 bg-white shadow-sm border border-gray-200 rounded-[8px]">
                  <CdcResults
                    onSelectItem={id => navigate({ type: 'cdc-detail', id: String(id) })}
                  />
                </div>
              ) : isDREQ ? (
                <div className="p-4 bg-white shadow-sm border border-gray-200 rounded-[8px]">
                  <DreqResults />
                </div>
              ) : isACF ? (
                <div className="p-4 bg-white shadow-sm border border-gray-200 rounded-[8px]">
                  <AcfResults navigate={navigate} />
                </div>
              ) : isRocos ? (
                <div className="p-4 bg-white shadow-sm border border-gray-200 rounded-[8px]">
                  <RocosResults 
                    onSelectItem={id => String(id).startsWith('obra:') ? navigate({ type: 'obra-detail', id: String(id) }) : String(id).startsWith('bien:') ? navigate({ type: 'bienes-detail', id: String(id) }) : String(id).startsWith('servicio:') ? navigate({ type: 'servicio-detail', id: String(id) }) : navigate({ type: 'detail', id: String(id), stage: 'planning' })} 
                  />
                </div>
              ) : isContratosMenores ? (
                <div className="p-0 bg-[#F6F9FC]">
                  <CMResults />
                </div>
              ) : isContratos ? (
                <div className="p-4 bg-white shadow-sm border border-gray-200 rounded-[8px]">
                  <ContratosResults 
                    onSelectItem={id => navigate({ type: 'contratos-lista' })} 
                  />
                </div>
              ) : isSeaceV3 ? (
                <div className="p-0">
                  <SeaceV3Results 
                    onSelectItem={id => String(id).startsWith('obra:') ? navigate({ type: 'obra-detail', id: String(id) }) : String(id).startsWith('bien:') ? navigate({ type: 'bienes-detail', id: String(id) }) : String(id).startsWith('servicio:') ? navigate({ type: 'servicio-detail', id: String(id) }) : navigate({ type: 'detail', id: String(id), stage: 'selection' })} 
                  />
                </div>
              ) : (
                <div className="p-4 bg-white border border-gray-200 rounded-[8px]">
                  {viewMode === 'table' && (
                    <ResultsTable
                      activeStage={activeStage}
                      onSelectItem={id => String(id).startsWith('obra:') ? navigate({ type: 'obra-detail', id: String(id) }) : String(id).startsWith('bien:') ? navigate({ type: 'bienes-detail', id: String(id) }) : String(id).startsWith('servicio:') ? navigate({ type: 'servicio-detail', id: String(id) }) : navigate({ type: 'detail', id: String(id), stage: 'planning' })}
                    />
                  )}
                  {viewMode === 'cards' && (
                    <ResultsCards
                      activeStage={activeStage}
                      onSelectItem={id => String(id).startsWith('obra:') ? navigate({ type: 'obra-detail', id: String(id) }) : String(id).startsWith('bien:') ? navigate({ type: 'bienes-detail', id: String(id) }) : String(id).startsWith('servicio:') ? navigate({ type: 'servicio-detail', id: String(id) }) : navigate({ type: 'detail', id: String(id), stage: 'planning' })}
                    />
                  )}
                  {viewMode === 'list' && (
                    <ResultsCardsHorizontal
                      activeStage={activeStage}
                      onSelectItem={id => String(id).startsWith('obra:') ? navigate({ type: 'obra-detail', id: String(id) }) : String(id).startsWith('bien:') ? navigate({ type: 'bienes-detail', id: String(id) }) : String(id).startsWith('servicio:') ? navigate({ type: 'servicio-detail', id: String(id) }) : navigate({ type: 'detail', id: String(id), stage: 'planning' })}
                    />
                  )}
                </div>
              )}
            </div>

            {/* Pagination */}
            {!isRocos && !isContratos && !isContratosMenores && !isSeaceV3 && !isACF && !isDREQ && !isCDC && (
              <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
                <div className="text-[13px] text-gray-600 font-['Roboto',sans-serif]">
                  Total: <span className="font-semibold">{totalResults.toLocaleString('es-PE')}</span> registros
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] text-gray-500 font-['Roboto',sans-serif]">Por página:</span>
                  <select className="border border-gray-200 rounded px-2 py-1 text-[12px] font-['Roboto',sans-serif] focus:outline-none focus:border-[#63c9c4]">
                    <option>10</option><option>25</option><option>50</option><option>100</option>
                  </select>
                  <div className="flex items-center gap-1 ml-2">
                    <button className="p-1.5 hover:bg-gray-100 rounded transition-colors"><ChevronLeft size={16} /></button>
                    <button className="px-3 py-1 bg-[#63c9c4] text-white rounded text-[13px]">1</button>
                    <button className="px-3 py-1 hover:bg-gray-100 rounded text-[13px]">2</button>
                    <button className="px-3 py-1 hover:bg-gray-100 rounded text-[13px]">3</button>
                    <button className="p-1.5 hover:bg-gray-100 rounded transition-colors"><ChevronRight size={16} /></button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
