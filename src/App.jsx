import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import {Jogos, Galeria, Unbox, Home, Disponibilidade} from './components/pages'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path='/home' element={<Home />} />
        <Route path='/jogos' element={<Jogos />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/unbox' element={<Unbox />} />
        <Route path='/disponibilidade' element={<Disponibilidade />} />

      </Routes>
    </div>
  )
}

export default App
