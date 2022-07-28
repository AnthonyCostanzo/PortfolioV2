import Image from "next/image";
import Link from "next/link";
const ProjectCard = ({ title, description, image, link }) => (
  <div className="flex flex-col">
    <div className="w-full h-60 lg:h-72 relative">
      <Image
        src={`/${image}`}
        alt="pe"
        className="rounded-md active:scale-125"
        width={150}
        height={200}
        layout="fill"
      ></Image>
    </div>
    <div className="">
      <h1 className="font-semibold mt-3 hover:text-xl w-max cursor-pointer">
        {title}
      </h1>

      <p className="">{description}</p>
      <a href={link}>
        <button className="bg-sky-500 w-24 lg:w-32 py-1  hover:text-yellow-300 mt-4 inline-block border-2 border-rounded rounded-full ">
          View
        </button>
      </a>
    </div>
  </div>
);

export default ProjectCard;
