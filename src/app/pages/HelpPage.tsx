import { useState } from 'react';
import { ArrowLeft, Search, ChevronDown, ChevronRight, Phone, Mail, MessageCircle, BookOpen, Video, HelpCircle, FileText, ExternalLink } from 'lucide-react';
import type { Page } from '../App';

interface HelpPageProps {
  navigate: (page: Page) => void;
}

const faqs = [
  { q: '¿Qué es el SEACE?', a: 'El Sistema Electrónico de Contrataciones del Estado (SEACE) es el sistema informático que permite el intercambio de información y difusión sobre las contrataciones del Estado, así como la realización de transacciones electrónicas.' },
  { q: '¿Cómo me registro como proveedor del Estado?', a: 'Para registrarte como proveedor, debes ingresar al portal del OSCE, completar el formulario de inscripción en el RNP (Registro Nacional de Proveedores) y adjuntar la documentación requerida según el tipo de proveedor.' },
  { q: '¿Cómo puedo participar en un proceso de selección?', a: 'Debes estar inscrito en el RNP, acceder al SEACE, buscar el proceso de tu interés, registrarte como participante dentro de los plazos establecidos y presentar tu oferta según las bases del proceso.' },
  { q: '¿Qué es un contrato menor y cuándo aplica?', a: 'Los contratos menores son contrataciones directas para bienes, servicios u obras cuyo monto no supera las 8 UIT. No requieren proceso de selección pero deben registrarse en el SEACE.' },
  { q: '¿Cómo presento una consulta u observación a las bases?', a: 'Durante el periodo establecido en el cronograma del proceso, debes ingresar al expediente del proceso en el SEACE y utilizar el módulo de consultas y observaciones disponible.' },
  { q: '¿Cómo accedo al historial de un procedimiento?', a: 'Desde el buscador público, ubica el proceso por su IDEC o código, ingresa al detalle y selecciona el botón "Historial" en la parte superior derecha para ver todas las versiones y eventos del proceso.' },
];

const videoTutoriales = [
  { title: 'Cómo registrarse como proveedor del Estado', duration: '5:32', tag: 'RNP' },
  { title: 'Participar en un proceso de selección paso a paso', duration: '8:14', tag: 'Selección' },
  { title: 'Uso del buscador público de contrataciones', duration: '3:47', tag: 'Buscador' },
  { title: 'Cómo presentar consultas y observaciones', duration: '6:20', tag: 'Bases' },
];

const guias = [
  { title: 'Manual del proveedor — Registro y participación', size: '2.4 MB' },
  { title: 'Guía del buscador público SEACE', size: '1.1 MB' },
  { title: 'Normativa de contrataciones del Estado', size: '3.8 MB' },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="w-full text-left border-b border-gray-100 last:border-0 py-4 group"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-[14px] font-medium text-[#26292E] font-['Roboto',sans-serif] group-hover:text-[#63c9c4] transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-400 shrink-0 mt-0.5 transition-transform ${open ? 'rotate-180 text-[#294269]' : ''}`}
        />
      </div>
      {open && (
        <p className="mt-2 text-[13px] text-gray-600 font-['Roboto',sans-serif] leading-relaxed pr-6">
          {a}
        </p>
      )}
    </button>
  );
}

