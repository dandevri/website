/* Leaflet widget
  Show my events plotted on a worldmap with markers.
*/

const mymap = L.map('mapid').setView([0, 0], 0).setZoom(2);

// Create a custom marker
const icon = L.icon({
  iconUrl: '/static/img/icons/pin.svg',
  iconSize: [20, 28],
})

// Disable the attribution
document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';

// Tile the worldmap from mapbox
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGFuZGV2cmkiLCJhIjoiY2tmbGN3cmgzMGlxNzJ0bmRudnMwODd5dCJ9.pJY0KKw84BmvNeTyY3A-kw'
}).addTo(mymap);

// Create markers and bind pop-ups
const marker = L.marker([51.5, -0.09], {icon: icon}).addTo(mymap);
const marker2 = L.marker([60, -0.10], {icon: icon}).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
marker2.bindPopup("<b>Hello world!</b><br>I am a popup.");
