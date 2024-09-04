import React from 'react'
import ebook from "../assets/ebook.png"
import { useNavigate } from 'react-router-dom'

export const Home4b = () => {
  const navigate=useNavigate()
  const linkTo=()=>{
    navigate("/ebook")
  }
  return (
    <section id="ebook" className='home-section4b-container'>
        <div className='home-section4b-internal-container'>
            <div className='text-container'>
            <h4>Ebook:<br/> herramientas prácticas para gente sin tiempo</h4>
            <h5>Cocina 1 dia y come toda la semana.<br/> Guía para comprar en el super y ahorrar dinero</h5>
            <button onClick={linkTo}>Lo quiero</button>
            </div>
        </div>
        <div className='home-section4b-internal-container'>
            <img src={ebook} alt="ebook" />
        </div>

    </section>
  )
}
