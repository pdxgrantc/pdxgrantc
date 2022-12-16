import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import AppList from "./partials/AppList";

import Header from "../../Static/partials/Header";
import Footer from "../../Static/partials/Footer";

export default function Apps() {
    return (
        <>
            <Helmet>
                <title>Apps</title>
            </Helmet>
            <div class="m-auto bg-main_bg_color text-text_white">
                <Header />
                <div class="h-[2vh] on_mobile:h-[2vh] w-[35vw] on_desktop:bg-black ml-0"></div>
                <div class="h-[5vh] on_mobile:h-[2vh] w-[35vw] ml-0 on_mobile:hidden"></div>
                <div class="pb-[6vh] py-[5vh] m-auto on_desktop:flex on_desktop:flex-col on_desktop:gap-[3vh] on_desktop:px-[3vw] on_desktop:bg-black">
                    <div class="w-[100%] bg-black on_desktop:gap-[2vw]">
                        <div class="flex flex-col justify-center gap-5 on_mobile:py-[4vh] on_mobile:w-[90%] on_mobile:m-auto">
                            <h2 class="text-6xl text-text_pink">Intro</h2>
                            <h3 class="align-middle leading-[1.1] text-[2.5rem] text-wrap">As an extension of this website I wanted to showcase my abilities to create good looking and useful web apps. This page lists all of the web applications I have written and was able to integrate into this firebase website. For more information about this site itself please refrence the link below.</h3>
                            <Link class="text-[2rem] border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh] whitespace-nowrap w-min" to="/about-this-site">About This Site</Link>
                        </div>
                    </div>
                    <div class="on_desktop:h-[2vh] on_mobile:h-[4vh] on_desktop:bg-black"></div>
                    <div class="w-[100%] flex on_desktop:gap-[2vw] justify-between on_mobile:flex-col on_mobile:m-auto bg-black">
                        <div class="flex flex-col justify-center gap-5 on_mobile:w-[90%] on_mobile:m-auto on_mobile:py-[4vh]">
                            <h2 class="text-6xl text-text_blue">Framework</h2>
                            <h3 class="align-middle leading-[1.1] text-[2.5rem] text-wrap">I chose React to develop this site for the ease of getting a modern, responsive, and scaleable user interface.</h3>
                            <h3 class="align-middle leading-[1.1] text-[2.5rem] text-wrap">Compared to my experiences with technologies like EJS or Handlebars, React has allowed me to bring this site to production much quicker than expected even with a learning curve.</h3>
                            <h3 class="align-middle leading-[1.1] text-[2.5rem] text-wrap">For the visual design and layout of the project I used Tailwind to simplify the CSS implimentation and allow for a cleaner development package.</h3>
                        </div>
                    </div>
                </div>
                <AppList />
                <div class="h-[6vh]"></div>
                <Footer />
            </div>
        </>
    );
}
