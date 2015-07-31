var Mocha = require('mocha');

var mocha = new Mocha({});

var message = "";
var results;


mocha.addFile(__dirname + '/balanced-parens-test.js');

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

