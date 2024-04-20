import { twMerge } from "tailwind-merge";

const Text = ({ children, className }) => {
    return (
        <p
            className={twMerge(
                "font-intervogueReg leading-6 text-inherit",
                className,
            )}
        >
            {children}
        </p>
    );
};

const Main = ({ children, className }) => {
    return (
        <h1
            className={twMerge(
                "text-center font-olivaSans text-2xl uppercase leading-7 tracking-[4px] text-inherit lg:text-4xl",
                className,
            )}
        >
            {children}
        </h1>
    );
};

const Title = ({ children, className }) => {
    return (
        <h2
            className={twMerge(
                "text-center font-olivaSans text-2xl uppercase leading-7 tracking-[4px] text-inherit xl:text-4xl xl:tracking-[7px]",
                className,
            )}
        >
            {children}
        </h2>
    );
};

const Subtitle = ({ children, className }) => {
    return (
        <h3
            className={twMerge(
                "text-center font-olivaSans uppercase leading-6 tracking-[1.6px] text-inherit xl:text-xl",
                className,
            )}
        >
            {children}
        </h3>
    );
};

Text.Main = Main;
Text.Title = Title;
Text.Subtitle = Subtitle;

export default Text;
