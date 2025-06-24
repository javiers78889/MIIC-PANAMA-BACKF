export const suggest = ({ causa, problema, sujeto, contexto }) => {
  const prompt = `
Actúa como experto en metodología de investigación usando la estructura MIIC.

---

Elementos:
- Causa: ${causa}
- Problema: ${problema}
- Sujeto: ${sujeto}
- Contexto: ${contexto}

---

Tabla de interrogantes y sus propósitos:

- Qué: Identificar, describir o definir un fenómeno, concepto, hecho o situación.
- Cuánto / Cuántos / En qué medida / Hasta qué punto: Cuantificar elementos o niveles.
- Cómo / De qué manera: Indagar procesos o formas.
- Por qué: Explicar causas o motivos.
- Dónde / Cuándo: Ubicar espacial o temporalmente.
- Quién / Quiénes: Identificar personas o grupos.

---

Para cada campo ppi, i1, i2, i3, devuelve únicamente la **palabra interrogativa inicial** que mejor corresponda (por ejemplo: Qué, Cómo, Por qué, Cuánto), **sin signos de interrogación ni texto adicional**.

---

Sugiere además:

- verbo (objetivo general) — un verbo apropiado según el nivel de investigación (exploratorio, descriptivo, explicativo).
- verboOE1, verboOE2, verboOE3 (tres verbos para objetivos específicos) — verbos coherentes con la causa, problema, sujeto y contexto.
- preposicionSugerida — una sola preposición que mejor conecte causa y problema, escogida de esta lista:  
  Afecta, Influye, Incide, Repercute, Impacta, Relaciona, Asocia, Vincula, Depende, Determina, Condiciona, Provoca, Genera, Produce, Resulta, Conduce, Contribuye, Estimula, Facilita, Promueve, Refuerza, Modifica, Controla, Potencia, Explica, Justifica.

---

📦 Devuelve **únicamente** el siguiente JSON con los valores, sin ninguna explicación ni texto adicional:

{
  "ppi": "solo palabra interrogativa aquí",
  "i1": "solo palabra interrogativa aquí",
  "i2": "solo palabra interrogativa aquí",
  "i3": "solo palabra interrogativa aquí",
  "verbo": "solo verbo aquí",
  "verboOE1": "solo verbo aquí",
  "verboOE2": "solo verbo aquí",
  "verboOE3": "solo verbo aquí",
  "preposicionSugerida": "solo preposición aquí"
}
`;
  return prompt;
};
