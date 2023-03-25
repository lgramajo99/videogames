import './App.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/pages/home/Home.jsx';
import Navbar from './components/common/navbar/Navbar.jsx';
import Landing from './components/pages/landing/Landing.jsx';
import Footer from './components/common/footer/Footer.jsx';
import Error from './components/pages/error/Error';
import Detail from './components/pages/detail/Detail.jsx';
import Form from './components/pages/form/Form.jsx';
import Nosotros from './components/pages/nosotros/Nosotros';

function App() {
  const location = useLocation();
  const access = useSelector(state => state.access);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate('/')
  }, [access, navigate]);

  return (
    <div className="App">

      {(location.pathname === '/') || <Navbar />}
      {/* - ------------------------ - */}

      <Routes>

        <Route path={'/'} element={<Landing />} />

        <Route path={'/home'} element={<Home />} />
        <Route path={'/detalles'} element={<Detail />} />
        <Route path={'/detalles/:id'} element={<Detail />} />
        <Route path={'/administracion'} element={<Form />} />
        <Route path={'/nosotros'} element={<Nosotros />} />

        <Route path='/*' element={<Error />} />
      </Routes>

      {/* - ------------------------ - */}
      {(location.pathname === '/') || <Footer />}
    </div>
  );
}

export default App;
