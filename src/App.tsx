import Header from './components/Header';
import { SubmenuProvider } from './context/SubmenuContext';
import { SubmenuContainer } from './components/SubmenuContainer';
import './styles/index.scss';
import { Outlet } from 'react-router-dom';
import { Carousel } from './ui';
import { images } from './data/images';



function App() {
  return (
    <SubmenuProvider>
      <Header />
      <SubmenuContainer />
      <main className='main'>
        <Carousel images={images} variant="main" interval={4000} />;
        <Outlet/>
      </main>
    </SubmenuProvider>
  );
}

export default App;