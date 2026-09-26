

//sitemap: in reality its xml file , but with next js we can make it .ts 

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl= "realurl.com"
    return [
        {
            url:baseUrl  ,   //put real ulr here
            lastModified:new Date(),
            changeFrequency:"weekly",
            priority:1,
        },{
            url:`${baseUrl}/about`,
            lastModified:new Date(),
            changeFrequency:"monthly",
            priority:0.8,  //"This page is important, but slightly less important than the homepage."
        }
    ]
}


    //1 has higher priority than 0.8.


// means:

// "This is one of my most important pages."