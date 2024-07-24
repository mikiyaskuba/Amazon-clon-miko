// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUser } from "../../userContext";

// function Protected({ children, msg, redirect }) {
// 	const navigate = useNavigate();
// 	const { user } = useUser(); // Directly use the `useUser` hook to get `user`

// 	useEffect(() => {
// 		if (!user) {
// 			navigate("/auth", { state: { msg, redirect } });
// 		}
// 	}, [user, navigate, msg, redirect]); // Add navigate, msg, and redirect as dependencies

// 	return user ? children : null; // Render children if user is authenticated, else render null
// }

// export default Protected;
import React , { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../userContext";

function Protected({ children, msg, redirect }) {
	const navigate = useNavigate();
	const { user } = useUser();

	useEffect(() => {
		if (!user) {
			navigate("/auth", { state: { msg , redirect } });
		}
	}, [user, navigate, msg, redirect]);

	return user ? children : null;
}

export default Protected;

