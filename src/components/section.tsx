import { PropsWithChildren } from "react";

export default function Section({
  classNameOuter,
  classNameInner,
  children,
}: PropsWithChildren<{
  classNameOuter?: string;
  classNameInner?: string;
}>) {
  return (
    <section
      className={
        "flex justify-center items-center" +
        (classNameOuter ? " " + classNameOuter : "") +
        (classNameInner ? " " + classNameInner : "")
      }
    >
      <div
        className={"container" + (classNameInner ? " " + classNameInner : "")}
      >
        {children}
      </div>
    </section>
  );
}
