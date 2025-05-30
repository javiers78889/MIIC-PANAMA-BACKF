import dotenv from 'dotenv'
const infer = require('@huggingface/inference')

dotenv.config()
function limpiarThinkTags(texto: string): string {
    return texto.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
}

export default async function getChatCompletion(instrucciones: string) {

    const { InferenceClient } = infer
    const hf = new InferenceClient(process.env.HUGGINGFACE_API_KEY);


    const data = await hf.chatCompletion({
        provider: "cerebras",
        model: 'Qwen/Qwen3-32B',
        messages: [{
            role: "user",
            content: instrucciones
        }]
    });


    const textoOriginal = data.choices[0].message.content;
    const textoLimpio = limpiarThinkTags(textoOriginal);

    console.log(textoLimpio);
    return textoLimpio;
}

