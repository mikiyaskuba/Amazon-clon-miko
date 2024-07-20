// import React from "react";
// import { BsSearch, BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { SlLocationPin } from "react-icons/sl";
// import "./header.css";
// import Nav from "./Nav";

// function Header() {
// 	return (
// 		<>
// 			<header className="header">
// 				<div className="header__logo-section">
// 					<Link to="/">
// 						<img
// 							className="header__logo"
// 							src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
// 							alt="Amazon Logo"
// 						/>
// 					</Link>
// 					<div className="header__location">
// 						<SlLocationPin className="header__location-icon" />
// 						<div className="header__location-text">
// 							<p className="header__location-deliver">Deliver to</p>
// 							<span className="header__location-country">Ethiopia</span>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="header__search-section">
// 					<select className="header__search-select" name="">
// 						<option selected="selected">All</option>
// 						<option value="search-alias=arts-crafts-intl-ship">
// 							Arts & Crafts
// 						</option>
// 						<option value="search-alias=automotive-intl-ship">
// 							Automotive
// 						</option>
// 						<option value="search-alias=baby-products-intl-ship">Baby</option>
// 						<option value="search-alias=beauty-intl-ship">
// 							Beauty & Personal Care
// 						</option>
// 						<option value="search-alias=stripbooks-intl-ship">Books</option>
// 						<option value="search-alias=fashion-boys-intl-ship">
// 							Boys' Fashion
// 						</option>
// 						<option value="search-alias=computers-intl-ship">Computers</option>
// 						<option value="search-alias=deals-intl-ship">Deals</option>
// 						<option value="search-alias=digital-music">Digital Music</option>
// 						<option value="search-alias=electronics-intl-ship">
// 							Electronics
// 						</option>
// 						<option value="search-alias=fashion-girls-intl-ship">
// 							Girls' Fashion
// 						</option>
// 						<option value="search-alias=hpc-intl-ship">
// 							Health & Household
// 						</option>
// 						<option value="search-alias=kitchen-intl-ship">
// 							Home & Kitchen
// 						</option>
// 						<option value="search-alias=industrial-intl-ship">
// 							Industrial & Scientific
// 						</option>
// 						<option value="search-alias=digital-text">Kindle Store</option>
// 						<option value="search-alias=luggage-intl-ship">Luggage</option>
// 						<option value="search-alias=fashion-mens-intl-ship">
// 							Men's Fashion
// 						</option>
// 						<option value="search-alias=movies-tv-intl-ship">
// 							Movies & TV
// 						</option>
// 						<option value="search-alias=music-intl-ship">
// 							Music, CDs & Vinyl
// 						</option>
// 						<option value="search-alias=pets-intl-ship">Pet Supplies</option>
// 						<option value="search-alias=instant-video">Prime Video</option>
// 						<option value="search-alias=software-intl-ship">Software</option>
// 						<option value="search-alias=sporting-intl-ship">
// 							Sports & Outdoors
// 						</option>
// 						<option value="search-alias=tools-intl-ship">
// 							Tools & Home Improvement
// 						</option>
// 						<option value="search-alias=toys-and-games-intl-ship">
// 							Toys & Games
// 						</option>
// 						<option value="search-alias=videogames-intl-ship">
// 							Video Games
// 						</option>
// 						<option value="search-alias=fashion-womens-intl-ship">
// 							Women's Fashion
// 						</option>
// 					</select>
// 					<input
// 						className="header__search-input"
// 						type="text"
// 						placeholder="Search product"
// 					/>
// 					<button className="header__search-button">
// 						<BsSearch />
// 					</button>
// 				</div>

// 				<div className="header__options-section ">
// 					<div className="header__option one">
// 						<img
// 							className="header__flag"
// 							src="https://img.freepik.com/premium-vector/flag-united-states-america-vector-illustration_109161-7919.jpg?w=1060"
// 							alt="Flag"
// 						/>
// 						<select className="header__language-select">
// 							<option value="">EN</option>
// 						</select>
// 					</div>

