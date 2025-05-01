import dotenv from 'dotenv'
import { InferenceClient } from "@huggingface/inference";

dotenv.config()
const Titulos=["pPrincipal","objPrincipal","titulo","hipotesis","hipotesis_nula"]


export default async function getChatCompletion(instrucciones: string[]) {


    const hf = new InferenceClient(process.env.HUGGINGFACE_API_KEY);

    const respuestas = await Promise.all(instrucciones.map(async (n, index) => {
        const data = await hf.chatCompletion({
            model: 'meta-llama/Llama-3.3-70B-Instruct',
            messages: [{
                role: "user",
                content: n
            }]
        });
         return { [Titulos[index]]: data.choices[0].message.content };
    }));
    console.log(respuestas);
    return respuestas;
}

