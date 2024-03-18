function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance){
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const skills = document.getElementById('skills');
const projetos = document.getElementById('projetos');
const contato = document.getElementById('contato');

skills.addEventListener('click', () => {
    scrollToElement(".header")
})
projetos.addEventListener('click', () => {
    scrollToElement(".header", 1)
})
contato.addEventListener('click', () => {
    scrollToElement(".header", 2)
})