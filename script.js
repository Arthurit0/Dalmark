function validateForm() {
  var x = document.forms["Formulario"]["text-box-name"].value;
  var y = document.forms["Formulario"]["text-box-email"].value;
  var z = document.forms["Formulario"]["combo-box-calendar"].value;

  if ((x == "") | (y == "") | (z == "")) {
    alert("Todos os campos devem ser preenchidos!");
    return false;
  }
}

function deletar(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table-exercicio2").deleteRow(i);
}

function storageInLocal() {
  window.localStorage.setItem("Teste", "Teste");

  var name = document.forms["Formulario"]["text-box-name"].value;
  var email = document.forms["Formulario"]["text-box-email"].value;
  var birthday = document.forms["Formulario"]["combo-box-calendar"].value;
  var gender;

  if (document.querySelector("#masc:checked") != null) {
    gender = "Masculino";
  } else {
    gender = "Feminino;";
  }

  var active;

  if (document.querySelector("#active:checked") != null) {
    active = "Ativo";
  } else {
    active = "Inativo";
  }

  var formData = { name, email, birthday, gender, active };
  const Data = JSON.stringify(formData);
  window.localStorage.setItem("Dados", Data);

  return true;
}

const selectStates = document.querySelector("#states");
const selectCities = document.querySelector("#cities");

function populateStateSelect() {
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(
    (res) =>
      res.json().then((states) => {
        states.map((state) => {
          const option = document.createElement("option");

          option.setAttribute("value", state.sigla);
          option.textContent = state.nome;

          selectStates.appendChild(option);
        });
      })
  );
}

function populateCitySelect() {
  selectStates.addEventListener("change", () => {
    let nodesSelectCities = selectCities.childNodes;

    [...nodesSelectCities].map((node) => node.remove());

    let state = selectStates.options[selectStates.selectedIndex].value;
  });
}
