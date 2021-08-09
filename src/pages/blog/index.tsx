import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";

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
				slug
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
						slug: string;
					}) => (
						<article key={node.id}>
							<h2>
								<Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
							</h2>
							<p>by {node.frontmatter.author}</p>
							<p>Posted: {node.frontmatter.date}</p>
						</article>
					)
				)}
			</ul>
		</Layout>
	);
};
