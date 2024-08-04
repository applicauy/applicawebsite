/**
 * Represents the payload for an email.
 */
export type EmailPayload = {
    email: string;
    subject?: string;
    html: string;
    text?: string;
    headers?: Headers;
};
