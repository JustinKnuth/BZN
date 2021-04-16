// Main variables and endpoints here.

const leftPotusURL = 'https://arcane-badlands-92920.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=Biden&domains=cnn.com,nbcnews.com,washingtonpost.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const midPotusURL = 'https://arcane-badlands-92920.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=Biden&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const rightPotusURL = 'https://arcane-badlands-92920.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=Biden&domains=nypost.com,foxnews.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const leftHouseURL = 'https://arcane-badlands-92920.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=congress&domains=cnn.com,nbcnews.com,washingtonpost.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const midHouseURL = 'https://arcane-badlands-92920.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=congress&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const rightHouseURL = 'https://arcane-badlands-92920.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=congress&domains=nypost.com,foxnews.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const leftSenateURL = 'https://arcane-badlands-92920.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=senate&domains=cnn.com,nbcnews.com,washingtonpost.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const midSenateURL = 'https://arcane-badlands-92920.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=senate&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const rightSenateURL = 'https://arcane-badlands-92920.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=senate&domains=foxnews.com,nypost.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const leftScotusURL = 'https://arcane-badlands-92920.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=cnn.com,nbcnews.com,washingtonpost.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const midScotusURL = 'https://arcane-badlands-92920.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=apnews.com,pbs.org,npr.org&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'
const rightScotusURL = 'https://arcane-badlands-92920.herokuapp.com/https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=foxnews.com,nypost.com&sortBy=publishedAt&language=en&apiKey=eaf83656ce23489da880c35a9d5055ad'




  


const fetchNews = async () => {
  // const cors = 'http://cors-anywhere.herokuapp.com/'
 
  try {
    let leftPotus = await axios.get(`${leftPotusURL}`);
    let midPotus = await axios.get(`${midPotusURL}`);
    let rightPotus = await axios.get(`${rightPotusURL}`);
    let leftHouse = await axios.get(`${leftHouseURL}`);
    let midHouse = await axios.get(`${midHouseURL}`);
    let rightHouse = await axios.get(`${rightHouseURL}`);
    let leftSenate = await axios.get(`${leftSenateURL}`);
    let midSenate = await axios.get(`${midSenateURL}`);
    let rightSenate = await axios.get(`${rightSenateURL}`);
    let leftScotus = await axios.get(`${leftScotusURL}`);
    let midScotus = await axios.get(`${midScotusURL}`);
    let rightScotus = await axios.get(`${rightScotusURL}`);


    for (let i = 0; i < 5; i++){
      const leftPotusSec = document.querySelector("#left-potus")
      let left = leftPotus.data.articles
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
      leftPotusSec.append(article)
      a.textContent = "Click here to read the full article"
      a.target = "_blank"
      p.textContent = title
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

