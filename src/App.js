import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Carros from './pages/Carros';
import Objeto from './pages/Objeto';
import Array from './pages/Array';
import Contador from './pages/Contador';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FilmesPopulares from './pages/filmes/FilmesPopulares';
import FilmesDetalhes from './pages/filmes/FilmesDetalhes';
import FilmesLancamento from './pages/filmes/FilmesLancamento';
import FilmesCartaz from './pages/filmes/FilmesCartaz';
import AtoresDetalhes from './pages/atores/AtoresDetalhes';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Menu/>

        <Container>    
          <Routes>
            <Route path="/" element={<Carros/>} />
            <Route path="/carros" element={<Carros/>} />
            <Route path="/array" element={<Array/>} />
            <Route path="/objeto" element={<Objeto/>} />
            <Route path="/contador" element={<Contador/>} />
            <Route path="/filmespopulares" element={<FilmesPopulares/>} />
            <Route path="/filmes/detalhes" element={<FilmesDetalhes/>}/>
            <Route path="/filmes/:id" element={<FilmesDetalhes/>}/>
            <Route path="/filmeslancamento" element={<FilmesLancamento/>}/>
            <Route path="/filmescartaz" element={<FilmesCartaz/>}/>
            <Route path="/atores/id:" element={<AtoresDetalhes/>}/>
          </Routes>
        </Container>

      </BrowserRouter>

    </div>
  );
}

export default App;
