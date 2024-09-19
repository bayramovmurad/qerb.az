"use client"

import Link from "next/link";
import Button from "@/components/ui/Button";
import Route from "@/components/ui/Route";
import {navLinks} from "@/constants";
import {useEffect, useState} from "react";
import clsx from "clsx";
import MobileMenu from "@/components/shared/MobileMenu";
import useMenuActive from "@/hooks/useMenuActive";

const Navbar = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setIsScrolling(true);
            }else{
                setIsScrolling(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
  return (
      <nav className={clsx("w-full mx-auto", isScrolling ? "max-w-[85%] fixed top-0 bg-light z-10" : "relative z-10")}>

          <div className={clsx("flex py-4 justify-between items-center border-b border-gray-100 w-full", isScrolling && "pb-0 border-none")}>

              <div>
                  <Link href={"/"}>
                      <h1 className={"text-secondary text-3xl font-extrabold"}>
                          QERB
                      </h1>
                  </Link>
              </div>

              <ul className="flex items-center justify-center lg:gap-8 gap-4 max-md:hidden">
                  {navLinks.map((link, index) => {
                      const isActive = useMenuActive(link.route)
                     return (
                         <li key={index}>
                             <Route route={link.route} label={link.label} isActive={isActive}/>
                         </li>
                     )
                  })}
              </ul>

              <div className="flex gap-x-4 max-md:hidden">
              <Button text="Daxil Ol" ariaLabel="Log In button" onClick={() => null}/>
                  <Button text="Qeydiyyatdan Keç" ariaLabel="Sign Up button" onClick={() => null}/>
              </div>

              <div className="md:hidden">
                  <MobileMenu/>
              </div>
          </div>
      </nav>

  )
}

export default Navbar;