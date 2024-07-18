// import React, { useState, useEffect } from "react";
// import LayOut from "../../components/layout/LayOut";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { B_url } from "../../Api/endpoint";
// import ProductCard from "../../components/product/ProductCard";
// function ProductDetail() {
// 	const { productId } = useParams();
// 	const [product, setProduct] = useState(null);
// 	useEffect(() => {
// 		axios
// 			.get(`${B_url}/products/${productId}`)
// 			.then((res) => {
// 				setProduct(res.data);
// 				console.log({product});
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	}, []);
// 	return (
// 		<LayOut>
// 			<div>
// 				{product.rating.rate}
// 			</div>
// 		</LayOut>
// 	);
// }

// export default ProductDetail;
import React, { useState, useEffect } from "react";
import LayOut from "../../components/layout/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { B_url } from "../../Api/endpoint";
import ProductCard from "../../components/product/ProductCard";
import { HashLoader } from "react-spinners";
import Loader from "../../components/Loader/Loader";
function ProductDetail() {
	const { productId } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		axios
			.get(`${B_url}/products/${productId}`)
			.then((res) => {
				setProduct(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [productId]);

	if (!product) {
		return <Loader />;
	}

	return (
		<LayOut>
			{/* <div>{product.rating ? product.rating.rate : "No rating available"}</div> */}
			{/* Optionally, you can add more product details here */}
			<ProductCard product={product}
               flex={true}
               desc={true}
               />
		</LayOut>
	);
}

export default ProductDetail;
