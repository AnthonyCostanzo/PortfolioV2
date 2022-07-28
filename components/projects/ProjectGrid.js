import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import { projectsArray } from "../../utils/projectdata";
const ProjectGrid = () => {
  return (
    <div className="grid mx-3 pb-20 gap-10 md:hidden">
      {projectsArray.map(({ title, description, image, link }, i) => (
        <ProjectCard
          key={title}
          title={title}
          link={link}
          description={description}
          image={image}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