// 					<Link className="header__option" to="/auth">
// 						<div>
// 							<p>Hello, Sign In</p>
// 							<span>Account & Lists</span>
// 							<BsFillPersonFill className="header__icon" />
// 						</div>
// 					</Link>

// 					<Link className="header__option" to="/orders">
// 						<div>
// 							<p>Returns</p>
// 							<span>& Orders</span>
// 						</div>
// 					</Link>

// 					<Link className="header__option header__cart" to="/cart">
// 						<span className="header__cart-count">0</span>
// 						<BsFillCartFill size={35} className="header__icon" />
// 					</Link>
// 				</div>
// 			</header>
// 			<Nav />
// 		</>
// 	);
// }

// export default Header;
// import React from "react";
// import { BsSearch, BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { SlLocationPin } from "react-icons/sl";
// import { useCart } from "../CartContext";
// import "./header.css";
// import Nav from "./Nav";

// function Header() {
// 	const { cart } = useCart();

// 	return (
// 		<>
// 			<header className="header">
// 				<div className="header__logo-section">
// 					<Link to="/">
// 						<img
// 							className="header__logo"
// 							src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
// 							alt="Amazon Logo"
// 						/>
// 					</Link>
// 					<div className="header__location">
// 						<SlLocationPin className="header__location-icon" />
// 						<div className="header__location-text">
// 							<p className="header__location-deliver">Deliver to</p>
// 							<span className="header__location-country">Ethiopia</span>
// 						</div>
// 					</div>
// 				</div>

// 				<div className="header__search-section">
// 					<select className="header__search-select" name="">
// 						<option selected="selected">All</option>
// 						<option selected="selected">All</option>
// 						<option value="search-alias=arts-crafts-intl-ship">
// 							Arts & Crafts
// 						</option>
// 						<option value="search-alias=automotive-intl-ship">
// 							Automotive
// 						</option>
// 						<option value="search-alias=baby-products-intl-ship">Baby</option>
// 						<option value="search-alias=beauty-intl-ship">
// 							Beauty & Personal Care
// 						</option>
// 						<option value="search-alias=stripbooks-intl-ship">Books</option>
// 						<option value="search-alias=fashion-boys-intl-ship">
// 							Boys' Fashion
// 						</option>
// 						<option value="search-alias=computers-intl-ship">Computers</option>
// 						<option value="search-alias=deals-intl-ship">Deals</option>
// 						<option value="search-alias=digital-music">Digital Music</option>
// 						<option value="search-alias=electronics-intl-ship">
// 							Electronics
// 						</option>
// 						<option value="search-alias=fashion-girls-intl-ship">
// 							Girls' Fashion
// 						</option>
// 						<option value="search-alias=hpc-intl-ship">
// 							Health & Household
// 						</option>
// 						<option value="search-alias=kitchen-intl-ship">
// 							Home & Kitchen
// 						</option>
// 						<option value="search-alias=industrial-intl-ship">
// 							Industrial & Scientific
// 						</option>
// 						<option value="search-alias=digital-text">Kindle Store</option>
// 						<option value="search-alias=luggage-intl-ship">Luggage</option>
// 						<option value="search-alias=fashion-mens-intl-ship">
// 							Men's Fashion
// 						</option>
// 						<option value="search-alias=movies-tv-intl-ship">
// 							Movies & TV
// 						</option>
// 						<option value="search-alias=music-intl-ship">
// 							Music, CDs & Vinyl
// 						</option>
// 						<option value="search-alias=pets-intl-ship">Pet Supplies</option>
// 						<option value="search-alias=instant-video">Prime Video</option>
// 						<option value="search-alias=software-intl-ship">Software</option>
// 						<option value="search-alias=sporting-intl-ship">
// 							Sports & Outdoors
// 						</option>
// 						<option value="search-alias=tools-intl-ship">
// 							Tools & Home Improvement
// 						</option>
// 						<option value="search-alias=toys-and-games-intl-ship">
// 							Toys & Games
// 						</option>
// 						<option value="search-alias=videogames-intl-ship">
// 							Video Games
// 						</option>
// 						<option value="search-alias=fashion-womens-intl-ship">
// 							Women's Fashion
// 						</option>
// 						{/* other options */}
// 					</select>
// 					<input
// 						className="header__search-input"
// 						type="text"
// 						placeholder="Search product"
// 					/>
// 					<button className="header__search-button">
// 						<BsSearch />
// 					</button>
// 				</div>

