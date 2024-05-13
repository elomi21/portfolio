import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/index.scss";
import Home from "./pages/Home/index";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Competences from "./pages/Competences/index";
import Projets from "./pages/Projets/index";
import Contact from "./pages/Contact/index";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Competences" element={<Competences />} />
          <Route path="/Projets" element={<Projets />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
