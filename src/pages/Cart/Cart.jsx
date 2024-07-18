
// import LayOut from '../../components/layout/LayOut'

// // function Cart() {
// //   return (
// // 		<LayOut>
// // 			<div>Cart</div>
// // 		</LayOut>
// // 	);
// // }

// // export default Cart
// import React from "react";
// import { useCart } from "../../CartContext";
// import CurrencyFormate from "../../components/Currencyformate/CurrencyFormate";
// import { Link } from "react-router-dom";
// import './cart.css'



// function Cart() {
// 	const { cart, dispatch } = useCart();

// 	const removeFromCart = (id) => {
// 		dispatch({ type: "REMOVE_FROM_CART", id });
// 	};

// 	const increaseQuantity = (id) => {
// 		dispatch({ type: "INCREASE_QUANTITY", id });
// 	};

// 	const decreaseQuantity = (id) => {
// 		dispatch({ type: "DECREASE_QUANTITY", id });
// 	};

// 	return (
// 		<LayOut>
// 			<div className="cart-container">
// 				<h2>Your Shopping Cart</h2>
// 				{cart.length === 0 ? (
// 					<div>
// 						<h3>Your cart is empty</h3>
// 						<Link to="/">Go to homepage</Link>
// 					</div>
// 				) : (
// 					<div>
// 						{cart.map((product) => (
// 							<div key={product.id} className="cart-item">
// 								<img src={product.image} alt={product.title} />
// 								<div>
// 									<h3>{product.title}</h3>
//                                     <p>{product.description}</p>
// 									<p>Quantity: {product.quantity}</p>
// 									<div className="quantity-controls">
// 										<button onClick={() => increaseQuantity(product.id)}>
// 											+
// 										</button>
// 										<button onClick={() => decreaseQuantity(product.id)}>
// 											-
// 										</button>
// 									</div>
// 									<CurrencyFormate amount={product.price * product.quantity} />
// 									<button className='removebtn' onClick={() => removeFromCart(product.id)}>
// 										Remove
// 									</button>
// 								</div>
// 							</div>
// 						))}
// 						<div className="checkout">
// 							<Link to="/payment">
// 								<button className="checkout-button">Proceed to Checkout</button>
// 							</Link>
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</LayOut>
// 	);
// }

// export default Cart;
import React from "react";
import { useCart } from "../../CartContext";
import CurrencyFormate from "../../components/Currencyformate/CurrencyFormate";
import { Link } from "react-router-dom";

import "./cart.css";
import LayOut from "../../components/layout/LayOut";

function Cart() {
	const { cart, dispatch } = useCart();

	const removeFromCart = (id) => {
		dispatch({ type: "REMOVE_FROM_CART", id });
	};

	const increaseQuantity = (id) => {
		dispatch({ type: "INCREASE_QUANTITY", id });
	};

	const decreaseQuantity = (id) => {
		dispatch({ type: "DECREASE_QUANTITY", id });
	};

	const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
	const totalPrice = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	return (
		<LayOut>
			<div className="cart-container">
				{cart.length === 0 ? (
					<div>
						<h3>Your cart is empty</h3>
						<Link to="/">Go to homepage</Link>
					</div>
				) : (
					<div>
						<h2>Your Shopping Cart</h2>
						{cart.map((product) => (
							<div key={product.id} className="cart-item">
								<img src={product.image} alt={product.title} />
								<div>
									<h3>{product.title}</h3>
									<p>{product.description}</p>
									<p>Quantity: {product.quantity}</p>
									<div className="quantity-controls">
										<button onClick={() => increaseQuantity(product.id)}>
											+
										</button>
										<button onClick={() => decreaseQuantity(product.id)}>
											-
										</button>
									</div>
									<CurrencyFormate amount={product.price * product.quantity} />
									<button
										className="removebtn"
										onClick={() => removeFromCart(product.id)}
									>
										Remove
									</button>
								</div>
							</div>
						))}
					</div>
				)}
				<div className="cart-summary">
					<h3>Summary</h3>
					<p>Total Items: {totalQuantity}</p>
					<CurrencyFormate amount={totalPrice} />
					<Link to="/payment">
						<button className="checkout-button">Checkout</button>
					</Link>
				</div>
			</div>
		</LayOut>
	);
}

export default Cart;