//CREATE MAP
const map = L.map("mapid").setView([-21.2409054, -44.9991233], 16);

//TITLE LAYER
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//CREATE ICON
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

//CREATE AND ADD MARKER
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // REMOVE ICON
  marker && map.removeLayer(marker);

  //ADD ICON LAYER
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

//ADD PHOTO FIELD
function addPhotoField() {
  //TAKE PHOTO CONTAINER
  const container = document.querySelector("#images");

  //TAKE CONTAINER FOR DUPLICATE
  const fieldsContainer = document.querySelectorAll(".new-upload");

  //REALIZE CLONE
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //CLEAR CASE - NOADD
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }

  //CLEAR FIELD
  input.value = "";

  //ADD CLONE TO CONTAINER
  container.appendChild(newFieldContainer);
}

//DELETE BUTTON
function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = "";
    return;
  }

  span.parentNode.remove();
}

//SWITCH BUTTON
function toggleSelect(event) {
  //REMOVE CLASS
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  //PUT CLASS
  const button = event.currentTarget;
  button.classList.add("active");

  //ATT INPUT
  const input = document.querySelector('[name="open_on_weekends"]')
  input.value = button.dataset.value
}

function validate(event) {

  const needsLatAndLng = true;
  if(needsLatAndLng) {
    event.preventDefault()
    alert("Selecione a localização")
  }
  
}