var popLocation;
var layerPontos;
var routs = false;
var lat = 35;
var lon = 139;
var loc = "lat=" + lat + "&lon=" + lon;
var city;
var localz;
var mymap;
var lat2 = -8.0724318;
var lon2 = -34.9429183;

var feira = L.icon({
    iconUrl: 'imagens/marker_feira.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
});

var mercado = L.icon({
    iconUrl: 'imagens/marker_mercado.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
});

var restaurante = L.icon({
    iconUrl: 'imagens/marker_restaurant.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
});

var points = [{
    Nome: 'Ceasa',
    lat: -8.0724318,
    lon: -34.9429183,
    icone: feira
}, {
    Nome: 'FICR',
    lat: -8.041155,
    lon: -34.9406283,
    icone: feira
}, {
    Nome: 'Feira Dois Irmãos',
    lat: -8.0150708,
    lon: -34.9449462,
    icone: feira
}, {
    Nome: 'Feira do Cordeiro',
    lat: -8.0520208,
    lon: -34.9223248,
    icone: feira
}, {
    Nome: 'Mercado da Madalena',
    lat: -8.0523882,
    lon: -34.9109011,
    icone:  mercado
}, {
    Nome: 'Morro da conceição',
    lat: -8.0150708,
    lon: -34.9149462,
    icone: restaurante

}];

var inputRota;


function setup() {
    //var button = select('#submit');
    //button.mousePressed(buscaCidade);
    //input = select('#cidade');
    //var canvas = createCanvas(300, 300);
    //canvas.parent('canva');
    noCanvas();
    //createInput('', text);
//    inputRota = createInput('Rota aqui', text);
  //  inputRota.parent('rota');

}
var icone = L.icon({
    iconUrl: 'images/marker_feira.png',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
});

getLoc();

function drawMap() {
    popLocation = [lat, lon];
    mymap = L.map('mapid').setView([lat, lon], 16);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoicm9tdWxvbW1vcmFlcyIsImEiOiJja2FhaDNuYjEwbDEzMnRtZ3dnYTd0bXV2In0.n74CHxBX0iHI14pUQ42xzw'
    }).addTo(mymap);
    var localUsuario = L.marker([lat, lon]).addTo(mymap);
    localUsuario.bindPopup("Você está aqui").openPopup();

    // Adiciona os Pontos e Cria PopUps
    for (i = 0; i < points.length; i++) {
        var title = points[i].Nome;
        layerPontos = L.marker([points[i].lat, points[i].lon], {
            icon: points[i].icone
        });
        layerPontos.bindPopup(points[i].Nome);
        layerPontos.addTo(mymap);

        layerPontos.on('click', function(e) { 
            popLocation = e.latlng;
       
        });

    }
  
      
}

function getRota(){
    if (routs != false) {routs.remove(mymap); };
    routs = L.Routing.control({
        waypoints: [
          L.latLng(lat, lon),
          L.latLng(popLocation)
        ],
        router: L.Routing.graphHopper('7887f58a-c959-4345-add7-437d9c777915')
    });
      // routs.remove(mymap);
    routs.addTo(mymap); 
    
}

function apagaRota(){
    routs.remove(mymap); 

}







function getLoc() {
    if ("geolocation" in navigator) {
        console.log('ok meu fio');
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude
            lon = position.coords.longitude
            loc = "lat=" + lat + "&lon=" + lon;
            console.log(lat, lon);
            drawMap();
        });
    } else {
        alert("I'm sorry, but geolocation services are not supported by your browser.");
    }
}
