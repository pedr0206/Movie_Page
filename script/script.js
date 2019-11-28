// Array that contain movie information.
const movies = [
    {
        "Title": "The Matrix",
        "youtubeID": "m8e-FF8MsqU&t",
        "Poster": "Matrix.jpg",
        "Released":"31 Mar 1999"
    },

    {
        "Title":  "Men In Black",
        "youtubeID": "1Q4mhYF9aQQ",
        "Poster": "MIB.jpg",
        "Released":"02 Jul 1997"
    },
    {
        "Title": "Fury",
        "youtubeID": "DNHuK1rteF4",
        "Poster" :"Fury.jpg",
        "Rating": "6.9",
        "Released":"17 Oct 2014"
    },

    {
        "Title": "Midway",
        "youtubeID": "l9laReRAYFk",
        "Poster": "Midway.jpg",
        "Released":"08 Nov 2019"
    },
    {
        "Title": "The Hunt for Red October",
        "youtubeID": "3C2tE7vjdHk",
        "Poster": "RedOctober.jpg",
        "Released":"02 Mar 1990",
    },
    {
        "Title": "Quantum of Solace",
        "youtubeID": "BBqYaFEWBxI",
        "Poster": "JamesBond.jpg",
        "Released":"14 Nov 2008"
    }
];

console.log(movies);

// for loop cann execute a block of code a number of times.
for (var i = 0; i < movies.length; i++) {

    // Assigning variable called URL contains the link references to OMDB site.
    var url = "http://www.omdbapi.com/?t=" + movies[i].Title + "&apikey=4f6f8721";

    // A variable containing the link to youtube and the movies youtubeID. Which is declared in the array above.
    var youtube ="https://www.youtube.com/watch?v=" + movies[i].youtubeID;

   // var images = "images/" + movies[i].Poster;


    // Takes the date from the array 'movies'
    var date1 = new Date(movies[i].Released);

    // Creating variable which contain current date.
    var date2 = new Date(Date.now());


// To calculate the time difference of two dates
    var Difference_In_Time = date2 - date1;

// To calculate the no. of days between two dates and '1000 * 3600 * 24' is milliseconds in a day.
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// Here I define how many digits the output should show after the comma.
    let n = Difference_In_Days.toFixed(0);

    //define container by finding the "i" of classname "title"
    let container = document.getElementsByClassName("title")[i];

    let link = document.getElementsByClassName("link-video")[i];

   // let picture = document.getElementsByClassName("image")[i];

    let rating =    document.getElementsByClassName("ratings")[i];

    let thedirector = document.getElementsByClassName("director")[i];
    let theactor = document.getElementsByClassName("actor")[i];
    let Des =    document.getElementsByClassName("description")[i];
    let Ageofmovie = document.getElementsByClassName("released")[i];



    //
    const h2 = document.createElement('h2');
    h2.setAttribute("class", "title");



    const a = document.createElement('a');
    // sets attribute 'href' to variable 'youtube'
    a.setAttribute("href", youtube );

    //var billede = document.createElement("img");
   // billede.setAttribute("src", images);


// Create html element p tag and set attribute to the class and a name called ratings.
    const p = document.createElement('p');
    p.setAttribute("class", "ratings");

    const Description = document.createElement('p');
    Description.setAttribute("class", "description");

    const Movieage = document.createElement('p');
    Movieage.setAttribute("class", "released");

    const directors = document.createElement('p');
    directors.setAttribute("class", "director");

    const actors = document.createElement('p');
    actors.setAttribute("class", "actor");

// Using the fetch method
    fetch(url)

        //
        .then(response => {
            return response.json(); // returning json file
        })

        // Get data from API
        .then(data => {

            //put h2 to the title of movie
            h2.innerText = data.Title; // from my json file above

            //
            a.innerText = "Trailer" ;

           // billede.innerHTML = "<img src=" + images + "/>";

            // Here I chose what should be posted between html tag p.

            // imdbRating is from omdbbapi api
            p.innerText= "Rating from IMDB: " + data.imdbRating;

            Movieage.innerText =  n + " days since released";
            directors.innerText = "Director: " + data.Director;
            actors.innerText = "Actor: " + data.Actors;

            Description.innerText= data.Plot;



            //put h2 in the container
            container.appendChild(h2);

            // put a in link
            link.appendChild(a);

            //
            rating.appendChild(p);

            Des.appendChild(Description);

            Ageofmovie.appendChild(Movieage);

            thedirector.appendChild(directors);

            theactor.appendChild(actors);

         //   picture.appendChild(billede);

            // use for testing. Can sees in website click to inspect the element and then console. Here you will see result of data.
            console.log(data);

        });
}