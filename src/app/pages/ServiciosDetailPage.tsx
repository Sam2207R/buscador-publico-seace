import { useState } from 'react';
import {
  ArrowLeft, LayoutList, LayoutGrid, GitBranch, ChevronDown, ChevronUp,
  Building2, FileText, Users, Shield, Calendar, Package, X, Download,
  Banknote, Clock, CheckCircle, BarChart2
} from 'lucide-react';
import type { Page } from '../App';
import { PROCESOS, EC_DATA } from '../data/servicios_data';

interface ServiciosDetailPageProps {
  id: string;
  navigate: (page: Page) => void;
}

// ─── Mock data ───────────────────────────────────────────────────────────────

const FASES = ['Actuaciones Preparatorias', 'Selección', 'Contratos'];


function getMontoContratado(p: any) {
  if (p.seleccion && Array.isArray(p.seleccion.items) && p.seleccion.items.length) {
    return p.seleccion.items
      .filter((it: any) => it.estado === 'Contratado')
      .reduce((acc: number, it: any) => {
        const postorGanador = (it.postores && it.postores[0]) ? it.postores[0] : null;
        const valorStr = postorGanador ? postorGanador.montoAdj : it.vrve;
        const n = parseFloat((valorStr || '0').replace(/[^0-9.]/g, ''));
        return acc + (isNaN(n) ? 0 : n);
      }, 0);
  }
  return p.monto;
}

