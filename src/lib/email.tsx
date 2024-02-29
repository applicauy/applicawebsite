import nodemailer from "nodemailer";
import { Headers } from "nodemailer/lib/mailer";

export type EmailPayload = {
    to: string;
    subject: string;
    html?: string;
    text?: string;
    headers?: Headers;
};

const SMTP_OPTIONS = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "2525"),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
};

export const sendEmail = async (data: EmailPayload) => {
    const transporter = nodemailer.createTransport({
        ...SMTP_OPTIONS,
    });

    return await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        ...data,
    });
};
