
import { useEffect, useState } from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader'

export const Loading = () => {


  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(true), 400); 

    return () => clearTimeout(timer); 
  }, []);


  return (
    <div className='loading-container'>

    { showLoader && <>
        <PacmanLoader  speedMultiplier={0.6} size={40} color={"#c65921"}   />
        <p>Loading</p>
        </>}
    </div>
  )
}
