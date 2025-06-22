export const suggest = ({ causa, problema, sujeto, contexto }) => {
  const instrucciones = `
Actúa como experto en metodología de investigación utilizando la estructura MIIC.

Parte 1: Con base en los siguientes elementos de un problema de investigación:
- Causa: ${causa}
- Problema: ${problema}

Y con base en esta lista de interrogantes con su propósito:

${Object.entries({
  "Qué": "Se utiliza para identificar, describir o definir un fenómeno, concepto, hecho o situación",
  "Cuál": "Se usa para seleccionar o identificar elementos específicos dentro de un conjunto conocido",
  "Cuáles": "Se usa para seleccionar o identificar elementos específicos dentro de un conjunto conocido",
  "Cómo": "Se enfoca en el procedimiento, la manera o el modo en que ocurre un fenómeno o proceso",
  "Por qué": "Busca explicar las causas, motivos o razones de un hecho o fenómeno",
  "Para qué": "Indaga sobre la finalidad o propósito de un hecho, acción o fenómeno",
  "Quién": "Se refiere a las personas involucradas en un hecho, fenómeno o situación",
  "Quiénes": "Se refiere a las personas involucradas en un hecho, fenómeno o situación",
  "Dónde": "Interroga sobre el lugar o espacio donde ocurre un hecho o fenómeno",
  "Cuándo": "Se refiere al momento o periodo temporal en el que ocurre un evento o situación",
  "Cuánto": "Se utiliza para cuantificar elementos, frecuencias, proporciones o niveles",
  "Cuántos": "Se utiliza para cuantificar elementos, frecuencias, proporciones o niveles",
  "Con qué": "Interroga sobre los recursos, herramientas o medios utilizados para realizar algo",
  "A través de qué": "Indaga sobre los canales, procesos o mecanismos por los cuales ocurre un fenómeno",
  "Hasta qué punto": "Permite evaluar el grado, intensidad o límite de un fenómeno o efecto",
  "En qué medida": "Se utiliza para analizar la proporción, impacto o alcance de algo",
  "Bajo qué condiciones": "Explora los contextos o situaciones específicas en las que se manifiesta un fenómeno",
  "Según quién": "Examina diferentes perspectivas, percepciones u opiniones sobre un tema",
  "De qué manera": "Variante de '¿Cómo?', más frecuente en investigaciones cualitativas, centrada en el enfoque o estilo del proceso",
  "Con quién": "Indaga sobre los actores o grupos con los que se lleva a cabo una acción o fenómeno",
  "Desde dónde": "Explora la perspectiva, enfoque o punto de partida desde el cual se observa o analiza un fenómeno"
}).map(([key, value]) => `- ${key}: ${value}`).join('\n')}

Selecciona las mejores interrogantes para los siguientes usos:

0. **ppi** → solo la Interrogante adecuada para formular la **pregunta principal de investigación**, que relacione **causa** (${causa}) y **problema** (${problema}).
1. **i1** → solo la Interrogante adecuada para formular una **pregunta secundaria sobre la causa** (${causa}).
2. **i2** → solo la Interrogante adecuada para formular una **pregunta secundaria sobre el problema** (${problema}).
3. **i3** →  solo la Interrogante adecuada para formular una **pregunta secundaria que relacione causa y problema**.

---

Parte 2: Utilizando la estructura MIIC y con base en los siguientes datos adicionales:
- Causa: ${causa}
- Problema: ${problema}
- Sujeto: ${sujeto}
- Contexto: ${contexto}

Sugiere el verbo más adecuado para formular el **objetivo general**, según el nivel de investigación (Exploratorio, Descriptivo o Explicativo).

Guíate con esta tabla:

- Nivel Exploratorio: Conocer, Definir, Descubrir, Detectar, Estudiar, Explorar, Indagar, Sondear.
- Nivel Descriptivo: Analizar, Calcular, Caracterizar, Clasificar, Comparar, Cuantificar, Describir, Examinar, Identificar, Medir.
- Nivel Explicativo: Comprobar, Demostrar, Determinar, Establecer, Evaluar, Explicar, Inferir, Relacionar, Verificar.

---

Parte 3: Para cada uno de los 3 **objetivos específicos** (Objetivo Específico 1, 2 y 3), sugiere un verbo de esta lista, tomando en cuenta la causa, problema, sujeto y contexto:

[... (lista de verbos específicos como ya tienes)]

---

Parte 4: Sugiere también la **preposición** más adecuada para formular los objetivos, basándote en el siguiente listado de verbos con su significado, y selecciona la preposición que mejor se adapte a la relación causa-problema en este caso:

- Afecta : "Indica que una variable tiene un impacto negativo o positivo sobre otra"
- Influye : "Expresa una acción que altera o modifica otra cosa"
- Incide : "Señala un efecto directo sobre algo específico"
- Repercute : "Denota consecuencias indirectas o secundarias"
- Impacta : "Indica un efecto fuerte o significativo"
- Relaciona : "Une dos elementos con algún tipo de vínculo"
- Asocia : "Conecta conceptos por coincidencia o co-ocurrencia"
- Vincula : "Establece una relación directa entre dos variables"
- Depende : "Muestra subordinación o necesidad de una variable respecto a otra"
- Determina : "Señala que una variable define o fija el valor o comportamiento de otra"
- Condiciona : "Indica que una variable impone límites o requisitos sobre otra"
- Provoca : "Causa un cambio, efecto o reacción"
- Genera : "Produce un resultado o consecuencia"
- Origina : "Señala el punto de partida o causa de un fenómeno"
- Produce : "Da lugar a un efecto observable"
- Resulta : "Expresa una consecuencia o desenlace"
- Deriva : "Indica que algo se obtiene o se origina de otra cosa"
- Conduce : "Muestra una dirección o consecuencia hacia algo"
- Contribuye : "Aporta a la formación o desarrollo de un resultado"
- Aporta : "Da un elemento que forma parte de un todo"
- Estimula : "Fomenta o activa una respuesta o proceso"
- Impulsa : "Promueve o acelera una acción o cambio"
- Mejora : "Indica un cambio positivo o favorable"
- Disminuye : "Reduce la cantidad, intensidad o frecuencia de algo"
- Obstaculiza : "Dificulta o impide el logro de un objetivo"
- Aumenta : "Incrementa la magnitud o frecuencia de algo"
- Reduce : "Disminuye en cantidad o intensidad"
- Facilita : "Hace más sencillo o accesible un proceso"
- Promueve : "Incentiva o favorece una acción o resultado"
- Refuerza : "Fortalece un efecto o comportamiento"
- Modifica : "Cambia parcial o totalmente una variable"
- Regula : "Controla o ajusta el funcionamiento de algo"
- Controla : "Impone límites o maneja un fenómeno"
- Potencia : "Incrementa la capacidad o eficacia de algo"
- Influencia : "Forma sustantivada de “influir”; denota capacidad de alterar"
- Explica : "Da razón o justificación de un fenómeno"
- Sustenta : "Apoya o da base teórica a una afirmación o proceso"
- Establece : "Fija relaciones, principios o conexiones"
- Limita : "Restringe o reduce la posibilidad de acción"
- Justifica : "Fundamenta o respalda una acción, hipótesis o resultado"

---

📌 Devuelve **únicamente** el siguiente JSON, sin explicaciones ni texto adicional:

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
