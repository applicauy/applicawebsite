"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleContactRequest, Response } from "./actions";
import Errors from "../_components/errors";
import Button from "@/components/button";
import { useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { apexFont } from "@/assets/fonts";
import MobileButton from "@/app/(mobile)/_components/mobile-button";

const REFERRALS_VALUES = [
    "Google Search",
    "LinkedIn",
    "Instagram",
    "Clutch",
    "Referral",
    "Other"
];

const initialState: Response = {
    success: false,
};

function Submit(  
    {
        isMobile,
        isLoading
    } :
    {
        isMobile : boolean;
        isLoading: boolean;
    }
) {
    const { pending } = useFormStatus();
    return (
        <div className={`${ isMobile ? 'mt-4' : 'mt-10' } justify-between`}>
            {
                isMobile ?
                    <MobileButton 
                        type="submit"
                        highlightedArrow={!pending}
                        disabled={pending}
                        isLoading={ isLoading }>
                        Submit
                    </MobileButton>
                    :
                    <Button
                        type="submit"
                        highlightedArrow={!pending}
                        disabled={pending}
                        isLoading={ isLoading }
                    >
                        Submit
                    </Button>
            }
            
        </div>
    );
}

export default function FormSection() {
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction] = useFormState(
        handleContactRequest,
        initialState,
    );
    const [formKey, setFormKey] = useState(0);
    const [isLoading, setIsLoading] = useState( false );

    const [isMobile, setIsMobile] = useState(false);

    const [width, setWidth] = useState(0);

    useEffect(() => {
      setWidth(window.innerWidth);
      setIsMobile( window.innerWidth < 800 );
    }, []);

    useEffect(() => {
        
        if (!state.success) {
            return;
        }

        toast.success(state.message || "Contact request sent!", {
            duration: 3000,
        });

        formRef.current?.reset();
        setIsLoading( false );
        setFormKey(prev => prev + 1);
        
    }, [state]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
    };

    return (
        <div className={`flex flex-row py-0 md:py-11 px-6 md:px-0 mdplus:px-24 lg:px-24 px-48-lg w-full mt-8 ${ ( width > 1000 && width < 1025 ) && 'px-24' } ${ ( width > 900 && width < 1000 ) && 'px-12' }`}>
            <Toaster />

            <form
                key = {formKey}
                action={formAction}
                onSubmit={handleSubmit}
                className={`w-full flex flex-col gap-5 ${ apexFont.className }`}
                ref={formRef}
            >
                <div className="flex flex-col md:flex-row w-full gap-5">
                    <div className="w-full md:w-1/2 mt-2 md:mt-0">
                        <span className="text-xl">Name <span className="text-red-500">*</span></span>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Your name" 
                            className="py-2 px-4 bg-transparent text-white rounded-md focus:ring-1 focus:ring-highlight focus:border-highlight w-full text-xl mt-2" 
                            required 
                        />
                    </div>
                    <div className="w-full md:w-1/2 mt-2 md:mt-0">
                        <span className="text-xl">Work e-mail <span className="text-red-500">*</span></span>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your work e-mail" 
                            className="py-2 px-4 bg-transparent text-white rounded-md focus:ring-1 focus:ring-highlight focus:border-highlight w-full text-xl mt-2" 
                            required 
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 w-full">
                    <div className="w-full md:w-1/2 mt-2 md:mt-0">
                        <span className="text-xl">Phone</span>
                        <input 
                            type="tel" 
                            name="phone"
                            placeholder="Your phone" 
                            className="py-2 px-4 bg-transparent text-white rounded-md focus:ring-1 focus:ring-highlight focus:border-highlight w-full text-xl mt-2" 
                        />
                    </div>
                    <div className="w-full md:w-1/2 mt-2 md:mt-0">
                        <span className="text-xl">How did you heart about us? <span className="text-red-500">*</span></span>
                        <select 
                            name="referral" 
                            className="py-2 px-4 bg-primary-bg text-white rounded-md focus:ring-1 focus:ring-highlight focus:border-highlight w-full text-xl mt-2" 
                            required
                            defaultValue=""
                        >
                            <option value="" disabled hidden>Select an option</option>
                            {
                                REFERRALS_VALUES.map(
                                    referral => <option value={ referral } key = { referral }>{ referral }</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className="w-full mt-2 md:mt-0">
                    <span className="text-xl">Tell us abut your needs <span className="text-red-500">*</span></span>
                    <textarea 
                        name="message" 
                        placeholder="Your answer" 
                        className="py-2 px-4 bg-transparent text-xl min-h-[50px] h-[150px] text-white rounded-md focus:ring-1 focus:ring-highlight focus:border-highlight mb-4 resize-y w-full mt-2" required />
                </div>
                <div className="w-full">
                    <input 
                        type="checkbox" 
                        name="subscribe" 
                        id="subscribe" 
                        className="w-5 h-5 text-highlight bg-white border-gray-600 rounded focus:ring-0 mb-2 mr-2" 
                    />
                    <label htmlFor="subscribe" className="text-xl text-white">
                        I accept to receive news & communications from Applica Corp.
                    </label>
                </div>
                <div className="flex w-full items-center justify-center">   
                    <Submit isMobile = { isMobile } isLoading = { isLoading } />                   
                </div>
                {/* <div>
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
                </label> */}

                {/* <p>{state.message}</p> */}

                {/* <Script
                src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}&onload=test`}
            /> */}
            </form>
        </div>
    );
}
