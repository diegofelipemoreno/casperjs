var fs = require('fs');
var casper = require('casper').create({
	viewportSize: { width: 1280, height: 800 }
});

var links = [ 'https://www.android.com/auto/',
'https://www.android.com/auto/aamp/',
'https://www.android.com/auto/abarth/',
'https://www.android.com/tv/',
'https://www.android.com/versions/pie-9-0/']

var REG_EXPS = [ /touch-icon-iphone\.png/, /android-tv-logo\.png/, /touch-icon-iphone-retina\.png/, /id="android-logo"/,/oso/];


//var REG_EXP = /touch-icon-iphone\.png/;
var actualRegexp = 0;

function init(currentRegexp) {
	var data = [];
	var htmlText;
	var htmlTextMatch;

	casper.start().each(links, function(self, link, index) {
		self.thenOpen(link, function() {
			index = index + 1;

			function evaluateRegExp() {
				var file_name_txt = currentRegexp.source.replace('\\.', '--').replace('.', '').replace(new RegExp('"', 'g'), '');

				htmlText = casper.evaluate(function () {
					return document.querySelector('html').innerHTML.replace(/\n|\t/g, ' ');
				});

				htmlTextMatch = htmlText.match(currentRegexp);

				if (htmlTextMatch) {
					casper.echo('=============== !!!!FOUND!!!! ' + index + ' of ' + links.length + ' =====================');
					casper.echo(link);
					casper.echo('Image ' + file_name_txt + ' found on ' + link);
					data.push("'" + link + "',\n");
					//casper.capture('./demo-imgs-ouput/screenshots/image-' + index + '.jpg');
				} else {
					casper.echo('================ NOT FOUND: ' + index + ' of ' + links.length + ' ======================');
					casper.echo(link, currentRegexp);
				}

				fs.write('./bin/final-search/results/us/' + file_name_txt +'.txt', data, function (err) {
					if (err) {
						return casper.echo(err);
					}
					casper.echo('The file was saved!');
				});
				
				if (index === links.length && actualRegexp < REG_EXPS.length - 1) {
					actualRegexp = actualRegexp + 1;
					init(REG_EXPS[actualRegexp]);
				}
			}

			evaluateRegExp();
		});
	});

	casper.run();
}

init(REG_EXPS[actualRegexp]);