export function HelpPage({ navigate }: HelpPageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex-1 overflow-auto bg-gray-50">

      {/* Hero */}
      <div className="bg-[#294269] text-white">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-12">
          <button
            onClick={() => navigate({ type: 'home' })}
            className="flex items-center gap-2 text-white/70 hover:text-white mb-6 text-[13px] font-['Roboto',sans-serif] transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </button>

          <div className="flex items-end justify-between gap-8">
            <div className="flex-1">
              <p className="text-[#e2a615] text-[13px] font-semibold uppercase tracking-widest mb-2 font-['Roboto',sans-serif]">
                Centro de Ayuda · SEACE
              </p>
              <h1 className="text-[36px] font-bold font-['Roboto',sans-serif] leading-tight mb-4">
                ¿Cómo podemos ayudarte?
              </h1>
              <p className="text-white/70 text-[15px] font-['Roboto',sans-serif] mb-6 max-w-xl">
                Encuentra respuestas, tutoriales y orientación sobre las contrataciones del Estado peruano.
              </p>

              {/* Search bar */}
              <div className="flex items-center bg-white rounded-[8px] overflow-hidden shadow-lg max-w-xl">
                <Search size={18} className="text-gray-400 ml-4 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Busca tu pregunta o tema..."
                  className="flex-1 px-3 py-3.5 text-[14px] text-[#26292E] outline-none font-['Roboto',sans-serif] placeholder-gray-400"
                />
                <button className="bg-[#63c9c4] text-white px-5 py-3.5 text-[13px] font-semibold font-['Roboto',sans-serif] hover:bg-[#3F5578] transition-colors">
                  Buscar
                </button>
              </div>
            </div>

            {/* Illustration — person with laptop */}
            <div className="shrink-0 hidden lg:flex items-end justify-center w-52 h-40 opacity-80">
              <svg viewBox="0 0 200 160" className="w-full h-full">
                <ellipse cx="100" cy="148" rx="60" ry="8" fill="#1a1d22" opacity="0.3"/>
                {/* Chair */}
                <rect x="72" y="100" width="56" height="6" rx="3" fill="#e2a615"/>
                <rect x="85" y="106" width="8" height="38" rx="4" fill="#e2a615"/>
                <rect x="107" y="106" width="8" height="38" rx="4" fill="#e2a615"/>
                <rect x="75" y="136" width="50" height="6" rx="3" fill="#e2a615"/>
                {/* Laptop body */}
                <rect x="52" y="80" width="96" height="58" rx="5" fill="#f5f5f5" stroke="#ddd" strokeWidth="1"/>
                <rect x="57" y="85" width="86" height="46" rx="3" fill="#e8f0fe"/>
                {/* Screen content lines */}
                <rect x="63" y="92" width="40" height="3" rx="1.5" fill="#E2A615" opacity="0.6"/>
                <rect x="63" y="100" width="70" height="2" rx="1" fill="#ccc"/>
                <rect x="63" y="106" width="55" height="2" rx="1" fill="#ccc"/>
                <rect x="63" y="112" width="65" height="2" rx="1" fill="#ccc"/>
                <rect x="63" y="118" width="45" height="2" rx="1" fill="#ccc"/>
                {/* Laptop base */}
                <rect x="45" y="138" width="110" height="6" rx="3" fill="#ddd"/>
                {/* Person head */}
                <circle cx="100" cy="48" r="18" fill="#f4c5a0"/>
                {/* Hair */}
                <ellipse cx="100" cy="34" rx="18" ry="12" fill="#5c3d2e"/>
                <ellipse cx="100" cy="42" rx="20" ry="8" fill="#5c3d2e"/>
                {/* Body */}
                <path d="M72 100 Q78 72 100 68 Q122 72 128 100" fill="#E2A615"/>
                {/* Arms */}
                <path d="M72 80 Q58 90 60 105" stroke="#f4c5a0" strokeWidth="10" strokeLinecap="round" fill="none"/>
                <path d="M128 80 Q142 90 140 105" stroke="#f4c5a0" strokeWidth="10" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
          </div>

          {/* Quick access cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {[
              { icon: Video, label: 'Video tutoriales', sub: '12 videos disponibles' },
              { icon: BookOpen, label: 'Manuales PDF', sub: 'Guías descargables' },
              { icon: HelpCircle, label: 'Preguntas frecuentes', sub: '24 preguntas' },
              { icon: Phone, label: 'Soporte técnico', sub: '(01) 614-5656 Op.7' },
            ].map(({ icon: Icon, label, sub }) => (
              <button key={label} className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-[8px] p-4 text-left transition-colors group">
                <Icon size={20} className="text-[#e2a615] mb-2" />
                <p className="text-[13px] font-semibold text-white font-['Roboto',sans-serif]">{label}</p>
                <p className="text-[11px] text-white/60 font-['Roboto',sans-serif]">{sub}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT — FAQ */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[18px] font-bold text-[#26292E] font-['Roboto',sans-serif]">
                  Preguntas Frecuentes
                </h2>
                <span className="text-[12px] text-gray-400 font-['Roboto',sans-serif]">{faqs.length} preguntas</span>
              </div>
              <div>
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
              <button className="mt-4 flex items-center gap-1.5 text-[#294269] hover:underline text-[13px] font-medium font-['Roboto',sans-serif]">
                Ver todas las preguntas frecuentes
                <ChevronRight size={14} />
              </button>
            </div>

            {/* Manuales */}
            <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm p-6">
              <h2 className="text-[18px] font-bold text-[#26292E] font-['Roboto',sans-serif] mb-4">
                Manuales y Guías
              </h2>
              <div className="space-y-3">
                {guias.map((g, i) => (
                  <div key={i} className="flex items-center justify-between py-3 px-4 border border-gray-100 rounded-[8px] hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-50 rounded-[6px]">
                        <FileText size={16} className="text-[#294269]" />
                      </div>
                      <div>
                        <p className="text-[13px] font-medium text-[#26292E] font-['Roboto',sans-serif]">{g.title}</p>
                        <p className="text-[11px] text-gray-400 font-['Roboto',sans-serif]">{g.size} · PDF</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-1.5 text-[12px] text-[#294269] font-medium font-['Roboto',sans-serif] hover:underline shrink-0">
                      Descargar
                      <ExternalLink size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Tutoriales + Contacto */}
          <div className="space-y-6">
            {/* Video tutoriales */}
            <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm p-6">
              <h2 className="text-[16px] font-bold text-[#26292E] font-['Roboto',sans-serif] mb-4">
                Video Tutoriales
              </h2>
              <div className="space-y-3">
                {videoTutoriales.map((v, i) => (
                  <button key={i} className="w-full flex items-start gap-3 text-left group hover:bg-gray-50 rounded-[6px] p-2 -mx-2 transition-colors">
                    <div className="shrink-0 w-10 h-10 bg-[#63c9c4]/10 rounded-[6px] flex items-center justify-center">
                      <Video size={16} className="text-[#294269]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] font-medium text-[#26292E] group-hover:text-[#63c9c4] transition-colors font-['Roboto',sans-serif] leading-snug">
                        {v.title}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-gray-400 font-['Roboto',sans-serif]">{v.duration}</span>
                        <span className="px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded text-[9px] font-medium">{v.tag}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <button className="mt-3 flex items-center gap-1 text-[12px] text-[#0056AC] hover:underline font-medium font-['Roboto',sans-serif]">
                Ver todos los tutoriales <ChevronRight size={13} />
              </button>
            </div>

            {/* Contacto */}
            <div className="bg-white rounded-[10px] border border-gray-200 shadow-sm p-6">
              <h2 className="text-[16px] font-bold text-[#26292E] font-['Roboto',sans-serif] mb-1">
                ¿No encontraste lo que buscas?
              </h2>
              <p className="text-[12px] text-gray-500 font-['Roboto',sans-serif] mb-4">
                Contáctanos directamente y te ayudaremos.
              </p>
              <div className="space-y-3">
                <a href="tel:016145656" className="flex items-center gap-3 p-3 border border-gray-100 rounded-[8px] hover:border-[#63c9c4]/30 hover:bg-red-50/30 transition-colors group">
                  <div className="p-2 bg-red-50 rounded-[6px] shrink-0">
                    <Phone size={15} className="text-[#294269]" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#26292E] font-['Roboto',sans-serif]">Central telefónica</p>
                    <p className="text-[11px] text-gray-500 font-['Roboto',sans-serif]">(01) 614-5656 · Opción 7</p>
                  </div>
                </a>
                <a href="mailto:seace@osce.gob.pe" className="flex items-center gap-3 p-3 border border-gray-100 rounded-[8px] hover:border-[#63c9c4]/30 hover:bg-red-50/30 transition-colors group">
                  <div className="p-2 bg-red-50 rounded-[6px] shrink-0">
                    <Mail size={15} className="text-[#294269]" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#26292E] font-['Roboto',sans-serif]">Correo electrónico</p>
                    <p className="text-[11px] text-gray-500 font-['Roboto',sans-serif]">seace@osce.gob.pe</p>
                  </div>
                </a>
                <button className="flex items-center gap-3 p-3 border border-gray-100 rounded-[8px] hover:border-[#63c9c4]/30 hover:bg-red-50/30 transition-colors group w-full text-left">
                  <div className="p-2 bg-red-50 rounded-[6px] shrink-0">
                    <MessageCircle size={15} className="text-[#294269]" />
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#26292E] font-['Roboto',sans-serif]">Formulario de contacto</p>
                    <p className="text-[11px] text-gray-500 font-['Roboto',sans-serif]">Respuesta en 24-48 horas</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Normativa rápida */}
            <div className="bg-[#63c9c4]/5 border border-[#63c9c4]/20 rounded-[10px] p-5">
              <h3 className="text-[14px] font-bold text-[#0056AC] font-['Roboto',sans-serif] mb-2">Normativa vigente</h3>
              <p className="text-[12px] text-gray-600 font-['Roboto',sans-serif] mb-3">
                Ley N° 30225 — Ley de Contrataciones del Estado y su Reglamento.
              </p>
              <button className="flex items-center gap-1.5 text-[12px] text-[#294269] font-semibold hover:underline font-['Roboto',sans-serif]">
                Ver normativa completa <ExternalLink size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#294269] text-white py-4 px-6 text-sm font-['Roboto',sans-serif]">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <span>Central de consultas: (01) 614-5656 - Opción 7</span>
          <span className="text-white/50">© OSCE · SEACE</span>
        </div>
      </footer>
    </div>
  );
}
