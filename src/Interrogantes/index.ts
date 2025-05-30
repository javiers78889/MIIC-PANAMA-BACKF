export const preguntaPrincipal = ({ causa, interrogante, verbo, preposicion, problema, sujeto, contexto }) => {
  const instrucciones: string = `
Genera los siguientes componentes de investigación académica, utilizando **exclusivamente** las variables proporcionadas. Cada resultado debe tener **coherencia, fluidez y naturalidad en español académico**, sin alterar el orden de los elementos ni agregar palabras extra.

Asegúrate de incluir el **título de cada sección**, numerado del 1 al 5, seguido del resultado correspondiente.  
**No incluyas explicaciones, comentarios, conectores ni textos adicionales.**

---

1. Pregunta Principal de Investigación (P.P.I)  
**Fórmula:** ¿ + ${interrogante} + ${causa} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto} + ?

**Condiciones:**
- Usa **exactamente** las variables proporcionadas.
- Redacta en español académico, natural y fluido.
- **No alteres el orden** de los elementos.
- **No agregues expresiones** como "en el contexto de", ni ningún conector.
- Usa **artículos definidos** si son necesarios para que la frase tenga sentido (ej.: el, la, los, las).

---

2. Hipótesis  
**Fórmula:** [artículo adecuado] + ${causa} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

**Condiciones:**
- Usa el **mismo verbo implícito** que en la P.P.I (por contexto).
- Redacción académica, precisa y sin adornos.
- Solo se permite el artículo si es necesario para el sentido gramatical.

---

3. Hipótesis Nula  
**Fórmula:** [artículo adecuado] + ${causa} + **no** + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

**Condiciones:**
- Misma estructura que la hipótesis.
- Redacción clara, formal y directa.
- No agregues conectores ni palabras adicionales.

---

4. Objetivo General  
**Fórmula:** ${verbo} + ${causa} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

**Condiciones:**
- Mantén la estructura **idéntica** a la fórmula.
- Redacta en tono académico, directo y claro.
- No uses palabras como “cómo”, “para”, “que”, etc.
- Usa artículos solo si ayudan a la claridad gramatical.

---

5. Título del Proyecto  
**Fórmula:** ${causa} + y + ${problema} + ${sujeto} + de + ${contexto}

**Condiciones:**
- Redacción académica, clara y fluida.
- No incluyas comas, conectores ni explicaciones adicionales.
- Solo una línea.

---

**Resultado esperado:**  
Devuelve **únicamente** los cinco textos generados, uno debajo del otro, **separados por doble salto de línea**.  
Cada texto debe iniciar con su **título numerado**, exactamente como aparece en la fórmula.

---
`;

  return instrucciones;
};
