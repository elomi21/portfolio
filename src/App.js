import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/index.scss";
import Home from "./pages/Home";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Competences from "./pages/competences";
import Projets from "./pages/Projets";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Competences" element={<Competences />} />
          <Route path="Projets" element={<Projets />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
