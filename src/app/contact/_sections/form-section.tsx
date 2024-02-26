import Input from "@/components/input";
import Label from "@/components/label";
import TextArea from "../../../components/textarea";

const REFERRALS_VALUES = [
    "Google search",
    "Linkedin",
    "Instagram",
    "Clutch",
    "Referral",
];

export default function FormSection() {
    const handleContactRequest = async (formData: FormData) => {
        "use server";

        // TODO Validate data and send the email
    };

    return (
        <form action={handleContactRequest} className="grid grid-cols-1 gap-8">
            <Label title="Name" required>
                <Input name="name" type="text" required />
            </Label>

            <Label title="Work email" required>
                <Input id="email" name="email" type="email" required />
            </Label>

            <Label title="Phone">
                <Input id="phone" name="phone" type="tel" />
            </Label>

            <Label title="How did you heard about us?" required>
                <Input
                    id="referral"
                    name="referral"
                    type="text"
                    datalistValues={REFERRALS_VALUES}
                    required
                />
            </Label>

            <Label title="Tell us about your needs" required>
                <TextArea />
            </Label>
        </form>
    );
}
