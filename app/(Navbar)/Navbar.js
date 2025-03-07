'use client'

import {useState, useEffect, Fragment} from 'react';
import Link from 'next/link'
import language from "dictionaries/en.json"
import Image from "next/image";
import SideNav from './SideNav';
import menu from "/public/icons/menu.svg";

function Navbar(props) {


    //Off Canvas (mobile) menu hook
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);


    // Adds Sticky to Navbar
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const navbar = document.querySelector('.header-selection');
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? navbar.classList.add('is-sticky')
            : navbar.classList.remove('is-sticky');
    };

    return(
        <Fragment>
            <nav className="absolute w-full z-10 top-0 text-white">
                <div className="header-selection sticky-style-1 py-4">
                    <div className="container mx-auto">

                        {/* List Wrapper */}
                        <div className="flex flex-nowrap items-center justify-between">

                            {/* Logo */}
                            <Link href={"/"} >
                                <Image src={props.logo} height={60} width={80} alt={"logo"} className={"cursor-pointer"}/>
                            </Link>

                            {/* List */}
                            <div className="hidden lg:flex gap-x-6">

                                {/* Link 1 */}
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href= {"/" }>
                                        <div className="capitalize">
                                            {props.link1}
                                        </div>
                                    </Link>
                                </div>

                                {/* Link 2 */}
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href= {"/" + [language.navbar.link2]}>
                                        <div className="capitalize">
                                            {props.link2}
                                        </div>
                                    </Link>
                                </div>

                                {/* Link 3 */}
                                {/* <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href= {"/" + [language.navbar.link3]}>
                                        <div className="capitalize">
                                            {props.link3}
                                        </div>
                                    </Link>
                                </div> */}

                                {/* Link 4 */}
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href= {"/" + [language.navbar.link4]}>
                                        <div className="capitalize">
                                            {props.link4}
                                        </div>
                                    </Link>
                                </div>

                                {/* Link 5 */}
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href= {"/" + [language.navbar.link5]}>
                                        <div className="capitalize">
                                            {props.link5}
                                        </div>
                                    </Link>
                                </div>

                                {/* Link 6 */}
                                {/* <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href= {"/" + [language.navbar.link6]}>
                                        <div className="capitalize">
                                            {language.navbar.link6}
                                        </div>
                                    </Link>
                                </div> */}

                            </div>

                            {/* External Link/Language */}
                            {/* <div className="hidden lg:flex">
                                <div className="text-[16px] font-medium hover:text-yellow-600 transition-colors delay-100">
                                    <Link href={props.external1[1]} scroll={false}>
                                        <div className="capitalize">
                                            {props.external1[0]}
                                        </div>
                                    </Link>
                                </div>
                            </div>  */}

                            {/* Contact Us */}
                            <div className="hidden lg:grid">
                                <div className='hover:text-yellow-600 transition-colors delay-100'>
                                    <a href={"tel: " + [language.navbar.call.number]}>
                                        <div className='flex flex-col items-center'>
                                            <p>{language.navbar.call.title}</p>
                                            <p>{language.navbar.call.number}</p>
                                        </div>
                                        
                                    </a>
                                </div>
                                    
                            </div>

                            {/* Off-canvas Menu */}
                            <div className="flex lg:hidden">
                                <div onClick={showOffcanvas} id="toggle-button">
                                    <Image src={menu} width={30} alt={"logo"}/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>

            <SideNav 
                language={language} 
                links = {[
                    props.link1,
                    props.link2,
                    //props.link3,
                    props.link4,
                    props.link5,
                    props.external1
                ]}
                showOffcanvas={showOffcanvas} 
                offcanvas={offcanvas} 
                logo={props.logo}
            />

        </Fragment>
    )
}

export default Navbar
