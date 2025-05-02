/******************************
🎬 Movie Type Definition
******************************/
interface Movie {
	title: string;
	director: string;
	year: number;
	genre: string;
}

const movies: Movie[] = [
	{
		title: "The Shawshank Redemption",
		director: "Frank Darabont",
		year: 1994,
		genre: "Drama",
	},
	{
		title: "The Godfather",
		director: "Francis Ford Coppola",
		year: 1972,
		genre: "Crime",
	},
	{
		title: "Pulp Fiction",
		director: "Quentin Tarantino",
		year: 1994,
		genre: "Crime",
	},
	{
		title: "The Dark Knight",
		director: "Christopher Nolan",
		year: 2008,
		genre: "Action",
	},
	{
		title: "Forrest Gump",
		director: "Robert Zemeckis",
		year: 1994,
		genre: "Drama",
	},
];

/******************************
✅ Q1) Create a function that accepts an array of movies 
and prints the title of each movie.
 
// Example usage:
printMovieTitles(movies);
******************************/
//Method 1
function printTitles(movie: Movie[]): string[] {
	let movieTitles = movie.map((movie) => {
		return movie.title;
	});
	return movieTitles;
}
console.log(printTitles(movies));

//Method 2
// const printMovieTitles = movies.map((movies) => {
// 	return movies.title;
// });
// console.log(printMovieTitles);

//Method 3
// function printTitles(movie: Movie[]): void {
// 	let movieTitles = movie.map((movie) => {
// 		console.log(movie.title);
// 	});
// }

// printTitles(movies);

// console.log(printTitles);

/******************************
✅ Q2) Create a function that accepts:
 - an array of movies
 - a year
and returns how many movies were released in that year.
// Example usage:
console.log(countMoviesByYear(movies, 1994)); // Output: 3
******************************/

function countMoviesByYear(movie: Movie[], year: number): number {
	let movieYear = movie.filter((movie) => {
		if (movie.year === year) {
			return true;
		} else {
			return false;
		}
	});
	return movieYear.length;
	// console.log(movieYear.length);
}
console.log(countMoviesByYear(movies, 1994));
/******************************
✅ Q3) Create a function that:
 - accepts an array of movies
 - a title
 - a new genre
The function should update the genre of the movie with the given title
and return the modified array of movies.
 
// Example usage:
const updatedMovies = updateMovieGenre(movies, "Pulp Fiction", "Classic Crime");
******************************/

function updateMovieGenre(movies: Movie[], title: string, genre: string): Movie[] {
	let updateMovieGenre = movies.map((movies) => {
		if (movies.title === title) {
			return { ...movies, genre: genre };
		}
		return movies;
	});
	return updateMovieGenre;
}

const updatedMovies = updateMovieGenre(movies, "Pulp Fiction", "Classic Crime");

console.log(updatedMovies);
