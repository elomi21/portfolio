
// import { useState } from "react";
// import Arrowleft from "../../assets/arrowL.svg";
// import Arrowright from "../../assets/arrowR.svg";

function Carousel({ pictures, alt, cover }) {
//   const [curentPicture, setCurentPicture] = useState(0);
//   const totalPictures = pictures.length;

//   /* fonction pour l'affichage des photos au clic sur la fléche de gauche*/
//   function PreviousPicture() {
//     curentPicture > 0
//       ? setCurentPicture(curentPicture - 1)
//       : setCurentPicture(totalPictures - 1);
//   }
//   /* fonction pour l'affichage des photos au clic sur la fléche de droite*/
//   function NextPictures() {
//     curentPicture < totalPictures - 1
//       ? setCurentPicture(curentPicture + 1)
//       : setCurentPicture(0);
//   }

  return (
    <>
      {/* <div className="container-carousel">
        {pictures.length === 0 ? (
          <img className="k-sl-slide" src={cover} alt={alt} />
        ) : pictures.length === 1 ? (
          <img className="k-sl-slide" src={pictures[curentPicture]} alt={alt} />
        ) : (
          <div>
            <img
              onClick={PreviousPicture}
              className="k-sl-al"
              src={Arrowleft}
              alt="arrow_left"
            />

            <img
              className="k-sl-slide"
              src={pictures[curentPicture]}
              alt={alt}
            />
            <span className="k-sl-counter">
              {curentPicture + 1}/{totalPictures}
            </span>
            <img
              onClick={NextPictures}
              className="k-sl-ar"
              src={Arrowright}
              alt="arrow_rigth"
            />
          </div>
        )}
      </div> */}
    </>
  );
}

export default Carousel;
