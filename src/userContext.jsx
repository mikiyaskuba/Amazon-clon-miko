import React, { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const userReducer = (state, action) => {
	switch (action.type) {
		case "SET_USER":
			return { ...state, user: action.user };
		case "REMOVE_USER":
			return { ...state, user: null };
		default:
			return state;
	}
};

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, { user: null });

	return (
		<UserContext.Provider value={{ user: state.user, dispatch }}>
			{children}
		</UserContext.Provider>
	);
};
