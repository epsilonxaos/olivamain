import { twMerge } from "tailwind-merge";
import parse from "html-react-parser";

const Text = ({ children, className, parseHtml = false }) => {
    if (parseHtml && !children) return;

    if (parseHtml)
        return (
            <div
                className={twMerge(
                    "font-chassiS text-sm tracking-[0.7px] text-inherit md:text-base",
                    className,
                )}
            >
                {parse(children)}
            </div>
        );

    return (
        <p className={twMerge(" text-sm text-inherit md:text-base", className)}>
            {children}
        </p>
    );
};

const Title = ({ children, className, parseHtml = false }) => {
    if (parseHtml && !children) return;
    return (
        <h2
            className={twMerge(
                "font-apercuPro text-center text-base uppercase text-inherit md:text-xl md:tracking-[6px]",
                className,
            )}
        >
            {parseHtml ? parse(children) : children}
        </h2>
    );
};

Text.Title = Title;

export default Text;
