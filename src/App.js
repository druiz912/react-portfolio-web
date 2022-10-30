import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* COMPONENTE DE NAVEGACIÓN */}
      <NavBar />
      {/* COMPONENTE DE CONTENIDO PRINCIPAL */}
      <Banner/>
    </div>
  );
}

export default App;
