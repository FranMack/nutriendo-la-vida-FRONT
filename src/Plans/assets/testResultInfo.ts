import { price } from "../../config/price"

interface TestResults{
   color:string,
   background:string,
    title:string,
    paragraph:string
    price:number,
    items:string[]
}


export const testResults:TestResults[]=[

    {color:"#757D1B",background:"#F3F5D6",title:"Baja de peso sin culpa ni restricciones",
        paragraph:"Conseguirás un descenso de peso exitoso con un déficit calórico saludable y sin tener efecto rebote. Donde trabajaremos las emociones para evitar la culpa y la frustración, reforzando la autoestima y la confianza.",
        price:price.plan,items:["Mediciones de porciones según tus requerimientos","Kit de menús saludables y deliciosas","Recetarios para complementar tu cocina"]
        
    },
    {color:"#C65921",background:"#FBEBD6",title:"Alimentación y rendimiento deportivo",paragraph:"Lograremos mejorar tu masa muscular de manera saludable, trabajando tus requerimientos según tu tipo de entrenamiento y composición corporal para llegar al 100% de tu potencial.",price:price.plan,items:["Mediciones de porciones según tus requerimientos","Kit de menús saludables y deliciosas","Recetarios para complementar tu cocina"]
        
    },
   
    {color:"#3D9EA4",background:"#D8ECE9",title:"Cómo crear buenos hábitos alimenticios",paragraph:"Aprenderás a modificar los hábitos negativos, establecer prioridades para disfrutar de viajes, vacaciones, eventos y fiestas, logrando que los hábitos saludables te acompañen para siempre.",price:price.plan,items:["Mediciones de porciones según tus requerimientos","Kit de menús saludables y deliciosas","Recetarios para complementar tu cocina"]
        
    },
    {color:"#8E54A9",background:"#F0E5F2",title:"Alimentación en pre y post menopausia",paragraph:"Conseguirás equilibrar tus hormonas con una alimentación saludable y adaptada a cada etapa en donde potenciaremos la pérdida de grasa con un déficit calórico conveniente y minimizando los síntomas asociados.",price:price.plan,items:["Mediciones de porciones según tus requerimientos","Kit de menús saludables y deliciosas","Recetarios para complementar tu cocina"]
        
    },
  





]
