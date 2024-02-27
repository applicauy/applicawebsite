"use server";

import { ZodIssue, z } from "zod";

const FieldName = {
    NAME: "name",
    EMAIL: "email",
    PHONE: "phone",
    REFERRAL: "referral",
    MESSAGE: "message",
};

const Schema = z.object({
    [FieldName.NAME]: z.string(),
    [FieldName.EMAIL]: z.string().email(),
    [FieldName.PHONE]: z.string().regex(/^\+?[0-9]+$/, "Invalid phone format"),
    [FieldName.REFERRAL]: z.string(),
    [FieldName.MESSAGE]: z.string(),
});

export type FormDataErrors = z.inferFlattenedErrors<
    typeof Schema,
    { message: string; errorCode: string }
>;

export const handleContactRequest = async (
    prevState: any,
    formData: FormData
): Promise<FormDataErrors | undefined> => {
    const validationResult = Schema.safeParse({
        [FieldName.NAME]: formData.get(FieldName.NAME),
        [FieldName.EMAIL]: formData.get(FieldName.EMAIL),
        [FieldName.PHONE]: formData.get(FieldName.PHONE),
        [FieldName.REFERRAL]: formData.get(FieldName.REFERRAL),
        [FieldName.MESSAGE]: formData.get(FieldName.MESSAGE),
    });

    if (!validationResult.success) {
        return validationResult.error.flatten((issue: ZodIssue) => ({
            message: issue.message,
            errorCode: issue.code,
        }));
    }

    // TODO: do something with the data
};
