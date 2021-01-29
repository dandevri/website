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
