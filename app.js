// const { default: axios } = require("axios")

// Main variables and endpoints here.

const leftPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=cnn.com,nbcnews.com,washingtonpost.com,nytimes.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const midPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const rightPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=nypost.com,foxnews.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const leftHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=cnn.com,nbcnews.com,washingtonpost.com,nytimes.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const midHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const rightHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=nypost.com,foxnews.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const leftSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=cnn.com,nbcnews.com,washingtonpost.com,nytimes.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const midSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const rightSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=foxnews.com,nypost.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const leftScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=cnn.com,nbcnews.com,washingtonpost.com,nytimes.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const midScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const rightScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=foxnews.com,nypost.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'



  


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
      const img = document.createElement('img')
      const a = document.createElement('a')
         img.src = left[i].urlToImage
         let network = left[i].source.name
      let title = left[i].title
      a.href = left[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         leftPotusSec.append(h2)
         leftPotusSec.append(img)
      leftPotusSec.append(p)
      leftPotusSec.append(a)
    }
    
      
    for (let i = 0; i < 5; i++){
      const midPotusSec = document.querySelector("#mid-potus")
      let mid = midPotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
         img.src = mid[i].urlToImage
         let network = mid[i].source.name
      let title = mid[i].title
      a.href = mid[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         midPotusSec.append(h2)
         midPotusSec.append(img)
      midPotusSec.append(p)
      midPotusSec.append(a)
        
    }
    
    for (let i = 0; i < 5; i++){
      const rightPotusSec = document.querySelector("#right-potus")
      let right = rightPotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
         img.src = right[i].urlToImage
         let network = right[i].source.name
      let title = right[i].title
      a.href = right[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         rightPotusSec.append(h2)
         rightPotusSec.append(img)
      rightPotusSec.append(p)
      rightPotusSec.append(a)
        
    }

    for (let i = 0; i < 5; i++){
      const leftHouseSec = document.querySelector("#left-house")
      let left = leftHouse.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
         img.src = left[i].urlToImage
         let network = left[i].source.name
      let title = left[i].title
      a.href = left[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         leftHouseSec.append(h2)
         leftHouseSec.append(img)
      leftHouseSec.append(p)
      leftHouseSec.append(a)

        
    }

    for (let i = 0; i < 5; i++){
      const midHouseSec = document.querySelector("#mid-house")
      let mid = midHouse.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
         img.src = mid[i].urlToImage
         let network = mid[i].source.name
      let title = mid[i].title
      a.href = mid[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         midHouseSec.append(h2)
         midHouseSec.append(img)
      midHouseSec.append(p)
      midHouseSec.append(a)

        
    }

    for (let i = 0; i < 5; i++){
      const rightHouseSec = document.querySelector("#right-house")
      let right = rightHouse.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
         img.src = right[i].urlToImage
         let network = right[i].source.name
      let title = right[i].title
      a.href = right[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         rightHouseSec.append(h2)
         rightHouseSec.append(img)
      rightHouseSec.append(p)
      rightHouseSec.append(a)
        
    }

    for (let i = 0; i < 5; i++){
      const leftSenateSec = document.querySelector("#left-senate")
      let left = leftSenate.data.articles

       
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const img = document.createElement('img')
        const a = document.createElement('a')
        a.href = left[i].url
        img.src = left[i].urlToImage
        let network = left[i].source.name
        let title = left[i].title
        a.textContent = "Click here to read the full article"
        a.target = "_blank"
        h2.textContent = network
        p.textContent = title
        leftSenateSec.append(h2)
        leftSenateSec.append(img)
      leftSenateSec.append(p)
      leftSenateSec.append(a)
        
    }

    for (let i = 0; i < 5; i++){
      const midSenateSec = document.querySelector("#mid-senate")
      let mid = midSenate.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
         img.src = mid[i].urlToImage
         let network = mid[i].source.name
      let title = mid[i].title
      a.href = mid[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         midSenateSec.append(h2)
         midSenateSec.append(img)
      midSenateSec.append(p)
      midSenateSec.append(a)

        
    }

    for (let i = 0; i < 5; i++){
      const rightSenateSec = document.querySelector("#right-senate")
      let right = rightSenate.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
         img.src = right[i].urlToImage
         let network = right[i].source.name
      let title = right[i].title
      a.href = right[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         rightSenateSec.append(h2)
         rightSenateSec.append(img)
      rightSenateSec.append(p)
      rightSenateSec.append(a)

        
    }

    for (let i = 0; i < 5; i++){
      const leftScotusSec = document.querySelector("#left-scotus")
      let left = leftScotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
         img.src = left[i].urlToImage
         let network = left[i].source.name
      let title = left[i].title
      a.href = left[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         leftScotusSec.append(h2)
         leftScotusSec.append(img)
      leftScotusSec.append(p)
      leftScotusSec.append(a)

        
    }

    for (let i = 0; i < 5; i++){
      const midScotusSec = document.querySelector("#mid-scotus")
      let mid = midScotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
         img.src = mid[i].urlToImage
         let network = mid[i].source.name
      let title = mid[i].title
      a.href = mid[i].url
      a.textContent = "Click here to read the full article"
     a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         midScotusSec.append(h2)
         midScotusSec.append(img)
      midScotusSec.append(p)
      midScotusSec.append(a)

        
    }

    for (let i = 0; i < 5; i++){
      const rightScotusSec = document.querySelector("#right-scotus")
      let right = rightScotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
      const img = document.createElement('img')
      const a = document.createElement('a')
         img.src = right[i].urlToImage
         let network = right[i].source.name
        let title = right[i].title
         a.href = right[i].url
        a.textContent = "Click here to read the full article"
         a.target = "_blank"
         h2.textContent = network
         p.textContent = title
         rightScotusSec.append(h2)
         rightScotusSec.append(img)
        rightScotusSec.append(p)
        rightScotusSec.append(a)

        
    }
    
    
  }
  catch (err) {
    console.log(err)
  }
  
  
}





fetchNews()





// AXIOS API CALL




// AXIOS API CALL


