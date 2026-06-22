// Function to fetch data with automatic caching
async function getCachedMovie(imdbId) {
    const apiKey = 'a7fedb62';
    const url = `https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`;
    
    // Check if data exists in localStorage
    const cached = localStorage.getItem(imdbId);
    if (cached) {
        console.log(`Loading ${imdbId} from cache`);
        return JSON.parse(cached);
    }

    // If not, fetch from API and save to localStorage
    console.log(`Fetching ${imdbId} from API`);
    const response = await fetch(url);
    const data = await response.json();
    
    // Only cache if the API returned a valid result
    if (data.Response === "True") {
        localStorage.setItem(imdbId, JSON.stringify(data));
    }
    return data;
}

export async function renderHomeScreen() {
    const container = document.getElementById('railsContainer');
    const movieIds = ['tt3896198', 'tt0816692', 'tt0137523']; // Example IDs
    
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `<div class="row-title">Trending Now</div><div class="rail" id="trending-rail"></div>`;
    container.appendChild(row);
    
    const rail = row.querySelector('.rail');

    for(const id of movieIds) {
        const data = await getCachedMovie(id);
        
        if (data.Poster && data.Poster !== "N/A") {
            const tile = document.createElement('div');
            tile.className = 'movie-tile';
            tile.tabIndex = "0";
            tile.innerHTML = `<img src="${data.Poster}" style="width:100%; height:100%; object-fit:cover;">`;
            rail.appendChild(tile);
        }
    }
}
