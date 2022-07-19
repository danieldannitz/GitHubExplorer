import { RepositoryItem } from "./RepositoryItem";

import "../styles/respositories.scss";
import { useEffect, useState } from "react";

//https://api.github.com/users/danieldannitz/repos

const repository = {
  title: "Unform",
  description: "Forms in React",
  link: "https://github.com/Unform/Unform",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  //useState vai armazenar a listagem de repositorios, como ele é uma lista, utilizamos um Array. É sempre legal iniciar o estado com o mesmo tipo que será armazenado.
  //Quando o componente for exibido em tela, os dados que virão da API ainda não terão sido carregados devido ao delay de ~200ms. Quando a API devolver a listagem de repositórios a aplicação será atualizada, pois este é o inuito do useState.
  //useState e useEffect são os dois hooks React mais utilizados.
  //o useEffect dispara uma função sempre que algo acontecer dentro da aplicação. Algo pode ser a alteração de uma variável, ou um refresh de página.
  //O useEffect não precisa ser assignado a uma variavel. A sintaxe deste hook consiste em uma arrow function seguido por um array de dependencias.
  //Essas dependencias são as informações que quando mudarem o useEffect será executado.
  //Se o array de dependencias estiver vazio, o useEffect será executado somente uma vez quando a página for recarregada. Quando vazio, nada na página irá alterar, além do refresh, pois não existem dependencias a serem executadas.
  //o Hook useEffect é geralmente utilizado sempre para fazer chamadas API.

  useEffect(() => {
    fetch("https://api.github.com/users/danieldannitz/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
