const FieldBox = ({
	name,
	label,
	type = "text",
	required = false,
	rows = 8,
}) => {
	return (
		<label className="field" htmlFor={name}>
			<span className="field__label">{label}</span>
			<textarea
				className="field__input"
				id={name}
				name={name}
				type={type}
				rows={rows}
				required={required}
			/>
		</label>
	);
};

export default FieldBox;
