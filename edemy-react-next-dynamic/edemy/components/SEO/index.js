import React from "react";
import Head from "next/head";

const SEO = ({ title, description, image }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta itemProp="name" content={title} />
			<meta itemProp="image" content={image} />
		</Head>
	);
};

SEO.defaultProps = {
	title: "eDemy - React Next.js Education LMS Template",
	description: "eDemy - React Next.js Education LMS Template",
	image: "https://res.cloudinary.com/dev-empty/image/upload/v1595838139/vivi/about-img-two.jpg",
};

export default SEO;
