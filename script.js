async function searchCep(cep) {
  var msgError = document.getElementById("erro");
  msgError.innerHTML = "";
  try {
    var queryCep = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    var cepToJson = await queryCep.json();
    if (cepToJson.erro) {
      throw Error("Cep inexistente");
    }

    var cidade = document.getElementById("cidade");
    var logradouro = document.getElementById("logradouro");
    var estado = document.getElementById("estado");
    var bairro = document.getElementById("bairro");

    cidade.value = cepToJson.localidade;
    logradouro.value = cepToJson.logradouro;
    estado.value = cepToJson.uf;
    bairro.value = cepToJson.bairro;
  } catch (erro) {
    msgError.innerHTML = "Cep invalido";
  }
}

var cep = document.getElementById("cep");
// cep.addEventListener("", () => searchCep(cep.value));

var validate = document.getElementById('validate')

validate.addEventListener("change", function () {
  if (this.checked) {
    searchCep(cep.value);
  } else {
    cep.value = "";
    endereco.value = "";
    bairro.value = "";
    cidade.value = "";
    estado.value = "";
  }
});
