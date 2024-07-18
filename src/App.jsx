import "./App.css";
import Category from "./components/Catagory/Category.jsx";
import Header from "./components/Header";
import ImageCarousel from "./components/ImageCarousel";
import Product from "./components/product/Product.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.jsx";
import Routing from "./Router.jsx";

// import Nav from './components/Nav'

function App() {
	return (
		<div className="App">
			
			{/* <Nav/> */}

			{/* <ImageCarousel />
			<Category />
			<Product /> */}
            {/* <Landing/> */}
            <Routing/>
        
		</div>
	);
}

export default App;