function fmtMoneda(n: number) {
  return 'S/ ' + n.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function estadoBadge(estado: string, label: string) {
  const cls: Record<string, string> = {
    contratado: 'bg-[#E6F4ED] text-[#126B49] border-[#126B49]/30',
    publicado: 'bg-[#EFF6FF] text-[#0056AC] border-[#0056AC]/30',
    desierto: 'bg-[#edf0f4] text-[#294269] border-[#63c9c4]/30',
    convocatoria: 'bg-[#FFF7ED] text-[#D75600] border-[#D75600]/30',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 text-[10px] font-bold border rounded-[4px] ${cls[estado] || 'bg-gray-100 text-gray-600 border-gray-300'}`}>
      {label}
    </span>
  );
}

function MiniFases({ proceso }: { proceso: typeof PROCESOS[0] }) {
  return (
    <div className="flex gap-1 mt-2">
      {FASES.map((_, i) => {
        const done = proceso.fasesCompletas.includes(i);
        const current = i === proceso.faseActualIdx && !done;
        return (
          <div
            key={i}
            className={`h-[4px] flex-1 rounded-full transition-colors ${done ? 'bg-[#126B49]' : current ? 'bg-[#D75600]' : 'bg-[#DEE3EA]'}`}
          />
        );
      })}
    </div>
  );
}

// ─── Accordion ───────────────────────────────────────────────────────────────

function Accordion({ id, title, children, openSet, toggle }: {
  id: string; title: React.ReactNode; children: React.ReactNode;
  openSet: Set<string>; toggle: (id: string) => void;
}) {
  const open = openSet.has(id);
  return (
    <div className="border border-[#DEE3EA] rounded-[6px] overflow-hidden mb-2">
      <button
        className="w-full flex items-center justify-between px-4 py-3 bg-[#F6F9FC] hover:bg-[#EEF3FA] transition-colors text-left"
        onClick={() => toggle(id)}
      >
        <span className="flex items-center gap-2 text-[12.5px] font-semibold text-[#26292E] font-['Roboto',sans-serif]">
          {title}
        </span>
        {open ? <ChevronUp size={15} className="text-[#294269] shrink-0" /> : <ChevronDown size={15} className="text-gray-400 shrink-0" />}
      </button>
      {open && (
        <div className="px-4 py-3 bg-white text-[12px] font-['Roboto',sans-serif] text-[#26292E]">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Info field ──────────────────────────────────────────────────────────────

function Field({ label, value, mono, full }: { label: string; value: string; mono?: boolean; full?: boolean }) {
  return (
    <div className={`flex flex-col gap-0.5 ${full ? 'col-span-2' : ''}`}>
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</span>
      <span className={`text-[12px] text-[#26292E] ${mono ? "font-['IBM_Plex_Mono',monospace]" : ''}`}>{value}</span>
    </div>
  );
}

// ─── Phase content ───────────────────────────────────────────────────────────

function ActuacionesPreparatorias({ proceso, openSet, toggle }: {
  proceso: typeof PROCESOS[0]; openSet: Set<string>; toggle: (id: string) => void;
}) {
  const a = proceso.anuncio;
  const ac = proceso.actuaciones;
  const en = ac.entidad;
  const pr = ac.procedimiento;
  const uid = 'ap-' + proceso.codigo;

  return (
    <div className="space-y-1">
      <Accordion id={uid + '-ent'} title={<><Building2 size={13} />Información general de la entidad</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Entidad convocante" value={en.nombre} full />
          <Field label="RUC" value={en.ruc} mono />
          <Field label="Teléfono" value={en.telefono} />
          <Field label="Dirección legal" value={en.direccion} full />
          <Field label="Página web" value={en.web} />
        </div>
      </Accordion>

      <Accordion id={uid + '-proc'} title={<><FileText size={13} />Información general del procedimiento</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Objeto de contratación" value={pr.objeto} />
          <Field label="Derecho de participación" value={pr.derechoPart} />
          <Field label="Cuantía" value={pr.vrVeImporte} mono />
          <Field label="Fecha de publicación" value={pr.fechaPublicacion} />
          <Field label="Descripción del objeto" value={pr.descripcion} full />
          <Field label="Normativa aplicable" value={pr.normativa} full />
        </div>
      </Accordion>

      <Accordion id={uid + '-ec'} title={<><Users size={13} />Entidad contratante</>} openSet={openSet} toggle={toggle}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[11.5px]">
            <thead>
              <tr>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] rounded-tl-[4px] w-36">N° RUC</th>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] rounded-tr-[4px]">Entidad Contratante</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace] text-[11.5px] border-b border-[#DEE3EA]">{ac.entidadContratante.ruc}</td>
                <td className="px-3 py-2 border-b border-[#DEE3EA]">{ac.entidadContratante.nombre}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Accordion>

      <Accordion id={uid + '-ac'} title={<><Shield size={13} />Acuerdos comerciales</>} openSet={openSet} toggle={toggle}>
        <p className="text-[11.5px] text-gray-500 mb-3">El procedimiento se encuentra bajo la cobertura del o de los siguientes acuerdos comerciales:</p>
        <table className="w-full border-collapse text-[11.5px]">
          <thead>
            <tr>
              <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] rounded-tl-[4px] w-10">Nro.</th>
              <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] rounded-tr-[4px]">Descripción del Acuerdo Comercial</th>
            </tr>
          </thead>
          <tbody>
            {ac.acuerdosComerciales.map((ac2, i) => (
              <tr key={i} className="border-b border-[#DEE3EA]">
                <td className="px-3 py-2 text-gray-500">{i + 1}</td>
                <td className="px-3 py-2">{ac2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Accordion>

      <Accordion id={uid + '-anuncio'} title={<><Calendar size={13} />Anuncio de contratación futura</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="N°" value={a.n} />
          <Field label="Tipo de selección" value={a.tipoSeleccion} />
          <Field label="Nombre de la entidad" value={a.entidad} full />
          <Field label="Fecha de publicación" value={a.fechaPublicacion} />
          <Field label="Objeto de la contratación" value={a.objetoContratacion} />
          <Field label="Cantidad" value={a.cantidad} />
          <Field label="Plazo en días" value={String(a.plazoDias)} />
          <Field label="Fecha aprox. de convocatoria" value={a.fechaConvocatoria} />
          <Field label="Descripción del objeto" value={a.descripcionObjeto} full />
          <Field label="Alcance" value={a.alcance} full />
        </div>
        <div className="mt-3 pt-3 border-t border-[#DEE3EA]">
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 border-[1.5px] border-[#0056AC] text-[#0056AC] rounded-[4px] text-[11.5px] font-bold hover:bg-[#0056AC] hover:text-white transition-colors">
            <ArrowLeft size={12} />
            Volver al Anuncio de Contratación Futura (ACF-0032-SUNASS)
          </button>
        </div>
      </Accordion>

      <Accordion id={uid + '-comite'} title={<><Users size={13} />Conductor del Tipo de Selección</>} openSet={openSet} toggle={toggle}>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <Field label="Tipo" value={proceso.comite.tipoConductor} />
            <Field label="Tipo de documento" value={proceso.comite.tipoDocumento} full />
            <Field label="Fecha de emisión" value={proceso.comite.fechaEmision} />
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Lista de Integrantes</p>
          <table className="w-full border-collapse text-[11.5px]">
            <thead>
              <tr>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] w-12">Nro.</th>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px]">Apellidos y Nombres</th>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] w-44">Tipo de Integrante</th>
              </tr>
            </thead>
            <tbody>
              {proceso.comite.integrantes.map((m, i) => (
                <tr key={i} className="border-b border-[#DEE3EA]">
                  <td className="px-3 py-2 text-gray-500">{i + 1}</td>
                  <td className="px-3 py-2 font-medium">{m.nombre}</td>
                  <td className="px-3 py-2 text-gray-600">{m.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Accordion>
    </div>
  );
}

// Datos de versiones anteriores por etapa (para el modal de historial)
const HISTORIAL_VERSION_ANTERIOR: Record<string, { documento: string; archivo: string; tamanio: string; fecha: string; motivo: string }> = {
  'Convocatoria': { documento: 'Bases Administrativas (versión preliminar)', archivo: 'Bases_Admin_v1.pdf', tamanio: '2850 KB', fecha: '05/04/2026 09:10', motivo: 'Versión preliminar publicada por el comité de selección' },
  'Absolución de consultas y observaciones': { documento: 'Pliego de absolución de consultas y observaciones (primera ronda)', archivo: 'Absolucion_v1.pdf', tamanio: '1 KB', fecha: '24/04/2026 16:40', motivo: 'Primera ronda de absolución' },
  'Integración de las Bases': { documento: 'Bases Integradas (versión preliminar)', archivo: 'Bases_Integradas_v1.pdf', tamanio: '2870 KB', fecha: '26/04/2026 11:05', motivo: 'Versión preliminar, pendiente de visto bueno del titular' },
};

const ETAPAS_CON_HISTORIAL = Object.keys(HISTORIAL_VERSION_ANTERIOR);

interface HistorialDoc {
  etapa: string;
  documento: string;
  archivo: string;
  tamanio: string;
  fecha: string;
}

function HistorialModal({ doc, onClose }: { doc: HistorialDoc; onClose: () => void }) {
  const prev = HISTORIAL_VERSION_ANTERIOR[doc.etapa];
  const vigenteLabel = prev ? 'v2 (vigente)' : 'v1 (vigente)';

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-[8px] shadow-2xl w-full max-w-2xl overflow-hidden font-['Roboto',sans-serif]">
        {/* Red header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#63c9c4]">
          <h3 className="text-[14px] font-bold text-white">Historial de documentos — {doc.etapa}</h3>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            aria-label="Cerrar"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-[12.5px] text-[#26292E] mb-4">
            Etapa: <strong>{doc.etapa}</strong>
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-[11.5px]">
              <thead>
                <tr>
                  {['Versión', 'Documento', 'Archivo', 'Fecha y hora pub.', 'Acciones'].map((h, i, arr) => (
                    <th key={h} className={`bg-[#294269] text-white px-3 py-2 text-left text-[11px] ${i === 0 ? 'rounded-tl-[4px] w-28' : ''} ${i === arr.length - 1 ? 'rounded-tr-[4px] w-24' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {prev && (
                  <tr className="bg-[#F6F9FC] border-b border-[#DEE3EA]">
                    <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace] text-gray-400 text-[11px]">v1</td>
                    <td className="px-3 py-2 text-gray-500">{prev.documento}</td>
                    <td className="px-3 py-2 text-gray-400 text-[11px]">{prev.archivo} ({prev.tamanio})</td>
                    <td className="px-3 py-2 text-gray-400 whitespace-nowrap">{prev.fecha}</td>
                    <td className="px-3 py-2">
                      <button className="text-[11px] text-[#294269] font-bold hover:underline">Descargar</button>
                    </td>
                  </tr>
                )}
                <tr className="border-b border-[#DEE3EA]">
                  <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace] text-[11px] text-gray-600">{vigenteLabel}</td>
                  <td className="px-3 py-2 font-medium">{doc.documento}</td>
                  <td className="px-3 py-2 text-gray-500 text-[11px]">{doc.archivo} ({doc.tamanio})</td>
                  <td className="px-3 py-2 text-gray-500 whitespace-nowrap">{doc.fecha}</td>
                  <td className="px-3 py-2">
                    <button className="text-[11px] text-[#294269] font-bold hover:underline">Descargar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {prev && (
            <p className="text-[11.5px] text-gray-500">{prev.motivo}.</p>
          )}
          {!prev && (
            <p className="text-[11.5px] text-gray-500">No se registran versiones anteriores para esta etapa.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function Seleccion({ proceso, openSet, toggle }: {
  proceso: typeof PROCESOS[0]; openSet: Set<string>; toggle: (id: string) => void;
}) {
  const s = proceso.seleccion;
  const uid = 'sel-' + proceso.codigo;
  const tieneOfertas = s.ofertas && s.ofertas.length > 0;
  const [historialDoc, setHistorialDoc] = useState<HistorialDoc | null>(null);

  return (
    <div className="space-y-1">
      {historialDoc && <HistorialModal doc={historialDoc} onClose={() => setHistorialDoc(null)} />}

      <Accordion id={uid + '-info'} title={<><FileText size={13} />Convocatoria — Información general</>} openSet={openSet} toggle={toggle}>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Nomenclatura" value={s.nomenclatura} mono />
          <Field label="N° Convocatoria" value={s.nConvocatoria} />
          <Field label="Tipo Compra o Selección" value={s.tipoCompra} />
          <Field label="Versión SEACE" value={s.versionSEACE} />
          <Field label="Normativa aplicable" value={s.normativa} full />
        </div>
      </Accordion>

      <Accordion id={uid + '-cron'} title={<><Calendar size={13} />Cronograma</>} openSet={openSet} toggle={toggle}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[11.5px]">
            <thead>
              <tr>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] rounded-tl-[4px]">Etapa</th>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] whitespace-nowrap">Fecha Inicio</th>
                <th className="bg-[#0056AC] text-white px-3 py-2 text-left text-[11px] rounded-tr-[4px] whitespace-nowrap">Fecha Fin</th>
              </tr>
            </thead>
            <tbody>
              {s.cronograma.map((c, i) => (
                <tr key={i} className="border-b border-[#DEE3EA]">
                  <td className="px-3 py-2">{c.etapa}</td>
                  <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace] text-[#1a5cb5] whitespace-nowrap">{c.inicio}</td>
                  <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace] text-[#1a5cb5] whitespace-nowrap">{c.fin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Accordion>

      <Accordion id={uid + '-docs'} title={<><FileText size={13} />Documentos por etapa</>} openSet={openSet} toggle={toggle}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[11.5px]">
            <thead>
              <tr>
                <th className="bg-[#D75600] text-white px-3 py-2 text-left text-[11px] rounded-tl-[4px] w-10">Nro.</th>
                <th className="bg-[#D75600] text-white px-3 py-2 text-left text-[11px]">Etapa</th>
                <th className="bg-[#D75600] text-white px-3 py-2 text-left text-[11px]">Documento</th>
                <th className="bg-[#D75600] text-white px-3 py-2 text-left text-[11px]">Archivo</th>
                <th className="bg-[#D75600] text-white px-3 py-2 text-left text-[11px] whitespace-nowrap">Fecha y hora pub.</th>
                <th className="bg-[#D75600] text-white px-3 py-2 text-[11px] text-center">Acciones</th>
                <th className="bg-[#D75600] text-white px-3 py-2 text-[11px] rounded-tr-[4px] text-center w-20">Historial</th>
              </tr>
            </thead>
            <tbody>
              {s.documentos.map((d) => {
                const tieneHistorial = ETAPAS_CON_HISTORIAL.includes(d.etapa);
                return (
                  <tr key={d.n} className="border-b border-[#DEE3EA] hover:bg-[#F6F9FC]">
                    <td className="px-3 py-2 text-gray-500 font-['IBM_Plex_Mono',monospace]">{d.n}</td>
                    <td className="px-3 py-2">{d.etapa}</td>
                    <td className="px-3 py-2">{d.documento}</td>
                    <td className="px-3 py-2">
                      <div className="flex items-center gap-1.5">
                        <FileText size={12} className="text-[#294269]" />
                        <span className="text-[11px] text-gray-500">{d.archivo}</span>
                        <span className="text-[10px] text-gray-400">({d.tamanio})</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-gray-500 whitespace-nowrap">{d.fecha}</td>
                    <td className="px-3 py-2 text-center">
                      <button className="inline-flex items-center gap-1 text-[11px] text-[#294269] font-bold hover:underline">
                        <Download size={11} />Descargar
                      </button>
                    </td>
                    <td className="px-3 py-2 text-center">
                      {tieneHistorial && (
                        <button
                          onClick={() => setHistorialDoc({ etapa: d.etapa, documento: d.documento, archivo: d.archivo, tamanio: d.tamanio, fecha: d.fecha })}
                          className="p-1 hover:bg-[#F6F9FC] rounded transition-colors text-gray-500 hover:text-[#0056AC]"
                          title="Ver historial de documentos"
                          aria-label="Ver historial de documentos"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Accordion>

      <Accordion id={uid + '-items'} title={<><Package size={13} />Listado de ítems</>} openSet={openSet} toggle={toggle}>
        <div className="space-y-3">
          {s.items.map((it) => {
            const estColor = it.estado === 'Contratado'
              ? 'bg-[#E6F4ED] text-[#126B49]'
              : it.estado === 'Desierto'
              ? 'bg-[#edf0f4] text-[#294269]'
              : 'bg-[#EFF6FF] text-[#0056AC]';
            return (
              <div key={it.n} className="border border-[#DEE3EA] rounded-[6px] p-3 bg-[#F6F9FC]">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="text-[12px] font-bold text-[#0056AC]">{it.n} — {it.descripcion}</p>
                  <span className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-[3px] ${estColor}`}>{it.estado}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <Field label="Código CUBSO" value={it.cubso} mono />
                  <Field label="Cantidad" value={it.cantidad} />
                  <Field label="Cuantía" value={it.estado === 'Publicado' ? '—' : it.vrve} />
                  <Field label="Reserva MYPE" value={it.mype} />
                  <Field label="Paquete" value={it.paquete} />
                </div>
                {it.postores.length > 0 && (
                  <table className="w-full border-collapse text-[11.5px] mt-1">
                    <thead>
                      <tr>
                        {['Postor', 'MYPE', 'Ley Selva', 'Bonif.', 'Cant. adjudicada', 'Monto adjudicado'].map(h => (
                          <th key={h} className="bg-[#EFF6FF] text-[#0056AC] px-2 py-1.5 text-left text-[10.5px]">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {it.postores.map((p, pi) => (
                        <tr key={pi} className="border-b border-[#DEE3EA]">
                          <td className="px-2 py-1.5">{p.postor}</td>
                          <td className="px-2 py-1.5">{p.mype}</td>
                          <td className="px-2 py-1.5">{p.selva}</td>
                          <td className="px-2 py-1.5">{p.bonif}</td>
                          <td className="px-2 py-1.5 font-['IBM_Plex_Mono',monospace] text-right">{p.cantAdj}</td>
                          <td className="px-2 py-1.5 font-['IBM_Plex_Mono',monospace] text-right font-bold text-[#126B49]">{p.montoAdj}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            );
          })}
        </div>
      </Accordion>

      {tieneOfertas && (
        <div className="border border-[#DEE3EA] rounded-[6px] overflow-hidden mb-2">
          <div className="px-4 py-3 bg-[#FFF7ED] border-b border-[#D75600]/20">
            <p className="text-[12.5px] font-semibold text-[#D75600] font-['Roboto',sans-serif]">Listado de ofertas calificadas</p>
          </div>
          <div className="px-4 py-3 overflow-x-auto">
            <table className="w-full border-collapse text-[11.5px]">
              <thead>
                <tr>
                  {['Nro.', 'RUC/Código', 'Nombre o Razón Social', 'Fecha de Presentación', 'Hora de Presentación', 'Usuario de Presentación', 'Acciones'].map(h => (
                    <th key={h} className="bg-[#D75600] text-white px-3 py-2 text-left text-[11px] first:rounded-tl-[4px] last:rounded-tr-[4px]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.ofertas.map((o: any, i: number) => (
                  <tr key={i} className="border-b border-[#DEE3EA] hover:bg-[#F6F9FC]">
                    <td className="px-3 py-2 text-gray-500">{i + 1}</td>
                    <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace]">{o.ruc}</td>
                    <td className="px-3 py-2 font-semibold">{o.nombre}</td>
                    <td className="px-3 py-2 text-gray-500">{o.fecha}</td>
                    <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace] text-gray-500">{o.hora}</td>
                    <td className="px-3 py-2 font-['IBM_Plex_Mono',monospace] text-gray-500">{o.usuario}</td>
                    <td className="px-3 py-2">
                      <button className="text-[11px] text-[#0056AC] font-bold hover:underline">Ver detalle</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}


function Contratos({ proceso, openSet, toggle }: {
  proceso: typeof PROCESOS[0]; openSet: Set<string>; toggle: (id: string) => void;
}) {
  const [selectedContratoKey, setSelectedContratoKey] = useState<string>('');
  
  const contratosKeys = Object.keys(EC_DATA).filter(k => k === proceso.codigo || k.startsWith(proceso.codigo + '-'));
  
  const initialKey = contratosKeys.length > 0 ? contratosKeys[0] : '';
  const currentKey = selectedContratoKey || initialKey;
  
  if (!currentKey || !EC_DATA[currentKey]) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-gray-400 gap-2">
        <Clock size={32} className="opacity-40" />
        <p className="text-[12px] font-['Roboto',sans-serif]">Este procedimiento aún no ha llegado a la fase de Contratos.</p>
      </div>
    );
  }

  const c = EC_DATA[currentKey];
  const uid = 'ec-' + currentKey;

  const pctF = c.af ? c.af.pct : 0;
  const pctFis = c.fis ? c.fis.pct : 0;
  const barColor = (p: number) => p >= 80 ? '#126B49' : p >= 40 ? '#D75600' : '#BF0909';

  return (
    <div className="space-y-4">
      {contratosKeys.length > 1 && (
        <div className="flex items-center gap-3 flex-wrap bg-white border border-[#DEE3EA] rounded-[8px] p-3">
          <label className="text-[12px] font-bold text-gray-600 whitespace-nowrap">
            {contratosKeys.length} contratos derivados de este procedimiento — Seleccionar:
          </label>
          <select 
            value={currentKey} 
            onChange={(e) => setSelectedContratoKey(e.target.value)}
            className="flex-1 min-w-[240px] px-3 py-1.5 border-[1.5px] border-[#0056AC] rounded-[6px] text-[12.5px] font-semibold text-[#0056AC] bg-white cursor-pointer"
          >
            {contratosKeys.map(k => {
              const d = EC_DATA[k];
              const con = (d.con || '').split('-').slice(1).join('-') || d.con || '—';
              const esItem = k.startsWith(proceso.codigo + '-');
              const nroItem = esItem ? k.slice((proceso.codigo + '-').length) : null;
              const etiquetaItem = nroItem ? `Ítem ${nroItem} — ` : '';
              return <option key={k} value={k}>{etiquetaItem}{con} — {fmtMoneda(d.mto || 0)}</option>;
            })}
          </select>
        </div>
      )}

      <div className="space-y-1">
        <Accordion id={uid + '-info'} title={<><FileText size={13} />Información general del contrato</>} openSet={openSet} toggle={toggle}>
          <div className="grid grid-cols-2 gap-3">
            <Field label="N° de Contrato" value={c.nct} mono />
            <Field label="Monto contratado" value={fmtMoneda(c.mto)} mono />
            <Field label="Contratista" value={c.con} full />
            <Field label="Entidad contratante" value={c.ent} full />
            <Field label="Fecha suscripción" value={c.fsus} />
            <Field label="Fecha inicio" value={c.fini} />
            <Field label="Fecha fin" value={c.ffin} />
            <Field label="Lugar de ejecución" value={c.lug} />
          </div>
        </Accordion>

        <Accordion id={uid + '-av'} title={<><BarChart2 size={13} />Avance de ejecución</>} openSet={openSet} toggle={toggle}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Financiero */}
            <div className="bg-[#F6F9FC] border border-[#DEE3EA] rounded-[6px] p-3">
              <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-2">Avance Financiero</p>
              <div className="flex gap-3 mb-3">
                <div className="text-center"><div className="text-[18px] font-bold text-[#0056AC] font-['IBM_Plex_Mono',monospace]">{pctF}%</div><div className="text-[10px] text-gray-500">Ejecutado</div></div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between text-[11px]"><span className="text-gray-500">Total</span><span className="font-['IBM_Plex_Mono',monospace]">{fmtMoneda(c.af.total)}</span></div>
                  <div className="flex justify-between text-[11px]"><span className="text-[#126B49]">Pagado</span><span className="font-['IBM_Plex_Mono',monospace] text-[#126B49]">{fmtMoneda(c.af.pag)}</span></div>
                  <div className="flex justify-between text-[11px]"><span className="text-[#D75600]">Pendiente</span><span className="font-['IBM_Plex_Mono',monospace] text-[#D75600]">{fmtMoneda(c.af.pen)}</span></div>
                </div>
              </div>
              <div className="h-2 bg-[#DEE3EA] rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${pctF}%`, background: barColor(pctF) }} />
              </div>
              <div className="flex justify-between mt-1 text-[10px] text-gray-400"><span>0%</span><span className="font-bold text-[#26292E]">{pctF}% completado</span><span>100%</span></div>
            </div>

            {/* Físico */}
            <div className="bg-[#F6F9FC] border border-[#DEE3EA] rounded-[6px] p-3">
              <p className="text-[10px] font-bold uppercase text-gray-400 tracking-wider mb-2">Avance Físico</p>
              <div className="flex gap-3 mb-3">
                <div className="text-center"><div className="text-[18px] font-bold text-[#D75600] font-['IBM_Plex_Mono',monospace]">{pctFis}%</div><div className="text-[10px] text-gray-500">Ejecutado</div></div>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between text-[11px]"><span className="text-gray-500">Hitos totales</span><span className="font-bold">{c.fis.total}</span></div>
                  <div className="flex justify-between text-[11px]"><span className="text-[#126B49]">Completados</span><span className="font-bold text-[#126B49]">{c.fis.comp}</span></div>
                  <div className="flex justify-between text-[11px]"><span className="text-[#D75600]">Pendientes</span><span className="font-bold text-[#D75600]">{c.fis.total - c.fis.comp}</span></div>
                </div>
              </div>
              <div className="h-2 bg-[#DEE3EA] rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${pctFis}%`, background: barColor(pctFis) }} />
              </div>
              <div className="flex justify-between mt-1 text-[10px] text-gray-400"><span>0%</span><span className="font-bold text-[#26292E]">{pctFis}% completado</span><span>100%</span></div>
            </div>
          </div>
        </Accordion>

        {c.gar && (
          <Accordion id={uid + '-gar'} title={<><Shield size={13} />Garantías</>} openSet={openSet} toggle={toggle}>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Clase de garantía" value={c.gar.clase} full />
              <Field label="Tipo" value={c.gar.tipo} />
              <Field label="N° de garantía" value={c.gar.num} mono />
              <Field label="Monto" value={fmtMoneda(c.gar.monto)} mono />
              <Field label="Emisor" value={c.gar.emisor} />
              <Field label="Fecha de emisión" value={c.gar.femi} />
              <Field label="Fecha de vencimiento" value={c.gar.fven} />
              <Field label="Condición" value={c.gar.cond} />
            </div>
            <div className="mt-3 pt-3 border-t border-[#DEE3EA]">
              <button className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0056AC] hover:underline">
                <Download size={12} />
                Descargar garantía
              </button>
            </div>
          </Accordion>
        )}
      </div>
    </div>
  );
}


// ─── Phase tabs ───────────────────────────────────────────────────────────────

function PhaseTabs({ proceso, activeTab, onTabChange, openSet, toggleAccordion }: {
  proceso: typeof PROCESOS[0];
  activeTab: number;
  onTabChange: (i: number) => void;
  openSet: Set<string>;
  toggleAccordion: (id: string) => void;
}) {
  return (
    <div>
      <div className="flex border-b border-[#DEE3EA] mb-3">
        {FASES.map((fase, i) => {
          const done = proceso.fasesCompletas.includes(i);
          const active = i === activeTab;
          return (
            <button
              key={i}
              onClick={() => onTabChange(i)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-[12px] font-semibold border-b-2 transition-colors font-['Roboto',sans-serif] ${
                active
                  ? 'border-[#294269] text-[#294269] bg-[#edf0f4]/40'
                  : 'border-transparent text-gray-500 hover:text-[#26292E]'
              }`}
            >
              {done ? (
                <CheckCircle size={12} className={active ? 'text-[#126B49]' : 'text-[#126B49]/60'} />
              ) : (
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${active ? 'bg-[#63c9c4] text-white' : 'bg-gray-200 text-gray-500'}`}>{i + 1}</span>
              )}
              {fase}
            </button>
          );
        })}
      </div>
      {activeTab === 0 && <ActuacionesPreparatorias proceso={proceso} openSet={openSet} toggle={toggleAccordion} />}
      {activeTab === 1 && <Seleccion proceso={proceso} openSet={openSet} toggle={toggleAccordion} />}
      {activeTab === 2 && <Contratos proceso={proceso} openSet={openSet} toggle={toggleAccordion} />}
    </div>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────

export function ServiciosDetailPage({ id, navigate }: ServiciosDetailPageProps) {
  const [activeView, setActiveView] = useState<'rail' | 'cards' | 'timeline'>('rail');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const [modalTab, setModalTab] = useState(0);
  const [modalAccordions, setModalAccordions] = useState<Set<string>>(new Set());
  const [timelineIdx, setTimelineIdx] = useState(0);
  const [timelineTab, setTimelineTab] = useState(0);

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleModalAccordion = (id: string) => {
    setModalAccordions(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const totalMonto = PROCESOS.reduce((acc, p) => acc + getMontoContratado(p), 0);
  const itemsAdj = PROCESOS.reduce((acc, p) => acc + p.seleccion.items.filter((it: any) => it.estado === 'Contratado' || it.estado === 'Adjudicado').length, 0);
  const enCurso = PROCESOS.reduce((acc, p) => acc + p.seleccion.items.filter((it: any) => !['Nulo', 'Adjudicado', 'Contratado', 'Desierto'].includes(it.estado)).length, 0);

  const selectedProcess = PROCESOS[selectedIdx];

  const views = [
    { key: 'rail' as const, label: 'Maestro / Detalle', Icon: LayoutList },
  ];

  return (
    <div className="flex flex-col flex-1 overflow-hidden bg-[#F6F9FC] font-['Roboto',sans-serif]">

      {/* ── Sticky header ── */}
      <div className="bg-white border-b-2 border-[#63c9c4] px-5 py-3 shrink-0">

        {/* Back nav */}
        <button
          onClick={() => navigate({ type: 'search-all', query: '' })}
          className="flex items-center gap-1.5 text-[#294269] hover:text-[#9a0707] text-[12px] font-bold mb-3 transition-colors"
        >
          <ArrowLeft size={13} />
          Volver a resultados
        </button>

        {/* IDEC card */}
        <div className="flex items-start justify-between gap-6 mb-3">
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-1.5 bg-[#0056AC]/10 text-[#0056AC] text-[10px] font-bold px-2 py-0.5 rounded-[4px] mb-1.5 uppercase tracking-wider">
              Expediente de Contratación · IDEC
            </div>
            <h1 className="text-[20px] font-bold text-[#26292E] leading-tight mb-0.5 font-['IBM_Plex_Mono',monospace]">IDEC-2025-001235</h1>
            <p className="text-[12px] text-gray-500"><span className="font-semibold">Entidad:</span> MUNICIPALIDAD DISTRITAL DE CORTEGANA</p>
            <p className="text-[11.5px] text-gray-600 mt-1 leading-snug">Adquisición de equipos de protección personal técnico y administrativo de Electro Oriente S.A.</p>
          </div>
          <div className="shrink-0 flex gap-4 text-right">
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Publicación</div>
              <div className="text-[12px] font-semibold text-[#26292E]">12/04/2026</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Cierre</div>
              <div className="text-[12px] font-semibold text-[#D75600]">En curso</div>
            </div>
          </div>
        </div>

        {/* KPI strip */}
        <div className="flex gap-4 border-t border-[#DEE3EA] pt-3">
          {[
            { icon: <LayoutList size={15} />, color: 'text-[#0056AC]', bg: 'bg-[#EFF6FF]', val: PROCESOS.length, label: 'Procedimientos derivados' },
            { icon: <Banknote size={15} />, color: 'text-[#126B49]', bg: 'bg-[#E6F4ED]', val: fmtMoneda(totalMonto), label: 'Monto total contratado' },
            { icon: <CheckCircle size={15} />, color: 'text-[#126B49]', bg: 'bg-[#E6F4ED]', val: itemsAdj, label: 'Ítems adjudicados' },
            { icon: <Clock size={15} />, color: 'text-[#D75600]', bg: 'bg-[#FFF7ED]', val: enCurso, label: 'En curso' },
          ].map(({ icon, color, bg, val, label }, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className={`w-7 h-7 rounded-full ${bg} ${color} flex items-center justify-center shrink-0`}>{icon}</div>
              <div>
                <div className={`text-[15px] font-bold ${color} font-['IBM_Plex_Mono',monospace] leading-tight`}>{val}</div>
                <div className="text-[10px] text-gray-500 leading-tight">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── View switcher ── */}
      <div className="bg-white border-b border-[#DEE3EA] px-5 py-2 flex items-center gap-2 shrink-0">
        {views.map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setActiveView(key)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[11.5px] font-semibold transition-colors ${
              activeView === key
                ? 'bg-[#63c9c4] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Icon size={13} />
            {label}
          </button>
        ))}
      </div>

      {/* ── Content area ── */}
      <div className="flex-1 overflow-auto">

        {/* ── VISTA 1: MAESTRO / DETALLE ── */}
        {activeView === 'rail' && (
          <div className="flex h-full min-h-0">

            {/* Left rail */}
            <div className="w-[280px] shrink-0 border-r border-[#DEE3EA] bg-white overflow-y-auto">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#DEE3EA] sticky top-0 bg-white z-10">
                <h3 className="text-[12px] font-bold text-[#26292E]">Procedimientos derivados</h3>
                <span className="bg-[#0056AC] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{PROCESOS.length}</span>
              </div>
              {PROCESOS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => { setSelectedIdx(i); setActiveTab(0); setOpenAccordions(new Set()); }}
                  className={`w-full text-left px-4 py-3 border-b border-[#DEE3EA] transition-colors ${
                    i === selectedIdx ? 'bg-[#edf0f4] border-l-2 border-l-[#63c9c4]' : 'hover:bg-[#F6F9FC]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-['IBM_Plex_Mono',monospace] text-[#294269] font-bold truncate">{p.seleccion.nomenclatura}</span>
                    {estadoBadge(p.estado, p.estadoLabel)}
                  </div>
                  <p className="text-[11px] text-gray-600 leading-snug line-clamp-2 mb-1.5">{p.objeto}</p>
                  <p className="text-[11px] font-bold font-['IBM_Plex_Mono',monospace] text-[#26292E]">{fmtMoneda(getMontoContratado(p))}</p>
                  <MiniFases proceso={p} />
                </button>
              ))}
            </div>

            {/* Right detail */}
            <div className="flex-1 overflow-y-auto p-5">
              <div className="bg-white border border-[#DEE3EA] rounded-[8px] p-5">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-[14px] font-bold font-['IBM_Plex_Mono',monospace] text-[#294269] mb-1">{selectedProcess.seleccion.nomenclatura}</h2>
                    <p className="text-[12.5px] text-[#26292E] leading-snug">{selectedProcess.objeto}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    {estadoBadge(selectedProcess.estado, selectedProcess.estadoLabel)}
                    {Object.keys(EC_DATA).filter(k => k === selectedProcess.codigo || k.startsWith(selectedProcess.codigo + '-')).length <= 1 && (
                      <>
                        <div className="text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mt-1">Monto adjudicado</div>
                        <p className="text-[18px] font-bold font-['IBM_Plex_Mono',monospace] text-[#294269]">{fmtMoneda(getMontoContratado(selectedProcess))}</p>
                      </>
                    )}
                  </div>
                </div>
                <PhaseTabs
                  proceso={selectedProcess}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                  openSet={openAccordions}
                  toggleAccordion={toggleAccordion}
                />
              </div>
            </div>
          </div>
        )}

        {/* ── VISTA 2: TABLERO DE TARJETAS ── */}
        {activeView === 'cards' && (
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROCESOS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => { setModalIdx(i); setModalTab(p.faseActualIdx); setModalAccordions(new Set()); }}
                  className="bg-white border border-[#DEE3EA] rounded-[8px] p-4 text-left hover:shadow-md transition-shadow hover:border-[#63c9c4]/40 group"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="text-[11px] font-['IBM_Plex_Mono',monospace] text-[#294269] font-bold">{p.codigo}</div>
                      <div className="text-[10.5px] text-gray-400">Licitación pública</div>
                    </div>
                    {estadoBadge(p.estado, p.estadoLabel)}
                  </div>
                  <p className="text-[12px] text-[#26292E] leading-snug mb-3 line-clamp-3">{p.objeto}</p>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-gray-400 uppercase font-bold">Cuantía</span>
                    <span className="text-[12px] font-bold font-['IBM_Plex_Mono',monospace] text-[#26292E]">{fmtMoneda(getMontoContratado(p))}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#D75600] shrink-0" />
                    <span className="text-[10.5px] text-gray-500">Fase actual: {FASES[p.faseActualIdx]}</span>
                  </div>
                  <MiniFases proceso={p} />
                  <div className="mt-3 pt-3 border-t border-[#DEE3EA] text-[11px] text-[#294269] font-semibold group-hover:underline">
                    Ver ficha completa →
                  </div>
                </button>
              ))}
            </div>

            <p className="text-[11.5px] text-gray-500 mt-4 px-1">
              <strong>Patrón de Tarjetas:</strong> cada proceso hijo es una unidad visual autónoma. El detalle completo se abre en modal.
            </p>
          </div>
        )}

        {/* ── VISTA 3: TIMELINE ── */}
        {activeView === 'timeline' && (
          <div className="p-5">
            <div className="bg-white border border-[#DEE3EA] rounded-[8px] p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[13px] font-bold text-[#26292E]">Línea de procedimientos derivados del IDEC</h3>
                <div className="flex items-center gap-4 text-[10.5px] text-gray-500">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#126B49] inline-block" />Fase completada</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#D75600] inline-block" />Fase actual</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#DEE3EA] inline-block" />Fase pendiente</span>
                </div>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {PROCESOS.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => { setTimelineIdx(i); setTimelineTab(0); setOpenAccordions(new Set()); }}
                    className={`shrink-0 w-52 text-left border rounded-[8px] p-3 transition-all ${
                      i === timelineIdx
                        ? 'border-[#63c9c4] bg-[#edf0f4] shadow-sm'
                        : 'border-[#DEE3EA] bg-[#F6F9FC] hover:border-[#63c9c4]/40'
                    }`}
                  >
                    <div className="text-[10.5px] font-['IBM_Plex_Mono',monospace] text-[#294269] font-bold mb-1 truncate">{p.codigo}</div>
                    <div className="text-[11px] font-bold font-['IBM_Plex_Mono',monospace] text-[#26292E] mb-1">{fmtMoneda(getMontoContratado(p))}</div>
                    <MiniFases proceso={p} />
                    <div className="mt-2">{estadoBadge(p.estado, p.estadoLabel)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Detail */}
            <div className="bg-white border border-[#DEE3EA] rounded-[8px] p-5">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-[14px] font-bold font-['IBM_Plex_Mono',monospace] text-[#294269] mb-1">{PROCESOS[timelineIdx].seleccion.nomenclatura}</h2>
                  <p className="text-[12.5px] text-[#26292E] leading-snug">{PROCESOS[timelineIdx].objeto}</p>
                </div>
                <div className="shrink-0 text-right">
                  {estadoBadge(PROCESOS[timelineIdx].estado, PROCESOS[timelineIdx].estadoLabel)}
                  {Object.keys(EC_DATA).filter(k => k === PROCESOS[timelineIdx].codigo || k.startsWith(PROCESOS[timelineIdx].codigo + '-')).length <= 1 && (
                    <>
                      <div className="text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mt-1">Monto adjudicado</div>
                      <p className="text-[18px] font-bold font-['IBM_Plex_Mono',monospace] text-[#294269]">{fmtMoneda(getMontoContratado(PROCESOS[timelineIdx]))}</p>
                    </>
                  )}
                </div>
              </div>
              <PhaseTabs
                proceso={PROCESOS[timelineIdx]}
                activeTab={timelineTab}
                onTabChange={setTimelineTab}
                openSet={openAccordions}
                toggleAccordion={toggleAccordion}
              />
            </div>

            <p className="text-[11.5px] text-gray-500 mt-4 px-1">
              <strong>Patrón de Río de Procesos:</strong> los nodos recrean la secuencia cronológica. Al hacer clic, la ficha completa se ancla debajo.
            </p>
          </div>
        )}
      </div>

      {/* ── Modal (Cards view) ── */}
      {modalIdx !== null && (
        <div
          className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
          onClick={e => { if (e.target === e.currentTarget) setModalIdx(null); }}
        >
          <div className="bg-white rounded-[8px] shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col">
            <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-[#DEE3EA] shrink-0">
              <div>
                <div className="text-[13px] font-bold font-['IBM_Plex_Mono',monospace] text-[#294269]">{PROCESOS[modalIdx].seleccion.nomenclatura}</div>
                <div className="text-[12px] text-[#26292E] mt-0.5 leading-snug">{PROCESOS[modalIdx].objeto}</div>
              </div>
              <button
                onClick={() => setModalIdx(null)}
                className="shrink-0 p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Cerrar"
              >
                <X size={16} className="text-gray-500" />
              </button>
            </div>
            <div className="flex items-center justify-between px-5 py-2.5 border-b border-[#DEE3EA] shrink-0">
              {estadoBadge(PROCESOS[modalIdx].estado, PROCESOS[modalIdx].estadoLabel)}
              {Object.keys(EC_DATA).filter(k => k === PROCESOS[modalIdx].codigo || k.startsWith(PROCESOS[modalIdx].codigo + '-')).length <= 1 && (
                <div className="text-right">
                  <div className="text-[10.5px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Monto adjudicado</div>
                  <span className="text-[16px] font-bold font-['IBM_Plex_Mono',monospace] text-[#294269]">
                    {fmtMoneda(getMontoContratado(PROCESOS[modalIdx]))}
                  </span>
                </div>
              )}
            </div>
            <div className="overflow-y-auto flex-1 p-5">
              <PhaseTabs
                proceso={PROCESOS[modalIdx]}
                activeTab={modalTab}
                onTabChange={setModalTab}
                openSet={modalAccordions}
                toggleAccordion={toggleModalAccordion}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
