import { useState } from "react";
import "./App.scss";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <h1>Ioka Pagination</h1>
      <h2>page: {currentPage}</h2>
      <Pagination pageSize={10} page={currentPage} setPage={setCurrentPage} />
    </div>
  );
}

export default App;
