import dotenv from 'dotenv'
const infer = require('@huggingface/inference')

dotenv.config()
const Titulos = ["pPrincipal", "objPrincipal", "titulo", "hipotesis", "hipotesis_nula"]


export default async function getChatCompletion(instrucciones: string) {

    const { InferenceClient } = infer
    const hf = new InferenceClient(process.env.HUGGINGFACE_API_KEY);


        const data = await hf.textGeneration({
            model: 'Qwen/Qwen2-72B-Instruct',
            messages: [{
                role: "user",
                content: instrucciones
            }]
        });
 
 
    console.log(data)
    return data.choices[0].message.content;
}

