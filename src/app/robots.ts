import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'yourwebsiteurl.com'
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/dashboard/", "/api/"],
			},
			{
				userAgent: "Googlebot",
				allow: "/",
				disallow: ["/dashboard/", "/api/"],
			},
		],
        sitemap:  `${baseUrl}/sitemap.xml`,
	};

}



//products?size=15
//products?color=red

//the bot will retreat this url as two different urls to prevent this add alternates:on the anonical in the products page 