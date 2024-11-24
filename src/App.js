import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";


function App() {

 
  return (
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path = '/' element={<Home />}/>
          <Route path = '/about' element={<About />}/>
          <Route path = '/counter' element={<Counter />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
