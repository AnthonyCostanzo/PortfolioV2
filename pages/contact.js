import Layout from "../components/Layout";
import { BsFillTelephoneFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const Contact = () => (
  <Layout>
    <form className=" font-['Mono'] pb-20">
      <h1 className="m-auto relative left-4 md:right-4 px-3 text-3xl mt-10 font-semibold border-black border-r-2 border-l-2 w-max">
        Contact Me
      </h1>
      <div className="flex ">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10  lg:mt-20 lg:w-8/12 m-auto">
          <div className="grid gap-3 ml-10 gap-x-5 ">
            <input
              className=" w-72 lg:w-[40vw] p-2 h-12 rounded-sm border-black border-[1px]"
              type="text"
              placeholder=" name"
              name="name"
            />
            <input
              className="w-72 lg:w-[40vw] p-2 h-12 rounded-sm border-black border-[1px]"
              type="email"
              placeholder=" email"
              name="email"
            />
            <input
              className="w-72 lg:w-[40vw] p-2 h-12 rounded-sm border-black border-[1px]"
              type="email"
              placeholder=" subject"
              name="email"
            />
            <textarea
              className="w-72 lg:w-[40vw] p-2 h-32 rounded-sm border-black border-[1px]"
              placeholder="Enter your message"
            ></textarea>
            <button className="w-24 rounded-sm hover:bg-black hover:text-white border-[1.4px] border-black h-10 text-[17px]">
              Send
            </button>
          </div>
          <div className=" ml-10 mt-10 md:ml-14 md:mt-2 lg:ml-44 space-y-5">
            <div className="flex">
              <BsFillTelephoneFill
                className="hover:scale-110 cursor-pointer"
                size={17}
              />
              <span className="ml-3 hover:font-bold hover:scale-105 cursor-pointer">
                617-953-6678
              </span>
            </div>
            <div className="flex">
              <MdEmail className="hover:scale-110 cursor-pointer" size={17} />
              <span className="ml-3 hover:font-bold cursor-pointer">
                anthonycostanzo23@gmail.com
              </span>
            </div>
            <div className="flex">
              <ImLocation
                className="hover:scale-110 cursor-pointer"
                size={17}
              />
              <span className="ml-3 hover:font-bold cursor-pointer">
                Staten Island NY
              </span>
            </div>
            <div className="">
              <h3 className="text-xl font-bold">
                Follow me on Github & Linkedin
              </h3>
              <div className="flex mt-4 w-24 space-x-5">
                <BsGithub
                  className="hover:scale-110 cursor-pointer"
                  size={17}
                />
                <BsLinkedin
                  className="hover:scale-110 cursor-pointer"
                  size={17}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </Layout>
);

export default Contact;
