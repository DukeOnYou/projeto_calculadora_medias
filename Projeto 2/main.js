const form = document.getElementById('formAtividade');

const imgAprovado = '<img src="./imgaens/aprovado.png" alt="Emoji celebrando"/>';
const imgReprovado = '<img src="./imgaens/reprovado.png" alt="Emoji decepcionado"/>';

const atividades = [];
const notas = [];

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

const spanResult = document.getElementById('spanResultado');

const notaMinima = parseFloat(prompt('Digite a nota mínima de aprovação: '));

let linhas = '';

function adicionarLinha() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function inserirConteudo() {
    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida.`)
    }else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = `<tr>
            <td>${inputNomeAtividade.value}</td>
            <td>${inputNotaAtividade.value}</td>
            <td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>
        </tr>`;

        linhas += linha;
    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function calcMedia() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}

function funcSomaDasNotas() {
    const mediaFinal = calcMedia();

    const mediaFim = document.getElementById('mediaNotasFinal');
    mediaFim.innerHTML = mediaFinal.toFixed(2);
    const resultadoFinal = document.getElementById('resultadoFim');
    resultadoFinal.innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    inserirConteudo();
    adicionarLinha();
    funcSomaDasNotas();
});