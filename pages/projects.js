import Layout from "../components/Layout";
import ProjectGrid from "../components/projects/ProjectGrid";
import Slides from "../components/Slides";
const projectsArray = [
  {
    title: "Yelp Camp",
    image: "yelpcamp.jpeg",
    description: "",
  },
  {
    title: "PowerLift Studios",
    image: "gym.jpeg",
    description: "",
  },
  {
    title: "New Energy Solutions",
    image: "solar.jpeg",
    description: "",
  },
  {
    title: "Crown Clothing",
    image: "cwrn.jpeg",
    description: "",
  },
];
const Projects = () => {
  return (
    <Layout>
      <div className=" font-['Mono'] md:pb-20">
        <h1 className="m-auto active:animate-spin border-black px-3 text-3xl mt-10 font-semibold border-r-2 border-l-2 w-max">
          Works
        </h1>
        <aside className="text-center mt-4">
          {"Here are some of the projects I've been working on lately."}
        </aside>
        <div className="mt-8 md:mt-0">
          <Slides />
        </div>

        <ProjectGrid />
      </div>
    </Layout>
  );
};

export default Projects;
