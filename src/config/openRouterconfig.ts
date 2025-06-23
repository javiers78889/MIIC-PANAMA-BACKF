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


export default async function getChatCompletionq(instrucciones: string) {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "openai/gpt-4o-mini", // puedes cambiar por otro modelo de OpenRouter
            messages: [
             
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
//