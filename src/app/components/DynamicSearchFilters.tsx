import { useState } from 'react';
import { Search, X } from 'lucide-react';

type Fase = '' | 'actuaciones' | 'seleccion' | 'contratos' | 'rocos';

interface DynamicSearchFiltersProps {
  onSearch: (query: string, fase: Fase, filters: Record<string, string | string[]>) => void;
}

const LABEL = 'block text-[11px] font-semibold text-gray-500 mb-1 uppercase tracking-wide font-[\'Roboto\',sans-serif]';
const INPUT = "w-full border border-gray-200 rounded-[6px] px-3 py-2 text-[13px] outline-none focus:border-[#63c9c4] font-['Roboto',sans-serif] text-[#26292E] bg-white transition-colors";
const GROUP_TITLE = "text-[11px] font-bold text-[#0056AC] uppercase tracking-widest font-['Roboto',sans-serif] mb-2.5";

const ESTADOS_ITEM = [
  'Publicado', 'Desierto', 'Nulo', 'Cancelado', 'Adjudicado', 'Consentido',
  'Apelado', 'Retraído', 'Adm. firme', 'Bloqueado', 'Adjudicado sin efecto',
  'Nulidad Pendiente', 'No suscrito', 'Perfeccionado', 'Contratado', 'Pérdida de BP',
];

const HERRAMIENTAS_OPTS = [
  { key: 'acf',        label: 'Anuncio de Contratación Futura' },
  { key: 'difusion',   label: 'Difusión de requerimientos'     },
  { key: 'condiciones',label: 'Condiciones de contratación'    },
];

const ACCIONES_OPTS = [
  { key: 'nulidad',    label: 'Nulidad'                 },
  { key: 'contratado', label: 'Contratado'               },
  { key: 'garantia',   label: 'Garantía'                 },
  { key: 'adicional',  label: 'Adicional'                },
  { key: 'reduccion',  label: 'Reducción'                },
  { key: 'conformidad',label: 'Conformidad'              },
  { key: 'cuaderno',   label: 'Cuaderno de Incidencias' },
];

