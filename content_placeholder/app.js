const cardHeader = document.querySelector('.card-header');
const date = document.querySelector('.date');
const authorName = document.querySelector('.author-name');
const authorImg = document.querySelector('.author-img');
const cardIntroText = document.querySelector('.card-intro-text');
const cardTitle = document.querySelector('.card-title');
const animatedBgs = document.querySelectorAll('.animated-bg');
const contentPlaceholders = document.querySelectorAll('.excerpt');

setTimeout(getData, 4000);

function getData() {
    cardHeader.innerHTML = `<img
                src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1225&q=80">`;
    cardTitle.innerHTML = `<h1>A study on Chemistry</h1>`;
    cardIntroText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium tenetur eligendi, commodi quaerat quae sit.';
    authorImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Author Image">`;
    authorName.textContent = 'Mark Eastwood';
    date.textContent = `8th March, 2022`;
    contentPlaceholders.forEach(current => current.remove());
    animatedBgs.forEach(current => current.classList.remove('animated-bg'));
}
