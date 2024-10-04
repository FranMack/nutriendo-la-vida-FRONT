interface PlansOpgions {
  "¿Cuál es tu edad?": "20-30 años" | string;
  "¿Perdiste peso y lo recuperaste varias veces?": "Si" | "No";
  "¿Te salteas varias comidas al día?": "Si" | "No";
  "¿Te cuesta organizarte a la hora de preparar las comidas?": "Si" | "No";
  "¿La mayoría de los días no sabes qué comer?": "Si" | "No";
  "¿Haces actividad física más de 3 veces por semana?": "Si" | "No";
  "¿Entrenas y te gustaría estar más marcada y fibrosa?": "Si" | "No";
  "¿Picoteas o comes por ansiedad entre comidas?": "Si" | "No";
  "¿Sí una vez te “salís de la dieta” pierdes el control total de las comidas?":
    | "Si"
    | "No";
  "¿Sentís que tenés grasa abdominal acumulada, y te cuesta mucho bajarla?":
    | "Si"
    | "No";
}

export function findYourPlan(plan: PlansOpgions) {
  if (plan["¿Cuál es tu edad?"] === "+ 50 años") {
    return 4;
  }

  if (
    plan["¿Haces actividad física más de 3 veces por semana?"] === "Si" &&
    plan["¿Entrenas y te gustaría estar más marcada y fibrosa?"] === "Si"
  ) {
    return 2;
  }

  if (
    plan["¿Te salteas varias comidas al día?"] === "Si" &&
    plan["¿Te cuesta organizarte a la hora de preparar las comidas?"] ===
      "Si" &&
    plan["¿La mayoría de los días no sabes qué comer?"] === "Si"
  ) {
    return 3;
  } else {
    return 1;
  }
}
