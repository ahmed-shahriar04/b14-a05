import type { Technology } from "../types/technology";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const technologyColors: Record<string, string> = {
  React: "bg-[#E0F2FE] text-[#0EA5E9] border-cyan-100",
  "Vue.js": "bg-[#D1FAE5] text-[#059669] border-emerald-100",
  Svelte: "bg-[#FFEDD5] text-[#EA580C] border-orange-100",
  "Next.js": "hidden",
  "Node.js": "bg-[#D1FAE5] text-[#059669] border-green-100",
  PostgreSQL: "bg-[#DBEAFE] text-[#2563EB] border-blue-100",
  Redis: "bg-[#FEE2E2] text-[#DC2626] border-red-100",
  JavaScript: "bg-[#FEF3C7] text-[#D97706] border-yellow-100",
  TypeScript: "bg-[#E0F2FE] text-[#0284C7] border-cyan-100",
  Java: "bg-[#E0F2FE] text-[#0284C7] border-cyan-100",
  "Tailwind CSS": "bg-[#CFFAFE] text-[#0891B2] border-cyan-100",
  Docker: "bg-[#E0F2FE] text-[#0284C7] border-cyan-100",
};

function TechnologyCard({ technology, isAdded, onAdd }: TechnologyCardProps) {
  const badgeColor =
    technologyColors[technology.name] ||
    "bg-gray-100 text-gray-600 border-gray-200";

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-11 w-11 object-contain"
          />
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${badgeColor}`}
        >
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-bold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-[48px] text-sm leading-5 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-2">
        <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
          {technology.category}
        </span>

        <span className="text-xs text-gray-500">{technology.difficulty}</span>

        <span className="text-xs font-medium text-gray-700">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1" />
          {technology.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-2.5 cursor-pointer text-sm font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-pink-200 text-pink-500"
            : "bg-gray-950 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechnologyCard;
