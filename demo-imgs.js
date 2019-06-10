var fs = require('fs');
var casper = require('casper').create({
	viewportSize: { width: 1280, height: 800 }
});

var links = ['https://www.android.com/auto/', 'https://www.android.com/auto/aamp/', 'https://www.android.com/auto/abarth/', 'https://www.android.com/auto/acura/', 'https://www.android.com/auto/adayo/', 'https://www.android.com/auto/alfa-romeo/', 'https://www.android.com/auto/alpine/', 'https://www.android.com/auto/astonmartin/', 'https://www.android.com/auto/audi/', 'https://www.android.com/auto/axxera/', 'https://www.android.com/auto/bauhn/', 'https://www.android.com/auto/bentley/', 'https://www.android.com/auto/blaupunkt/', 'https://www.android.com/auto/borgward/', 'https://www.android.com/auto/boss-audio/', 'https://www.android.com/auto/buick/', 'https://www.android.com/auto/cadillac/', 'https://www.android.com/auto/caska/', 'https://www.android.com/auto/chevrolet/', 'https://www.android.com/auto/chrysler/', 'https://www.android.com/auto/citroen/', 'https://www.android.com/auto/clarion/', 'https://www.android.com/auto/cvte/', 'https://www.android.com/auto/dacia/', 'https://www.android.com/auto/dodge/', 'https://www.android.com/auto/ds/', 'https://www.android.com/auto/dual/', 'https://www.android.com/auto/evus/', 'https://www.android.com/auto/fiat/', 'https://www.android.com/auto/ford/', 'https://www.android.com/auto/furrion/', 'https://www.android.com/auto/genesis/', 'https://www.android.com/auto/gmc/', 'https://www.android.com/auto/holden/', 'https://www.android.com/auto/honda/', 'https://www.android.com/auto/hyundai/', 'https://www.android.com/auto/inav/', 'https://www.android.com/auto/infiniti/', 'https://www.android.com/auto/iveco/', 'https://www.android.com/auto/jaguar/', 'https://www.android.com/auto/jbl/', 'https://www.android.com/auto/jeep/', 'https://www.android.com/auto/jensen/', 'https://www.android.com/auto/jvc/', 'https://www.android.com/auto/karma/', 'https://www.android.com/auto/kenwood/', 'https://www.android.com/auto/kia/', 'https://www.android.com/auto/koenigsegg/', 'https://www.android.com/auto/lada/', 'https://www.android.com/404/static/assets/img/', 'https://www.android.com/auto/lamborghini/', 'https://www.android.com/auto/land-rover/', 'https://www.android.com/auto/lifan/', 'https://www.android.com/auto/lincoln/', 'https://www.android.com/auto/macrom/', 'https://www.android.com/auto/mahindra/', 'https://www.android.com/auto/maruti-suzuki/', 'https://www.android.com/auto/maserati/', 'https://www.android.com/auto/mazda/', 'https://www.android.com/auto/mercedes-benz/', 'https://www.android.com/auto/mitsubishi/', 'https://www.android.com/auto/mmauto/', 'https://www.android.com/auto/mongoose/', 'https://www.android.com/auto/nakamichi/', 'https://www.android.com/auto/nissan/', 'https://www.android.com/auto/norauto-sound/', 'https://www.android.com/auto/opel/', 'https://www.android.com/auto/panasonic/', 'https://www.android.com/auto/peugeot/', 'https://www.android.com/auto/pioneer/', 'https://www.android.com/auto/planet-audio/', 'https://www.android.com/auto/prology/', 'https://www.android.com/auto/ram/', 'https://www.android.com/auto/renault-samsung/', 'https://www.android.com/auto/renault/', 'https://www.android.com/auto/seat/', 'https://www.android.com/auto/skoda/', 'https://www.android.com/auto/skypine/', 'https://www.android.com/auto/smart/', 'https://www.android.com/auto/smartauto/', 'https://www.android.com/auto/sony/', 'https://www.android.com/auto/ssangyong/', 'https://www.android.com/auto/subaru/', 'https://www.android.com/auto/suzuki/', 'https://www.android.com/auto/tata-motors/', 'https://www.android.com/auto/toyota/', 'https://www.android.com/auto/unimax/', 'https://www.android.com/auto/vauxhall/', 'https://www.android.com/auto/volkswagen/', 'https://www.android.com/auto/volvo/', 'https://www.android.com/auto/zenec/', 'https://www.android.com/eclipse/', 'https://www.android.com/', 'https://www.android.com/phones/tips/', 'https://www.android.com/switch/', 'https://www.android.com/tv/', 'https://www.android.com/tv/nvidia-shield/', 'https://www.android.com/tv/sharp-aquos/', 'https://www.android.com/tv/sony-bravia/', 'https://www.android.com/tv/xiaomi-mi-box-s/', 'https://www.android.com/tv/xiaomi-mi-box/', 'https://www.android.com/everyone/enabling-opportunity/', 'https://www.android.com/everyone/facts/', 'https://www.android.com/everyone/facts/aosp/', 'https://www.android.com/everyone/facts/compatibility-test/', 'https://www.android.com/everyone/facts/custom-app-store-restrictions/', 'https://www.android.com/everyone/facts/custom-homescreens/', 'https://www.android.com/everyone/facts/custom-look-and-feel/', 'https://www.android.com/everyone/facts/default-apps/', 'https://www.android.com/everyone/facts/democratizing-information-1/', 'https://www.android.com/everyone/facts/democratizing-information-2/', 'https://www.android.com/everyone/facts/distribution-opportunities/', 'https://www.android.com/everyone/facts/driving-affordability-1/', 'https://www.android.com/everyone/facts/driving-affordability-2/', 'https://www.android.com/everyone/facts/fifty-dollar-phone/', 'https://www.android.com/everyone/facts/fueling-economies-1/', 'https://www.android.com/everyone/facts/fueling-economies-2/', 'https://www.android.com/everyone/facts/google-apps/', 'https://www.android.com/everyone/facts/google-mobile-services/', 'https://www.android.com/everyone/facts/google-play-services/', 'https://www.android.com/everyone/facts/google-play/', 'https://www.android.com/everyone/facts/modifications/', 'https://www.android.com/everyone/facts/multiple-app-stores/', 'https://www.android.com/everyone/facts/open-source/', 'https://www.android.com/everyone/facts/optional-google-apps/', 'https://www.android.com/everyone/facts/ownership/', 'https://www.android.com/everyone/facts/partners-apps/', 'https://www.android.com/everyone/facts/pre-installed-apps/', 'https://www.android.com/everyone/facts/preloaded-app-stores/', 'https://www.android.com/everyone/facts/similar-apps/', 'https://www.android.com/everyone/facts/source-code/', 'https://www.android.com/everyone/facts/third-party-success/', 'https://www.android.com/everyone/facts/third-party-thrive/', 'https://www.android.com/everyone/facts/versions/', 'https://www.android.com/everyone/facts/voluntary-anti-fragmentation/', 'https://www.android.com/everyone/facts/worldwide-affordability-graph/', 'https://www.android.com/everyone/', 'https://www.android.com/everyone/research/', 'https://www.android.com/everyone/stories/', 'https://www.android.com/everyone/stories/allview/', 'https://www.android.com/everyone/stories/archos/', 'https://www.android.com/everyone/stories/audioteka/', 'https://www.android.com/everyone/stories/aviary/', 'https://www.android.com/everyone/stories/babyfirst/', 'https://www.android.com/everyone/stories/be-my-eyes/', 'https://www.android.com/everyone/stories/bittium/', 'https://www.android.com/everyone/stories/bla-bla-car/', 'https://www.android.com/everyone/stories/box/', 'https://www.android.com/everyone/stories/bq/', 'https://www.android.com/everyone/stories/bullitt/', 'https://www.android.com/everyone/stories/ciclogreen/', 'https://www.android.com/everyone/stories/clementoni/', 'https://www.android.com/everyone/stories/clue/', 'https://www.android.com/everyone/stories/crosscall/', 'https://www.android.com/everyone/stories/dailyart/', 'https://www.android.com/everyone/stories/divmob/', 'https://www.android.com/everyone/stories/djit/', 'https://www.android.com/everyone/stories/doro/', 'https://www.android.com/everyone/stories/emmy/', 'https://www.android.com/everyone/stories/everytap/', 'https://www.android.com/everyone/stories/eyeem/', 'https://www.android.com/everyone/stories/fairphone/', 'https://www.android.com/everyone/stories/fuelio/', 'https://www.android.com/everyone/stories/general-mobile/', 'https://www.android.com/everyone/stories/gherbtna/', 'https://www.android.com/everyone/stories/giftedmom/', 'https://www.android.com/everyone/stories/gigaset/', 'https://www.android.com/everyone/stories/hoteloga/', 'https://www.android.com/everyone/stories/inloop/', 'https://www.android.com/everyone/stories/lazzus/', 'https://www.android.com/everyone/stories/le-cicogne/', 'https://www.android.com/everyone/stories/listonic/', 'https://www.android.com/everyone/stories/mayadem/', 'https://www.android.com/everyone/stories/mobven/', 'https://www.android.com/everyone/stories/musixmatch/', 'https://www.android.com/everyone/stories/myabckit/', 'https://www.android.com/everyone/stories/new-york-times/', 'https://www.android.com/everyone/stories/ola-olo/', 'https://www.android.com/everyone/stories/over/', 'https://www.android.com/everyone/stories/peak-games/', 'https://www.android.com/everyone/stories/pola/', 'https://www.android.com/everyone/stories/redbus/', 'https://www.android.com/everyone/stories/rogervoice/', 'https://www.android.com/everyone/stories/scode/', 'https://www.android.com/everyone/stories/sendy/', 'https://www.android.com/everyone/stories/silent-circle/', 'https://www.android.com/everyone/stories/skoda/', 'https://www.android.com/everyone/stories/smart-launcher-srl/', 'https://www.android.com/everyone/stories/space-ape-games/', 'https://www.android.com/everyone/stories/star-chart/', 'https://www.android.com/everyone/stories/swisscom/', 'https://www.android.com/everyone/stories/taniwa/', 'https://www.android.com/everyone/stories/tap4fun/', 'https://www.android.com/everyone/stories/too-good-to-go/', 'https://www.android.com/everyone/stories/vertu/', 'https://www.android.com/everyone/stories/visualfy/', 'https://www.android.com/everyone/stories/welcome/', 'https://www.android.com/everyone/stories/wooga/', 'https://www.android.com/everyone/stories/zound-industries/', 'https://www.android.com/certified/', 'https://www.android.com/certified/partners/', 'https://www.android.com/filetransfer/', 'https://www.android.com/gms/contact/success/', 'https://www.android.com/gms/contact/', 'https://www.android.com/gms/', 'https://www.android.com/one/', 'https://www.android.com/play-protect/', 'https://www.android.com/results/', 'https://www.android.com/auto/faq/', 'https://www.android.com/devices/', 'https://www.android.com/enterprise/', 'https://www.android.com/enterprise/apis/terms/', 'https://www.android.com/enterprise/data-protection/', 'https://www.android.com/enterprise/data-protection/subprocessors/', 'https://www.android.com/enterprise/data-protection/terms/', 'https://www.android.com/enterprise/device-catalog/', 'https://www.android.com/enterprise/device-collection/', 'https://www.android.com/enterprise/devices/', 'https://www.android.com/enterprise/employees/', 'https://www.android.com/enterprise/gdpr/', 'https://www.android.com/enterprise/management/', 'https://www.android.com/enterprise/management/zero-touch/', 'https://www.android.com/enterprise/management/zero-touch/terms/', 'https://www.android.com/enterprise/recommended/', 'https://www.android.com/enterprise/recommended/requirements/', 'https://www.android.com/enterprise/resources/', 'https://www.android.com/enterprise/security/', 'https://www.android.com/enterprise/terms/', 'https://www.android.com/accessibility/live-transcribe/', 'https://www.android.com/security-center/', 'https://www.android.com/the-platform/', 'https://www.android.com/why-android/', 'https://www.android.com/versions/jelly-bean-4-3/', 'https://www.android.com/versions/kit-kat-4-4/', 'https://www.android.com/versions/lollipop-5-0/', 'https://www.android.com/versions/marshmallow-6-0/features/', 'https://www.android.com/versions/marshmallow-6-0/', 'https://www.android.com/versions/nougat-7-0/features/', 'https://www.android.com/versions/nougat-7-0/', 'https://www.android.com/versions/go-edition/', 'https://www.android.com/versions/oreo-8-0/', 'https://www.android.com/versions/pie-9-0/']


