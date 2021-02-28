// const { default: axios } = require("axios")

// Main variables and endpoints here.

const leftPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=cnn.com,nbcnews.com,washingtonpost.com&sortBy=publishedAt&language=en&apiKey=95a83d20ba6a4d7e8466a1e9fc57b3d2'
const midPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=95a83d20ba6a4d7e8466a1e9fc57b3d2'
const rightPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=nypost.com,foxnews.com&sortBy=publishedAt&language=en&apiKey=95a83d20ba6a4d7e8466a1e9fc57b3d2'
const leftHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=cnn.com,nbcnews.com,washingtonpost.com&sortBy=publishedAt&language=en&apiKey=95a83d20ba6a4d7e8466a1e9fc57b3d2'
const midHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=95a83d20ba6a4d7e8466a1e9fc57b3d2'
const rightHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=nypost.com,foxnews.com&sortBy=publishedAt&language=en&apiKey=95a83d20ba6a4d7e8466a1e9fc57b3d2'
const leftSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=cnn.com,nbcnews.com,washingtonpost.com&sortBy=publishedAt&language=en&apiKey=95a83d20ba6a4d7e8466a1e9fc57b3d2'
const midSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=95a83d20ba6a4d7e8466a1e9fc57b3d2'
const rightSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=foxnews.com,nypost.com&sortBy=publishedAt&language=en&apiKey=95a83d20ba6a4d7e8466a1e9fc57b3d2'
const leftScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=cnn.com,nbcnews.com,washingtonpost.com&sortBy=publishedAt&language=en&apiKey=95a83d20ba6a4d7e8466a1e9fc57b3d2'
const midScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=95a83d20ba6a4d7e8466a1e9fc57b3d2'
const rightScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=foxnews.com,nypost.com&sortBy=publishedAt&language=en&apiKey=95a83d20ba6a4d7e8466a1e9fc57b3d2'

let cnnLogo = document.createElement('img')
cnnLogo.src = "assets/cnnlogo.jpg"
cnnLogo.alt = "C N N"
cnnLogo.style.height = "25px";
cnnLogo.style.width = "125px";
let wapoLogo = document.createElement('img')
wapoLogo.src = "assets/wapologo.jpg"
wapoLogo.alt = "washington post"
wapoLogo.style.height = "25px";
wapoLogo.style.width = "200px";
let nbcLogo = document.createElement('img')
nbcLogo.src = "assets/nbclogo.png"
nbcLogo.alt = "N B C"
nbcLogo.style.height = "25px";
nbcLogo.style.width = "125px";
let apLogo = document.createElement('img')
apLogo.src = "assets/aplogo.png"
apLogo.alt = "Associated Press"
let pbsLogo = document.createElement('img')
pbsLogo.src = "assets/pbslogo.jpg"
pbsLogo.alt = "P B S News"
let nprLogo = document.createElement('img')
nprLogo.src = "assets/nprlogo.png"
nprLogo.alt = "N P R"
let foxLogo = document.createElement('img')
foxLogo.src = "assets/foxnewslogo.png"
foxLogo.alt = "Fox News"
let nypLogo = document.createElement('img')
nypLogo.src = "assets/newyorkpostlogo.png"
nypLogo.alt = "The New York Post"


  


