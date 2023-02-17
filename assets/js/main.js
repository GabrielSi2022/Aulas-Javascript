// criar aplicativo que calcula o IMC baseado no peso e na altura
// A formula do IMC é x+x

//passo a passo
// pega o formulário e dá uma função para ele
// a função deve ter 2 valores dentro, peso e altura

// verificar se veio peso e altura cprretamente

//tratar erros

// calcular IMC

// mostrar na tela o resultado

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso Invalido");
    document.querySelector("#peso").style.border = "1px solid red";
    return;
  }
  if (!altura) {
    setResultado("Altura Invalida");
    return;
  }

  //calcula imc
  let imc = calculaIMC(peso, altura);

  setResultado(imc);
});

function criaElement(element) {
  const elem = document.createElement(element);
  return elem;
}

function calculaIMC(peso, altura) {
  return peso + altura;
}

function setResultado(msg) {
  const resultado = document.querySelector("#resultado");
  const p = criaElement("p");
  p.innerHTML = msg;
  resultado.innerHTML = ``;
  resultado.appendChild(p);
}
