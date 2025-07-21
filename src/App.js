import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginFuncionario from './pages/LoginFuncionario';
import LoginCliente from './pages/LoginCliente';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginFuncionario />} />
      <Route path="/cliente" element={<LoginCliente />} /> 
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