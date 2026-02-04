// scripts.js

function searchFilter() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        const title = item.querySelector('p').innerText.toLowerCase();
        item.style.display = title.includes(input) ? 'block' : 'none';
    });
}

function genreFilter() {
    const select = document.getElementById('genre-select').value.toLowerCase();
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        const genre = item.getAttribute('data-genre').toLowerCase();
        item.style.display = (select === "all" || genre.includes(select)) ? 'block' : 'none';
    });
}
