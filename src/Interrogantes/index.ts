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
Genera los siguientes componentes de un proyecto de investigación académica utilizando las fórmulas indicadas. Es fundamental que cada enunciado:

✅ Siga **exactamente la estructura indicada**.  
✅ Use un **lenguaje natural, fluido y formal en español académico**.  
✅ Tenga **sentido lógico y coherencia semántica real**.  
✅ Use artículos definidos solo si son necesarios ("el", "la", "los", "las").  
🚫 No agregues explicaciones, conectores extra ni adornos.  
🚫 No reformules ni cambies el orden de las variables.  
🚫 No escribas “en el contexto de”.

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

📌 No expliques, no reformules, no justifiques. Usa solo las variables proporcionadas. Tu única tarea es construir frases **gramaticalmente correctas y con sentido académico**.

  `;

  return instrucciones;
};
