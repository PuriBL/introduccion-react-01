import Ejercicio1 from './components/Ejercicio1/Ejercicio1'
import Footer from './components/Footer'
import Header from './components/Header'
import TituloPrincipal from './components/TituloPrincipal'
import Boton from './components/Boton'
import Ejercicio2 from './components/Ejercicio2'
import Ejercicio3 from './components/Ejercicio3'
import Ejercicio4 from './components/Ejercicio4'
import './index.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <TituloPrincipal />
        <Ejercicio1 />  
        <Boton /> 
        <Ejercicio2 />     
        <Ejercicio3 />  
        <Ejercicio4 />    
        {/* Añade tus componentes aqui */}        
      </main>
      <Footer />
    </>
  )
}
