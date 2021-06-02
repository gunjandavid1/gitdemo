// With ES5
var JiraApi = require('jira-client');
 

// Initialize
var jira = new JiraApi({
  protocol: 'https',
  host: 'enterprisedb.atlassian.net',
  username: 'gunjan.kumar@enterprisedb.com',
 // api_token: 'n4F11EkcqRv0wOzTogK66457',
  password: 'n4F11EkcqRv0wOzTogK66457',
//  password: 'Password4$',
  apiVersion: '2',
  strictSSL: true
});


jira.findIssue('NX-2301')
  .then(function(issue) {
    console.log('Status: ' + issue.fields.status.name);
  })
  .catch(function(err) {
    console.error(err);
  });

jira.findIssue('NX-2301', function(error, issue) {
    console.log('Status: ' + issue.fields.status.name);
});


/* jira.getComments(issueId: 'NX-2301')
.then(function(issue) {
    console.log('Status: ' + issue.fields.status.name);
  })
  .catch(function(err) {
    console.error(err);
  });
*/


/* jira.getIssue(
  {
    issueKey: "NX-2301"
  },
  function(error, issue) {
    console.log(issue.fields.summary);
  }
);
*/
