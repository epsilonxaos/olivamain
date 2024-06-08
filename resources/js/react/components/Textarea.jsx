import { twMerge } from "tailwind-merge";

export default function Textarea({
    className,
    name,
    label,
    register,
    validate = false,
    rules,
    validateError = "",
    validateErrorMessage = "",
}) {
    return (
        <div className={twMerge("group relative z-0 mb-7 w-full", className)}>
            <textarea
                cols="30"
                rows="5"
                name={name}
                id={name}
                className="peer block w-full appearance-none rounded-xl border-2 border-white bg-transparent px-4 py-2.5 font-intervogueReg text-sm text-inherit focus:border-white focus:outline-none focus:ring-0"
                placeholder=" "
                {...(validate && register(name, rules))}
                {...(!validate && { name })}
                // required
            />

            {validateError && (
                <span className=" text-xs text-red-400">
                    {validateErrorMessage}
                </span>
            )}

            <label
                htmlFor={name}
                className={`absolute left-4 top-2 -z-10 origin-[0] -translate-y-7 scale-75 font-intervogueReg text-base text-inherit duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-4 peer-focus:-translate-y-7 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-white rtl:peer-focus:left-4 rtl:peer-focus:translate-x-1/4 ${
                    validateError && "border-2 border-none text-red-700"
                }`}
            >
                {label}
                {validate && <span className="font-bold text-red-700">*</span>}
            </label>
        </div>
    );
}
