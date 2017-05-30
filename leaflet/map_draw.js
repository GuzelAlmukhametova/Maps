var map = L.map('mapid');
var myRenderer = L.canvas({padding:0.5});

const different_color = {
    bus: {
        color: "#242D84",
        weight: 5,
        renderer: myRenderer
    },
    trolleybus: {
        color: "#B71D2F",
        weight: 5,
        renderer: myRenderer
    },
    minibus: {
        color: "#61AB1B",
        weight: 5,
        renderer: myRenderer
    },
    shining: {
        color: "#c9ffe6",
        weight: 7,
        renderer: myRenderer
    }
}


map.setView([55.75370903771494,37.61981338262558], 11);
map.addLayer(
    new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
);


fetch('files/data.json')
    .then(r => r.json())
    .then(data => {
Object.values(data.routes).forEach(r => {
    var bustype;
    //console.log(r);
    if(r.backTitle === "Автобусы в Москве"){
        bustype = "bus";
    } else {
        if(r.backTitle === "Маршрутные такси в Москве"){
            bustype = "minibus";
        } else{
            bustype = "trolleybus";
        }
    }
    Object.values(r.trips).forEach(t => {
    L.polyline(t.shape, different_color[bustype])
        .on('mouseover', (e) => {
            e.target.bringToFront();
            e.target.setStyle(different_color['shining'])
})
        .on('mouseout', (e) => {
            e.target.bringToBack();
            e.target.setStyle(different_color[bustype])
        })
        .bindPopup(`${r.id}`)
        .addTo(map);
});
});
Object.values(data.stops).forEach(s => {
    L.circleMarker([s.lat, s.lon], {
    stroke: false,
    color: "#f3e072",
    fillOpacity: 0.7,
    radius: 7,
    renderer: myRenderer

})
    .bindPopup(`${s.title}`)
    .addTo(map);
});
});