function CheckGroup({ title, options, selected, onChange }: {
  title: string;
  options: { key: string; label: string }[];
  selected: string[];
  onChange: (s: string[]) => void;
}) {
  const toggle = (k: string) =>
    onChange(selected.includes(k) ? selected.filter(x => x !== k) : [...selected, k]);

  return (
    <div className="col-span-full border-t border-gray-100 pt-3 mt-1">
      <p className={GROUP_TITLE}>{title}</p>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {options.map(o => (
          <label key={o.key} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={selected.includes(o.key)}
              onChange={() => toggle(o.key)}
              className="accent-[#63c9c4] w-3.5 h-3.5 cursor-pointer"
            />
            <span className={`text-[12px] font-['Roboto',sans-serif] transition-colors ${
              selected.includes(o.key) ? 'text-[#294269] font-semibold' : 'text-[#26292E] group-hover:text-[#63c9c4]'
            }`}>
              {o.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

function EstadosItemMultiselect({ selected, onChange }: {
  selected: string[];
  onChange: (s: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const toggle = (v: string) =>
    onChange(selected.includes(v) ? selected.filter(x => x !== v) : [...selected, v]);

  const label = selected.length === 0
    ? 'Seleccione estados'
    : selected.length === 1
    ? selected[0]
    : `${selected.length} seleccionados`;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`${INPUT} flex items-center justify-between`}
      >
        <span className={selected.length === 0 ? 'text-gray-400' : ''}>{label}</span>
        <svg className={`size-4 text-gray-400 transition-transform shrink-0 ml-2 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {selected.length > 0 && (
        <button
          type="button"
          onClick={() => onChange([])}
          className="absolute right-7 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#63c9c4] transition-colors"
        >
          <X size={12} />
        </button>
      )}
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full mt-1 z-20 w-full bg-white border border-gray-200 rounded-[8px] shadow-xl max-h-56 overflow-y-auto">
            {ESTADOS_ITEM.map(opt => (
              <label key={opt} className="flex items-center gap-2.5 px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0">
                <input
                  type="checkbox"
                  checked={selected.includes(opt)}
                  onChange={() => toggle(opt)}
                  className="accent-[#63c9c4] w-3.5 h-3.5"
                />
                <span className={`text-[12px] font-['Roboto',sans-serif] ${selected.includes(opt) ? 'text-[#63c9c4] font-medium' : 'text-[#26292E]'}`}>
                  {opt}
                </span>
              </label>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export function DynamicSearchFilters({ onSearch }: DynamicSearchFiltersProps) {
  const [query, setQuery] = useState('');
  const [showPanel, setShowPanel] = useState(false);
  const [fase, setFase] = useState<Fase>('');

  // Actuaciones
  const [expediente, setExpediente] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [tipoContrato, setTipoContrato] = useState('');
  const [cubso, setCubso] = useState('');
  const [nItem, setNItem] = useState('');
  const [montoMin, setMontoMin] = useState('');
  const [montoMax, setMontoMax] = useState('');
  const [objeto, setObjeto] = useState('');
  const [fechaDesde, setFechaDesde] = useState('');
  const [fechaHasta, setFechaHasta] = useState('');
  const [herramientas, setHerramientas] = useState<string[]>([]);

  // Selección
  const [nProcedimiento, setNProcedimiento] = useState('');
  const [tipoProcedimiento, setTipoProcedimiento] = useState('');
  const [estadoProceso, setEstadoProceso] = useState('');
  const [faseProcedimiento, setFaseProcedimiento] = useState('');
  const [objetoSel, setObjetoSel] = useState('');
  const [montoMinSel, setMontoMinSel] = useState('');
  const [montoMaxSel, setMontoMaxSel] = useState('');
  const [fechaDesdeSel, setFechaDesdeSel] = useState('');
  const [fechaHastaSel, setFechaHastaSel] = useState('');
  const [estadosItem, setEstadosItem] = useState<string[]>([]);

  // Contratos
  const [nContrato, setNContrato] = useState('');
  const [estadoEjecucion, setEstadoEjecucion] = useState('');
  const [nAdicional, setNAdicional] = useState('');
  const [avanceMin, setAvanceMin] = useState('');
  const [avanceMax, setAvanceMax] = useState('');
  const [montoMinCon, setMontoMinCon] = useState('');
  const [montoMaxCon, setMontoMaxCon] = useState('');
  const [proveedor, setProveedor] = useState('');
  const [tipoDoc, setTipoDoc] = useState('');
  const [fechaDesdeCon, setFechaDesdeCon] = useState('');
  const [fechaHastaCon, setFechaHastaCon] = useState('');
  const [accionesContrato, setAccionesContrato] = useState<string[]>([]);

  // ROCOS
  const [tipoSupuesto, setTipoSupuesto] = useState('');
  const [entidadRocos, setEntidadRocos] = useState('');
  const [montoRocos, setMontoRocos] = useState('');
  const [fechaDesdeRocos, setFechaDesdeRocos] = useState('');
  const [fechaHastaRocos, setFechaHastaRocos] = useState('');

  const handleClear = () => {
    setFase('');
    setExpediente(''); setModalidad(''); setTipoContrato(''); setCubso('');
    setNItem(''); setMontoMin(''); setMontoMax(''); setObjeto('');
    setFechaDesde(''); setFechaHasta(''); setHerramientas([]);
    setNProcedimiento(''); setTipoProcedimiento(''); setEstadoProceso('');
    setFaseProcedimiento(''); setObjetoSel(''); setMontoMinSel(''); setMontoMaxSel('');
    setFechaDesdeSel(''); setFechaHastaSel(''); setEstadosItem([]);
    setNContrato(''); setEstadoEjecucion(''); setNAdicional('');
    setAvanceMin(''); setAvanceMax(''); setMontoMinCon(''); setMontoMaxCon('');
    setProveedor(''); setTipoDoc(''); setFechaDesdeCon(''); setFechaHastaCon('');
    setAccionesContrato([]);
    setTipoSupuesto(''); setEntidadRocos(''); setMontoRocos('');
    setFechaDesdeRocos(''); setFechaHastaRocos('');
  };

  const handleSearch = () => {
    onSearch(query, fase, {});
    setShowPanel(false);
  };

  const faseLabel = {
    '': '', actuaciones: 'Actuaciones Preparatorias',
    seleccion: 'Selección', contratos: 'Contratos',
    rocos: 'ROCOS - Supuestos Excluidos',
  }[fase];

  return (
    <div className="w-full max-w-4xl">
      {/* Search bar */}
      <div className={`flex items-stretch shadow-lg transition-shadow rounded-[8px] border-2 bg-white overflow-hidden ${showPanel ? 'border-[#63c9c4]' : 'border-gray-300 hover:shadow-xl focus-within:border-[#294269]'}`}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setShowPanel(true)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
          placeholder="Buscar licitaciones, contratos, entidades..."
          className="flex-1 px-5 py-4 text-[16px] bg-transparent outline-none font-['Roboto',sans-serif] text-[#26292E] placeholder-gray-400"
        />
        {showPanel ? (
          <button
            onClick={() => setShowPanel(false)}
            className="shrink-0 px-4 text-gray-400 hover:text-[#63c9c4] transition-colors flex items-center"
          >
            <X size={20} />
          </button>
        ) : (
          <button
            onClick={handleSearch}
            className="shrink-0 px-5 bg-[#63c9c4] text-white hover:bg-[#3F5578] transition-colors flex items-center justify-center"
          >
            <Search size={22} />
          </button>
        )}
      </div>

      {/* Dynamic filter panel */}
      {showPanel && (
        <div className="mt-2 bg-white border border-gray-200 rounded-[10px] shadow-xl overflow-hidden">

          {/* Header: Fase del procedimiento — siempre visible */}
          <div className="px-5 pt-4 pb-3 border-b border-gray-100 flex items-center gap-4">
            <div className="shrink-0">
              <label className={LABEL}>Fase del procedimiento</label>
              <select
                value={fase}
                onChange={e => setFase(e.target.value as Fase)}
                className={`${INPUT} w-56`}
              >
                <option value="">— Seleccione una fase —</option>
                <option value="actuaciones">Actuaciones Preparatorias</option>
                <option value="seleccion">Selección</option>
                <option value="contratos">Contratos</option>
                <option value="rocos">ROCOS - Supuestos Excluidos</option>
              </select>
            </div>
            {faseLabel && (
              <div className="flex-1 flex items-center gap-2 pt-5">
                <div className="h-px flex-1 bg-gray-100" />
                <span className="text-[11px] font-bold text-[#0056AC] uppercase tracking-widest font-['Roboto',sans-serif] shrink-0 px-2">
                  {faseLabel}
                </span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            )}
          </div>

          {/* Phase-specific filter body */}
          {fase && (
            <div className="px-5 py-4 space-y-4">

              {/* ─── ACTUACIONES PREPARATORIAS ─── */}
              {fase === 'actuaciones' && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  <div>
                    <label className={LABEL}>Identificador de expediente</label>
                    <input type="text" value={expediente} onChange={e => setExpediente(e.target.value)}
                      placeholder="Ej. EXP-2025-001" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Modalidad</label>
                    <select value={modalidad} onChange={e => setModalidad(e.target.value)} className={INPUT}>
                      <option value="">Todas</option>
                      <option>Concurso Oferta</option>
                      <option>Llave en Mano</option>
                      <option>Normal</option>
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>Tipo de contrato</label>
                    <select value={tipoContrato} onChange={e => setTipoContrato(e.target.value)} className={INPUT}>
                      <option value="">Todos</option>
                      <option>Precio Fijo</option>
                      <option>Precio Variable</option>
                      <option>Mixto</option>
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>CUBSO</label>
                    <input type="text" value={cubso} onChange={e => setCubso(e.target.value)}
                      placeholder="Código CUBSO" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>N.° de ítem</label>
                    <input type="number" value={nItem} onChange={e => setNItem(e.target.value)}
                      placeholder="Ej. 001" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Objeto de contratación</label>
                    <select value={objeto} onChange={e => setObjeto(e.target.value)} className={INPUT}>
                      <option value="">Todos</option>
                      <option>Bien</option>
                      <option>Servicio</option>
                      <option>Obra</option>
                      <option>Consultoría</option>
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>Rango de monto (S/) — Mín</label>
                    <input type="number" value={montoMin} onChange={e => setMontoMin(e.target.value)}
                      placeholder="0.00" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Rango de monto (S/) — Máx</label>
                    <input type="number" value={montoMax} onChange={e => setMontoMax(e.target.value)}
                      placeholder="Sin límite" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Fecha de publicación — Desde</label>
                    <input type="date" value={fechaDesde} onChange={e => setFechaDesde(e.target.value)} className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Fecha de publicación — Hasta</label>
                    <input type="date" value={fechaHasta} onChange={e => setFechaHasta(e.target.value)} className={INPUT} />
                  </div>
                  <CheckGroup
                    title="Herramientas de actuaciones preparatorias"
                    options={HERRAMIENTAS_OPTS}
                    selected={herramientas}
                    onChange={setHerramientas}
                  />
                </div>
              )}

              {/* ─── SELECCIÓN ─── */}
              {fase === 'seleccion' && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  <div>
                    <label className={LABEL}>N.° del procedimiento</label>
                    <input type="text" value={nProcedimiento} onChange={e => setNProcedimiento(e.target.value)}
                      placeholder="Ej. LP-001-2025" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Tipo de procedimiento</label>
                    <select value={tipoProcedimiento} onChange={e => setTipoProcedimiento(e.target.value)} className={INPUT}>
                      <option value="">Todos</option>
                      <option>Licitación Pública (LP)</option>
                      <option>Adjudicación Simplificada (AS)</option>
                      <option>Concurso Público (CP)</option>
                      <option>Comparación de Precios (CDS)</option>
                      <option>Subasta Inversa Electrónica (SIE)</option>
                      <option>Contratación Directa (CD)</option>
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>Estado del proceso</label>
                    <select value={estadoProceso} onChange={e => setEstadoProceso(e.target.value)} className={INPUT}>
                      <option value="">Todos</option>
                      <option>Convocado</option>
                      <option>En Proceso</option>
                      <option>Adjudicado</option>
                      <option>Desierto</option>
                      <option>Nulo</option>
                      <option>Cancelado</option>
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>Fase del procedimiento</label>
                    <select value={faseProcedimiento} onChange={e => setFaseProcedimiento(e.target.value)} className={INPUT}>
                      <option value="">Todas</option>
                      <option>Convocatoria</option>
                      <option>Registro de Participantes</option>
                      <option>Consultas y Observaciones</option>
                      <option>Integración de Bases</option>
                      <option>Presentación de Ofertas</option>
                      <option>Evaluación</option>
                      <option>Buena Pro</option>
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>Objeto de contratación</label>
                    <select value={objetoSel} onChange={e => setObjetoSel(e.target.value)} className={INPUT}>
                      <option value="">Todos</option>
                      <option>Bien</option>
                      <option>Servicio</option>
                      <option>Obra</option>
                      <option>Consultoría</option>
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>Monto referencial (S/) — Mín</label>
                    <input type="number" value={montoMinSel} onChange={e => setMontoMinSel(e.target.value)}
                      placeholder="0.00" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Monto referencial (S/) — Máx</label>
                    <input type="number" value={montoMaxSel} onChange={e => setMontoMaxSel(e.target.value)}
                      placeholder="Sin límite" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Fecha de convocatoria — Desde</label>
                    <input type="date" value={fechaDesdeSel} onChange={e => setFechaDesdeSel(e.target.value)} className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Fecha de convocatoria — Hasta</label>
                    <input type="date" value={fechaHastaSel} onChange={e => setFechaHastaSel(e.target.value)} className={INPUT} />
                  </div>
                  {/* Estados de ítem — multiselect */}
                  <div className="col-span-full border-t border-gray-100 pt-3 mt-1">
                    <p className={GROUP_TITLE}>Estado de ítem</p>
                    <div className="max-w-sm">
                      <EstadosItemMultiselect selected={estadosItem} onChange={setEstadosItem} />
                    </div>
                    {estadosItem.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {estadosItem.map(s => (
                          <span key={s} className="flex items-center gap-1 px-2 py-0.5 bg-[#63c9c4]/10 text-[#294269] border border-[#63c9c4]/20 rounded text-[10px] font-semibold font-['Roboto',sans-serif]">
                            {s}
                            <button onClick={() => setEstadosItem(estadosItem.filter(x => x !== s))} className="hover:opacity-70">
                              <X size={9} />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ─── CONTRATOS ─── */}
              {fase === 'contratos' && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  <div>
                    <label className={LABEL}>N.° de contrato</label>
                    <input type="text" value={nContrato} onChange={e => setNContrato(e.target.value)}
                      placeholder="Ej. 0001-2025-MDY/GM" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Estado de ejecución</label>
                    <select value={estadoEjecucion} onChange={e => setEstadoEjecucion(e.target.value)} className={INPUT}>
                      <option value="">Todos</option>
                      <option>Vigente</option>
                      <option>Concluido</option>
                      <option>Resuelto</option>
                      <option>Paralizado</option>
                      <option>En Arbitraje</option>
                      <option>En Liquidación</option>
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>N.° de adicional</label>
                    <input type="number" value={nAdicional} onChange={e => setNAdicional(e.target.value)}
                      placeholder="Ej. 1" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>% Avance físico — Desde</label>
                    <div className="flex items-center gap-1">
                      <input type="number" min="0" max="100" value={avanceMin} onChange={e => setAvanceMin(e.target.value)}
                        placeholder="0%" className={INPUT} />
                    </div>
                  </div>
                  <div>
                    <label className={LABEL}>% Avance físico — Hasta</label>
                    <input type="number" min="0" max="100" value={avanceMax} onChange={e => setAvanceMax(e.target.value)}
                      placeholder="100%" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Monto del contrato (S/) — Mín</label>
                    <input type="number" value={montoMinCon} onChange={e => setMontoMinCon(e.target.value)}
                      placeholder="0.00" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Monto del contrato (S/) — Máx</label>
                    <input type="number" value={montoMaxCon} onChange={e => setMontoMaxCon(e.target.value)}
                      placeholder="Sin límite" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Proveedor / Contratista</label>
                    <input type="text" value={proveedor} onChange={e => setProveedor(e.target.value)}
                      placeholder="RUC o razón social" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Tipo de documento</label>
                    <select value={tipoDoc} onChange={e => setTipoDoc(e.target.value)} className={INPUT}>
                      <option value="">Todos</option>
                      <option>Contratos</option>
                      <option>Cuaderno de Incidencias</option>
                      <option>ROCOS</option>
                      <option>Adicional de Obra</option>
                      <option>Ampliación de Plazo</option>
                      <option>Liquidación</option>
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>Fecha de suscripción — Desde</label>
                    <input type="date" value={fechaDesdeCon} onChange={e => setFechaDesdeCon(e.target.value)} className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Fecha de suscripción — Hasta</label>
                    <input type="date" value={fechaHastaCon} onChange={e => setFechaHastaCon(e.target.value)} className={INPUT} />
                  </div>
                  <CheckGroup
                    title="Acciones del contrato"
                    options={ACCIONES_OPTS}
                    selected={accionesContrato}
                    onChange={setAccionesContrato}
                  />
                </div>
              )}

              {/* ─── ROCOS - SUPUESTOS EXCLUIDOS ─── */}
              {fase === 'rocos' && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  <div className="col-span-full mb-1">
                    <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-[8px]">
                      <svg className="size-4 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      </svg>
                      <p className="text-[12px] text-amber-700 font-['Roboto',sans-serif] leading-relaxed">
                        <strong>ROCOS – Supuestos Excluidos:</strong> Contrataciones que no se rigen por la Ley de Contrataciones del Estado. Incluye supuestos del Art. 5° de la Ley N° 30225 y normativas especiales.
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className={LABEL}>Tipo de supuesto excluido</label>
                    <select value={tipoSupuesto} onChange={e => setTipoSupuesto(e.target.value)} className={INPUT}>
                      <option value="">Todos</option>
                      <option>Art. 5° - inciso a</option>
                      <option>Art. 5° - inciso b</option>
                      <option>Art. 5° - inciso c</option>
                      <option>Art. 5° - inciso d</option>
                      <option>Art. 5° - inciso e</option>
                      <option>Art. 5° - inciso f</option>
                      <option>Normativa especial</option>
                    </select>
                  </div>
                  <div>
                    <label className={LABEL}>Entidad</label>
                    <input type="text" value={entidadRocos} onChange={e => setEntidadRocos(e.target.value)}
                      placeholder="RUC o nombre de entidad" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Monto (S/)</label>
                    <input type="number" value={montoRocos} onChange={e => setMontoRocos(e.target.value)}
                      placeholder="0.00" className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Fecha de registro — Desde</label>
                    <input type="date" value={fechaDesdeRocos} onChange={e => setFechaDesdeRocos(e.target.value)} className={INPUT} />
                  </div>
                  <div>
                    <label className={LABEL}>Fecha de registro — Hasta</label>
                    <input type="date" value={fechaHastaRocos} onChange={e => setFechaHastaRocos(e.target.value)} className={INPUT} />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Footer actions — siempre visibles */}
          <div className="px-5 py-3.5 border-t border-gray-100 bg-gray-50/60 flex items-center justify-between">
            <button
              onClick={handleClear}
              className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-[#63c9c4] transition-colors font-['Roboto',sans-serif] font-medium"
            >
              <X size={14} />
              Limpiar filtros
            </button>
            <button
              onClick={handleSearch}
              className="flex items-center gap-2 bg-[#63c9c4] text-white px-6 py-2.5 rounded-[6px] hover:bg-[#3F5578] transition-colors text-[13px] font-semibold font-['Roboto',sans-serif]"
            >
              <Search size={15} />
              Buscar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
