import React from 'react'
import { Link } from "react-router-dom";

export default function DesktopHeader() {
    return (
        <>
            <div className='bg-dark_grey flex justify-between'>


                <Link className="w-[35vw] bg-black pl-[5vw] h-[8.5vh] text-[3.75rem] font-bold hover:cursor-pointer mobile:text-4xl on_desktop:whitespace-nowrap" to="/">Grant Conklin</Link>
                <div className="pr-[5vw] flex text-[2.75rem] font-semibold mobile:text-4xl">
                    <Link className="h-full align-middle px-[1vw] py-[.5vw] hover:bg-button_pressed_color hover:cursor-pointer hover:ease-in-out duration-[350ms]" to="/Code">Code</Link>
                    <Link className="h-full align-middle px-[1vw] py-[.5vw] hover:bg-button_pressed_color hover:cursor-pointer hover:ease-in-out duration-[350ms]" to="/WebApps">Apps</Link>
                    <Link className="h-full align-middle px-[1vw] py-[.5vw] bg-button_accent_color hover:bg-transparent hover:cursor-pointer hover:ease-in-out duration-[350ms]" to="/about-this-site">About This Site</Link>
                </div>
            </div>
        </>
    )
}
