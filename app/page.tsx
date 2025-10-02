"use client";
import Header from "./src/Components/Header";
import Hero from "./src/Components/Hero";
import Card from "./src/Components/Card";
import { useRetireContext } from "./src/RetireProvider";

export default function Page() {
  const { status, setStatus, tasks } = useRetireContext();
  return (
    <div>
      <Header />
      <Hero />
      <div className="flex gap-4 max-w-screen-sm mx-auto  justify-center">
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
      <div className="mx-auto w-11/12">
        <h2 className="text-lg font-bold mb-2">やることリスト</h2>
        <ul className="list-disc pl-5"></ul>
        {tasks.map((task) => (
          <Card
            key={task.id}
            id={task.id}
            documentName={task.documentName}
            description={task.description}
            isDone={task.isDone}
          />
        ))}
      </div>

      <div className="text-xl">私は今 {status}です</div>
      <div>
        {status == "転職活動中" && <p>引越し クレジットカード ほけん</p>}
      </div>
    </div>
  );
}
