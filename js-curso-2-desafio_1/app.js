let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function ExibirConsole() {
  console.log('O botão foi pressionado');
}

function ExibirAlerta() {
  alert("Eu amo JS");
}

function ExibirPrompt() {
  let cidade = prompt("Digite um nome de uma cidade do Brasil:");
  alert("Estive em " +cidade+ " e lembrei de você!")
}

function ExibirSoma() {
  let PrimeiroNumero = parseInt(prompt("Digite um número"));
  let SegundoNumero = parseInt(prompt("Digite outro número"));
  let Soma = PrimeiroNumero + SegundoNumero;
  alert("A soma dos dois números são: " + Soma);
}