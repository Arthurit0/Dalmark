window.onload = function () {
  populateStateSelect();
  populateCitySelect();
  populateTable();
};

function formatForm() {
  var name = document.forms["Formulario"]["text-box-name"].value;
  var email = document.forms["Formulario"]["text-box-email"].value;
  var birthday = document.forms["Formulario"]["combo-box-calendar"].value;
  var state = document.forms["Formulario"]["selectbox-state"].value;
  var city = document.forms["Formulario"]["selectbox-city"].value;

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
    (data.state == "empty-city") |
    (data.city == "empty-state") |
    !data.gender
  ) {
    alert("Todos os campos devem ser preenchidos!");
    return false;
  }

  submit();
}

function submit() {
  const formData = JSON.parse(localStorage.getItem("Form-Data")) || [];
  formData.push(formatForm());
  localStorage.setItem("Form-Data", JSON.stringify(formData));
  populateTable();
}

function populateTable() {
  const formData = JSON.parse(localStorage.getItem("Form-Data")) || [];
  var tbody = document.getElementById("tbody");

  formData.map((data) => {
    const tr = document.createElement("tr");
    tr.innerHTML +=
      '<td class = "click-row" onclick ="dataLoad(this)">' +
      data.name +
      "</td>";
    tr.innerHTML +=
      '<td class = "click-row" onclick ="dataLoad(this)">' +
      data.email +
      "</td>";
    tr.innerHTML +=
      '<td class = "click-row" onclick ="dataLoad(this)">' +
      data.birthday +
      "</td>";
    tr.innerHTML +=
      '<td class = "click-row" onclick ="dataLoad(this)">' +
      data.state +
      "</td>";
    tr.innerHTML +=
      '<td class = "click-row" onclick ="dataLoad(this)">' +
      data.city +
      "</td>";
    tr.innerHTML +=
      '<td class = "click-row" onclick ="dataLoad(this)">' +
      data.gender +
      "</td>";
    tr.innerHTML +=
      '<td class = "click-row" onclick ="dataLoad(this)">' +
      data.active +
      "</td>";
    tr.innerHTML +=
      '<td><input nome="delete-button" onclick="removeRow(this)" class="delete-button"type="button"id="delete5"value="Deletar"/></td>';
    tbody.appendChild(tr);
  });
}

function removeRow(r) {
  const formData = JSON.parse(localStorage.getItem("Form-Data")) || [];
  let index = r.parentNode.parentNode.rowIndex - 1;

  const confirmation = confirm(
    "Você tem certeza que deseja excluir este usuário?"
  );

  if (confirmation) {
    formData.splice(index, 1);
    localStorage.setItem("Form-Data", JSON.stringify(formData));
    window.location.reload();
  } else {
    return false;
  }
}

// API Estados
const selectStates = document.querySelector("#states");
const selectCities = document.querySelector("#cities");

function populateStateSelect() {
  const stateSelect = document.getElementById("state");

  fetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
  )
    .then((res) => res.json())
    .then((data) => {
      data.map((state) => {
        let stateOption = document.createElement("option");
        stateOption.setAttribute("value", state.sigla);
        stateOption.textContent = state.nome;
        stateSelect.appendChild(stateOption);
      });
    });
}

function populateCitySelect() {
  const stateSelect = document.getElementById("state");
  const citySelect = document.getElementById("city");

  stateSelect.addEventListener("change", () => {
    let nodesStateSelect = citySelect.childNodes;
    [...nodesStateSelect].map((node) => node.remove());

    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateSelect.value}/distritos?orderBy=nome`
    )
      .then((res) => res.json())
      .then((data) => {
        data.map((city) => {
          let cityOption = document.createElement("option");
          cityOption.setAttribute("value", city.nome);
          cityOption.textContent = city.nome;
          citySelect.appendChild(cityOption);
        });
      });
  });
}

function dataLoad(arrayItem) {
  const formData = JSON.parse(localStorage.getItem("Form-Data")) || [];
  let index = arrayItem.parentNode.rowIndex - 1;

  document.getElementById("name").value = formData[index].name;
  document.getElementById("email").value = formData[index].email;
  document.getElementById("birthday").value = formData[index].birthday;
  document.getElementById("state").value = formData[index].state;
  document.getElementById("empty-city").textContent = formData[index].city;

  const masc = document.getElementById("masc");
  const fem = document.getElementById("fem");
  formData[index].gender == "Masculino"
    ? (masc.checked = true)
    : (fem.checked = true);

  const active = document.getElementById("active");
  formData[index].active == "Ativo"
    ? (active.checked = true)
    : (active.checked = false);

  document.getElementById("submit").addEventListener("click", function () {
    var citySelected = document.getElementById("city").value;
    formData[index] = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      birthday: document.getElementById("birthday").value,
      state: document.getElementById("state").value,
      city: citySelected != "empty-city" ? citySelected : formData[index].city,
      gender: document.getElementById("masc").checked
        ? "Masculino"
        : "Feminino",
      active: document.getElementById("active").checked ? "Ativo" : "Inativo",
    };
    formData.splice(index, 1, formData[index]);
    localStorage.setItem("Form-Data", JSON.stringify(formData));
  });
}
