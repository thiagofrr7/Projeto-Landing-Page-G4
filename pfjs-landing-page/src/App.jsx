import { Routes, Route } from 'react-router-dom'
import Menu from './Header/Menu'
import Chamada from './Main/Secao1/Chamada'
import Secao02 from './Main/Secao02/Secao02'
import Secao03 from './Main/Secao03/Secao03'
import SecaoQuemSouEu from './main/SecaoQuemSouEu/SecaoQuemSouEu'
import SecaoDepoimentos from './main/SecaoDepoimentos/SecaoDepoimentos'
import Faq from './Main/Secao6/Faq'
import Secao07 from './Main/Secao07/Secao07'
import Footer from './Footer/Footer'
import Login from './Main/Login/Login'
import Administrador from './Main/Administrador/Administrador'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Menu />
          <Chamada />
          <Secao02 />
          <Secao03 />
          <SecaoQuemSouEu />
          <SecaoDepoimentos />
          <Faq />
          <Secao07 />
          <Footer />
        </>
      } />
      <Route path="/login" element={
        <>
          <Menu />
          <Login />
        </>
      } />
      <Route path="/administrador" element={<Administrador />} />
    </Routes>
  )
}

export default App