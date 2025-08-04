import Header from './components/Header';
import { SubmenuProvider } from './context/SubmenuContext';
import { SubmenuContainer } from './components/SubmenuContainer';
import './styles/index.scss';

function App() {
  return (
    <SubmenuProvider>
      <Header />
      <SubmenuContainer />
    </SubmenuProvider>
  );
}

export default App;