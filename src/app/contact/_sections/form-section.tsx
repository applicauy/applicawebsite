"use client";

import Input from "@/components/input";
import Label from "@/components/label";
import TextArea from "@/components/textarea";
import { useFormState, useFormStatus } from "react-dom";
import { handleContactRequest, Response } from "./actions";
import Errors from "../_components/errors";
import Button from "@/components/button";
import { useEffect } from "react";
import Checkbox from "../../../components/checkbox";

const REFERRALS_VALUES = [
    "Google search",
    "Linkedin",
    "Instagram",
    "Clutch",
    "Referral",
];

const initialState: Response = {
    success: false,
};

export default function FormSection() {
    const status = useFormStatus();

    const [state, formAction] = useFormState(
        handleContactRequest,
        initialState,
    );

    useEffect(() => {
        if (!state.success) {
            return;
        }

        // TODO Show banner
    }, [state.success]);

    return (
        <form action={formAction} className="grid grid-cols-1 gap-8">
            <div>
                <Label title="Name" required>
                    <Input name="name" type="text" required />
                </Label>

                {state.errors?.fieldErrors.name && (
                    <Errors errors={state.errors?.fieldErrors.name} />
                )}
            </div>

            <div>
                <Label title="Work email" required>
                    <Input name="email" type="email" required />
                </Label>

                {state.errors?.fieldErrors.email && (
                    <Errors errors={state.errors?.fieldErrors.email} />
                )}
            </div>

            <div>
                <Label title="Phone">
                    <Input name="phone" type="tel" />
                </Label>

                {state.errors?.fieldErrors.phone && (
                    <Errors errors={state.errors?.fieldErrors.phone} />
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

                {state.errors?.fieldErrors.referral && (
                    <Errors errors={state.errors?.fieldErrors.referral} />
                )}
            </div>

            <div>
                <Label title="Tell us about your needs" required>
                    <TextArea name="message" required />
                </Label>

                {state.errors?.fieldErrors.message && (
                    <Errors errors={state.errors?.fieldErrors.message} />
                )}
            </div>

            <label className="flex items-center gap-2">
                <Checkbox name="subscribe" />

                <span>
                    I accept to receive news & communications from Applica Corp.
                </span>
            </label>

            <div className="mt-10 justify-between">
                <Button
                    type="submit"
                    disabled={status.pending}
                    arrowIconColor="var(--highlight-color)"
                >
                    Submit
                </Button>
            </div>

            <p>{state.message}</p>
        </form>
    );
}
