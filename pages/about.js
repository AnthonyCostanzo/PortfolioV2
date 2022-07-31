import Image from "next/image";
import Layout from "../components/Layout";

const education = [
  "St Joseph By The Sea High School",
  "College Of Staten Island - B.A in Computer Science (Expected)",
  "Complete Web Developer BootCamp (Udemy Certificate)",
  "CS50 Introduction To Computer Science (Edx Certificate)",
  "Complete Web Developer BootCamp (Udemy Certificate)",
  "JavaScript Algorithms and Data Structures (Udemy Certificate)",
  "The Complete Junior To Senior Web Developer Roadmap (Udemy Certificate)",
  "AWS Certified Solution Architect (associate) ",
  "AWS Certified Developer ",
];

const About = () => (
  <Layout>
    <div className=" font-[Times] pb-20">
      <h1 className="m-auto px-3 border-black text-3xl mt-10 mb-11 font-semibold border-r-2 border-l-2 w-max">
        About Me
      </h1>
      <div className="flex items-center font-serif justify-center flex-col">
        <div className="grid md:grid-cols-2 w-10/12 gap-x-10 m-auto">
          <div className="order-2 mt-7 md:mt-0 mb-5 xl:mb-0">
            <h2 className="text-2xl font-semibold">General Overview</h2>
            <p className="">
              My name is Anthony Costanzo, a full stack developer, specializing
              in creating innovative mobile and desktop applications. I strive
              to stay up to date with the latest industry trends and I am always
              eager to learn more. I am mostly self taught and have been in the
              industry for over 3 years. Check out my github to see what I have
              been up to lately.
            </p>
          </div>
          <div className="xl:w-10/12 h-56 md:h-72 rounded-lg md:order-2 relative">
            <Image
              className="rounded-lg"
              src="/ME.jpg"
              alt="me"
              layout="fill"
            />
          </div>
          <div className="order-3  m-auto xl:relative mt-1 xl:bottom-11">
            {" "}
            <h2 className="text-2xl font-semibold">
              Education / Certifications
            </h2>
            <ul className=" list-disc">
              {education.map((item, i) => (
                <li className="ml-4" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-5 md:col-span-2 grid gap-5">
            <h2 className="text-2xl font-semibold relative top-5 text-center">
              Latest Work
            </h2>

            <div className="bg-gray-700 p-5 text-gray-100 shadow-sm shadow-gray-100 px-5 rounded-md mt-5 ">
              {" "}
              <h3 className="font-bold">New Energy Solutions</h3>
              <ul>
                <li>
                  Solely developed and executed design concepts and functionalty
                  for company website. Worked with the organization to come up
                  with a solution that would achieve its needs while also being
                  visually appearing to potential customers.
                </li>
                <li>
                  Designed and implemented professional yet creative/fun
                  application components for frontend of application.
                </li>
                <li>Performed testing on application components using Jest.</li>
                <li>
                  Gained experience using Wordpress to add aditional information
                  to an existing site owned by the organization.
                </li>
              </ul>
            </div>
            <div className="bg-gray-600 p-5 text-gray-100 shadow-sm shadow-gray-100 px-5 rounded-md mt-5 ">
              {" "}
              <h3 className="font-bold">PowerLift Studios</h3>
              <ul>
                <li>
                  Developed a highly responsive website for a fitness studio
                  located in Boston to replace an existing website
                </li>
                <li>
                  Leveraged knowledge of Next Js to create a cunning and user
                  friendly interface utilizing Server Side Rendering.
                </li>
                <li>
                  Implemented and managed client database using MongoDB/Mongoose
                </li>
                <li>
                  Created a seamless and easy to use email service utilizing
                  emailjs
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-5 text-gray-100 shadow-sm shadow-gray-100 px-5 rounded-md mt-5 ">
              {" "}
              <h3 className="font-bold">Soft Systems Solutions</h3>
              <ul>
                <li>
                  Assisted in developing and executing design concepts for
                  various websites and applications.
                </li>{" "}
                <li>
                  Collaborated with product team and product analysts to analyze
                  user activity and to add new functionality and design elements
                  to support client needs.
                </li>
                <li>
                  Assisted in the design and implementation of SQL databases for
                  various applications.
                </li>
                <li>
                  Developed a further understanding and knowledge of Python,
                  JavaScript and database design/management.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
export default About;
