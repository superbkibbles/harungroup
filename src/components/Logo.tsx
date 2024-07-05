import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image src={"/assets/logo.jpeg"} alt={"Logo"} width={50} height={50} />
  );
};

export default Logo;
