"use client";
import useProfileStore from "@/app/store/profileStore";

export default function My() {
  const event = useProfileStore((store) => store.event);
  const status = useProfileStore((store) => store.status);
  return (
    <div className="w-full  h-40 mt-28">
      <h2 className="text-2xl text-gray-800 font-bold mb-2 text-center">
        対象イベント
      </h2>
      <h2 className="text-2xl text-gray-800 font-bold mb-2 text-center">
        {event}
      </h2>
    </div>
  );
}
