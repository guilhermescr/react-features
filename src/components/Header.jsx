export default function Header({ classObj, page }) {
  return (
    <header className={classObj}>
      <h1>React Features - {page}</h1>
    </header>
  );
}
