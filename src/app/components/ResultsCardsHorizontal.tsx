import { useState } from 'react';
import { Eye, Calendar, Clock, Building2, Bookmark, Download } from 'lucide-react';
import { mockData, stageConfig, ALL_STAGES } from './mockData';
import { ActPrepBadge } from './ActPrepBadge';
import { CMDetailModal } from './CMDetailModal';
import { useFavorites } from '../context/FavoritesContext';

interface ResultsCardsHorizontalProps {
  activeStage: string;
  onSelectItem: (id: number | string) => void;
}

function ClockIndicator({ daysLeft }: { daysLeft: number | null }) {
  if (daysLeft === null) return null;

  let message: string;
  let colorClass: string;

  if (daysLeft === 0) {
    message = 'Hoy culmina el registro de participantes';
    colorClass = 'text-red-700 bg-red-50 border-red-200';
  } else if (daysLeft === 1) {
    message = 'Falta 01 día para culminar el registro de participantes';
    colorClass = 'text-orange-700 bg-orange-50 border-orange-200';
  } else {
    message = `Faltan ${String(daysLeft).padStart(2, '0')} días para culminar el registro de participantes`;
    colorClass = 'text-amber-700 bg-amber-50 border-amber-200';
  }

  return (
    <div className={`flex items-center gap-1.5 border rounded-[4px] px-2.5 py-1.5 mt-2 ${colorClass}`}>
      <Clock size={12} className="shrink-0" />
      <span className="text-[11px] font-medium font-['Roboto',sans-serif]">{message}</span>
    </div>
  );
}

