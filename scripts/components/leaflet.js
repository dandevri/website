/* Leaflet widget
  Show my events plotted on a worldmap with markers.
*/

const locations = [
  ["LOCATION_1", 52.359417240826474, 4.908624111835428],
  ["LOCATION_2", 52.53408875223329, 13.384882246726036],
];

const map = L.map('mapid').setView([40, 30], 0).setZoom(3);

// Create a custom marker
const icon = L.icon({
  iconUrl: '/static/img/icons/pin.svg',
  iconSize: [20, 28],
})

// Disable the attribution
document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';

// Tile the worldmap from mapbox
L.tileLayer('https://api.mapbox.com/styles/v1/dandevri/ckkvjrjop0q5r17qqitvmhp7q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGFuZGV2cmkiLCJhIjoiY2tmbGN3cmgzMGlxNzJ0bmRudnMwODd5dCJ9.pJY0KKw84BmvNeTyY3A-kw', {
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGFuZGV2cmkiLCJhIjoiY2tmbGN3cmgzMGlxNzJ0bmRudnMwODd5dCJ9.pJY0KKw84BmvNeTyY3A-kw'
}).addTo(map);

locations.forEach(function(marker) {
  new L.marker([marker[1], marker[2]])
    .bindPopup(marker[0])
    .addTo(map);
})
