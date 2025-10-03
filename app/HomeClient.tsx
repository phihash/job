"use client";
import Card from "./src/Components/Card";
import { useRetireContext } from "./src/RetireProvider";
import Scroll from "./src/Components/Scroll";

export default function HomeClient() {
  const { tasks } = useRetireContext();
  return (
    <div>
        <h2 className="text-2xl text-gray-600 font-extrabold mb-2 text-center">基本情報を入力</h2>
        <Scroll />
        <h2 className="text-2xl text-gray-600 font-extrabold mb-2 text-center">やることリスト</h2>
        <div className="mx-auto max-w-screen-sm pt-8">
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
    </div>
  );
}
