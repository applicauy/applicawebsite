/**
 * Renders a list of errors.
 *
 * @component
 * @param {Object[]} errors - An array of error objects.
 * @param {string} errors[].message - The error message.
 * @param {string} errors[].errorCode - The error code.
 * @returns {JSX.Element} The rendered component.
 */
export default function Errors({
    errors,
}: {
    errors: { message: string; errorCode: string }[];
}) {
    return (
        <div className="flex flex-col gap-1 mt-1">
            {errors.map((e) => (
                <p key={e.errorCode} className="my-0 text-red-800">
                    {e.message}
                </p>
            ))}
        </div>
    );
}
