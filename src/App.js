import "./App.css";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header title="The Job Board" />
      <Jobs />
      <Footer />
    </>
  );
}

export default App;
