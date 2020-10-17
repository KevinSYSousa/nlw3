//CREATE MAP
const map = L.map("mapid").setView([-21.2409054, -44.9991233], 16);

//TITLE LAYER
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//CREATE ICON
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//CREAT POPU OVERLAY
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" </a>'
);

//CREATE MARKER
L.marker([-21.2409054, -44.9991233], { icon }).addTo(map).bindPopup(popup);
