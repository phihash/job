import { useRetireContext } from "./contexts/RetireProvider";
import "./App.css";

function App() {
  const { status, setStatus } = useRetireContext();

  return (
    <>
      <button
        onClick={() => {
          setStatus("退職");
        }}
      >
        退職
      </button>
      <button
        onClick={() => {
          setStatus("転職活動中");
        }}
      >
        転職活動中
      </button>
      <button
        onClick={() => {
          setStatus("休職");
        }}
      >
        休職
      </button>
      <div className="text-xl">私は今 {status}です</div>
    </>
  );
}

export default App;
