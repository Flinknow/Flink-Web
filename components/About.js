import { UsersIcon } from "@heroicons/react/outline";
import Image from "next/image";

function About() {
  return (
    <div className="relative bg-primary">
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className="max-w-sm mx-auto">
          <div className="flex space-x-3">
            <div className="relative top-24">
              <Image
                src="/image1.png"
                alt="Picture of the author"
                width={500}
                height={300}
              />
            </div>
            <div>
              <Image
                src="/image2.png"
                alt="Picture of the author"
                width={300}
                height={500}
              />
            </div>
          </div>
          <div className="flex space-x-3 my-4">
            <div className="relative bottom-0">
              <Image
                src="/image3.png"
                alt="Picture of the author"
                width={300}
                height={500}
              />
            </div>
            <div>
              <Image
                src="/image4.png"
                alt="Picture of the author"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="lg:col-start-2 lg:pl-8">
          <div className="text-center sm:text-left text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0 ">
            <h2 className="leading-6 text-white font-semibold tracking-wide uppercase">
              About Us
            </h2>

            <p className="mt-8 text-lg text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
            <div className="my-10">
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Button text
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
