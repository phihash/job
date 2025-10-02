"use client";
export default function Header() {
  return (
    <div className="w-full">
      <div className="max-w-screen-sm mx-auto py-4">
        <div className="flex justify-between items-center ">
          <p className="text-xl font-bold pl-4">退職前</p>
          <button
            className="block mr-4 bg-green-600 hover:bg-green-500  transition-colors duration-100 ease-out focus:bg-green-900 px-4 py-2 rounded-xl font-bold text-white cursor-pointer"
            onClick={() => {}}
          >
            進捗
          </button>
        </div>
      </div>
    </div>
  );
}
