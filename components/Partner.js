import { CheckIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";

const plans = [
  {
    title: "Xploria Salon",
    featured: false,
    description:
      "          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    priceMonthly: 5,
    priceYearly: 56,
    mainFeatures: [
      { id: 1, value: "Basic invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
    ],
  },
  {
    title: "Xploria Salone",
    featured: true,
    description:
      "          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    priceMonthly: 19,
    priceYearly: 220,
    mainFeatures: [
      { id: 1, value: "Advanced invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
      { id: 4, value: "Tax planning toolkit" },
      { id: 5, value: "VAT & VATMOSS filing" },
      { id: 6, value: "Free bank transfers" },
    ],
  },
  {
    title: "Xploria Salon",

    description:
      "          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    priceMonthly: 12,
    priceYearly: 140,
    mainFeatures: [
      { id: 1, value: "Basic invoicing" },
      { id: 2, value: "Easy to use accounting" },
      { id: 3, value: "Mutli-accounts" },
      { id: 4, value: "Tax planning toolkit" },
    ],
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Partner() {
  return (
    <div className="">
      <main>
        <div>
          <div className="relative bg-background py-20">
            <div
              aria-hidden="true"
              className="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block"
            />

            <div className="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0">
              <div
                aria-hidden="true"
                className="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-gray1 rounded-2xl rounded-tr-lg lg:block"
              />

              <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 ">
                {plans.map((plan) => (
                  <div
                    key={plan.title}
                    className={classNames(
                      plan.featured
                        ? "bg-white  shadow-md"
                        : "bg-gray1 lg:bg-transparent",
                      "pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12 "
                    )}
                  >
                    <div className="text-center">
                      <div className="">
                        <Image
                          src="/Partner.svg"
                          alt="Picture of the author"
                          width={100}
                          height={150}
                        />
                      </div>
                    </div>
                    <h3
                      className={classNames(
                        plan.featured ? "text-primary" : "text-primary",
                        "text-sm font-semibold uppercase tracking-wide flex justify-center "
                      )}
                    >
                      {plan.title}
                    </h3>
                    <div>
                      <h3
                        className={classNames(
                          plan.featured ? "text-black" : "text-black",
                          "text-sm font-mono uppercase tracking-wide flex text-center py-4"
                        )}
                      >
                        {plan.description}
                      </h3>
                    </div>
                    <div className="h-5"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Partner;
