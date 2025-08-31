import Header from './components/Header';
import { SubmenuProvider } from './context/SubmenuContext';
import { SubmenuContainer } from './components/SubmenuContainer';
import './styles/index.scss';
import { Outlet, useLocation } from 'react-router-dom';
import { Carousel } from './ui';
import { images } from './data/images';

function App() {
  const location = useLocation();
  const isOfferPage = location.pathname.startsWith('/oferta');

  return (
    <SubmenuProvider>
      <Header />
      <SubmenuContainer />
      {!isOfferPage && (
        <main className='main'>
          <Carousel images={images} interval={4000} />
        </main>
      )}
      <Outlet />
    </SubmenuProvider>
  );
}

export default App;