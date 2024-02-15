import { PropsWithChildren } from "react";
import Image from "next/image";

export default function Attribute({
    icon,
    children,
}: PropsWithChildren<{ icon: any }>) {
    return (
        <div className="flex items-center">
            <Image src={icon} alt="" width={80} />
            <h5>{children}</h5>
        </div>
    );
}
