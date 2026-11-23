import { useState } from 'react';
import { FavoritesProvider } from './context/FavoritesContext';
import { FigmaHeader } from './components/FigmaHeader';
import { HomePage } from './pages/HomePage';
import { SearchAllPage } from './pages/SearchAllPage';
import { DetailPage } from './pages/DetailPage';
import { StageSearchPage } from './components/StageSearchPage';
import { SearchOpportunitiesPage } from './pages/SearchOpportunitiesPage';
import { HelpPage } from './pages/HelpPage';
import { ExplorePage } from './pages/ExplorePage';
import { IndicadoresPage } from './pages/IndicadoresPage';
import { ObrasPublicasPage } from './pages/ObrasPublicasPage';
import { ObraDetailPage } from './pages/ObraDetailPage';
import { BienesDetailPage } from './pages/BienesDetailPage';
import { ServiciosDetailPage } from './pages/ServiciosDetailPage';
import { CdcDetailPage } from './pages/CdcDetailPage';
import { TransparenciaPage } from './pages/TransparenciaPage';
import { BuscarPage } from './pages/BuscarPage';
import { ContratosListaPage } from './pages/ContratosListaPage';
import { ContratoDetailPage } from './pages/ContratoDetailPage';

export type Page =
  | { type: 'home' }
  | { type: 'search-planning' }
  | { type: 'search-selection' }
  | { type: 'search-fup' }
  | { type: 'search-contratos-menores' }
  | { type: 'search-opportunities' }
  | { type: 'search-all'; query: string }
  | { type: 'help' }
  | { type: 'explore' }
  | { type: 'indicadores' }
  | { type: 'buscar' }
  | { type: 'obras-publicas' }
  | { type: 'transparencia' }
  | { type: 'detail'; id: string; stage: 'planning' | 'selection' | 'fup' }
  | { type: 'obra-detail'; id: string }
  | { type: 'bienes-detail'; id: string; from?: Page }
  | { type: 'servicio-detail'; id: string }
  | { type: 'cdc-detail'; id: string }
  | { type: 'contratos-lista' }
  | { type: 'contrato-detail'; id: string };

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>({ type: 'home' });

  const navigate = (page: Page) => setCurrentPage(page);

  return (
    <FavoritesProvider>
    <div className="flex flex-col h-screen bg-white">
      <FigmaHeader navigate={navigate} />
      {currentPage.type === 'home' && <HomePage navigate={navigate} />}
      {currentPage.type === 'search-planning' && <StageSearchPage stage="planning" navigate={navigate} />}
      {currentPage.type === 'search-selection' && <StageSearchPage stage="selection" navigate={navigate} />}
      {currentPage.type === 'search-fup' && <StageSearchPage stage="fup" navigate={navigate} />}
      {currentPage.type === 'search-contratos-menores' && <StageSearchPage stage="contratos-menores" navigate={navigate} />}
      {currentPage.type === 'search-opportunities' && <SearchOpportunitiesPage navigate={navigate} />}
      {currentPage.type === 'search-all' && <SearchAllPage query={currentPage.query} navigate={navigate} />}
      {currentPage.type === 'help' && <HelpPage navigate={navigate} />}
      {currentPage.type === 'explore' && <ExplorePage navigate={navigate} />}
      {currentPage.type === 'indicadores' && <IndicadoresPage navigate={navigate} />}
      {currentPage.type === 'buscar' && <BuscarPage navigate={navigate} />}
      {currentPage.type === 'obras-publicas' && <ObrasPublicasPage navigate={navigate} />}
      {currentPage.type === 'transparencia' && <TransparenciaPage navigate={navigate} />}
      {currentPage.type === 'detail' && <DetailPage id={currentPage.id} stage={currentPage.stage} navigate={navigate} />}
      {currentPage.type === 'obra-detail' && <ObraDetailPage id={currentPage.id} navigate={navigate} />}
      {currentPage.type === 'bienes-detail' && <BienesDetailPage id={currentPage.id} navigate={navigate} from={currentPage.from} />}
      {currentPage.type === 'servicio-detail' && <ServiciosDetailPage id={currentPage.id} navigate={navigate} />}
      {currentPage.type === 'cdc-detail' && <CdcDetailPage id={currentPage.id} navigate={navigate} />}
      {currentPage.type === 'contratos-lista' && <ContratosListaPage navigate={navigate} />}
      {currentPage.type === 'contrato-detail' && <ContratoDetailPage id={currentPage.id} navigate={navigate} />}
    </div>
    </FavoritesProvider>
  );
}
