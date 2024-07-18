import React, { useState } from "react";
import "./signup.css";
import LayOut from "../../components/layout/LayOut";
import { Link } from "react-router-dom";
import {auth} from '../../util/firebase'
function Auth() {
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [error, setError] =useState("");


	return (
		<>
			{/* //amazon signup page */}
			<div className="login">
				<Link>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7BztHx1xvfgOux1-PJlmAxbvsZVooaYsV4w&s"
						alt=""
					/>
				</Link>
				<div className="login__container">
					<h1>Sign in</h1>
					<form action="">
						<div className="">
							<label htmlFor="email">Email address</label>
							<input value={email}
                            onChange={(e)=>setEmail(e.target.value)}
								type="email"
								className=""
								id="email"
								aria-describedby="email
                            "
								placeholder="Enter email"
							/>
						</div>
						<div>
							<label htmlFor="password">password</label>
							<input value={password}
                            onChange={(e)=>setPassword(e.target.value)}
								type="password"
								className=""
								id="password"
								placeholder="Enter password"
							/>
						</div>
						<button className="login__signInButton">Sign In</button>
					</form>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
						unde officia dolorum impedit eos delectus vero sunt expedita fuga
						tempora iusto nam facere repellendus, animi quia, explicabo
						consequatur obcaecati nihil!
					</p>
                    {/* create account button */}
                    <button className="login__createAccountButton">Create your Amazon Account</button>

				</div>
			</div>
		</>
	);
}

export default Auth;
