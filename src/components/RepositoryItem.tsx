export function RepositoryItem(props) {
  return (
    <div>
      <li>
        <strong>{props.teste ?? "default"}</strong>
        <p>Forms in React</p>
        <a href="#">Acessar repositório</a>
      </li>
    </div>
  );
}
