var scrapy = require('node-scrapy'),
url = 'https://www.baidu.com',
model = {
    百度右上角的链接: '.mnav'
}

scrapy.scrape(url, model, function(err, data) {
    if (err)
        return console.error(err)
    console.log(data)
});