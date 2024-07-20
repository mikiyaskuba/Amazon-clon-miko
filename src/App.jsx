import "./App.css";
import Routing from "./Router.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "./util/firebase.js";
import { useEffect } from "react";
import { useUser } from "./userContext";

function App() {
	const { user, dispatch } = useUser();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (user) {
				dispatch({ type: "SET_USER", user });
			} else {
				dispatch({ type: "SET_USER", user: null });
			}
		});
		return () => unsubscribe();
	}, [dispatch]);

	return (
		<div className="App">
			<Routing />
		</div>
	);
}

export default App;
