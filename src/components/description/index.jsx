import Github from "../../assets/logo/github-2.svg";
import LinkGitpages from "../../assets/logo/linkgit.svg";
import { Link } from "react-router-dom";

function Description({
  title,
  type_projet,
  description_projet,
  repository,
  lien,
}) {
  return (
    <div className="description">
      <div className="description-type">
        <h2>{title}</h2>
        <p className="description-p">{type_projet}</p>
        <p className="description-d_p">{description_projet}</p>
      </div>
      <div className="description-link">
        <Link to={repository} target="_blank">
          <img src={Github} alt="logo github" />
        </Link>
        {lien && (
          <Link to={lien} target="_blank">
            <img src={LinkGitpages} alt="logo lien" />
          </Link>
        )}
      </div>
    </div>
  );
}
export default Description;
