


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
    opengraph:


}


//the title gonna show one social media preview and search result 

//description: it also show when you do the search .descipriotn helps to increase the clicks


//keywords: you can pass the list of keywords that hgonna help search engine columnns  understand how to read your page 


//opengraph: social media platform, you seasrch your deatils in will showup 




opengraph.xyz 


