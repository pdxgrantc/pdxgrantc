import React from 'react'
import { Link } from "react-router-dom";

import Spacers from '../../../Static/partials/Spacers';

export default function Projects() {
    return (
        <div className="bg-black m-auto">
            <Spacers choice={"item_header"}/>
            <div className="w-[90%] m-auto">
                <div>
                    <h3 className="text-text_grey text-[2.2rem] on_mobile:pb-4">Major Projects</h3>
                    <h4 className="py-[1.25vh] text-6xl text-text_blue">Oregon State University</h4>
                    <div className="flex on_mobile:flex-col gap-[10vw] mt-[2vh] text-4xl">
                        <div className="text-[2.75rem]">
                            <div className="on_mobile:pb-3">
                                <h5 className="on_mobile:leading-[2.8rem] on_mobile:pb-2">Bash Like Terminal</h5>
                                <h6 className="pt-[.75rem] text-[1.65rem] on_mobile:leading-[2rem]">I was tasked to create a terminal similar to bash with multi-process and background capability. The terminal allows Linux binaries to be called from the bin directory. The input has error checking and was developed entirely in the C language.</h6>
                            </div>
                        </div>
                        <div className="text-[2.75rem]">
                            <div className="on_mobile:pb-3">
                                <h5 className="on_mobile:leading-[2.8rem] on_mobile:pb-2">Scumblr Website</h5>
                                <h6 className="pt-[.75rem] text-[1.65rem] on_mobile:leading-[2rem]">This 3-person project used basic web development principles to create a dynamic blogging site with multi-user sign-in. The app was written in JavaScript handlebars with a NodeJS backend. As this was a serverless project I wrote a database of sorts in JavaScript to read and write data from the disk.</h6>
                            </div>
                        </div>
                    </div>
                    <Spacers choice={"item_break"} />
                    <h4 className="py-[1.25vh] text-6xl text-text_pink">Personal Projects</h4>
                    <div className="flex on_mobile:flex-col gap-[10vw] mt-[2vh] text-4xl">
                        <div className="text-[2.75rem]">
                            <div className="on_mobile:pb-3">
                                <h5 className="on_mobile:leading-[2.8rem] on_mobile:pb-2">Home Server</h5>
                                <h6 className="pt-[.75rem] text-[1.65rem] on_mobile:leading-[2rem]">I have created and managed a home server running TrueNAS for basic file storage using ZFS. It also runs multiple VM's of both Linux and Windows for home automation tasks such as file management and other useful scripts. For instance, my main Windows VM runs a python media management script that will encode and store video files according to their properties.</h6>
                            </div>
                        </div>
                    </div>
                    <Spacers choice={"item_break"} />
                    <h4 className="py-[1.25vh] text-6xl text-text_teal">pdxgrantc.com</h4>
                    <div className="flex on_mobile:flex-col gap-[10vw] mt-[2vh] text-4xl">
                        <div className="text-[2.75rem]">
                            <div className="on_mobile:pb-3">
                                <h5 className="on_mobile:leading-[2.8rem] on_mobile:pb-2">This Site </h5>
                                <h6 className="pt-[.75rem] text-[1.65rem] on_mobile:leading-[2rem]">This site is a ReactJS based web application which I wrote entirely by myself. More information about its development and the included apps can be found through either of the links below.</h6>
                            </div>
                            <div className="flex gap-12 mt-[2vh]">
                                <Link className="text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]" to="/about-this-site">About This Site</Link>
                                <Link className="text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]" to="/WebApps">Web Apps</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Spacers choice={"item_footer"}/>
        </div>
    )
}
