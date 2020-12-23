const movies = [
  {
    title: "The Irishman",
    director: "Martin Scorsese",
    cover: "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR0,0,682,1000_AL_.jpg",
    watched: "2020",
    released: "2019",
    url: "https://www.imdb.com/title/tt1302006/"
  },
  {
    title: "The Two Popes",
    director: "Fernando Meirelles",
    cover: "https://m.media-amazon.com/images/M/MV5BY2RiOTc1YmYtMDk0Yy00ZWI4LTgzN2YtYTg2ZDZmOGIwNTA1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    watched: "2020",
    released: "2019",
    url: "https://www.imdb.com/title/tt8404614/"
  },
  {
    title: "1917",
    director: "Sam Mendes",
    cover: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    watched: "2020",
    released: "2019",
    url: "https://www.imdb.com/title/tt8579674/"
  },
  {
    title: "Parasite",
    director: " Bong Joon Ho",
    cover: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    watched: "2020",
    released: "2019",
    url: "https://www.imdb.com/title/tt6751668/"
  },
  {
    title: "Le Mans 66",
    director: " James Mangold",
    cover: "https://m.media-amazon.com/images/M/MV5BM2UwMDVmMDItM2I2Yi00NGZmLTk4ZTUtY2JjNTQ3OGQ5ZjM2XkEyXkFqcGdeQXVyMTA1OTYzOTUx._V1_UX182_CR0,0,182,268_AL_.jpg",
    watched: "2020",
    released: "2019",
    url: "https://www.imdb.com/title/tt1950186/"
  },
  {
    title: "Knives Out",
    director: "Rian Johnson",
    cover: "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SY1000_SX675_AL_.jpg",
    watched: "2020",
    released: "2019",
    url: "https://www.imdb.com/title/tt8946378/"
  },
  {
    title: "I See You",
    director: "Adam Randall",
    cover: "https://m.media-amazon.com/images/M/MV5BNzVkOWM5YTEtMDdkNi00YjMzLWEzNWEtODEwN2IyZTc4Yjg2XkEyXkFqcGdeQXVyMjc5MTg0MzQ@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    watched: "2020",
    released: "2019",
    url: "https://www.imdb.com/title/tt6079516/"
  },
  {
    title: "Playing with FIRE: The Documentary",
    director: "Travis Shakespeare",
    cover: "https://m.media-amazon.com/images/M/MV5BZmNmZmU4YTEtODdlNS00ZjhjLTgyYWYtMjUxOGY3YzRjZWQ2XkEyXkFqcGdeQXVyODcxMzg2MDc@._V1_SY1000_SX750_AL_.jpg",
    watched: "2020",
    released: "2019",
    url: "https://www.imdb.com/title/tt8941986/"
  },
  {
    title: "PressPausePlay",
    director: "David Dworsky",
    cover: "https://m.media-amazon.com/images/M/MV5BMTY1OTI0NzUxNl5BMl5BanBnXkFtZTcwNjI4NDM4NA@@._V1_SY1000_CR0,0,720,1000_AL_.jpg",
    watched: "2020",
    released: "2011",
    url: "https://www.imdb.com/title/tt1737674/"
  },
  {
    title: "Borat Subsequent Moviefilm",
    director: "Jason Woliner",
    cover: "https://m.media-amazon.com/images/M/MV5BNmY3OTdkOWEtNjc2ZC00OTZmLWI5OWItMjdjYjRkNTExNDNhXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    watched: "2020",
    released: "2020",
    url: "https://www.imdb.com/title/tt13143964/"
  },
  {
    title: "Art & Copy",
    director: "Doug Pray",
    cover: "https://m.media-amazon.com/images/M/MV5BMTI2MDcxMzk0Ml5BMl5BanBnXkFtZTcwNzcyNDg3Mg@@._V1_UY268_CR4,0,182,268_AL_.jpg",
    watched: "2020",
    released: "2009",
    url: "https://www.imdb.com/title/tt1333631/"
  },
  {
    title: "A Life of Speed",
    director: "Francisco Macri",
    cover: "https://m.media-amazon.com/images/M/MV5BZTgyMTE4NDktYjc4OC00NmUzLTg1NWQtNzQ1ZjZiNGZiOTIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg",
    watched: "2020",
    released: "2020",
    url: "https://www.imdb.com/title/tt6668212/"
  },
  {
    title: "The Speed Cubers",
    director: "Sue Kim",
    cover: "https://m.media-amazon.com/images/M/MV5BZDVlZjg5YTEtM2UyMC00YzYzLWIzZDUtMzRkYWIxYjJkODQ3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    watched: "2020",
    released: "2020",
    url: "https://www.imdb.com/title/tt12038300/"
  },
  {
    title: "The Social Dilemma",
    director: "Jeff Orlowski",
    cover: "https://m.media-amazon.com/images/M/MV5BNDVhMGNhYjEtMDkwZi00NmQ5LWFkODktYzhiYjY2NTZmYTNhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR3,0,182,268_AL_.jpg",
    watched: "2020",
    released: "2020",
    url: "https://www.imdb.com/title/tt11464826/"
  },
  {
    title: "Pretending I'm a Superman",
    director: "Ludvig Gür",
    cover: "https://m.media-amazon.com/images/M/MV5BZWIwNmNmZTctYTU4MS00MmE4LTkwNTUtMWZiYTNmODI5NWJhXkEyXkFqcGdeQXVyMzg3NDQzMA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    watched: "2020",
    released: "2020",
    url: "https://www.imdb.com/title/tt11698280/"
  },
  {
    title: "Star Wars: Episode I - The Phantom Menace",
    director: " George Lucas",
    cover: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    watched: "2020",
    released: "1999",
    url: "https://www.imdb.com/title/tt0120915/"
  },
]

module.exports = {
 movies
}
