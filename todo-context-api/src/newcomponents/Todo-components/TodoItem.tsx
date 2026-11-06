export default function TodoItem() {
  return (
    <>
      <div className="bg-white w-full flex justify-between flex-row py-3 px-5">
        <div className="flex flex-row gap-3 text-lg items-center">
          <input
            type="checkbox"
            className="rounded-full border border-gray-300 appearance-none w-5 h-5 checked:bg-green-400 checked:border-transparent"
          />{" "}
          new
        </div>
        <div className="flex flex-row gap-2">
          <button className="bg-[url('/delete.jpg')] bg-cover bg-center w-10 h-11"></button>
          <button className="bg-[url('/edit.svg')] bg-cover bg-center w-12 h-12"></button>
        </div>
      </div>
    </>
  );
}
