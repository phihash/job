import { FaCheck } from "react-icons/fa";
import { FaRegSquareFull } from "react-icons/fa6";
import type { Task } from "../contexts/RetireProvider";
import { useRetireContext } from "../contexts/RetireProvider";

export default function Card({ id, documentName, description, isDone }: Task) {
  const { toggleTask } = useRetireContext();

  return (
    <div className="max-w-screen-sm">
      <div
        className="w-11/12 mx-auto bg-gray-100 rounded-2xl px-6"
        onClick={() => toggleTask(id)}
      >
        <div className="flex items-center gap-2 pt-4 pb-2">
          {isDone ? <FaRegSquareFull /> : <FaCheck />}
          <h2 className="text-lg font-bold ">{documentName}</h2>
        </div>
        <p className="font-bold pb-4 text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}
