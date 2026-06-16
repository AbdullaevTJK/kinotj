const searchInput = document.getElementById("searchInput");

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