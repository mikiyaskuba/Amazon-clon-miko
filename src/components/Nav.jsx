import React from "react";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css"; // Ensure to create a CSS file for custom styling

function Nav() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav-main">
			<div className="container-fluid">
				<div className="navbar-left d-flex align-items-center">
					<a href="#" id="nav-hamburger-menu" aria-label="Open Menu">
						<FaBars className="hm-icon" />
						<span className="hm-icon-label">All</span>
					</a>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse navbar-center" id="navbarNav">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" href="/gp/goldbox">
								Today's Deals
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/gp/buyagain">
								Buy Again
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="/gp/help/customer/display.html?nodeId=508510"
							>
								Customer Service
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/gp/browse.html?node=16115931011">
								Registry
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/gift-cards/b/">
								Gift Cards
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/b/?node=12766669011">
								Sell
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/gp/help/customer/accessibility">
								Disability Customer Support
							</a>
						</li>
					</ul>
				</div>
				{/* <div className="navbar-right">
					<div id="nav-swmslot"> */}
						{/* Scheduled SWM widget failed to render */}
					{/* </div> */}
				{/* </div> */}
			</div>
		</nav>
	);
}

export default Nav;
