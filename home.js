export async function renderHomeScreen() {
    const container = document.getElementById('railsContainer');
    // Using a list of IMDB IDs to populate your rails
    const movieIds = ['tt3896198', 'tt0816692', 'tt0137523']; 
    const apiKey = 'a7fedb62';

    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `<div class="row-title">Trending Now</div><div class="rail" id="trending-rail"></div>`;
    container.appendChild(row);
    
    const rail = row.querySelector('.rail');

    for(const id of movieIds) {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
        const data = await response.json();
        
        if (data.Poster && data.Poster !== "N/A") {
            const tile = document.createElement('div');
            tile.className = 'movie-tile';
            tile.tabIndex = "0";
            tile.innerHTML = `<img src="${data.Poster}" style="width:100%;height:100%;object-fit:cover;">`;
            rail.appendChild(tile);
        }
    }
}
