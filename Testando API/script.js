let offset = 0;

function dataLoad() {
  fetch(
    "...",
    {
      method: "POST",
      headers: {
        Authorization:
          "...",
      },
    }
  )
    .then((response) => response.json())
    .then((data) =>
      data.map((user) => {
        const tr = document.createElement("tr");
        tr.innerHTML += "<td>" + user.cdUsuario + "</td>";
        tr.innerHTML += "<td>" + user.cdEmpresa + "</td>";

        document.getElementById("table-body").appendChild(tr);
      })
    );
}
