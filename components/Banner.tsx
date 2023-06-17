function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div className="">
        <h1 className="text-7xl"> Chirag's Daily Blog</h1>
        <h2 className="mt-5 md:mt-3">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#f7BA0A]">
            Every Developers
          </span>{" "}
          favourite blog in the Devosphere
        </h2>
      </div>
      <p className="mt-5 md:mt2 text-gray-400 max-w-sm">
        New product features | The latest in technolgy | The weekly debugging
      </p>
    </div>
  );
}

export default Banner;
