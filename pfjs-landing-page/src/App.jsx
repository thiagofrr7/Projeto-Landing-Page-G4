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
import { useScrollReveal } from './Hooks/useScrollReveal'  // pasta Hooks (H maiúsculo)

function Home() {
  useScrollReveal()

  return (
    <>
      <Menu />
      <Chamada />
      <div className="sr-reveal-padrao"><Secao02 /></div>
      <div className="sr-reveal-padrao"><Secao03 /></div>
      <div className="sr-reveal-padrao"><SecaoQuemSouEu /></div>
      <div className="sr-reveal-padrao"><SecaoDepoimentos /></div>
      <div className="sr-reveal-padrao"><Faq /></div>
      <div className="sr-reveal-padrao"><Secao07 /></div>
      <div className="sr-reveal-padrao"><Footer /></div>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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