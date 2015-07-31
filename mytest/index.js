var Mocha = require('mocha');
var expect = requrie('expect');

var fs = require('fs');
// First, you need to instantiate a Mocha instance.
var mocha = new Mocha({});

// fs.readdirSync(__dirname + '/tests/').forEach(function(file){
//     mocha.addFile(
//         __dirname + '/tests/' + file
//     );
// });
mocha.addFile(__dirname + '/tests/anagrams-test.js');
var message = "";
var results;

mocha.run()
    // .on('test', function(test) {
    //     results = test;
    // })
    .on('test end', function(test) {
        results = test;
        console.log(results, 'results');
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
        console.log('finished!');
    });

