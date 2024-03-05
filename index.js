function adicionarlembrete() {
    const novoLembreteTexto =document.getElementById("novo-lembrete").value;

    if (novoLembreteTexto.trim() !== "") {
        const lembretesLista = document.getElementById("lembretes-lista");
        const novoLembrete = document.createElement("li");
        novoLembrete.textContent = novoLembreteTexto;
        lembretesLista.appendChild(novoLembrete);

        //limpar campo de entrada
        document.getElementById("novo-lembrete").value = "";
    }
}