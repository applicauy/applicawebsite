"use server";

import { ZodIssue, z } from "zod";
import { EmailPayload, sendEmail } from "@/lib/email";

/**
 * Field names used in the contact form.
 */
const FieldName = {
    NAME: "name",
    EMAIL: "email",
    PHONE: "phone",
    REFERRAL: "referral",
    MESSAGE: "message",
    SUBSCRIBE: "subscribe",
};

/**
 * Schema for validating the contact form data.
 */
const Schema = z.object({
    [FieldName.NAME]: z.string(),
    [FieldName.EMAIL]: z.string().email(),
    [FieldName.PHONE]: z
        .string()
        .regex(/^\+?[0-9]+$/, "Invalid phone format")
        .optional()
        .or(z.literal("")),
    [FieldName.REFERRAL]: z.string(),
    [FieldName.MESSAGE]: z.string(),
    [FieldName.SUBSCRIBE]: z.coerce.boolean(),
});

/**
 * Errors that can occur in the contact form data.
 */
export type FormDataErrors = z.inferFlattenedErrors<
    typeof Schema,
    { message: string; errorCode: string }
>;

/**
 * Response type for the contact form submission.
 */
export type Response = {
    /**
     * Indicates if the request was successful or not.
     */
    success: boolean;
    /**
     * A message to be displayed to the user.
     */
    message?: string;
    /**
     * Data related to the errors if the request was not successful.
     */
    errors?: FormDataErrors;
};

/**
 * Handler to process the contact request.
 * @param prevState The previous state.
 * @param formData The form data.
 * @returns A promise that resolves to the response of the contact request.
 */
export const handleContactRequest = async (
    prevState: any,
    formData: FormData,
): Promise<Response> => {
    // Parse the form data using the schema defined using Zod
    const validationResult = Schema.safeParse({
        [FieldName.NAME]: formData.get(FieldName.NAME),
        [FieldName.EMAIL]: formData.get(FieldName.EMAIL),
        [FieldName.PHONE]: formData.get(FieldName.PHONE),
        [FieldName.REFERRAL]: formData.get(FieldName.REFERRAL),
        [FieldName.MESSAGE]: formData.get(FieldName.MESSAGE),
        [FieldName.SUBSCRIBE]: formData.get(FieldName.SUBSCRIBE),
    });
    // If the form data is not valid, return the errors
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

    // Prepare the email payload
    const email: EmailPayload = {
        headers: {
            "Reply-To": validationResult.data[FieldName.EMAIL]?.toString()!,
        },
        subject: "New contact request from Applica Corp.'s website",
        html: `<div>
                <h1>Contact Request</h1>

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

    try {
        await sendEmail(email)

        return { success: true, message: "Contact request sent!" };
    } catch (err) {
        console.error(err);
        return { success: false, message: "Unable to send contact request." };
    }
};
