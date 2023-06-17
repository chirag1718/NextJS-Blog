import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full object-cover"
            src="https://avatars.githubusercontent.com/u/96980290?s=400&u=1d59ee77ac6ef0e0ed3ca648763135676e543014&v=4"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </Link>
        <h1>Chirag Sonar</h1>
      </div>
      <div className="">
        <Link
          target="blank"
          href="https://github.com/chirag1718"
          className="text-[#F7AB0A] px-5 py-3 text-sm md:text-base bg-gray-900 flex items-center rounded-full text-center"
        >
          Hey, wanna have a look at my Github profile!
        </Link>
      </div>
    </header>
  );
}

export default Header;
