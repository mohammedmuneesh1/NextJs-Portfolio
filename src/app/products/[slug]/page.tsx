import type { Metadata } from "next";
import React from "react";

const products = [
  {
    slug: "iphone-15",
    name: "iPhone 15",
    description:
      "Apple iPhone 15 with A16 Bionic chip and advanced camera.",
    price: 69999,
    category: "Smartphones",
    brand: "Apple",
    image: "/products/iphone-15.jpg",

    inStock: true,
    rating: 4.6,
    reviews: 124,
    features: [
      "A16 Bionic chip",
      "48MP Main Camera",
      "Super Retina XDR display",
      "USB-C connectivity",
    ],
  },

  {
    slug: "galaxy-s24",
    name: "Samsung Galaxy S24",
    description:
      "Samsung Galaxy S24 with AMOLED display and Galaxy AI.",
    price: 74999,
    category: "Smartphones",
    brand: "Samsung",
    image: "/products/galaxy-s24.jpg",

    inStock: true,
    rating: 4.5,
    reviews: 98,
    features: [
      "Galaxy AI",
      "AMOLED display",
      "50MP Camera",
      "Snapdragon processor",
    ],
  },

  {
    slug: "macbook-air-m3",
    name: "MacBook Air M3",
    description:
      "Lightweight MacBook Air powered by the Apple M3 chip.",
    price: 99999,
    category: "Laptops",
    brand: "Apple",
    image: "/products/macbook-air-m3.jpg",

    inStock: false,
    rating: 4.8,
    reviews: 156,
    features: [
      "Apple M3 chip",
      "13.6-inch Liquid Retina display",
      "18-hour battery life",
      "MagSafe charging",
    ],
  },
];

// Dynamic Metadata
export async function generateMetadata(
	{ params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

	const { slug } = await params;

	const product = products.find(
		(product) => product.slug === slug
	);

	if (!product) {
		return {
			title: "Product Not Found",
			description: "The requested product could not be found.",
		};
	}

	return {
		title: `${product.name} | My Store`,

		description: product.description,

		keywords: [
			product.name,
			product.brand,
			product.category,
			"buy online",
			"online store",
		],

		openGraph: {
			title: `${product.name} | My Store`,
			description: product.description,
			type: "website",
			images: [
				{
					url: product.image,
					width: 1200,
					height: 630,
					alt: product.name,
				},
			],
		},

		twitter: {
			card: "summary_large_image",
			title: `${product.name} | My Store`,
			description: product.description,
			images: [product.image],
		},

		robots: {
			index: true,
			follow: true,

			googleBot: {
				index: true,
				follow: true,
				"max-snippet": -1,
				"max-image-preview": "large",
				"max-video-preview": -1,
			},
		},
        alternates:{
        //  canonical: `https://muneesh.dev/products/${slug}`   
        }
	};
}



//--------------------- next js support like this using fetch memoize it 

// async function getProductFromAPI(slug: string) {
//   const res = await fetch(`https://api.example.com/products/${slug}`);
//   return res.json();
// }

// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const product = await getProductFromAPI(slug); // call #1
//   return { title: product.name };
// }

// export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const product = await getProductFromAPI(slug); // deduped — no second network request
//   return <div>{product.name}</div>;
// }





// import { cache } from 'react';
// import { api } from './configuration';

// export const getProductBySlug = cache(async (slug: string) => {
//   const { data } = await api.get(`/products/${slug}`);
//   return data;
// });



// Page
const Page = async (
	{ params }: { params: Promise<{ slug: string }> }
) => {

	const { slug } = await params;

	const product = products.find(
		(product) => product.slug === slug
	);

	if (!product) {
		return <h1>Product Not Found</h1>;
	}


    const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",

  name: product.name,
  description: product.description,

  brand: {
    "@type": "Brand",
    name: product.brand,
  },

  category: product.category,

  offers: {
    "@type": "Offer",
    price: product.price,
    priceCurrency: "USD",

    availability: product.inStock
      ? "https://schema.org/InStock"
      : "https://schema.org/OutOfStock",

    seller: {
      "@type": "Organization",
      name: "Metadata Course Store",
    },
  },

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: product.rating,
    reviewCount: product.reviews,
    bestRating: 5,
    worstRating: 1,
  },

  additionalProperty: product.features.map((feature) => ({
    "@type": "PropertyValue",
    name: "Feature",
    value: feature,
  })),
};



	return (
		<div>
            <script type="application/ld+json"
             dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}>

            </script>
			<h1>{product.name}</h1>

			<p>{product.description}</p>

			<p>Brand: {product.brand}</p>

			<p>Category: {product.category}</p>

			<p>Price: ₹{product.price}</p>

			<img
				src={product.image}
				alt={product.name}
				width={400}
			/>
		</div>
	);
};

export default Page;