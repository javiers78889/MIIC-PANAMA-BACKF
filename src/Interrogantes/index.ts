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
  const subProbl = subproblemas.join(' , ');
  const subcau = subcausas.join(' , ');

  const instrucciones = `
Genera los siguientes componentes de un proyecto de investigación académica utilizando la metodología MIIC, siguiendo las fórmulas y lineamientos descritos.

✅ Usa **las variables exactamente como están proporcionadas**.  
✅ Redacta con **naturalidad y coherencia académica** en español.  
✅ Agrega **artículos definidos** ("el", "la", "los", "las") y **conectores** ("que", "cómo", "de qué manera") **solo cuando sea necesario para que la frase suene natural y académica**.  
✅ Asegúrate de que **todos los sustantivos tengan su artículo definido si corresponde**.  
✅ Revisa la **concordancia de género y número** en sustantivos y adjetivos.  
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
**Fórmula**: ¿${interrogante} + {artículo (si es necesario)} + ${causa} + ${preposicion} + {preposicion (si es necesario)} + {artículo (si es necesario)} + ${problema} + {preposicion} + ${sujeto} + {preposicion} + {articulo}  ${contexto}?

2. **Objetivo General**  
**Fórmula**: ${verbo} + {artículo} +  ${causa} + {pronombre}  + ${preposicion} + {artículo} + ${problema} + {preposicion} + {artículo} + ${sujeto} + {preposicion} + {artículo} + ${contexto}

3. **Título del Proyecto**  
**Fórmula**: ${causa} + y + ${problema} + {preposición} + {artículo} + ${sujeto} + {preposición} + ${contexto}

4. **Hipótesis**  
**Fórmula**: {artículo} + ${causa} + ${preposicion} + {preposición} + {artículo} + ${problema} + {preposición} + {artículo} + ${sujeto} + {preposición} + {artículo} + ${contexto}

5. **Hipótesis Nula**  
**Fórmula**: {artículo} + ${causa} + no + ${preposicion} + {preposición} + {artículo} + ${problema} + {preposición} + {artículo} + ${sujeto} + {preposición} + {artículo} + ${contexto}

${
  subProbl && subcau
    ? `
    """ sigue al pie de la letra la fórmula, no agregues elementos de más """

6. **Pregunta Secundaria 1**  
¿${i1} + ${causa} + ${subcau} + {pronombre + verbo ejem:"se dan,se presentan ,presentan ,etc..." (solo si es necesario) } + {preposición} + {artículo} +  ${sujeto} + {preposición} + {artículo} + ${contexto}?

7. **Pregunta Secundaria 2**  
¿${i2} (artículo si es necesario) ${problema} ${subProbl} en ${sujeto} de ${contexto}?

8. **Pregunta Secundaria 3**  
¿${i3} (artículo si es necesario) ${causa} ${preposicion} "y no" ${preposicion} en (artículo si es necesario) ${problema} en ${sujeto} de ${contexto}?

9. **Objetivo Específico 1**  
${v1} (artículo si es necesario) ${causa} ${subcau} ${sujeto} de ${contexto}

10. **Objetivo Específico 2**  
${v2} (artículo si es necesario) ${problema} ${subProbl} ${sujeto} de ${contexto}

11. **Objetivo Específico 3**  
${v3} (artículo si es necesario) ${causa} que ${preposicion} "y no" ${preposicion} en (artículo si es necesario) ${problema} ${sujeto} de ${contexto}
`
    : `

    """ sigue al pie de la letra la fórmula, no agregues elementos de más """

6. **Pregunta Secundaria 1**  
¿${i1} + ${causa} + {pronombre (si es necesario solamente)} + {verbo} + {preposición (si es necesaria)} + {artículo} +  ${sujeto} + {preposición} + {artículo} + ${contexto}?

7. **Pregunta Secundaria 2**  
¿${i2} +{verbo (si es necesario)} + {articulo (si es necesario)} ${problema} + {preposición} +{artículo} + ${sujeto} de ${contexto}?

8. **Pregunta Secundaria 3**  
¿${i3} (artículo adecuado) ${causa} ${preposicion} "y no" ${preposicion} en (artículo si es necesario) ${problema} en ${sujeto} de ${contexto}?

9. **Objetivo Específico 1**  
${v1} (artículo si es necesario) ${causa} en ${sujeto} de ${contexto}

10. **Objetivo Específico 2**  
${v2} (artículo si es necesario) ${problema} en ${sujeto} de ${contexto}

11. **Objetivo Específico 3**  
${v3} (artículo si es necesario) ${causa} que ${preposicion} "y no" ${preposicion} en (artículo adecuado) ${problema} en ${sujeto} de ${contexto}
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

📌 Usa tus datos de entrenamiento para guiarte y formular correctamente.  
📌 Revisa género y número de los sustantivos para evitar errores gramaticales como “producción científico”.  
📌 No elimines artículos ni conectores si su omisión rompe la gramática o naturalidad.

`;

  return instrucciones;
};
