export default function Header({ children, classes }) {
  return (
    <header className={`${classes} mt-13 overflow-hidden`}>
      <div className="container">{children}</div>
    </header>
  );
}
