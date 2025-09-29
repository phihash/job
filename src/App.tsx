import { useRetireContext } from "./contexts/RetireProvider";
import "./App.css";

function App() {
  const { status, setStatus } = useRetireContext();

  return (
    <>
      <div className="card">
        私は今 {status}です
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
