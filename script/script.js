const botao = document.querySelector('.btn');
const tarefa = document.querySelector('.tarefa');
const saida = document.querySelector('.listaDeTarefas');

function criaLi() {
    const li = document.createElement('li');

    return li;
}
function criaBtnConcluido(li) {
    const btnConcluido = document.createElement('button');
    btnConcluido.innerText = 'Concluido'
    btnConcluido.setAttribute('class', 'concluido')
    li.appendChild(btnConcluido);
}
function criaBtnExcluir(li) {
    const btnExcluir = document.createElement('button');
    btnExcluir.innerText = 'Apagar'
    btnExcluir.setAttribute('class', 'apagar')
    li.appendChild(btnExcluir);
}
function criaBtnDesafazer(li) {
    const btnDesfazer = document.createElement('button');
    btnDesfazer.innerText = 'Desfazer';
    btnDesfazer.setAttribute('class', 'desfazer');
    li.appendChild(btnDesfazer);
}
function criaTarefa(tarefa) {
    const li = criaLi();
    li.innerHTML = tarefa.value;
    saida.appendChild(li);
    criaBtnConcluido(li);
    criaBtnDesafazer(li);
    criaBtnExcluir(li);
    limparInput();
    salvarTarefas();
}

function limparInput() {
    tarefa.value = '';
    tarefa.focus();
}


botao.addEventListener('click', (e) => {
    if (!tarefa.value) return;

    criaTarefa(tarefa);
});

document.addEventListener('click', (e) => {
    const evento = e.target;

    if (evento.classList.contains('apagar')) {
        evento.parentElement.remove();
    }

    salvarTarefas();
});

document.addEventListener('click', (e) => {
    const evento = e.target;
    
    if (evento.classList.contains('concluido')) {
        evento.parentElement.style.textDecoration = "line-through"
    }

});

document.addEventListener('click', (e) => {
    const evento = e.target;
    
    if (evento.classList.contains('desfazer')) {
        evento.parentElement.style.textDecoration = ""
        
    }

});

function salvarTarefas() {
    const liTarefas = saida.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefas of liTarefas){
        let tarefaString = tarefas.innerText;
        tarefaString = tarefaString.replace('Apagar', '').trim();
        tarefaString = tarefaString.replace('Concluido', '').trim();
        tarefaString = tarefaString.replace('Desfazer', '').trim();
        listaDeTarefas.push(tarefaString);
    }

    const tarefasJson = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJson);
}
function getTarefa() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
getTarefa();
