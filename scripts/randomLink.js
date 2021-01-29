/* https://heydonworks.com/article/the-random-link/ */

const shuffle = (array) => {
  const clone = array.slice(0);
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

module.exports = function navLinks(collection, page) {
  const pageIndex = collection.findIndex(item => item.url === page.url);
  const matches = (a, b) => {
    return a.url === b.url
  }

  const others = collection.filter(item => item.url !== page.url);
  const random = others[Math.floor(Math.random() * others.length)] || null;
  const randomAll = shuffle(others).slice(0, others.length).map(other => other.url).join(',');

  return {
    random,
    randomAll
  }
}
