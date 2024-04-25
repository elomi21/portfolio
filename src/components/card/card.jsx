import { Link } from "react-router-dom";
import Circle from "../../assets/logo/circle-down.svg"

function Card({ id, title, cover, langages }) {
  return (
    <>
      <li className="card" key={id}>
        <img
          src={require(`../../assets/img/cover/${cover}`)}
          alt={title}
          className="card-img"
        />
        <div className="card-description">
          <h1 className="card-description_title">{title}</h1>
          {langages && langages.length > 0 && (
            <div className="card-description_langage">
              {langages.map((langage, index) => (
                <img
                  className="card-description_langage_img"
                  key={index}
                  src={require(`../../assets/logo/${langage}`)}
                  alt="langages"
                />
              ))}
            </div>
          )}
        </div>
        <Link to="/" className="card-link">
          <p className="card-link_name">Découvrir le projet</p>
          <img className="card-link_logo" src={Circle} alt="logo circle" />
        </Link>
      </li>
    </>
  );
}
export default Card;
