const label = document.querySelector('label');
const searchContainer = document.querySelector('.search-container');

label.addEventListener('click', toggleSearchBox)

function toggleSearchBox() {
    searchContainer.classList.toggle('hidden');
}

console.log(searchContainer);