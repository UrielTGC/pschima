const openModal = document.querySelector('.btn-1');
const modal =document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close')

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');   
});

closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show')
});

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});