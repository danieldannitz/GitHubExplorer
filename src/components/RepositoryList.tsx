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

  function handleFilter() {
    setSearchTerm(event?.target.value);
  }

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <textarea value={searchTerm} onChange={handleFilter}></textarea>
      <ul>
        {repositories
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm?.toLowerCase())
            ) {
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
