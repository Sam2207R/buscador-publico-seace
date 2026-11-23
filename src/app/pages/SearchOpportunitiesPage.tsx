import { useState } from 'react';
import { ArrowLeft, Building2, Calendar, Tag, ArrowRight, Clock, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockData } from '../components/mockData';
import { ResultsHeader } from '../components/ResultsHeader';
import type { Page } from '../App';

interface SearchOpportunitiesPageProps {
  navigate: (page: Page) => void;
}

// Only items in selection but not yet fup (have the clock icon)
const opportunityItems = mockData
  .filter(item => item.stages.includes('selection') && !item.stages.includes('fup'))
  .map(item => ({ ...item, type: 'CONTRATO MENOR' }));

export function SearchOpportunitiesPage({ navigate }: SearchOpportunitiesPageProps) {
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto p-6">
        {/* Back */}
        <button
          onClick={() => navigate({ type: 'home' })}
          className="flex items-center gap-2 text-[#294269] hover:text-[#9a0707] mb-5 font-['Roboto',sans-serif] font-medium text-[14px]"
        >
          <ArrowLeft size={18} />
          Volver al inicio
        </button>

        {/* Title */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[47px] w-[5px] rounded-[4px] bg-[#63c9c4]" />
          <div>
            <h1 className="text-[24px] font-semibold text-[#294269] font-['Roboto',sans-serif]">
              Oportunidades de Negocio
            </h1>
            <p className="text-sm text-gray-500 font-['Roboto',sans-serif]">
              Buscador Público de Contrataciones del Estado
            </p>
          </div>
        </div>

        {/* Info banner */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-[8px] p-4 mb-6">
          <Clock size={18} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-[13px] font-semibold text-amber-800 font-['Roboto',sans-serif]">
              Procesos con plazo activo para registro de participantes
            </p>
            <p className="text-[12px] text-amber-700 font-['Roboto',sans-serif] mt-0.5">
              Solo se muestran los contratos menores en los que aún puede participar. Verifique las fechas antes de postular.
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-[8px] shadow-sm">
          <ResultsHeader
            title="Oportunidades disponibles"
            count={`${opportunityItems.length} contratos menores`}
            viewMode={viewMode as any}
            onViewChange={(v) => { if (v !== 'table') setViewMode(v as 'cards' | 'list'); }}
          />

          <div className="p-4">
            {opportunityItems.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <div className="text-5xl mb-4">📋</div>
                <p className="font-['Roboto',sans-serif]">No hay oportunidades disponibles en este momento.</p>
              </div>
            ) : (
              <div className={viewMode === 'cards' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'flex flex-col gap-3'}>
                {opportunityItems.map((item) => (
                  viewMode === 'cards'
                    ? <OpportunityCard key={item.id} item={item} navigate={navigate} />
                    : <OpportunityCardHorizontal key={item.id} item={item} navigate={navigate} />
                ))}
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between p-4 border-t border-gray-100">
            <div className="text-[13px] text-gray-500 font-['Roboto',sans-serif]">
              Total: <span className="font-semibold text-[#26292E]">{opportunityItems.length}</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 hover:bg-gray-100 rounded-[4px]"><ChevronLeft size={16} /></button>
              <button className="px-3 py-1 bg-[#294269] text-white rounded-[4px] text-sm">1</button>
              <button className="p-1.5 hover:bg-gray-100 rounded-[4px]"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Label completo con días en negrita — exclusivo de Oportunidades
function ClockLabel({ days }: { days: number }) {
  return (
    <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 rounded-[6px] px-2.5 py-1.5">
      <Clock size={12} className="text-amber-500 shrink-0" />
      <span className="text-[11px] text-amber-700 font-['Roboto',sans-serif]">
        Faltan <span className="font-bold">{days} días</span> para culminar el registro de participantes
      </span>
    </div>
  );
}

// Card vertical para oportunidades
function OpportunityCard({ item, navigate }: { item: typeof opportunityItems[0]; navigate: (p: Page) => void }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[8px] p-5 hover:shadow-md transition-all font-['Roboto',sans-serif]">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="min-w-0 flex-1">
          <div className="text-[12px] font-bold text-[#0056AC] font-['Roboto',sans-serif] mb-0.5">{item.idec}</div>
          <div className="text-[11px] text-gray-500">{item.code}</div>
          <div className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
            <Calendar size={11} />
            {item.publicationDate}
          </div>
        </div>
        <button
          onClick={() => navigate({ type: 'detail', id: String(item.id), stage: 'selection' })}
          className="p-2 hover:bg-gray-100 rounded-[6px] transition-colors shrink-0"
        >
          <Eye size={16} className="text-gray-500" />
        </button>
      </div>

      {/* Entity */}
      <div className="flex items-start gap-2 mb-3">
        <Building2 size={14} className="text-gray-400 mt-0.5 shrink-0" />
        <button className="text-[12px] text-[#0056AC] hover:underline font-medium text-left line-clamp-2">{item.entity}</button>
      </div>

      {/* Description */}
      <p className="text-[12px] text-gray-600 mb-3 line-clamp-3">{item.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="px-2 py-0.5 bg-[#63c9c4]/10 text-[#294269] border border-[#63c9c4]/20 rounded-[4px] text-[10px] font-medium flex items-center gap-1">
          <Tag size={9} />
          {item.object}
        </span>
        <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-[4px] text-[10px] font-semibold">
          Oportunidad activa
        </span>
      </div>

      {/* Trazabilidad */}
      <div className="pt-3 border-t border-gray-100">
        <div className="flex items-center gap-1 text-[11px] mb-2 text-gray-500">
          <ArrowRight size={12} />
          <span className="font-medium">Trazabilidad:</span>
        </div>
        <div className="flex items-center gap-1 flex-wrap mb-3">
          {item.stages.filter(s => ['planning', 'selection', 'fup'].includes(s)).map((s, idx, arr) => (
            <div key={s} className="flex items-center gap-1">
              <span className="px-2 py-0.5 rounded-[4px] text-[10px] font-semibold border bg-gray-300 text-gray-600 border-gray-300">
                {s === 'planning' ? 'ActPrep' : s === 'selection' ? 'Selección' : 'Contratos'}
              </span>
              {idx < arr.length - 1 && <ArrowRight size={9} className="text-gray-400" />}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className="flex-1">
            <ClockLabel days={5} />
          </div>
          <button
            onClick={() => navigate({ type: 'detail', id: String(item.id), stage: 'selection' })}
            className="shrink-0 flex items-center gap-1.5 bg-[#63c9c4] text-white text-[11px] font-semibold font-['Roboto',sans-serif] px-3 py-2 rounded-[6px] hover:bg-[#3F5578] transition-colors whitespace-nowrap"
          >
            <svg className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
            </svg>
            Participar
          </button>
        </div>
      </div>
    </div>
  );
}

// Card horizontal para oportunidades
function OpportunityCardHorizontal({ item, navigate }: { item: typeof opportunityItems[0]; navigate: (p: Page) => void }) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-[8px] hover:shadow-md transition-all font-['Roboto',sans-serif] overflow-hidden">
      <div className="flex items-stretch">
        <div className="w-1 shrink-0 bg-amber-400" />
        <div className="flex-1 p-4 flex gap-4 items-center min-w-0">
          {/* IDEC + code */}
          <div className="shrink-0 w-44">
            <div className="text-[11px] font-bold text-[#0056AC] mb-0.5 truncate">{item.idec}</div>
            <div className="text-gray-500 text-[11px] mb-1 truncate">{item.code}</div>
            <div className="flex flex-col gap-1">
              <span className="px-2 py-0.5 bg-[#63c9c4]/10 text-[#294269] border border-[#63c9c4]/20 rounded-[4px] text-[10px] font-medium flex items-center gap-1 w-fit">
                <Tag size={9} />
                {item.object}
              </span>
              <span className="px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-[4px] text-[10px] font-semibold w-fit">
                Oportunidad activa
              </span>
            </div>
          </div>

          <div className="w-px bg-gray-100 self-stretch shrink-0" />

          {/* Entity + description */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-1.5 mb-1">
              <Building2 size={13} className="text-gray-400 mt-0.5 shrink-0" />
              <button className="text-[11px] text-[#0056AC] hover:underline font-medium truncate text-left">{item.entity}</button>
            </div>
            <p className="text-[13px] text-[#26292E] line-clamp-2">{item.description}</p>
          </div>

          <div className="w-px bg-gray-100 self-stretch shrink-0" />

          {/* Trazabilidad + clock label */}
          <div className="shrink-0 w-60">
            <p className="text-[10px] text-gray-400 mb-1.5 uppercase tracking-wide">Trazabilidad</p>
            <div className="flex items-center gap-1 flex-wrap mb-2">
              {item.stages.filter(s => ['planning', 'selection', 'fup'].includes(s)).map((s, idx, arr) => (
                <div key={s} className="flex items-center gap-0.5">
                  <span className="px-1.5 py-0.5 rounded-[4px] text-[10px] font-semibold border bg-gray-300 text-gray-600 border-gray-300">
                    {s === 'planning' ? 'ActPrep' : s === 'selection' ? 'Selección' : 'Contratos'}
                  </span>
                  {idx < arr.length - 1 && <ArrowRight size={8} className="text-gray-400" />}
                </div>
              ))}
            </div>
            <ClockLabel days={5} />
          </div>
        </div>

        <div className="flex flex-col gap-2 px-4 border-l border-gray-100 shrink-0">
          <button
            onClick={() => navigate({ type: 'detail', id: String(item.id), stage: 'selection' })}
            className="flex items-center gap-1.5 px-3 py-2 bg-[#294269] text-white rounded-[6px] hover:bg-[#3F5578] transition-colors text-[12px] font-medium whitespace-nowrap"
          >
            <Eye size={13} />
            Ver detalle
          </button>
          <button
            onClick={() => navigate({ type: 'detail', id: String(item.id), stage: 'selection' })}
            className="flex items-center gap-1.5 px-3 py-2 border-2 border-[#294269] text-[#294269] rounded-[6px] hover:bg-[#63c9c4]/5 transition-colors text-[12px] font-semibold whitespace-nowrap"
          >
            <svg className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
            </svg>
            Participar
          </button>
        </div>
      </div>
    </div>
  );
}
