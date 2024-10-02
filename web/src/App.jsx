import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import { Formulario } from "./components/pages/formulario"

function App() {

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Formulario/>}/>
        </Routes>
      </main>
    </Router>
 
  )
}

export default App
