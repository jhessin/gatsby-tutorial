import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

export default () => {
	return (
		<Layout pageTitle="About Me">
			<p>
				Hi there! I'm the proud creator of this site, which I built with Gatsby.
			</p>
			<StaticImage alt="A simple icon" src="../images/icon.png" />
		</Layout>
	);
};
