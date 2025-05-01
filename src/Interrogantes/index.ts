export const preguntaPrincipal = ({ causa, problema, sujeto, contexto }) => {

    const instrucciones: string = `Genera una pregunta principal siguiendo esta fórmula de manera estricta: ¿Interrogante + causa + preposición + problema + sujeto de estudio + contexto? Solo devuelve la pregunta completa, sin explicaciones adicionales.no digas "en el contexto" y no agregues palabras de mas.
        
            Variables:
            - causa = ${causa}
            - problema = ${problema}
            - sujeto de estudio = ${sujeto}
            - contexto = ${contexto}`;

    const instruccionesDos = preguntasSecundarias({ problema, sujeto, contexto })
    const titulo = Titulo({ causa, problema, sujeto, contexto })
    const hipotesis = Hipotesis({ causa, problema, sujeto, contexto })
    const hipotesisN = HipotesisN({hipotesis})

    return [
        instrucciones,
        instruccionesDos,
        titulo,
        hipotesis,
        hipotesisN
    ]

}
export const preguntasSecundarias = ({ problema, sujeto, contexto }) => {

    const instrucciones: string = `Genera un objetivo general siguiendo esta fórmula de manera estricta: Verbo(usa taxonomia de bloom) + problema + preposición + problema + sujeto de estudio + contexto Solo devuelve la pregunta completa, sin explicaciones adicionales.no digas "en el contexto"y no agregues palabras de mas.
        
            Variables:
            - problema = ${problema}
            - sujeto de estudio = ${sujeto}
            - contexto = ${contexto}`;

    return instrucciones

}
export const Titulo = ({ causa, problema, sujeto, contexto }) => {

    const instrucciones: string = `Genera un titulo siguiendo esta fórmula de manera estricta= causa + y + problema + sujeto de estudio + contexto .devuelve  sin explicaciones adicionales.no digas "en el contexto" y no agregues palabras de mas.
        
            Variables:
            - causa = ${causa}
            -problema= ${problema}
            - sujeto de estudio = ${sujeto}
            - contexto = ${contexto}`;

    return instrucciones

}
export const Hipotesis = ({ causa, problema, sujeto, contexto }) => {

    const instrucciones: string = `Genera una hipotesis siguiendo esta fórmula de manera estricta= articulo(ejemplo:"el,la,los,las")  + causa + verbo(ejemplo:"afecta") + problema + sujeto de estudio + contexto .devuelve  sin explicaciones adicionales.no digas "en el contexto" y no agregues palabras de mas.
        
            Variables:
            - causa = ${causa}
            -problema= ${problema}
            - sujeto de estudio = ${sujeto}
            - contexto = ${contexto}`;

    return instrucciones

}
export const HipotesisN = ({ hipotesis }) => {

    const instrucciones: string = `Toma mi hipotesis y solo niegala usando la fórmula de manera estricta= articulo(ejemplo:"el,la,los,las")  + causa + no +verbo(ejemplo:"afecta") + problema + sujeto de estudio + contexto .devuelve  sin explicaciones adicionales.no digas "en el contexto" y no agregues palabras de mas.
        
            Variables:
            hipotesis ${hipotesis}`
    return instrucciones

}
