const request = require('request');
const fs = require('fs');
const path = require('path');

const scrape = () => {
    const url = 'http://www.maxikarta.ru/msk/transport/query/routes';
    request({
        url,
        headers: {
            'Referer': 'http://www.maxikarta.ru/msk/transport',
        },
    }, (err, res, body) => {
        fs.writeFileSync(path.join(__dirname, 'List.json'), JSON.stringify((JSON.parse(body)).routes.map(id => id.route_id), null, 4));
        const first_step = require(path.join(__dirname, 'first_step.js'));
        first_step;
});
};

module.exports = scrape();
