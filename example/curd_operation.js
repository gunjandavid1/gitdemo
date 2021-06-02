var fs = require("fs");

// Asynchronous read


fs.mkdir('./curd_folder', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: Directory Created successfully");
});

fs.appendFile('curd_folder/mynewFile.txt', 'Hello Content is Here!!!',function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: File Created successfully");
});

fs.readFile('curd_folder/mynewFile.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

fs.unlink('curd_folder/mynewFile.txt', function (err, data) {
  if (err) throw err;
  console.log('File deleted!');
});
