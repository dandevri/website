/* Leaflet widget
  Show my events plotted on a worldmap with markers.
*/

const mymap = L.map('mapid').setView([40, 30], 0).setZoom(3);

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
}).addTo(mymap);

// Create markers and bind pop-ups
const marker = L.marker([52.35938447998207, 4.908699214377195], {icon: icon}).addTo(mymap);
marker.bindPopup("<b>Golden Dot Awards</b><br>Amsterdam, The Netherlands").openPopup();
