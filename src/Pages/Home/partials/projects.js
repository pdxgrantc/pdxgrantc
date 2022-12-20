import React from 'react'
import { Link } from "react-router-dom";

import Spacers from '../../../Static/partials/Spacers';

export default function Projects() {
    return (
        <div class="bg-black m-auto">
            <Spacers choice={"item_header"}/>
            <div class="w-[90%] m-auto">
                <div>
                    <h3 class="text-text_grey text-[2.2rem] on_mobile:pb-4">Major Projects</h3>
                    <h4 class="py-[1.25vh] text-6xl text-text_blue">Oregon State University</h4>
                    <div class="flex on_mobile:flex-col gap-[10vw] mt-[2vh] text-4xl">
                        <div class="text-[2.75rem]">
                            <div class="on_mobile:pb-3">
                                <h5 class="on_mobile:leading-[2.8rem] on_mobile:pb-2">Bash Like Terminal</h5>
                                <h6 class="pt-[.75rem] text-[1.65rem] on_mobile:leading-[2rem]">I was tasked to create a terminal similar to bash with multi-process and background capability. The terminal allows linux binarys to be called from the bin directory. THe input has error checking and was developed entirely in the C language.</h6>
                            </div>
                        </div>
                        <div class="text-[2.75rem]">
                            <div class="on_mobile:pb-3">
                                <h5 class="on_mobile:leading-[2.8rem] on_mobile:pb-2">Scumblr Website</h5>
                                <h6 class="pt-[.75rem] text-[1.65rem] on_mobile:leading-[2rem]">This 3 person project used basic web development principals to create a dynmaic bloging site with multi-user sign-in. The app was written in javascript handlebars with a NodeJS backend. As this was a serverless project I wrote a database of sorts in javascript to read and write data from the disk.</h6>
                            </div>
                        </div>
                    </div>
                    <Spacers choice={"item_break"} />
                    <h4 class="py-[1.25vh] text-6xl text-text_pink">Personal Projects</h4>
                    <div class="flex on_mobile:flex-col gap-[10vw] mt-[2vh] text-4xl">
                        <div class="text-[2.75rem]">
                            <div class="on_mobile:pb-3">
                                <h5 class="on_mobile:leading-[2.8rem] on_mobile:pb-2">Home Server</h5>
                                <h6 class="pt-[.75rem] text-[1.65rem] on_mobile:leading-[2rem]">I have created and managed a home server running TrueNAS for basic file storage using ZFS. It also runs mulitle Ubuutu VM's for home automation tasks such as file management and other useful scripts. For instance a webs server dedicated to interfacing with a Rasperry Pi to manage my Philips Hue lights. The Python script on the Raspberry Pi listens for IR remote siganls as well as claps as input.</h6>
                            </div>
                        </div>
                    </div>
                    <Spacers choice={"item_break"} />
                    <h4 class="py-[1.25vh] text-6xl text-text_teal">pdxgrantc.com</h4>
                    <div class="flex on_mobile:flex-col gap-[10vw] mt-[2vh] text-4xl">
                        <div class="text-[2.75rem]">
                            <div class="on_mobile:pb-3">
                                <h5 class="on_mobile:leading-[2.8rem] on_mobile:pb-2">This Site </h5>
                                <h6 class="pt-[.75rem] text-[1.65rem] on_mobile:leading-[2rem]">This site is a ReactJS based web application which I wrote entirely by myself more information about its development and the included apps can be found through either of the links below.</h6>
                            </div>
                            <div class="flex gap-12 mt-[2vh]">
                                <Link class="text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]" to="/about-this-site">About This Site</Link>
                                <Link class="text-2xl border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh]" to="/ToDo">Web Apps</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Spacers choice={"item_footer"}/>
        </div>
    )
}
