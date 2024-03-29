import React, { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/respositories.scss";

//https://api.github.com/users/danieldannitz/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState();
  useEffect(() => {
    fetch("https://api.github.com/users/danieldannitz/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  function handleFilter(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <textarea value={searchTerm} onChange={(e) => handleFilter(e)}></textarea>
      <ul>
        {repositories
          .filter((val) => {
            if (val.name.toLowerCase().includes(searchTerm)) {
              return val;
            }
          })
          .map((repository) => {
            return (
              <RepositoryItem key={repository.name} repository={repository} />
            );
          })}
      </ul>
    </section>
  );
}

//o map percorre cada um dos repositórios e pra cada repositório ele retorna algo.
