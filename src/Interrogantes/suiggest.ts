export const suggest = ({ causa, problema, sujeto, contexto, nivel }) => {
  const prompt = `
Actúa como experto en metodología de investigación científica bajo el enfoque MIIC.

Tu tarea es seleccionar los elementos más adecuados para formular los componentes clave de un proyecto académico, basándote en las **fórmulas MIIC**, el **nivel de investigación (${nivel})**, y los **elementos base** que te proporciono.

---

🔹 **Elementos base del proyecto**:
- Causa: ${causa}
- Problema: ${problema}
- Sujeto: ${sujeto}
- Contexto: ${contexto}

---

🔹 **Fórmulas MIIC**:

1. **Pregunta Principal de Investigación (PPI)**  
   → ¿[interrogante] + [causa] + [prep.] + [problema] + [prep.] + [sujeto] + [prep.] + [contexto]?

2. **Objetivo General**  
   → [verbo] + [causa] + [prep.] + [problema] + [prep.] + [sujeto] + [prep.] + [contexto]

3. **Preguntas Secundarias (i1, i2, i3)**  
   - i1: ¿[interrogante] + [causa] + (subcausas)?
   - i2: ¿[interrogante] + [problema] + (subproblemas)?
   - i3: ¿[interrogante] + [causa] + "y no" + [problema]?

4. **Objetivos Específicos**  
   - verboOE1: sobre la causa  
   - verboOE2: sobre el problema  
   - verboOE3: sobre la relación causa vs. problema

---

🔹 **Guía para elegir palabras interrogativas**:

| Nivel de investigación | Interrogantes más frecuentes                   |
|------------------------|------------------------------------------------|
| **Exploratorio**       | Qué, Quién, Cuándo, Dónde                      |
| **Descriptivo**        | Qué, Cuánto, Cuántos, Cómo                     |
| **Explicativo**        | Por qué, Cómo, En qué medida, Inferir          |

⚠️ **Importante:** No existen “interrogantes descriptivas” como categoría gramatical. Las palabras interrogativas no pertenecen a un nivel de investigación, pero su **uso sí varía** según el tipo de estudio.  
Por ejemplo:  
- En estudios **exploratorios**: se suele usar “qué”, “quién”, “dónde”.  
- En estudios **descriptivos**: son comunes “qué”, “cómo”, “cuánto”.  
- En estudios **explicativos**: predominan “por qué”, “en qué medida”.

---

🔹 **Verbos sugeridos según el nivel de investigación (${nivel})**:

**Exploratorio**:  
Conocer, Definir, Descubrir, Detectar, Estudiar, Explorar, Indagar, Sondear

**Descriptivo**:  
Analizar, Calcular, Caracterizar, Clasificar, Comparar, Cuantificar, Describir, Examinar, Identificar, Medir

**Explicativo**:  
Comprobar, Demostrar, Determinar, Establecer, Evaluar, Explicar, Inferir, Relacionar, Verificar

---
- Una sola **preposición** para conectar **causa** y **problema**, seleccionada de la siguiente lista:

👉 Afecta, Influye, Incide, Repercute, Impacta, Relaciona, Asocia, Vincula, Depende, Determina, Condiciona, Provoca, Genera, Produce, Resulta, Conduce, Contribuye, Estimula, Facilita, Promueve, Refuerza, Modifica, Controla, Potencia, Explica, Justifica
---
🔹 **Instrucciones de salida**:
Selecciona:

- Una palabra interrogativa para la PPI
- Una para cada pregunta secundaria (i1, i2, i3)
- Un verbo para el objetivo general
- Tres verbos distintos para los objetivos específicos
- Una preposición adecuada para conectar "causa" y "problema"

---

🔸 **Devuelve SOLO este JSON (sin explicaciones ni texto adicional):**

{
  "ppi": "interrogante para la PPI según el nivel ${nivel}",
  "i1": "interrogante para la pregunta secundaria 1",
  "i2": "interrogante para la pregunta secundaria 2",
  "i3": "interrogante para la pregunta secundaria 3",
  "verbo": "verbo para objetivo general (${nivel})",
  "verboOE1": "verbo para objetivo específico 1 (${nivel})",
  "verboOE2": "verbo para objetivo específico 2 (${nivel})",
  "verboOE3": "verbo para objetivo específico 3 (${nivel})",
  "preposicionSugerida": "preposición más adecuada para conectar causa y problema"
}
`;
  return prompt;
};
