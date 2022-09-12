import './sass/main.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/Hero';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/home" element={<Home />} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
