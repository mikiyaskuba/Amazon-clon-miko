import React, { useState } from "react";
import LayOut from "../../components/layout/LayOut";
import { useCart } from "../../CartContext";
import { useUser } from "../../userContext";
import ProductCard from "../../components/product/ProductCard";
import "./payment.css";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormate from "../../components/Currencyformate/CurrencyFormate";
import { axiosInstance } from "../../Api/axios";
import { db } from "../../util/firebase";
import { addDoc, collection } from "firebase/firestore";

function Payment() {
	const { cart } = useCart();
	const { user } = useUser();
	const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
	const [cardError, setCardError] = useState(null);
	const stripe = useStripe();
	const elements = useElements();

	const totalPrice = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	const handleChange = (e) => {
		if (e.error) {
			setCardError(e.error.message);
		} else {
			setCardError("");
		}
	};

	const handlePayment = async (e) => {
		e.preventDefault();

		try {
			const response = await axiosInstance.post(
				`/payment/create?total=${Math.round(totalPrice * 100)}`
			);

			const { error, paymentIntent } = await stripe.confirmCardPayment(
				response.data.clientSecret,
				{
					payment_method: {
						card: elements.getElement(CardElement),
					},
				}
			);

			if (error) {
				setCardError(error.message);
			} else if (paymentIntent && paymentIntent.status === "succeeded") {
				await addDoc(collection(db, "orders"), {
					userId: user.uid,
					products: cart,
					amount: paymentIntent.amount,
					createdAt: paymentIntent.created,
				});
				// Clear cart, redirect to orders page, etc.
			}
		} catch (error) {
			console.error("Error creating payment:", error);
		}
	};
	// console.log("Order saved:", {
	// 	userId: user.uid,
	// 	products: cart,
	// 	amount: paymentIntent.amount,
	// 	createdAt: paymentIntent.created,
	// });
	return (
		<LayOut>
			<div className="payment__header">
				<p>Checkout items ({cartItemCount})</p>
			</div>
			<section className="payment">
				<div className="payment__section">
					<h3>Delivery Address</h3>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>1234 Main Street</p>
						<p>City, State 12345</p>
						<p>United States</p>
					</div>
				</div>
				<div className="payment__section">
					<h3>Review items and delivery</h3>
					<div className="payment__items">
						{cart.map((item) => (
							<ProductCard key={item.id} product={item} flex={true} payment />
						))}
					</div>
				</div>
			</section>
			<hr />
			<div className="payment__methods">
				<h3>Payment Methods</h3>
				<div className="payment__methods__card">
					<div className="form">
						<form onSubmit={handlePayment}>
							{cardError && (
								<small className="payment__error">{cardError}</small>
							)}
							<CardElement onChange={handleChange} />
							<span>
								Total order | <CurrencyFormate amount={totalPrice} />
							</span>
							<button type="submit" className="payment__button">
								Pay Now
							</button>
						</form>
					</div>
				</div>
			</div>
		</LayOut>
	);
}

export default Payment;
