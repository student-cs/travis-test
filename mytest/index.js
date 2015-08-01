var sendgrid = require('sendgrid')('azai91', 'AUfsLAayVXpKZamD2ZC4');
var fs = require('fs');

var html = "<html><head><style>.error {color: #c00;font-size: 1em;font-weight: 100;letter-spacing: 1px;}</style></head><body>" + fs.readFileSync(__dirname + '/output.html').toString() + "</body></html>";

var config = require('config');
var email = config.get('email');

if (email){
	sendgrid.send({
	      to: email,
	      from: 'hello@codesmith.io',
	      subject: 'Hack Hour Result',
	      html: html
	});
}