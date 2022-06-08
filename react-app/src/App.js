import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Header() {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            console.log("event", event);
            event.preventDefault();
          }}
        >
          WWW
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const liTags = props.data.map((e) => {
    return (
      <li key={e.id}>
        <a href={"/read/" + e.id}>{e.title}</a>
      </li>
    );
  });
  return (
    <nav>
      <ol>{liTags}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function App() {
  const topics = [
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
  ];

  return (
    <div>
      <Header
        onSelect={() => {
          alert("Header!!!");
        }}
      />
      <Nav data={topics} />
      <Article title="Welcome" body="Hello, WEB!" />

      <ButtonGroup variant="contained" aria-label="outlined button group">
        <Button
          variant="outlined"
          onClick={() => {
            alert("create!");
          }}
        >
          Create
        </Button>
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>
    </div>
  );
}
export default App;
