import React, { useState, useEffect, useRef } from 'react';

function Formulario(props) {
  const [nomeTarefa, setNomeTarefa] = useState('');
  const [concluida, setConcluida] = useState(false);
  const [totalTarefas, setTotalTarefas] = useState(0);
  const listaErrosRef = useRef(null);

  useEffect(() => {
    document.title = `Total de Tarefas: ${totalTarefas}`;

    return () => {
      document.title = '';
    };
  }, [totalTarefas]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nomeTarefa.trim() === '') {
      listaErrosRef.current.innerHTML = 'Por favor, preencha o campo de tarefa.';
      return;
    }
    listaErrosRef.current.innerHTML = '';
    props.adicionarTarefa({ nome: nomeTarefa, concluida });
    setNomeTarefa('');
    setConcluida(false);
    setTotalTarefas((prevTotal) => prevTotal + 1);
  };

  const handleChangeNome = (event) => {
    setNomeTarefa(event.target.value);
  };

  const handleChangeConcluida = () => {
    setConcluida(!concluida);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nomeTarefa} onChange={handleChangeNome} placeholder="Digite o nome da tarefa" />
      <label>
        <input type="checkbox" checked={concluida} onChange={handleChangeConcluida} />
        Concluída
      </label>
      <button type="submit">Adicionar Tarefa</button>
      <div ref={listaErrosRef} style={{ color: 'red' }}></div>
    </form>
  );
}

export default Formulario;
