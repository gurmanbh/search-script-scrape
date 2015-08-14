// The name of the most recently added dataset on data.gov
var request = require ('request');
var cheerio = require ('cheerio');
request('http://catalog.data.gov/dataset?q=&sort=metadata_created+desc', function (error, response, body) {
    if (!error && response.statusCode == 200) {
		var $ = cheerio.load(body)
		var list = $('h3.dataset-heading')
		var set = $(list[0]).text().trim();
		console.log(set)
	}
});
