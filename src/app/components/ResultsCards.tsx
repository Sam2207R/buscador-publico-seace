import { Eye, Calendar, Clock, Bookmark, Download } from 'lucide-react';
import { useState } from 'react';
import { mockData, stageConfig, ALL_STAGES } from './mockData';
import { ActPrepBadge } from './ActPrepBadge';
import { CMDetailModal } from './CMDetailModal';
import { useFavorites } from '../context/FavoritesContext';

interface ResultsCardsProps {
  activeStage: string;
  onSelectItem: (id: number | string) => void;
}

export function ResultsCards({ activeStage, onSelectItem }: ResultsCardsProps) {
  const filteredData = activeStage === 'all'
    ? mockData
    : mockData.filter(item => item.stages.includes(activeStage));
  const [openCMId, setOpenCMId] = useState<number | null>(null);
  const { toggleFavorite, isFavorite } = useFavorites();

  if (filteredData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500">
        <div className="text-6xl mb-4">📋</div>
        <p className="font-['Roboto',sans-serif]">No se encontraron resultados según los criterios de búsqueda establecidos.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {openCMId !== null && (() => {
        const cmItem = filteredData.find(i => i.id === openCMId);
        return cmItem ? <CMDetailModal item={cmItem as any} onClose={() => setOpenCMId(null)} /> : null;
      })()}
      {filteredData.map((item) => {
        const reachedStages = ALL_STAGES.filter(s => item.stages.includes(s));
        const hasActiveClock = item.stages.includes('selection') && !item.stages.includes('fup');

        return (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-[8px] hover:shadow-lg transition-all font-['Roboto',sans-serif] flex flex-col"
          >
            {/* Card body */}
            <div className="flex-1 p-4">

              {/* Header row: IDEC + star + clock */}
              <div className="flex items-start justify-between gap-2 mb-1">
                <p className="text-[12px] font-bold text-[#0056AC] font-['Roboto',sans-serif] leading-tight">
                  {item.idec}
                </p>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => toggleFavorite({ id: item.id, idec: item.idec, code: item.code, entity: item.entity, description: item.description, object: item.object, cubso: item.cubso, stages: item.stages, publicationDate: item.publicationDate, status: item.status })}
                    className="p-1 hover:bg-[#63c9c4]/10 transition-colors rounded-[3px]"
                    title={isFavorite(item.id) ? 'Quitar de lista de interés' : 'Agregar a lista de interés'}
                  >
                    <Bookmark
                      size={15}
                      className={isFavorite(item.id) ? 'text-[#E2A615] fill-[#E2A615]' : 'text-gray-400'}
                    />
                  </button>
                  {hasActiveClock && (
                    <div className="relative group">
                      <div className={`p-1 cursor-default border rounded-[3px] ${item.daysLeft === 0 ? 'bg-red-50 border-red-200' : item.daysLeft === 1 ? 'bg-orange-50 border-orange-200' : 'bg-amber-50 border-amber-200'}`}>
                        <Clock size={11} className={item.daysLeft === 0 ? 'text-red-500' : item.daysLeft === 1 ? 'text-orange-500' : 'text-amber-500'} />
                      </div>
                      <div className="absolute right-0 top-full mt-1.5 z-50 w-48 bg-[#294269] text-white text-[11px] font-['Roboto',sans-serif] rounded-[4px] px-3 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none leading-snug">
                        {item.daysLeft === 0 ? 'Hoy culmina el registro de participantes' :
                         item.daysLeft === 1 ? 'Falta 01 día para culminar el registro de participantes' :
                         `Faltan ${String(item.daysLeft).padStart(2,'0')} días para culminar el registro de participantes`}
                        <div className="absolute -top-1 right-2 w-2 h-2 bg-[#294269] rotate-45" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Object tag — right below IDEC */}
              <div className="mb-2">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-[4px] text-[10px] font-bold font-['Roboto',sans-serif] ${
                  item.object === 'BIEN' ? 'bg-[#edf0f4] text-[#294269] border border-[#546887]/20' :
                  item.object === 'SERVICIO' ? 'bg-[#E1F0FF] text-[#0056AC] border border-[#0056AC]/20' :
                  item.object === 'OBRA' ? 'bg-[#E3F3EC] text-[#126B49] border border-[#126B49]/20' :
                  'bg-[#FFF3EA] text-[#D75600] border border-[#D75600]/20'
                }`}>
                  {item.object}
                </span>
              </div>

              {/* Entity */}
              <button className="text-[12px] font-bold text-[#26292E] hover:text-[#63c9c4] transition-colors text-left font-['Roboto',sans-serif] leading-snug mb-1 w-full">
                {item.entity}
              </button>

              {/* Description */}
              <p className="text-[11px] text-gray-500 font-['Roboto',sans-serif] line-clamp-3 uppercase leading-snug mb-3">
                {item.description}
              </p>

              {/* Proc. selección */}
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide shrink-0">Proc. selección</span>
                <span className="font-['Roboto',sans-serif] text-[10.5px] font-bold text-[#26292E] truncate">{item.code}</span>
              </div>

            </div>

            {/* Dates strip */}
            <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50/60 space-y-1">
              {item.stages.includes('contratos-menores') ? (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-400 font-['Roboto',sans-serif] uppercase font-bold tracking-wider">Creación</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={10} className="text-gray-300" />
                      <span className="text-[10px] font-medium text-[#26292E] font-['Roboto',sans-serif]">{item.publicationDate} 08:30:00</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-400 font-['Roboto',sans-serif] uppercase font-bold tracking-wider">Publicación</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={10} className="text-gray-300" />
                      <span className="text-[10px] font-medium text-[#26292E] font-['Roboto',sans-serif]">{item.publicationDate} 10:15:00</span>
                    </div>
                  </div>
                </>
              ) : (
                [
                  { label: 'Creación', value: item.publicationDate },
                  { label: 'Cierre',   value: item.approxDate },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-400 font-['Roboto',sans-serif]">{label}</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={10} className="text-gray-300" />
                      <span className="text-[10px] font-medium text-[#26292E] font-['Roboto',sans-serif]">{value}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Trazabilidad + Ver detalle */}
            <div className="px-4 py-3 border-t border-gray-100 flex flex-col gap-3">
              <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-['Roboto',sans-serif] shrink-0">
                  TRAZABILIDAD
                </span>
                {(() => {
                  const STEPS = ['planning', 'selection', 'fup'] as const;
                  const LABELS: Record<string, string> = { planning: 'Act. Prep.', selection: 'Selección', fup: 'Contratos' };
                  const reached = STEPS.filter(s => item.stages.includes(s));
                  const highestIdx = reached.length > 0 ? STEPS.indexOf(reached[reached.length - 1]) : -1;
                  return STEPS.map((s, i) => {
                    const isDone = i < highestIdx;
                    const isActive = i === highestIdx;
                    return (
                      <div key={s} className="flex items-center gap-0.5">
                        <span className={`px-1.5 py-0.5 rounded-[4px] text-[9px] font-bold whitespace-nowrap ${
                          isDone ? 'bg-[#EAF3DE] text-[#3B6D11]' :
                          isActive ? 'bg-[#63c9c4] text-white' :
                          'bg-[#F1EFE8] text-[#888780] border border-[#D3D1C7] border-[0.5px]'
                        }`}>
                          {isDone ? `✓ ${LABELS[s]}` : LABELS[s]}
                        </span>
                        {i < STEPS.length - 1 && <span className="text-[#8A94A2] text-[12px] font-bold leading-none">›</span>}
                      </div>
                    );
                  });
                })()}
              </div>

              <div className="flex gap-2">
                {item.stages.includes('contratos-menores') && (
                  <button
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white border border-[#294269] text-[#26292E] rounded-[6px] hover:bg-gray-50 transition-colors text-[11px] font-bold font-['Roboto',sans-serif] whitespace-nowrap"
                  >
                    <Download size={12} />
                    Descargar
                  </button>
                )}
                <button
                  onClick={() => item.object === 'OBRA' ? onSelectItem(`obra:${item.id}`) : item.object === 'BIEN' ? onSelectItem(`bien:${item.id}`) : item.object === 'SERVICIO' ? onSelectItem(`servicio:${item.id}`) : item.stages.includes('contratos-menores') ? setOpenCMId(item.id) : onSelectItem(item.id)}
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#294269] text-white rounded-[6px] hover:bg-[#3F5578] transition-colors text-[11px] font-semibold font-['Roboto',sans-serif] whitespace-nowrap"
                >
                  <Eye size={12} />
                  Ver detalle
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
