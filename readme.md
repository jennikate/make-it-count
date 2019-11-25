# Project 3: APIs and React, a pair programming project

by [Abi James]() &  [JenniKate Wallace](https://github.com/jennikate/)

## Overview
A website designed to allow you to enter a UK postcode to see which candidates are standing for the general election in your constituency. You can also see which party won the last general election (in 2017) and voter numbers.

[Take a look on GitHub Pages.](https://jennikate.github.io/make-it-count/)

[Check out the GitHub Repo here.](https://github.com/jennikate/make-it-count)


## Brief

- Pair program
- Create a react app that talks to an API and displays some data
- Use any API you like
- Deploy to github pages


## Technologies Used

- React
- React Router DOM
- CSS
- JavaScript (ES6)
- GitHub Pages
- Webpack

**APIs used:**
- [Democracy Club](https://democracyclub.org.uk/)
- [Postcodes.io](https://postcodes.io/)
- [data.parliament.uk](http://www.data.parliament.uk/)

## Approach Taken
### Setting the Boundries

We had roughly 48 hours to plan, code, and present our project. We investigated multiple API's before deciding on the three above as ones that would give us the most useful data.

We then set out a list of features and prioritised them so we were confident we could have a decent product to release.

### Features
- [x] Accept a UK postcode and return a list of candidates for that constiuency
- [x] Extend candidate info with image, party, and candidate URL if they had one
- [x] Add result of 2017 election, which party won/held the seat
- [x] Add the electorate size, number of voters, and majority for the 2017 results

The following features we did not have time to build:
- [ ] Show a map of the electorate general area
- [ ] Show candidate statements
- [ ] Show name of the 2017 winner
- [ ] Link to candidate social media accounts

### Functionality

The site takes a UK postcode then does the following

- returns the `parliamentary constituency` name from Postcodes.io
- translates this to a format usable in the Democracy Club URL (e.g. `epsom-and-ewell`)
- fetches the `candidate list` from the Democracy Club candidates API
- takes the `candidate URL` from that API
- fetches the `person information` from the Democracy Club person API
- fetches the `2017 election results` from the data.parliament.uk API
- filters the `2017 election results` and returns the results for the `parliamentary constituency` 



#### Featured Code

##### Featured piece of code 1: Searching the election results

<img src="https://raw.githubusercontent.com/jennikate/make-it-count/master/src/images/for-readme/code1.png" border="1" width=45%> 

```
<h2>Result: <span>{this.state.electionResults[this.getThisConstituency(this.props.constituencyName)].resultOfElection}</span></h2>
```

We take the data set that we stored in election Results, then call the function that finds the array index based on the constituencyName that we have passed in. Then we return the result of the election for that array index.


<img src="https://raw.githubusercontent.com/jennikate/make-it-count/master/src/images/for-readme/code1b.png" border="1" width=45%> 

This takes the constituency name, searches our data set for the constituency label value that matches our constituency name, then returns the index number of that array position.


<!-- #### Featured piece of code 2:  -->





### Screenshots

<img src="https://raw.githubusercontent.com/jennikate/make-it-count/master/src/images/for-readme/screenshot1.png" border="1" width=45%> <img src="https://raw.githubusercontent.com/jennikate/make-it-count/master/src/images/for-readme/screenshot2.png" border="1" width=45%>
<img src="https://raw.githubusercontent.com/jennikate/make-it-count/master/src/images/for-readme/screenshot3.png" border="1" width=45%> 


### Bugs
If you find any bugs please let me know! jennikate @ gmail.com

If you refresh the results page it will 404 as it's not rerunning the fetch.

Some postcodes are missing, we believe it is due to the API's not having the constituency names.

### Wins and Blockers

The biggest wins were:

Working as a team. We both brought different ways of thinking to the project and together we were very productive. It was a fun project to work on.

1. Deciphering the APIs, especially data.parliament.uk, to find data that was useful and usable
2. Learning how to take data from an API and store it in an array with setState



The biggest challenges were around some of the more React specific syntax that we hadn't used much. 

Pushing data to an array via setState in a forEach loop, which requires you to get the existing state, add the new item, then set it all back to the state - all within the loop.

Moving data between classes - we learnt how to pass params on the Route calls, and also learnt how child components inherit parent components, but children of children do not unless you encase it in a wrapper!

