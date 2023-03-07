import React from 'react'
import githubLogo from "../Images/githubLogo.png"
import inLogo from "../Images/inLogo.png"

export default function Footer() {
    return (
        <>
            <div className="h-[6vh]"></div>
            <div className="visible on_mobile:hidden flex flex-col justify-center">
                <div className="m-auto justify-center flex w-1/4 gap-20">
                    <a className="h-auto w-[10%] min-w-[4rem] hover:ease-in-out duration-[350ms] hover:invert" href="https://www.linkedin.com/in/pdxgrantc/">
                        <img id="inLogo" src={inLogo} alt="Linkedin"></img>
                    </a>
                    <a className="h-auto w-[10%] min-w-[4rem] hover:ease-in-out duration-[350ms] hover:invert" href="https://github.com/pdxgrantc/">
                        <img src={githubLogo} alt="GitHub"></img>
                    </a>
                </div>
                <div className="h-[2vh]"></div>
                <div className="m-auto w-fit text-[1.25rem]">
                    <h3 className="">Grant Conklin | pdxgrantc@gmail.com | 2022</h3>
                </div>
                <div className="mb-[8vh]"></div>
            </div>
            <div className="on_desktop:hidden visible">
                <div className="m-auto justify-center flex w-1/4 gap-10">
                    <a className="h-auto w-[10%] min-w-[4rem]" href="https://www.linkedin.com/in/pdxgrantc/">
                        <img id="inLogo" src={inLogo} alt="Linkedin"></img>
                    </a>
                    <a className="h-auto w-[10%] min-w-[4rem] mobile:w-1/2" href="https://github.com/pdxgrantc/">
                        <img src={githubLogo} alt="GitHub"></img>
                    </a>
                </div>
                <div className="h-[4vh]"></div>
                <div className="m-auto w-fit text-[1.2rem] flext flex-col">
                    <h3 className="text-center">Grant Conklin</h3>
                    <h3 className="text-center">pdxgrantc@gmail.com</h3>
                    <h3 className="text-center">2022</h3>
                </div>
                <div className="mb-[5vh] bg-main_bg_color"></div>
            </div>
        </>
    )
}
