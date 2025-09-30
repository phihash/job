import { FaBeer } from "react-icons/fa";

export default function Card({
  documentName,
  description,
}: {
  documentName: string;
  description: string;
}) {
  return (
    <div className="max-w-screen-sm">
      <div className="w-11/12 mx-auto bg-gray-100 rounded-2xl px-6">
        <h2 className="text-lg font-bold pt-6 pb-3">{documentName}</h2>
        <p className="font-bold pb-4 text-sm text-gray-400">{description}</p>
        <FaBeer className="text-green-600" size={24} />
      </div>
    </div>
  );
}
