fetch (`data.json`)
.then ((retorno) => retorno.json())
.then ((dados) => {
    const dadosJson = JSON.stringify(dados);
    console.log (dadosJson);
    console.log (typeof dadosJson)
})
.catch ((erro) => console.log ('Erro ao carregar dados:', erro));

