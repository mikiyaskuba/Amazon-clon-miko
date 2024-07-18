import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Landing from "./pages/Landing/Landing";
import Payment from './pages/Payment/Payment'
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import Result from "./pages/Results/Result";
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Auth from "./pages/Auth/Auth";
function Routing() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
                <Route path="/auth" element={<Auth/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/category/:categoryName" element={<Result/>}/>
                <Route path="/products/:productId" element={<ProductDetail />}/>
                <Route path="/cart" element={<Cart/>}/>


			</Routes>
		</Router>
	);
}

export default Routing;
