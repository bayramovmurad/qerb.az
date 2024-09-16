import {useEffect, useState} from "react";

import {
    FaSquareXTwitter, FaSquareInstagram, FaSquareSnapchat
} from "react-icons/fa6";
import {FaFacebookSquare} from "react-icons/fa";

import {CgClose, CgMenuGridO} from "react-icons/cg";
import Link from "next/link";
import {navLinks} from "@/constants";
import Route from "@/components/ui/Route";
import Button from "@/components/ui/Button";


const MobileMenu = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

    const mobileMenuHandler = () => {
        setOpenMobileMenu(!openMobileMenu);
    }
    return (
     <>
         <div className="md:hidden" onClick={mobileMenuHandler}>
             {
                 openMobileMenu ? <CgClose size={25}/> : <CgMenuGridO size={25}/>
             }
         </div>

         {openMobileMenu ? (
             <div
                onClick={() => setOpenMobileMenu(false)}
                className="fixed w-full h-screen top-0 left-0 bg-black/25 z-50"
             >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute h-screen left-0 top-0 w-60 bg-white z-[999] px-5 border-r overflow-y-hidden flex flex-col gap-10"
                >
                 <div className="border-b py-5">
                    <Link href={"/"}>
                        <h1 className="text-3xl font-extrabold text-secondary">
                            QERB
                        </h1>
                    </Link>
                </div>
                    <div
                        className="flex gap-5 text-secondary flex-1 justify-center text-xl mt-5"
                    >
                        <FaFacebookSquare/>
                        <FaSquareInstagram/>
                        <FaSquareXTwitter/>
                        <FaSquareSnapchat/>
                    </div>

                    <ul
                        className="flex items-center justify-center gap-10 flex-col mt-5 flex-1 py-5 border-b"
                    >
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <Route route={link.route} label={link.label} onClick={() => setOpenMobileMenu(false)}/>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex gap-5 flex-1 flex-col py-5">
                        <Button text="Daxil Ol" ariaLabel="Log In button" onClick={() => null}/>
                        <Button text="Qeydiyyatdan Keç" ariaLabel="Sign Up button" onClick={() => null}/>
                    </div>
                </div>
             </div>
         ): null

         }
     </>
    )
}

export default MobileMenu;