"use server";

import { ZodIssue, z } from "zod";
import { EmailPayload, sendEmail } from "@/lib/email";

const FieldName = {
    NAME: "name",
    EMAIL: "email",
    PHONE: "phone",
    REFERRAL: "referral",
    MESSAGE: "message",
    SUBSCRIBE: "subscribe",
};

const Schema = z.object({
    [FieldName.NAME]: z.string(),
    [FieldName.EMAIL]: z.string().email(),
    [FieldName.PHONE]: z
        .string()
        .regex(/^\+?[0-9]+$/, "Invalid phone format")
        .optional(),
    [FieldName.REFERRAL]: z.string(),
    [FieldName.MESSAGE]: z.string(),
    [FieldName.SUBSCRIBE]: z.coerce.boolean(),
});

export type FormDataErrors = z.inferFlattenedErrors<
    typeof Schema,
    { message: string; errorCode: string }
>;

export type Response = {
    success: boolean;
    message?: string;
    errors?: FormDataErrors;
};

export const handleContactRequest = async (
    prevState: any,
    formData: FormData,
): Promise<Response> => {
    const validationResult = Schema.safeParse({
        [FieldName.NAME]: formData.get(FieldName.NAME),
        [FieldName.EMAIL]: formData.get(FieldName.EMAIL),
        [FieldName.PHONE]: formData.get(FieldName.PHONE),
        [FieldName.REFERRAL]: formData.get(FieldName.REFERRAL),
        [FieldName.MESSAGE]: formData.get(FieldName.MESSAGE),
        [FieldName.SUBSCRIBE]: formData.get(FieldName.SUBSCRIBE),
    });

    if (!validationResult.success) {
        return {
            errors: validationResult.error.flatten((issue: ZodIssue) => ({
                message: issue.message,
                errorCode: issue.code,
            })),
            message: "Form with errors!",
            success: false,
        };
    }

    const email: EmailPayload = {
        to: validationResult.data[FieldName.EMAIL]?.toString()!,
        headers: {
            "Reply-To": validationResult.data[FieldName.EMAIL]?.toString()!,
        },
        subject: "New contact request from Applica Corp.'s website",
        html: `<div>
                <h1>Received Data</h1>

                <ul>
                    <li>
                        <strong>Name:</strong> ${validationResult.data[FieldName.NAME]}
                    </li>
                    <li>
                        <strong>Email:</strong> ${validationResult.data[FieldName.EMAIL]}
                    </li>
                    <li>
                        <strong>Phone:</strong> ${validationResult.data[FieldName.PHONE]}
                    </li>
                    <li>
                        <strong>Referral:</strong> ${validationResult.data[FieldName.REFERRAL]}
                    </li>
                    <li>
                        <strong>Message:</strong> ${validationResult.data[FieldName.MESSAGE]}
                    </li>
                    <li>
                        <strong>Accepts to receive news & communications:</strong> ${validationResult.data[FieldName.SUBSCRIBE]}
                    </li>
                </ul>
            </div>`,
    };

    // await sendEmail(email);

    return { success: true, message: "Data validated successfully!" };
};
