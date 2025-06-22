export const suggest = ({ causa, problema, sujeto, contexto }) => {
  const instrucciones = `
Actúa como experto en metodología de investigación utilizando la estructura MIIC.

---

📌 **Parte 1: Interrogantes adecuadas según tipo de elemento**

Con base en los siguientes elementos:
- Causa: ${causa}
- Problema: ${problema}

Y la siguiente tabla de interrogantes y sus propósitos:

${Object.entries({
  "Qué": "Identificar, describir o definir un fenómeno, concepto, hecho o situación.",
  "Cuál": "Seleccionar o identificar elementos específicos dentro de un conjunto conocido.",
  "Cuáles": "Seleccionar o identificar elementos específicos dentro de un conjunto conocido.",
  "Cómo": "Indagar sobre el procedimiento, modo o proceso mediante el cual ocurre un fenómeno.",
  "Por qué": "Explicar causas, motivos o razones.",
  "Para qué": "Explorar finalidad o propósito.",
  "Quién": "Identificar personas involucradas.",
  "Quiénes": "Identificar grupos involucrados.",
  "Dónde": "Ubicar espacialmente un fenómeno.",
  "Cuándo": "Ubicar temporalmente un fenómeno.",
  "Cuánto": "Cuantificar elementos, niveles o frecuencias.",
  "Cuántos": "Cuantificar pluralidad.",
  "Con qué": "Indagar sobre medios o recursos.",
  "A través de qué": "Explorar canales o mecanismos.",
  "Hasta qué punto": "Evaluar el grado o intensidad.",
  "En qué medida": "Evaluar alcance o impacto.",
  "Bajo qué condiciones": "Explorar el contexto o entorno.",
  "Según quién": "Indagar percepciones u opiniones.",
  "De qué manera": "Indagar el estilo, forma o enfoque.",
  "Con quién": "Identificar actores o grupos.",
  "Desde dónde": "Explorar enfoque o perspectiva."
}).map(([k, v]) => `- ${k}: ${v}`).join('\n')}

Selecciona las mejores interrogantes para cada caso considerando:

✅ Si el concepto es cuantificable → usar: "Cuánto", "Cuántos", "En qué medida", etc.  
✅ Si describe un fenómeno → usar: "Qué", "Cómo", "De qué manera", etc.  
✅ Si busca causas → usar: "Por qué"  
🚫 No uses interrogantes que no correspondan a la naturaleza del término (por ejemplo, no uses “Cuánto” para conceptos cualitativos como “motivación”).

Solicito las interrogantes para:

0. **ppi** → Interrogante más adecuada para la **pregunta principal de investigación**, que relacione causa y problema.  
1. **i1** → Interrogante adecuada para formular una **pregunta secundaria sobre la causa**: (${causa}).  
2. **i2** → Interrogante adecuada para formular una **pregunta secundaria sobre el problema**: (${problema}).  
3. **i3** → Interrogante adecuada para una **pregunta secundaria que relacione causa y problema**.

🔤 Elige la interrogante para que tenga sentido en esta formula:
✅ Si el término representa una **variable cuantificable** como niveles, tasas, porcentajes (por ejemplo: desempleo, rendimiento, ingresos), entonces se pueden usar interrogantes como:  
- "Cuánto"  
- "Cuántos"  
- "En qué medida"  
- "Hasta qué punto"

- **Pregunta Secundaria 1**  
  ¿i1 + (artículo adecuado) + ${causa} + ${sujeto} + de + ${contexto}?

- **Pregunta Secundaria 2**  
  ¿i2 + (artículo adecuado) + ${problema} + ${sujeto} + de + ${contexto}?

- **Pregunta Secundaria 3**  
  ¿i3 + (artículo adecuado) + ${causa} + preposición + "y no" + preposición + (artículo adecuado) + ${problema} + ${sujeto} + de + ${contexto}?



---

📌 **Parte 2: Verbo para Objetivo General**

Sugiere el verbo más adecuado según el nivel de investigación implícito entre causa y problema:

- **Exploratorio**: Conocer, Definir, Descubrir, Detectar, Estudiar, Explorar, Indagar, Sondear.  
- **Descriptivo**: Analizar, Calcular, Caracterizar, Clasificar, Comparar, Cuantificar, Describir, Examinar, Identificar, Medir.  
- **Explicativo**: Comprobar, Demostrar, Determinar, Establecer, Evaluar, Explicar, Inferir, Relacionar, Verificar.

---

📌 **Parte 3: Verbos para objetivos específicos**

Sugiere un verbo apropiado (de los anteriores u otros si aplica) para los tres **Objetivos Específicos**, considerando el enfoque y relación entre causa, problema, sujeto y contexto.

---

📌 **Parte 4: Preposición sugerida**

Selecciona la **preposición** que mejor conecte causa y problema, basada en esta tabla semántica:

${[
  ["Afecta", "impacto positivo o negativo"],
  ["Influye", "acción que altera o modifica"],
  ["Incide", "efecto directo"],
  ["Repercute", "consecuencias indirectas"],
  ["Impacta", "efecto fuerte o significativo"],
  ["Relaciona", "vínculo entre dos elementos"],
  ["Asocia", "co-ocurrencia o coincidencia"],
  ["Vincula", "relación directa entre variables"],
  ["Depende", "subordinación o necesidad"],
  ["Determina", "define o fija comportamiento"],
  ["Condiciona", "impone límites o requisitos"],
  ["Provoca", "causa un efecto o cambio"],
  ["Genera", "produce un resultado"],
  ["Produce", "da lugar a un efecto observable"],
  ["Resulta", "consecuencia final"],
  ["Conduce", "lleva a un resultado"],
  ["Contribuye", "aporta al desarrollo de algo"],
  ["Estimula", "activa una respuesta"],
  ["Facilita", "hace más accesible"],
  ["Promueve", "favorece una acción"],
  ["Refuerza", "fortalece un fenómeno"],
  ["Modifica", "altera total o parcialmente"],
  ["Controla", "maneja o limita"],
  ["Potencia", "incrementa eficacia o capacidad"],
  ["Explica", "da razón o fundamento"],
  ["Justifica", "respalda con fundamento"]
].map(([verbo, definicion]) => `- ${verbo}: "${definicion}"`).join('\n')}

---

📦 Devuelve **únicamente** el siguiente JSON. No incluyas explicaciones ni texto adicional:
    """devuelve solo
{
  "ppi": "...",
  "i1": "...",
  "i2": "...",
  "i3": "...",
  "verbo": "...",
  "verboOE1": "...",
  "verboOE2": "...",
  "verboOE3": "...",
  "preposicionSugerida": "..."
}
`.trim();

  return instrucciones;
};



