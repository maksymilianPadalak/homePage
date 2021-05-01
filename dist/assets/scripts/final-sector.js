// Initialize and add the map
function initMap() {
  // The location of Uluru
const uluru = new google.maps.LatLng(52.403124, 16.9099901);
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: uluru,
    disableDefaultUI: true,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: 'icons/placeholder-filled-point.png'
  });
}