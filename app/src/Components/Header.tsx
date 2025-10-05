import Link from "next/link";

export default function Header() {
  return (
    <div className="max-w-screen-sm py-4 pt-6 mx-auto w-5/6 fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">退職前</h2>
        <Link href="/progress">
          <button className="cursor-pointer block bg-green-600 px-4 py-2 rounded-xl font-bold text-white select-none">
            はじめる
          </button>
        </Link>
      </div>
    </div>
  );
}
