// const { default: axios } = require("axios")

// Main variables and endpoints here.

const leftPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=cnn.com,nbcnews.com&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'
const midPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'
const rightPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=nypost.com,foxnews.com&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'
const leftHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=cnn.com,nbcnews.com&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'
const midHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'
const rightHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=nypost.com,foxnews.com&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'
const leftSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=cnn.com,nbcnews.com&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'
const midSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'
const rightSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=foxnews.com,nypost.com&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'
const leftScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=cnn.com,nbcnews.com&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'
const midScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'
const rightScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=foxnews.com,nypost.com&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'



  


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
         img.src = left[i].urlToImage
         let network = left[i].source.name
         let title = left[i].title
         h2.textContent = network
         p.textContent = title
         leftPotusSec.append(h2)
         leftPotusSec.append(img)
         leftPotusSec.append(p)
        
    }
    
      
    for (let i = 0; i < 5; i++){
      const midPotusSec = document.querySelector("#mid-potus")
      let mid = midPotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
         const img = document.createElement('img')
         img.src = mid[i].urlToImage
         let network = mid[i].source.name
         let title = mid[i].title
         h2.textContent = network
         p.textContent = title
         midPotusSec.append(h2)
         midPotusSec.append(img)
         midPotusSec.append(p)
        
    }
    
    for (let i = 0; i < 5; i++){
      const rightPotusSec = document.querySelector("#right-potus")
      let right = rightPotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
         const img = document.createElement('img')
         img.src = right[i].urlToImage
         let network = right[i].source.name
         let title = right[i].title
         h2.textContent = network
         p.textContent = title
         rightPotusSec.append(h2)
         rightPotusSec.append(img)
         rightPotusSec.append(p)
        
    }

    for (let i = 0; i < 5; i++){
      const leftHouseSec = document.querySelector("#left-house")
      let left = leftHouse.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
         const img = document.createElement('img')
         img.src = left[i].urlToImage
         let network = left[i].source.name
         let title = left[i].title
         h2.textContent = network
         p.textContent = title
         leftHouseSec.append(h2)
         leftHouseSec.append(img)
         leftHouseSec.append(p)
        
    }

    for (let i = 0; i < 5; i++){
      const midHouseSec = document.querySelector("#mid-house")
      let mid = midHouse.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
         const img = document.createElement('img')
         img.src = mid[i].urlToImage
         let network = mid[i].source.name
         let title = mid[i].title
         h2.textContent = network
         p.textContent = title
         midHouseSec.append(h2)
         midHouseSec.append(img)
         midHouseSec.append(p)
        
    }

    for (let i = 0; i < 5; i++){
      const rightHouseSec = document.querySelector("#right-house")
      let right = rightHouse.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
         const img = document.createElement('img')
         img.src = right[i].urlToImage
         let network = right[i].source.name
         let title = right[i].title
         h2.textContent = network
         p.textContent = title
         rightHouseSec.append(h2)
         rightHouseSec.append(img)
         rightHouseSec.append(p)
        
    }

    for (let i = 0; i < 5; i++){
      const leftSenateSec = document.querySelector("#left-senate")
      let left = leftSenate.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
         const img = document.createElement('img')
         img.src = left[i].urlToImage
         let network = left[i].source.name
         let title = left[i].title
         h2.textContent = network
         p.textContent = title
         leftSenateSec.append(h2)
         leftSenateSec.append(img)
         leftSenateSec.append(p)
        
    }

    for (let i = 0; i < 5; i++){
      const midSenateSec = document.querySelector("#mid-senate")
      let mid = midSenate.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
         const img = document.createElement('img')
         img.src = mid[i].urlToImage
         let network = mid[i].source.name
         let title = mid[i].title
         h2.textContent = network
         p.textContent = title
         midSenateSec.append(h2)
         midSenateSec.append(img)
         midSenateSec.append(p)
        
    }

    for (let i = 0; i < 5; i++){
      const rightSenateSec = document.querySelector("#right-senate")
      let right = rightSenate.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
         const img = document.createElement('img')
         img.src = right[i].urlToImage
         let network = right[i].source.name
         let title = right[i].title
         h2.textContent = network
         p.textContent = title
         rightSenateSec.append(h2)
         rightSenateSec.append(img)
         rightSenateSec.append(p)
        
    }

    for (let i = 0; i < 5; i++){
      const leftScotusSec = document.querySelector("#left-scotus")
      let left = leftScotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
         const img = document.createElement('img')
         img.src = left[i].urlToImage
         let network = left[i].source.name
         let title = left[i].title
         h2.textContent = network
         p.textContent = title
         leftScotusSec.append(h2)
         leftScotusSec.append(img)
         leftScotusSec.append(p)
        
    }

    for (let i = 0; i < 5; i++){
      const midScotusSec = document.querySelector("#mid-scotus")
      let mid = midScotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
         const img = document.createElement('img')
         img.src = mid[i].urlToImage
         let network = mid[i].source.name
         let title = mid[i].title
         h2.textContent = network
         p.textContent = title
         midScotusSec.append(h2)
         midScotusSec.append(img)
         midScotusSec.append(p)
        
    }

    for (let i = 0; i < 5; i++){
      const rightScotusSec = document.querySelector("#right-scotus")
      let right = rightScotus.data.articles

       
         const h2 = document.createElement('h2')
         const p = document.createElement('p')
         const img = document.createElement('img')
         img.src = right[i].urlToImage
         let network = right[i].source.name
         let title = right[i].title
         h2.textContent = network
         p.textContent = title
         rightScotusSec.append(h2)
         rightScotusSec.append(img)
         rightScotusSec.append(p)
        
    }
