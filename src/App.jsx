import Cabecera from "./Components/Cabecera"
import ContenedorMusica from "./Components/ContenedorMusica"
import Navegador from "./Components/Navegador"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./Css/Scroll.css"
import Home from "./Pages/Home"
import Video from "./Pages/Video";
import Musica from "./Pages/Musica";
import Descarga from "./Pages/Descarga";


function App() {
  

  return (
    <>
    <BrowserRouter basename="/ReproMultiReact">
      <Cabecera/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Video" element={<Video/>}/>
        <Route path="/Musica" element={<Musica/>}/>
        <Route path="/Descarga" element={<Descarga/>}/>
      </Routes>
      <ContenedorMusica/>
      <Navegador/>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
