const clickSound = new Audio('click.mp3');
const typeSound = new Audio('type.mp3');

export async function renderHomeScreen() {
    const container = document.getElementById('container');
    const input = document.getElementById('searchInput');
    const categories = ['Trending Movies', 'Trending Series', 'Coming Soon'];
    
    container.innerHTML = '';
    categories.forEach(cat => {
        container.innerHTML += `<h3>${cat}</h3><div class="rail"></div>`;
    });

    // Toggle Search Bar
    document.getElementById('magnifyingGlass').onclick = () => {
        input.classList.toggle('visible');
        if(input.classList.contains('visible')) input.focus();
    };

    // Global Key Events for FireTV Remote
    window.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') clickSound.play();
        if(e.key === 'ArrowLeft') document.getElementById('sidebar').classList.add('open');
        if(e.key === 'ArrowRight') document.getElementById('sidebar').classList.remove('open');
        if(/^[a-zA-Z0-9]$/.test(e.key)) typeSound.play();
    });

    document.getElementById('filterMovies').onclick = () => alert("Filtering Movies");
    document.getElementById('filterSeries').onclick = () => alert("Filtering Series");
}
