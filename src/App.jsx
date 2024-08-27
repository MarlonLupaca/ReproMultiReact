import Cabecera from "./Components/Cabecera"
import Caja_Recientes from "./Components/Caja_Recientes"
import ContenedorMusica from "./Components/ContenedorMusica"
import Navegador from "./Components/Navegador"
import "./Css/Scroll.css"

function App() {
  

  return (
    <>
      <Cabecera/>
      <main className="flex flex-col gap-10 py-4 mb-[130px]">
        <Caja_Recientes/>
        <Caja_Recientes/>
        <Caja_Recientes/>
        <Caja_Recientes/>
        <Caja_Recientes/>
        <Caja_Recientes/>
        <Caja_Recientes/>
        <Caja_Recientes/>
        <Caja_Recientes/>
        <Caja_Recientes/>
        <Caja_Recientes/>  
      </main>
      <ContenedorMusica/>
      <Navegador/>
      
    </>
  )
}

export default App
