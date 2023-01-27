const cores = document.querySelector('.lista');
const botao = document.querySelector('#botao');
const display = cores.getAttribute('display');

botao.addEventListener('click', (event) => {
    if(cores.hasAttribute("style")){
        cores.removeAttribute("style");
    }else {
        cores.style.display = 'none';
    }
});