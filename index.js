const rootURL = "https://api.github.com";
const username ="morinoko";

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '135b3c049957c94dced1d7b283705a6cb525aed8';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(
    'https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks',
    {
      method: 'POST',
      heaaders: {
        Authorization: `token ${getToken()}`
      }
    }
  ).then(response => console.log(response));
}

function showResults(json) {
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
