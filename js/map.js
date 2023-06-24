import { createPopup } from "./createpopup.js";

const map =L.map('map')
    .setView({
    lat: 59.92749,
    lng: 30.31127,
    }, 10);

    L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
    ).addTo(map);

    const mainIcon = L.icon({
    iconUrl: '../img/map-pin.png',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
    });

    const mainMarker = L.marker(
    {
        lat: 59.96831,
        lng: 30.31748,
    },
    {
        draggable: true,
        icon: mainIcon,
    },
    ); 
    mainMarker.addTo(map);

    const getAdress =(adress) =>{
        mainMarker
        .bindPopup(createPopup(adress));
    };

    mainMarker.on('moveend', (evt) =>{
        let adress = evt.target.getLatLng();       
        getAdress(adress);
    });
    
    