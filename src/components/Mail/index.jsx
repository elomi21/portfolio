import LogoLD from "../../assets/logo/linkedin-icon-1.svg";
import logogit from "../../assets/logo/github-2.svg";
import logomail from "../../assets/logo/mail.svg";
import { Link } from "react-router-dom";

function Mail() {
  return (
    <section className="section-mail ">
      <h2>
        Pour me contacter,
        <br /> vous pouvez m'envoyer un e-mail ou aller sur mon profil Linkedin
      </h2>
      <Link to="mailto:mitautelodie@gmail.com">
        <img src={logomail} alt="logo mail" />
      </Link>
      <div className="social-media">
        <Link
          to="https://www.linkedin.com/in/elodie-mitaut-5606a0306"
          target="_blank"
        >
          <img src={LogoLD} alt="logo lien" />
        </Link>
        <Link to="https://github.com/elomi21" target="_blank">
          <img src={logogit} alt="logo lien" />
        </Link>
      </div>
    </section>
  );
}
export default Mail;
