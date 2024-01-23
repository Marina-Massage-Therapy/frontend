import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./cmps/Header";
import Home from "./pages/Home";
import Massages from "./pages/Massages";
import AboutMe from "./pages/AboutMe";
import Testimonials from "./pages/Testimonials";

import Footer from "./cmps/Footer";

function App() {
  return (
    <div className="App">
      <Box>
        <Header />

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
        <Footer />
      </Box>
    </div>
  );
}

export default App;
