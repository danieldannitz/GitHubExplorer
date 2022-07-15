export function RepositoryItem(props) {
  return (
    <div>
      <li>
        <strong>{props.repository.title ?? "default"}</strong>
        <p>{props.repository.description}</p>
        <a href={props.repository.link} target="_blank">
          Acessar Repositório
        </a>
      </li>
    </div>
  );
}
