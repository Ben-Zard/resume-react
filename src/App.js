import './sass/main.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/Hero';
import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
