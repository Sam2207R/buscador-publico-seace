import { useState } from 'react';
import { Eye, Bookmark, MoreVertical, Calendar, MapPin, LayoutGrid, List, AlignJustify } from 'lucide-react';

interface SeaceV3ResultsProps {
  onSelectItem: (id: string) => void;
}

const mockSeaceV3Data = [
  {
    id: '301',
    code: 'LP-001-2020-MINSA-1',
    tags: ['SEACE 3'],
    programa: 'PROGRAMA NACIONAL DE INVERSIONES EN SALUD',
    entity: 'MINISTERIO DE SALUD - MINSA',
    description: 'ADQUISICIÓN DE AMBULANCIAS RURALES TIPO II PARA EL FORTALECIMIENTO DE LA RED DE SALUD A NIVEL NACIONAL',
    object: 'OBRA',
    subObject: 'OBRA POR IMPUESTO',
    status: 'CONSENTIDO',
    convDate: '15/05/2020',
    bpDate: '20/06/2020',
  },
  {
    id: '302',
    code: 'CP-005-2020-MTC-1',
    tags: ['SEACE 3'],
    programa: 'PROVIAS NACIONAL',
    entity: 'MINISTERIO DE TRANSPORTES Y COMUNICACIONES',
    description: 'SERVICIO DE MANTENIMIENTO PERIÓDICO DE LA RED VIAL NACIONAL NO CONCESIONADA - TRAMO NORTE',
    object: 'SERVICIO',
    subObject: 'CONCURSO PÚBLICO',
    status: 'ADJUDICADO',
    convDate: '10/06/2020',
    bpDate: '15/07/2020',
  },
  {
    id: '303',
    code: 'AS-012-2020-GR-PIURA-1',
    tags: ['SEACE 3'],
    programa: 'GERENCIA REGIONAL DE INFRAESTRUCTURA',
    entity: 'GOBIERNO REGIONAL DE PIURA',
    description: 'MEJORAMIENTO DEL SERVICIO EDUCATIVO EN LA I.E. NUESTRA SEÑORA DE FÁTIMA - DISTRITO DE PIURA',
    object: 'OBRA',
    subObject: 'ADJUDICACIÓN SIMPLIFICADA',
    status: 'PERFECCIONADO',
    convDate: '02/07/2020',
    bpDate: '08/08/2020',
  }
];

