// var sendgrid = require('sendgrid')('azai91', 'AUfsLAayVXpKZamD2ZC4');
// var fs = require('fs');
var http = require('http');

// var html = "<html><head><style>.error {color: #c00;font-size: 1em;font-weight: 100;letter-spacing: 1px;}</style></head><body>" + fs.readFileSync(__dirname + '/output.html').toString() + "</body></html>";

var commit_number = process.env.TRAVIS_COMMIT;
var access_token = 'a91e3e29f5d0d391415a6f403c830a323051ad9f';
var url = 'http://api.github.com/repos/JaeHunRo/travis-test/commits/' + commit_number + '?access_token=' + access_token;
http.get(
	url, 
	function(response){
		var string = '';
		response.on('error', function(e){
			console.log(e);
		});
		response.on('data', function(d){
			string += d;
		});
		response.on('end', function(){
			var email = JSON.parse(string).commit.committer.email;
			console.log(email, 'should be email');
	});
})



// if (email){
// 	sendgrid.send({
// 	      to: email,
// 	      from: 'hello@codesmith.io',
// 	      subject: 'Hack Hour Result',
// 	      html: html
// 	});
// }