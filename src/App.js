import "./App.css";
// import Jobs from "./components/Jobs";
import Job from "./components/Job";
import Title from "./components/Title";

function App() {
  return (
    <>
      <header>
        <Title name="The Job Board" />
      </header>
      <div className="jobs">
        <Job
          className="red"
          title="yo"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="red"
          title="yo"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="red"
          title="yo"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="red"
          title="yo"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="red"
          title="yo"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="red"
          title="yo"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="red"
          title="yo"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="red"
          title="yo"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="red"
          title="yo"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
      </div>

      <footer>
        Made with <a href="https://fr.reactjs.org/">React</a>at
        <a href="https://www.lereacteur.io/">Le Reacteur</a>
        by<a href="https://github.com/LucasRoberto99">Lucas ROBERTO</a>{" "}
      </footer>
    </>
  );
}

export default App;
