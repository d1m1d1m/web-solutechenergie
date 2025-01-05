import "./style.css";

const Button = ({
	title,
	variant = "primary",
	leftIcon = null,
	rightIcon = null,
	sm,
	md,
	xl,
}) => {
	const classList = {
		btn: true,
		"btn--primary": variant === "primary",
		"btn--secondary": variant === "secondary",
		"btn--sm": sm,
		"btn--md": md,
		"btn--xl": xl,
	};

	const classListFull = Object.entries(classList)
		.filter((c) => c[1])
		.map((c) => c[0])
		.join(" ");

	console.log(classListFull);

	return (
		<a className={classListFull} href="#">
			{/* Left icon */}
			{leftIcon && <span className="btn__icon">{leftIcon}</span>}

			<span className="btn__title">{title}</span>

			{/* Right icon */}
			{rightIcon && <span className="btn__icon">{rightIcon}</span>}
		</a>
	);
};

export default Button;
