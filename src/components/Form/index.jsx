import LogoLD from "../../assets/logo/linkedin-icon-1.svg";
import logogit from "../../assets/logo/github-2.svg";
import { Link } from "react-router-dom";

function Form() {
  return (
    <section className="section-form ">
      <form className="section-form_form">
        <label htmlFor="name">Votre nom</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="message">Votre message</label>
        <textarea id="message" name="message"></textarea>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" required />
        <button type="submit" value="Envoyer">
          Envoyer
        </button>
      </form>
      <div className="social-media">
        <Link
          to="https://www.linkedin.com/in/elodie-mitaut-5606a0306"
          target="_blank"
        >
          <img src={LogoLD} alt="logo lien linkedin" />
        </Link>
        <Link to="https://github.com/elomi21" target="_blank">
          <img src={logogit} alt="logo lien github" />
        </Link>
      </div>
    </section>
  );
}
export default Form;
