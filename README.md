# Project Overview

## Buffer Zone News Aggregator

The name of your project with deployed URL.

## Project Description

BZN is a web-app that utilizes an API to feed relevent political news 24/7. Left-wing and right-wing news outlets are separated by a "buffer zone". This middleground will contain relevant news from unbiased, or moderate, news sources. BZN is strictly American political news and American govenment news.

## API and Data Sample
### News API
https://newsapi.org/v2/everything?domains=cnn.com&foxnews.com&sortBy=publishedAt&language=en&apiKey=90227dcd441a4362b5c3669eb2b7e229 

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
        },
        
## Wireframes

#### Main Page with limited amount of stories for each category
https://git.generalassemb.ly/justinknuth/bzn/blob/master/assets/wireframe%20main%20page.png

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
- Keep users up-to-date with everything American Politics and Government
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
|Feb 23| Project Approval / Core Structure | Incomplete
|Feb 24| Continued Core Structure (HTML, CSS) / Pseudocode | Incomplete
|Feb 24| Continued Pseudocode / JS Script Writing | Incomplete
|Feb 25| Initial Clickable Model / JS Script Writing  | Incomplete
|Feb 26| MVP | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

https://github.com/JustinKnuth/BZN/blob/master/assets/Note%20Feb%2023%2C%202021.pdf



## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning / Preparation  | H | 2hrs| 2hrs | 2hrs |
| Research Similar Products | L | 2hrs |
| Core Structure  | H | 1hr |
| CSS Box Organization  | H | 2hrs |
| Pseudocode  | L | 1.5hrs |
| Scripts for API  | H | 3hrs | 
| Retrieve Correct Data  | H | 3hrs |
| Display Correct Data  | 3hrs |
| Media Queries | M | 3hrs |
| CSS Body Styling | L | 1hr |
| Navigation Menu Creation and Style | H | 1.5hrs |
| Create User-Friendly Experience | H | 3hrs |
| Debugging | H | 2hrs |
| Code Organization for Readability | H | 2hrs |
| Testing | H | 1hr |




| Total | H | | | |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
