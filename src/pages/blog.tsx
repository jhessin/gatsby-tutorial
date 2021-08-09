import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export const query = graphql`
	query {
		allFile(filter: { ext: { eq: ".mdx" } }) {
			edges {
				node {
					name
				}
			}
		}
	}
`;

export default ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			<ul>
				{data.allFile.edges.map(
					(node: {
						node: {
							name: string;
						};
					}) => (
						<li key={node.node.name}>{node.node.name}</li>
					)
				)}
			</ul>
		</Layout>
	);
};
