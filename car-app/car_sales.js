// Seleciona todos os botões da página
document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        // Recupera os dados do carro a partir de atributos data-* (data-nome e data-marca)
        const carName = button.getAttribute('car') || "Nome desconhecido";

        // Exibe um alerta informando que o carro foi vendido
        alert(`O carro foi vendido: ${carName}`);
    });
});