import { useState } from 'react';
import { Building2, Banknote, FileText, Eye, MoreVertical, Bookmark, CheckCircle2, Clock, XCircle, MapPin, ShieldCheck, FileCheck, LayoutGrid, List, Download } from 'lucide-react';

interface ContratosResultsProps {
  onSelectItem: (id: string) => void;
}

const mockContratosCards = [
  {
    id: '101',
    nroContrato: '045-2026-MINSA',
    etiquetas: ['CONTRATO', 'OBRA'],
    idec: '2026-000123-CONTRATOS',
    descripcion: 'Ejecución de obra para el mejoramiento de los servicios de salud del Hospital Regional de Lambayeque - Fase II.',
    entidad: 'Ministerio de Salud - MINSA',
    nomenclatura: 'CP-SM-2-2026-MINSA-1',
    cuantia: 'S/ 12,450,230.00',
    tipoProc: 'Concurso Público',
    suscripcion: '15/01/2026',
    termino: '15/01/2027',
    lugar: 'LAMBAYEQUE - CHICLAYO - LAMBAYEQUE',
    avance: 65,
    garantia: 'Vigente',
    conformidad: '3 Conf.',
    ruc: '20546789123',
    empresa: 'CONSTRUCTORA DEL NORTE S.A.C.'
  },
  {
    id: '102',
    nroContrato: '122-2026-MTC',
    etiquetas: ['CONTRATO', 'SERVICIO'],
    idec: '2026-000456-CONTRATOS',
    descripcion: 'Servicio de mantenimiento preventivo y correctivo de la red vial nacional - Tramo Longitudinal de la Sierra Norte.',
    entidad: 'Ministerio de Transportes y Comunicaciones',
    nomenclatura: 'LP-SM-1-2026-MTC-1',
    cuantia: 'S/ 45,800,000.00',
    tipoProc: 'Licitación Pública',
    suscripcion: '20/02/2026',
    termino: '20/02/2027',
    lugar: 'LIMA - LIMA - LIMA',
    avance: 32,
    garantia: 'Vigente',
    conformidad: '1 Conf.',
    ruc: '20123456789',
    empresa: 'MANTENIMIENTO VIAL PERÚ S.A.'
  },
  {
    id: '103',
    nroContrato: '089-2026-ESSALUD',
    etiquetas: ['CONTRATO', 'BIEN'],
    idec: '2026-000789-CONTRATOS',
    descripcion: 'Adquisición de equipamiento médico de alta tecnología para la unidad de cuidados intensivos - Red Arequipa.',
    entidad: 'EsSalud - Sede Central',
    nomenclatura: 'AS-SM-15-2026-ESSALUD-1',
    cuantia: 'S/ 8,200,000.00',
    tipoProc: 'Adjudicación Simplificada',
    suscripcion: '10/03/2026',
    termino: '10/09/2026',
    lugar: 'AREQUIPA - AREQUIPA - AREQUIPA',
    avance: 95,
    garantia: 'Vencida',
    conformidad: '6 Conf.',
    ruc: '20888777666',
    empresa: 'MEDICAL SOLUTIONS S.A.C.'
  }
];

