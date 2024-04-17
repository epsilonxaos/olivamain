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
                "rounded-xl border-2 px-10 py-2 uppercase " +
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
                "border-black bg-white text-black hover:bg-black hover:text-white " +
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
                "border-black bg-white text-black " +
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
