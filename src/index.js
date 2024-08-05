function converterParaRomano(numero) {
    const numerosRomanos = [
        { valor: 1000, simbolo: 'M' },
        { valor: 900, simbolo: 'CM' },
        { valor: 500, simbolo: 'D' },
        { valor: 400, simbolo: 'CD' },
        { valor: 100, simbolo: 'C' },
        { valor: 90, simbolo: 'XC' },
        { valor: 50, simbolo: 'L' },
        { valor: 40, simbolo: 'XL' },
        { valor: 10, simbolo: 'X' },
        { valor: 9, simbolo: 'IX' },
        { valor: 5, simbolo: 'V' },
        { valor: 4, simbolo: 'IV' },
        { valor: 1, simbolo: 'I' }
    ];

    let resultado = '';

    for (const numeroRomano of numerosRomanos) {
        while (numero >= numeroRomano.valor) {
            resultado += numeroRomano.simbolo;
            numero -= numeroRomano.valor;
        }
    }

    return resultado;
}


function converterParaArabico(romano) {
    const numerosRomanos = {
        'M': 1000, 'CM': 900, 'D': 500, 'CD': 400,
        'C': 100, 'XC': 90, 'L': 50, 'XL': 40,
        'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1
    };

    let resultado = 0;
    let i = 0;

    while (i < romano.length) {
        const doisCaracteres = romano.substring(i, i + 2);
        const umCaracter = romano.substring(i, i + 1);

        if (numerosRomanos[doisCaracteres]) {
            resultado += numerosRomanos[doisCaracteres];
            i += 2;
        } else if (numerosRomanos[umCaracter]) {
            resultado += numerosRomanos[umCaracter];
            i += 1;
        } else {
            return 'Número romano inválido';
        }
    }

    return resultado;
}


document.addEventListener('DOMContentLoaded', () => {
    const formArabico = document.getElementById('form-arabico');
    const formRomano = document.getElementById('form-romano');
    const resultado = document.getElementById('resultado');
    const numeroInput = document.getElementById('numero');
    const romanoInput = document.getElementById('romano');

    formArabico.addEventListener('submit', (event) => {
        event.preventDefault();
        const numeroEntrada = parseInt(numeroInput.value, 10);

        if (!isNaN(numeroEntrada) && numeroEntrada > 0 && numeroEntrada <= 3999) {
            resultado.textContent = `Resultado: ${converterParaRomano(numeroEntrada)}`;
            
            romanoInput.value = '';
        } else {
            resultado.textContent = 'Número fora do intervalo permitido (1-3999).';
        }
    });

    formRomano.addEventListener('submit', (event) => {
        event.preventDefault();
        const romanoEntrada = romanoInput.value.toUpperCase();

        if (romanoEntrada) {
            const numeroConvertido = converterParaArabico(romanoEntrada);
            resultado.textContent = `Resultado: ${numeroConvertido}`;
            
            numeroInput.value = '';
        } else {
            resultado.textContent = 'Número romano inválido.';
        }
    });
});
