# Project Overview

## Buffer Zone News Aggregator

The name of your project with deployed URL.

## Project Description

BZN is a web-app that utilizes an API to feed relevent news 24/7. Left-wing and right-wing news outlets are separated by a "buffer zone". This middleground will contain relevant news from unbiased, or moderate, news sources. BZN is strictly American political news and American govenment news.

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

### Main Page with limited amount of stories for each category
https://git.generalassemb.ly/justinknuth/bzn/blob/master/assets/wireframe%20main%20page.png

### A category page with relevant stories up to a certain amount. There will be 4 categories so 4 layouts of this kind.
https://git.generalassemb.ly/justinknuth/bzn/blob/master/assets/wireframe%20category%20page.png

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
*These are examples only. Replace with your own Post-MVP features.*

- Add message board using 3rd party software or API
- Match news articles together in the same row, by matching keywords in headlines
- Page automatically updates with new articles
- Add the option to look at other countries political news stories with the same layout

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Feb 23| Project Approval | Incomplete
|Feb 24| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Feb 24| Pseudocode / actual code | Incomplete
|Feb 25| Initial Clickable Model  | Incomplete
|Feb 26| MVP | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | 3hrs | 3hrs| 2.5hrs | 2.5hrs |
| Structuring Page | 1.5hrs | 
| Styling Page | 2hrs |
| Scripts for API | 3hrs | 
| Harness Correct Data | 3hrs |
| Display Correct Data | 3hrs |


| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
