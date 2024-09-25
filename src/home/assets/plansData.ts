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
      "Conseguiras un deficit calorico saludable para perder peso sin efecto rebote y manejando las emociones",
    ],
    price: 15000,
    color: "#677e28",
    backgroundColor: "#d5e7cc",
    id: "1",
  },
  {
    title: "Alimentación y rendimiento deportivo",
    items: [
      "Mejoraras tu rendimiento deportivo cada dia para aumentar tus musculos de manera natura, entrenando y alimentandote segun tu cuerpo",
    ],
    price: 15000,
    color: "#ae5e2d",
    backgroundColor: "#dcdecc",
    id: "2",
  },
  {
    title: "Cómo crear buenos hábitos alimenticios",
    items: [
      "Lograras modificar y sostener habitos en viajes, vacaciones, eventos sociales estableciendo prioridades, sin limitaciones y llegando a tus objetivos",
    ],
    price: 15000,
    color: "#178781",
    backgroundColor: "#bedfdd",
    id: "3",
  },
  {
    title: "Alimentación en pre y post menopausia",
    items: [
      " Alcanzaras un deficit calorico para potenciar la perdida de grasa, trabajando tus hormonas con los alimentos para prevenir los sintomas y sentirte mejor en esta etapa.",
    ],
    price: 15000,
    color: "#7d5aa4",
    backgroundColor: "#d3d9e5",
    id: "4",
  },
];
