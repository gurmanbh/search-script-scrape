// Number of datasets currently listed on data.gov
var request = require ('request');
var cheerio = require ('cheerio');
request('http://www.data.gov/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
		var number = cheerio.load(body)('small a').text().split(' ')[0];
		console.log(number)
	}
});