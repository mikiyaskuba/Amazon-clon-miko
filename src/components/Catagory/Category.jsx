import React from "react";
import { cateInfo } from './catainfo'
import CategoryCard from './CategoryCard'
import './category.css'
function Category() {
	return (
		<section className="category-section">
			{cateInfo?.map((infos) => (
				<CategoryCard key={infos.id} data={infos} />
			))}
		</section>
	);
}

export default Category;
