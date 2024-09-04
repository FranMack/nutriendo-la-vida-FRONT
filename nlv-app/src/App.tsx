import { Navbar,MobileNavbar } from "./ui/components";
import { Home } from "./home/views/Home";
import { Footer } from "./ui/components/Footer";
import { Route, Routes } from "react-router-dom";
import { Plan } from "./Plans/views/Plan";
import { Ebook } from "./Plans/views/Ebook";
import { TestResult } from "./Plans/views/TestResult";
import { QuestionaryTest } from "./questonaryTest/views/QuestionaryTest";
import { Checkout } from "./checkout/views/Checkout";
import { ShopingCart } from "./ui/components/ShopingCart";
import { ShopingCartContext } from "./context/shopingCart.context";
import { useContext, useEffect, useState } from "react";

function App() {

  const {shopingCartOpen,setShopingCartItems}=useContext(ShopingCartContext)

  useEffect(()=>{
    const shopingCartJSON = localStorage.getItem("shopingCart") || "[]";
    setShopingCartItems(JSON.parse(shopingCartJSON));
  },[])


  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleWindowSize = () => {
    setWindowSize(window.innerWidth);
  };
  window.addEventListener("resize", handleWindowSize);





  return (
    <>
  {windowSize>=1024 ? <Navbar />:<MobileNavbar/>}
   
     {shopingCartOpen && <ShopingCart/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan/:id" element={<Plan />} />
        <Route path="/test-result/:id" element={<TestResult />} />
        <Route path="/ebook" element={<Ebook />} />
        <Route path="/test" element={<QuestionaryTest />} />

        {/*VER: Ruta a la que solo se pueda acceder si hay productos en el shopiincart */}
        <Route path="/checkout" element={<Checkout />} />


      </Routes>
      

      <Footer />
    </>
  );
}

export default App;
