import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginFuncionario from './pages/LoginFuncionario';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/loginFuncionario" element={<LoginFuncionario />} />
      </Routes>
    </Router>
  );
}

export default App;