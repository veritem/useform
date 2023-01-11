import React, { useEffect, useState } from "react";

export default function useForm<T>(initial: T) {
	const [inputs, setInputs] = useState<T>(initial);
	const initialValues = Object.values(initial).join("");

	useEffect(() => {
		setInputs(initial);
	}, [initialValues]);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		let { value, name, type } = e.target;
		if (type === "number") {
			value = parseInt(value);
		}
		if (type === "file") {
			value = e.target.files;
		}
		setInputs({
			...inputs,
			[name]: value,
		});
	}

	function resetForm() {
		setInputs(initial);
	}

	function clearForm() {
		const blankState = Object.fromEntries(
			Object.entries(inputs).map(([key, value]) => [key, ""])
		) as unknown as T;
		setInputs(blankState);
	}

	return {
		inputs,
		handleChange,
		resetForm,
		clearForm,
	};
}
