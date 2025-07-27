const sizeButtons = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

sizeButtons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        sizeButtons.forEach(btn => btn.classList.remove('font-size_active'));

        event.currentTarget.classList.add('font-size_active');
        size = event.currentTarget.dataset.size;
        book.classList.remove('book_fs-big', 'book_fs-small');

        if(size != undefined){
            book.classList.add(`book_fs-${size}`);
        }
    })
});
