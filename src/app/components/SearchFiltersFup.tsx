import { useState } from 'react';
import { PanelLeft } from 'lucide-react';
import type { Page } from '../App';

interface SearchFiltersFupProps {
  onFiltersChange: (filters: string[]) => void;
  appliedFilters: string[];
  navigate?: (page: Page) => void;
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

export function SearchFiltersFup({ onFiltersChange, appliedFilters, navigate }: SearchFiltersFupProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [faseProcedimiento, setFaseProcedimiento] = useState('contratos');
  const [nContrato, setNContrato] = useState('');
  const [estadoEjecucion, setEstadoEjecucion] = useState('');
  const [nAdicional, setNAdicional] = useState('');
  const [avanceFisicoMin, setAvanceFisicoMin] = useState('');
  const [avanceFisicoMax, setAvanceFisicoMax] = useState('');
  const [montoMin, setMontoMin] = useState('');
  const [montoMax, setMontoMax] = useState('');
  const [proveedor, setProveedor] = useState('');
  const [tipoDoc, setTipoDoc] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const apply = () => {
    const filters: string[] = [];
    if (faseProcedimiento) filters.push(`Fase: ${faseProcedimiento}`);
    if (nContrato) filters.push(`Contrato: ${nContrato}`);
    if (estadoEjecucion) filters.push(`Estado: ${estadoEjecucion}`);
    if (nAdicional) filters.push(`Adicional N°: ${nAdicional}`);
    if (avanceFisicoMin) filters.push(`Avance ≥ ${avanceFisicoMin}%`);
    if (avanceFisicoMax) filters.push(`Avance ≤ ${avanceFisicoMax}%`);
    if (montoMin) filters.push(`Monto mín: S/${montoMin}`);
    if (montoMax) filters.push(`Monto máx: S/${montoMax}`);
    if (proveedor) filters.push(`Proveedor: ${proveedor}`);
    if (tipoDoc) filters.push(`Doc: ${tipoDoc}`);
    if (dateFrom) filters.push(`Desde: ${dateFrom}`);
    if (dateTo) filters.push(`Hasta: ${dateTo}`);
    onFiltersChange(filters);
    if (faseProcedimiento === 'contratos' && navigate) {
      navigate({ type: 'contratos-lista' });
    }
  };

  const clear = () => {
    setFaseProcedimiento('contratos');
    setNContrato(''); setEstadoEjecucion(''); setNAdicional('');
    setAvanceFisicoMin(''); setAvanceFisicoMax(''); setMontoMin(''); setMontoMax('');
    setProveedor(''); setTipoDoc(''); setDateFrom(''); setDateTo('');
    onFiltersChange([]);
  };

  return (
    <div className="h-full overflow-y-auto bg-[#f5f5f5]">
      <button
        onClick={() => setCollapsed(c => !c)}
        className="w-full flex items-center justify-between px-3 py-2.5 border-b border-[#DEE3EA] bg-[#f5f5f5] hover:bg-[#edf0f4] transition-colors"
      >
        <h3 className="font-semibold text-[13px] font-['Roboto',sans-serif] text-[#26292E]">Contratos</h3>
        <PanelLeft className={`text-[#294269] transition-transform ${collapsed ? 'rotate-180' : ''}`} size={15} />
      </button>
      {!collapsed && <div className="p-3 space-y-3">

      <div>
        <FilterLabel>Fase del procedimiento</FilterLabel>
        <FilterSelect value={faseProcedimiento} onChange={setFaseProcedimiento} options={[
          { value: 'act-preparatorias', label: 'Act. Preparatorias' },
          { value: 'seleccion',         label: 'Selección' },
          { value: 'contratos',         label: 'Contratos' },
        ]} />
      </div>

      <div>
        <FilterLabel>N° de Contrato</FilterLabel>
        <FilterInput value={nContrato} onChange={setNContrato} placeholder="Ej. 0001-2025-MDY/GM" />
      </div>

      <div>
        <FilterLabel>Estado de Ejecución</FilterLabel>
        <FilterSelect value={estadoEjecucion} onChange={setEstadoEjecucion} options={[
          { value: 'vigente',     label: 'Vigente'                  },
          { value: 'concluido',   label: 'Concluido'                },
          { value: 'resuelto',    label: 'Resuelto'                 },
          { value: 'paralizado',  label: 'Paralizado'               },
          { value: 'arbitraje',   label: 'En Arbitraje'             },
          { value: 'liquidacion', label: 'En Liquidación'           },
        ]} />
      </div>

      <div>
        <FilterLabel>N° de Adicional</FilterLabel>
        <FilterInput value={nAdicional} onChange={setNAdicional} placeholder="Ej. 1" />
      </div>

      <div>
        <FilterLabel>% Avance Físico</FilterLabel>
        <div className="flex gap-1.5 items-center">
          <input type="number" min="0" max="100" value={avanceFisicoMin} onChange={e => setAvanceFisicoMin(e.target.value)} placeholder="0%"
            className="w-full px-2 py-1.5 bg-white border border-gray-300 rounded text-[12px] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]" />
          <span className="text-gray-400 shrink-0 text-[11px]">—</span>
          <input type="number" min="0" max="100" value={avanceFisicoMax} onChange={e => setAvanceFisicoMax(e.target.value)} placeholder="100%"
            className="w-full px-2 py-1.5 bg-white border border-gray-300 rounded text-[12px] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]" />
        </div>
      </div>

      <div>
        <FilterLabel>Monto del Contrato (S/)</FilterLabel>
        <div className="flex gap-1.5">
          <input type="number" value={montoMin} onChange={e => setMontoMin(e.target.value)} placeholder="Mín"
            className="w-full px-2 py-1.5 bg-white border border-gray-300 rounded text-[12px] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]" />
          <input type="number" value={montoMax} onChange={e => setMontoMax(e.target.value)} placeholder="Máx"
            className="w-full px-2 py-1.5 bg-white border border-gray-300 rounded text-[12px] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]" />
        </div>
      </div>

      <div>
        <FilterLabel>Proveedor / Contratista</FilterLabel>
        <FilterInput value={proveedor} onChange={setProveedor} placeholder="RUC o razón social" />
      </div>

      <div>
        <FilterLabel>Tipo de Documento</FilterLabel>
        <FilterSelect value={tipoDoc} onChange={setTipoDoc} options={[
          { value: 'ejecucion',        label: 'Contratos'    },
          { value: 'cuaderno',         label: 'Cuaderno de Incidencias'  },
          { value: 'rocos',            label: 'ROCOS'                    },
          { value: 'adicional',        label: 'Adicional de Obra'        },
          { value: 'ampliacion-plazo', label: 'Ampliación de Plazo'      },
          { value: 'liquidacion',      label: 'Liquidación'              },
        ]} />
      </div>

      <div>
        <FilterLabel>Fecha de Suscripción</FilterLabel>
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
