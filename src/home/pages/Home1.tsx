import { useNavigate } from "react-router-dom";
import background from "../assets/background_home.webp";

export const Home1 = () => {
  const navigate = useNavigate();

  const linkToTest = () => {
    navigate("test");
  };
  const linkToPlans = () => {
    navigate("#plans");
  };
  return (
    <section id="home" className="home-section1-container">
      <img src={background} alt="background-fruits" />
      <div className="home-section1-center-container revealLogo">
        <h1>Decile adiós a las dietas, comé sin culpas y sentite renovada.</h1>
        <h2>
          Aprenderás a comer sin restricciones, adaptando tu alimentación a tus
          objetivos y estilo de vida.
        </h2>

        <div className="home-section1-button-container">
          <button onClick={linkToPlans}>Conocer planes</button>
          <button onClick={linkToTest}>Hacer el test</button>
        </div>
      </div>
    </section>
  );
};
