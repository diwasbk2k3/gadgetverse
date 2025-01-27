import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Navbar from "./components/public/Navbar"
import Home from "./components/public/Home";
import Shop from "./components/public/Shop";
import About from "./components/public/About";
import Contact from "./components/public/Contact";
import Login from "./components/public/Login";
import Signup from "./components/public/Signup";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
