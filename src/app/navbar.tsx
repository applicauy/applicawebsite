import Image from "next/image";
import logo from "@/assets/logo/logo-menu.svg";
import Link from "next/link";
import { apexFont } from "@/assets/fonts";

export default function NavBar() {
  return (
    <nav className={`sticky flex justify-center ${apexFont.className}`}>
      <div className="flex justify-between content-center container px-5 md:px-0 py-8">
        <div className="logo">
          <Image alt="Applica's logo" src={logo} height={80} />
        </div>

        <ul className="flex gap-11 h-fit max-h-fit self-center">
          <li className="">
            <Link href="#">about us</Link>
          </li>

          <li>
            <Link href="#">services</Link>
          </li>

          <li>
            <Link href="#">careers</Link>
          </li>

          <li>
            <Link href="#">news</Link>
          </li>

          <li>
            <Link href="#" className="text-[#e5a818]">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
