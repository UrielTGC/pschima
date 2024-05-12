const openModal = document.querySelector('.btn-1','.btn-2');
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

document.addEventListener('DOMContentLoaded', function() {
    var serviciosLink = document.querySelector('a[href="#Services"]');
    serviciosLink.addEventListener('click', function(event) {
        event.preventDefault();
        var servicesSection = document.getElementById('Services');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    });
});
