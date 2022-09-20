import './sass/main.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/Hero';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;