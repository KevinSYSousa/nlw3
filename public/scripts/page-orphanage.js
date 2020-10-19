//FIXED MAP
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};
//GET VALUES
const spanLat = document.querySelector("span[data-lat").dataset.lat
const spanLng = document.querySelector("span[data-lng").dataset.lgn

//CREATE MAP
const map = L.map("mapid", options).setView([lat, lng], 16);

//TITLE LAYER
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//CREATE ICON
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//CREATE MARKER
L.marker([lat, lng], { icon }).addTo(map);

//IMAGE GALLERY
function selectImage(event) {
  const button = event.currentTarget;

  //FIND "BUTTON" AND DEACTIVATE
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  //SELECT IMAGE
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  //ATT IMG
  imageContainer.src = image.src;

  //ADD ACTIVE
  button.classList.add("active");
}
