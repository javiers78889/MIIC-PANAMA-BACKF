export const preguntaPrincipal = ({
  causa,
  interrogante,
  verbo,
  preposicion,
  problema,
  sujeto,
  contexto,
  v1,v2,v3,
  i1,i2,i3,
  subproblemas = [],
  subcausas = [],
}) => {
  const subProbl = subproblemas.join(' + ');
  const subcau = subcausas.join(' + ');

  const instrucciones = `
Genera los siguientes componentes de un proyecto de investigación académica utilizando las fórmulas indicadas. Cada enunciado debe cumplir las siguientes condiciones:

✅ Sigue exactamente las fórmulas dadas, usando las variables proporcionadas.  
✅ Redacta con **coherencia, fluidez y naturalidad en español académico**.  
✅ Agrega **artículos definidos** ("el", "la", "los", "las") y **conectores gramaticales mínimos** ("cómo", "de qué manera", etc.) **solo cuando sean necesarios para que la oración tenga sentido y suene natural**.  
✅ Mantén el orden lógico de los elementos.  
🚫 No expliques, no reformules, no adornes.  
🚫 No escribas “en el contexto de”.

---

📌 **IMPORTANTE – Ejemplos de redacción correcta e incorrecta:**

❌ Incorrecto Pregunta Principal de Investigación (P.P.I): ¿Cómo experiencia laboral afecta desempleo estudiantes de ISAE Universidad?  
✅ Correcto Pregunta Principal de Investigación (P.P.I): ¿Cómo *la* experiencia laboral afecta *el* desempleo *de los* estudiantes de ISAE Universidad?

❌ Incorrecto Objetivo General: Analizar cómo el conocimiento sobre la metodología de la investigación limita la producción científica de los estudiantes universitarios 
✅ Correcto Objetivo General: Analizar el conocimiento sobre la metodología de la investigación limita la producción científica de los estudiantes universitarios



---

1. **Pregunta Principal de Investigación (P.P.I)**  
**Fórmula**: ¿${interrogante} + ${causa} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}?

---

2. **Objetivo General**  
**Fórmula**: ${verbo} + ${causa} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

---

3. **Título del Proyecto**  
**Fórmula**: ${causa} + y + ${problema} + ${sujeto} + de + ${contexto}

---

4. **Hipótesis**  
**Fórmula**: (artículo adecuado) + ${causa} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

---

5. **Hipótesis Nula**  
**Fórmula**: (artículo adecuado) + ${causa} + no + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

---

${
  subProbl && subcau
    ? `
6. **Pregunta Secundaria 1**  
¿${i1} + ${causa} + ${subcau} + ${preposicion} + ${sujeto} + de + ${contexto}?

---

7. **Pregunta Secundaria 2**  
¿${i2} + ${problema} + ${subProbl} + ${sujeto} + de + ${contexto}?

---

8. **Pregunta Secundaria 3**  
¿${i3} + ${causa} + ${preposicion} + y no + ${problema} + ${sujeto} + de + ${contexto}?

---

9. **Objetivo Específico 1**  
${v1} + ${causa} + ${subcau} + ${sujeto} + de + ${contexto}

---

10. **Objetivo Específico 2**  
${v2} + ${problema} + ${subProbl} + ${sujeto} + de + ${contexto}

---

11. **Objetivo Específico 3**  
${v3} + ${causa} + ${preposicion} + y no + ${problema} + ${sujeto} + de + ${contexto}

---`
    : `
6. **Pregunta Secundaria 1**  
¿${i1} + ${causa} + ${preposicion} + ${sujeto} + de + ${contexto}?

---

7. **Pregunta Secundaria 2**  
¿${i2} + ${problema} + ${sujeto} + de + ${contexto}?

---

8. **Pregunta Secundaria 3**  
¿${i3} + ${causa} + ${preposicion} + y no + ${problema} + ${sujeto} + de + ${contexto}?

---

9. **Objetivo Específico 1**  
${v1} + ${causa} + ${sujeto} + de + ${contexto}

---

10. **Objetivo Específico 2**  
${v2} + ${problema} + ${sujeto} + de + ${contexto}

---

11. **Objetivo Específico 3**  
${v3} + ${causa} + ${preposicion} + y no + ${problema} + ${sujeto} + de + ${contexto}

---`
}

📌 **Devuelve las respuestas como un solo objeto JSON con sus claves**,

📌 Antes de cada resultado, escribe el número y el nombre del componente.

📌 No expliques, no reformules, no justifiques. Solo genera las frases **correctas, naturales y académicas** a partir de las variables.



`;

  return instrucciones;
};
