const buttonCarousel = document.querySelectorAll('.button');
const imagen = document.querySelectorAll('.imagen');

buttonCarousel.forEach((button, index) => {
    button.addEventListener('click', () => {

        desativeButtonSelected();

        selectButtonCarousel(button); 

        hideImagenActive();

        ShowBackgroundImagen(index);

    })
})

function ShowBackgroundImagen(index) {
    imagen[index].classList.add('active');
}

function selectButtonCarousel(button) {
    button.classList.add('selected');
}

function hideImagenActive() {
    const imagenActive = document.querySelector('.active');
    imagenActive.classList.remove('active');
}

function desativeButtonSelected() {
    const buttonSelected = document.querySelector('.selected');
    buttonSelected.classList.remove('selected');
}