import "../../style/Main.scss";
import Logohtml from "../../assets/logo/html-1.svg";
import Logocss from "../../assets/logo/css-3.svg";
import Logosass from "../../assets/logo/sass-1.svg";
import Logojs from "../../assets/logo/javascript-1.svg";
import Logoreact from "../../assets/logo/react-2.svg";
import Logoredux from "../../assets/logo/redux.svg";

function Competences() {
  return (
    <>
      <section className="section-competences">
        <div className="langages">
          <h2>Langages courants</h2>
          <img src={Logohtml} alt="html" />
          <img src={Logocss} alt="css" />
          <img src={Logosass} alt="sass" />
          <h3>Langage et librairie à perfectionner</h3>
          <img src={Logojs} alt="javascript" />
          <img src={Logoreact} alt="react" />
          <h3>Librairie à appronfondir</h3>
          <img src={Logoredux} alt="redux" />
        </div>
        <div className="autres">
          <h2>Notions</h2>
          <p>creation d'une doc API avec swagger</p>
          <p>mise en place d'un Kanban et organisation méthode Agile</p>
          <p>...</p>
        </div>
      </section>
    </>
  );
}
export default Competences;
