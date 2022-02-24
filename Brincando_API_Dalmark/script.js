fetch(
  "https://www.systeam.com.br/workflow_exec/qry/view/consulta-de-usuarios?offset=0&fmt=LOWER_CAMEL&ignoreNullParam=true",
  {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvd25lcklkIjoicHVibGljIiwic3ViIjoiYXJ0aHVyLnNpbHZhQGRhbG1hcmsuY29tLmJyIiwicm9sZXMiOlsiU1UiXSwiZXhwIjoxNjQ2MTQwNjQ0OTE2LCJob3N0IjoiMTg5LjExMi4xMjYuMTciLCJkYXRlIjoiMjQvMDIvMjAyMiIsImRldmljZSI6ImRlc2t0b3AiLCJ0ZW5hbnRJZCI6InJvaGRlbl90ZXN0ZSIsInVzZXJBZ2VudCI6IjkyYzU2ZWI5NmVhMTMzODk5YzkyZjQ0ZWUzODk0OWFhIiwiZXh0TG9naW4iOjEsImF1dGhVcmwiOiJodHRwczovL3d3dy5zeXN0ZWFtLmNvbS5ici9hdXRoLyIsImlhdCI6MTY0NTcwODY0NH0.cudvEupJZtqQFqJXgkv7x8mHQwreVJL47BzCWyV1fm4",
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
