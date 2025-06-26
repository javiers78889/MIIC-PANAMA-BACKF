export const suggest = ({ causa, problema, sujeto, contexto }) => {
  const prompt = `
Actúa como experto en metodología de investigación científica bajo el enfoque MIIC.

Tu tarea es seleccionar las opciones más adecuadas para formular componentes clave de un proyecto académico, según las **fórmulas MIIC** y los **elementos base** proporcionados.

---

📌 Elementos base del proyecto:
- Causa: ${causa}
- Problema: ${problema}
- Sujeto: ${sujeto}
- Contexto: ${contexto}

---

📌 Fórmulas MIIC clave a considerar:

1. **Pregunta Principal de Investigación (PPI)**  
   ¿[interrogante] + [causa] + [preposición] + [problema] + [preposición] + [sujeto] + [preposición] + [contexto]?

2. **Objetivo General**  
   [verbo] + [causa] + [preposición] + [problema] + [preposición] + [sujeto] + [preposición] + [contexto]

3. **Preguntas Secundarias (i1, i2, i3)**  
   - i1: [interrogante] + [causa] + (subcausas) + ...  
   - i2: [interrogante] + [problema] + (subproblemas) + ...  
   - i3: [interrogante] + [causa] + "y no" + [problema] + ...

4. **Objetivos Específicos (verboOE1, verboOE2, verboOE3)**  
   - verboOE1 → sobre la causa  
   - verboOE2 → sobre el problema  
   - verboOE3 → sobre causa vs. problema

---

📌 Guía para seleccionar palabras interrogativas:

| Interrogante     | Uso principal                                     |
|------------------|---------------------------------------------------|
| Qué              | Identificar, describir, caracterizar              |
| Cómo             | Examinar procesos, relaciones, mecanismos         |
| Por qué          | Analizar causas o explicaciones                   |
| Cuánto / Cuántos | Cuantificar o medir niveles o grados             |
| En qué medida    | Determinar intensidad de una relación             |
| Quién / Quiénes  | Determinar actores o responsables                 |
| Dónde / Cuándo   | Ubicar en tiempo o espacio                        |

---

📌 Elige también:

- Un **verbo** apropiado para el **objetivo general**, coherente con el tipo de estudio (descriptivo, explicativo, exploratorio, correlacional, etc.).
- Tres **verbos distintos** para los objetivos específicos, manteniendo coherencia con los elementos.
- Una sola **preposición** para conectar **causa** y **problema**, seleccionada de la siguiente lista:

👉 Afecta, Influye, Incide, Repercute, Impacta, Relaciona, Asocia, Vincula, Depende, Determina, Condiciona, Provoca, Genera, Produce, Resulta, Conduce, Contribuye, Estimula, Facilita, Promueve, Refuerza, Modifica, Controla, Potencia, Explica, Justifica

---

📦 **Devuelve únicamente este JSON sin explicaciones ni texto adicional, no digas,**:

{
  "ppi": "palabra interrogativa para la PPI",
  "i1": "palabra interrogativa para la pregunta secundaria 1",
  "i2": "palabra interrogativa para la pregunta secundaria 2",
  "i3": "palabra interrogativa para la pregunta secundaria 3",
  "verbo": "verbo para objetivo general",
  "verboOE1": "verbo para objetivo específico 1",
  "verboOE2": "verbo para objetivo específico 2",
  "verboOE3": "verbo para objetivo específico 3",
  "preposicionSugerida": "preposición más adecuada"
}
`;
  return prompt;
};
