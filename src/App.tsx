import { useState } from "react";
import "./App.scss";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoop, setIsLoop] = useState(true);

  const onToggleLoop = () => {
    setIsLoop((is) => !is);
  };

  return (
    <div>
      <h1>Ioka Pagination</h1>
      <h2>
        <div className="loopCheckbox">
          <input
            type="checkbox"
            id="loop"
            name="loop"
            checked={isLoop}
            onChange={onToggleLoop}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onToggleLoop();
              }
            }}
          />
          <label htmlFor="loop">loop</label>
        </div>
      </h2>
      <Pagination
        pageSize={10}
        page={currentPage}
        setPage={setCurrentPage}
        loop={isLoop}
      />
    </div>
  );
}

export default App;
