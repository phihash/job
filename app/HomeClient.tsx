import Hero from "./src/Components/Hero";

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
      <Hero />
    </div>
  );
}
