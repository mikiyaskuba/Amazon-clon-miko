import React from 'react'
import LayOut from '../../components/layout/LayOut';
import ImageCarousel from '../../components/ImageCarousel';
import Category from '../../components/Catagory/Category';
import Product from '../../components/product/Product';
function Landing() {
  return (
		<LayOut>
			<ImageCarousel />
			<Category/>
			<Product />
		</LayOut>
	);
}

export default Landing