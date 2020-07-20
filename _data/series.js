const series = [
  {
    title: "The Witcher",
    created: "Lauren Schmidt",
    season: 1,
    cover: "https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt5180504/"
  },
  {
    title: "Unbelievable ",
    created: "Susannah Grant",
    season: 1,
    cover: "https://m.media-amazon.com/images/M/MV5BN2Q3OWQ1Y2UtN2E3OS00ODA2LWE1Y2EtYmY5OWMzNWYzMDZmXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt7909970/"
  },
  {
    title: "The Mind: Explained ",
    created: "Emma Stone",
    season: 1,
    cover: "https://m.media-amazon.com/images/M/MV5BNGE4YWIxNzEtNjI2NS00MmIxLWJmMDMtMDdjODM1YWRjYzcwXkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt10810430/"
  },
  {
    title: "Sex Education",
    created: "Laurie Nunn",
    season: 1,
    cover: "https://m.media-amazon.com/images/M/MV5BZjgyMzFiMDgtNWNmMS00ZDEyLTkzYzgtMjMzZjk4YjhjZWUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SY1000_SX800_AL_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt7767422/"
  },
  {
    title: "Sex Education",
    created: "Laurie Nunn",
    season: 2,
    cover: "https://m.media-amazon.com/images/M/MV5BZjgyMzFiMDgtNWNmMS00ZDEyLTkzYzgtMjMzZjk4YjhjZWUxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_SY1000_SX800_AL_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt7767422/"
  },
  {
    title: "The Mind of Aaron Hernandez",
    created: "Kevin Armstrong",
    season: 1,
    cover: "https://m.media-amazon.com/images/M/MV5BMjE2N2U0NjUtZTViYy00NWJmLWIwNzYtNTYxMWQ5ZTZjNjZiXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SY1000_SX675_AL_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt11475228/"
  },
  {
    title: "I Am Not Okay with This ",
    created: "Jonathan Entwistle,",
    season: 1,
    cover: "https://m.media-amazon.com/images/M/MV5BMWM5YzhmNGMtZTI4Ny00MGM4LThkYjAtMDIyMTEwNTQyZmQ1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,673,1000_AL_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt9446688/"
  },
  {
    title: "Formula 1: Drive to Survive",
    created: "Valtteri Bottas",
    season: 2,
    cover: "https://m.media-amazon.com/images/M/MV5BMzVkMGU0YWMtOWQxMC00MjFhLTg1NjAtMDFlZTZlYzJlMjlhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt8289930/"
  },
  {
    title: "Altered Carbon",
    created: "Laeta Kalogridis",
    season: 2,
    cover: "https://m.media-amazon.com/images/M/MV5BNjIxMWMzMzctYmZkYy00OTkzLWFlMWUtMjc3ZDFmYzQ3YmVkXkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt2261227"
  },
  {
    title: "Tiger King",
    created: "Carole Baskin",
    season: 1,
    cover: "https://m.media-amazon.com/images/M/MV5BYzI5MjQ2NzEtN2JmOC00MjE2LWI2NjItYTNjNTJjMjBkOWZkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt11823076/"
  },
  {
    title: "Better Call Saul",
    created: " Vince Gilligan",
    season: 5,
    cover: "https://m.media-amazon.com/images/M/MV5BMGE4YzY4NGEtOWYyYS00ZDk2LWExMmMtZDIyODhiMmNlMGE0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt3032476/"
  },
  {
    title: "After Life",
    created: "Ricky Gervais",
    season: 2,
    cover: "https://m.media-amazon.com/images/M/MV5BZjdjOWIxMDgtYTgwNS00MjE4LTliZWYtZGI1NDhhZmIyYjM1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt8398600/"
  },
  {
    title: "Mr. Robot",
    created: "Sam Esmail",
    season: 1,
    cover: "https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt4158110/"
  },
  {
    title: "Mr. Robot",
    created: "Sam Esmail",
    season: 2,
    cover: "https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt4158110/"
  },
  {
    title: "The Night Manager",
    created: "David Farr",
    season: 1,
    cover: "https://m.media-amazon.com/images/M/MV5BMTk1NzkyMTUyN15BMl5BanBnXkFtZTgwNTM0NzM2ODE@._V1_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt1399664/"
  },
  {
    title: "Mocro Maffia",
    created: "Achmed Akkabi",
    season: 2,
    cover: "https://m.media-amazon.com/images/M/MV5BY2JjMjcxMDgtMDI5OS00NDZhLTg5ZjMtN2M2YzcxYWJmNmZlXkEyXkFqcGdeQXVyNTExMzIyNDM@._V1_.jpg",
    watched: "2020",
    url: "https://www.imdb.com/title/tt8810204/"
  },
]

module.exports = {
 series
}
