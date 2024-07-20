import React from "react";
import { useUser } from "./userContext";

function Profile() {
	const { state } = useUser();
	const { user } = state;

	return (
		<div>
			{user ? (
				<div>
					<h1>Welcome, {user.email}</h1>
					{/* Display other user information */}
				</div>
			) : (
				<h1>Please sign in</h1>
			)}
		</div>
	);
}

export default Profile;
