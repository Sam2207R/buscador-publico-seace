import { useState, useRef, useEffect } from 'react';
import { Menu, X, Home, Search, BarChart3, Compass, ShieldCheck, HelpCircle, ChevronRight, Bookmark, MapPin, ArrowRight, Filter, ChevronDown } from 'lucide-react';
import svgPaths from '@/imports/TemplateBuscadorPublico-12/svg-qx6xp3zc2u';
import type { Page } from '../App';
import { useFavorites } from '../context/FavoritesContext';

// UNSPSC Segmento labels (2-digit prefix)
const SEGMENTO_LABELS: Record<string, string> = {
  '10': 'Productos de minería, explotación de canteras y perforación',
  '11': 'Combustibles minerales, aceites y productos de energía',
  '12': 'Minerales, metales y sus aleaciones',
  '13': 'Materiales no metálicos',
  '14': 'Papel, materiales de impresión y artes gráficas',
  '15': 'Combustibles, lubricantes, aceites y refrigerantes',
  '20': 'Materiales agrícolas y silvícolas',
  '21': 'Animales vivos, ganado y aves de corral',
  '22': 'Pesca, caza, trampería y fauna acuática',
  '23': 'Resinas y fibras naturales',
  '24': 'Artículos de papel, empaque y contenedores',
  '25': 'Vehículos, automóviles y equipos de transporte',
  '26': 'Maquinaria y equipos de generación de energía',
  '27': 'Herramientas y maquinaria general',
  '30': 'Estructuras, componentes de construcción y materiales',
  '31': 'Manufactura, componentes y suministros',
  '39': 'Suministros, componentes y accesorios eléctricos y de iluminación',
  '40': 'Componentes, equipos y sistemas de acondicionamiento y distribución',
  '41': 'Equipo de laboratorio, medición, observación y comprobación',
  '42': 'Equipos, accesorios y suministros médicos',
  '43': 'Tecnología de la información, telecomunicaciones y radiodifusión',
  '44': 'Equipos y suministros de oficina, imprenta y publicaciones',
  '45': 'Impresión, fotografía, audio y vídeo',
  '46': 'Defensa, orden público, seguridad y protección',
  '47': 'Productos de limpieza',
  '48': 'Empaques, etiquetado y suministros de envío',
  '49': 'Deportes, recreación, juguetes y juegos',
  '50': 'Alimentos, bebidas y tabaco',
  '51': 'Fármacos y productos farmacéuticos',
  '52': 'Artículos domésticos, utensilios y suministros del hogar',
  '53': 'Artículos de cuidado personal y del hogar',
  '54': 'Artículos de cuero, textiles y materias primas',
  '55': 'Publicaciones y materiales educativos',
  '56': 'Muebles, mobiliario e insumos domésticos',
  '60': 'Instrumentos musicales y representaciones artísticas',
  '70': 'Servicios de agricultura, pesca, forestales y vida silvestre',
  '71': 'Servicios de minería, extracción de petróleo y gas',
  '72': 'Servicios de construcción, mantenimiento y reparación',
  '73': 'Servicios de manufactura y producción industrial',
  '76': 'Servicios industriales y de eliminación de desechos',
  '77': 'Servicios medioambientales',
  '78': 'Servicios de transporte, almacenaje y correo',
  '80': 'Servicios de gestión, consultoría, finanzas y seguros',
  '81': 'Servicios tecnológicos de ingeniería, investigación y ciencia',
  '82': 'Servicios editoriales, de diseño gráfico e imprenta',
  '83': 'Servicios públicos y civiles',
  '84': 'Servicios educativos y de formación',
  '85': 'Servicios sanitarios',
  '86': 'Servicios financieros y seguros',
  '90': 'Servicio de viajes, comida y alojamiento',
  '91': 'Servicios personales y domésticos',
  '92': 'Servicios de seguridad y orden público',
  '93': 'Políticas y servicios de gobierno',
  '94': 'Servicios comunitarios y sociales',
  '95': 'Servicios de tierra, edificios e instalaciones',
};

