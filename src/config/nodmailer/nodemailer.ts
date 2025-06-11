
import nodemailer from 'nodemailer';
import envs from '../envs';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: envs.EMAIL,
        pass: envs.PASS

    }
}) 


export default transporter;