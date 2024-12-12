import clsx from "clsx";

const Input = ({ label, type, name, required, ...props }) => {
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
			<input
				className="border-b border-b-primary-700 bg-primary-700/5 px-4 py-2 text-inherit outline-none"
				type={type}
				id={name}
				name={name}
				required={required}
				{...props}
			/>
			{/* border border-dark-blue */}
		</label>
	);
};

export default Input;