function SeaceV3Card({ item, onSelect }: { item: typeof mockSeaceV3Data[0], onSelect: (id: string) => void }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[8px] hover:shadow-md transition-all font-['Roboto',sans-serif] overflow-hidden flex flex-col group h-full">
      <div className="p-5 flex-1 flex flex-col">
        {/* Superior: Título + Etiqueta SEACE 3 */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <h3 className="text-[14px] font-bold text-[#0056AC] uppercase tracking-wide leading-tight">
              {item.code}
            </h3>
            <span className="px-2 py-0.5 bg-[#294269] text-white rounded-[4px] text-[10px] font-bold uppercase tracking-wider">
              SEACE 3
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1 hover:bg-red-50 rounded text-gray-400 hover:text-[#63c9c4] transition-colors">
              <Bookmark size={16} />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded text-gray-400">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        {/* Programa / Entidad */}
        <div className="mb-3">
          <p className="text-[12px] font-bold text-[#26292E] leading-tight mb-1 uppercase">
            {item.programa}
          </p>
          <p className="text-[11px] text-gray-500 font-medium truncate uppercase">
            {item.entity}
          </p>
        </div>

        {/* Descripción */}
        <p className="text-[12px] text-gray-600 leading-relaxed line-clamp-2 mb-4">
          {item.description}
        </p>

        {/* Etiquetas de Obra */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-[4px] text-[10px] font-bold uppercase border border-gray-200">
            {item.object}
          </span>
          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-[4px] text-[10px] font-bold uppercase border border-gray-200">
            {item.subObject}
          </span>
        </div>

        {/* Fechas Convocatoria / Buena Pro */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50 mb-5">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Fecha Convocatoria</p>
            <div className="flex items-center gap-1.5">
              <Calendar size={12} className="text-gray-300" />
              <span className="text-[11px] font-medium text-[#26292E]">{item.convDate}</span>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Fecha Buena Pro</p>
            <div className="flex items-center gap-1.5">
              <Calendar size={12} className="text-gray-300" />
              <span className="text-[11px] font-medium text-[#26292E]">{item.bpDate}</span>
            </div>
          </div>
        </div>

        {/* Botón Ver detalle final */}
        <button 
          onClick={() => onSelect(item.object === 'OBRA' ? `obra:${item.id}` : item.id)}
          className="w-full py-2.5 bg-white border border-[#294269] text-[#294269] rounded-[16px] text-[12px] font-bold flex items-center justify-center gap-2 hover:bg-[#294269] hover:text-white transition-all group/btn"
        >
          <Eye size={15} className="text-[#63c9c4] group-hover/btn:text-white" />
          Ver detalle
        </button>
      </div>
    </div>
  );
}

export function SeaceV3Results({ onSelectItem }: SeaceV3ResultsProps) {
  const [viewMode, setViewMode] = useState<'table' | 'cards' | 'list' | 'grid'>('grid');
  const totalResults = 1265;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      
      {/* Resultados Header Homologado */}
      <div className="bg-white rounded-[8px] border border-gray-200 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-5 py-4 bg-gray-50/50 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <h2 className="text-[15px] font-bold text-[#26292E] uppercase tracking-wide">Resultados de búsqueda</h2>
            <div className="px-3 py-1 bg-[#63c9c4]/10 border border-[#63c9c4]/20 rounded-[8px]">
              <span className="text-sm font-bold text-[#0056AC] font-['Roboto',sans-serif]">
                {totalResults.toLocaleString('es-PE')} encontrados
              </span>
            </div>
          </div>
          <div className="flex bg-gray-100 rounded-[6px] p-1 border border-gray-200">
            <button onClick={() => setViewMode('table')} title="Vista tabla"
              className={`p-1.5 rounded-[4px] transition-colors ${viewMode === 'table' ? 'bg-white shadow text-[#63c9c4]' : 'text-gray-400 hover:text-[#26292E]'}`}>
              <List size={16} />
            </button>
            <button onClick={() => setViewMode('grid')} title="Vista tarjetas"
              className={`p-1.5 rounded-[4px] transition-colors ${viewMode === 'grid' ? 'bg-white shadow text-[#63c9c4]' : 'text-gray-400 hover:text-[#26292E]'}`}>
              <LayoutGrid size={16} />
            </button>
            <button onClick={() => setViewMode('list')} title="Vista lista horizontal"
              className={`p-1.5 rounded-[4px] transition-colors ${viewMode === 'list' ? 'bg-white shadow text-[#63c9c4]' : 'text-gray-400 hover:text-[#26292E]'}`}>
              <AlignJustify size={16} />
            </button>
          </div>
        </div>

        {/* Banner de Registros Históricos */}
        <div className="bg-[#294269] px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <div className="size-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Calendar size={18} />
            </div>
            <h2 className="text-[15px] font-bold tracking-wide uppercase">
              Registros históricos — SEACE 3 (2020)
            </h2>
          </div>
          <span className="text-[11px] text-white/70 font-medium italic">Acceso restringido a solo consulta histórico</span>
        </div>

        {/* Contenido de Resultados */}
        <div className="p-5">
          {viewMode === 'grid' || viewMode === 'cards' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {mockSeaceV3Data.map(item => (
                <SeaceV3Card key={item.id} item={item} onSelect={onSelectItem} />
              ))}
              {[...Array(5)].map((_, idx) => (
                <SeaceV3Card key={`dup-${idx}`} item={mockSeaceV3Data[idx % 3]} onSelect={onSelectItem} />
              ))}
            </div>
          ) : viewMode === 'list' ? (
            <div className="space-y-4">
              {mockSeaceV3Data.map(item => (
                <SeaceV3Card key={item.id} item={item} onSelect={onSelectItem} />
              ))}
            </div>
          ) : (
            <div className="border border-gray-200 rounded-[8px] overflow-hidden">
              <table className="w-full text-left border-collapse bg-white">
                <thead className="bg-gray-50 border-b border-gray-200 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Código</th>
                    <th className="px-4 py-3">Entidad</th>
                    <th className="px-4 py-3">Objeto</th>
                    <th className="px-4 py-3">Estado</th>
                    <th className="px-4 py-3 text-right">Convocatoria</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-[13px]">
                  {mockSeaceV3Data.concat(mockSeaceV3Data).map((item, idx) => (
                    <tr key={`${item.id}-${idx}`} className="hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => onSelectItem(item.object === 'OBRA' ? `obra:${item.id}` : item.id)}>
                      <td className="px-4 py-3 font-bold text-[#0056AC]">{item.code}</td>
                      <td className="px-4 py-3 font-medium text-[#26292E] truncate max-w-[200px]">{item.entity}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 bg-gray-100 rounded text-[10px] font-bold border border-gray-200">{item.object}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-green-600 font-bold flex items-center gap-1">
                          <div className="size-1.5 rounded-full bg-green-500" />
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-right font-medium">{item.convDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
