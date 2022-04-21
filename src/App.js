import "./style.scss";
import movie from "../src/movie.jpg"; // with import

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="movie-picture" src={movie} alt="movie"></img>
        <div className="prez">
          <h1 className="title">Movie title</h1>
          <h2 className="title-synopsis">Movie synopsis</h2>
          <p className="synopsis">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <h2 className="title-subtitle">Subtitle</h2>
        <div className="container-button">
          <button className="buttons">Item1</button>
          <button className="buttons">Item2</button>
          <button className="buttons">Item3</button>
          <button className="buttons">Item4</button>
        </div>
      </div>
    </div>
  );
}

export default App;
