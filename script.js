// Função para mostrar parágrafos
function processarCodigoFonte() {
    // Limpa o contêiner de resultados anteriores
    const container = document.getElementById('elementos-container');
    container.innerHTML = '';

    // Obtém o código fonte inserido pelo usuário
    const sourceCode = document.getElementById('source-code').value;
    
    // Cria um elemento div para inserir o código fonte e permitir a busca
    const parser = new DOMParser();
    const doc = parser.parseFromString(sourceCode, 'text/html');
    
    // Seleciona todos os elementos com a classe 'h5p-sc-label'
    const elements = doc.querySelectorAll('div.h5p-sc-label');

    if (elements.length > 0) {
        elements.forEach(element => {
            const parentLi = element.closest('li.h5p-sc-alternative.h5p-sc-is-correct');
            const paragraphs = element.querySelectorAll('p');
            if (paragraphs.length > 0) {
                paragraphs.forEach(paragraph => {
                    const paragraphElement = document.createElement('div');
                    paragraphElement.textContent = paragraph.textContent;
                    paragraphElement.className = 'paragraph';
                    if (parentLi) {
                        paragraphElement.classList.add('correct');
                    }
                    container.appendChild(paragraphElement);
                });
            } else {
                const noParagraphElement = document.createElement('div');
                noParagraphElement.textContent = 'Este elemento não contém parágrafos.';
                noParagraphElement.className = 'paragraph';
                container.appendChild(noParagraphElement);
            }
        });
    } else {
        container.textContent = 'Nenhum elemento com a classe "h5p-sc-label" foi encontrado.';
    }
}

// Event listener para capturar a tecla 'L'
document.addEventListener('keydown', function(event) {
    if (event.key === 'l' || event.key === 'L') {
        window.location.replace('google-clone.html'); // Redireciona para google-clone.html na mesma guia
    }
});
