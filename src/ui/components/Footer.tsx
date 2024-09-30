import logoN from "../assets/logo-n.png";
import logoV from "../assets/logo-v.png";
import zmLogo from "../assets/zmLogo.png"
import { WhatsUpIcon,InstagramIcon,LinkedinIcon } from '../../assets/icons';



export const Footer = () => {
  const linkToInta=()=>{
    window.open('https://www.instagram.com/nutriendolavida/', '_blank');
  }

  const linkToLinkedin=()=>{
    window.open('https://www.linkedin.com/in/abril-agustina-sack-44642b142/', '_blank');
  }


  const linkToWhasap=()=>{
    window.open('https://wa.me/5491124649493/', '_blank');
  }

  const linkToMail=()=>{
    window.open('mailto:nutriendolavida.salud@gmail.com', '_blank');
  }


  const linkToZmDevs=()=>{
    window.open('https://www.zmdevs.com/', '_blank');
  }
 
  return (
    <footer>
       <div className='footer-top-container'>
        <div className='footer-top-left-container'>
        <div className='fotter-images-container'>
          <div className='logo-container'><img src={logoN} alt="letter N" /><img src={logoV} alt="letter V" /></div>
       <h6>Nutriendo la vida</h6>
        </div>
        <div className='fotter-info-container'>
          <h6>CONTACTO</h6>
          <div className='info-container-item' onClick={linkToMail}><WhatsUpIcon/><p>nutriendolavida.salud@gmail.com</p></div>
          <div className='info-container-item' onClick={linkToWhasap}><WhatsUpIcon/><p>11 598202980</p></div>
        </div>
        </div>
        <div className='fotter-socialMedia-container'>
        <div className='socialMedia-container-item' onClick={linkToInta}><InstagramIcon/></div>
        <div className='socialMedia-container-item' onClick={linkToLinkedin}><LinkedinIcon/></div>
        </div>
       </div>
       <div className='footer-bottom-container'>
        <p>© Abril Sack, todos los derechos reservados</p>
        <div onClick={linkToZmDevs} className="zm-container"><p>Desarrollado por</p>
        <img src={zmLogo} alt="zm Logo" />
        </div>
        
       </div>
    </footer>
  )
}
