let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;

    amigos.push(amigo); 

    let lista = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);

    validarCampo();
    limparCampo();
    console.log(amigos);
};

function validarCampo() {
    if (document.getElementById('amigo').value == '') {
        alert('Por favor, insira um nome.');
        return;
    };
};


function limparCampo() {
   let amigo = document.querySelector('input');
    amigo.value = '';
};

function limparLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos = [];
};

function sortearAmigo() {
    if (listaAmigos.innerHTML == '') {
        alert('Por favor, insira um nome.');
        return;
    }else{
    const lista = document.querySelectorAll('#listaAmigos li');
    const amigos = Array.from(lista).map(li => li.textContent);
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${sorteado} foi sorteado!</li>`;
    listaAmigos.innerHTML = "";
    limparLista();
        };
};