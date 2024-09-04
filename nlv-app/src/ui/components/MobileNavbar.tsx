
import { ShopingIcon,MenuIcon } from "../../assets/icons"
import logoN from "../assets/logo-n.png"
import logoV from "../assets/logo-v.png"

import { useNavigate } from "react-router-dom"

export const MobileNavbar = () => {

  const navigate =useNavigate()
 

  const linkToHome=()=>{
    navigate("/")
  }


  return (
<nav className='mobile-navbar-container'>
  <div className="icon-container" onClick={()=>{}}>
    <MenuIcon/>
  </div>

  <div className="image-container">
 <img onClick={linkToHome} src={logoN} alt="logo-N" />
 <img onClick={linkToHome} src={logoV} alt="logo-V" />
  </div>

  <div className="icon-container" onClick={()=>{}}>
  <ShopingIcon/>
  </div>



</nav>
  )
}
