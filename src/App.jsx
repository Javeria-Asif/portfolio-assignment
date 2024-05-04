

import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Contact from './pages/contact/ContactPage';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>

      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>


      {/* <About /> */}
      {/* <Skills/> */}
      {/* <Contact /> */}
    </>
  );
}

export default App;
