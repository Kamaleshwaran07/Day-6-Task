class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}

let movie1 = new Movie("LEO", "SevenScreen Studio", "U/A");

console.log(movie1);

let movie2 = new Movie("Seven", "New Line Cinema", "R");
console.log(movie2);

let movie3 = new Movie("Herbie", "New Line Cinema");
console.log(movie3);

let movie4 = new Movie(
  "The Chronicles of Narnia The Lion, The Witch and the Wardrobe",
  "Buenos Vista Pictures"
);
console.log(movie4);

let movie5 = new Movie("Cars", "PIXAR");
console.log(movie5);

let movie6 = new Movie("Siccin", "Netflix", "X");
console.log(movie6);

let movie7 = new Movie("Stuart Little", "Columbia Pictures");
console.log(movie7);

let movie8 = new Movie("Casino Royale", "Eon Production", "PG13");
console.log(movie8);

const moviesArray = [
  movie1,
  movie2,
  movie3,
  movie4,
  movie5,
  movie6,
  movie7,
  movie8,
];

console.log(moviesArray);
const pgMovies = Movie.getPG(moviesArray);

console.log(pgMovies);
