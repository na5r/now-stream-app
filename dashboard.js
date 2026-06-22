export function renderHome() {
    const container = document.getElementById('container');
    const cats = ['Trending', 'Recommended', 'Coming Soon'];
    cats.forEach(c => {
        container.innerHTML += `<h3>${c}</h3><div class="rail"></div>`;
    });
    // Navigation Sounds
    const click = new Audio('click.mp3');
    window.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') click.play();
        if(e.key === 'ArrowLeft') document.getElementById('sidebar').classList.add('open');
    });
}
