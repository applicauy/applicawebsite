import { NextResponse, NextRequest } from "next/server";
import { EmailPayload } from "@/lib/email";

const nodemailer = require("nodemailer");

const SMTP_OPTIONS = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "2525"),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
};

export async function POST(request: NextRequest) {
    const { email, html } = await request.json();

    const transporter = nodemailer.createTransport({
        ...SMTP_OPTIONS,
    });
    try {
        await transporter.sendMail({
            from: process.env.SMTP_FROM_EMAIL,
            to: process.env.SMTP_FROM_EMAIL,
            subject: "New contact request from Applica Corp.'s website",
            html: html,
        });

        return NextResponse.json({ message: "Success: email was sent" });
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}
