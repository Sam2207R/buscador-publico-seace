import { useState } from 'react';
import { PanelLeft, X, ChevronDown } from 'lucide-react';

type Fase = '' | 'actuaciones' | 'seleccion' | 'contratos' | 'contratos_menores' | 'rocos';

interface UnifiedSidebarFilterProps {
  onFiltersChange: (filters: string[]) => void;
  appliedFilters: string[];
}

const LBL = "block text-[11px] font-semibold text-[#5B6472] mb-1 uppercase tracking-wide font-['Roboto',sans-serif]";
const INP = "w-full border border-[#DEE3EA] rounded-[6px] px-2.5 py-2 text-[12px] outline-none focus:border-[#63c9c4] focus:ring-1 focus:ring-[#63c9c4]/20 font-['Roboto',sans-serif] text-[#26292E] bg-white transition-colors";
const SEC = "text-[10px] font-bold text-[#0056AC] uppercase tracking-[.06em] font-['Roboto',sans-serif] mb-2";

// ─── Multi-select compacto para estados de ítem ───
const ESTADOS_ITEM = [
  'Publicado','Desierto','Nulo','Cancelado','Adjudicado','Consentido',
  'Apelado','Retraído','Adm. firme','Bloqueado','Adjudicado sin efecto',
  'Nulidad Pendiente','No suscrito','Perfeccionado','Contratado','Pérdida de BP',
];

