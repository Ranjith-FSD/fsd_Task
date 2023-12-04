class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;

        // Set rating to "PG" by default if not provided
        this.rating = rating || "PG";
    }

    // Method to get movies with a rating of "PG" from an array of Movie instances
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG­13");

// Output the details of the created movie
console.log("Title:", casinoRoyale.title);
console.log("Studio:", casinoRoyale.studio);
console.log("Rating:", casinoRoyale.rating);
