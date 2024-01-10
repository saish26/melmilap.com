import Image from "next/image";
import logo from "../../assets/images/logo.png";

const Logo = ({ height, width }: any) => {
  return (
    <Image
      src={logo}
      alt="melmilap.com"
      height={height}
      width={width}
      className=""
    />
  );
};

export default Logo;
