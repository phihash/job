export default function Hero() {
  return (
    <div className="w-full ">
      <div className="max-w-screen-sm mx-auto mx-auto md:flex items-center justify-center gap-6 ">
        <img className="block mx-auto py-4" src="/hero.png" alt="" />
        <p className="font-bold text-center md:leading-tight py-4">
          <span className="block text-xl ">退職前にすることを</span>
          <span className="block text-2xl">確認しよう</span>
        </p>
      </div>
    </div>
  );
}
