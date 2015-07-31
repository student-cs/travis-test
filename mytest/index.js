var Mocha = require('mocha');
var fs = require('fs'),

// First, you need to instantiate a Mocha instance.
var mocha = new Mocha();

// Then, you need to use the method "addFile" on the mocha
// object for each file.

// Here is an example:
fs.readdirSync(__dirname + '/tests/').forEach(function(file){
    // Use the method "addFile" to add the file to mocha
    mocha.addFile(
        path.join(__dirname + '/tests/', file);
    );
});

var message = "";
var results;

mocha.run()
    // .on('test', function(test) {
    //     results = test;
    // })
    .on('test end', function(test) {
        results = test;
    })
    // .on('pass', function(test) {
    //     console.log('Test passed');
    //     console.log(test);
    // })
    // .on('fail', function(test, err) {
    //     console.log('Test fail');
    //     console.log(test);
    //     console.log(err);
    // })
    .on('end', function() {
       	message = "all done";
        console.log(message);
        console.log(results);
    });

