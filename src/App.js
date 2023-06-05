import "./styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Home from "./routes/Home";

export default function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/Home" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/Service" element={<Service/>}/>
          <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Navbar />
      <Home/>
      
    </div>
    
  );
}
