const fill = document.querySelector('.fill');
const emptyBoxes = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

emptyBoxes.forEach(current => {
    current.addEventListener('dragover', dragOver);
    current.addEventListener('dragenter', dragEnter);
    current.addEventListener('dragleave', dragLeave);
    current.addEventListener('drop', dragDropped);
})

function dragStart(event) {
    this.classList.add('hold');
    setTimeout(() => fill.classList = 'invisible', 0);// so first line happens first
}

function dragEnd(event) {
    this.classList = 'fill';
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    this.classList.add('hovered');
}

function dragLeave(event) {
    this.classList.remove('hovered');
}

function dragDropped(event) {
    console.log('dropped');
    this.classList.remove('hovered')
    //add the dragged  element to this empty box
    this.appendChild(fill);
}