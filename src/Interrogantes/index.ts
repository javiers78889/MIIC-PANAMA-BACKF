export const preguntaPrincipal = ({ causa, verbo, preposicion, problema, sujeto, contexto }) => {
  const instrucciones: string = `
  
  Genera una [Pregunta Principal de Investigación (P.P.I)] siguiendo esta fórmula estrictamente:
  ¿ + Interrogante + causa + preposicion + problema + Sujeto de estudio + de + Contexto + ?
  
  **Condiciones:**
  - Usa una interrogante cerrada: ¿Por qué?, ¿Cómo?, ¿Qué impacto tiene?, ¿Qué relación existe entre?, ¿En qué medida?
  - Usa un verbo adecuado según el tipo de relación (ej: influye en, afecta, determina, se relaciona con, impacta en).
  - No incluyas explicaciones ni texto adicional.
  - No uses expresiones como "en el contexto de".
  - No agregues palabras que no estén explícitamente en las variables.
  
  **Variables:**
  - causa = ${causa}
  - preposicion = ${preposicion}
  - problema = ${problema}
  - sujeto de estudio = ${sujeto}
  - contexto = ${contexto}
  
  Devuelve únicamente la pregunta completa.
  
  ---
  
  Genera una [Hipótesis] siguiendo estrictamente esta fórmula:  
  artículo (ejemplo: "el", "la", "los", "las") + causa + preposicion + problema + sujeto de estudio + de + contexto.
  
  **Condiciones:**
  - No incluyas explicaciones adicionales.
  - No uses la expresión "en el contexto".
  - No agregues palabras que no estén explícitamente en las variables.
  - Usa el mismo verbo que en la Pregunta Principal.
  
  **Variables:**
  - causa = ${causa}
  - preposición = ${preposicion}
  - problema = ${problema}
  - sujeto de estudio = ${sujeto}
  - contexto = ${contexto}
  
  ---
  
  Genera una [Hipótesis nula] usando la fórmula de manera estricta:  
  artículo (ejemplo: "el", "la", "los", "las") + causa + no + preposicion  + problema + sujeto de estudio + de + contexto.
  
  **Condiciones:**
  - Devuelve sin explicaciones adicionales.
  - No digas "en el contexto".
  - No agregues palabras de más.
  
  ---
  
  Genera un [Objetivo General] siguiendo estrictamente esta fórmula:  
  verbo + causa + preposición + problema + sujeto de estudio + "de" + contexto.
  
  **Condiciones:**
  - Usa un verbo adecuado según el tipo de relación.
  - Utiliza una preposición adecuada según el tipo de relación.
  - No incluyas explicaciones ni texto adicional.
  - No uses expresiones como "en el contexto de".
  - No agregues palabras que no estén explícitamente en las variables.
  
  
  
  **Variables:**
  - problema = ${problema}
  - preposición = ${preposicion}
  - verbo = ${verbo}
  - causa = ${causa}
  - sujeto de estudio = ${sujeto}
  - contexto = ${contexto}
  
  ---
  
  Genera un [Título] siguiendo esta fórmula de manera estricta:  
  causa + y + problema + sujeto de estudio + de + contexto.
  
  **Condiciones:**
  - Devuelve sin explicaciones adicionales.
  - No digas "en el contexto".
  - No agregues palabras de más.
  
  **Variables:**
  - causa = ${causa}
  - problema = ${problema}
  - sujeto de estudio = ${sujeto}
  - contexto = ${contexto}
  

  a todo esto, hazle saltos de linea en react \n para que no se vea todo pegado.
  `;

  return instrucciones;
}

