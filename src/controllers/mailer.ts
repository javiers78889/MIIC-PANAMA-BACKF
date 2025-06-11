import envs from "../config/envs"
import transporter from "../config/nodmailer/nodemailer"

export class Mailer {



    static readonly sendEmail = async (mail: string, subject: string, text: string, token: string, motivo: string,path:string) => {
        console.log(`Correo enviado : ${mail} ${envs.EMAIL}`)
        try {


            await transporter.sendMail({
                from: envs.EMAIL,
                to: mail,
                subject,
                text,
                html: `
                <header style="background-color: black;" width="80px">
                    <img src="https://res.cloudinary.com/dkcwi8gob/image/upload/v1749616443/miic_asxe25.png" width="80px" height="80px"/>
                </header>

                <h5 style="font-size: 15px">Hola,el token para ${motivo} su cuenta es:</h5>

                <br/>

                <div style="
                    background-color: #f2f2f2;
                    padding: 10px 15px;
                    border-radius: 8px;
                    display: inline-block;
                    font-family: monospace;
                    font-size: 16px;
                    color: #333;
                    border: 1px solid #ddd;
                ">
                    ${token}
                </div>

                <br/><br/>

                <p>Enlace para validar cuenta: <a href="${envs.FRONTEND}/${path}">Validar</a></p>
            `


            })


        } catch (error) {
            console.log("Error al enviar el correo:", error);
        }



    }
}