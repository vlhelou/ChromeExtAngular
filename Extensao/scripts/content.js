
// configura o listener para o evento de mudança na página
const targetNode = document.getElementsByTagName("body")[0];
const config = { attributes: true, childList: true, subtree: true };
const callback = (mutationList, observer) => {
    const ipt2 = document.getElementById("ipt2");
    const btn = document.getElementById("btnInserido");
    if (ipt2 != null && btn == null) {
        insereBotao(ipt2);
    }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

function insereBotao(elemento) {
    const btn = document.createElement("button");
    btn.id = "btnInserido";
    btn.innerHTML = "consuta API";
    btn.onclick = function () {
        consultaAPI(elemento)
    }
    const parent = elemento.parentNode;
    // const ultimo = parent.lastChild;
    // elemento.parentNode.insertAfter(btn,ultimo);
    parent.appendChild(btn);
}

function consultaAPI(elemento){
    const url = "http://localhost:5223";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        elemento.value = data.valor;
        // dispara o evento de input para que o angular atualize o valor do campo
        var event = new Event('input');
        elemento.dispatchEvent(event);
    })
    .catch(error => {
        console.log(error);
    })
}

