import { useRetireContext } from "./contexts/RetireProvider";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  const { status, setStatus } = useRetireContext();

  return (
    <>
      <Header />
      <Hero />
      <div className="flex gap-2 w-full justify-center md:justify-start">
        <button
          className="bg-green-600 hover:bg-green-500  transition-colors duration-100 ease-out focus:bg-green-900 px-4 py-2 rounded-3xl font-bold text-white cursor-pointer"
          onClick={() => {
            setStatus("退職");
          }}
        >
          退職
        </button>
        <button
          className="bg-green-600 hover:bg-green-500  transition-colors duration-100 ease-out focus:bg-green-900 px-4 py-2 rounded-3xl font-bold text-white cursor-pointer"
          onClick={() => {
            setStatus("転職活動中");
          }}
        >
          転職活動中
        </button>
        <button
          className="bg-green-600 hover:bg-green-500  transition-colors duration-100 ease-out focus:bg-green-900 px-4 py-2 rounded-3xl font-bold text-white cursor-pointer"
          onClick={() => {
            setStatus("休職");
          }}
        >
          休職
        </button>
      </div>
      <Card documentName={"源泉徴収票"} description="次の職場で必要です！" />
      <div className="text-xl">私は今 {status}です</div>
      <div>
        {status == "転職活動中" && <p>引越し クレジットカード ほけん</p>}
      </div>
    </>
  );
}

export default App;
