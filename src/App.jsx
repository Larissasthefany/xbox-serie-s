import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import {Jogos, Galeria, Unbox, Disponibilidade } from './components/pages';
import Hero from './components/hero/hero';
import Home from './components/home/home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/jogos' element={<Jogos />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/unbox' element={<Unbox />} />
        <Route path='/disponibilidade' element={<Disponibilidade />} />
      </Routes>
      <Hero />
      <Home />
    </div>
  )
}

export default App
