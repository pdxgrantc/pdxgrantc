import React from 'react'
import githubLogo from "../Images/githubLogo.png"
import inLogo from "../Images/inLogo.png"

export default function Footer() {
    return (
        <>
            <div class="visible on_mobile:hidden flex flex-col justify-center">
                <div class="m-auto justify-center flex w-1/4 gap-20">
                    <a class="h-auto w-[10%] min-w-[4rem] hover:ease-in-out duration-[350ms] hover:invert" href="https://www.linkedin.com/in/pdxgrantc/">
                        <img id="inLogo" src={inLogo} alt="Linkedin"></img>
                    </a>
                    <a class="h-auto w-[10%] min-w-[4rem] hover:ease-in-out duration-[350ms] hover:invert" href="https://github.com/pdxgrantc/">
                        <img src={githubLogo} alt="GitHub"></img>
                    </a>
                </div>
                <div class="h-[2vh]"></div>
                <div class="m-auto w-fit text-[1.25rem]">
                    <h3 class="">Grant Conklin | pdxgrantc@gmail.com | 2022</h3>
                </div>
                <div class="mb-[8vh]"></div>
            </div>
            <div class="on_desktop:hidden visible">
                <div class="m-auto justify-center flex w-1/4 gap-10">
                    <a class="h-auto w-[10%] min-w-[4rem]" href="https://www.linkedin.com/in/pdxgrantc/">
                        <img id="inLogo" src={inLogo} alt="Linkedin"></img>
                    </a>
                    <a class="h-auto w-[10%] min-w-[4rem] mobile:w-1/2" href="https://github.com/pdxgrantc/">
                        <img src={githubLogo} alt="GitHub"></img>
                    </a>
                </div>
                <div class="h-[4vh]"></div>
                <div class="m-auto w-fit text-[1.2rem] flext flex-col">
                    <h3 class="text-center">Grant Conklin</h3>
                    <h3 class="text-center">pdxgrantc@gmail.com</h3>
                    <h3 class="text-center">2022</h3>
                </div>
                <div class="mb-[5vh] bg-main_bg_color"></div>
            </div>
        </>
    )
}
