


1)---> make sure you always use server component instead of client component
2)---> you need to create seperatecomponent if we need to use any button or useState instead of making the page to entirely to client
3)--->why server side? google bot or bing bot visit website they try to read html  contnet strucutre metadata, if user website client side, these information won't be there.
why? because in client side render  component  does , is it actualluy request the  javascript to downlaod the ui. so javascript need to downlaod the componenet 

4)  when bot find an url , it read metadata html structure   
5) on the client component it need to download the bundle
6) search engine not optimized for client side rendering from react,
7) keep minimal amount of functionality 

//-------------------- how to implement metadata


what is metadata? 

1) well metadata is the information you provide at the layout section   lang="en"
 head tag, you add information to thea head tag


2) in next js instead of adding just head tag on the layout.tsx we add it on the each page, 


aboutPage.tsx 


import {Metadata} from "next"



export const metadata:Metadata = {
    title:  "Amazing Recipes - Recipes.com",
    description:"find the best recipes in the wordl on this website",
    keywords:["recipes","food","best recipes"],
    opengraph:{
        title:"Best recipes in the world",
        description:"find the best recipes on this website",
        url:"nameofthesit.com",
        locale:"en_US",
        type:"website",

        images:[
            //image to show when our i need to see website on socialmedia 

            {
                url:"",
                width:"",
            }
        ]
    },
    //for twitter its  something different,

    twitter:{
        card:"summary_large_image",
        title:"Next.js SEO Crash Course",
        description:"Master metadata, robots, sitemaps, and more.",
        creator:"@pedrotech",
        //means the person or entity that created the webpage/content. Next.js turns this into:
        images:["https://eamxpl.com/seo.png]

    }

    //check below for notes
    robots:{
        index:true,  
        follow:true,
        nocache:false,
        googleBot:{
            index:true,
            follow:true,
            "max-snippet":-1,
            "max-image-preview":"large",
            "max-video-preview":-1,
        }
    }


}


If you're building a website for a client

Suppose:

Client/company: Acme Technologies
X account: @acmetech
You: Muneesh, the developer who built the website

twitter: {
    card: "summary_large_image",
    title: "Acme Technologies",
    description: "....",
    creator: "@acmetech",
    images: ["https://acme.com/og-image.png"],
}


You generally wouldn't put your own @muneesh there just because you developed the site.





//the title gonna show one social media preview and search result 

//description: it also show when you do the search .descipriotn helps to increase the clicks


//keywords: you can pass the list of keywords that hgonna help search engine columnns  understand how to read your page 


//opengraph: social media platform, you seasrch your deatils in will showup 




opengraph.xyz 






//-=-====================================

robots:{
        index:true,  
        follow:true,
        nocache:false,
        googleBot:{
            index:true,
            follow:true,
            "max-snippet":-1,
            "max-image-preview":"large",
            "max-video-preview":-1,
        }
    }





    1) index:true

    So:

index: true   → Google can index the page.Means:

Search engines are allowed to put this page in their search results.

For example, if your page is:

https://muneesh.dev/about

Google can index it and potentially show it when someone searches for relevant things.



index: false  → Google should not index the page

For your public portfolio:

index: true

is what you normally want.



2) follow:true

You can follow the links found on this page.
Google can crawl those links and discover those pages.


So:

About
 │
 ├── Projects
 │
 ├── Contact
 │
 └── Blog

Google can travel through those links.


follow: false

you're basically saying:

Don't follow links from this page for crawling purposes.




3) nocache: false
nocache: false

This one is a little different.

It means you're not asking the crawler to avoid caching the page. if search eninge not to cache,
if page chdange frequently or dynamic data then nochache is good. product page dont need caching


In other words:

nocache: false

means:

Don't impose a "do not cache" instruction.

But there's an important detail here: nocache isn't a particularly useful setting for modern Google SEO, and Google doesn't treat it as a standard Google Search indexing directive in the same way as noindex or nofollow.



4) google bot


This section provides Google-specific crawler instructions.



So you have two levels:


    // Google-specific instructions
    googleBot: {
        index: true,
        follow: true,
    }


The first section is general.

The googleBot section specifically targets Google's crawler.


Same basic concept as the top-level index:

Allow Googlebot to index this page.


Google follow: true
googleBot: {
    follow: true,
}

Tells Googlebot:

Follow the links on this page.


7. "max-snippet": -1

This one is more interesting.

"max-snippet": -1

It controls how much text Google can use from your page as a search-result snippet.

For example, imagine Google displays:

Muneesh | Full Stack Developer
--------------------------------
Muneesh is a software developer focused
on building modern web applications...

That descriptive text is a snippet.

-1 means:

There is no limit on the number of characters Google may use for the text snippet.



So:

"max-snippet": -1

means unlimited snippet length, subject to Google's own systems.

You can also specify a number:

"max-snippet": 160

meaning approximately:

Don't use more than 160 characters for the snippet.



8. "max-image-preview": "large"

This controls how large an image Google is allowed to show in search previews.

You have three main values:

"max-image-preview": "none"

No image preview.

"max-image-preview": "standard"

Standard-sized image preview.

"max-image-preview": "large"

Large image preview.

You're using:

"max-image-preview": "large"

which tells Google:

You can use a large image preview for this page.

For a portfolio, this is generally useful because your pages might have good visual content.



9. "max-video-preview": -1
"max-video-preview": -1

Controls how many seconds of video Google can use in a search preview.


The values work roughly like:

"max-video-preview": 0

Don't show a video preview.

"max-video-preview": 10

Allow up to 10 seconds.

"max-video-preview": -1

No duration limit.


"max-video-preview": -1

means:

Google can use any length of video preview it considers appropriate.


INDEX
↓
Google/search engines can index my page.

FOLLOW
↓
They can follow links on my page.

NOCACHE
↓
I'm not explicitly preventing caching.

GOOGLEBOT
↓
Google gets additional instructions.

max-snippet: -1
↓
No text-snippet length restriction.

max-image-preview: large
↓
Google can show a large image preview.

max-video-preview: -1
↓
No video-preview duration restriction.