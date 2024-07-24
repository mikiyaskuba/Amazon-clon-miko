import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useUser } from "../../userContext";
import { db } from "../../util/firebase";
import ProductCard from "../../components/product/ProductCard";
import "./orders.css";

function Orders() {
	const { user } = useUser();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const fetchOrders = async () => {
			if (user) {
				const ordersCollection = collection(db, "orders");
				const q = query(ordersCollection, where("userId", "==", user.uid));
				const querySnapshot = await getDocs(q);
				const fetchedOrders = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setOrders(fetchedOrders);
			}
		};

		fetchOrders();
	}, [user]);

	return (
		<div className="orders">
			<h1>Your Orders</h1>
			{orders.length > 0 ? (
				<div className="orders__list">
					{orders.map((order) => (
						<div key={order.id} className="orders__item">
							<h2>Order ID: {order.id}</h2>
							<p>
								Order Date: {new Date(order.createdAt).toLocaleDateString()}
							</p>
							<div className="orders__products">
								{order.products.map((product) => (
									<ProductCard key={product.id} product={product} />
								))}
							</div>
						</div>
					))}
				</div>
			) : (
				<p>No orders found.</p>
			)}
		</div>
	);
}

export default Orders;
