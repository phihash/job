import Hero from "./src/Components/Hero";
import Link from "next/link";

export default function HomeClient() {
  return (
    <div className="pt-40">
      <h2 className="text-2xl text-gray-800 font-bold mb-2 text-center">
        退職前や
      </h2>
      <h2 className="text-2xl text-gray-800 font-bold mb-2 text-center">
        引越し前にすることを
      </h2>
      <h2 className="text-2xl text-gray-800 font-bold mb-2 text-center">
        簡単に管理 ✅{" "}
      </h2>
      <Link href="/progress">
        <button className="cursor-pointer block mt-12 bg-green-600 hover:bg-green-500 transition-all duration-400 px-3 py-2 rounded-xl font-bold text-white select-none  w-1/2  md:w-1/8 mx-auto">
          さっそくはじめる!
        </button>
      </Link>
      <Hero />
    </div>
  );
}
