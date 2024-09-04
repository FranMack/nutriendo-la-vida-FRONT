import { useNavigate, useParams } from "react-router-dom";
import { testResults } from "../assets/testResultInfo"
import { useEffect, useState } from "react";

export const TestResult = () => {


  const navigate = useNavigate();

  const linkToPlans=()=>{
    navigate("/#plans")
  }
  const linkToTest=()=>{
    navigate("/test")
  }

  const { id } = useParams();

  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      setIndex(parseInt(id));
    }
  }, [id]);
  


  return (
    <section className='test-result-container' style={{backgroundColor:testResults[index-1].background}}>

        <div className='test-result-center-container' style={{borderColor:testResults[index-1].color}}>
            <div className='internal-container'>
            <h2 style={{color:testResults[index-1].color}}>PLANES</h2>
            <h3>{testResults[index-1].title}</h3>
            <p>{testResults[index-1].paragraph}</p>

            <button style={{backgroundColor:testResults[index-1].color}}>Lo quiero</button>
            <button className="button-transparent" style={{borderColor:testResults[index-1].color,color:testResults[index-1].color}} >Sumar consulta profesional</button>
            </div>

            <div className='internal-container'>
              <h4>El plan incluye:</h4>
              <ul>
                {testResults[index-1].items.map((item,i)=>{return(<li key={i}>
                  {item}
                </li>)})}
              </ul>
              <h5 style={{color:testResults[index-1].color}}>
              {`$${testResults[index-1].price} ARS`}
              </h5>
              <div className='bottom-container'>
                <span onClick={linkToTest}>Hacer nuevamente el test</span>
                <span onClick={linkToPlans}>Ver todos los planes</span>
              </div>

            </div>

        </div>

    </section>
  )
}
