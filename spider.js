var scrapy = require('node-scrapy'),
url = 'https://github.com/cikai/nodejs-spider',
model = {
    author: '.author',
    repo: '.js-current-repository',
    stats: {
        commits: '.commits .num',
        branches: '.numbers-summary > li.commits + li .num',
        releases: '.numbers-summary > li.commits + li + li .num',
        contributors: '.numbers-summary > li.commits + li + li + li .num',
        social: {
            stars: '.star-button + .social-count',
            forks: '.fork-button + .social-count'
        }
    },
    files: '.js-directory-link'
}

scrapy.scrape(url, model, function(err, data) {
    if (err)
        return console.error(err)
    console.log(data)
});