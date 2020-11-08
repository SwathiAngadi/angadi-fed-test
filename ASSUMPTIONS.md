## Description of my solution

Simple application showing initial 5 users using Random.user api. On click of load more I am fetching again 10 users and appending the result. Application is responsive.
Application starts with index.js file. In that file I have called Infocard component which makes the call to function which calls an API. The response from the API is passed to reducer through action payload. Reducer update the state values present in store. Store triggers the render function of the component where API call is made. On fetching the user details DisplayInfo component is called by passing user details as props. 
On click of load more same process tiggers. Value is concatenated in the reducer and re-render happens.

## Things I would do next

Error handling like displaying error codes when API throws error. Load more option handling is not done , Planned to give limit if limit exceeds page should show end of result.

## Assumptions that I made

Load More option would yield 10 results on each click. 
