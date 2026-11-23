import { useState } from 'react';
import { PanelLeft } from 'lucide-react';

interface SearchFiltersProps {
  onFiltersChange: (filters: string[]) => void;
  appliedFilters: string[];
}

export function SearchFilters({ onFiltersChange, appliedFilters }: SearchFiltersProps) {
  const [entity, setEntity] = useState('');
  const [procedureType, setProcedureType] = useState('');
  const [objectType, setObjectType] = useState('');
  const [fase, setFase] = useState('');
  const [seaceVersion, setSeaceVersion] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const applyFilter = (filterName: string) => {
    if (!appliedFilters.includes(filterName)) {
      onFiltersChange([...appliedFilters, filterName]);
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-[#f5f5f5]">
      <button
        onClick={() => setCollapsed(c => !c)}
        className="w-full flex items-center justify-between px-4 py-3 border-b border-[#DEE3EA] bg-[#f5f5f5] hover:bg-[#edf0f4] transition-colors"
      >
        <h3 className="font-semibold text-[13px] font-['Roboto',sans-serif] text-[#26292E]">Filtros de búsqueda</h3>
        <PanelLeft className={`text-[#294269] transition-transform ${collapsed ? 'rotate-180' : ''}`} size={16} />
      </button>
      {!collapsed && <div className="p-4">

      {/* Fase del procedimiento */}
      <div className="mb-4">
        <label className="block text-sm mb-2 font-['Roboto',sans-serif] text-[#26292E]">Fase del procedimiento</label>
        <select
          value={fase}
          onChange={(e) => {
            setFase(e.target.value);
            if (e.target.value) applyFilter(`Fase: ${e.target.options[e.target.selectedIndex].text}`);
          }}
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-[#26292E] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]"
        >
          <option value="">Todas las fases</option>
          <option value="actuaciones">Actuaciones preparatorias</option>
          <option value="seleccion">Selección</option>
          <option value="ejecucion">Contratos</option>
          <option value="rocos">ROCOS - Supuestos excluidos</option>
        </select>
      </div>

      {/* Entity Filter */}
      <div className="mb-4">
        <label className="block text-sm mb-2 font-['Roboto',sans-serif] text-[#26292E]">Entidad</label>
        <select
          value={entity}
          onChange={(e) => {
            setEntity(e.target.value);
            if (e.target.value) applyFilter(`Entidad: ${e.target.value}`);
          }}
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-[#26292E] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]"
        >
          <option value="">Seleccionar</option>
          <option value="municipal">Municipalidad Distrital</option>
          <option value="regional">Gobierno Regional</option>
          <option value="ministerio">Ministerio</option>
          <option value="hospital">Hospital/Salud</option>
        </select>
      </div>

      {/* Procedure Type */}
      <div className="mb-4">
        <label className="block text-sm mb-2 font-['Roboto',sans-serif] text-[#26292E]">Tipo de procedimiento</label>
        <select
          value={procedureType}
          onChange={(e) => {
            setProcedureType(e.target.value);
            if (e.target.value) applyFilter(`Tipo: ${e.target.value}`);
          }}
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-[#26292E] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]"
        >
          <option value="">Seleccionar</option>
          <option value="licitacion">Licitación Pública</option>
          <option value="adjudicacion">Adjudicación Simplificada</option>
          <option value="comparacion">Comparación de Precios</option>
          <option value="subasta">Subasta Inversa</option>
        </select>
      </div>

      {/* Object Type */}
      <div className="mb-4">
        <label className="block text-sm mb-2 font-['Roboto',sans-serif] text-[#26292E]">Objeto de Contratación</label>
        <select
          value={objectType}
          onChange={(e) => {
            setObjectType(e.target.value);
            if (e.target.value) applyFilter(`Objeto: ${e.target.value}`);
          }}
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-[#26292E] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]"
        >
          <option value="">Seleccionar</option>
          <option value="bien">BIEN</option>
          <option value="servicio">SERVICIO</option>
          <option value="obra">OBRA</option>
          <option value="consultoria">CONSULTORÍA</option>
        </select>
      </div>

      {/* SEACE Version */}
      <div className="mb-4">
        <label className="block text-sm mb-2 font-['Roboto',sans-serif] text-[#26292E]">Versión SEACE</label>
        <select
          value={seaceVersion}
          onChange={(e) => {
            setSeaceVersion(e.target.value);
            if (e.target.value) applyFilter(`SEACE ${e.target.value}`);
          }}
          className="w-full px-3 py-2 bg-white border border-gray-300 rounded text-sm text-[#26292E] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]"
        >
          <option value="">Todas las versiones</option>
          <option value="V2">SEACE V2</option>
          <option value="V3">SEACE V3</option>
          <option value="V4">SEACE V4</option>
        </select>
      </div>

      {/* Date Range */}
      <div className="mb-4">
        <label className="block text-sm mb-2 font-['Roboto',sans-serif] text-[#26292E]">Rango de fechas</label>
        <div className="flex flex-col gap-2">
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="w-full min-w-0 px-2 py-2 bg-white border border-gray-300 rounded text-xs text-[#26292E] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]"
          />
          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="w-full min-w-0 px-2 py-2 bg-white border border-gray-300 rounded text-xs text-[#26292E] focus:outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif]"
          />
        </div>
      </div>

      {/* Advanced Search Toggle */}
      <div className="mb-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={advancedSearch}
            onChange={(e) => setAdvancedSearch(e.target.checked)}
            className="w-4 h-4 accent-[#63c9c4]"
          />
          <span className="text-sm font-['Roboto',sans-serif] text-[#26292E]">Búsqueda avanzada</span>
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-6">
        <button className="flex-1 px-4 py-2 bg-white border border-[#294269] rounded-[16px] text-[12px] text-[#294269] hover:bg-[#63c9c4] hover:border-[#63c9c4] hover:text-white transition-colors font-['Roboto',sans-serif]">
          Limpiar
        </button>
        <button className="flex-1 px-4 py-2 bg-[#294269] hover:bg-[#63c9c4] rounded-[16px] text-[12px] transition-colors font-['Roboto',sans-serif] text-white">
          Buscar
        </button>
      </div>
      </div>}
    </div>
  );
}
