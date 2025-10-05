"use client";
import Link from "next/link";
import useProfileStore from "@/app/store/profileStore";

export default function Header() {
  const status = useProfileStore((store) => store.status);
  return (
    <div className="max-w-screen-sm py-4 pt-6 mx-auto w-5/6 fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h2 className="text-xl font-bold py-2">退職前</h2>
        </Link>

        {status !== "はじめる" ? (
          <div className="flex gap-2">
            <Link href="/my">
              <button className="cursor-pointer block bg-green-600 px-4 py-2 rounded-xl font-bold text-white select-none">
                マイページ
              </button>
            </Link>
            <Link href="/progress">
              <button className="cursor-pointer block bg-green-600 px-4 py-2 rounded-xl font-bold text-white select-none">
                基本情報
              </button>
            </Link>
          </div>
        ) : (
          <Link
            href="/progress"
            onClick={() => useProfileStore.setState({ status: "情報入力中" })}
          >
            <button className="cursor-pointer block bg-green-600 px-4 py-2 rounded-xl font-bold text-white select-none">
              {status}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
