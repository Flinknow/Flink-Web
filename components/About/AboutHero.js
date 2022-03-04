function AboutHero() {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left ">
          <div className="px-4 sm:px-8 z-10 lg:w-1/2  xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-center xl:text-left ">
              <span className="block xl:inline">
                We Make Salon Bookings Hassle Free.
              </span>{" "}
            </h1>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="/aboutimg.png"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}

export default AboutHero;
