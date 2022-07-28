import Image from "next/image";
import ProjectGrid from "./ProjectGrid";
const Featured = () => (
  <div className="mx-7 lg:m-auto w-11/12">
    <h3 className="text-2xl lg:mx-7 w-max mb-3 active:scale-110 cursor-pointer">
      Latest Projects
    </h3>
    <ProjectGrid />
  </div>
);

export default Featured;
