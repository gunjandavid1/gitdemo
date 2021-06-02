JiraApi = require('jira').JiraApi;
var jira = new JiraApi('https', config.host, config.port, config.user, config.password, '2.0.alpha1');

jira.findIssue(issueNumber, function(error, issue) {
    console.log('Status: ' + issue.fields.status.name);
});
