import "./App.scss";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div>
      <h1>Ioka Pagination</h1>
      <Pagination pageSize={10} />
    </div>
  );
}

export default App;
