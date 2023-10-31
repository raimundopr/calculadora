let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value; // Adicionar valor ao campo de exibição
}

function clearDisplay() {
    display.value = ''; // Limpar o campo de exibição
}

function calculateResult() {
    try {
        display.value = eval(display.value); // Calcular e exibir o resultado
    } catch (error) {
        display.value = 'Erro';
    }
}
