import { RepositoryItem } from "./RepositoryItem";

const repository = {
  title: "Unform",
  description: "Forms in React",
  link: "https://github.com/Unform/Unform",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
