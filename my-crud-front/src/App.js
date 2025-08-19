import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'material-symbols';

import LoginFuncionario from './pages/LoginFuncionario';
import LoginCliente from './pages/LoginCliente';
import MenuPrincipal from './pages/MenuPrincipal';
import CardapioCafeQ from './pages/CardapioCafeQ';
import CardapioCafeG from './pages/CardapioCafeG';
import CardapioBebidas from './pages/CardapioBebidas';
import CardapioDoces from './pages/CardapioDoces';
import CardapioSalgados from './pages/CardapioSalgados';
import Pagamento from './pages/Pagamento';
import CadastrarFuncionario from './pages/CadastrarFuncinario';
import CadastrarProduto from './pages/CadastrarProduto';
import EditarProduto from './pages/EditarProduto';
import VerProduto from './pages/VerProduto';
import AtenderPedido from './pages/AtenderPedido';


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
      <Route path="/cardapio-bebidas" element={<CardapioBebidas />} /> 
      <Route path="/cardapio-doces" element={<CardapioDoces />} /> 
      <Route path="/cardapio-salgados" element={<CardapioSalgados />} /> 
      <Route path="/pagamento" element={<Pagamento />} /> 
      <Route path="/cadastrar-funcionario" element={<CadastrarFuncionario />} /> 
      <Route path="/cadastrar-produto" element={<CadastrarProduto />} /> 
      <Route path="/editar-produto" element={<EditarProduto />} /> 
      <Route path="/ver-produto" element={<VerProduto />} /> 
      <Route path="/atender-pedido" element={<AtenderPedido />} /> 

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