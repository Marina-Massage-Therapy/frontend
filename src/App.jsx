import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./cmps/Header";
import Home from "./pages/Home";
import Massages from "./pages/Massages";
import AboutMe from "./pages/AboutMe";
import Testimonials from "./pages/Testimonials";
import footerBackground from "./assets/img/footer.png";
import Footer from "./cmps/Footer";
import { useEffect } from "react";
import { fetch_testimonial } from "./store/actions/testimonial";

function App() {
  useEffect(() => {
    fetch_testimonial();
  }, []);
  return (
    <div className="App">
      <Box>
        <Box>
          <Header />
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/massages" element={<Massages />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer
          backgroundImage={footerBackground}
          phoneNumber="+1 910-626-8525"
        />
      </Box>
    </div>
  );
}

export default App;
