import React from "react";
import "./CategoryCard.css"; // Import the CSS file
import { Link } from "react-router-dom";
function CategoryCard({ data }) {
    
	return (
		<div className="category-card">
			<h2 className="category-card-title text-center">{data.category}</h2>
			<Link to={`/category/${data.category}`}>
				<div className="category-card-image-container ">
					<img
						className="category-card-image"
						src={data.image}
						alt={data.title}
					/>
				</div>
				<div className="category-card-info">
					{/* <p className="category-card-price">${data.price}</p> */}
					<p className="category-card-shop-now">Shop now</p>
				</div>
			</Link>
		</div>
	);
}

export default CategoryCard;
