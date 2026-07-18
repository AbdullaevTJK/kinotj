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