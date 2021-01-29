/* Calculate date from birth */
const oneDay = 24 * 60 * 60 * 1000;
const firstDate = new Date('1997', '06', '07');
const secondDate = new Date();

const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
const hours = diffDays * 24;
const minutes = diffDays * (24 * 60)
const years = Math.round(diffDays / 365);

document.querySelector('.stats-date').textContent = diffDays;
document.querySelector('.stats-hours').textContent = hours;
document.querySelector('.stats-minutes').textContent = minutes;
document.querySelector('.stats-years').textContent = years;
