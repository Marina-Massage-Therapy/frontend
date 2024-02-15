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
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  const lng = navigator.language;

  useEffect(() => {
    fetch_testimonial();
    i18n.changeLanguage(lng);
  }, []);

  const onChangeLang = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <Box>
        <Box>
          <Header onChangeLang={onChangeLang} />
        </Box>

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<AboutMe />}
          />
          <Route
            path="/massages"
            element={<Massages />}
          />
          <Route
            path="/testimonials"
            element={<Testimonials />}
          />
        </Routes>
        <Footer
          backgroundImage={footerBackground}
          phoneNumber="0523910037"
        />
      </Box>
    </div>
  );
}

export default App;
