// const { default: axios } = require("axios")

// Main variables and endpoints here.
const DOMAIN = 'http://cors-anywhere.herokuapp.com/http://newsapi.org/'
const apiKey = '90227dcd441a4362b5c3669eb2b7e229'
const url = `${DOMAIN}v2/top-headlines?apiKey=${apiKey}`
const leftPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=cnn.com,nbcnews.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const midPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=apnews.com,pbs.org&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const rightPotusURL = 'https://newsapi.org/v2/everything?qInTitle=Biden&domains=nypost.com,foxnews.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const leftHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=cnn.com,nbcnews.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const midHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=apnews.com,pbs.org&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const rightHouseURL = 'https://newsapi.org/v2/everything?qInTitle=congress&domains=nypost.com,foxnews.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const leftSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=cnn.com,nbcnews.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const midSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=apnews.com,pbs.org&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const rightSenateURL = 'https://newsapi.org/v2/everything?qInTitle=senate&domains=foxnews.com,nypost.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const leftScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=cnn.com,nbcnews.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const midScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=apnews.com,pbs.org&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
const rightScotusURL = 'https://newsapi.org/v2/everything?qInTitle=supreme-court&domains=foxnews.com,nypost.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229'
console.log(url)

// AXIOS API CALL 

const fetchNews = async () => {
  const cors = 'http://cors-anywhere.herokuapp.com/'
  try {
    
    let response = await axios.get(`${cors}${leftPotusURL}`);
    console.log(response)
    
  }
  catch (err) {
    console.log(err)
  }
  
  
}

fetchNews()





// AXIOS API CALL




// AXIOS API CALL


