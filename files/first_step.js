const request = require('request');
const fs = require('fs');
const path = require('path');

const List = JSON.parse(fs.readFileSync(path.join(__dirname, 'List.json')));

if (!fs.existsSync(path.join(__dirname, 'LIST'))) {
  fs.mkdirSync(path.join(__dirname, 'LIST'));
  console.log(45678);
}

const scrape = (id, cb) => {
  const url = `http://www.maxikarta.ru/msk/transport/query/stations?route_id=${id}`;
  request({
    url,
    headers: {
      'Referer': 'http://www.maxikarta.ru/msk/transport',
    },
  }, (err, res, body) => {
    fs.writeFileSync(path.join(__dirname, `LIST/${id}.json`), JSON.stringify(JSON.parse(body), null, 4));
    console.log(id);
    cb();
  });
};

IDS = List;
const process = (i) => {
  if (i >= IDS.length) {
    const data = require(path.join(__dirname, 'data.js'));
    data;
    return;
  }
  const next = () => {
    setTimeout(() => process(i + 1), 1000);
  };
  scrape(IDS[i], next);
}

module.exports = process(0);