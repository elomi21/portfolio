import LogoLD from "../../assets/logo/linkedin-icon-1.svg";
import logogit from "../../assets/logo/github-2.svg";
import { Link } from "react-router-dom";

function Tally() {
  return (
    <section className="section-form-tally">
      <h2 className="section-form-tally_title">Formulaire de contact</h2>
      <iframe
        src="https://tally.so/embed/wMAq5p?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="228"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Contact form"
      ></iframe>

      <div className="social-media-tally">
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
export default Tally;
