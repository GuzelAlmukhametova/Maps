var map = L.map('mapid');
var myRenderer = L.canvas({padding:0.5});

const buscolorInput = document.getElementById("buscolor");
const tbuscolorInput = document.getElementById("tbuscolor");
const mbuscolorInput = document.getElementById("mbuscolor");



var different_color = {
    bus: {
        color: buscolorInput.value,
        weight: 5,
        renderer: myRenderer
    },
    trolleybus: {
        color: tbuscolorInput.value,
        weight: 5,
        renderer: myRenderer
    },
    minibus: {
        color: mbuscolorInput.value,
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

var arr = {
    b: [],
    t: [],
    m: [],
}

fetch('files/data.json')
    .then(r => r.json())
    .then(data => {
    Object.values(data.routes).forEach(r => {
    var bustype;
//console.log(r);
if (r.backTitle === "Автобусы в Москве") {
    bustype = "bus";
} else {
    if (r.backTitle === "Маршрутные такси в Москве") {
        bustype = "minibus";
    } else {
        bustype = "trolleybus";
    }
}
Object.values(r.trips).forEach(t => {
    var temp;
    temp = L.polyline(t.shape, different_color[bustype])
            .on('mouseover', (e) => {
            e.target.bringToFront();
e.target.setStyle(different_color['shining'])
})
.on('mouseout', (e) => {
    e.target.bringToBack();
e.target.setStyle(different_color[bustype])
})
.bindPopup(`${r.id}`)
    if (bustype == "bus"){
        arr.b.push(temp);
    }

    if (bustype == "trolleybus"){
        arr.t.push(temp);
    }

    if (bustype == "minibus"){
        arr.m.push(temp);
    }

return temp
    .addTo(map);
})
;
})
;

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
})
;

const updatebus = document.getElementById("bcolor");
//console.log(updatebus),
updatebus.addEventListener('click', () => {
    arr.b.forEach(p => p.setStyle({color: buscolorInput.value})
)
;
different_color.bus.color = buscolorInput.value;
});

const updatetbus = document.getElementById("tcolor");
//console.log(updatetbus),
updatetbus.addEventListener('click', () => {
    arr.t.forEach(p => p.setStyle({color: tbuscolorInput.value}));
    different_color.trolleybus.color = tbuscolorInput.value;
}
);

const updatembus = document.getElementById("mcolor");
//console.log(updatembus),
updatembus.addEventListener('click', () => {
    arr.m.forEach(p => p.setStyle({color: mbuscolorInput.value}));
    different_color.minibus.color = mbuscolorInput.value;
}
);

}
)