///Fetch que obtem informações do arquivo json, do produto
fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
  .then((response) => response.json())
  .then((data) => infoDeProdutos(data.USDBRL.bid));

function infoDeProdutos(valor) {
  fetch("dados.json")
    .then((response) => response.json())
    .then((corpo) => {
      //if que indentifica o titulo html da pagina, e subistui as infomacoes para produto em questão
      if (document.title == "LANCER EVO") {
        var precoCarro = corpo.produtos[0].preco;
        document.getElementById("nome").innerHTML = corpo.produtos[0].nome;
        document.getElementById("descricao").innerHTML =
          corpo.produtos[0].descricao;
        document.getElementById("precoCarro").innerHTML = `$${precoCarro}`;
        document.getElementById("precoEmReais").innerHTML = `R$${(
          precoCarro * valor
        ).toFixed(2)}`;
      } else if (document.title == "FORD MUSTANG") {
        var precoCarro1 = corpo.produtos[1].preco;
        document.getElementById("nome").innerHTML = corpo.produtos[1].nome;
        document.getElementById("descricao").innerHTML =
          corpo.produtos[1].descricao;
        document.getElementById("precoCarro").innerHTML = `$${precoCarro1}`;
        document.getElementById("precoEmReais").innerHTML = `R$${(
          precoCarro1 * valor
        ).toFixed(2)}`;
      } else if (document.title == "PORSCHE MACAN") {
        var precoCarro2 = corpo.produtos[2].preco;
        document.getElementById("nome").innerHTML = corpo.produtos[2].nome;
        document.getElementById("descricao").innerHTML =
          corpo.produtos[2].descricao;
        document.getElementById(
          "precoCarro"
        ).innerHTML = `$${corpo.produtos[2].preco}`;
        document.getElementById("precoCarro").innerHTML = `$${precoCarro2}`;
        document.getElementById("precoEmReais").innerHTML = `R$${(
          precoCarro2 * valor
        ).toFixed(2)}`;
      }
    });
}
