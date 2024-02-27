"use client";

import Input from "@/components/input";
import Label from "@/components/label";
import TextArea from "../../../components/textarea";
import { useFormState, useFormStatus } from "react-dom";
import { handleContactRequest, FormDataErrors } from "./actions";
import Errors from "../_components/errors";

const REFERRALS_VALUES = [
    "Google search",
    "Linkedin",
    "Instagram",
    "Clutch",
    "Referral",
];

const initialState: FormDataErrors = {
    formErrors: [],
    fieldErrors: {},
};

export default function FormSection() {
    const status = useFormStatus();

    const [state, formAction] = useFormState(
        handleContactRequest,
        initialState
    );

    return (
        <form action={formAction} className="grid grid-cols-1 gap-8">
            <div>
                <Label title="Name" required>
                    <Input name="name" type="text" required />
                </Label>

                {state?.fieldErrors.name && (
                    <Errors errors={state?.fieldErrors.name} />
                )}
            </div>

            <div>
                <Label title="Work email" required>
                    <Input name="email" type="email" required />
                </Label>

                {state?.fieldErrors.email && (
                    <Errors errors={state?.fieldErrors.email} />
                )}
            </div>

            <div>
                <Label title="Phone">
                    <Input name="phone" type="tel" />
                </Label>

                {state?.fieldErrors.phone && (
                    <Errors errors={state?.fieldErrors.phone} />
                )}
            </div>

            <div>
                <Label title="How did you heard about us?" required>
                    <Input
                        name="referral"
                        type="text"
                        datalistValues={REFERRALS_VALUES}
                        required
                    />
                </Label>

                {state?.fieldErrors.referral && (
                    <Errors errors={state?.fieldErrors.referral} />
                )}
            </div>

            <div>
                <Label title="Tell us about your needs" required>
                    <TextArea name="message" />
                </Label>

                {state?.fieldErrors.message && (
                    <Errors errors={state?.fieldErrors.message} />
                )}
            </div>

            <button type="submit" disabled={status.pending}>
                Submit
            </button>
        </form>
    );
}
