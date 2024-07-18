// import React from "react";
// import Rating from "@mui/material/Rating";
// import { Link } from "react-router-dom";
// import CurrencyFormate from "../Currencyformate/CurrencyFormate";
// import "./product.css";

// function ProductCard({ product, flex, desc }) {
// 	return (
// 		<div className={`card_container ${flex ? "flex-given" : ""}`}>
// 			<Link to={`products/${product.id}`}>
// 				<img src={product.image} alt={product.title} />
// 			</Link>
// 			<div>
// 				<h3>{product.title}</h3>
// 				{desc && <div style={{ maxWidth: "640px" }}>{product.description}</div>}

// 				<div className="rating">
// 					<Rating
// 						name=""
// 						value={product.rating.rate}
// 						precision={0.1}
// 						readOnly
// 					/>
// 					<small>{product.rating.rate}</small>
// 				</div>

// 				<div>
// 					<CurrencyFormate amount={product.price} />
// 				</div>
// 				<button className="button">Add to cart</button>
// 			</div>
// 		</div>
// 	);
// }

// export default ProductCard;


// function ProductCard({ product, flex, desc }) {
// 	const { dispatch } = useCart();

// 	const addToCart = () => {
// 		dispatch({ type: "ADD_TO_CART", product });
// 	};

// 	return (
// 		<div className={`card_container ${flex ? "flex-given" : ""}`}>
// 			<Link to={`products/${product.id}`}>
// 				<img src={product.image} alt={product.title} />
// 			</Link>
// 			<div>
// 				<h3>{product.title}</h3>
// 				{desc && <div style={{ maxWidth: "640px" }}>{product.description}</div>}

// 				<div className="rating">
// 					<Rating
// 						name=""
// 						value={product.rating.rate}
// 						precision={0.1}
// 						readOnly
// 					/>
// 					<small>{product.rating.rate}</small>
// 				</div>

// 				<div>
// 					<CurrencyFormate amount={product.price} />
// 				</div>
// 				<button className="button" onClick={addToCart}>
// 					Add to cart
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

// export default ProductCard;

import React from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import CurrencyFormate from "../Currencyformate/CurrencyFormate";
import { useCart } from "../../CartContext";
import "./product.css";

function ProductCard({ product, flex, desc }) {
	const { cart, dispatch } = useCart();

	const isInCart = cart.some((cartItem) => cartItem.id === product.id);

	const addToCart = () => {
		dispatch({ type: "ADD_TO_CART", product });
	};

	return (
		<div className={`card_container ${flex ? "flex-given" : ""}`}>
			<Link to={`products/${product.id}`}>
				<img src={product.image} alt={product.title} />
			</Link>
			<div>
				<h3>{product.title}</h3>
				{desc && <div style={{ maxWidth: "640px" }}>{product.description}</div>}

				<div className="rating">
					<Rating
						name=""
						value={product.rating.rate}
						precision={0.1}
						readOnly
					/>
					<small>{product.rating.rate}</small>
				</div>

				<div>
					<CurrencyFormate amount={product.price} />
				</div>
				<button className="button" onClick={addToCart}>
					{isInCart ? "Add another" : "Add to cart"}
				</button>
			</div>
		</div>
	);
}


export default ProductCard;
