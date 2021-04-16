# Project Overview

## Buffer Zone News Aggregator

#### URL - https://justinknuth.github.io/BZN/
            (The website only works on safari, due to CORS issues with Chrome involving proxies)

## Project Description

BZN is a web-app that utilizes an API to feed relevent political news 24/7. Left-wing and right-wing news outlets are separated by a "buffer zone". This middleground will contain relevant news from unbiased, or moderate, news sources. BZN is strictly American political news and American govenment news.


## API and Data Sample


### News API
https://newsapi.org/v2/everything?domains=cnn.com&foxnews.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229 


```
{
    "status": "ok",
    "totalResults": 4636,
    "articles": [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jackie Wattles, CNN Business",
            "title": "This 29-year-old cancer survivor is set to be the youngest American ever in space",
            "description": "Hayley Arceneaux, a 29-year-old cancer survivor and physician assistant at St. Jude children's hospital, got an out-of-the-blue question from her employer last month: Would she like to go to space?",
            "url": "https://www.cnn.com/2021/02/22/tech/spacex-civilian-astronaut-st-judes-inspiration-4-scn/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210222133827-hayley-arceneaux-interview-still-super-tease.jpg",
            "publishedAt": "2021-02-22T20:19:44Z",
            "content": "Austin, Texas (CNN Business)Hayley Arceneaux, a 29-year-old cancer survivor and physician assistant at St. Jude children's hospital, got an out-of-the-blue question from her employer last month: Woul… [+7300 chars]"
        }
```        
        
        


## Wireframes


#### Main Page with limited amount of stories for each category
https://github.com/JustinKnuth/BZN/blob/master/assets/wireframe%20main%20page.png

#### A category page with relevant stories up to a certain amount. There will be 4 categories so 4 layouts of this kind.
https://github.com/JustinKnuth/BZN/blob/master/assets/wireframe%20category%20page.png



### MVP/PostMVP


#### MVP 
- Structure website(html) in a clean and readable fashion
- Style website accordingly(CSS) and keep it simple but modern
- Write scripts to add functionality and usability to the site
- Utilize a news database on a 24 hour cycle with updates throughout the day, everyday.
- Render news articles in three columns, representing left, moderate and right.
- Allow users to see headlines from major news networks both bias and unbiased
- Comply with copyright laws

#### PostMVP  


- Add message board using 3rd party software or API
- Match news articles together in the same row, by matching keywords in headlines
- Page automatically updates with new articles
- Add the option to look at other countries political news stories with the same layout

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Feb 22| Prompt / Wireframes / Timeframes | Complete
|Feb 23| Project Approval / Core Structure / HTML / Pseudocode | Complete
|Feb 24| API Calls and Filtering / CSS | Complete
|Feb 24| Render API Information | Complete
|Feb 25| Initial Clickable Model / MVP  | Complete
|Feb 26| Responsive Design / Refine CSS | Complete
|March 1| Presentations | Incomplete

## Priority Matrix

https://github.com/JustinKnuth/BZN/blob/master/assets/Updated%20PDF%20for%20GA.pdf


## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning / Preparation  | H | 2hrs| 2hrs | 2hrs |
| Research Similar Products | L | 2hrs | 1hr | 1hr |
| Core Structure  | H | 1hr | 1hr | 1hr |
| CSS Box Organization  | H | 2hrs | 2hrs | 2hrs
| Pseudocode  | L | 1.5hrs | 10m | 10m |
| Scripts for API  | H | 3hrs | 3hrs | 4hrs |
| Retrieve Correct Data  | H | 3hrs | 1hr | 1hr |
| Display Correct Data | H | 3hrs | 3hrs | 3hrs |
| Media Queries | H | 3hrs | 3hrs | 3hrs |
| CSS Body Styling | L | 2hrs | 1hr | 1hr |
| Navigation Menu Creation and Style | H | 2.5hrs | 2hrs | 2hrs |
| Create User-Friendly Experience | H | 3hrs | 2hrs | 2hrs |
| Debugging | H | 2hrs | 1hr | 1hr |
| Code Organization for Readability | H | 2hrs | 1hr | 1hr
| Image-Sizing | H | 2hrs | .5hr | .5hr |
| Total | H | 34hrs | 24hrs | 24hrs |

## Code Snippet

This for-loop automatically runs through the available data and appends the proper 
network name, image and headline to the page. Everytime theres a new article out, and someone
uses the page, new data is automatically appended to the page.

```
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
```


## Change Log
