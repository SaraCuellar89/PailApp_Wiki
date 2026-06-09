import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Informacion from "./Paginas/Informacion";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Inicio/>}/>
        <Route path="/Info" element = {<Informacion/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App