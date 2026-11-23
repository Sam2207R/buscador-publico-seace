import { useState } from 'react';
import { PanelLeft } from 'lucide-react';

interface SearchFiltersSelectionProps {
  onFiltersChange: (filters: string[]) => void;
  appliedFilters: string[];
}

function FilterLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-[11px] font-semibold mb-1.5 font-['Roboto',sans-serif] text-[#26292E] uppercase tracking-wide">{children}</label>;
}
function FilterInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
    className="w-full px-2.5 py-1.5 bg-white border border-gray-300 rounded text-[12px] text-[#26292E] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]" />;
}
function FilterSelect({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: { value: string; label: string }[] }) {
  return <select value={value} onChange={e => onChange(e.target.value)}
    className="w-full px-2.5 py-1.5 bg-white border border-gray-300 rounded text-[12px] text-[#26292E] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]">
    <option value="">Todos</option>
    {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
  </select>;
}

export function SearchFiltersSelection({ onFiltersChange, appliedFilters }: SearchFiltersSelectionProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [nProcedimiento, setNProcedimiento] = useState('');
  const [tipoProcedimiento, setTipoProcedimiento] = useState('');
  const [estado, setEstado] = useState('');
  const [fase, setFase] = useState('');
  const [objeto, setObjeto] = useState('');
  const [montoMin, setMontoMin] = useState('');
  const [montoMax, setMontoMax] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const apply = () => {
    const filters: string[] = [];
    if (nProcedimiento) filters.push(`Procedimiento: ${nProcedimiento}`);
    if (tipoProcedimiento) filters.push(`Tipo: ${tipoProcedimiento}`);
    if (estado) filters.push(`Estado: ${estado}`);
    if (fase) filters.push(`Fase: ${fase}`);
    if (objeto) filters.push(`Objeto: ${objeto}`);
    if (montoMin) filters.push(`Monto mín: S/${montoMin}`);
    if (montoMax) filters.push(`Monto máx: S/${montoMax}`);
    if (dateFrom) filters.push(`Desde: ${dateFrom}`);
    if (dateTo) filters.push(`Hasta: ${dateTo}`);
    onFiltersChange(filters);
  };

  const clear = () => {
    setNProcedimiento(''); setTipoProcedimiento(''); setEstado(''); setFase('');
    setObjeto(''); setMontoMin(''); setMontoMax(''); setDateFrom(''); setDateTo('');
    onFiltersChange([]);
  };

  return (
    <div className="h-full overflow-y-auto bg-[#f5f5f5]">
      <button
        onClick={() => setCollapsed(c => !c)}
        className="w-full flex items-center justify-between px-3 py-2.5 border-b border-[#DEE3EA] bg-[#f5f5f5] hover:bg-[#edf0f4] transition-colors"
      >
        <h3 className="font-semibold text-[13px] font-['Roboto',sans-serif] text-[#26292E]">Selección</h3>
        <PanelLeft className={`text-[#294269] transition-transform ${collapsed ? 'rotate-180' : ''}`} size={15} />
      </button>
      {!collapsed && <div className="p-3 space-y-3">

      <div>
        <FilterLabel>N° del Procedimiento</FilterLabel>
        <FilterInput value={nProcedimiento} onChange={setNProcedimiento} placeholder="Ej. LP-001-2025" />
      </div>

      <div>
        <FilterLabel>Tipo de Procedimiento</FilterLabel>
        <FilterSelect value={tipoProcedimiento} onChange={setTipoProcedimiento} options={[
          { value: 'LP',  label: 'Licitación Pública (LP)'       },
          { value: 'AS',  label: 'Adjudicación Simplificada (AS)' },
          { value: 'CP',  label: 'Concurso Público (CP)'          },
          { value: 'CDS', label: 'Comparación de Precios (CDS)'   },
          { value: 'SI',  label: 'Subasta Inversa Electrónica'     },
          { value: 'CD',  label: 'Contratación Directa (CD)'      },
        ]} />
      </div>

      <div>
        <FilterLabel>Estado del Proceso</FilterLabel>
        <FilterSelect value={estado} onChange={setEstado} options={[
          { value: 'convocado',  label: 'Convocado'   },
          { value: 'en-proceso', label: 'En Proceso'  },
          { value: 'adjudicado', label: 'Adjudicado'  },
          { value: 'desierto',   label: 'Desierto'    },
          { value: 'nulo',       label: 'Nulo'        },
          { value: 'cancelado',  label: 'Cancelado'   },
        ]} />
      </div>

      <div>
        <FilterLabel>Fase del Procedimiento</FilterLabel>
        <FilterSelect value={fase} onChange={setFase} options={[
          { value: 'convocatoria',  label: 'Convocatoria'              },
          { value: 'participantes', label: 'Registro de Participantes' },
          { value: 'consultas',     label: 'Consultas y Observaciones' },
          { value: 'evaluacion',    label: 'Evaluación de Ofertas'     },
          { value: 'buena-pro',     label: 'Buena Pro'                 },
        ]} />
      </div>

      <div>
        <FilterLabel>Objeto de Contratación</FilterLabel>
        <FilterSelect value={objeto} onChange={setObjeto} options={[
          { value: 'bien',        label: 'Bien'        },
          { value: 'servicio',    label: 'Servicio'    },
          { value: 'obra',        label: 'Obra'        },
          { value: 'consultoria', label: 'Consultoría' },
        ]} />
      </div>

      <div>
        <FilterLabel>Rango de Monto Referencial (S/)</FilterLabel>
        <div className="flex gap-1.5">
          <input type="number" value={montoMin} onChange={e => setMontoMin(e.target.value)} placeholder="Mín"
            className="w-full px-2 py-1.5 bg-white border border-gray-300 rounded text-[12px] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]" />
          <input type="number" value={montoMax} onChange={e => setMontoMax(e.target.value)} placeholder="Máx"
            className="w-full px-2 py-1.5 bg-white border border-gray-300 rounded text-[12px] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]" />
        </div>
      </div>

      <div>
        <FilterLabel>Fecha de Convocatoria</FilterLabel>
        <div className="space-y-1">
          <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)}
            className="w-full px-2 py-1.5 bg-white border border-gray-300 rounded text-[11px] focus:outline-none focus:border-[#294269] font-['Roboto',sans-serif]" />
          <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)}
            className="w-full px-2 py-1.5 bg-white border border-gray-300 rounded text-[11px] focus:outline-none focus:border-[#294269] font-['Roboto',sans-serif]" />
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <button onClick={clear} className="flex-1 px-3 py-2 bg-white border border-[#294269] rounded-[16px] text-[12px] text-[#294269] hover:bg-[#63c9c4] hover:border-[#63c9c4] hover:text-white transition-colors font-['Roboto',sans-serif]">
          Limpiar
        </button>
        <button onClick={apply} className="flex-1 px-3 py-2 bg-[#294269] text-white rounded-[16px] text-[12px] hover:bg-[#63c9c4] transition-colors font-['Roboto',sans-serif]">
          Buscar
        </button>
      </div>
      </div>}
    </div>
  );
}
