import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from "./CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CartProvider>
			<App />
		</CartProvider>
	</React.StrictMode>
);
