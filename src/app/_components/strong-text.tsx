import { ReactElement } from "react";
import { avigeaFont } from "@/assets/fonts";
import classnames from "classnames";

type TStrongTextProps = {
    highLight?: boolean;
    content: string;
};

export default function StrongText({
    highLight = false,
    content,
}: TStrongTextProps): ReactElement {
    const className = classnames("font-normal", avigeaFont.className, {
        "text-highlight": highLight,
    });
    return <strong className={className}>{content}</strong>;
}
