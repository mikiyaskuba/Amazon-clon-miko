import React, { useState, useEffect } from "react";
import LayOut from "../../components/layout/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { B_url } from "../../Api/endpoint";
import ProductCard from "../../components/product/ProductCard";
import Loader from "../../components/Loader/Loader";

function Result() {
	const { categoryName } = useParams();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true); // Initialize loading as true

	useEffect(() => {
		setLoading(true); // Set loading to true when starting to fetch data
		axios
			.get(`${B_url}/products/category/${categoryName}`)
			.then((res) => {
				setData(res.data);
				setLoading(false); // Set loading to false after data is fetched
				console.log("Fetched data:", res.data);
			})
			.catch((err) => {
				console.error("Error fetching data:", err);
				setLoading(false); // Set loading to false even if there's an error
			});
	}, [categoryName]); // Add categoryName to dependency array

	return (
		<LayOut>
			<section className="">
				<h1 style={{ padding: "30px" }}>Result</h1>
				<p style={{ padding: "30px" }}>Category / {categoryName}</p>
				<hr />
				{loading ? (
					<Loader />
				) : (
					<div className="product_con" style={{ padding: "30px" }}>
						{data?.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				)}
			</section>
		</LayOut>
	);
}

export default Result;
