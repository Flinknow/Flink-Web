import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div
        className="hidden lg:block lg:absolute lg:inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            y={72}
            width={640}
            height={640}
            className="text-gray-50"
            fill="currentColor"
          />
          <rect
            x={118}
            width={404}
            height={784}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>

      <div className="relative pt-1 pb-16 sm:pb-24 lg:pb-32">
        <main className="mt-16 mx-auto max-w-full px-10 ">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:mt-20 sm:px-0 lg:mt-28 sm:text-center md:max-w-5xl md:mx-auto lg:col-span-7 lg:text-left">
              <h1>
                <span className="mt-1 block text-5xl tracking-tight font-bold sm:text-6xl xl:text-8xl">
                  <span className="font-sans block text-indigo-600">
                    Salon Bookings
                  </span>
                  <span className="block text-gray-500">
                    At your fingertips.
                  </span>
                  
                </span>
              </h1>
              <p className="mt-5 text-base text-gray-500 sm:mt-7 sm:text-xl lg:text-lg xl:text-xl">
                Get the Flink App today and book your Salon appointment in Blink
              </p>
              <div className="mt-8 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    <div className="flex flex-wrap items-start justify-start">
                      <div className="flex justify-center px-1">
                        <a href="https://play.google.com/store" target="_blank">
                        <img
                          className="h-12 sm:h-14"
                          src="/playstore.png"
                          alt="Google PlayStore"
                        />
                        </a>
                      </div>
                      
                      <div className="flex justify-center px-1">
                      <a href="https://www.apple.com/in/app-store/" target="_blank">
                        <img
                          className="h-12 sm:h-14"
                          src="/appstore.png"
                          alt="Apple App Store"
                        />
                        </a>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
              <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  width={640}
                  height={640}
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x={118}
                  width={404}
                  height={784}
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              <div className="relative mx-auto w-full rounded-lg  lg:max-w-md">
                <img className="w-full" src="/hero.png" alt="" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
