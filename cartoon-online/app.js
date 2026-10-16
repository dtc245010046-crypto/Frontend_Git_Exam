const movies = [
    {
        id: "big-buck-bunny",
        title: "Big Buck Bunny",
        subtitle: "Thỏ lớn và khu rừng xanh",
        duration: "10:34",
        views: 9700,
        updated: 1,
        youtubeId: "Vpg9yizPP_g",
        emoji: "🐰",
        meta: "Phim ngắn hoạt hình · Blender Open Movie",
        viewLabel: "9,7 N lượt xem"
    },
    {
        id: "sintel",
        title: "Sintel",
        subtitle: "Hành trình tìm người bạn nhỏ",
        duration: "14:48",
        views: 18600,
        updated: 2,
        youtubeId: "eRsGyueVLvQ",
        emoji: "🐉",
        meta: "Phim ngắn hoạt hình · Blender Open Movie",
        viewLabel: "18,6 N lượt xem"
    }
];

const movieList = document.querySelector("#movie-list");
const searchInput = document.querySelector("#search-input");
const sortSelect = document.querySelector("#sort-select");
const movieCount = document.querySelector("#movie-count");
const emptyState = document.querySelector("#empty-state");
const youtubePlayer = document.querySelector("#youtube-player");
const html5Player = document.querySelector("#html5-player");
const playerTitle = document.querySelector("#player-title");
const descriptionTitle = document.querySelector("#description-title");
const descriptionMeta = document.querySelector("#description-meta");
const viewCount = document.querySelector("#view-count");
let selectedMovieId = movies[0].id;
let activePlayer = "youtube";

function renderMovies() {
    const searchTerm = searchInput.value.trim().toLocaleLowerCase("vi");
    const sortBy = sortSelect.value;
    const filteredMovies = movies
        .filter((movie) => `${movie.title} ${movie.subtitle}`.toLocaleLowerCase("vi").includes(searchTerm))
        .sort((first, second) => sortBy === "popular"
            ? second.views - first.views
            : first.updated - second.updated);

    movieList.replaceChildren(...filteredMovies.map((movie) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `movie-item${movie.id === selectedMovieId ? " selected" : ""}`;
        button.setAttribute("aria-pressed", String(movie.id === selectedMovieId));
        button.setAttribute("aria-label", `Phát ${movie.title}`);

        const thumbnail = document.createElement("span");
        thumbnail.className = "movie-thumb";
        thumbnail.setAttribute("aria-hidden", "true");
        thumbnail.append(document.createTextNode(movie.emoji));
        const duration = document.createElement("span");
        duration.className = "movie-duration";
        duration.textContent = movie.duration;
        thumbnail.append(duration);

        const info = document.createElement("span");
        info.className = "movie-info";
        const title = document.createElement("strong");
        title.textContent = movie.title;
        const subtitle = document.createElement("span");
        subtitle.textContent = movie.subtitle;
        const tag = document.createElement("span");
        tag.className = "movie-tags";
        tag.textContent = "Phim minh họa";
        info.append(title, subtitle, tag);
        button.append(thumbnail, info);
        button.addEventListener("click", () => selectMovie(movie.id));
        return button;
    }));

    movieCount.textContent = `${filteredMovies.length} phim`;
    emptyState.hidden = filteredMovies.length !== 0;
}

function selectMovie(movieId) {
    const movie = movies.find((item) => item.id === movieId);
    if (!movie) return;

    selectedMovieId = movieId;
    if (activePlayer !== "youtube") setPlayer("youtube");
    playerTitle.textContent = movie.title;
    descriptionTitle.textContent = movie.title;
    descriptionMeta.textContent = movie.meta;
    viewCount.textContent = `◎ ${movie.viewLabel}`;
    youtubePlayer.title = `${movie.title} — video minh họa trên YouTube`;
    youtubePlayer.src = `https://www.youtube-nocookie.com/embed/${movie.youtubeId}?rel=0`;
    if (activePlayer === "html5") {
        html5Player.pause();
        html5Player.currentTime = 0;
        html5Player.load();
    }
    renderMovies();
}

function setPlayer(mode) {
    activePlayer = mode;
    const useHtml5 = mode === "html5";
    youtubePlayer.hidden = useHtml5;
    html5Player.hidden = !useHtml5;
    if (useHtml5) {
        youtubePlayer.src = "about:blank";
    } else {
        const movie = movies.find((item) => item.id === selectedMovieId);
        youtubePlayer.src = `https://www.youtube-nocookie.com/embed/${movie.youtubeId}?rel=0`;
        html5Player.pause();
    }
    document.querySelectorAll(".player-tab").forEach((button) => {
        const isActive = button.dataset.player === mode;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

searchInput.addEventListener("input", renderMovies);
sortSelect.addEventListener("change", renderMovies);
document.querySelectorAll(".player-tab").forEach((button) => {
    button.addEventListener("click", () => setPlayer(button.dataset.player));
});
document.addEventListener("keydown", (event) => {
    if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
        event.preventDefault();
        searchInput.focus();
    }
});

renderMovies();
