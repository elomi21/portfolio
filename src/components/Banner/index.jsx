import Photoem from "../../assets/img/photo-em.webp";
import LogoLD from "../../assets/logo/linkedin-icon-1.svg";
import logogit from "../../assets/logo/github-2.svg";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <section className="s-b">
      <div className="s-b-c-ti">
        <div className="s-b-c-ti_t">
          <h1 className="s-b-c-ti_t_titre">
            Bonjour, <br />
            moi c'est <span>Elodie</span>
          </h1>
          <h2 className="s-b-c-ti_t_sous-titre">
            Je suis developpeuse web junior
          </h2>
          <p>
            Je suis spécialisée dans l'intégration de maquette et la réalisation de
            site web React.
          </p>
          <p>Je porte un fort intéret pour le web design.</p>
          <div className="s-b-c-ti_t_social-media">
            <Link
              to="https://www.linkedin.com/in/elodie-mitaut-5606a0306"
              target="_blank"
            >
              <img src={LogoLD} alt="lien linkedin" />
            </Link>
            <Link to="https://github.com/elomi21" target="_blank">
              <img src={logogit} alt="lien github" />
            </Link>
          </div>
        </div>
        <img className="s-b-img" src={Photoem} alt="Elodie mi" />
      </div>
    </section>
  );
}
export default Banner;
