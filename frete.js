//Function que verifica se o CEP é valido
const cepValido = (cep) => {
  if (cep.length == 8) {
    return true;
  } else {
    alert("Digite um CEP válido, sem caracteres especiais ");
  }
};

//arrow function, que obtem endereço como parametro
const preencherFormulario = (endereco) => {
  ///Substituiçao dos elementos HTML, pelos valores do endereço
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
};

//Const que pesquisa o CEP digitado
const pesquisarCep = async () => {
  const cep = document.getElementById("cep").value;
  //const que recebe a  URL da API ViaCep, e procura pelo CEP digitado
  const url = `http://viacep.com.br/ws/${cep}/json/`;

  //se CEP for válido, os dados da API são convertidos para JSON objeto, e a função de preencher é chamada
  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherFormulario(endereco);
  }
};
//addEventListerner, para quando input CEP não for mais o foco, chamar a const pesquisarCep
document.getElementById("cep").addEventListener("focusout", pesquisarCep);

// Arreys:

//arrey para verificar digito metropolitano de SP
const cepMetropolitano = [6, 7, 8, 9, 3];

//regioes Arreys
const sul = ["SC", "PR", "RS"];
const sudeste = ["SP", "MG", "ES", "RJ"];
const norte = ["AC", "AP", "AM", "PA", "RO", "RR", "TO"];
const centroOeste = ["DF", "MT", "GO", "MS"];
const nordeste = ["PB", "SE", "MA", "PI", "RN", "PE", "AL", "BA", "CE"];
////////////////////////

fetch;
//função que verifica o CEP e , retorna o frete
function verificarFrete() {
  //variaveis dos inputs HTML
  const indiceCidade = document.getElementById("cidade").value;
  var estado = document.getElementById("estado").value;
  const indice = document.getElementById("cep").value;

  // se a cidade for = Mogi das Cruzes, frete gratuito
  if (indiceCidade === "Mogi das Cruzes") {
    document.getElementById("frete").innerHTML =
      "Frete gratuito para Mogi das Cruzes";
    document.getElementById("freteRegiao").innerHTML = "";
    // verifica o 1° e 2° digito do CEP  (se for 11) . Para validar região litoral de SP
  } else if (
    estado === "SP" &&
    indice.charAt(0) === "1" &&
    indice.charAt(1) === "1" &&
    indiceCidade !== "Mogi das Cruzes"
  ) {
    document.getElementById("frete").innerHTML =
      "40% de desconto para Região Litoral  (R$870,00)";
  } else {
    document.getElementById("frete").innerHTML = " ";
  }

  //FOR que roda arrey  (cepMetropolitano), e verifica o 2° digito do CEP.Para validar região metropolitna de SP
  for (x = 0; x < cepMetropolitano.length; x++) {
    if (
      estado === "SP" &&
      indice.charAt(1) == cepMetropolitano[x] &&
      indiceCidade !== "Mogi das Cruzes"
    ) {
      document.getElementById("frete").innerHTML =
        "50% de desconto para Região Metropolitana (R$725,00)";
    }
  }

  //For que verifica o input do estado,e retorna o valor de sua região.Rodando a Arrey das regioes
  for (x = 0; x < 9; x++) {
    if (estado === sul[x]) {
      document.getElementById("freteRegiao").innerHTML =
        "Frete para região Sul: R$3.000";
    } else if (estado === sudeste[x] && indiceCidade !== "Mogi das Cruzes") {
      document.getElementById("freteRegiao").innerHTML =
        "Frete para região Sudeste: R$1.450";
    } else if (estado === norte[x]) {
      document.getElementById("freteRegiao").innerHTML =
        "Frete para região Norte: R$3500";
    } else if (estado === nordeste[x]) {
      document.getElementById("freteRegiao").innerHTML =
        "Frete para região Nordeste: R$2.980";
    } else if (estado === centroOeste[x]) {
      document.getElementById("freteRegiao").innerHTML =
        "Frete para região Centro Oeste: R$2.560";
    }
  }
}

/*carousel*/
const slidesContainer = document.querySelector(".slides-container");
const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {
  slidesContainer.scrollLeft += slideWidth * 2;
});

prevButton.addEventListener("click", () => {
  slidesContainer.scrollLeft -= slideWidth * 2;
});

/* ---------*/
