import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

export const query = graphql`
	query {
		allMdx(sort: { fields: frontmatter___date }) {
			nodes {
				parent {
					... on File {
						modifiedTime(formatString: "MMMM D, YYYY")
					}
				}
				frontmatter {
					author
					title
					date(formatString: "MMMM D, YYYY")
				}
				id
				body
			}
		}
	}
`;

export default ({ data }) => {
	return (
		<Layout pageTitle="My Blog Posts">
			<ul>
				{data.allMdx.nodes.map(
					(node: {
						parent: {
							modifiedTime: string;
						};
						frontmatter: {
							author: string;
							title: string;
							date: string;
						};
						id: string;
						body: string;
					}) => (
						<article key={node.id}>
							<h2>{node.frontmatter.title}</h2>
							<p>by {node.frontmatter.author}</p>
							<p>posted: {node.frontmatter.date}</p>
							<p>modified: {node.parent.modifiedTime}</p>
							<MDXRenderer>{node.body}</MDXRenderer>
						</article>
					)
				)}
			</ul>
		</Layout>
	);
};
