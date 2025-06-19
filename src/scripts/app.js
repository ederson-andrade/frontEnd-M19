function gerarSenha() {
    const tamanhoInput = document.getElementById('length');
    const tamanho = parseInt(tamanhoInput.value);

    const incluirMaiusculas = document.getElementById('maiusculas').checked;
    const incluirMinusculas = document.getElementById('minusculas').checked;
    const incluirNumeros = document.getElementById('numeros').checked;
    const incluirSimbolos = document.getElementById('simbolos').checked;

    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}<>?/';

    let caracteresPermitidos = '';

    if (incluirMaiusculas) caracteresPermitidos += letrasMaiusculas;
    if (incluirMinusculas) caracteresPermitidos += letrasMinusculas;
    if (incluirNumeros) caracteresPermitidos += numeros;
    if (incluirSimbolos) caracteresPermitidos += simbolos;


    if (caracteresPermitidos === '') {
        alert('Por favor, selecione pelo menos um tipo de caractere.');
        return;
    }

    if (isNaN(tamanho) || tamanho < 8 || tamanho > 16) {
        alert('Digite um número entre 8 e 16 caracteres.');
        tamanhoInput.focus();
        return;
    }

    let senhaGerada = '';

    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
        senhaGerada += caracteresPermitidos[indiceAleatorio];
    }

    document.getElementById('resultado').value = senhaGerada;
}

function copiarSenha() {
    const campoResultado = document.getElementById('resultado');

    if (campoResultado.value === '') {
        alert('Nenhuma senha gerada para copiar!');
        return;
    }

    campoResultado.select();
    campoResultado.setSelectionRange(0, 99999);

    document.execCommand('copy');
    alert('Senha copiada com sucesso!');
}

document.getElementById('length').addEventListener('input', function (event) {
    const valor = event.target.value;
    event.target.value = valor.replace(/[^0-9]/g, '');

    if (event.target.value.length > 2) {
        event.target.value = event.target.value.slice(0, 2); 
    }
});
