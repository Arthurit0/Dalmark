function formatForm() {
  var name = document.forms["Formulario"]["text-box-name"].value;
  var email = document.forms["Formulario"]["text-box-email"].value;
  var birthday = document.forms["Formulario"]["combo-box-calendar"].value;
  var state = document.getElementById("state").value;
  var city = document.getElementById("city").value;

  if (
    document.getElementById("masc").checked |
    document.getElementById("fem").checked
  ) {
    var gender = document.getElementById("masc").checked
      ? "Masculino"
      : "Feminino";
  } else {
    gender = false;
  }

  var active = document.getElementById("active").checked ? "Ativo" : "Inativo";

  return { name, email, birthday, state, city, gender, active };
}

function validateForm() {
  const data = formatForm();

  if (
    (data.name == "") |
    (data.email == "") |
    (data.birthday == "") |
    // (data.state == "empty-city") |
    // (data.city == "empty-state") |
    !data.gender
  ) {
    alert("Todos os campos devem ser preenchidos!");
    return false;
  }

  submit(data);
}

function submit(d) {
  const formData = JSON.parse(localStorage.getItem("Form-Data")) || [];
  formData.push(d);
  localStorage.setItem("Form-Data", JSON.stringify(formData));
}

function populateOnTable() {
  const arrayForm = JSON.parse(localStorage.getItem("Form-Data")) || [];

  alert("" + arrayForm);

  var table = document.getElementById("tbody");

  arrayForm.forEach((dados) => {
    var row = table.insertRow(-1);
  });
}

function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("table-exercicio2").deleteRow(i);
}

function remove(row) {
  let index = row.parentNode.parentNode.rowIndex;

  formData.splice(index - 1, 1);
  localStorage.setItem("formData", JSON.stringify(formData));
}

// API Estados
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
