// Ҷустуҷӯ танҳо дар index.html
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        const filter = searchInput.value.toLowerCase();
        const movies = document.querySelectorAll(".movie");

        movies.forEach(movie => {
            const title = movie.querySelector("h3").textContent.toLowerCase();

            if (title.includes(filter)) {
                movie.style.display = "block";
            } else {
                movie.style.display = "none";
            }
        });

    });
}

// Поп-ап трейлер
function openTrailer(videoId) {

    document.getElementById("trailerModal").style.display = "block";

    document.getElementById("trailerFrame").src =
        "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
}

function closeTrailer() {

    document.getElementById("trailerModal").style.display = "none";

    document.getElementById("trailerFrame").src = "";
}

// Бастан бо пахши қисми сиёҳи берун аз видео
window.onclick = function(event) {

    const modal = document.getElementById("trailerModal");

    if (event.target == modal) {
        closeTrailer();
    }

} 
const heroMovies = [
  {
    title: "Interstellar",
    rating: "⭐ IMDb: 8.7/10",
    description: "Гурӯҳи кайҳоннавардон барои ёфтани сайёраи нав ба саёҳати хатарнок мераванд.",
    image: "images/interstellar.jpg",
    trailer: "zSWdZVtXT7E",
    page: "interstellar.html"
},

{
    title: "The Dark Knight",
    rating: "⭐ IMDb: 9.0/10",
    description: "Батман бо Ҷокер рӯ ба рӯ мешавад.",
    image: "images/darkknight.jpg",
    trailer: "EXeTwQWrcwY",
    page: "darkknight.html"
},

{
    title: "Spider-Man: No Way Home",
    rating: "⭐ IMDb: 8.2/10",
    description: "Питер Паркер ба ҷаҳони бисёрҷаҳонӣ ворид мешавад.",
    image: "images/spiderman.jpg",
    trailer: "JfVOs4VSpmA",
    page: "spiderman.html"
},

{
    title: "Avatar",
    rating: "⭐ IMDb: 7.9/10",
    description: "Ҷейк Салли барои ҳифзи сайёраи Пандора мубориза мебарад.",
    image: "images/avatar.jpg",
    trailer: "5PSNL1qE6VY",
    page: "avatar.html"
},

{
    title: "Titanic",
    rating: "⭐ IMDb: 7.9/10",
    description: "Ҳикояи муҳаббати Ҷек ва Роуз дар киштии Titanic.",
    image: "images/titanic.jpg",
    trailer: "CHekzSiZjrY",
    page: "titanik.html"
},

{
    title: "Fast & Furious",
    rating: "⭐ IMDb: 7.1/10",
    description: "Мусобиқаҳои суръат ва саргузаштҳои Доминик Торетто.",
    image: "images/furious.jpg",
    trailer: "2TAOizOnNPo",
    page: "farsaj.html"
}
];


let heroIndex = 0;


function changeHeroMovie(){

    const movie = heroMovies[heroIndex];


    document.getElementById("heroTitle").innerText = movie.title;

    document.getElementById("heroRating").innerText = movie.rating;

    document.getElementById("heroDescription").innerText = movie.description;

 const hero = document.getElementById("heroMovie");

hero.style.opacity = "0";

setTimeout(() => {

    hero.style.backgroundImage =
    `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url(${movie.image})`;

    hero.style.opacity = "1";

}, 400);


  


document.getElementById("heroInfo").onclick = function(){
    window.location.href = movie.page;
};

    heroIndex++;

    if(heroIndex >= heroMovies.length){
        heroIndex = 0;
    }

}

changeHeroMovie();

setInterval(changeHeroMovie, 5000);
function filterMovies(category){

    const movies = document.querySelectorAll(".movie");

    movies.forEach(movie => {

        if(category === "all"){

            movie.style.display = "block";

        }else if(movie.classList.contains(category)){

            movie.style.display = "block";

        }else{

            movie.style.display = "none";

        }

    });

}
const newMovies = [
{
title:"Avengers: Endgame",
image:"images/avengers.jpg",
rating:"⭐ IMDb: 8.4",
genre:"Боевик",
year:"2019",
page:"avengers.html"
},

{
title:"Joker",
image:"images/joker.jpg",
rating:"⭐ IMDb: 8.3",
genre:"Драма",
year:"2019",
page:"joker.html"
}
];
const newContainer = document.getElementById("newMoviesContainer");

if(newContainer){

newMovies.forEach(movie => {

newContainer.innerHTML += `

<div class="movie">

<a href="${movie.page}">

<img src="${movie.image}" alt="${movie.title}">

<h3>${movie.title}</h3>

<p>${movie.rating}</p>

<p>${movie.genre} • ${movie.year}</p>

</a>

</div>

`;

});

}