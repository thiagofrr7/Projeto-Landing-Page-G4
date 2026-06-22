import Footer from "./Footer/Footer";
import SecaoDepoimentos from "./main/SecaoDepoimentos/SecaoDepoimentos";
import SecaoQuemSouEu from "./main/SecaoQuemSouEu/SecaoQuemSouEu";


function App() {
  return (
    <>
      <SecaoQuemSouEu/>
      <SecaoDepoimentos/>
      <Footer/> 
    </>
  );
import { Routes, Route } from 'react-router-dom';
import Menu from './Header/Menu';
import Chamada from './Main/Secao1/Chamada';
import Faq from './Main/Secao6/Faq';
import Login from './Main/Login/Login';
import Administrador from './Main/Administrador/Administrador';


function App() {
    return (
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
    );
}

export default App;