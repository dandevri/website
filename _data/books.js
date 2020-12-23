const books = [
  {
    title: "How to win at College",
    author: "Cal Newport",
    tag: "education",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417855862l/253197.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/253197.How_to_Win_at_College"
  },
  {
    title: "How to Become a Straight-A Student ",
    author: "Cal Newport",
    tag: "education",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1361208630l/253203.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/253203.How_to_Become_a_Straight_A_Student"
  },
  {
    title: "Never Split the Difference",
    author: "Chris Voss",
    tag: "business",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1460910517l/26156469.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/26156469-never-split-the-difference"
  },
  {
    title: "Het water komt",
    author: "Rutger Bregman",
    tag: "society",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580287693l/50711644._SX318_.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/50711644-het-water-komt"
  },
  {
    title: "Ultralearning",
    author: "Scott H. Young",
    tag: "teaching",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554211384l/44770129._SY475_.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/44770129-ultralearning"
  },
  {
    title: "Bird by Bird",
    author: "Anne Lamott",
    tag: "writing",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394996112l/12543.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/12543.Bird_by_Bird"
  },
  {
    title: "Het internet is stuk ",
    author: "Marleen Stikker",
    tag: "technology",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574186413l/48894469._SY475_.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/48894469-het-internet-is-stuk"
  },
  {
    title: "The Checklist Manifesto",
    author: "Atul Gawande",
    tag: "productivity",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1312061594l/6667514.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/6667514-the-checklist-manifesto"
  },
  {
    title: "Hyperfocus",
    author: "Chris Bailey",
    tag: "productivity",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525203482l/36959766._SX318_.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/36959766-hyperfocus"
  },
  {
    title: "Keep Going",
    author: "Austin Kleon",
    tag: "creative",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535883531l/40591677._SX318_.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/40591677-keep-going"
  },
  {
    title: "Show your Work!",
    author: "Austin Kleon",
    tag: "creative",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1404580714l/18290401.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/18290401-show-your-work"
  },
  {
    title: "Wijze Lessen: 12 Bouwstenen",
    author: "Tim Surma",
    tag: "teaching",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1568353877l/53152868._SX318_SY475_.jpg",
    read: "2020",
    format: "eBook",
    url: "https://www.goodreads.com/book/show/53152868-wijze-lessen"
  },
  {
    title: "Remote",
    author: "David Heinemeier Hansson",
    tag: "work",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1363265098l/17316682.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/17316682-remote"
  },
  {
    title: "Make a Zine",
    author: "Joe Biel",
    tag: "craft",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1517438535l/33163327.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/33163327-make-a-zine"
  },
  {
    title: "Toetsrevolutie",
    author: "Dominique Sluijsmans",
    tag: "education",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1523537289l/39808619._SY475_.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/39808619-toetsrevolutie-naar-een-feedbackcultuur-in-het-hoger-onderwijs"
  },
  {
    title: "Het prachtige risico van onderwijs",
    author: "Gert Biesta",
    tag: "education",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1451152145l/28357027._SY475_.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/28357027-het-prachtige-risico-van-onderwijs"
  },
  {
    title: "Teaching WalkThrus",
    author: "Tom Sherrington",
    tag: "education",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576456379l/49256630._SX318_.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/49256630-teaching-walkthrus"
  },
  {
    title: "Rosenshine's Principles in Action",
    author: "Tom Sherrington",
    tag: "education",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550534534l/44056942._SX318_.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/44056942-rosenshine-s-principles-in-action"
  },
  {
    title: "Start with Why",
    author: "Simon Sinek",
    tag: "life",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360936414l/7108725.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/7108725-start-with-why"
  },
  {
    title: "So Good They Can't Ignore You",
    author: "Cal Newport",
    tag: "life",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360564614l/13525945.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/13525945-so-good-they-can-t-ignore-you"
  },
  {
    title: "Bullshit Jobs",
    author: "David Graeber",
    tag: "life",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1523865380l/34466958.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/34466958-bullshit-jobs"
  },
  {
    title: "The Pomodoro Technique",
    author: "Francesco Cirillo",
    tag: "productivity",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1378948919l/18482790.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/18482790-the-pomodoro-technique"
  },
  {
    title: "Eat That Frog!",
    author: "Brian Tracy ",
    tag: "productivity",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328854785l/95887.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/95887.Eat_That_Frog_"
  },
  {
    title: "Ik weet je wachtwoord",
    author: "Daniël Verlaan",
    tag: "technology",
    cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601985777l/55358346._SY475_.jpg",
    read: "2020",
    format: "Paperback",
    url: "https://www.goodreads.com/book/show/55358346-ik-weet-je-wachtwoord"
  },
]

module.exports = {
 books
}
