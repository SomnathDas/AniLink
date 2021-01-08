const { search, getAnime, getQualities } = require('anigrab').sites.siteLoader(
    'animeout'
);
const fs = require('fs');

async function getAnimeDownloadLinksByURL(anime_Link) {
    let episodesUrlArray = [];
    
    const anime = await getAnime(anime_Link); // Retrieves the title of the anime and it's episodes, again this is awaitable
 
    let quals720p = `✨️ *Direct [720p] Links for ${anime.title}*\n\n`;
    let quals1080p = `✨️ *Direct [1080p] Links for ${anime.title}*\n\n`;
    let qualsXoXop = `✨️ *Direct Links for ${anime.title}*\n\n`;

    console.log("Started")

    for(let i = 0; i < anime.episodes.length; i++) {
        let episodeURL = anime.episodes[i].url;
        let directUrl = await getQualities(episodeURL);
        episodesUrlArray.push(directUrl)
        //console.log(episodesUrlArray[i]);
       
    }
    console.log("Working on...")
    
    for(let i = 0; i < episodesUrlArray.length; i++) {
        let title = anime.episodes[i].title;
        const qObj = Object.fromEntries(episodesUrlArray[i].qualities)
        const li = Object.keys(qObj)
       
        for (let i = 0; i < li.length; i++) {
            if(li[i] == '720p') {
                quals720p += `Title: ${title}
            🥇️ *${li[i]}* : ${encodeURI(qObj[li[i]].url)}\n\n`
            } else if (li[i] == '1080p') {
                quals1080p += `Title: ${title}
            🥇️ *${li[i]}* : ${encodeURI(qObj[li[i]].url)}\n\n`
            } else 
            {
                qualsXoXop += `Title: ${title}
            🥇️ *${li[i]}* : ${encodeURI(qObj[li[i]].url)}\n\n`
            }
    
        }
        
    }
    console.log("Done");
    // Writing all links to respective text files
    fs.writeFile('720p.txt', quals720p, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    })
    fs.writeFile('1080p.txt', quals1080p, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    }) 
    fs.writeFile('ElseLinks.txt', qualsXoXop, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    })  
    
    // if you want, you can directly return the url by removing // from below line
    // return [quals720p, quals1080p]; //returns an array, why not follow me on Instagram?
    
    // Instagram: @samurai3247 ;)
    
    //console.log(quals1080p);
    //console.log(quals720p);
    
}

async function getAnimeDownloadLinksByName(anime_Name) {
    let episodesUrlArray = [];
    const searchResults = await search(anime_Name); // Initiates a search for the anime by the name, this is a promise so can be awaited
    const { url } = searchResults[0]; // Use destructuring to get url of search result at index 0 [It gets the top-most search result]
    const anime = await getAnime(url); // Retrieves the title of the anime and it's episodes, again this is awaitable
    
    let quals720p = `✨️ *Direct [720p] Links for ${anime.title}*\n\n`;
    let quals1080p = `✨️ *Direct [1080p] Links for ${anime.title}*\n\n`;
    let qualsXoXop = `✨️ *Direct Links for ${anime.title}*\n\n`;

    for(let i = 0; i < anime.episodes.length; i++) {
        let episodeURL = anime.episodes[i].url;
        let directUrl = await getQualities(episodeURL);
        episodesUrlArray.push(directUrl);
       
    }
    
    //console.log(episodesUrlArray);
    for(let i = 0; i < episodesUrlArray.length; i++) {
        let title = anime.episodes[i].title;
        const qObj = Object.fromEntries(episodesUrlArray[i].qualities)
        const li = Object.keys(qObj)
       
        for (let i = 0; i < li.length; i++) {
            if(li[i] == '720p') {
                quals720p += `Title: ${title}
            🥇️ *${li[i]}* : ${encodeURI(qObj[li[i]].url)}\n\n`
            } else if (li[i] == '1080p') {
                quals1080p += `Title: ${title}
            🥇️ *${li[i]}* : ${encodeURI(qObj[li[i]].url)}\n\n`
            } else 
            {
                qualsXoXop += `Title: ${title}
            🥇️ *${li[i]}* : ${encodeURI(qObj[li[i]].url)}\n\n`
            }
    
        }
        
        
    }

    // Writing all links to respective text files
    fs.writeFile('720p.txt', quals720p, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    })
    fs.writeFile('1080p.txt', quals1080p, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    }) 
    fs.writeFile('ElseLinks.txt', qualsXoXop, (err) => { 
      
        // In case of a error throw err. 
        if (err) throw err; 
    })  
    
    // if you want, you can directly return the url by removing // from below line
    // return [quals720p, quals1080p]; //returns an array, why not follow me on Instagram?
    
    // Instagram: @samurai3247 ;)

    //console.log(quals1080p);
    //console.log(quals720p);

}

// Try, Run, Fun :) and Follow me on instagram cuz i am a man of culture uwu

(async()=> { // Make sure to use these methods inside async and also use await

    //let z = await getAnimeDownloadLinksByURL("https://www.animeout.xyz/download-one-piece-episodes-latest/");
    // console.log(z[0]);
    // let x = await getAnimeDownloadLinksByURL('https://www.animeout.xyz/shingeki-no-kyojin-the-final-season-1080p-300mb720p-150mbepisode-1/');
    // let y = await getAnimeDownloadLinksByName('shingeki no kyojin season 3');
    
    // Show the results aka Download Links
    // console.log(x[0]); 
    // console.log(y[0]);
})();

