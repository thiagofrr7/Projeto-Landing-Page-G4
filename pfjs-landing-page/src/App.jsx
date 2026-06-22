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