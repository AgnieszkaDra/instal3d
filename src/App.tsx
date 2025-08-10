import Header from './components/Header';
import { SubmenuProvider } from './context/SubmenuContext';
import { SubmenuContainer } from './components/SubmenuContainer';
import './styles/index.scss';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <SubmenuProvider>
      <Header />
      <SubmenuContainer />
      <main className='main'>
        <Outlet/>
      </main>
    </SubmenuProvider>
  );
}

export default App;