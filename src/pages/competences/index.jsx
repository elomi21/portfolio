import "../../style/Main.scss";
import Logohtml from "../../assets/logoBW/html-bw.svg";
import Logocss from "../../assets/logoBW/css-bw.svg";
import Logosass from "../../assets/logoBW/sass-bw.svg";
import Logojs from "../../assets/logoBW/js-bw.svg";
import Logoreact from "../../assets/logoBW/react-bw.svg";
import Logoredux from "../../assets/logoBW/redux-bw.svg";
import Logoswagger from "../../assets/logoBW/swagger-bw.svg";
import Logoagile from "../../assets/logo/agility.svg";
import Logoseo from "../../assets/logo/seo.svg";
import Linkprojet from "../../assets/logo/link.svg";
import { Link } from "react-router-dom";

function Competences() {
  return (
    <>
      <section className="section-competences">
        <div className="langages">
          <div className="langage-front_op">
            <h2>Opérationnels</h2>
            <div className="langage-front_op_logo">
              <img className="logo-lan-size" src={Logohtml} alt="html" />
              <img className="logo-lan-size" src={Logocss} alt="css" />
              <img className="logo-lan-size" src={Logosass} alt="sass" />
            </div>
          </div>
          <div className="langage-front_ap">
            <h2>Langage et librairies à perfectionner</h2>
            <div className="langage-front_ap_logo">
              <img className="logo-lan-size" src={Logojs} alt="javascript" />
              <img className="logo-lan-size" src={Logoreact} alt="react" />
              <img className="logo-lan-size" src={Logoredux} alt="redux" />
            </div>
          </div>
        </div>
        <div className="c-d">
          <h2>Connaissances diverses</h2>
          <div className="c-d-content">
            <img
              className="logo-comp-size"
              src={Logoswagger}
              alt="logo swagger"
            />
            <h3>Swagger</h3>
          </div>
          <div className="container-agile">
            <div className="c-d-content">
              <img
                className="logo-comp-size"
                src={Logoagile}
                alt="logo agile"
              />
              <h3>Méthode Agile</h3>
            </div>
            <div className="c-d-content_agile">
              <p>
                Initiée grâce à la réalisation d'un projet d'étude sur la
                gestion de projet &nbsp;
              </p>
              <Link
                to={require(`../../pdf/gestion-projet-em.pdf`)}
                target="_blank"
              >
                <img
                  className="logo-comp-size-small"
                  src={Linkprojet}
                  alt="logo lien vers projet"
                />
              </Link>
            </div>
          </div>
          <div className="container-seo">
            <div className="c-d-content">
              <img className="logo-comp-size" src={Logoseo} alt="logo seo" />
              <h3>Référencement</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Competences;
