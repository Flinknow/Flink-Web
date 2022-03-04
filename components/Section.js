import Image from "next/image";

function Section() {
  return (
    <div className="md:flex  bg-background">
      <div className="flex items-center content-center md:w-96 md:h-96 ">
        <Image
          src="/Group.png"
          alt="Picture of the author"
          width={280}
          height={360}
        />
      </div>
      <div className="max-w-5xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary sm:text-4xl">
          <span className="block">Join Flink </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
        </p>
        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 sm:w-auto"
        >
          Join Us
        </a>
      </div>
    </div>
  );
}

export default Section;
