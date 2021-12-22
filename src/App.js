import logo from './logo.svg';
import './App.css';
import Reg from "./Reg";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thankyou from './Thankyou';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/registration" element={<Reg />} />
        <Route path="/thankyou" element={<Thankyou/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