function ContratoCard({ data, onSelect }: { data: typeof mockContratosCards[0], onSelect: (id: string) => void }) {
  return (
    <div className="bg-white rounded-[8px] border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group h-full font-['Roboto',sans-serif]">
      {/* Header (Fondo Negro) */}
      <div className="bg-[#294269] p-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <span className="text-[14px] font-bold tracking-wide uppercase">Contrato N° {data.nroContrato}</span>
        </div>
        <div className="flex items-center gap-2">
          {data.etiquetas.map(tag => (
            <span key={tag} className="px-2 py-1 bg-white/10 rounded-[4px] text-[10px] font-bold border border-white/20 uppercase tracking-wider">
              {tag}
            </span>
          ))}
          <button className="p-1 hover:bg-white/10 rounded transition-colors ml-1" title="Agregar a lista de interés">
            <Bookmark size={16} />
          </button>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col space-y-4">
        {/* IDEC (Etiqueta Celeste) */}
        <div>
          <span className="inline-block px-2.5 py-1 bg-[#E0F2FE] text-[#0369A1] rounded-[4px] text-[11px] font-bold border border-[#BAE6FD] mb-3">
            IDEC: {data.idec}
          </span>
          <p className="text-[13px] text-[#26292E] leading-relaxed line-clamp-2 font-medium">
            {data.descripcion}
          </p>
        </div>

        {/* Datos en Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-gray-100">
          <div className="col-span-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Entidad contratante</p>
            <p className="text-[13px] font-bold text-[#26292E] leading-snug">{data.entidad}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Nomenclatura</p>
            <p className="text-[12px] font-medium text-gray-600">{data.nomenclatura}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Cuantía</p>
            <p className="text-[12px] font-bold text-[#26292E]">{data.cuantia}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Tipo procedimiento</p>
            <p className="text-[12px] font-medium text-gray-600">{data.tipoProc}</p>
          </div>
          <div className="flex gap-4 col-span-1">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Suscripción</p>
              <p className="text-[12px] font-medium text-gray-600">{data.suscripcion}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Término</p>
              <p className="text-[12px] font-medium text-gray-600">{data.termino}</p>
            </div>
          </div>
          <div className="col-span-2">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Lugar de ejecución</p>
            <div className="flex items-center gap-1.5">
              <MapPin size={12} className="text-[#294269]" />
              <span className="text-[12px] font-medium text-gray-600">{data.lugar}</span>
            </div>
          </div>
        </div>

        {/* Avance y Garantías */}
        <div className="pt-4 space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Avance financiero</p>
              <span className="text-[12px] font-bold text-[#0056AC]">{data.avance}%</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#63c9c4] rounded-full transition-all duration-1000" style={{ width: `${data.avance}%` }} />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="size-6 bg-green-50 rounded-full flex items-center justify-center text-green-600 border border-green-100">
                <ShieldCheck size={14} />
              </div>
              <span className="text-[11px] font-bold text-gray-600 uppercase tracking-tighter">Garantía: {data.garantia}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 border border-blue-100">
                <CheckCircle2 size={14} />
              </div>
              <span className="text-[11px] font-bold text-gray-600 uppercase tracking-tighter">{data.conformidad}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (RUC y Botón) */}
      <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between mt-auto">
        <div className="min-w-0 flex-1 pr-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1.5">RUC: {data.ruc}</p>
          <p className="text-[12px] font-bold text-[#26292E] truncate uppercase">{data.empresa}</p>
        </div>
        <div className="flex gap-2.5">
          <button 
            onClick={() => onSelect(data.etiquetas.includes('OBRA') ? `obra:${data.id}` : data.id)}
            className="shrink-0 flex items-center gap-2 px-4 py-2.5 bg-[#294269] text-white rounded-[8px] text-[12px] font-bold hover:bg-[#3F5578] transition-all shadow-sm active:scale-95 group/btn"
          >
            <Eye size={16} />
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  );
}

export function ContratosResults({ onSelectItem }: ContratosResultsProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* Resultados de Ejecución Contractual */}
      <div className="space-y-6">
        <div className="bg-white rounded-[8px] border border-gray-200 shadow-sm overflow-hidden">

          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-[#63c9c4] rounded-full" />
              <h2 className="text-[18px] font-bold text-[#26292E]">Ejecución Contractual (8 registros)</h2>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg border border-gray-200">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#294269]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <LayoutGrid size={16} />
              </button>
              <button 
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-md transition-all ${viewMode === 'table' ? 'bg-white shadow-sm text-[#294269]' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {mockContratosCards.map((item) => (
                  <ContratoCard key={item.id} data={item} onSelect={onSelectItem} />
                ))}
                {/* Repetimos mock para completar 8 según requerimiento visual */}
                {mockContratosCards.slice(0, 5).map((item, idx) => (
                  <ContratoCard key={`${item.id}-dup-${idx}`} data={item} onSelect={onSelectItem} />
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white border-b border-gray-100">
                      <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Nro. Contrato</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">Entidad / Proveedor</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-right">Monto</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Estado</th>
                      <th className="px-6 py-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">Vigencia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 font-['Roboto',sans-serif]">
                    {mockContratosCards.map((item) => (
                      <tr key={item.id} className="hover:bg-red-50/30 transition-colors group cursor-pointer" onClick={() => onSelectItem(item.id)}>
                        <td className="px-6 py-4 text-[13px] font-bold text-[#0056AC]">{item.nroContrato}</td>
                        <td className="px-6 py-4">
                          <p className="text-[13px] font-bold text-[#26292E] truncate">{item.entidad}</p>
                          <p className="text-[11px] text-gray-500">{item.empresa}</p>
                        </td>
                        <td className="px-6 py-4 text-[13px] font-bold text-[#26292E] text-right">{item.cuantia}</td>
                        <td className="px-6 py-4 text-center">
                          <span className="px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-[10px] font-bold">Vigente</span>
                        </td>
                        <td className="px-6 py-4 text-[11px] text-gray-500 text-center whitespace-nowrap">{item.suscripcion} - {item.termino}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
