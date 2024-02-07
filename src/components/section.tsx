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
        (classNameOuter ? " " + classNameOuter : "")
      }
    >
      <div
        className={
          "max-w-[1200px]" + (classNameInner ? " " + classNameInner : "")
        }
      >
        {children}
      </div>
    </section>
  );
}
