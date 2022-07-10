// import useLocalStorage from 'use-local-storage';
// import { FaMoon, FaSun } from "react-icons/fa";
// import "./App.css";
// import { useState } from 'react';
// import { Navbar } from './components/Navbar';


// function App() {
//   // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//   const [theme, setTheme] = useState("light");

//   const switchTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme)
//   }

//   return (
//     <div className="container">
//       <Navbar switchTheme={switchTheme} icon={theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />} />
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
// Import MUI stuff
import "@fontsource/roboto"; // Loading Roboto font. MUI was designed with this font in mind.
import {
  Container,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { PersonalInfo } from "./components/PersonalInfo/PersonalInfo";
import { FaMoon, FaSun } from "react-icons/fa";
import './App.css';

const themeDark = createTheme({
  palette: { mode: "dark" },
  typography: {
    fontFamily: [
      "Poppins",
      "sans-serif"
    ].join(",")
  }
})

const themeLight = createTheme({
  palette: { mode: "light" },
  typography: {
    fontFamily: [
      "Poppins",
      "sans-serif"
    ].join(",")
  }

})

const App = () => {
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (

    <ThemeProvider theme={isDarkTheme ? createTheme(themeDark) : createTheme(themeLight)}>
      <Router>
        <Routes>
          <Route path="/projects" element={<Projects isDarkTheme={isDarkTheme} />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/navbar" element={<Navbar changeTheme={changeTheme} icon={isDarkTheme ? <FaSun size={20} color="white" /> : <FaMoon size={20} color="white" />} isDarkTheme={isDarkTheme} />} />
        </Routes>
        <CssBaseline />
        <Container>
          <div className="App">
            <Navbar changeTheme={changeTheme} icon={isDarkTheme ? <FaSun size={20} color="white" /> : <FaMoon size={20} color="white" />} isDarkTheme={isDarkTheme} />
            <PersonalInfo isDarkTheme={isDarkTheme} />
            <Projects isDarkTheme={isDarkTheme} />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;