const fetchNews = async () => {
  const cors = 'http://cors-anywhere.herokuapp.com/'
 
  try {
    let leftPotus = await axios.get(`${cors}${leftPotusURL}`);
    let midPotus = await axios.get(`${cors}${midPotusURL}`);
    let rightPotus = await axios.get(`${cors}${rightPotusURL}`);
    let leftHouse = await axios.get(`${cors}${leftHouseURL}`);
    let midHouse = await axios.get(`${cors}${midHouseURL}`);
    let rightHouse = await axios.get(`${cors}${rightHouseURL}`);
    let leftSenate = await axios.get(`${cors}${leftSenateURL}`);
    let midSenate = await axios.get(`${cors}${midSenateURL}`);
    let rightSenate = await axios.get(`${cors}${rightSenateURL}`);
    let leftScotus = await axios.get(`${cors}${leftScotusURL}`);
    let midScotus = await axios.get(`${cors}${midScotusURL}`);
    let rightScotus = await axios.get(`${cors}${rightScotusURL}`);
    for (let i = 0; i < 5; i++){
      const leftPotusSec = document.querySelector("#left-potus")
      let left = leftPotus.data.articles

       
      const h2 = document.createElement('h2')
      const p = document.createElement('p')
         const p2 = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
      const article = document.createElement('article')
         img.src = left[i].urlToImage
         let network = left[i].source.name
      let title = left[i].title
      let description = left[i].description
      a.href = left[i].url
      a.textContent = "Click here to read the full article"
      a.target = "_blank"
      
      h2.textContent = network

      p.textContent = title
      p2.textContent = description
        article.append(h2)
         article.append(img)
      article.append(p)
      article.append(p2)
      article.append(a)
      leftPotusSec.append(article)
      
     
      a.textContent = "Click here to read the full article"
      a.target = "_blank"
      
        //  h2.textContent = network
      p.textContent = title
        //  article.append(h2)
        
    }
    
      
    for (let i = 0; i < 5; i++){
      const midPotusSec = document.querySelector("#mid-potus")
      let mid = midPotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
      const article = document.createElement('article')

         img.src = mid[i].urlToImage
         let network = mid[i].source.name
      let title = mid[i].title
      a.href = mid[i].url
      h2.textContent = network
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
      p.textContent = title
      article.append(h2)
         article.append(img)
      article.append(p)
      article.append(a)
      midPotusSec.append(article)
        
    }
    
    for (let i = 0; i < 5; i++){
      const rightPotusSec = document.querySelector("#right-potus")
      let right = rightPotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
      const article = document.createElement('article')

         img.src = right[i].urlToImage
         let network = right[i].source.name
      let title = right[i].title
      a.href = right[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         article.append(h2)
         article.append(img)
      article.append(p)
      article.append(a)
      rightPotusSec.append(article)
        
    }

    for (let i = 0; i < 5; i++){
      const leftHouseSec = document.querySelector("#left-house")
      let left = leftHouse.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
      const article = document.createElement('article')

         img.src = left[i].urlToImage
         let network = left[i].source.name
      let title = left[i].title
      a.href = left[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         article.append(h2)
         article.append(img)
      article.append(p)
      article.append(a)
      leftHouseSec.append(article)
        
    }

    for (let i = 0; i < 5; i++){
      const midHouseSec = document.querySelector("#mid-house")
      let mid = midHouse.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
      const article = document.createElement('article')

         img.src = mid[i].urlToImage
         let network = mid[i].source.name
      let title = mid[i].title
      a.href = mid[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         article.append(h2)
         article.append(img)
      article.append(p)
      article.append(a)
      midHouseSec.append(article)

        
    }

    for (let i = 0; i < 5; i++){
      const rightHouseSec = document.querySelector("#right-house")
      let right = rightHouse.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
      const article = document.createElement('article')

         img.src = right[i].urlToImage
         let network = right[i].source.name
      let title = right[i].title
      a.href = right[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         article.append(h2)
         article.append(img)
      article.append(p)
      article.append(a)
      rightHouseSec.append(article)
        
    }

    for (let i = 0; i < 5; i++){
      const leftSenateSec = document.querySelector("#left-senate")
      let left = leftSenate.data.articles

       
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const img = document.createElement('img')
      const a = document.createElement('a')
      const article = document.createElement('article')

        a.href = left[i].url
        img.src = left[i].urlToImage
        let network = left[i].source.name
        let title = left[i].title
        a.textContent = "Click here to read the full article"
        a.target = "_blank"
        h2.textContent = network
        p.textContent = title
        article.append(h2)
         article.append(img)
      article.append(p)
      article.append(a)
      leftSenateSec.append(article)
        
    }

    for (let i = 0; i < 5; i++){
      const midSenateSec = document.querySelector("#mid-senate")
      let mid = midSenate.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
      const article = document.createElement('article')

         img.src = mid[i].urlToImage
         let network = mid[i].source.name
      let title = mid[i].title
      a.href = mid[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         article.append(h2)
         article.append(img)
      article.append(p)
      article.append(a)
      midSenateSec.append(article)

        
    }

    for (let i = 0; i < 5; i++){
      const rightSenateSec = document.querySelector("#right-senate")
      let right = rightSenate.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
      const article = document.createElement('article')

         img.src = right[i].urlToImage
         let network = right[i].source.name
      let title = right[i].title
      a.href = right[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         article.append(h2)
         article.append(img)
      article.append(p)
      article.append(a)
      rightSenateSec.append(article)

        
    }

    for (let i = 0; i < 5; i++){
      const leftScotusSec = document.querySelector("#left-scotus")
      let left = leftScotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
      const article = document.createElement('article')

         img.src = left[i].urlToImage
         let network = left[i].source.name
      let title = left[i].title
      a.href = left[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         article.append(h2)
         article.append(img)
      article.append(p)
      article.append(a)
      leftScotusSec.append(article)
        

        
    }

    for (let i = 0; i < 5; i++){
      const midScotusSec = document.querySelector("#mid-scotus")
      let mid = midScotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
      const article = document.createElement('article')

         img.src = mid[i].urlToImage
         let network = mid[i].source.name
      let title = mid[i].title
      a.href = mid[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         article.append(h2)
         article.append(img)
      article.append(p)
      article.append(a)
      midScotusSec.append(article)

        
    }

    for (let i = 0; i < 5; i++){
      const rightScotusSec = document.querySelector("#right-scotus")
      let right = rightScotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
      const article = document.createElement('article')

         img.src = right[i].urlToImage
         let network = right[i].source.name
        let title = right[i].title
         a.href = right[i].url
        a.textContent = "Click here to read the full article"
         a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         article.append(h2)
         article.append(img)
      article.append(p)
      article.append(a)
      rightScotusSec.append(article)

        
    }
    
    
  }
  catch (err) {
    console.log(err)
  }
  
  
}





fetchNews()





// AXIOS API CALL




// AXIOS API CALL


