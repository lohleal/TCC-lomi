import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginFuncionario from './pages/LoginFuncionario';
import LoginCliente from './pages/LoginCliente';
import MenuPrincipal from './pages/MenuPrincipal';
import CardapioCafeQ from './pages/CardapioCafeQ';
import CardapioCafeG from './pages/CardapioCafeG';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginFuncionario />} />
      <Route path="/cliente" element={<LoginCliente />} /> 
      <Route path="/menu principal" element={<MenuPrincipal />} /> 
      <Route path="/cardapio-cafeQ" element={<CardapioCafeQ />} /> 
      <Route path="/cardapio-cafeG" element={<CardapioCafeG />} /> 
      </Routes>
    </Router>
  );
}

export default App;

//log cliente
//log func
//cad func
//cad produ
//edit produ