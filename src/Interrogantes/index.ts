export const preguntaPrincipal = ({
  causa,
  interrogante,
  verbo,
  preposicion,
  problema,
  sujeto,
  contexto,
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

❌ Incorrecto: ¿Cómo experiencia laboral afecta desempleo estudiantes de ISAE Universidad?  
✅ Correcto: ¿Cómo *la* experiencia laboral afecta *el* desempleo *de los* estudiantes de ISAE Universidad?

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
¿${interrogante} + ${causa} + ${subcau} + ${sujeto} + de + ${contexto}?

---

7. **Pregunta Secundaria 2**  
¿${interrogante} + ${problema} + ${subProbl} + ${sujeto} + de + ${contexto}?

---

8. **Pregunta Secundaria 3**  
¿${interrogante} + ${causa} + ${preposicion} + y no + ${problema} + ${sujeto} + de + ${contexto}?

---

9. **Objetivo Específico 1**  
${verbo} + ${causa} + ${subcau} + ${sujeto} + de + ${contexto}

---

10. **Objetivo Específico 2**  
${verbo} + ${problema} + ${subProbl} + ${sujeto} + de + ${contexto}

---

11. **Objetivo Específico 3**  
${verbo} + ${causa} + ${preposicion} + y no + ${problema} + ${sujeto} + de + ${contexto}

---`
    : `
6. **Pregunta Secundaria 1**  
¿${interrogante} + ${causa} + ${sujeto} + de + ${contexto}?

---

7. **Pregunta Secundaria 2**  
¿${interrogante} + ${problema} + ${sujeto} + de + ${contexto}?

---

8. **Pregunta Secundaria 3**  
¿${interrogante} + ${causa} + ${preposicion} + y no + ${problema} + ${sujeto} + de + ${contexto}?

---

9. **Objetivo Específico 1**  
${verbo} + ${causa} + ${sujeto} + de + ${contexto}

---

10. **Objetivo Específico 2**  
${verbo} + ${problema} + ${sujeto} + de + ${contexto}

---

11. **Objetivo Específico 3**  
${verbo} + ${causa} + ${preposicion} + y no + ${problema} + ${sujeto} + de + ${contexto}

---`
}

📌 **Devuelve únicamente los resultados generados**, uno debajo del otro, separados por doble salto de línea.

📌 Antes de cada resultado, escribe el número y el nombre del componente.

📌 No expliques, no reformules, no justifiques. Solo genera las frases **correctas, naturales y académicas** a partir de las variables.
`;

  return instrucciones;
};
