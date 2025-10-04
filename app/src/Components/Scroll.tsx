export default function Scroll() {
    return (
      <div className="max-w-screen-sm mx-auto  h-40 flex overflow-x-scroll gap-3">
            <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-base font-bold text-white bg-gray-900 rounded-full w-6 h-6 flex items-center justify-center">1</p>
                <p className="text-xs font-extrabold">基本情報</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-base font-bold text-white bg-gray-900 rounded-full w-6 h-6 flex items-center justify-center">2</p>
                <p className="text-xs font-extrabold">やること</p>
            </div>
      </div>
    );
  }
  