import { price } from "../../config/price";


export interface PlanOptions {
  title: string;
  items: string[];
  price: number;
  color: string;
  backgroundColor: string;
  id: string;
}




export const plans: PlanOptions[] = [
  {
    title: "Baja de peso sin culpa ni restricciones",
    items: [
      "Conseguirás un déficit calórico saludable para perder peso sin efecto rebote y manejando las emociones.",
    ],
    price: price.plan,
    color: "#677e28",
    backgroundColor: "#d5e7cc",
    id: "1",
  },
  {
    title: "Alimentación y rendimiento deportivo",
    items: [
      "Mejorarás tu rendimiento deportivo cada día para aumentar tus músculos de manera natural, entrenando y alimentándote según tu cuerpo.",
    ],
    price: price.plan,
    color: "#ae5e2d",
    backgroundColor: "#dcdecc",
    id: "2",
  },
  {
    title: "Cómo crear buenos hábitos alimenticios",
    items: [
      "Lograrás modificar y sostener hábitos en viajes, vacaciones, eventos sociales, estableciendo prioridades, sin limitaciones y llegando a tus objetivos.",
    ],
    price: price.plan,
    color: "#178781",
    backgroundColor: "#bedfdd",
    id: "3",
  },
  {
    title: "Alimentación en pre y post menopausia",
    items: [
      "Lograrás un déficit calórico que potenciará la pérdida de grasa, mientras equilibras tus hormonas a través de la alimentación, ayudando a prevenir los síntomas y mejorando tu bienestar en esta etapa.",
    ],
    price: price.plan,
    color: "#7d5aa4",
    backgroundColor: "#d3d9e5",
    id: "4",
  },
];
