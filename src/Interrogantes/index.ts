export const preguntaPrincipal = ({ causa, interrogante, verbo, preposicion, problema, sujeto, contexto }) => {
  const instrucciones: string = `
Genera los siguientes cinco componentes de investigación académica.  
Usa exactamente las variables proporcionadas: **no agregues ni elimines palabras**.

---

**1. Pregunta Principal de Investigación (P.P.I)**  
**Fórmula:** ¿ + ${interrogante} + ${causa} + ${verbo} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto} + ?

**Condiciones:**
- Usa exactamente las variables, en ese orden.
- Redacción en español académico, natural y fluido.
- No agregues artículos ni conectores que no estén ya en las variables.
- Evita frases como "en el contexto de".

---

**2. Hipótesis**  
**Fórmula:** [Artículo adecuado si se requiere] + ${causa} + ${verbo} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

**Condiciones:**
- Mantén el verbo igual al de la P.P.I.
- No modifiques ni agregues palabras.
- Elige solo un artículo si es gramaticalmente necesario (por ejemplo, "La falta de recursos").

---

**3. Hipótesis Nula**  
**Fórmula:** [Artículo adecuado si se requiere] + ${causa} + no + ${verbo} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

**Condiciones:**
- Mismas reglas de la Hipótesis.
- La negación debe ser clara con “no”.

---

**4. Objetivo General**  
**Fórmula:** ${verbo} + ${causa} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

**Condiciones:**
- Mantén el orden y las palabras sin cambios.
- Redacción académica, clara y directa.
- No uses conectores innecesarios.

---

**5. Título del Proyecto**  
**Fórmula:** [Artículo adecuado si se requiere] + ${causa} + y + ${problema} + de + ${sujeto} + de + ${contexto}

**Condiciones:**
- Agrega artículos **solo si son necesarios** para que la frase suene natural.
- Redacción fluida, académica y sin adornos.

---

**Resultado esperado:**  
Devuelve **solamente los textos generados**, uno debajo del otro, **separados por doble salto de línea**.  
Cada uno debe iniciar con su título numerado exactamente como aparece aquí (del 1 al 5).  
**No incluyas comentarios, conectores ni explicaciones.**

---
`;

  return instrucciones;
};
