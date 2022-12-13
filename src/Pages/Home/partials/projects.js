import React from 'react'
import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <div class="bg-black m-auto pt-[5vh] pb-[7vh]">
            <div class="w-[90%] m-auto">
                <div>
                    <h3 class="text-text_grey text-[2.2rem] on_mobile:pb-4">Major Projects</h3>
                    <h4 class="py-[1.25vh] text-6xl text-text_pink">Oregon State University</h4>
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
                    <div class="h-[6vh] on_mobile:h-[6vh]"></div>
                    <h4 class="py-[1.25vh] text-6xl text-text_blue">Personal Projects</h4>
                    <div class="flex on_mobile:flex-col gap-[10vw] mt-[2vh] text-4xl">
                        <div class="text-[2.75rem]">
                            <div class="on_mobile:pb-3">
                                <h5 class="on_mobile:leading-[2.8rem] on_mobile:pb-2">Free Geek Portland</h5>
                                <h6 class="pt-[.75rem] text-[1.65rem] on_mobile:leading-[2rem]">Electronics Recycling</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
