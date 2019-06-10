var fs = require('fs');
var casper = require('casper').create();

var links = ['https://www.swabiz.com/swabiz/self-enroll',
             'https://www.swabiz.com/car-rentals/search-car-rentals.html',
             'https://www.swabiz.com/html/customer-service/how-tos/book-and-manage-car-pol.html',
             'https://www.swabiz.com/flight/swabizCompanyTravelReservation.html'
];
var data = [];

var STRING_AMAZE = /SWA.amazeToggles/g;
var amazeText;
var htmlText;

casper.start().each(links, function(self, link) {
	self.thenOpen(link, function() {

		htmlText = this.evaluate(function() {
			return document.querySelector('html').innerHTML;
		});
		amazeText = htmlText.match(STRING_AMAZE);
		//this.echo('Amaze script repeated: ' + amazeText.length);

		if (amazeText.length === 1) {
			this.echo('======================================================================================');
			this.echo(link);
			this.echo('Amaze script is one time');
		} else {
			this.echo('============================= ERROR ==================================================');
			this.echo(link);
			this.echo('AMAZE SCRIPT REPEATED ' + amazeText.length);
			data.push(link + '      ');
		}

		fs.write('output.txt', data, function(err) {
		    if(err) {
		       return this.echo(err);
		    }
		    this.echo('The file was saved!');
		});
	});
});


casper.run();