////////////////////////////////////////Category pages below
    // for (let i = 0; i < 10; i++){
    //   const leftPotusSec = document.querySelector("#full-left-potus")
    //   let left = leftPotus.data.articles

       
    //      const h2 = document.createElement('h2')
    //      const p = document.createElement('p')
    //      const img = document.createElement('img')
    //      img.src = left[i].urlToImage
    //      let network = left[i].source.name
    //      let title = left[i].title
    //      h2.textContent = network
    //      p.textContent = title
    //      leftPotusSec.append(h2)
    //      leftPotusSec.append(img)
    //      leftPotusSec.append(p)
        
    // }

    // for (let i = 0; i < 10; i++){
    //   const midPotusSec = document.querySelector("#full-mid-potus")
    //   let mid = midPotus.data.articles

       
    //      const h2 = document.createElement('h2')
    //      const p = document.createElement('p')
    //      const img = document.createElement('img')
    //      img.src = mid[i].urlToImage
    //      let network = mid[i].source.name
    //      let title = mid[i].title
    //      h2.textContent = network
    //      p.textContent = title
    //      midPotusSec.append(h2)
    //      midPotusSec.append(img)
    //      midPotusSec.append(p)
        
    // }

    // for (let i = 0; i < 10; i++){
    //   const rightPotusSec = document.querySelector("#full-right-potus")
    //   let right = rightPotus.data.articles

       
    //      const h2 = document.createElement('h2')
    //      const p = document.createElement('p')
    //      const img = document.createElement('img')
    //      img.src = right[i].urlToImage
    //      let network = right[i].source.name
    //      let title = right[i].title
    //      h2.textContent = network
    //      p.textContent = title
    //      rightPotusSec.append(h2)
    //      rightPotusSec.append(img)
    //      rightPotusSec.append(p)
        
    // }

    
    
  }
  catch (err) {
    console.log(err)
  }
  
  
}

async function fetchPotus() {
  const cors = 'http://cors-anywhere.herokuapp.com/'
  let leftPotus = await axios.get(`${cors}${leftPotusURL}`);
    let midPotus = await axios.get(`${cors}${midPotusURL}`);
  let rightPotus = await axios.get(`${cors}${rightPotusURL}`);
  
  
}

fetchNews()





// AXIOS API CALL




// AXIOS API CALL


