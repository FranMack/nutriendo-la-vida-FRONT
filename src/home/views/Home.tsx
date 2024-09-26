import { useContext, useEffect, useRef } from 'react';
import { Home1, Home2, Home3, Home4, Home4b, Home5 } from '../pages';
import { useLocation } from 'react-router-dom';
import { MobileMenuContext } from '../../context/mobileMenuContext';

export const Home = () => {
  const location = useLocation();
  
  useEffect(() => {
    localStorage.removeItem("test");
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const { menuOpen } = useContext(MobileMenuContext);

  const refHome2 = useRef<HTMLDivElement>(null);
  const refHome3 = useRef<HTMLElement>(null);
  const refHome4 = useRef<HTMLElement>(null);
  const refHome4b = useRef<HTMLElement>(null);
  const refHome5 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHandler = () => {
      const triggerBottom = window.innerHeight;

      const home2 = refHome2.current;
      const home3 = refHome3.current;
      const home4 = refHome4.current;
      const home4b = refHome4b.current;
      const home5 = refHome5.current;

      if (home2) {
        const [home2Left, home2Right] = Array.from(home2.childNodes) as HTMLElement[];
        const topCoordinates = home2.getBoundingClientRect().top;
        if (home2Left && home2Right) {
          if (topCoordinates * 2 < triggerBottom) {
            home2Left.classList.add("leftReveal");
            home2Right.classList.add("rightReveal");
          } else if (topCoordinates > triggerBottom) {
            home2Left.classList.remove("leftReveal");
            home2Right.classList.remove("rightReveal");
          }
        }
      }

      if (home3) {
        const [home3Top, home3Bottom] = Array.from(home3.childNodes) as HTMLElement[];
        if (home3Top) {
          const topCoordinates = home3Top.getBoundingClientRect().top;
          if (topCoordinates < triggerBottom) {
            home3Top.classList.add("efectoReveal");
            home3Top.classList.remove("efectoRevealOut");
          } else if (topCoordinates > triggerBottom) {
            home3Top.classList.remove("efectoReveal");
            home3Top.classList.add("efectoRevealOut");
          }
        }

        if (home3Bottom) {
          const [home3Bottom1, home3Bottom2, home3Bottom3] = Array.from(home3Bottom.childNodes) as HTMLElement[];
          if (home3Bottom1) {
            const topCoordinates = home3Bottom1.getBoundingClientRect().top;
            if (topCoordinates < triggerBottom) {
              home3Bottom1.classList.add("leftReveal");
            } else if (topCoordinates > triggerBottom) {
              home3Bottom1.classList.remove("leftReveal");
            }
          }

          if (home3Bottom2) {
            const topCoordinates = home3Bottom2.getBoundingClientRect().top;
            if (topCoordinates < triggerBottom) {
              home3Bottom2.classList.add("rightReveal");
            } else if (topCoordinates > triggerBottom) {
              home3Bottom2.classList.remove("rightReveal");
            }
          }

          if (home3Bottom3) {
            const topCoordinates = home3Bottom3.getBoundingClientRect().top;
            if (topCoordinates < triggerBottom) {
              home3Bottom3.classList.add("leftReveal");
            } else if (topCoordinates > triggerBottom) {
              home3Bottom3.classList.remove("leftReveal");
            }
          }
        }
      }

      if (home4) {
        const [home4Top, home4Bottom] = Array.from(home4.childNodes) as HTMLElement[];
        if (home4Top) {
          const topCoordinates = home4Top.getBoundingClientRect().top;
          if (topCoordinates < triggerBottom) {
            home4Top.classList.add("efectoReveal");
            home4Top.classList.remove("efectoRevealOut");
          } else if (topCoordinates > triggerBottom) {
            home4Top.classList.remove("efectoReveal");
            home4Top.classList.add("efectoRevealOut");
          }
        }

        if (home4Bottom) {
          const topCoordinates = home4Bottom.getBoundingClientRect().top;
          if (topCoordinates < triggerBottom) {
            home4Bottom.classList.add("leftReveal");
          } else if (topCoordinates > triggerBottom) {
            home4Bottom.classList.remove("leftReveal");
          }
        }
      }

      if (home4b) {
        const [home4bLeft, home4bRight] = Array.from(home4b.childNodes) as HTMLElement[];
        const topCoordinates = home4b.getBoundingClientRect().top;
        if (home4bLeft && home4bRight) {
          if (topCoordinates * 2 < triggerBottom) {
            home4bLeft.classList.add("leftReveal");
            home4bRight.classList.add("rightReveal");
          } else if (topCoordinates > triggerBottom) {
            home4bLeft.classList.remove("leftReveal");
            home4bRight.classList.remove("rightReveal");
          }
        }
      }

      if (home5) {
        const topCoordinates = home5.getBoundingClientRect().top;
        if (topCoordinates < triggerBottom) {
          home5.classList.add("topReveal");
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler); // Limpia el evento al desmontar
    };
  }, []); // Solo ejecuta una vez, cuando se monta

  return (
    <main className={menuOpen ? "mobileModalOpen" : ""}>
      <Home1 />
      <Home2 reference={refHome2} />
      <Home3 reference={refHome3} />
      <Home4 reference={refHome4} />
      <Home4b reference={refHome4b} />
      <Home5 reference={refHome5} />
    </main>
  )}