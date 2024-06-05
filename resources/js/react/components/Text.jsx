import { twMerge } from "tailwind-merge";
import parse from "html-react-parser";

const Text = ({ children, className, parseHtml = false }) => {
    if (parseHtml && !children) return;

    if (parseHtml)
        return (
            <div
                className={twMerge(
                    "font-intervogueReg text-sm leading-6 text-inherit md:text-base",
                    className,
                )}
            >
                {parse(children)}
            </div>
        );

    return (
        <p
            className={twMerge(
                "font-intervogueReg text-sm leading-6 text-inherit md:text-base",
                className,
            )}
        >
            {children}
        </p>
    );
};

const Main = ({ children, className, parseHtml = false }) => {
    if (parseHtml && !children) return;
    return (
        <h1
            className={twMerge(
                "text-center font-olivaSans text-2xl uppercase leading-7 tracking-[4px] text-inherit lg:text-4xl",
                className,
            )}
        >
            {parseHtml ? parse(children) : children}
        </h1>
    );
};

const Title = ({ children, className, parseHtml = false }) => {
    if (parseHtml && !children) return;
    return (
        <h2
            className={twMerge(
                "text-center font-olivaSans text-xl uppercase leading-7 tracking-[4px] text-inherit xl:text-4xl xl:tracking-[7px]",
                className,
            )}
        >
            {parseHtml ? parse(children) : children}
        </h2>
    );
};

const Subtitle = ({ children, className, parseHtml = false }) => {
    if (parseHtml && !children) return;
    return (
        <h3
            className={twMerge(
                "text-center font-olivaSans uppercase leading-6 tracking-[1.6px] text-inherit xl:text-xl",
                className,
            )}
        >
            {parseHtml ? parse(children) : children}
        </h3>
    );
};

Text.Main = Main;
Text.Title = Title;
Text.Subtitle = Subtitle;

export default Text;