function MultiSelect({ label, options, selected, onChange }: {
  label: string; options: string[]; selected: string[]; onChange: (s: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const toggle = (v: string) =>
    onChange(selected.includes(v) ? selected.filter(x => x !== v) : [...selected, v]);
  const display = selected.length === 0 ? 'Todos' : selected.length === 1 ? selected[0] : `${selected.length} seleccionados`;

  return (
    <div className="relative">
      <label className={LBL}>{label}</label>
      <button type="button" onClick={() => setOpen(!open)}
        className={`${INP} flex items-center justify-between text-left`}
      >
        <span className={selected.length === 0 ? 'text-gray-400' : ''}>{display}</span>
        <ChevronDown size={13} className={`text-gray-400 shrink-0 ml-1 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full mt-1 z-20 w-full bg-white border border-gray-200 rounded-[8px] shadow-xl max-h-48 overflow-y-auto">
            {options.map(opt => (
              <label key={opt} className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0">
                <input type="checkbox" checked={selected.includes(opt)} onChange={() => toggle(opt)} className="accent-[#63c9c4] w-3 h-3" />
                <span className={`text-[11px] font-['Roboto',sans-serif] ${selected.includes(opt) ? 'text-[#63c9c4] font-medium' : 'text-[#26292E]'}`}>{opt}</span>
              </label>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function CheckRow({ opts, selected, onChange }: {
  opts: { key: string; label: string }[]; selected: string[]; onChange: (s: string[]) => void;
}) {
  const toggle = (k: string) =>
    onChange(selected.includes(k) ? selected.filter(x => x !== k) : [...selected, k]);
  return (
    <div className="flex flex-col gap-1.5 mt-1">
      {opts.map(o => (
        <label key={o.key} className="flex items-center gap-2 cursor-pointer group">
          <input type="checkbox" checked={selected.includes(o.key)} onChange={() => toggle(o.key)} className="accent-[#63c9c4] w-3 h-3" />
          <span className={`text-[11px] font-['Roboto',sans-serif] ${selected.includes(o.key) ? 'text-[#63c9c4] font-medium' : 'text-gray-600 group-hover:text-[#63c9c4]'}`}>{o.label}</span>
        </label>
      ))}
    </div>
  );
}

export function UnifiedSidebarFilter({ onFiltersChange, appliedFilters }: UnifiedSidebarFilterProps) {
  const [fase, setFase] = useState<Fase>('');

  // ── Act. Preparatorias ──
  const [expediente, setExpediente] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [tipoContrato, setTipoContrato] = useState('');
  const [cubso, setCubso] = useState('');
  const [nItem, setNItem] = useState('');
  const [montoMinAP, setMontoMinAP] = useState('');
  const [montoMaxAP, setMontoMaxAP] = useState('');
  const [objetoAP, setObjetoAP] = useState('');
  const [herramienta, setHerramienta] = useState('acf');

  // ── Selección ──
  const [nProc, setNProc] = useState('');
  const [tipoProc, setTipoProc] = useState('');
  const [estadoProc, setEstadoProc] = useState('');
  const [faseProc, setFaseProc] = useState('');
  const [objetoSel, setObjetoSel] = useState('');
  const [montoMinSel, setMontoMinSel] = useState('');
  const [montoMaxSel, setMontoMaxSel] = useState('');
  const [estadosItem, setEstadosItem] = useState<string[]>([]);

  // ── Contratos ──
  const [nContrato, setNContrato] = useState('');
  const [estadoEjec, setEstadoEjec] = useState('');
  const [nAdicional, setNAdicional] = useState('');
  const [avanceMin, setAvanceMin] = useState('');
  const [avanceMax, setAvanceMax] = useState('');
  const [montoMinCon, setMontoMinCon] = useState('');
  const [montoMaxCon, setMontoMaxCon] = useState('');
  const [proveedor, setProveedor] = useState('');
  const [tipoDoc, setTipoDoc] = useState('');
  const [accionesContrato, setAccionesContrato] = useState<string[]>([]);

  // ── Generales ──
  const [entidad, setEntidad] = useState('');
  const [tipoProcGen, setTipoProcGen] = useState('');
  const [objetoGen, setObjetoGen] = useState('');
  const [versionSeace, setVersionSeace] = useState('');
  const [fechaDesde, setFechaDesde] = useState('');
  const [fechaHasta, setFechaHasta] = useState('');

  const buildFilters = () => {
    const f: string[] = [];
    if (fase === 'rocos') {
      f.push('Fase: ROCOS - Supuestos Excluidos');
    }
    if (fase === 'actuaciones') {
      if (expediente) f.push(`Expediente: ${expediente}`);
      if (modalidad) f.push(`Modalidad: ${modalidad}`);
      if (tipoContrato) f.push(`Tipo contrato: ${tipoContrato}`);
      if (cubso) f.push(`CUBSO: ${cubso}`);
      if (nItem) f.push(`Ítem: ${nItem}`);
      if (montoMinAP) f.push(`Monto mín: S/${montoMinAP}`);
      if (montoMaxAP) f.push(`Monto máx: S/${montoMaxAP}`);
      if (objetoAP) f.push(`Objeto: ${objetoAP}`);
      if (herramienta) f.push(`Herramienta: ${herramienta}`);
    }
    if (fase === 'seleccion') {
      if (nProc) f.push(`N° procedimiento: ${nProc}`);
      if (tipoProc) f.push(`Tipo: ${tipoProc}`);
      if (estadoProc) f.push(`Estado: ${estadoProc}`);
      if (faseProc) f.push(`Fase: ${faseProc}`);
      if (objetoSel) f.push(`Objeto: ${objetoSel}`);
      if (montoMinSel) f.push(`Monto mín: S/${montoMinSel}`);
      if (montoMaxSel) f.push(`Monto máx: S/${montoMaxSel}`);
      estadosItem.forEach(e => f.push(`Estado ítem: ${e}`));
    }
    if (fase === 'contratos') {
      if (nContrato) f.push(`Contrato: ${nContrato}`);
      if (estadoEjec) f.push(`Estado: ${estadoEjec}`);
      if (nAdicional) f.push(`Adicional: ${nAdicional}`);
      if (avanceMin) f.push(`Avance ≥ ${avanceMin}%`);
      if (avanceMax) f.push(`Avance ≤ ${avanceMax}%`);
      if (montoMinCon) f.push(`Monto mín: S/${montoMinCon}`);
      if (montoMaxCon) f.push(`Monto máx: S/${montoMaxCon}`);
      if (proveedor) f.push(`Proveedor: ${proveedor}`);
      if (tipoDoc) f.push(`Doc: ${tipoDoc}`);
      accionesContrato.forEach(a => f.push(`Acción: ${a}`));
    }
    if (fase === 'contratos_menores') {
      f.push('Fase: Contratos Menores');
    }
    if (entidad) f.push(`Entidad: ${entidad}`);
    if (tipoProcGen) f.push(`Tipo proc.: ${tipoProcGen}`);
    if (objetoGen) f.push(`Objeto: ${objetoGen}`);
    if (versionSeace) f.push(`SEACE ${versionSeace}`);
    if (fechaDesde) f.push(`Desde: ${fechaDesde}`);
    if (fechaHasta) f.push(`Hasta: ${fechaHasta}`);
    return f;
  };

  const handleApply = () => onFiltersChange(buildFilters());

  const handleClear = () => {
    setFase('');
    setExpediente(''); setModalidad(''); setTipoContrato(''); setCubso('');
    setNItem(''); setMontoMinAP(''); setMontoMaxAP(''); setObjetoAP(''); setHerramienta('acf');
    setNProc(''); setTipoProc(''); setEstadoProc(''); setFaseProc('');
    setObjetoSel(''); setMontoMinSel(''); setMontoMaxSel(''); setEstadosItem([]);
    setNContrato(''); setEstadoEjec(''); setNAdicional('');
    setAvanceMin(''); setAvanceMax(''); setMontoMinCon(''); setMontoMaxCon('');
    setProveedor(''); setTipoDoc(''); setAccionesContrato([]);
    setEntidad(''); setTipoProcGen(''); setObjetoGen(''); setVersionSeace('');
    setFechaDesde(''); setFechaHasta('');
    onFiltersChange([]);
  };

  return (
    <div className="h-full overflow-y-auto bg-[#f5f5f5] flex flex-col">
      <div className="p-3 flex-1 space-y-4">

        {/* Header — gob.pe style */}
        <div className="flex items-center gap-2 pb-2.5 border-b-2 border-[#0056AC]">
          <div className="flex items-center justify-center w-6 h-6 rounded-[4px] bg-[#0056AC]">
            <PanelLeft className="text-white" size={14} />
          </div>
          <h3 className="font-bold text-[13px] font-['Roboto',sans-serif] text-[#26292E]">Filtros de búsqueda</h3>
        </div>

        {/* ── 1. FASE DEL PROCEDIMIENTO (PRIMARIA) ── */}
        <div>
          <label className={LBL}>Fase del procedimiento</label>
          <select value={fase} onChange={e => setFase(e.target.value as Fase)} className={INP}>
            <option value="">Todas las fases</option>
            <option value="actuaciones">Actuaciones Preparatorias</option>
            <option value="seleccion">Selección</option>
            <option value="contratos">Contratos</option>
            <option value="contratos_menores">Contratos Menores</option>
            <option value="rocos">ROCOS - Supuestos Excluidos</option>
          </select>
        </div>

        {/* ── 2. FILTROS ESPECÍFICOS POR FASE (CONDICIONALES) ── */}

        {/* ACTUACIONES PREPARATORIAS */}
        {fase === 'actuaciones' && (
          <div className="space-y-3 border-t border-gray-200 pt-3">
            <p className={SEC}>↳ Actuaciones Preparatorias</p>
            <div>
              <label className={LBL}>Identificador de expediente</label>
              <input type="text" value={expediente} onChange={e => setExpediente(e.target.value)}
                placeholder="Ej. EXP-2025-001" className={INP} />
            </div>
            <div>
              <label className={LBL}>Modalidad</label>
              <select value={modalidad} onChange={e => setModalidad(e.target.value)} className={INP}>
                <option value="">Todas</option>
                <option>Concurso Oferta</option>
                <option>Llave en Mano</option>
                <option>Normal</option>
              </select>
            </div>
            <div>
              <label className={LBL}>Tipo de contrato</label>
              <select value={tipoContrato} onChange={e => setTipoContrato(e.target.value)} className={INP}>
                <option value="">Todos</option>
                <option>Precio Fijo</option>
                <option>Precio Variable</option>
                <option>Mixto</option>
              </select>
            </div>
            <div>
              <label className={LBL}>CUBSO</label>
              <input type="text" value={cubso} onChange={e => setCubso(e.target.value)}
                placeholder="Código CUBSO" className={INP} />
            </div>
            <div>
              <label className={LBL}>N.° de ítem</label>
              <input type="number" value={nItem} onChange={e => setNItem(e.target.value)}
                placeholder="Ej. 001" className={INP} />
            </div>
            <div>
              <label className={LBL}>Objeto de contratación</label>
              <select value={objetoAP} onChange={e => setObjetoAP(e.target.value)} className={INP}>
                <option value="">Todos</option>
                <option>Bien</option><option>Servicio</option><option>Obra</option><option>Consultoría</option>
              </select>
            </div>
            <div>
              <label className={LBL}>Rango de monto (S/)</label>
              <div className="flex gap-1.5">
                <input type="number" value={montoMinAP} onChange={e => setMontoMinAP(e.target.value)} placeholder="Mín" className={INP} />
                <input type="number" value={montoMaxAP} onChange={e => setMontoMaxAP(e.target.value)} placeholder="Máx" className={INP} />
              </div>
            </div>
            {/* Herramientas */}
            <div className="border-t border-[#DEE3EA] pt-3">
              <div className="flex items-center gap-1.5 mb-2.5">
                <div className="w-[3px] h-[14px] rounded-[2px] bg-[#63c9c4]" />
                <span className="text-[10.5px] font-bold text-[#26292E] uppercase tracking-[.06em] font-['Roboto',sans-serif]">
                  Herramientas
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {/* ACF */}
                <button
                  type="button"
                  onClick={() => setHerramienta('acf')}
                  className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-[4px] border transition-all ${
                    herramienta === 'acf'
                      ? 'border-[#294269] bg-[#edf0f4] shadow-[inset_3px_0_0_#294269]'
                      : 'border-[#DEE3EA] bg-white hover:border-[#294269]/40 hover:bg-[#f6f9fc]'
                  }`}
                >
                  <span className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-[4px] ${herramienta === 'acf' ? 'bg-[#294269]' : 'bg-[#DEE3EA]'}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={herramienta === 'acf' ? '#fff' : '#5B6472'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 11v2M5 9v6M18 3v18M18 3C12 5 7 8 5 9M18 21C12 19 7 16 5 15"/>
                    </svg>
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className={`text-[11.5px] font-semibold leading-snug font-['Roboto',sans-serif] ${herramienta === 'acf' ? 'text-[#294269]' : 'text-[#26292E]'}`}>
                      Anuncio de Contratación Futura
                    </span>
                    <span className="text-[9.5px] text-[#5B6472] font-['Roboto',sans-serif]">ACF</span>
                  </div>
                </button>

                {/* Difusión de requerimientos */}
                <button
                  type="button"
                  onClick={() => setHerramienta('difusion')}
                  className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-[4px] border transition-all ${
                    herramienta === 'difusion'
                      ? 'border-[#294269] bg-[#edf0f4] shadow-[inset_3px_0_0_#294269]'
                      : 'border-[#DEE3EA] bg-white hover:border-[#294269]/40 hover:bg-[#f6f9fc]'
                  }`}
                >
                  <span className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-[4px] ${herramienta === 'difusion' ? 'bg-[#294269]' : 'bg-[#DEE3EA]'}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={herramienta === 'difusion' ? '#fff' : '#5B6472'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>
                    </svg>
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className={`text-[11.5px] font-semibold leading-snug font-['Roboto',sans-serif] ${herramienta === 'difusion' ? 'text-[#294269]' : 'text-[#26292E]'}`}>
                      Difusión de requerimientos
                    </span>
                    <span className="text-[9.5px] text-[#5B6472] font-['Roboto',sans-serif]">DDR</span>
                  </div>
                </button>

                {/* Condiciones de contratación */}
                <button
                  type="button"
                  onClick={() => setHerramienta('condiciones')}
                  className={`w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-[4px] border transition-all ${
                    herramienta === 'condiciones'
                      ? 'border-[#294269] bg-[#edf0f4] shadow-[inset_3px_0_0_#294269]'
                      : 'border-[#DEE3EA] bg-white hover:border-[#294269]/40 hover:bg-[#f6f9fc]'
                  }`}
                >
                  <span className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-[4px] ${herramienta === 'condiciones' ? 'bg-[#294269]' : 'bg-[#DEE3EA]'}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={herramienta === 'condiciones' ? '#fff' : '#5B6472'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className={`text-[11.5px] font-semibold leading-snug font-['Roboto',sans-serif] ${herramienta === 'condiciones' ? 'text-[#294269]' : 'text-[#26292E]'}`}>
                      Condiciones de contratación
                    </span>
                    <span className="text-[9.5px] text-[#5B6472] font-['Roboto',sans-serif]">CDC</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SELECCIÓN */}
        {fase === 'seleccion' && (
          <div className="space-y-3 border-t border-gray-200 pt-3">
            <p className={SEC}>↳ Selección</p>
            <div>
              <label className={LBL}>N.° del procedimiento</label>
              <input type="text" value={nProc} onChange={e => setNProc(e.target.value)}
                placeholder="Ej. LP-001-2025" className={INP} />
            </div>
            <div>
              <label className={LBL}>Tipo de procedimiento</label>
              <select value={tipoProc} onChange={e => setTipoProc(e.target.value)} className={INP}>
                <option value="">Todos</option>
                <option>Licitación Pública (LP)</option>
                <option>Adjudicación Simplificada (AS)</option>
                <option>Concurso Público (CP)</option>
                <option>Comparación de Precios (CDS)</option>
                <option>Subasta Inversa (SIE)</option>
                <option>Contratación Directa (CD)</option>
              </select>
            </div>
            <div>
              <label className={LBL}>Estado del proceso</label>
              <select value={estadoProc} onChange={e => setEstadoProc(e.target.value)} className={INP}>
                <option value="">Todos</option>
                <option>Convocado</option><option>En Proceso</option>
                <option>Adjudicado</option><option>Desierto</option>
                <option>Nulo</option><option>Cancelado</option>
              </select>
            </div>
            <div>
              <label className={LBL}>Fase del procedimiento</label>
              <select value={faseProc} onChange={e => setFaseProc(e.target.value)} className={INP}>
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
              <label className={LBL}>Objeto de contratación</label>
              <select value={objetoSel} onChange={e => setObjetoSel(e.target.value)} className={INP}>
                <option value="">Todos</option>
                <option>Bien</option><option>Servicio</option><option>Obra</option><option>Consultoría</option>
              </select>
            </div>
            <div>
              <label className={LBL}>Monto referencial (S/)</label>
              <div className="flex gap-1.5">
                <input type="number" value={montoMinSel} onChange={e => setMontoMinSel(e.target.value)} placeholder="Mín" className={INP} />
                <input type="number" value={montoMaxSel} onChange={e => setMontoMaxSel(e.target.value)} placeholder="Máx" className={INP} />
              </div>
            </div>
            {/* Estados de ítem */}
            <div className="border-t border-gray-200 pt-2">
              <MultiSelect label="Estado de ítem" options={ESTADOS_ITEM} selected={estadosItem} onChange={setEstadosItem} />
              {estadosItem.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {estadosItem.map(s => (
                    <span key={s} className="flex items-center gap-0.5 px-1.5 py-0.5 bg-[#63c9c4]/10 text-[#294269] border border-[#63c9c4]/20 rounded text-[9px] font-semibold">
                      {s}
                      <button onClick={() => setEstadosItem(estadosItem.filter(x => x !== s))}><X size={8} /></button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* CONTRATOS */}
        {fase === 'contratos' && (
          <div className="space-y-3 border-t border-gray-200 pt-3">
            <p className={SEC}>↳ Contratos</p>
            <div>
              <label className={LBL}>N.° de contrato</label>
              <input type="text" value={nContrato} onChange={e => setNContrato(e.target.value)}
                placeholder="Ej. 0001-2025-MDY/GM" className={INP} />
            </div>
            <div>
              <label className={LBL}>Estado de ejecución</label>
              <select value={estadoEjec} onChange={e => setEstadoEjec(e.target.value)} className={INP}>
                <option value="">Todos</option>
                <option>Vigente</option><option>Concluido</option>
                <option>Resuelto</option><option>Paralizado</option>
                <option>En Arbitraje</option><option>En Liquidación</option>
              </select>
            </div>
            <div>
              <label className={LBL}>N.° de adicional</label>
              <input type="number" value={nAdicional} onChange={e => setNAdicional(e.target.value)}
                placeholder="Ej. 1" className={INP} />
            </div>
            <div>
              <label className={LBL}>% Avance físico</label>
              <div className="flex gap-1.5 items-center">
                <input type="number" min="0" max="100" value={avanceMin} onChange={e => setAvanceMin(e.target.value)}
                  placeholder="0%" className={INP} />
                <span className="text-gray-400 text-[11px] shrink-0">—</span>
                <input type="number" min="0" max="100" value={avanceMax} onChange={e => setAvanceMax(e.target.value)}
                  placeholder="100%" className={INP} />
              </div>
            </div>
            <div>
              <label className={LBL}>Monto del contrato (S/)</label>
              <div className="flex gap-1.5">
                <input type="number" value={montoMinCon} onChange={e => setMontoMinCon(e.target.value)} placeholder="Mín" className={INP} />
                <input type="number" value={montoMaxCon} onChange={e => setMontoMaxCon(e.target.value)} placeholder="Máx" className={INP} />
              </div>
            </div>
            <div>
              <label className={LBL}>Proveedor / Contratista</label>
              <input type="text" value={proveedor} onChange={e => setProveedor(e.target.value)}
                placeholder="RUC o razón social" className={INP} />
            </div>
            <div>
              <label className={LBL}>Tipo de documento</label>
              <select value={tipoDoc} onChange={e => setTipoDoc(e.target.value)} className={INP}>
                <option value="">Todos</option>
                <option>Contratos</option><option>Cuaderno de Incidencias</option>
                <option>ROCOS</option><option>Adicional de Obra</option>
                <option>Ampliación de Plazo</option><option>Liquidación</option>
              </select>
            </div>
            {/* Acciones del contrato */}
            <div className="border-t border-gray-200 pt-2">
              <p className="text-[10px] font-bold text-[#0056AC] uppercase tracking-widest font-['Roboto',sans-serif] mb-1.5">
                Acciones del contrato
              </p>
              <CheckRow
                opts={[
                  { key: 'nulidad',     label: 'Nulidad'                 },
                  { key: 'contratado',  label: 'Contratado'               },
                  { key: 'garantia',    label: 'Garantía'                 },
                  { key: 'adicional',   label: 'Adicional'                },
                  { key: 'reduccion',   label: 'Reducción'                },
                  { key: 'conformidad', label: 'Conformidad'              },
                  { key: 'cuaderno',    label: 'Cuaderno de Incidencias' },
                ]}
                selected={accionesContrato}
                onChange={setAccionesContrato}
              />
            </div>
          </div>
        )}

        {/* CONTRATOS MENORES */}
        {fase === 'contratos_menores' && (
          <div className="space-y-3 border-t border-gray-200 pt-3">
            <p className={SEC}>↳ Contratos Menores</p>
            <div>
              <label className={LBL}>N.° de orden / contrato</label>
              <input type="text" placeholder="Ej. O/C 2025" className={INP} />
            </div>
            <div>
              <label className={LBL}>Monto (S/)</label>
              <div className="flex gap-1.5">
                <input type="number" placeholder="Mín" className={INP} />
                <input type="number" placeholder="Máx" className={INP} />
              </div>
            </div>
          </div>
        )}

        {/* ROCOS - SUPUESTOS EXCLUIDOS */}
        {fase === 'rocos' && (
          <div className="space-y-3 border-t border-gray-200 pt-3">
            <p className={SEC}>↳ ROCOS - Supuestos Excluidos</p>
            <div>
              <label className={LBL}>Tipo de supuesto</label>
              <select className={INP}>
                <option value="">Todos</option>
                <option>Art. 5° - inciso a</option>
                <option>Art. 5° - inciso b</option>
                <option>Normativa especial</option>
              </select>
            </div>
            <div>
              <label className={LBL}>Monto (S/)</label>
              <input type="number" placeholder="0.00" className={INP} />
            </div>
          </div>
        )}

        {/* ── 3. FILTROS GENERALES (SECUNDARIOS) ── */}
        <div className="space-y-3 border-t border-gray-200 pt-3">
          {fase && <p className={SEC}>Filtros generales</p>}
          <div>
            <label className={LBL}>Entidad</label>
            <input type="text" value={entidad} onChange={e => setEntidad(e.target.value)}
              placeholder="RUC o nombre de entidad" className={INP} />
          </div>
          <div>
            <label className={LBL}>Tipo de procedimiento</label>
            <select value={tipoProcGen} onChange={e => setTipoProcGen(e.target.value)} className={INP}>
              <option value="">Todos</option>
              <option>Licitación Pública (LP)</option>
              <option>Adjudicación Simplificada (AS)</option>
              <option>Concurso Público (CP)</option>
              <option>Subasta Inversa (SIE)</option>
              <option>Contratación Directa (CD)</option>
            </select>
          </div>
          <div>
            <label className={LBL}>Objeto de contratación</label>
            <select value={objetoGen} onChange={e => setObjetoGen(e.target.value)} className={INP}>
              <option value="">Todos</option>
              <option>Bien</option><option>Servicio</option><option>Obra</option><option>Consultoría</option>
            </select>
          </div>
          <div>
            <label className={LBL}>Versión SEACE</label>
            <select value={versionSeace} onChange={e => setVersionSeace(e.target.value)} className={INP}>
              <option value="">Todas las versiones</option>
              <option value="V2">SEACE V2</option>
              <option value="V3">SEACE V3</option>
              <option value="V4">SEACE V4</option>
            </select>
          </div>
          <div>
            <label className={LBL}>Rango de fechas</label>
            <div className="space-y-1">
              <input type="date" value={fechaDesde} onChange={e => setFechaDesde(e.target.value)} className={INP} />
              <input type="date" value={fechaHasta} onChange={e => setFechaHasta(e.target.value)} className={INP} />
            </div>
          </div>
        </div>
      </div>

      {/* Actions — gob.pe style footer */}
      <div className="flex gap-2 p-3 border-t border-[#DEE3EA] bg-[#F6F9FC] shrink-0">
        <button onClick={handleClear}
          className="flex-1 px-3 py-2 bg-white border border-[#294269] rounded-[16px] text-[12px] text-[#294269] hover:bg-[#edf0f4] transition-colors font-['Roboto',sans-serif] font-semibold">
          Limpiar
        </button>
        <button onClick={handleApply}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-[#294269] text-white rounded-[16px] text-[12px] hover:bg-[#3F5578] transition-colors font-['Roboto',sans-serif] font-bold">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
          Buscar
        </button>
      </div>
    </div>
  );
}
