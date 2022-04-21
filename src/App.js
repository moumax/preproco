import "./style.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="movie-picture" src="src/movie.jpg" alt="movie"></img>
        <div className="prez">
          <div className="title">Movie title</div>
          <h2 className="title-synopsis">Movie synopsis</h2>
          <p className="synopsis">lorem*10</p>
        </div>
        <h2 className="title-subtitle">Subtitle</h2>
        <buttons className="buttons">Item1</buttons>
        <buttons className="buttons">Item2</buttons>
        <buttons className="buttons">Item3</buttons>
        <buttons className="buttons">Item4</buttons>
      </div>
    </div>
  );
}

export default App;