// CUBSO catalog labels lookup
const CUBSO_LABELS: Record<string, string> = {
  // Segmentos (2d)
  '50': 'Alimentos y bebidas',
  '46': 'Defensa y seguridad pública',
  '39': 'Electricidad y componentes',
  '72': 'Servicios de construcción',
  '43': 'Tecnología de la información',
  '26': 'Maquinaria de generación de energía',
  '44': 'Equipos y suministros de oficina',
  '81': 'Servicios de tecnología e informática',
  '42': 'Suministros médicos',
  '80': 'Servicios de gestión',
  // Familias (4d)
  '5000': 'Alimentos varios',
  '4618': 'Ropa y equipo de protección laboral',
  '3912': 'Cables y accesorios eléctricos',
  '7215': 'Servicios de mantenimiento y reparación',
  '4321': 'Equipos informáticos y periféricos',
  '2611': 'Generadores y transformadores',
  '4412': 'Suministros de escritorio y oficina',
  '8111': 'Servicios de soporte informático',
  '4214': 'Equipos y suministros médicos',
  '8010': 'Servicios administrativos y empresariales',
  // Clases (6d)
  '500026': 'Cereales y productos derivados',
  '461815': 'Equipos de protección personal (EPP)',
  '391216': 'Conductores y cables eléctricos',
  '721510': 'Servicio de mantenimiento eléctrico y civil',
  '432115': 'Monitores, pantallas y kioscos',
  '261116': 'Grupos electrógenos y generadores',
  '441220': 'Papelería, útiles y materiales de limpieza',
  '811121': 'Mantenimiento y reparación de equipos de cómputo',
  '421422': 'Material médico e insumos descartables',
  '801015': 'Servicios de impresión y fotocopiado',
  '441031': 'Cartuchos de tinta y tóner',
  '721511': 'Servicios de acabados y pintura',
  // Commodities (8d)
  '50002601': 'Hojuelas de avena, quinua y cereales precocidos',
  '46181501': 'Equipo de protección personal industrial',
  '39121605': 'Conductor eléctrico de baja tensión',
  '72151007': 'Servicio de mantenimiento de media y baja tensión',
  '43211506': 'Módulo informativo interactivo (tótem)',
  '26111601': 'Grupo electrógeno a diesel',
  '44122012': 'Útiles de escritorio y materiales de limpieza',
  '81112101': 'Mantenimiento y reparación de computadoras',
  '42142201': 'Insumos médicos descartables para emergencias',
  '80101501': 'Servicio de fotocopiado e impresión de documentos',
  '44103105': 'Cartucho de tóner para impresora láser',
  '72151101': 'Trabajos de pintura y mantenimiento menor',
};

function cubsoLabel(code: string) {
  return CUBSO_LABELS[code] ?? code;
}

interface FigmaHeaderProps {
  navigate: (page: Page) => void;
}

const navItems = [
  { label: 'Inicio',           icon: Home,       page: { type: 'home' } as Page },
  { label: 'Indicadores de convocatorias', icon: BarChart3, page: { type: 'indicadores' } as Page },
  { label: 'Explora contrataciones', icon: Compass,     page: { type: 'explore' } as Page },
  { label: 'Transparencia',    icon: ShieldCheck, page: { type: 'transparencia' } as Page },
  { label: 'Ayuda',            icon: HelpCircle,  page: { type: 'help' } as Page },
];

