import { useEffect } from 'react';
import { Home1,Home2,Home3,Home4,Home4b,Home5 } from '../pages'
import { useLocation } from 'react-router-dom';

export const Home = () => {

  const location = useLocation();
  useEffect(() => {
    localStorage.removeItem("test")
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  

  return (
    <main>
        <Home1/>
        <Home2/>
        <Home3/>
        <Home4/>
      <Home4b/>
        <Home5/>
    </main>
  )
}
