// Initialisation de la carte sur le Bassin Minier
const map = L.map('map').setView([50.45, 2.8], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Icône personnalisée "Lana" (Optionnel)
const terrilIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

// Ajout du point Pilote : Loos-en-Gohelle
L.marker([50.4431, 2.7831], {icon: terrilIcon}).addTo(map)
    .bindPopup('<b>Terril Pilote : Loos-en-Gohelle</b><br>Projet Transmission Culturelle.')
    .openPopup();
