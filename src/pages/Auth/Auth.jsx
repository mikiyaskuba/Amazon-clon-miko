import React, { useState } from "react";
import "./signup.css";
import { Link,useNavigate } from "react-router-dom";
import { auth } from "../../util/firebase";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { useUser } from "../../userContext";
import Spinner from "react-bootstrap/Spinner";

function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const { dispatch } = useUser();
	const [loadingSignIn, setLoadingSignIn] = useState(false);
	const [loadingSignUp, setLoadingSignUp] = useState(false);
    const navigate = useNavigate();
    

	const authHandler = async (e) => {
		e.preventDefault();
		const action = e.target.name;
		try {
			let userInfo;
			if (action === "signin") {
				setLoadingSignIn(true);
				userInfo = await signInWithEmailAndPassword(auth, email, password);
			} else {
				setLoadingSignUp(true);
				userInfo = await createUserWithEmailAndPassword(auth, email, password);
			}
			dispatch({ type: "SET_USER", user: userInfo.user });
			console.log(userInfo);
			setEmail("");
			setPassword("");
			setError("");
		} catch (err) {
			console.log(err);
			setError(err.message);
		} finally {
			if (action === "signin") {
				setLoadingSignIn(false);
                navigate("/");
			} else {
				setLoadingSignUp(false);
			}
		}
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7BztHx1xvfgOux1-PJlmAxbvsZVooaYsV4w&s"
					alt="Amazon Logo"
					className="login__logo"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign in</h1>
				{error && <p className="error-message">{error}</p>}
				<form>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							id="email"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="password"
							placeholder="Enter password"
						/>
					</div>
					<button
						type="submit"
						name="signin"
						onClick={authHandler}
						className="login__signInButton"
						disabled={loadingSignIn}
					>
						{/* let use react spinner for loader by using bootsrap spinner*/}

						{loadingSignIn ? <Spinner style={{}} /> : "Sign In"}
						{/* {loadingSignIn ? "Signing In..." : "Sign In"} */}
					</button>
				</form>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
					unde officia dolorum impedit eos delectus vero sunt expedita fuga
					tempora iusto nam facere repellendus, animi quia, explicabo
					consequatur obcaecati nihil!
				</p>
				<button
					type="submit"
					name="signup"
					onClick={authHandler}
					className="login__createAccountButton"
					disabled={loadingSignUp}
				>
					{/* let use react spinner for loader by using bootsrap spinner and lets add style to center the spinner on button */}
					{loadingSignUp ? <Spinner style={{}} /> : "Create your Account"}

					{/* {loadingSignUp ? "Creating Account..." : "Create your Amazon Account"} */}
				</button>

			</div>
		</div>
	);
}

export default Auth;