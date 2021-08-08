import React from "react";
import { Link } from "gatsby";
import {
	container,
	heading,
	navLinks,
	navLinkItem,
	navLinkText,
} from "../styles/layout.module.css";

export default ({ pageTitle, children }) => {
	return (
		<div className={container}>
			<title>{pageTitle}</title>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItem}>
						<Link to="/" className={navLinkText}>
							Home
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to="/about" className={navLinkText}>
							About
						</Link>
					</li>
				</ul>
			</nav>
			<main>
				<h1 className={heading}>{pageTitle}</h1>
				{children}
			</main>
		</div>
	);
};