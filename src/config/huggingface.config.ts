import dotenv from 'dotenv';
dotenv.config();
interface OpenRouterResponse {
    choices: {
        message: {
            content: string;
        };
    }[];
}
function limpiarThinkTags(texto: string): string {
    return texto.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
}


export default async function getChatCompletion(instrucciones: string) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENAIKEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "ft:gpt-4o-mini-2024-07-18:javier:expert-miic:BleVcdcw", // puedes cambiar por otro modelo de OpenRouter
            messages: [
                {
                    "role": "system",
                    "content": "Eres un asistente experto en investigación universitaria."
                },
                {
                    role: "user",
                    content: instrucciones
                }
            ]
        })
    });

    const json = await response.json() as OpenRouterResponse;

    const textoOriginal = json.choices[0]?.message?.content || '';
    const textoLimpio = limpiarThinkTags(textoOriginal);


    return textoLimpio;
}
