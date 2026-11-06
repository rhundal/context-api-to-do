export default function FilterButtons() {
  return (
    <>
      <div className="flex justify-center flex flex-row gap-3">
        <button className="text-lg bg-blue-500 rounded-md px-4 py-2 text-white whitespace-nowrap">
          All
        </button>
        <button className="text-lg bg-gray-300 border-1 border-gary-100 rounded-md px-5 py-2 text-black whitespace-nowrap">
          Active
        </button>
        <button className="text-lg bg-gray-300 border-1 border-gary-100 rounded-md px-7 py-2 text-black whitespace-nowrap">
          Completed
        </button>
      </div>
    </>
  );
}
