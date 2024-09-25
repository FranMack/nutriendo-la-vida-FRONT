import { useNavigate } from "react-router-dom";
import { CloseIcon, DeleteIcon } from "../../assets/icons";
import { useContext } from "react";
import { ShopingCartContext } from "../../context/shopingCart.context";
import { ShopingCartItemOptions } from "../../Plans/views/Plan";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ShopingCart() {
  const navigate = useNavigate();

  const { toggleMenu, shopingCartItems, setShopingCartItems } =
    useContext(ShopingCartContext);

  const totalPrice = () => {
    if (shopingCartItems.length === 0) {
      return 0; // Devuelve 0 si el carrito aún no ha cargado.
    }
    const plansPrice = shopingCartItems.reduce(
      (acc, item) => acc + item.price,
      0
    );
    const consultNumbers = shopingCartItems.filter((item) => {
      return item.consult === true;
    }).length;
    const total =
      plansPrice + consultNumbers * shopingCartItems[0].consultPrice;

    return total;
  };

  const deleteShopingCartItem = (id: number) => {
    if (shopingCartItems.length === 0) {
      return 0; // Devuelve 0 si el carrito aún no ha cargado.
    }
    const shopingCartUpdated = shopingCartItems.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    localStorage.setItem("shopingCart", JSON.stringify(shopingCartUpdated));
    setShopingCartItems(shopingCartUpdated);
  };

  const linkToCheckOut = () => {
    const shopingCartJSON = localStorage.getItem("shopingCart") || "[]";
    const shopingCart: ShopingCartItemOptions[] = JSON.parse(shopingCartJSON);
    if (shopingCart.length < 1) {
      toast.warning("Aún no has agregado productos al carrito");
      return;
    }
    navigate("checkout");
    toggleMenu();
  };

  return (
    <div className="shoping-cart-conteiner shopingCartReveal">
      <div className="shoping-cart-top-container">
        <div className="shoping-cart-title">
          <h4>
            Carrito de compras
            {shopingCartItems.length > 0 && ` (${shopingCartItems.length})`}
          </h4>
          <CloseIcon onClick={toggleMenu} />
        </div>
      </div>

      <div className="shoping-cart-center-container">
        {shopingCartItems.map((item) => {
          return (
            <div key={item.id} className="shoping-cart-card-container">
              <img src={item.image} alt={item.product} />
              <div className="card-info-container">
                <div className="card-title">
                  <DeleteIcon
                    onClick={() => {
                      deleteShopingCartItem(item.id);
                    }}
                  />
                </div>

                <h5>{item.product}</h5>
                <div className="card-price-container">
                  <div className="item-price-container">
                    <p>{item.product.includes("Ebook") ? "Ebook" : `Plan`}</p>
                    <strong>{`$ ${item.price}`}</strong>
                  </div>

                  {item.consult && (
                    <div className="item-price-container">
                      <p>Consulta profesional</p>
                      <strong>{`$ ${item.consultPrice}`}</strong>
                    </div>
                  )}

                  <div className="item-price-container">
                    <p>Subtotal</p>
                    <strong>{`$ ${
                      item.price + (item.consult ? item.consultPrice : 0)
                    }`}</strong>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="shoping-cart-botton-container">
        <hr />
        <div className="shoping-cart-botton-price-container">
          <p>Total a pagar:</p>
          <p>${totalPrice()}</p>
        </div>
        <div className="button-container">
        <button onClick={linkToCheckOut}>COMPRAR</button>
        <button onClick={toggleMenu}>SEGUIR NAVEGANDO</button>
        </div>
       

        <hr />
      </div>
    </div>
  );
}
