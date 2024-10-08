import { RefObject } from "react";
import profile from "../assets/abril.webp";
import { LazyImage } from "../../ui/components/LazyImage";

interface Home2Options {
  reference: RefObject<HTMLDivElement> | undefined;
}

 export const Home2 = ({ reference }: Home2Options) => {
  return (
    <section id="me" className="home-section2-container">
      <div ref={reference} className="home-section2-center-container  ">
        <div className="image-container efectoRevealOut">
          <LazyImage src={profile} alt="profile-image" />
        </div>
        <div className="text-container efectoRevealOut">
          <h3>QuiEn soy</h3>
          <h4>
            Soy Abril Sack, especialista
            <br /> en nutrición para la salud
            <br />de la mujer.
          </h4>
          <p>
          Como licenciada en nutrición, mi enfoque está dirigido a mujeres de 30 años en adelante que desean mejorar su relación con la comida, y buscan algo más que las dietas convencionales.
          </p>
          <p>
          Mi objetivo es ayudarte a adoptar hábitos sostenibles que permitan una mejor adherencia a largo plazo, evitando el temido efecto rebote. Quiero enseñarte a vivir de manera saludable sin restricciones, para que puedas sentirte auténtica y brindarte las herramientas necesarias para lograr el cuerpo que deseas y la salud que mereces.
          </p>
        </div>
      </div>
    </section>
  );
};