// 				<div className="header__options-section ">
// 					<div className="header__option one">
// 						<img
// 							className="header__flag"
// 							src="https://img.freepik.com/premium-vector/flag-united-states-america-vector-illustration_109161-7919.jpg?w=1060"
// 							alt="Flag"
// 						/>
// 						<select className="header__language-select">
// 							<option value="">EN</option>
// 						</select>
// 					</div>

// 					<Link className="header__option" to="/auth">
// 						<div>
// 							<p>Hello, Sign In</p>
// 							<span>Account & Lists</span>
// 							<BsFillPersonFill className="header__icon" />
// 						</div>
// 					</Link>

// 					<Link className="header__option" to="/orders">
// 						<div>
// 							<p>Returns</p>
// 							<span>& Orders</span>
// 						</div>
// 					</Link>

// 					<Link className="header__option header__cart" to="/cart">
// 						<span className="header__cart-count">{cart.length}</span>
// 						<BsFillCartFill size={35} className="header__icon" />
// 					</Link>
// 				</div>
// 			</header>
// 			<Nav />
// 		</>
// 	);
// }

// export default Header;
import React from "react";
import { BsSearch, BsFillPersonFill, BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { useCart } from "../CartContext";
import { useUser } from "../userContext";
import "./header.css";
import Nav from "./Nav";
import { auth } from "../util/firebase";

function Header() {
	const { cart } = useCart();
    const { user } = useUser()

	const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<>
			<header className="header">
				<div className="header__logo-section">
					<Link to="/">
						<img
							className="header__logo"
							src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
							alt="Amazon Logo"
						/>
					</Link>
					<div className="header__location">
						<SlLocationPin className="header__location-icon" />
						<div className="header__location-text">
							<p className="header__location-deliver">Deliver to</p>
							<span className="header__location-country">Ethiopia</span>
						</div>
					</div>
				</div>

				<div className="header__search-section">
					<select className="header__search-select" name="">
						<option selected="selected">All</option>
						<option selected="selected">All</option>
						<option value="search-alias=arts-crafts-intl-ship">
							Arts & Crafts
						</option>
					</select>
					<input
						className="header__search-input"
						type="text"
						placeholder="Search product"
					/>
					<button className="header__search-button">
						<BsSearch />
					</button>
				</div>

				<div className="header__options-section ">
					<div className="header__option one">
						<img
							className="header__flag"
							src="https://img.freepik.com/premium-vector/flag-united-states-america-vector-illustration_109161-7919.jpg?w=1060"
							alt="Flag"
						/>
						<select className="header__language-select">
							<option value="">EN</option>
						</select>
					</div>

					<Link className="header__option" to={!user && "/auth"}>
						<div>
							{user ? (
								<>
									<p>Hello {user?.email?.split("@")[0]}</p>
									<span onClick={()=>{
                                        auth.signOut();
                                    }}>Sign Out</span>
								</>
							) : (
								<>
									<p>Sign In</p>
									<span>Account & Lists</span>
								</>
							)}

							<BsFillPersonFill className="header__icon" />
						</div>
					</Link>

					<Link className="header__option" to="/orders">
						<div>
							<p>Returns</p>
							<span>& Orders</span>
						</div>
					</Link>

					<Link className="header__option header__cart" to="/cart">
						<span className="header__cart-count">{cartItemCount}</span>
						<BsFillCartFill size={35} className="header__icon" />
					</Link>
				</div>
			</header>
			<Nav />
		</>
	);
}

export default Header;