export function FigmaHeader({ navigate }: FigmaHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favTab, setFavTab] = useState<'list' | 'prefs'>('list');
  const [loggedIn, setLoggedIn] = useState(false);
  const [dni, setDni] = useState('');
  const [pass, setPass] = useState('');
  const [removedPrefs, setRemovedPrefs] = useState<Set<string>>(new Set());
  const [prefsPage, setPrefsPage] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const favRef = useRef<HTMLDivElement>(null);
  const { favorites, removeFavorite } = useFavorites();

  const openLogin = () => {
    setDni('75432891');
    setPass('seace2024');
    setShowLoginModal(true);
  };

  const handleLogin = () => {
    setShowLoginModal(false);
    setLoggedIn(true);
    setShowFavorites(true);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (favRef.current && !favRef.current.contains(e.target as Node)) setShowFavorites(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleNav = (page: Page | null) => {
    setMenuOpen(false);
    if (page) navigate(page);
  };

  // Preferencias: unique segmentos (2-digit) from bookmarked CUBSO codes, minus removed
  const PREFS_PER_PAGE = 5;
  const allPrefs = [...new Set(favorites.filter(f => f.cubso).map(f => f.cubso!.slice(0, 2)))].filter(s => !removedPrefs.has(s));
  const totalPrefs = allPrefs.length;
  const totalPrefPages = Math.ceil(totalPrefs / PREFS_PER_PAGE);
  const safePage = Math.min(prefsPage, Math.max(0, totalPrefPages - 1));
  const visiblePrefs = allPrefs.slice(safePage * PREFS_PER_PAGE, safePage * PREFS_PER_PAGE + PREFS_PER_PAGE);
  const removePrefs = (seg: string) => setRemovedPrefs(prev => new Set([...prev, seg]));

  return (
    <>
      <header className="bg-[#294269] h-[64px] flex items-center justify-between px-[32px] font-['Roboto',sans-serif] shrink-0">

        {/* OECE | SE@CE Logo */}
        <button
          onClick={() => navigate({ type: 'home' })}
          className="flex items-center gap-[16px] hover:opacity-90 transition-opacity"
        >
          {/* OECE logo */}
          <div className="flex items-center justify-center">
            <div style={{ transform: 'scaleY(-1)' }}>
              <div style={{ transform: 'scaleY(-1)', height: '22.94px', width: '81.43px', position: 'relative' }}>
                <svg style={{ display: 'block', width: '100%', height: '100%', position: 'absolute', inset: 0 }} fill="none" preserveAspectRatio="none" viewBox="0 0 81.4268 22.9361">
                  <g>
                    <path d={svgPaths.p1b463a00} fill="white" />
                    <path d={svgPaths.pf24dd00} fill="white" />
                    <path d={svgPaths.p13df1c0} fill="white" />
                    <path d={svgPaths.p1fa84ef0} fill="#E2A615" />
                    <path d={svgPaths.p22f5fa80} fill="white" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          {/* Separator */}
          <div style={{ height: '18px', width: '1px', backgroundColor: 'white', opacity: 0.6 }} />
          {/* SE@CE logo */}
          <div style={{ height: '22.94px', width: '93.72px', position: 'relative' }}>
            <svg style={{ display: 'block', width: '100%', height: '100%', position: 'absolute', inset: 0 }} fill="none" preserveAspectRatio="none" viewBox="0 0 93.7216 22.9361">
              <g>
                <path d={svgPaths.p3ddfed80} fill="white" />
                <path d={svgPaths.p23a5eb00} fill="white" />
                <path d={svgPaths.p1af48f00} fill="white" />
                <path d={svgPaths.p126dcc80} fill="white" />
                <path d={svgPaths.p211cd200} fill="white" />
              </g>
            </svg>
          </div>
        </button>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Hamburger menu */}
          <div ref={menuRef} className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 border border-white/40 rounded-[4px] px-3 py-[7px] hover:bg-white/10 transition-colors text-[14px] text-white font-medium"
              aria-label="Menú de navegación"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
              <span className="hidden sm:inline">Menú</span>
            </button>

            {menuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-[12px] shadow-2xl z-20 overflow-hidden">
                  <div className="bg-[#294269] px-4 py-3">
                    <p className="text-white font-semibold text-[13px] font-['Roboto',sans-serif]">Navegación SEACE</p>
                  </div>
                  <div className="py-1.5">
                    {navItems.map(({ label, icon: Icon, page, active }) => (
                      <button
                        key={label}
                        onClick={() => handleNav(page)}
                        className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors group text-left ${!page ? 'opacity-50 cursor-default' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`size-8 rounded-[6px] flex items-center justify-center shrink-0 transition-colors ${active ? 'bg-[#294269] text-white' : 'bg-[#edf0f4] text-[#294269] group-hover:bg-[#63c9c4]/10'}`}>
                            <Icon size={15} />
                          </div>
                          <span className={`text-[13px] font-medium font-['Roboto',sans-serif] ${active ? 'text-[#C3002F] font-bold' : 'text-[#26292E]'}`}>{label}</span>
                        </div>
                        {page
                          ? <ChevronRight size={14} className={`${active ? 'text-[#C3002F]' : 'text-gray-300'} group-hover:text-[#63c9c4] transition-colors`} />
                          : <span className="text-[9px] text-gray-400 font-['Roboto',sans-serif] bg-gray-100 px-1.5 py-0.5 rounded">Próx.</span>
                        }
                      </button>
                    ))}
                  </div>
                  <div className="px-4 py-2.5 bg-gray-50 border-t border-gray-100">
                    <p className="text-[10px] text-gray-400 font-['Roboto',sans-serif]">
                      OSCE · Sistema Electrónico de Contrataciones
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Lista de interés (favoritos) */}
          <div ref={favRef} className="relative">
            <div className="relative group">
              <button
                onClick={() => setShowFavorites(!showFavorites)}
                className="relative flex items-center justify-center w-[36px] h-[36px] rounded-[4px] hover:bg-white/10 transition-colors"
                aria-label="Lista de interés"
              >
                <Bookmark size={20} className="text-[#E2A615] fill-[#E2A615]" />
                {favorites.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#63c9c4] text-[#294269] text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 font-['Roboto',sans-serif]">
                    {favorites.length}
                  </span>
                )}
              </button>
              {/* Tooltip */}
              <div className="absolute right-0 top-full mt-2 z-30 pointer-events-none">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#294269] text-white text-[11px] font-['Roboto',sans-serif] px-2.5 py-1.5 rounded-[6px] whitespace-nowrap shadow-lg">
                  Lista de interés
                  <div className="absolute -top-1 right-3 w-2 h-2 bg-[#294269] rotate-45" />
                </div>
              </div>
            </div>

            {/* Panel de favoritos */}
            {showFavorites && (
              <>
                <div className="fixed inset-0 z-20" onClick={() => { setShowFavorites(false); }} />
                <div className="absolute right-0 top-full mt-2 w-[380px] bg-white border border-gray-200 rounded-[12px] shadow-2xl z-30 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#294269]">
                      <div className="flex items-center gap-2">
                        <Bookmark size={15} className="text-white" />
                        <span className="text-[13px] font-semibold text-white font-['Roboto',sans-serif]">Lista de interés</span>
                        {favorites.length > 0 && (
                          <span className="bg-[#E2A615] text-[#294269] text-[10px] font-bold px-1.5 py-0.5 rounded-full font-['Roboto',sans-serif]">
                            {favorites.length}
                          </span>
                        )}
                      </div>
                      <button onClick={() => setShowFavorites(false)} className="text-white/70 hover:text-white transition-colors">
                        <X size={15} />
                      </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-[#DEE3EA] bg-[#F6F9FC]">
                      <button
                        onClick={() => setFavTab('list')}
                        className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-semibold transition-colors font-['Roboto',sans-serif] border-b-2 ${favTab === 'list' ? 'border-[#294269] text-[#294269] bg-white' : 'border-transparent text-gray-500 hover:text-[#26292E]'}`}
                      >
                        <Bookmark size={12} className={favTab === 'list' ? 'fill-[#E2A615] text-[#E2A615]' : ''} />
                        Guardados
                      </button>
                      <button
                        onClick={() => { setFavTab('prefs'); setPrefsPage(0); }}
                        className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-[11px] font-semibold transition-colors font-['Roboto',sans-serif] border-b-2 ${favTab === 'prefs' ? 'border-[#294269] text-[#294269] bg-white' : 'border-transparent text-gray-500 hover:text-[#26292E]'}`}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill={favTab === 'prefs' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        Segmentos de interés
                        {totalPrefs > 0 && (
                          <span className="bg-[#E2A615] text-[#294269] text-[9px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center">{totalPrefs}</span>
                        )}
                      </button>
                    </div>

                    {/* Tab: Guardados */}
                    {favTab === 'list' && (
                      favorites.length === 0 ? (
                        <div className="px-4 py-8 text-center">
                          <Bookmark size={28} className="text-gray-200 mx-auto mb-2" />
                          <p className="text-[13px] text-gray-400 font-['Roboto',sans-serif]">No tienes procesos guardados</p>
                          <p className="text-[11px] text-gray-300 font-['Roboto',sans-serif] mt-1">
                            Usa el ícono <Bookmark size={10} className="inline" /> en los cards para guardarlos aquí
                          </p>
                        </div>
                      ) : (
                        <div className="max-h-[320px] overflow-y-auto divide-y divide-gray-100">
                          {favorites.map(fav => (
                            <div key={fav.id} className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group">
                              <Bookmark size={14} className="text-[#294269] fill-[#E2A615] shrink-0 mt-0.5" />
                              <div className="flex-1 min-w-0">
                                <p className="text-[12px] font-bold text-[#0056AC] font-['Roboto',sans-serif]">{fav.idec}</p>
                                <p className="text-[11px] font-semibold text-[#26292E] font-['Roboto',sans-serif] truncate">{fav.entity}</p>
                                <p className="text-[10px] text-gray-500 font-['Roboto',sans-serif] line-clamp-1">{fav.description}</p>
                                <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                                  <span className="flex items-center gap-0.5 px-1.5 py-0.5 border border-[#294269]/30 text-[#294269] rounded-[3px] text-[9px] font-bold bg-[#edf0f4]">
                                    <MapPin size={8} />
                                    {fav.object}
                                  </span>
                                  {fav.cubso && (
                                    <span className="px-1.5 py-0.5 bg-[#EFF6FF] text-[#0056AC] rounded-[3px] text-[9px] font-bold font-['IBM_Plex_Mono',monospace]">
                                      {fav.cubso}
                                    </span>
                                  )}
                                  {fav.stages.slice(0, 3).map((s, i, arr) => (
                                    <span key={s} className="flex items-center gap-0.5 text-[9px] text-gray-400">
                                      <span className="px-1 py-0.5 bg-gray-100 rounded text-gray-500 font-['Roboto',sans-serif]">
                                        {s === 'planning' ? 'ActPrep' : s === 'selection' ? 'Selección' : s === 'fup' ? 'Contratos' : s === 'contratos-menores' ? 'CM' : s === 'req' ? 'Req' : s}
                                      </span>
                                      {i < arr.length - 1 && <ArrowRight size={7} />}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <button
                                onClick={() => removeFavorite(fav.id)}
                                className="shrink-0 p-1 rounded-full text-gray-300 hover:text-[#63c9c4] hover:bg-[#63c9c4]/10 transition-colors opacity-0 group-hover:opacity-100"
                                title="Quitar de lista de interés"
                              >
                                <X size={13} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )
                    )}

                    {/* Tab: Preferencias */}
                    {favTab === 'prefs' && (
                      <div className="p-3" onClick={e => e.stopPropagation()}>
                        {/* Email notice */}
                        <p className="text-[11px] text-[#26292E] font-['Roboto',sans-serif] leading-snug mb-3">
                          Recibirá en su correo las convocatorias publicadas en los siguientes segmentos de catálogo. Quite los que no le interesen.
                        </p>
                        {totalPrefs === 0 ? (
                          <div className="py-4 text-center">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-200 mx-auto mb-2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            <p className="text-[11px] text-gray-400 font-['Roboto',sans-serif]">Agrega procesos a tu lista de interés para configurar alertas por segmento</p>
                          </div>
                        ) : (
                          <>
                            {/* List */}
                            <div className="space-y-1.5">
                              {visiblePrefs.map(seg => {
                                const segColors: Record<string, string> = {
                                  '10': '#0056AC', '11': '#1565C0', '12': '#37474F', '13': '#455A64',
                                  '14': '#4E342E', '15': '#BF360C', '20': '#2E7D32', '21': '#388E3C',
                                  '22': '#00695C', '23': '#33691E', '24': '#827717', '25': '#6A1B9A',
                                  '26': '#4527A0', '27': '#283593', '30': '#BF0909', '31': '#C62828',
                                  '39': '#E65100', '40': '#0277BD', '41': '#01579B', '42': '#4527A0',
                                  '43': '#558B2F', '44': '#AD1457', '45': '#880E4F', '46': '#00695C',
                                  '47': '#006064', '48': '#37474F', '49': '#4A148C', '50': '#F57F17',
                                  '51': '#0d47a1', '52': '#1B5E20', '53': '#880E4F', '54': '#01579B',
                                  '55': '#33691E', '56': '#5D4037', '60': '#4A148C', '70': '#006064',
                                  '71': '#004D40', '72': '#BF360C', '73': '#1A237E', '76': '#004D40',
                                  '77': '#212121', '78': '#263238', '80': '#263238', '81': '#3E2723',
                                  '82': '#4E342E', '83': '#0d47a1', '84': '#F57F17', '85': '#2E7D32',
                                  '86': '#1565C0', '90': '#6A1B9A', '91': '#AD1457', '92': '#C62828',
                                  '93': '#37474F', '94': '#388E3C', '95': '#455A64',
                                };
                                const bgColor = segColors[seg] ?? '#6B7280';
                                const label = SEGMENTO_LABELS[seg] ?? `Segmento ${seg}`;
                                return (
                                  <div key={seg} className="flex items-start gap-2">
                                    <span
                                      className="shrink-0 w-8 h-8 flex items-center justify-center text-white text-[11px] font-bold font-['IBM_Plex_Mono',monospace] rounded-[3px]"
                                      style={{ backgroundColor: bgColor }}
                                    >
                                      {seg}
                                    </span>
                                    <span className="flex-1 text-[11px] text-[#26292E] font-['Roboto',sans-serif] leading-snug pt-0.5 min-w-0" title={label}>
                                      {label}
                                    </span>
                                    <button
                                      onClick={() => removePrefs(seg)}
                                      className="shrink-0 mt-0.5 p-0.5 text-gray-400 hover:text-[#63c9c4] hover:bg-[#63c9c4]/10 transition-colors"
                                      title="Quitar preferencia"
                                    >
                                      <X size={13} />
                                    </button>
                                  </div>
                                );
                              })}
                            </div>
                            {/* Counter + square nav arrows on same row */}
                            {totalPrefs > PREFS_PER_PAGE && (
                              <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#DEE3EA]">
                                <button
                                  onClick={() => setPrefsPage(p => Math.max(0, p - 1))}
                                  disabled={safePage === 0}
                                  className="w-6 h-6 flex items-center justify-center border border-[#DEE3EA] text-[#26292E] hover:border-[#63c9c4] hover:text-[#63c9c4] disabled:opacity-25 disabled:cursor-default transition-colors bg-white rounded-[3px]"
                                >
                                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                                </button>
                                <span className="text-[10px] text-gray-500 font-['Roboto',sans-serif]">
                                  {safePage * PREFS_PER_PAGE + 1}–{Math.min((safePage + 1) * PREFS_PER_PAGE, totalPrefs)} de {totalPrefs}
                                </span>
                                <button
                                  onClick={() => setPrefsPage(p => Math.min(totalPrefPages - 1, p + 1))}
                                  disabled={safePage >= totalPrefPages - 1}
                                  className="w-6 h-6 flex items-center justify-center border border-[#DEE3EA] text-[#26292E] hover:border-[#63c9c4] hover:text-[#63c9c4] disabled:opacity-25 disabled:cursor-default transition-colors bg-white rounded-[3px]"
                                >
                                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                                </button>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    )}

                    {/* Footer */}
                    {favorites.length > 0 && favTab === 'list' && (
                      <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
                        <span className="text-[10px] text-gray-400 font-['Roboto',sans-serif]">
                          Almacenado temporalmente en este dispositivo
                        </span>
                        <button
                          onClick={() => { favorites.forEach(f => removeFavorite(f.id)); }}
                          className="text-[10px] text-[#0056AC] hover:underline font-medium font-['Roboto',sans-serif]"
                        >
                          Limpiar todo
                        </button>
                      </div>
                    )}
                  </div>
                </>
            )}
          </div>

          {/* Login / User */}
          {loggedIn ? (
            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className="flex items-center gap-2 bg-white text-[#294269] rounded-[4px] px-4 py-[7px] hover:bg-white/90 transition-colors text-[14px] font-semibold"
            >
              <svg className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              <span className="font-['IBM_Plex_Mono',monospace] text-[13px]">75432891</span>
            </button>
          ) : (
            <button
              onClick={openLogin}
              className="flex items-center gap-2 bg-white text-[#294269] rounded-[4px] px-3 py-[7px] hover:bg-white/90 transition-colors text-[14px] font-semibold"
            >
              <svg className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
              Iniciar sesión
            </button>
          )}
        </div>
      </header>

      {/* Login Modal */}
      {showLoginModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={e => { if (e.target === e.currentTarget) setShowLoginModal(false); }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="bg-[#294269] px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-1.5">
                  <svg className="size-5" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.5 4.5 10 10 10s10-4.5 10-10V7L12 2zm0 18c-4.4 0-8-3.6-8-8V8.3l8-4 8 4V12c0 4.4-3.6 8-8 8z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-[18px] leading-none">gob.pe</p>
                  <p className="text-white/70 text-[11px] mt-0.5">SEACE · Plataforma digital del Estado</p>
                </div>
              </div>
              <button onClick={() => setShowLoginModal(false)} className="text-white/80 hover:text-white transition-colors p-1">
                <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div className="px-6 py-7">
              <h2 className="text-[#26292E] text-[20px] font-bold mb-1">Iniciar sesión</h2>
              <p className="text-gray-500 text-[13px] mb-5">Accede con tu cuenta del Estado peruano</p>

              {/* Demo hint */}
              <div className="flex items-start gap-2 bg-[#E1F0FF] border border-[#0056AC]/20 rounded-[6px] px-3 py-2.5 mb-5">
                <svg className="size-[14px] text-[#0056AC] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                <p className="text-[11.5px] text-[#0056AC] font-['Roboto',sans-serif]">
                  Credenciales de demostración precargadas. Presione <strong>Ingresar al SEACE</strong> para continuar.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#26292E] mb-1.5">DNI / Usuario</label>
                  <input
                    type="text"
                    value={dni}
                    onChange={e => setDni(e.target.value)}
                    className="w-full border border-[#294269] rounded-[6px] px-4 py-3 text-[14px] font-['IBM_Plex_Mono',monospace] font-bold outline-none focus:ring-2 focus:ring-[#294269]/20 transition-colors bg-[#edf0f4]"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#26292E] mb-1.5">Contraseña</label>
                  <input
                    type="password"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                    className="w-full border border-[#294269] rounded-[6px] px-4 py-3 text-[14px] font-['IBM_Plex_Mono',monospace] font-bold outline-none focus:ring-2 focus:ring-[#294269]/20 transition-colors bg-[#edf0f4]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-[#63c9c4]" defaultChecked />
                  <span className="text-[13px] text-gray-600 font-['Roboto',sans-serif]">Recordarme</span>
                </label>
                <a href="#" className="text-[13px] text-[#0056AC] hover:underline font-['Roboto',sans-serif]">¿Olvidaste tu contraseña?</a>
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-[#294269] text-white rounded-[6px] py-3.5 font-bold text-[15px] hover:bg-[#3F5578] transition-colors font-['Roboto',sans-serif] flex items-center justify-center gap-2"
              >
                <svg className="size-[16px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/>
                </svg>
                Ingresar al SEACE
              </button>

              <div className="mt-4 text-center">
                <p className="text-[13px] text-gray-500 font-['Roboto',sans-serif]">
                  ¿No tienes cuenta?{' '}
                  <a href="#" className="text-[#0056AC] font-medium hover:underline">Regístrate aquí</a>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-3 border-t border-gray-100">
              <p className="text-[11px] text-gray-400 text-center font-['Roboto',sans-serif]">
                Acceso restringido al personal autorizado del Estado peruano · OSCE
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
