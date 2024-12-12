import clsx from "clsx";

const Input = ({ label, name, cols = 30, rows = 20, required, ...props }) => {
    return (
        <label className="flex flex-grow flex-col" htmlFor={name}>
            <span
                className={clsx("mb-1", {
                    "after:text-red-500 after:ml-2 after:text-red after:content-['*']":
                        required,
                })}
            >
                {label}
            </span>
            <textarea
                className="border border-dark-blue bg-dark-blue/5 px-4 py-2 outline-none"
                id={name}
                name={name}
                cols={cols}
                rows={rows}
                required={required}
                {...props}
            />
        </label>
    );
};

export default Input;
