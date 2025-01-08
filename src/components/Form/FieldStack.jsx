import "./FieldStack.css";

const FieldStack = ({ children, direction = "x" }) => {
	return (
		<div className={`field-group field-group--${direction}`}>
			{children}
		</div>
	);
};

export default FieldStack;
