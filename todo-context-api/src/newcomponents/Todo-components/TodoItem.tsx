import { type Task } from "../../types";

interface taskProps {
  task: Task;
}

export default function TodoItem({ task }: taskProps) {
  return (
    <>
      <div className="bg-white w-full flex justify-between flex-row py-3 px-5 border-1 border-gray-300 rounded-md">
        <div className="flex flex-row gap-3 text-lg items-center">
          <input
            type="checkbox"
            className="rounded-full border border-gray-300 appearance-none w-5 h-5 checked:bg-green-400 checked:border-transparent"
          />
          {task.text}
        </div>
        <div className="flex flex-row gap-2">
          <button className="bg-[url('/delete.jpg')] bg-cover bg-center w-10 h-11"></button>
          <button className="bg-[url('/edit.svg')] bg-cover bg-center w-12 h-12"></button>
        </div>
      </div>
    </>
  );
}
