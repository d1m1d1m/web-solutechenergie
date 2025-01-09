import "./Field.css";

const Field = ({ name, label, type = "text", required = false }) => {
	return (
		<label className="field" htmlFor={name}>
			<span className="field__label">{label}</span>
			<input
				className="field__input"
				id={name}
				name={name}
				type={type}
				required={required}
			/>
		</label>
	);
};

export default Field;
