fetch(
  "https://www.systeam.com.br/workflow_exec/qry/view/consulta-de-usuarios?offset=0&fmt=LOWER_CAMEL&ignoreNullParam=true",
  {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvd25lcklkIjoicHVibGljIiwic3ViIjoiYXJ0aHVyLnNpbHZhQGRhbG1hcmsuY29tLmJyIiwicm9sZXMiOlsiU1UiXSwiZXhwIjoxNjQ1NTI5MDA3MjM4LCJob3N0IjoiMTg5LjExMi4xMjYuMTciLCJkYXRlIjoiMTcvMDIvMjAyMiIsImRldmljZSI6ImRlc2t0b3AiLCJ0ZW5hbnRJZCI6InJvaGRlbl90ZXN0ZSIsInVzZXJBZ2VudCI6ImFkMGI1NjI3ZmIzZmFiMjRjY2RjNzZlM2ZjZGQ1MWRmIiwiZXh0TG9naW4iOjEsImF1dGhVcmwiOiJodHRwczovL3d3dy5zeXN0ZWFtLmNvbS5ici9hdXRoLyIsImlhdCI6MTY0NTA5NzAwN30.hDz9e-oPgQCbGUiboe6u5z0UE2eY2X6FMMwU8vgcDX0",
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
