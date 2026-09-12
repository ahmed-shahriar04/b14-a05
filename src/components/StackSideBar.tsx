import type { Technology } from "../types/technology";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

function StackSidebar({ stack, onRemove, onRemoveAll }: StackSidebarProps) {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>

        <p className="mt-1 text-sm text-gray-400">
          {stack.length} Technolog{stack.length !== 1 ? "ies" : "y"} Selected
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="mt-6 flex min-h-[60px] items-center justify-center rounded-xl border border-dashed border-gray-300 px-5 py-4 text-center">
          <h3 className="font-semibold text-gray-400">Your stack is empty</h3>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-2">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-3 py-2.5"
              >
                {/* Icon */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-semibold text-gray-800">
                    {technology.name}
                  </p>

                  <p className="mt-0.5 text-[9px] text-gray-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-2xl font-light leading-none text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  <FontAwesomeIcon icon={faXmark} className="text-sm" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="mt-12 w-full rounded-lg border border-red-300 bg-white py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default StackSidebar;
