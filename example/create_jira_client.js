// With ES5
var JiraApi = require('jira-client');

// With ES6
//import JiraApi from 'jira-client';

// Initialize
var jira = new JiraApi({
  protocol: 'https',
  host: 'jira.enterprisedb.com',
  username: 'gunjan.kumar@enterprisedb.com',
  password: 'Password4$',
  apiVersion: '2',
  strictSSL: true
});
