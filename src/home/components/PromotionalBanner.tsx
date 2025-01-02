import { useNavigate } from "react-router";
import { useScrollReveal } from "../../hooks/useScrollReveal.context";
import banner from "../assets/detox_banner.webp";

export const PromotionalBanner = () => {
  const navigate = useNavigate();

  const linkTo = () => {
    navigate("reto-detox");
  };

  const refPromotionalBanner = useScrollReveal<HTMLDivElement>("efectoReveal");
  return (
    <div ref={refPromotionalBanner} className="banner-container">
      <img src={banner} alt={banner} />

      <div className="banner-center-container">
        <div className="banner-tittle-container">
          <hr />
          <h2>RETO 2025</h2>
          <hr />
        </div>

        <h3>Desafío Detox Revitalizante</h3>
        <p>
          Lograrás desinflamarte, desintoxicar tu
          <br /> cuerpo y bajar hasta 5kg en 10 días
        </p>

        <button onClick={linkTo} className="banner-botton">
          Lo Quiero
        </button>
      </div>

      {/* <div className='banner-botton-container'>
        <p>
          Contiene: Menú para cada día, lista de compras, opciones vegetarianas y sin gluten.
        </p>
      </div>*/}
    </div>
  );
};
