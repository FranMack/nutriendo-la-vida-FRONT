import { ArrowLeft, ArrowRight } from "../../assets/icons";
import { ShopingCartContext } from "../../context/shopingCart.context";
import { plans } from "../assets/plansInfo";
import { useContext, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ScreenSizeContext } from "../../context/screenSize.context";



export interface ShopingCartItemOptions{
  id:number,
  product:string,
  price:number,
  image:string,
  consult:boolean,
  consultPrice:number
}



export const Plan = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [index, setIndex] = useState<number>(1);
  

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      setIndex(parseInt(id));
    }

  }, [id]);

  const handlerPage = (direction: string) => {
    if (direction === "next") {
      if (index < plans.length) {
        navigate(`/plan/${index + 1}`);
      }
      else{
        navigate(`/plan/${1}`);
      }
    } else {
      if (direction !== "next") {
        if(index>1){
          navigate(`/plan/${index - 1}`);
        }
        else{
          navigate(`/plan/${4}`);
        }
        
        
      }
    }
  };

  const {toggleMenu,shopingCartItems, setShopingCartItems}=useContext(ShopingCartContext)
  const {screenWidth}=useContext(ScreenSizeContext)


 

 



  const addToShopingCart=()=>{

    const shopingCartJSON = localStorage.getItem("shopingCart") || "[]";
    const shopingCart:ShopingCartItemOptions[] = JSON.parse(shopingCartJSON);

    const shopingCartNewItem:ShopingCartItemOptions = {
      id:index,
      product:plans[index-1].title,
      price:plans[index-1].price,
      image:plans[index - 1].image,
      consult:false,
      consultPrice:plans[index - 1].consultPrice
  
    };

    if(shopingCart.find((item)=>{return item.id===index})){

    
      toggleMenu()
      return
    }

    const shopingCartUpdate = [shopingCartNewItem, ...shopingCart];
    localStorage.setItem("shopingCart", JSON.stringify(shopingCartUpdate));
    setShopingCartItems(shopingCartUpdate)

    toggleMenu()


    
  }

    const consultState=()=>{

    return shopingCartItems.find((item)=>{ if(item.id===index && item.consult){return item}})
  }

  const handleConsult=()=>{
    const shopingCartJSON = localStorage.getItem("shopingCart") || "[]";
    const shopingCart:ShopingCartItemOptions[] = JSON.parse(shopingCartJSON);
    if(!shopingCart.find((item)=>{return item.id===index})){

      toast.warning("Debes agregar un plan al carrito y luego la consulta")
      return
    }

    const shopingCartUpdate=shopingCart.map((item)=>{
      if(item.id===index){
       
        return {...item,consult:!item.consult}
      }
      else{
        return item
      }
    })
    if(!consultState()){toast.success("Consulta agregada",{autoClose: 3000,
      hideProgressBar: true,style:{backgroundColor:"#c65921",color:"#ffff"}})}

      if(consultState()){toast.warning("Consulta cancelada",{autoClose: 3000,
        hideProgressBar: true,style:{backgroundColor:"#c65921",color:"#ffff"}})}

    

    localStorage.setItem("shopingCart", JSON.stringify(shopingCartUpdate));
    setShopingCartItems(shopingCartUpdate)
 

  }




  return (
    <section className="plan-container">
      <div className="plan-center-container leftReveal ">
        <div className="plan-center-top-container">
          <h2>INICIO / PLANES / TIENDA</h2>
          <div className="buttons-container">
            <button onClick={() => handlerPage("preious")}>
              <ArrowLeft />
              Anterior
            </button>
            <button onClick={() => handlerPage("next")}>
              Siguiente
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="plan-center-bottom-container">
          <div className="plan-image-container">
            <img src={plans[index - 1].image} alt="food plate" />
          </div>
          <div className="plan-info-container">
            <h3>{plans[index - 1].title}</h3>
            <h4>{consultState()?`$${plans[index - 1].price} + $${plans[index - 1].consultPrice} `:`$ ${plans[index - 1].price}`}</h4>
              <h4></h4>
            <button onClick={addToShopingCart}>Agregar al carrito</button>
            <button onClick={handleConsult} className="button-transparent">{consultState()?"Quitar consulta profesional":"Agregar consulta profesional"}</button>
          {(screenWidth<=680 || screenWidth>1024) &&   <div className="text-container">
              <h5>Descripción</h5>
              <p>
              {plans[index-1].paragraph}
              </p>
              <br />
              <p>
              Una vez que realices la compra, recibirás un formulario que me permitirá conocer mejor sobre tus hábitos y metas. En 48-72 horas, luego de completarlo, recibirás tu plan alimentario personalizado y guías para ayudarte a mantener tu nuevo estilo de vida.</p>
            </div>}
          </div>
        </div>
        {(screenWidth>680 && screenWidth<=1024) &&   <div className="text-container-horizontal-mobile">
              <h5>Descripción</h5>
              <p>
              {plans[index-1].paragraph}
              </p>
              <br />
              <p>
              Una vez que realices la compra, recibirás un formulario que me permitirá conocer mejor sobre tus hábitos y metas. En 48-72 horas, luego de completarlo, recibirás tu plan alimentario personalizado y guías para ayudarte a mantener tu nuevo estilo de vida.</p>
            </div>}
      </div>
    </section>
  );
};
