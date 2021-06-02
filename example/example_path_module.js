const path = require ('path');

console.log(path.dirname("/Users/gunjankumar/Documents/JIRA/example/example_path_module.js"));
console.log(path.extname("/Users/gunjankumar/Documents/JIRA/example/example_path_module.js"));
console.log(path.basename("/Users/gunjankumar/Documents/JIRA/example/example_path_module.js"));

const mypath = path.parse("/Users/gunjankumar/Documents/JIRA/example/example_path_module.js");
console.log(mypath.name);
