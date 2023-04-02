let Button_OMW = document.querySelector ('.oppen-modal-window');
let Button_CMW = document.querySelector ('.close-modal-window');
let ModalWindow = document.querySelector ('.modal-window');
let BG = document.querySelector ('.body::after');

Button_OMW.addEventListener('click', () => {
    ModalWindow.classList.add('active');
});
Button_CMW.addEventListener('click', () => {
    ModalWindow.classList.remove('active');
});