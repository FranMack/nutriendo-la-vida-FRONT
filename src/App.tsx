import { Navbar, MobileNavbar, MobileMenu } from "./ui/components";
import { Home } from "./home/views/Home";
import { Footer } from "./ui/components/Footer";
import { Route, Routes } from "react-router-dom";
import { Checkout } from "./checkout/views/Checkout";
import { ShopingCart } from "./ui/components/ShopingCart";
import { ShopingCartContext } from "./context/shopingCart.context";
import { ScreenSizeContext } from "./context/screenSize.context";
import { lazy, Suspense, useContext, useEffect } from "react";
import { CheckoutRoute } from "./routes/CheckoutRoute";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MobileMenuContext } from "./context/mobileMenuContext";
import { Loading } from "./ui/page/Loading";

const Plan = lazy(() => import("./Plans/views/Plan"));
const Ebook = lazy(() => import("./Plans/views/Ebook"));
const DetoxEbook = lazy(() => import("./Plans/views/DetoxEbook"));
const TestResult = lazy(() => import("./Plans/views/TestResult"));
const QuestionaryTest = lazy(
  () => import("./questonaryTest/views/QuestionaryTest")
);




function App() {
  const { shopingCartOpen, setShopingCartItems } =
    useContext(ShopingCartContext);
  const { menuRef, menuOpen, toggleMenu } = useContext(MobileMenuContext);

  useEffect(() => {
    const shopingCartJSON = localStorage.getItem("shopingCart") || "[]";
    setShopingCartItems(JSON.parse(shopingCartJSON));
  }, []);

  const { screenWidth, setScreenWidth } = useContext(ScreenSizeContext);

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    // Verificar si el menú está abierto y si el clic fue fuera del menú
    if (
      menuOpen &&
      target.id !== "menu-hamburguesa-icon" &&
      menuRef!.current &&
      !menuRef!.current.contains(target)
    ) {
      toggleMenu(); // Cerrar el menú
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside); // Cleanup cuando el componente se desmonte
    };
  }, [menuOpen]);

  return (
    <>
      {screenWidth >= 1024 ? <Navbar /> : <MobileNavbar />}

      {shopingCartOpen && <ShopingCart />}
      <MobileMenu />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        bodyStyle={{ fontSize: "1.5rem" }}
        transition={Slide}
      />

      <Routes>
        <Route path="/" element=
        {<Suspense fallback={<Loading />}><Home /></Suspense>} />
        <Route
          path="/plan/:id"
          element={
            <Suspense fallback={<Loading />}>
              <Plan />
            </Suspense>
          }
        />
        <Route
          path="/test-result/:id"
          element={
            <Suspense fallback={<Loading />}>
              <TestResult />
            </Suspense>
          }
        />
        <Route
          path="/ebook"
          element={
            <Suspense fallback={<Loading />}>
              <Ebook />
            </Suspense>
          }
        />
          <Route
          path="/reto-detox"
          element={
            <Suspense fallback={<Loading />}>
              <DetoxEbook />
            </Suspense>
          }
        />
        <Route
          path="/test"
          element={
            <Suspense fallback={<Loading />}>
              <QuestionaryTest />
            </Suspense>
          }
        />

        {/*VER: Ruta a la que solo se pueda acceder si hay productos en el shopiincart */}
        <Route
          path="/checkout"
          element={
            <CheckoutRoute>
               <Suspense fallback={<Loading />}>
              <Checkout />
              </Suspense>
            </CheckoutRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
