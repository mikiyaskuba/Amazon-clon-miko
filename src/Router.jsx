// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./pages/Landing/Landing";
// import Payment from "./pages/Payment/Payment";
// import Orders from "./pages/Orders/Orders";
// import Cart from "./pages/Cart/Cart";
// import Result from "./pages/Results/Result";
// import ProductDetail from "./pages/ProductDetail/ProductDetail";
// import Auth from "./pages/Auth/Auth";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import Protected from "./components/ProtectedRoute/Protected";

// const stripePromise = loadStripe(
// 	"pk_test_51Peab02KyErKWQZXJg5JyCSS1h3oULM6SgDl0smg9oz2xvoroFG780fadreHEUEr5T6gmnZPDvV0kq4AYIPdDjNM00hGlRS1tG"
// );

// function Routing() {
// 	return (
// 		<Router>
// 			<Routes>
// 				<Route path="/" element={<Landing />} />
// 				<Route path="/auth" element={<Auth />} />
// 				<Route
// 					path="/payment"
// 					element={
// 						<Protected msg={"You must log in to pay"} redirect={"/payment"}>
// 							<Elements stripe={stripePromise}>
// 								<Payment />
// 							</Elements>
// 						</Protected>
// 					}
// 				/>
// 				<Route path="/orders" element={<Orders />} />
// 				<Route path="/category/:categoryName" element={<Result />} />
// 				<Route path="/products/:productId" element={<ProductDetail />} />
// 				<Route path="/cart" element={<Cart />} />
// 			</Routes>
// 		</Router>
// 	);
// }

// export default Routing;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Result from "./pages/Results/Result";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Auth from "./pages/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Protected from "./components/ProtectedRoute/Protected";

const stripePromise = loadStripe(
	"pk_test_51Peab02KyErKWQZXJg5JyCSS1h3oULM6SgDl0smg9oz2xvoroFG780fadreHEUEr5T6gmnZPDvV0kq4AYIPdDjNM00hGlRS1tG"
);

function Routing() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/auth" element={<Auth />} />
				<Route
					path="/payment"
					element={
						<Protected msg="You must log in to pay" redirect="/payment">
							<Elements stripe={stripePromise}>
								<Payment />
							</Elements>
						</Protected>
					}
				/>
				<Route path="/orders" element={<Orders />} />
				<Route path="/category/:categoryName" element={<Result />} />
				<Route path="/products/:productId" element={<ProductDetail />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Router>
	);
}

export default Routing;
