function Header() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol></ol>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
    </div>
  );
}

export default App;
