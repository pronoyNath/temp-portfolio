import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 lg:gap-y-6 py-6 lg:py-8">
          {/* logo */}
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="logo"
              width={120}
              height={48}
              priority
              className=" h-[60px] object-cover w-[270px]"
            />
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
