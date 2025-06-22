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
Genera los siguientes componentes de un proyecto de investigación académica **a partir de las variables proporcionadas**, respetando las fórmulas indicadas.

✅ Reglas de redacción:
- Usa las **fórmulas exactamente como están**.
- Redacta en **español académico**, con **coherencia y naturalidad**.
- Añade artículos definidos ("el", "la", "los", "las") y conectores mínimos **solo cuando sean necesarios**.
- Mantén el **orden lógico** de los elementos.

🚫 No expliques, no adornes, no reformules.
🚫 No incluyas frases como "en el contexto de".

---

📌 **Ejemplos de redacción correcta e incorrecta:**

❌ ¿Cómo experiencia laboral afecta desempleo estudiantes de ISAE Universidad?  
✅ ¿Cómo *la* experiencia laboral afecta *el* desempleo *de los* estudiantes de ISAE Universidad?

❌ Analizar cómo el conocimiento sobre la metodología limita la producción científica  
✅ Analizar el conocimiento sobre la metodología limita la producción científica

❌ Establecer cómo el conocimiento limita y no limita...  
✅ Establecer el conocimiento limita y no limita...

❌ ¿Qué conocimiento influye en el planteamiento...?  
✅ ¿Qué conocimiento en el planteamiento...?

---

🧩 **Componentes a generar** (usa las fórmulas con los valores proporcionados):

1. **Pregunta Principal de Investigación (P.P.I)**  
**Fórmula**: ¿${interrogante} + ${causa} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}?

2. **Objetivo General**  
**Fórmula**: ${verbo} + ${causa} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

3. **Título del Proyecto**  
**Fórmula**: ${causa} + y + ${problema} + ${sujeto} + de + ${contexto}

4. **Hipótesis**  
**Fórmula**: (artículo adecuado) + ${causa} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

5. **Hipótesis Nula**  
**Fórmula**: (artículo adecuado) + ${causa} + no + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

${
  subProbl && subcau
    ? `
6. **Pregunta Secundaria 1**  
¿${i1} + ${causa} + ${subcau} + ${sujeto} + de + ${contexto}?

7. **Pregunta Secundaria 2**  
¿${i2} + ${problema} + ${subProbl} + ${sujeto} + de + ${contexto}?

8. **Pregunta Secundaria 3**  
¿${i3} + ${causa} + ${preposicion} + y no + ${problema} + ${sujeto} + de + ${contexto}?

9. **Objetivo Específico 1**  
${v1} + ${causa} + ${subcau} + ${sujeto} + de + ${contexto}

10. **Objetivo Específico 2**  
${v2} + ${problema} + ${subProbl} + ${sujeto} + de + ${contexto}

11. **Objetivo Específico 3**  
${v3} + ${causa} + ${preposicion} + y no + ${problema} + ${sujeto} + de + ${contexto}
`
    : `
6. **Pregunta Secundaria 1**  
¿${i1} + ${causa} + ${sujeto} + de + ${contexto}?

7. **Pregunta Secundaria 2**  
¿${i2} + ${problema} + ${sujeto} + de + ${contexto}?

8. **Pregunta Secundaria 3**  
¿${i3} + ${causa} + ${preposicion} + y no + ${problema} + ${sujeto} + de + ${contexto}?

9. **Objetivo Específico 1**  
${v1} + ${causa} + ${sujeto} + de + ${contexto}

10. **Objetivo Específico 2**  
${v2} + ${problema} + ${sujeto} + de + ${contexto}

11. **Objetivo Específico 3**  
${v3} + ${causa} + ${preposicion} + y no + ${problema} + ${sujeto} + de + ${contexto}
`
}

---

📌 **Instrucciones finales**:
- Devuelve el resultado como un **objeto JSON**, con las claves de cada componente.
- Antes de cada valor, incluye el **número y el nombre del componente**.
- No expliques, no agregues comentarios.

`;

  return instrucciones;
};
