// import React, { createContext, useContext, useReducer } from "react";

// // Create a context
// const CartContext = createContext();

// // Create a reducer to manage cart state
// const cartReducer = (state, action) => {
// 	switch (action.type) {
// 		case "ADD_TO_CART":
// 			return [...state, action.product];
// 		default:
// 			return state;
// 	}
// };

// // Create a provider component
// export const CartProvider = ({ children }) => {
// 	const [cart, dispatch] = useReducer(cartReducer, []);

// 	return (
// 		<CartContext.Provider value={{ cart, dispatch }}>
// 			{children}
// 		</CartContext.Provider>
// 	);
// };

// // Create a custom hook to use the cart context
// export const useCart = () => {
// 	return useContext(CartContext);
// };
import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			const existingProduct = state.find(
				(item) => item.id === action.product.id
			);
			if (existingProduct) {
				return state.map((item) =>
					item.id === action.product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				return [...state, { ...action.product, quantity: 1 }];
			}
		case "REMOVE_FROM_CART":
			return state.filter((item) => item.id !== action.id);
		case "INCREASE_QUANTITY":
			return state.map((item) =>
				item.id === action.id ? { ...item, quantity: item.quantity + 1 } : item
			);
		case "DECREASE_QUANTITY":
			return state.map((item) =>
				item.id === action.id && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			);
		default:
			return state;
	}
};

export const CartProvider = ({ children }) => {
	const [cart, dispatch] = useReducer(cartReducer, []);

	return (
		<CartContext.Provider value={{ cart, dispatch }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
