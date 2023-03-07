import React from 'react'
import { Helmet } from 'react-helmet';

import Resume from './partials/Resume'
import Projects from './partials/projects'

import Header from '../../Static/partials/Header'
import Footer from '../../Static/partials/Footer'
import Spacers from '../../Static/partials/Spacers';

import Grant_Photo from "./Grant-Photo.jpg"

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="m-auto bg-main_bg_color text-text_white">
                <Header />
                <div className="relative on_mobile:mt-[2vh] flex on_mobile:gap-[5vh] on_mobile:flex-col on_mobile:w-[90vw] on_mobile:m-auto on_mobile:h-[90vh]">
                    <img className="max-w-[50vw] h-[88vh] w-auto on_mobile:w-[100%] on_mobile:max-w-none on_mobile:h-auto" src={Grant_Photo} alt="Grant"></img>
                    <div className="max-w-[43vw] my-auto pl-[4vw] right-[5vw] bottom-[40vh] on_mobile on_mobile:max-w-none on_mobile:p-0 on_mobile:static on_mobile:w-[100%]">
                        <h2 className="text-[5.5rem] font-bold on_mobile:text-[2.75rem]">I'm Grant Conklin</h2>
                        <h3 className="text-[4rem] font-semibold on_mobile:text-[2rem]">Full Stack Web Developer</h3>
                        <h3 className="text-[4rem] font-semibold text-text_grey on_mobile:text-[2rem]">Student at Oregon State University</h3>
                    </div>
                </div>
                <Spacers choice={"left_black_break"} />
                <Resume />
                <Spacers choice={"item_footer"} />
                <Spacers choice={""} />
                <Projects />
                <Footer />
            </div>
        </div>
    )
}
