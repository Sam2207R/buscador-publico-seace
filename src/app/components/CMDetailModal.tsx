import { X } from 'lucide-react';

interface CMDetailModalProps {
  data: {
    n: string;
    ent: string;
    desc: string;
    obj: string;
  };
  onClose: () => void;
}

export function CMDetailModal({ data, onClose }: CMDetailModalProps) {
  return (
    <div className="fixed inset-0 bg-[#294269]/55 z-[2000] flex items-center justify-center p-5" onClick={onClose}>
      <div className="bg-white rounded-[8px] w-full max-w-[560px] max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-200" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="p-5 pb-3.5 border-b-[3px] border-[#63c9c4] shrink-0 flex items-start justify-between gap-2.5">
          <div>
            <h3 className="text-[20px] font-bold text-[#26292E] mb-0.5">Detalle de la contratación</h3>
            <span className="text-[14px] font-bold text-[#0056AC]">{data.ent}</span>
          </div>
          <button onClick={onClose} className="w-8 h-8 border-none bg-[#EDF0F4] rounded-full cursor-pointer flex items-center justify-center text-[#515458] shrink-0 hover:bg-[#294269] hover:text-white transition-all">
            <X size={16} />
          </button>
        </div>
        
        <div className="p-5 flex-1 flex flex-col gap-4">
          {/* Información general */}
          <div className="bg-white border border-[#DEE3EA] rounded-[4px] p-4">
            <div className="text-[16px] font-bold text-[#26292E] mb-3 flex items-center gap-1.5 border-l-4 border-[#63c9c4] pl-2">
              Información general
            </div>
            <div className="flex flex-col gap-[3px] mb-2.5">
              <span className="text-[12px] font-bold text-[#979797] uppercase tracking-[.04em]">Código</span>
              <span className="text-[14px] font-['IBM_Plex_Mono',monospace] text-[#294269] font-bold">{data.n}</span>
            </div>
            <div className="flex flex-col gap-[3px] mb-2.5">
              <span className="text-[12px] font-bold text-[#979797] uppercase tracking-[.04em]">Área usuaria</span>
              <span className="text-[14px] text-[#26292E]">SUB GERENCIA DE EJECUCIÓN Y SUPERVISIÓN DE OBRAS</span>
            </div>
            <div className="flex flex-col gap-[3px] mb-2.5">
              <span className="text-[12px] font-bold text-[#979797] uppercase tracking-[.04em]">Objeto</span>
              <span className="text-[14px] font-bold text-[#0056AC]">{data.obj.charAt(0) + data.obj.slice(1).toLowerCase()}</span>
            </div>
            <div className="flex flex-col gap-[3px] mb-2.5">
              <span className="text-[12px] font-bold text-[#979797] uppercase tracking-[.04em]">Descripción</span>
              <span className="text-[14px] text-[#26292E]">{data.desc}</span>
            </div>
            <div className="flex flex-col gap-[3px] mb-2.5">
              <span className="text-[12px] font-bold text-[#979797] uppercase tracking-[.04em]">Fecha de publicación</span>
              <span className="text-[14px] text-[#26292E]">03/01/2025 15:13:11</span>
            </div>
            <div className="mt-1.5">
              <span className="inline-flex px-3 py-1 rounded-[4px] text-[14px] font-bold bg-[#E3F3EC] text-[#126B49]">Contratado</span>
            </div>
          </div>

          {/* Cronograma */}
          <div className="bg-white border border-[#DEE3EA] rounded-[4px] p-4">
            <div className="text-[16px] font-bold text-[#26292E] mb-3 flex items-center gap-1.5 border-l-4 border-[#63c9c4] pl-2">
              Cronograma
            </div>
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr>
                  <th className="p-2.5 text-left text-[12px] font-bold text-[#515458] border-b-2 border-[#DEE3EA] bg-[#F6F9FC]">Etapa</th>
                  <th className="p-2.5 text-left text-[12px] font-bold text-[#515458] border-b-2 border-[#DEE3EA] bg-[#F6F9FC]">Fecha y hora de inicio</th>
                  <th className="p-2.5 text-left text-[12px] font-bold text-[#515458] border-b-2 border-[#DEE3EA] bg-[#F6F9FC]">Fecha y hora de fin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2.5 border-b border-[#DEE3EA] text-[#294269] font-bold">Consultas y absoluciones</td>
                  <td className="p-2.5 border-b border-[#DEE3EA] text-[#3C3E43]">23/06/2026 15:20:00</td>
                  <td className="p-2.5 border-b border-[#DEE3EA] text-[#3C3E43]">23/06/2026 16:00:00</td>
                </tr>
                <tr>
                  <td className="p-2.5 border-b border-[#DEE3EA] text-[#294269] font-bold border-b-0">Cotización</td>
                  <td className="p-2.5 border-b border-[#DEE3EA] text-[#3C3E43] border-b-0">23/06/2026 16:10:00</td>
                  <td className="p-2.5 border-b border-[#DEE3EA] text-[#3C3E43] border-b-0">23/06/2026 17:45:00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Ítems registrados */}
          <div className="bg-white border border-[#DEE3EA] rounded-[4px] p-4">
            <div className="text-[16px] font-bold text-[#26292E] mb-3 flex items-center gap-1.5 border-l-4 border-[#63c9c4] pl-2">
              Ítems registrados
            </div>
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr>
                  <th className="p-2 text-left text-[12px] font-bold text-[#515458] border-b-2 border-[#DEE3EA] bg-[#F6F9FC]">N°</th>
                  <th className="p-2 text-left text-[12px] font-bold text-[#515458] border-b-2 border-[#DEE3EA] bg-[#F6F9FC]">CUBSO</th>
                  <th className="p-2 text-left text-[12px] font-bold text-[#515458] border-b-2 border-[#DEE3EA] bg-[#F6F9FC]">Descripción del CUBSO</th>
                  <th className="p-2 text-left text-[12px] font-bold text-[#515458] border-b-2 border-[#DEE3EA] bg-[#F6F9FC]">Cantidad</th>
                  <th className="p-2 text-left text-[12px] font-bold text-[#515458] border-b-2 border-[#DEE3EA] bg-[#F6F9FC]">Unidad</th>
                  <th className="p-2 text-left text-[12px] font-bold text-[#515458] border-b-2 border-[#DEE3EA] bg-[#F6F9FC]">Lugar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b border-[#DEE3EA] text-[#3C3E43] align-top leading-snug">1</td>
                  <td className="p-2 border-b border-[#DEE3EA] text-[#3C3E43] align-top leading-snug font-['IBM_Plex_Mono',monospace] text-[10px]">2210150700325657</td>
                  <td className="p-2 border-b border-[#DEE3EA] text-[#3C3E43] align-top leading-snug">APISONADOR VIBRATORIO - BAILARINA 7 HP</td>
                  <td className="p-2 border-b border-[#DEE3EA] text-[#3C3E43] align-top leading-snug">1</td>
                  <td className="p-2 border-b border-[#DEE3EA] text-[#3C3E43] align-top leading-snug">UNIDAD</td>
                  <td className="p-2 border-b border-[#DEE3EA] text-[#3C3E43] align-top leading-snug">LIMA / LIMA / MIRAFLORES</td>
                </tr>
                <tr>
                  <td className="p-2 border-b border-[#DEE3EA] text-[#3C3E43] align-top leading-snug">2</td>
                  <td className="p-2 border-b border-[#DEE3EA] text-[#3C3E43] align-top leading-snug font-['IBM_Plex_Mono',monospace] text-[10px]">2271220500649902</td>
                  <td className="p-2 border-b border-[#DEE3EA] text-[#3C3E43] align-top leading-snug">VIBRADOR A GASOLINA DE 5.5 hp PARA CONCRETO</td>
                  <td className="p-2 border-b border-[#DEE3EA] text-[#3C3E43] align-top leading-snug">1</td>
                  <td className="p-2 border-b border-[#DEE3EA] text-[#3C3E43] align-top leading-snug">UNIDAD</td>
                  <td className="p-2 border-b border-[#DEE3EA] text-[#3C3E43] align-top leading-snug">LIMA / LIMA / MIRAFLORES</td>
                </tr>
                <tr>
                  <td className="p-2 text-[#3C3E43] align-top leading-snug">3</td>
                  <td className="p-2 text-[#3C3E43] align-top leading-snug font-['IBM_Plex_Mono',monospace] text-[10px]">2711290300090057</td>
                  <td className="p-2 text-[#3C3E43] align-top leading-snug">BOMBA FUMIGADORA MANUAL TIPO MOCHILA DE 20 L</td>
                  <td className="p-2 text-[#3C3E43] align-top leading-snug">1</td>
                  <td className="p-2 text-[#3C3E43] align-top leading-snug">UNIDAD</td>
                  <td className="p-2 text-[#3C3E43] align-top leading-snug">LIMA / LIMA / MIRAFLORES</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="p-3.5 px-5 border-t border-[#DEE3EA] shrink-0 flex justify-end">
          <button onClick={onClose} className="px-6 py-2.5 bg-[#EDF0F4] text-[#26292E] border border-[#DEE3EA] rounded-[4px] text-[14px] font-bold hover:bg-[#DEE3EA] transition-colors">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}