export const preguntaPrincipal = ({ causa, interrogante, verbo, preposicion, problema, sujeto, contexto }) => {
  const instrucciones: string = `
Genera los siguientes componentes de investigación académica utilizando estrictamente las fórmulas dadas, pero asegurando que cada resultado tenga **coherencia, fluidez y naturalidad en español académico**, sin alterar el orden de los elementos ni agregar palabras extra.

---

1. Pregunta Principal de Investigación (P.P.I)  
Fórmula: ¿ + ${interrogante} + ${causa} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto} + ?

Condiciones:
- Usa exactamente las variables dadas.
- La redacción debe sonar natural en español formal, sin perder la estructura.
- No agregues explicaciones ni texto adicional.
- No uses expresiones como "en el contexto de".
- Usa artículos si es necesario(ejemplo: "el", "la", "los", "las",etc...). el que suene mas natural

---

2. Hipótesis  
Fórmula: artículo adecuado (ejemplo: "el", "la", "los", "las",etc...) + ${causa} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

Condiciones:
- Usa el mismo verbo que en la P.P.I.
- Mantén una redacción coherente y académica.
- No incluyas palabras que no estén en las variables.

---

3. Hipótesis Nula  
Fórmula: artículo adecuado + ${causa} + no + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

Condiciones:
- Sigue la misma estructura.
- Redacción fluida y clara.
- Sin explicaciones ni adiciones.

---

4. Objetivo General  
Fórmula: ${verbo} + ${causa} + ${preposicion} + ${problema} + ${sujeto} + de + ${contexto}

Condiciones:
- Claridad y naturalidad académica.
- Mantén la estructura exacta sin agregar conectores o palabras extra (como "cómo", "que", "para", etc.).
- No uses expresiones como “en el contexto”.
- No agregues elementos no incluidos en las variables.
- Usa artículos para darle sentido solo si es necesario.

---

5. Título del Proyecto  
Fórmula: ${causa} + y + ${problema} + ${sujeto} + de + ${contexto}

Condiciones:
- Usa una redacción clara, fluida y académica.
- No incluyas explicaciones ni adornos adicionales.

---

Devuelve solamente los textos generados, uno debajo del otro, separados por doble salto de línea.



Nota Importante= al inicio de cada generación colocales lo que estas generando con su respectivo número.
Nota Importante 2 = Siempre usa las variables que te paso 
  `;

  return instrucciones;
};
