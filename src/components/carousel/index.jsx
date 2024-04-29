import { useState } from "react";
import Arrowleft from "../../assets/arrowL.svg";
import Arrowright from "../../assets/arrowR.svg";
import Card from "../card/card";
import Projetsdata from "../../projetsdata.json";

function Carousel() {
  const projetsdata = Projetsdata;
  const [currentCard, setCurrentCard] = useState(0);
  const totalCards = projetsdata.length;

  /* fonction pour l'affichage des photos au clic sur la fléche de gauche*/
  function PreviousCard() {
    currentCard > 0
      ? setCurrentCard(currentCard - 1)
      : setCurrentCard(totalCards - 1);
  }
  /* fonction pour l'affichage des photos au clic sur la fléche de droite*/
  function NextCard() {
    currentCard < totalCards - 1
      ? setCurrentCard(currentCard + 1)
      : setCurrentCard(0);
  }

  return (
    <>
      <section className="carousel">
        <div className="container-carousel">
          <img
            onClick={PreviousCard}
            className="c-sl-al"
            src={Arrowleft}
            alt="arrow_left"
          />
          <Card
            id={projetsdata[currentCard].id}
            title={projetsdata[currentCard].title}
            cover={projetsdata[currentCard].cover}
            langages={projetsdata[currentCard].langages}
          />
          <img
            onClick={NextCard}
            className="c-sl-ar"
            src={Arrowright}
            alt="arrow_rigth"
          />
        </div>
        <div className="c-sl-counter">
          {currentCard + 1}/{totalCards}
        </div>
      </section>
    </>
  );
}


export default Carousel;
