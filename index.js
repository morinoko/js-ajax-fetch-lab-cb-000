const rootURL = "https://api.github.com";
const username = "morinoko";

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'a735fb7611e95fa3489ad3b716b76fc58f67535d';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url =`${rootURL}/repos/${repo}/forks`;
  //use fetch to fork it!
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json())
    .then(json => showResults(json));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  const resultsDiv = document.getElementById(results);
  resultsDiv.innerHTML = `<a href="${json.html_url}" target="_blank">${json.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
