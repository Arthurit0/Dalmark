const base_url = "https://servicodados.ibge.gov.br/api/v1";

export const fetchEstados = () => {
  const url = `${base_url}/localidades/estados`;

  return fetch(url).then((response) => response.json());
};

export const fetchCidadeDoEstado = (estado) => {
  const url = `${base_url}/localidades/estados/${estado}/municipios`;

  return fetch(url).then((response) => response.json());
};
