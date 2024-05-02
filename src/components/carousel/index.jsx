import { useState } from "react";
import Arrowleft from "../../assets/arrowL.svg";
import Arrowright from "../../assets/arrowR.svg";
import Card from "../card/card";
import Projetsdata from "../../projetsdata.json";
import Description from "../description";

function Carousel() {
  const projetsdata = Projetsdata;
  const [currentCard, setCurrentCard] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const totalCards = projetsdata.length;

  /* fonction pour l'affichage des photos au clic sur la fléche de gauche + sup du compo description*/
  function PreviousCard() {
    currentCard > 0
      ? setCurrentCard(currentCard - 1)
      : setCurrentCard(totalCards - 1);
    removeDescription();
  }
  /* fonction pour l'affichage des photos au clic sur la fléche de droite + sup du compo description*/
  function NextCard() {
    currentCard < totalCards - 1
      ? setCurrentCard(currentCard + 1)
      : setCurrentCard(0);
    removeDescription();
  }
  /* fonction pour soit afficher soit enlever le composant description*/
  function toggleDescription() {
    setShowDescription(!showDescription);
  }
  function removeDescription() {
    setShowDescription(false);
  }

  return (
    <>
      <section className="carousel">
        <img
          onClick={PreviousCard}
          className="c-sl-al"
          src={Arrowleft}
          alt="arrow_left"
        />
        <div className="container-carousel">
          <Card
            id={projetsdata[currentCard].id}
            title={projetsdata[currentCard].title}
            cover={projetsdata[currentCard].cover}
            langages={projetsdata[currentCard].langages}
            showmore={toggleDescription}
          />
        </div>
        <img
          onClick={NextCard}
          className="c-sl-ar"
          src={Arrowright}
          alt="arrow_rigth"
        />
      </section>
      <section>
        <div
          className={`section-description ${showDescription ? "visible" : ""}`}
        >
          {showDescription && (
            <Description
              title={projetsdata[currentCard].title}
              type_projet={projetsdata[currentCard].type_projet}
              description_projet={projetsdata[currentCard].description_projet}
              lien={projetsdata[currentCard].lien}
              repository={projetsdata[currentCard].repository}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default Carousel;
