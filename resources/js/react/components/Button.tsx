import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type TButton = {
    children: any;
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
    isLink?: boolean;
    isLinkExternal?: boolean;
    url?: string;
};

const Button = (props: TButton) => {
    const { children, type, className, isLink, isLinkExternal, url } = props;

    if (isLink && !isLinkExternal)
        return (
            <Link
                to={url ?? ""}
                className={twMerge(
                    "rounded-xl border-2 px-10 py-2 uppercase tracking-[2px]",
                    className ? className : "",
                )}
            >
                {children}
            </Link>
        );

    if (isLink && isLinkExternal)
        return (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={url ?? ""}
                className={twMerge(
                    "rounded-xl border-2 px-10 py-2 uppercase tracking-[2px]",
                    className ? className : "",
                )}
            >
                {children}
            </a>
        );

    return (
        <button
            {...(type && { type: type || "button" })}
            className={twMerge(
                "rounded-xl border-2 px-10 py-2 uppercase tracking-[2px]",
                className ? className : "",
            )}
        >
            {children}
        </button>
    );
};

const Black = (props: TButton) => {
    const { children, type, className, isLink, isLinkExternal, url } = props;

    return (
        <Button
            type={type || "button"}
            isLink={isLink}
            isLinkExternal={isLinkExternal}
            url={url}
            className={twMerge(
                "border-black bg-white text-black hover:bg-black hover:text-white ",
                className ? className : "",
            )}
        >
            {children}
        </Button>
    );
};

const TransparentWhite = (props: TButton) => {
    const { children, type, className, isLink, isLinkExternal, url } = props;

    return (
        <Button
            type={type || "button"}
            isLink={isLink}
            isLinkExternal={isLinkExternal}
            url={url}
            className={twMerge(
                "border-white text-white hover:bg-white hover:text-black",
                className ? className : "",
            )}
        >
            {children}
        </Button>
    );
};

Button.Black = Black;
Button.TransparentWhite = TransparentWhite;

export default Button;
