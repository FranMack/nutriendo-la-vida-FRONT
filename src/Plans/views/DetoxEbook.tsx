import { useContext, useEffect } from "react";
import { price } from "../../config/price";
import { ScreenSizeContext } from "../../context/screenSize.context";
import {
  ShopingCartContext,
  ShopingCartItemOptions,
} from "../../context/shopingCart.context";
import detoxtEbook from "../../home/assets/detox.webp";

const DetoxEbook = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toggleMenu, setShopingCartItems } = useContext(ShopingCartContext);
  const { screenWidth } = useContext(ScreenSizeContext);

  const addToShopingCart = () => {
    const shopingCartJSON = localStorage.getItem("shopingCart") || "[]";
    const shopingCart: ShopingCartItemOptions[] = JSON.parse(shopingCartJSON);

    const shopingCartNewItem: ShopingCartItemOptions = {
      id: 6,
      product: "Desafío Detox",
      price: price.detoxChallenge,
      image: detoxtEbook,
      consult: false,
      consultPrice: 0,
    };

    if (
      shopingCart.find((item) => {
        return item.id === 6;
      })
    ) {
      toggleMenu();
      return;
    }

    const shopingCartUpdate = [shopingCartNewItem, ...shopingCart];
    localStorage.setItem("shopingCart", JSON.stringify(shopingCartUpdate));
    setShopingCartItems(shopingCartUpdate);

    toggleMenu();
  };

  return (
    <section className="plan-container">
      <div className="plan-center-container leftReveal">
        <div className="plan-center-top-container">
          <h2>INICIO / DESAFÍO DETOX / TIENDA</h2>
        </div>
        <div className="plan-center-bottom-container">
          <div className="plan-image-container ebook">
            <img src={detoxtEbook} alt="food plate" />
          </div>
          <div className="plan-info-container">
            <h3>Desafío Detox Revitalizante</h3>
            <h4>{`$ ${price.detoxChallenge}`}</h4>
            <button onClick={addToShopingCart}>Agregar al carrito</button>
            {(screenWidth <= 680 || screenWidth > 1024) && (
              <div className="text-container">
                <h4>Descripción</h4>
                <p>
                  🌟 Descubre una versión más saludable y renovada de ti misma
                  en tan solo 10 días. Este desafío está diseñado especialmente
                  para ayudarte a:
                </p>
                <br />
                <p>
                  {" "}
                  Perder peso de forma natural al adoptar hábitos saludables y
                  disfrutar de alimentos deliciosos y nutritivos, lograrás
                  perder hasta 5 kilos en 10 días. Desintoxicar tu cuerpo,
                  eliminando toxinas acumuladas durante las fiestas y dándole un
                  respiro a tu sistema digestivo. Reducir la inflamación con
                  recetas basadas en ingredientes antiinflamatorios que te harán
                  sentir menos hinchada y con más energía.
                </p>
                <br />
                <p>
                  🔑 Incluye: un plan alimenticio con menús fáciles y recetas
                  rápidas, guía de preparación previa y frases motivadoras
                  diarias. 💪 Beneficios: menos hinchazón, piel radiante,
                  energía renovada y pérdida de peso visible. 📆 Comienza en
                  enero 2025, dura 10 días y es 100% online.
                </p>
              </div>
            )}
          </div>
        </div>

        {screenWidth > 680 && screenWidth <= 1024 && (
          <div className="text-container-horizontal-mobile">
            <h5>Descripción</h5>
            <p>
              Empieza el año con el pie derecho: nuestro plan detox te ayudara a
              desintoxicarte después de las fiestas, recuperar tu equilibrio y
              sentirte más ligero y saludable.
              <br /> Contiene: Menú para cada día, lista de compras, opciones
              vegetarianas y sin gluten.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DetoxEbook;
