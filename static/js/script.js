console.log('%c Computer says no', 'background: black; color: white; display: block; font-size: 5em;');

/* Calculate date from birth */
const oneDay = 24 * 60 * 60 * 1000;
const firstDate = new Date(1997, 06, 07);
const secondDate = new Date();

const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
const hours = diffDays * 24;
const minutes = diffDays * (24 * 60)
const years = Math.round(diffDays / 365);

document.querySelector('.stats-date').textContent = diffDays;
document.querySelector('.stats-hours').textContent = hours;
document.querySelector('.stats-minutes').textContent = minutes;
document.querySelector('.stats-years').textContent = years;


const copyEmailLinkHi = document.querySelector('.copy-hi');
const copyEmailLinkFinance = document.querySelector('.copy-finance');
const copyEmailLinkHva = document.querySelector('.copy-hva');

// Copy email to clipboard
copyEmailLinkHi.onclick = e => {
  e.preventDefault()
  copyToClipboard('hi@dandevri.es')
  e.target.classList.add('things')
  e.target.textContent = 'copied';
  setTimeout(() => { e.target.classList.remove('things'); e.target.textContent = 'copy' }, 1000)
}

copyEmailLinkFinance.onclick = e => {
  e.preventDefault()
  copyToClipboard('finance@dandevri.es')
  e.target.classList.add('things')
  e.target.textContent = 'copied';
  setTimeout(() => { e.target.classList.remove('things'); e.target.textContent = 'copy' }, 1000)
}

copyEmailLinkHva.onclick = e => {
  e.preventDefault()
  copyToClipboard('d.de.vries4@hva.nl')
  e.target.classList.add('things')
  e.target.textContent = 'copied';
  setTimeout(() => { e.target.classList.remove('things'); e.target.textContent = 'copy' }, 1000)
}

// Copied straight from StackOverflow 🎉
const copyToClipboard = str => {
  const el = document.createElement('textarea')  // Create a <textarea> element
  el.value = str                                 // Set its value to the string that you want copied
  el.setAttribute('readonly', '')                // Make it readonly to be tamper-proof
  el.style.position = 'absolute'
  el.style.left = '-9999px'                      // Move outside the screen to make it invisible
  document.body.appendChild(el)                  // Append the <textarea> element to the HTML document
  const selected =
    document.getSelection().rangeCount > 0        // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false                                    // Mark as false to know no selection existed before
  el.select()                                    // Select the <textarea> content
  document.execCommand('copy')                   // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el)                  // Remove the <textarea> element
  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges()    // Unselect everything on the HTML document
    document.getSelection().addRange(selected)   // Restore the original selection
  }
}


/* Bio widget:
  Based on the value checked in de radio button enable or hide all other classes to
  add a new paragraph. Need a refactor.
*/

const sentence = document.querySelector('.bio-sentence');
const short = document.querySelector('.bio-short');
const medium = document.querySelector('.bio-medium');
const long = document.querySelector('.bio-long');
const story = document.querySelector('.bio-story');

const radios = document.querySelectorAll('input[type=radio][name="length"]');
radios.forEach(radio => radio.addEventListener('change', function() {

  console.log(radio.value);

  if(radio.value === 'sentence') {
    sentence.classList.replace("hidden", "enable");
    short.classList.replace('enable', "hidden");
    medium.classList.replace('enable', "hidden");
    long.classList.replace('enable', "hidden");
    story.classList.replace('enable', "hidden");
  }

  else if (radio.value === 'short') {
    sentence.classList.replace("hidden", "enable");
    short.classList.replace('hidden', "enable");
    medium.classList.replace('enable', "hidden");
    long.classList.replace('enable', "hidden");
    story.classList.replace('enable', "hidden");
  }

  else if (radio.value === 'medium') {
    sentence.classList.replace("hidden", "enable");
    short.classList.replace('hidden', "enable");
    medium.classList.replace('hidden', "enable");
    long.classList.replace('enable', "hidden");
    story.classList.replace('enable', "hidden");
  }

  else if (radio.value === 'long') {
    sentence.classList.replace("hidden", "enable");
    short.classList.replace('hidden', "enable");
  medium.classList.replace('hidden', "enable");
    long.classList.replace('hidden', "enable");
    story.classList.replace('enable', "hidden");
  }

  else {
    sentence.classList.replace("hidden", "enable");
    short.classList.replace('hidden', "enable");
    medium.classList.replace('hidden', "enable");
    long.classList.replace('hidden', "enable");
    story.classList.replace('hidden', "enable");
  }

}));

/* Image widget:
  Based on the clicked image in the gallery show the image full
  screen and it can be copied or opened in full size.
*/

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
