import clsx from "clsx";

const Button = ({ children, type, href }) => {
	const params = clsx(
		"flex justify-between items-center gap-4 px-4 py-2 mt-4 text-white w-fit",
		{
			"bg-primary-700": type === "primary",
			"bg-white text-primary-700": type === "secondary",
		},
	);

	return (
		<a className={params} href={href}>
			{children}
		</a>
	);
};

export default Button;
