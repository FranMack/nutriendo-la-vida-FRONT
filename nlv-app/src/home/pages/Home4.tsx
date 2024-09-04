import React from 'react'
import { plans } from '../assets/plansData'
import { useNavigate } from 'react-router-dom'

export const Home4 = () => {
  const navigate=useNavigate();

  const linkTo=(path:string)=>{
    navigate(`/plan/${path}`)
  }

  return (
    <section id="plans" className="home-section4-container">
  <div className="home-section4-top-container">
        <h3>PLANES</h3>

        <h4>
        Elegi como queres empezar a<br /> cambiar tu vida
       
        </h4>
        <p>¡Elegí el plan que más se adapte a tus objetivos!
      </p>
      <p>  Todos los planes incluyen mediciones de porciones según tus requerimientos energéticos y proteicos, kit de menús saludables y deliciosas recetas para complementar tu cocina.</p>
      </div>
      <div className='home-section4-plans-container'>
        {plans.map((plan,i)=>{return(
          <div key={plan.title} className={i%2 ===0 ?'home-section-card-container':'home-section-card-container move-to-bottom'} style={{backgroundColor:plan.backgroundColor}}>
            <h4 style={{color:plan.color}}>
              {plan.title}
            </h4>
            <ul style={{color:plan.color}}>{plan.items.map((item)=>{
              return(<li>{item}</li>)
            })}</ul>
            <h5 style={{color:plan.color}}>{`$${plan.price}`}</h5>
            <div className='buttons-container'>
            <button onClick={()=>{linkTo(plan.id)}} style={{backgroundColor:plan.color}}>Lo quiero</button>
     
            </div>
          </div>
        )})}
      </div>
      
    </section>
  )
}
