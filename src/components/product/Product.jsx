import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // Ensure you import the ProductCard component
import './procon.css'
import Loader from "../Loader/Loader";
function Product() {
	const [products, setProducts] = useState([]); // Initialize as an empty array
    const [isLoading,setIsloading]=useState([false])
	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((res) => {
				setProducts(res.data);
                isLoading(false)
			})
			.catch((err) => {
				console.log(err);
                setIsloading(false)
			});
	}, []);

	return (
		<>{
			isLoading?(<Loader />) : (
			<section className="product_con">
				{products?.map((product) => {
					return <ProductCard product={product} key={product.id} />;
				})}
			</section>
			)
        }
		</>
	);
}

export default Product;
