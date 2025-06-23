export const preguntaPrincipal = ({
  causa,
  interrogante,
  verbo,
  preposicion,
  problema,
  sujeto,
  contexto,
  v1, v2, v3,
  i1, i2, i3,
  subproblemas = [],
  subcausas = [],
}) => {
  const subProbl = subproblemas.join(' + ');
  const subcau = subcausas.join(' + ');

  const instrucciones = `
Genera los siguientes componentes de un proyecto de investigación académica utilizando la metodología MIIC, siguiendo las fórmulas y lineamientos descritos.

✅ Usa **las variables exactamente como están proporcionadas**.  
✅ Redacta con **naturalidad y coherencia académica** en español.  
✅ Agrega **artículos definidos** ("el", "la", "los", "las") y **conectores** ("que", "cómo", "de qué manera") **solo cuando sea necesario para que la frase suene natural y académica**.  
✅ Respeta la **estructura lógica MIIC**: verbo + variable + sujeto + contexto.  
🚫 No expliques, no reformules, no adornes.  
🚫 No escribas “en el contexto de”.

---

📌 **Ejemplo correcto**:  
✅ ¿Qué conflictos familiares se asocian al consumo de cocaína de los jóvenes universitarios?

📌 **Ejemplo incorrecto**:  
❌ ¿Qué conflictos familiares afectan consumo cocaína jóvenes universitarios?

---

1. **Pregunta Principal de Investigación (P.P.I)**  
**Fórmula**: ¿${interrogante} + (artículo adecuado) + ${causa} + ${preposicion} + en +(artículo adecuado) + ${problema} + ${sujeto} + de + ${contexto}?

2. **Objetivo General**  
**Fórmula**: ${verbo} + (artículo adecuado) + ${causa} + que  + ${preposicion} + en + (artículo adecuado) + ${problema} + ${sujeto} + de + ${contexto}

3. **Título del Proyecto**  
**Fórmula**: (artículo adecuado) + ${causa} + y + (artículo adecuado) + ${problema} + ${sujeto} + de + ${contexto}

4. **Hipótesis**  
**Fórmula**: (artículo adecuado) + ${causa} + ${preposicion} + en + (artículo adecuado) + ${problema} + ${sujeto} + de + ${contexto}

5. **Hipótesis Nula**  
**Fórmula**: (artículo adecuado) + ${causa} + no + ${preposicion} + en + (artículo adecuado) + ${problema} + ${sujeto} + de + ${contexto}

${
  subProbl && subcau
    ? `
    """ sigue al pie de la letra la formula, no agregues elementos de mas"""
    
6. **Pregunta Secundaria 1**  
¿${i1} + (artículo adecuado) + ${causa} + ${subcau} + ${sujeto} + de + ${contexto}?

7. **Pregunta Secundaria 2**  
¿${i2} + (artículo adecuado) + ${problema} + ${subProbl} + ${sujeto} + de + ${contexto}?

8. **Pregunta Secundaria 3**  
¿${i3} + (artículo adecuado) + ${causa} + ${preposicion} + "y no" + ${preposicion} + en  + (artículo adecuado) + ${problema} + ${sujeto} + de + ${contexto}?

9. **Objetivo Específico 1**  
${v1} + (artículo adecuado) + ${causa} + ${subcau} + ${sujeto} + de + ${contexto}

10. **Objetivo Específico 2**  
${v2} + (artículo adecuado) + ${problema} + ${subProbl} + ${sujeto} + de + ${contexto}

11. **Objetivo Específico 3**  
${v3} + (artículo adecuado) + ${causa} + que + ${preposicion} + "y no" + ${preposicion} + en  + (artículo adecuado) + ${problema} + ${sujeto} + de + ${contexto}
`
    : `

    """ sigue al pie de la letra la formula, no agregues elementos de mas"""
6. **Pregunta Secundaria 1**  
¿${i1} + (artículo adecuado) + ${causa} + ${sujeto} + de + ${contexto}?

7. **Pregunta Secundaria 2**  
¿${i2} + (artículo adecuado) + ${problema} + en + ${sujeto} + de + ${contexto}?

8. **Pregunta Secundaria 3**  
¿${i3} + (artículo adecuado) + ${causa} + ${preposicion} + "y no" + ${preposicion} + en + (artículo adecuado) + ${problema} + ${sujeto} + de + ${contexto}?

9. **Objetivo Específico 1**  
${v1} + (artículo adecuado) + ${causa} + ${sujeto} + de + ${contexto}

10. **Objetivo Específico 2**  
${v2} + (artículo adecuado) + ${problema} + ${sujeto} + de + ${contexto}

11. **Objetivo Específico 3**  
${v3} + (artículo adecuado) + ${causa} + que + ${preposicion} + "y no" + ${preposicion} + en + (artículo adecuado) + ${problema} + ${sujeto} + de + ${contexto}
`
}

---

📌 **Devuelve todos los resultados en un solo objeto JSON**, con la siguiente estructura:

{
  "1. Pregunta Principal de Investigación": "...",
  "2. Objetivo General": "...",
  "3. Título del Proyecto": "...",
  "4. Hipótesis": "...",
  "5. Hipótesis Nula": "...",
  "6. Pregunta Secundaria 1": "...",
  "7. Pregunta Secundaria 2": "...",
  "8. Pregunta Secundaria 3": "...",
  "9. Objetivo Específico 1": "...",
  "10. Objetivo Específico 2": "...",
  "11. Objetivo Específico 3": "..."
}

📌 No expliques ni reformules. Solo genera frases académicas, naturales y correctas a partir de las variables.

`;

  return instrucciones;
};
