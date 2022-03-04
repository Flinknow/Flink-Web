import React from "react";

const people = [
  {
    name: "Emily Thomas",
    role: "Business Head",
    imageUrl: "/teamsImg.png",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    name: "Emily Thomas",
    role: "Business Head",
    imageUrl: "/teamsImg.png",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    name: "Emily Thomas",
    role: "Business Head",
    imageUrl: "/teamsImg.png",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  {
    name: "Emily Thomas",
    role: "Business Head",
    imageUrl: "/teamsImg.png",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
  },
  // More people...
];

function AboutTeams() {
  return (
    <div className="bg-background">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl  text-primary tracking-tight sm:text-4xl text-center">
              Meet the Flink Team
            </h2>
          </div>
          <ul
            role="list"
            className=" space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-2 lg:gap-8 pt-16  "
          >
            {people.map((person) => (
              <li
                key={person.name}
                className=" py-10 px-6 bg-white text-center rounded-lg xl:px-10 xl:text-left shadow-md"
              >
                <div className=" xl:space-y-10 flex ">
                  <img
                    className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 relative bottom-24 "
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="relative bottom-8 xl:flex xl:items-center xl:justify-between">
                    <div className="text-lg leading-6 space-y-1">
                      <h3 className="text-black font-medium ">{person.name}</h3>
                      <p className="text-black">{person.role}</p>
                    </div>
                  </div>
                </div>
                <p className="text-center">{person.discription}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutTeams;
