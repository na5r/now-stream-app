const API_KEY = 'a7fedb62';

async function fetchMovies(queryOrId, isSearch = false) {
    // If it's a search, use 's=', otherwise use 'i=' for specific ID
    const url = isSearch ? `https://www.omdbapi.com/?s=${queryOrId}&apikey=${API_KEY}` 
                         : `https://www.omdbapi.com/?i=${queryOrId}&apikey=${API_KEY}`;
    
    // Check cache
    const cached = localStorage.getItem(queryOrId);
    if (cached) return JSON.parse(cached);

    const response = await fetch(url);
    const data = await response.json();
    
    // Save to cache only if valid
    if (data.Response === "True" || data.Search) {
        localStorage.setItem(queryOrId, JSON.stringify(data));
    }
    return data;
}

export async function renderHomeScreen() {
    const container = document.getElementById('railsContainer');
    container.innerHTML = '';
    
    // Add Search Listener
    document.getElementById('searchInput').onkeypress = async (e) => {
        if (e.key === 'Enter') {
            const results = await fetchMovies(e.target.value, true);
            if (results.Search) {
                displayResults(results.Search);
            }
        }
    };

    // Initial Trending Row
    const row = document.createElement('div');
    row.innerHTML = `<div style="padding:20px 40px; font-size:24px;">Trending</div><div class="rail"></div>`;
    container.appendChild(row);
    
    const rail = row.querySelector('.rail');
    const ids = ['tt3896198', 'tt0816692', 'tt0137523'];
    for(const id of ids) {
        const data = await fetchMovies(id);
        createTile(data, rail);
    }
}

function displayResults(movies) {
    const rail = document.querySelector('.rail');
    rail.innerHTML = ''; // This clears the 3 default movies
    movies.forEach(m => createTile(m, rail));
}

function createTile(data, rail) {
    if (!data.Poster || data.Poster === "N/A") return;
    
    const tile = document.createElement('div');
    tile.className = 'movie-tile';
    tile.tabIndex = "0";
    tile.innerHTML = `<img src="${data.Poster}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`;
    
    // Add Click Interaction
    tile.onclick = () => {
        alert("You clicked on: " + (data.Title || "Movie"));
        console.log("Movie Data:", data);
    };

    tile.onfocus = () => tile.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    rail.appendChild(tile);
}
