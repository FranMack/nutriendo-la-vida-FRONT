import { ReactNode, useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ShopingCartContext } from '../context/shopingCart.context';
import { Loading } from '../ui/page/Loading';

interface PrivateRouteProps {
  children: ReactNode;
}

export const CheckoutRoute = ({ children }: PrivateRouteProps) => {
  const { shopingCartItems } = useContext(ShopingCartContext);
  const [isCartLoaded, setIsCartLoaded] = useState(false); // Estado para verificar si el carrito ha sido cargado

  useEffect(() => {
    const shopingCartJSON = localStorage.getItem("shopingCart") || "[]";
    if (shopingCartJSON) {
      setIsCartLoaded(true); // Cambiar el estado cuando el carrito se ha cargado
    }
  }, []);

  // Esperar hasta que se cargue el carrito antes de hacer la verificación
  if (!isCartLoaded) {
    return(<Loading/>); // Podrías mostrar un loader si prefieres
  }

  return shopingCartItems.length > 0 ? (
    children
  ) : (
    <Navigate to="/#plans" />
  );
};