var linkss = [''];

var REG_EXP = /android-one-green-logo_2x\.png/ 
var data = [];
var htmlText;
var htmlTextMatch;

casper.start().each(linkss, function(self, link, index) {
	self.thenOpen(link, function() {

		function loginForm() {
			casper.waitForSelector('input[name=identifier]', function () {
				try {
					casper.fill('input[name=identifier]', { 'identifier': 'username' }, false);
					} catch (e) {
					casper.die('ERROR filling form username fields')
				}
			},
			function () {
				casper.die('TIMEOUT waiting for form to load')
			});

			casper.then(function () {
				if (!casper.exists('#identifierNext')) {
					casper.die('ERROR, no submit button found.')
				}
				casper.click('#identifierNext');
			});

			casper.waitForUrl(/okta/, function () {
				casper.capture('./demo-imgs-ouput/screenshots/image-' + 22 + '.jpg');
			});
		}

		function evaluateRegExp() {
			htmlText = casper.evaluate(function () {
				return document.querySelector('html').innerHTML;
			});

			htmlTextMatch = htmlText.match(REG_EXP);

			if (htmlTextMatch) {
				casper.echo('======================================================================================');
				casper.echo(link);
				casper.echo('Image found on ' + link);
				data.push(link + '\n');
				//casper.capture('./demo-imgs-ouput/screenshots/image-' + index + '.jpg');
			} else {
				casper.echo('================ NOT FOUND: ' + index + ' of ' + links.length + '======================');
				casper.echo(link);
			}

			fs.write('./demo-imgs-ouput/output.txt', data, function (err) {
				if (err) {
					return casper.echo(err);
				}
				casper.echo('The file was saved!');
			});	
		}

		loginForm();
	});
});

casper.run();
