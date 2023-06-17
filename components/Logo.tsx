import Image from "next/image";
import React from "react";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        src="https://avatars.githubusercontent.com/u/96980290?s=400&u=1d59ee77ac6ef0e0ed3ca648763135676e543014&v=4"
        width={50}
        height={50}
        alt="Picture of the author"
      />

      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
