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
        trailer: "zSWdZVtXT7E"
    },

    {
        title: "The Dark Knight",
        rating: "⭐ IMDb: 9.0/10",
        description: "Батман бо душмани хатарнок — Ҷокер рӯ ба рӯ мешавад.",
        image: "images/darkknight.jpg",
        trailer: "EXeTwQWrcwY"
    },

    {
        title: "Spider-Man: No Way Home",
        rating: "⭐ IMDb: 8.2/10",
        description: "Питер Паркер ба саёҳати ҷаҳони бисёрҷаҳонӣ ворид мешавад.",
        image: "images/spiderman.jpg",
        trailer: "JfVOs4VSpmA"
    }, 
    {
    title: "Avatar",
    rating: "⭐ IMDb: 7.9/10",
    description: "Дар сайёраи Пандора мубориза байни одамон ва сокинони маҳаллӣ оғоз мешавад.",
    image: "images/avatar.jpg",
    trailer: "5PSNL1qE6VY"
},

{
    title: "Titanic",
    rating: "⭐ IMDb: 7.9/10",
    description: "Ҳикояи муҳаббат дар киштии машҳури Titanic.",
    image: "images/titanic.jpg",
    trailer: "CHekzSiZjrY"
},

{
    title: "Fast & Furious",
    rating: "⭐ IMDb: 7.1/10",
    description: "Суръат, мошинҳо ва гурӯҳи дӯстони қавӣ.",
    image: "images/furious.jpg",
    trailer: "2TAOizOnNPo"
}
];


let heroIndex = 0;


function changeHeroMovie(){

    const movie = heroMovies[heroIndex];


    document.getElementById("heroTitle").innerText = movie.title;

    document.getElementById("heroRating").innerText = movie.rating;

    document.getElementById("heroDescription").innerText = movie.description;


    document.getElementById("heroMovie").style.backgroundImage =
    `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url(${movie.image})`;


    document.getElementById("heroWatch").onclick = function(){
        openTrailer(movie.trailer);
    };


    heroIndex++;

    if(heroIndex >= heroMovies.length){
        heroIndex = 0;
    }

}


setInterval(changeHeroMovie, 5000);