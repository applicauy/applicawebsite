"use client";

import Input from "@/components/input";
import Label from "@/components/label";
import TextArea from "@/components/textarea";
import { useFormState, useFormStatus } from "react-dom";
import { handleContactRequest, Response } from "./actions";
import Errors from "../_components/errors";
import Button from "@/components/button";
import { useEffect, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";

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

function Submit() {
    const { pending } = useFormStatus();
    return (
        <div className="mt-10 justify-between">
            <Button
                type="submit"
                highlightedArrow={!pending}
                disabled={pending}
            >
                Submit
            </Button>
        </div>
    );
}

export default function FormSection() {
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction] = useFormState(
        handleContactRequest,
        initialState,
    );

    useEffect(() => {
        if (!state.success) {
            return;
        }

        toast.success(state.message || "Contact request sent!", {
            duration: 3000,
        });

        formRef.current?.reset();
    }, [state.success, state.message]);

    return (
        <>
            <Toaster />

            <form
                action={formAction}
                className="grid grid-cols-1 gap-8"
                ref={formRef}
            >
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
                    <input name="subscribe" type="checkbox" />

                    <span>
                        I accept to receive news & communications from Applica
                        Corp.
                    </span>
                </label>

                <Submit />

                {/* <p>{state.message}</p> */}

                {/* <Script
                src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}&onload=test`}
            /> */}
            </form>
        </>
    );
}
