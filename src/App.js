import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/index.scss";
import Home from "./pages/Home";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
// import Competences from "./pages/Competences/";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Competences" element={<Competences />} /> */}
          <Route path="/Projets" element={<Projets />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
