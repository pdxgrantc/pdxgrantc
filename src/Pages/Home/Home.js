import React from 'react'
import { Helmet } from 'react-helmet';

import Resume from './partials/Resume'

import Header from '../../Static/partials/Header'
import Footer from '../../Static/partials/Footer'

import Grant_Photo from "./Grant-Photo.jpg"
//<img class="h-[calc(100%-76px)]" src={Grant_Photo} alt="Grant"></img>

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div class="m-auto bg-main_bg_color text-text_white">
                <Header />
                <div class="relative on_mobile:mt-[2vh] flex on_mobile:gap-[5vh] on_mobile:flex-col on_mobile:w-[90vw] on_mobile:m-auto on_mobile:h-[90vh]">
                    <img class="max-w-[50vw] h-[88vh] w-auto on_mobile:w-[100%] on_mobile:max-w-none on_mobile:h-auto" src={Grant_Photo} alt="Grant"></img>
                    <div class="max-w-[43vw] my-auto pl-[4vw] right-[5vw] bottom-[40vh] on_mobile on_mobile:max-w-none on_mobile:p-0 on_mobile:static on_mobile:w-[100%]">
                        <h2 class="text-[5.5rem] font-bold on_mobile:text-[2.75rem]">I'm Grant Conklin</h2>
                        <h3 class="text-[4rem] font-semibold on_mobile:text-[2rem]">Full Stack Web Developer</h3>
                        <h3 class="text-[4rem] font-semibold text-text_grey on_mobile:text-[2rem]">Student at Oregon State University</h3>
                    </div>
                </div>
                <div class="w-[35vw] h-[5vh] bg-black on_mobile:h-0"></div>
                <Resume />
                <div class="mb-[8vh]"></div>
                <Footer />
            </div>
        </>
    )
}
