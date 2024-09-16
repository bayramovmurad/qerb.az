"use client"

import Link from "next/link";
import Button from "@/components/ui/Button";
import Route from "@/components/ui/Route";
import {navLinks} from "@/constants";
import {useEffect, useState} from "react";
import clsx from "clsx";
import MobileMenu from "@/components/shared/MobileMenu";

const Navbar = () => {
  return (
      <nav className="w-full">
          <div className="flex py-4 justify-between items-center border-b border-gray-100 w-full">

              <div>
                  <Link href={"/"}>
                      <h1 className={"text-secondary text-3xl font-extrabold"}>
                          QERB
                      </h1>
                  </Link>
              </div>

              <ul className="flex items-center justify-center lg:gap-8 gap-4 max-md:hidden">
                  {navLinks.map((link, index) => (
                      <li key={index}>
                          <Route route={link.route} label={link.label}/>
                      </li>
                  ))}
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