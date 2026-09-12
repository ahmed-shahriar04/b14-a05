import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../types/technology";

interface TechnologyGridProps {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
}

function TechnologyGrid({ technologies, stack, onAdd }: TechnologyGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          isAdded={stack.some((item) => item.id === technology.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}

export default TechnologyGrid;
