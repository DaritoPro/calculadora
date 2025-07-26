const display = document.getElementById('display');
const buttons = document.querySelectorAll('#calculator button');

alert('Bienvenido a una calculadora hecha por David, aca podrás hacer operaciones básicas como suma, resta, multiplicación y división. Para borrar todo presiona "AC", para borrar el último número presiona "DE" y para calcular presiona "="');

let currentInput = '';

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (btn.id === 'ac') {
            currentInput = '';
            display.value = '';
        } else if (btn.id === 'de') {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        } else if (btn.id === '=') {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch {
                display.value = 'Error';
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});