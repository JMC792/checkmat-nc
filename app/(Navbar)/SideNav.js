import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import close from "/public/icons/close.svg";

export default function SideNav(props){

    return(
        <Fragment>
            {/* Mobile Navbar  */}
            <nav className={
                props.offcanvas
                    ? "offcanvas-menu-wrap active"
                    : "offcanvas-menu-wrap"
            }>
                <nav className="offcanvas-menu z-50">
                    <div className="offcanvas-menu-items" onClick={props.showOffcanvas}>

                        {/* Logo and Close Button Wrapper*/}
                        <div className="navbar-toggle flex justify-between items-center pb-[15px] cursor-pointer">
                            
                            {/* Logo */}
                            <div className="logo">
                                <Link href={"/"} >
                                    <Image 
                                        src={props.logo} 
                                        height={60} 
                                        width={100} 
                                        alt={"logo"}
                                    />
                                </Link>
                            </div>

                            {/* Close Button */}
                            <button className="menu-bars text-[24px] opacity-80 hover:opacity-50 transition-all" aria-label="Right Align">
                                <Image 
                                    src={close} 
                                    width={20} 
                                    alt={"logo"} 
                                />
                            </button>
                        </div>

                        {/* List */}
                        <div>
                            
                            {/* Link 1 */}
                            <Link href={"/"} >
                                <div className='offcanvas-text'>
                                    {props.links[0]}
                                </div>
                            </Link>

                            {/* Link 2 */}
                            <Link href={"/" + [props.links[1]]} >
                                <div className='offcanvas-text'>
                                    {props.links[1]}
                                </div>
                            </Link>

                            {/* Link 3 */}
                            <Link href={"/" + [props.links[2]]} >
                                <div className='offcanvas-text'>
                                    {props.links[2]}
                                </div>
                            </Link>

                            {/* Link 4 */}
                            <Link href={"/" + [props.links[3]]} >
                                <div className='offcanvas-text'>
                                    {props.links[3]}
                                </div>
                            </Link>

                            {/* Link 5 */}
                            {/* <Link href= {props.links[4][1]} >
                                <div className='offcanvas-text'>
                                    {props.links[4][0]}
                                </div>
                            </Link> */}

                            {/* Link 6 */}
                            {/* <Link href={'/'} locale={props.links[6]}>
                                <div className='offcanvas-text'>
                                    {props.links[6]}
                                </div>
                            </Link> */}
                            
                        </div>

                    </div>
                </nav>
            </nav>
        </Fragment>
    )
}