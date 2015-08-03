// var sendgrid = require('sendgrid')('azai91', 'AUfsLAayVXpKZamD2ZC4');
// var fs = require('fs');
var https = require('https');

// var html = "<html><head><style>.error {color: #c00;font-size: 1em;font-weight: 100;letter-spacing: 1px;}</style></head><body>" + fs.readFileSync(__dirname + '/output.html').toString() + "</body></html>";

var commit_number = process.env.TRAVIS_COMMIT;
var access_token = 'e65672b1a90d6725aa57e4723830fd759437a0f1';
var path = '/repos/JaeHunRo/travis-test/commits/' + commit_number + '?access_token=' + access_token;
var options = {
	host: 'api.github.com',
	path: path,
	method: 'GET',
	headers: {
		'user-agent': 'node.js'
	}
};
https.request(
	options, 
	function(response){
		var string = '';
		response.on('data', function(d){
			string += d;
		});
		response.on('end', function(){
			var email = JSON.parse(string).commit.committer.email;
			console.log(email, 'should be email');
		});
	}).end();
process.on('uncaughtException', function (err) {
    console.log(err);
}); 



// if (email){
// 	sendgrid.send({
// 	      to: email,
// 	      from: 'hello@codesmith.io',
// 	      subject: 'Hack Hour Result',
// 	      html: html
// 	});
// }