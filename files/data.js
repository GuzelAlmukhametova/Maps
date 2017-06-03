const request = require('request');
const fs = require('fs');
const path = require('path');

const List = JSON.parse(fs.readFileSync(path.join(__dirname, 'List.json')));

const res = {
    routes: {},
    stops: {},
};

function transform (id) {
    const route = JSON.parse(fs.readFileSync(path.join(__dirname, "LIST/" + id + ".json")));
    const route_id = route.route.route_id;
    const backTitle = route.route.aBackTitle;
    const routeTitle = route.route.routeTitle;

    function getDirection(dir) {
        const stops = route.stations.filter(st => st.direction === dir);
        return {
            stopIds: stops.map(st => st.station_id),
            shape: stops.map(stop=> {
                return {
                    lat: +stop.lat,
                    lon: +stop.lon,
                }
            }),
        }
    }

    route.stations.forEach(stop => {
        res.stops[stop.station_id] = {
            lat: +stop.lat,
            lon: +stop.lon,
            title: stop.name,
        };
    });
    res.routes[route_id] = {
        id: route_id,
        backTitle: backTitle,
        routeTitle: routeTitle,
        trips: {
            'to': getDirection(0),
            'from': getDirection(1),
        }
    };
    console.log(id);
}
function test(){
    List.forEach(road => transform(road));
    fs.writeFileSync(path.join(__dirname, "data" + ".json"), JSON.stringify(res, null, 4));
    console.log(2);
}

module.exports = test();
