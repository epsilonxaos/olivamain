import React from "react";

type TButton = {
    children: any;
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
};

const Button = (props: TButton) => {
    const { children, type, className } = props;

    return (
        <button
            {...(type && { type: type || "button" })}
            className={
                "py-2 px-10 border-2 uppercase rounded-xl " +
                (className ? className : "")
            }
        >
            {children}
        </button>
    );
};

const Black = (props: TButton) => {
    const { children, type, className } = props;

    return (
        <Button
            type={type || "button"}
            className={
                "bg-white text-black border-black " +
                (className ? className : "")
            }
        >
            {children}
        </Button>
    );
};

const TransparentWhite = (props: TButton) => {
    const { children, type, className } = props;

    return (
        <Button
            type={type || "button"}
            className={
                "bg-white text-black border-black " +
                (className ? className : "")
            }
        >
            {children}
        </Button>
    );
};

Button.Black = Black;
Button.TransparentWhite = TransparentWhite;

export default Button;
