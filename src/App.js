import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import Menu from './menu';
import About from './about';
import Rules from './rules';
import Chessboard from './chessboard';
// import Pawn from './pawn';
import Tile from './tile';
import Footer from './footer';
function App(){
  return(
<div className='App'>
  <BrowserRouter>
  <Menu />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/rules" element={<Rules/>}/>
      <Route path="/tile" element={<Tile/>}/>      
      <Route path="/chessboard" element={<Chessboard/>}/>
    </Routes>
  </BrowserRouter>
  <Footer/>
</div>
  );
}
export default App;