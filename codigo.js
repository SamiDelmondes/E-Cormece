//fetch para obter informações da API do DÓLAR
fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
  .then((response) => response.json())
  .then((data) => precoProduto(data.USDBRL.bid));

//Função que obtem o valor do dólar como parametro
function precoProduto(valor) {
  ///Fetch que obtem informações do arquivo json, do produto
  fetch("dados.json")
    .then((response) => response.json())
    .then((corpo) => {
      console.log(corpo);

      //constantes que obtem tags do HTML
      const imagens = document.getElementsByClassName("img");
      const nome = document.getElementsByTagName("h1");
      const descricao = document.getElementsByTagName("p");
      const preco = document.getElementsByClassName("btn outline");

      //e for que substituem as tags pelas informaçoes do produto
      for (let i = 0; i < 6; i++) {
        var precoProduto = corpo.produtos[i].preco;
        imagens[i].src = corpo.produtos[i].imagem;
        nome[i].innerHTML = corpo.produtos[i].nome;
        descricao[i].innerHTML = corpo.produtos[i].descricao;
        preco[i].innerHTML = `$${precoProduto} / R$${(
          precoProduto * valor
        ).toFixed(2)}`;
      }
    });
}
