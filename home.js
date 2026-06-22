async function getCachedMovie(imdbId) {
    const apiKey = 'a7fedb62';
    const cached = localStorage.getItem(imdbId);
    if (cached) return JSON.parse(cached);
    const response = await fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`);
    const data = await response.json();
    if (data.Response === "True") localStorage.setItem(imdbId, JSON.stringify(data));
    return data;
}

export async function renderHomeScreen() {
    const container = document.getElementById('railsContainer');
    const movieIds = ['tt3896198', 'tt0816692', 'tt0137523'];
    container.innerHTML = '';
    const row = document.createElement('div');
    row.innerHTML = `<div style="padding:20px 40px; font-size:24px; font-weight:bold;">Trending Now</div><div class="rail"></div>`;
    container.appendChild(row);
    const rail = row.querySelector('.rail');
    for(const id of movieIds) {
        const data = await getCachedMovie(id);
        if (data.Poster && data.Poster !== "N/A") {
            const tile = document.createElement('div');
            tile.className = 'movie-tile';
            tile.tabIndex = "0";
            tile.innerHTML = `<img src="${data.Poster}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">`;
            tile.onfocus = () => tile.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            rail.appendChild(tile);
        }
    }
}