export function ResultsCardsHorizontal({ activeStage, onSelectItem }: ResultsCardsHorizontalProps) {
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
    <div className="flex flex-col gap-3">
      {openCMId !== null && (() => {
        const cmItem = filteredData.find(i => i.id === openCMId);
        return cmItem ? <CMDetailModal item={cmItem as any} onClose={() => setOpenCMId(null)} /> : null;
      })()}
      {filteredData.map((item) => {
        const reachedStages = ALL_STAGES.filter(s => item.stages.includes(s));

        return (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-[8px] hover:shadow-md hover:border-gray-300 transition-all font-['Roboto',sans-serif] overflow-hidden"
          >
            <div className="flex items-stretch">

              {/* ── LEFT — main info ── */}
              <div className="flex-1 min-w-0 p-4 flex flex-col gap-2.5">

                {/* IDEC + object tag */}
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[14px] font-bold text-[#0056AC] font-['Roboto',sans-serif] leading-none">
                    {item.idec}
                  </p>
                  <span className={`shrink-0 px-2 py-0.5 rounded-[4px] text-[10px] font-bold font-['Roboto',sans-serif] ${
                    item.object === 'BIEN' ? 'bg-[#edf0f4] text-[#294269] border border-[#546887]/20' :
                    item.object === 'SERVICIO' ? 'bg-[#E1F0FF] text-[#0056AC] border border-[#0056AC]/20' :
                    item.object === 'OBRA' ? 'bg-[#E3F3EC] text-[#126B49] border border-[#126B49]/20' :
                    'bg-[#FFF3EA] text-[#D75600] border border-[#D75600]/20'
                  }`}>
                    {item.object}
                  </span>
                </div>

                {/* Entity */}
                <div className="flex items-start gap-1.5">
                  <Building2 size={13} className="text-[#8A94A2] mt-0.5 shrink-0" />
                  <button className="text-[13px] font-bold text-[#26292E] hover:text-[#63c9c4] transition-colors text-left font-['Roboto',sans-serif] leading-snug">
                    {item.entity}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="text-[11px] text-gray-500 font-['Roboto',sans-serif]">{item.location}</span>
                </div>

                {/* Description */}
                <p className="text-[12px] text-gray-500 uppercase leading-snug line-clamp-2 font-['Roboto',sans-serif]">
                  {item.description}
                </p>

                {/* Proc. selección */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide shrink-0">Proc. selección</span>
                  <span className="font-['Roboto',sans-serif] text-[11px] font-bold text-[#26292E]">{item.code}</span>
                </div>

                {/* Trazabilidad row */}
                <div className="flex items-center gap-2 flex-wrap pt-1 border-t border-gray-100">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-['Roboto',sans-serif] shrink-0">
                    TRAZABILIDAD
                  </span>
                  <div className="flex items-center gap-1 flex-wrap">
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
                </div>

                {/* Clock label */}
                <ClockIndicator daysLeft={item.daysLeft ?? null} />
              </div>

              {/* ── RIGHT — dates + star + button ── */}
              <div className="shrink-0 border-l border-gray-100 flex flex-col justify-between p-4 min-w-[220px]">
                <div className="space-y-1.5">
                  {item.stages.includes('contratos-menores') ? (
                    <>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[10px] text-gray-400 font-['Roboto',sans-serif] whitespace-nowrap uppercase font-bold tracking-wider">Creación</span>
                        <div className="flex items-center gap-1 shrink-0">
                          <Calendar size={10} className="text-gray-300" />
                          <span className="text-[11px] font-medium text-[#26292E] font-['Roboto',sans-serif] whitespace-nowrap">{item.publicationDate} 08:30:00</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[10px] text-gray-400 font-['Roboto',sans-serif] whitespace-nowrap uppercase font-bold tracking-wider">Publicación</span>
                        <div className="flex items-center gap-1 shrink-0">
                          <Calendar size={10} className="text-gray-300" />
                          <span className="text-[11px] font-medium text-[#26292E] font-['Roboto',sans-serif] whitespace-nowrap">{item.publicationDate} 10:15:00</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    [
                      { label: 'Fecha de Creación', value: item.publicationDate },
                      { label: 'Fecha de Inicio',   value: item.fechaInicio    },
                      { label: 'Fecha de Cierre',   value: item.fechaCierre    },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between gap-3">
                        <span className="text-[10px] text-gray-400 font-['Roboto',sans-serif] whitespace-nowrap">{label}</span>
                        <div className="flex items-center gap-1 shrink-0">
                          <Calendar size={10} className="text-gray-300" />
                          <span className="text-[11px] font-medium text-[#26292E] font-['Roboto',sans-serif] whitespace-nowrap">{value}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex flex-row gap-2 w-full">
                    {item.stages.includes('contratos-menores') && (
                      <button
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-[#294269] text-[#26292E] rounded-[6px] hover:bg-gray-50 transition-colors text-[11px] font-bold font-['Roboto',sans-serif]"
                      >
                        <Download size={13} />
                        Descargar
                      </button>
                    )}

                    <button
                      onClick={() => item.object === 'OBRA' ? onSelectItem(`obra:${item.id}`) : item.object === 'BIEN' ? onSelectItem(`bien:${item.id}`) : item.object === 'SERVICIO' ? onSelectItem(`servicio:${item.id}`) : item.stages.includes('contratos-menores') ? setOpenCMId(item.id) : onSelectItem(item.id)}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#294269] text-white rounded-[6px] hover:bg-[#3F5578] transition-colors text-[11px] font-semibold font-['Roboto',sans-serif] whitespace-nowrap"
                    >
                      <Eye size={13} />
                      Ver detalle
                    </button>
                  </div>

                  <button
                    onClick={() => toggleFavorite({ id: item.id, idec: item.idec, code: item.code, entity: item.entity, description: item.description, object: item.object, cubso: item.cubso, stages: item.stages, publicationDate: item.publicationDate, status: item.status })}
                    className={`flex items-center justify-center gap-1.5 w-full px-3 py-1.5 border rounded-[6px] transition-colors text-[11px] font-medium font-['Roboto',sans-serif] ${
                      isFavorite(item.id)
                        ? 'border-[#63c9c4]/30 bg-[#63c9c4]/5 text-[#294269]'
                        : 'border-gray-200 text-gray-500 hover:border-[#63c9c4]/30 hover:bg-[#63c9c4]/5 hover:text-[#63c9c4]'
                    }`}
                    title={isFavorite(item.id) ? 'Quitar de lista de interés' : 'Agregar a lista de interés'}
                  >
                    <Bookmark size={13} className={isFavorite(item.id) ? 'fill-[#E2A615]' : ''} />
                    {isFavorite(item.id) ? 'Guardado' : 'Guardar'}
                  </button>
                </div>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}
