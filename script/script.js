const botao = document.querySelector('.btn');
const tarefa = document.querySelector('.tarefa');
const saida = document.querySelector('.listaDeTarefas');

function criaLi(){
    const li = document.createElement('li');

    return li;
}
function criaBtnConcluido(li){
    const btnConcluido = document.createElement('button');
    btnConcluido.innerText = 'Concluido'
    btnConcluido.setAttribute('class','concluido')
    li.appendChild(btnConcluido);
}
function criaBtnExcluir(li){
    const btnExcluir = document.createElement('button');
    btnExcluir.innerText = 'Apagar'
    btnExcluir.setAttribute('class','apagar')
    li.appendChild(btnExcluir);
}

function criaTarefa(tarefa){
    const li = criaLi();
    li.innerHTML = tarefa.value;
    saida.appendChild(li);
    criaBtnConcluido(li);
    criaBtnExcluir(li);
    limparInput();
}

function limparInput() {
    tarefa.value = '';
    tarefa.focus();
}


botao.addEventListener('click', (e) => {
    if(!tarefa.value) return;

    criaTarefa(tarefa);
});

document.addEventListener('click', (e) => {
    const evento = e.target;

    if(evento.classList.contains('apagar')){
        evento.parentElement.remove();
    }
});

document.addEventListener('click', (e) => {
    const evento = e.target;

    if (evento.classList.contains('concluido')){
        evento.parentElement.style.textDecoration = "line-through"
    }
});