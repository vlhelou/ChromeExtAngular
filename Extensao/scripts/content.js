



if (testeGeral != null) {
    testeGeral.innerHTML = "Localizado";
}

const op2 = document.querySelector("body > app-root > table > tr:nth-child(2) > td:nth-child(2) > div > input[type=text]")
if (op2 != null) {
    op2.value = "foi alterado";
}


const targetNode = document.getElementsByTagName("body")[0];
const config = { attributes: true, childList: true, subtree: true };
const callback = (mutationList, observer) => {
    // for (const mutation of mutationList) {
    //   if (mutation.type === 'childList') {
    //     if (mutation.addedNodes.length > 0) {

    //     }
    //     console.log('A child node has been added or removed.',mutation);
    //   } else if (mutation.type === 'attributes') {
    //     console.log(`The ${mutation.attributeName} attribute was modified.`);
    //   }
    // }
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
        var event = new Event('input');
        elemento.dispatchEvent(event);
    })
    .catch(error => {
        console.log(error);
    })
}

