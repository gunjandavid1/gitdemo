// With ES5
var JiraApi = require('jira-client');

// With ES6
//import JiraApi from 'jira-client';

// Initialize
var jira = new JiraApi({
  protocol: 'https',
  host: 'jira.com',
  username: 'gunjan.kumar@enterprisedb.com',
  password: 'Password4$',
  apiVersion: '2',
  strictSSL: true
});


// ES5
// We are using an ES5 Polyfill for Promise support. Please note that if you don't explicitly
// apply a catch exceptions will get swallowed. Read up on ES6 Promises for further details.
jira.findIssue(issueNumber)
  .then(function(issue) {
    console.log('Status: ' + issue.fields.status.name);
  })
  .catch(function(err) {
    console.error(err);
  });
