import React from "react";
import { Alert } from "reactstrap";
import axios from "axios";
import catchErrors from "../../utils/catchErrors";
import baseUrl from "../../utils/baseUrl";
import { handleLogin } from "../../utils/auth";
import LoadingSpinner from "@/utils/LoadingSpinner";

const INITIAL_USER = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const RegisterForm = () => {
	const [user, setUser] = React.useState(INITIAL_USER);
	const [disabled, setDisabled] = React.useState(true);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState("");

	React.useEffect(() => {
		const isUser = Object.values(user).every((el) => Boolean(el));
		isUser ? setDisabled(false) : setDisabled(true);
	}, [user]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log(user)
		try {
			setLoading(true);
			setError("");
			const url = `${baseUrl}/api/v1/auth/signup`;
			const payload = { ...user };
			const response = await axios.post(url, payload);
			handleLogin(response.data);
			// console.log(response.data)
		} catch (error) {
			catchErrors(error, setError);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="register-form">
			<h2>Register</h2>
			<Alert color="danger" isOpen={error ? true : false}>
				{error}
			</Alert>

			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Full Name"
						name="name"
						value={user.name}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label>Email</label>
					<input
						className="form-control"
						placeholder="Email"
						name="email"
						type="email"
						value={user.email}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						name="password"
						value={user.password}
						onChange={handleChange}
					/>
				</div>

				<div className="form-group">
					<label>Confirm Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Confirm Password"
						name="confirmPassword"
						value={user.confirmPassword}
						onChange={handleChange}
					/>
				</div>

				<p className="description">
					The password should be at least eight characters long. To
					make it stronger, use upper and lower case letters, numbers,
					and symbols like ! " ? $ % ^ & )
				</p>

				<button type="submit" disabled={disabled}>
					Register
					{loading ? <LoadingSpinner /> : ""}
				</button>
			</form>
		</div>
	);
};

export default RegisterForm;
