import "../../style/Main.scss";
import Logohtml from "../../assets/logoBW/html-bw.svg";
import Logocss from "../../assets/logoBW/css-bw.svg";
import Logosass from "../../assets/logoBW/sass-bw.svg";
import Logojs from "../../assets/logoBW/js-bw.svg";
import Logoreact from "../../assets/logoBW/react-bw.svg";
import Logoredux from "../../assets/logoBW/redux-bw.svg";

function Competences() {
  return (
    <>
      <section className="section-competences">
        <div className="langages">
          <div className="langage-front_op">
            <h2>Opérationnels</h2>
            <div className="langage-front_op_logo">
              <img src={Logohtml} alt="html" />
              <img src={Logocss} alt="css" />
              <img src={Logosass} alt="sass" />
            </div>
          </div>
          <div className="langage-front_ap">
            <h2>Langage et librairies à perfectionner</h2>
            <div className="langage-front_ap_logo">
              <img src={Logojs} alt="javascript" />
              <img src={Logoreact} alt="react" />
              <img src={Logoredux} alt="redux" />
            </div>
          </div>
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
