import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/respositories.scss";

//https://api.github.com/users/danieldannitz/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/danieldannitz/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}

//o map percorre cada um dos repositórios e pra cada repositório ele retorna algo.
