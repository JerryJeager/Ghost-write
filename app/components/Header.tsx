import Image from "next/image";
import ghost from "../../public/images/ghost-write-icon.png";
import HeaderBtn from "./ui/HeaderBtn";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full bg-dark1 sticky top-0 backdrop-blur-md border-b border-b-gray1 px-[5%] lg:px-[10%] py-1 lg:py-2">
      <Link href={"/"}>
        <div className="w-fit flex justify-between items-center">
          <Image alt="icon image" src={ghost} width={100} height={50} />
          <h1 className="text-primary text-lg lg:text-2xl italic">
            Ghostwrite
          </h1>
        </div>
      </Link>

      <HeaderBtn />
    </div>
  );
};

export default Header;
