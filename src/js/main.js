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

/* Download do CV */
document.getElementById('downloadButton').addEventListener('click', function() {
    // Criando um link temporário
    var link = document.createElement('a');
    link.href = './src/CV - Vitor Otávio.pdf';
    link.download = 'CV - Vitor Otávio.pdf';

    // Simulando um clique no link para iniciar o download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
