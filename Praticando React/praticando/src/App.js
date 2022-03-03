import React, { useEffect, useState, useMemo, useCallback } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput("");
  }, [input, tarefas]);

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("tarefas");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }

    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      <ul>
        {tarefas.map((tarefa, i) => (
          <li key={i}>{tarefa}</li>
        ))}
      </ul>
      <br />
      <strong>Você tem {totalTarefas} tarefas!</strong>
      <br />
      <input
        type="text"
        value={input}
        onChange={(evt) => setInput(evt.target.value)}
      ></input>
      <button type="button" onClick={handleChange}>
        Adicionar tarefa
      </button>
    </div>
  );
}

export default App;
