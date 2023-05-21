var inputValorInvestido = document.getElementById("valorInvestido");
var inputTempoMeses = document.getElementById("tempoMeses");
var investimentoSelecionado = document.getElementById("tipoInvestimento");
var btnCalcula = document.getElementById("btn-calcula");

var divResultado = document.getElementById("resultado");

var spanValorInvestido = document.getElementById("spanValorInvestido");
var spanRetorno = document.getElementById("spanRetorno");
var spanTempoInvestido = document.getElementById("spanTempoInvestido");
var spanMontante = document.getElementById("spanMontante");

btnCalcula.addEventListener("click", () => {
  if (
    inputValorInvestido.value == "" ||
    inputTempoMeses.value == "" ||
    investimentoSelecionado.value == ""
  ) {
    alert("Favor inserir os dados");
  } else {
    var taxaMensal = investimentoSelecionado.value / 12;
    var taxaTotal = taxaMensal * inputTempoMeses.value;
    var lucro = Number((inputValorInvestido.value * (taxaTotal / 100)).toFixed(0));
    var montante = Number(inputValorInvestido.value) + lucro;

    spanValorInvestido.innerText = "R$ " + inputValorInvestido.value;
    spanRetorno.innerText = "R$ " + lucro;
    spanTempoInvestido.innerText = inputTempoMeses.value + " meses";
    spanMontante.innerText = "R$ " + montante;
    divResultado.style.display = "flex";
  }
});

document.addEventListener("click", (event)=>{
    if (event.srcElement.id == "resultado"){
        divResultado.style.display = "none";
    }
})