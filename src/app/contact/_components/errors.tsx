
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Errors({
    errors,
}: {
    errors: { message: string; errorCode: string }[];
}) {
    return (
        <div className="flex flex-row gap-1 mt-1">
            {errors.map((e) => (
                <div key={e.errorCode} className="my-0 text-form-error flex flex-row items-center">
                    <ExclamationTriangleIcon className="h-7 w-7 mr-2 text-form-error" /> {e.message}
                </div>
            ))}
        </div>
    );
}
