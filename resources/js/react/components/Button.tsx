import React, { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type TButton = {
    children: any;
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
    onClick?: () => void;
};

const Button = (props: TButton) => {
    const { children, type, className, onClick } = props;

    return (
        <button
            {...(type && { type: type || "button" })}
            {...(onClick && { onClick })}
            className={twMerge(
                "border border-black bg-transparent px-10 py-1.5 text-center transition-all hover:bg-black hover:text-white",
                className ? className : "",
            )}
        >
            {children}
        </button>
    );
};

type TButtonLink = {
    url: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
};

const Url = ({ url, className, children, onClick }: TButtonLink) => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href={url ?? ""}
            {...(onClick && { onClick })}
            className={twMerge(
                "border border-black bg-transparent px-10 py-1.5 text-center transition-all hover:bg-black hover:text-white",
                className ? className : "",
            )}
        >
            {children}
        </a>
    );
};

const To = ({ url, className, children, onClick }: TButtonLink) => {
    return (
        <Link
            to={url}
            {...(onClick && { onClick })}
            className={twMerge(
                "border border-black bg-transparent px-10 py-1.5 text-center transition-all hover:bg-black hover:text-white",
                className ? className : "",
            )}
        >
            {children}
        </Link>
    );
};

Button.Url = Url;
Button.To = To;

export default Button;
