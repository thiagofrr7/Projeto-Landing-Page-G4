import Secao02 from './Main/Secao02/Secao02'
import Secao03 from './Main/Secao03/Secao03'
import Secao07 from './Main/Secao07/Secao07'
import Footer from "./Footer/Footer";
import SecaoDepoimentos from "./main/SecaoDepoimentos/SecaoDepoimentos";
import SecaoQuemSouEu from "./main/SecaoQuemSouEu/SecaoQuemSouEu";
import { Routes, Route } from 'react-router-dom';
import Menu from './Header/Menu';
import Chamada from './Main/Secao1/Chamada';
import Faq from './Main/Secao6/Faq';
import Login from './Main/Login/Login';
import Administrador from './Main/Administrador/Administrador';


function App() {
  return (
    <>
      <Secao02 />
      <Secao03 />
      <Secao07 />
      <SecaoQuemSouEu/>
      <SecaoDepoimentos/>
      <Footer/>
        <>
            <Routes>
                <Route path="/" element={
                    <>
                        <Menu/>
                        <Chamada/>
                        <Faq/>
                      
                    </>
                } />
                <Route path="/login" element={
                    <>
                        <Menu/>
                        <Login/>
                    </>
                } />
                <Route path="/administrador" element={<Administrador/>} />
            </Routes>
        </>
    </>
  );
}

export default App