"use server";

import nodemailer from "nodemailer";
import { Headers } from "nodemailer/lib/mailer";

/**
 * Represents the payload for an email.
 */
export type EmailPayload = {
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

export const sendEmail = async (payload: EmailPayload) => {
    const transporter = nodemailer.createTransport({
        ...SMTP_OPTIONS,
    });

    await transporter.sendMail({
        ...payload,
        from: process.env.SMTP_FROM_EMAIL,
        to: process.env.SMTP_TO_EMAIL,
    });
};
