export function renderHomeScreen() {
    const container = document.getElementById('railsContainer');
    const categories = ["Trending Now", "Continue Watching", "Top Rated"];
    
    categories.forEach(cat => {
        const row = document.createElement('div');
        row.className = 'row';
        row.innerHTML = `<div class="row-title">${cat}</div><div class="rail" id="rail-${cat.replace(' ', '-')}"></div>`;
        container.appendChild(row);
        
        const rail = row.querySelector('.rail');
        for(let i = 0; i < 6; i++) {
            const tile = document.createElement('div');
            tile.className = 'movie-tile';
            tile.tabIndex = "0";
            tile.innerHTML = `<img src="https://via.placeholder.com/250x140" style="width:100%;height:100%;object-fit:cover;">`;
            rail.appendChild(tile);
        }
    });
}
