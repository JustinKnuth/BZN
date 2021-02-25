// const { default: axios } = require("axios")

// Main variables and endpoints here.

const leftPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=cnn.com,nbcnews.com&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'
const midPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=apnews.com,pbs.org&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'
const rightPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=nypost.com,foxnews.com&sortBy=publishedAt&language=en&apiKey=000cb07e70e54afda050fe51fd532b10'
const leftHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=cnn.com,nbcnews.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const midHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=apnews.com,pbs.org&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const rightHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=nypost.com,foxnews.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const leftSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=cnn.com,nbcnews.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const midSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=apnews.com,pbs.org&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const rightSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=foxnews.com,nypost.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const leftScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=cnn.com,nbcnews.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const midScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=apnews.com,pbs.org&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const rightScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=foxnews.com,nypost.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'


// AXIOS API CALL 

const fetchNews = async () => {
  const cors = 'http://cors-anywhere.herokuapp.com/'
  try {
     let leftPotus = await axios.get(`${cors}${leftPotusURL}`);
    let midPotus = await axios.get(`${cors}${midPotusURL}`);
    let rightPotus = await axios.get(`${cors}${rightPotusURL}`);
    // let leftHouse = await axios.get(`${cors}${leftHouseURL}`);
    // let midHouse = await axios.get(`${cors}${midHouseURL}`);
    // let rightHouse = await axios.get(`${cors}${rightHouseURL}`);
    // let leftSenate = await axios.get(`${cors}${leftSenateURL}`);
    // let midSenate = await axios.get(`${cors}${midSenateURL}`);
    // let rightSenate = await axios.get(`${cors}${rightSenateURL}`);
    // let leftScotus = await axios.get(`${cors}${leftScotusURL}`);
    // let midScotus = await axios.get(`${cors}${midScotusURL}`);
    // let rightScotus = await axios.get(`${cors}${rightScotusURL}`);
    
    leftPotus.data.articles.forEach((article) => {
      const leftPotusSec = document.querySelector("#left-potus")
      for (let i = 0; i < 10; i++) {
      
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const img = document.createElement('img')
        img.src = article[i].urlToImage
        let network = article[i].source.name
        let title = article[i].title
        h2.textContent = network
        p.textContent = title
        leftPotusSec.append(h2)
        leftPotusSec.append(img)
        leftPotusSec.append(p)
      }
      
      // const rightPotusSec = document.querySelector('#right-potus')

      })

      
      

    
    midPotus.data.articles.forEach((article) => {
      const midPotusSec = document.querySelector('#mid-potus')

      const h2 = document.createElement('h2')
      const p = document.createElement('p')
      const img = document.createElement('img')
     img.src = article.urlToImage
      let network = article.source.name
      let title = article.title
      h2.textContent = network
      p.textContent = title
      midPotusSec.append(h2)
      midPotusSec.append(img)
      midPotusSec.append(p)
     

      
          

    })
    
    rightPotus.data.articles.forEach((article) => {
      const rightPotusSec = document.querySelector('#right-potus')

      const h2 = document.createElement('h2')
      const p = document.createElement('p')
      const img = document.createElement('img')
      img.src = article.urlToImage
      let network = article.source.name
      let title = article.title
      h2.textContent = network
      p.textContent = title
      rightPotusSec.append(h2)
      rightPotusSec.append(img)
      rightPotusSec.append(p)
      


      })

    
    console.log(midPotus.data.articles)
    
  }
  catch (err) {
    console.log(err)
  }
  
  
}

fetchNews()





// AXIOS API CALL




// AXIOS API CALL


