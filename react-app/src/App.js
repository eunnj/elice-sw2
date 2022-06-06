import "./App.css";

function HeaderTag() {
  return (
    <header>
      <h1>
        <a href="/">Web</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
      </ol>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello,WEB!
    </article>
  );
}
function App() {
  return (
    <div>
      <HeaderTag />
      <Nav />
      <Article />
    </div>
  );
}
export default App;
