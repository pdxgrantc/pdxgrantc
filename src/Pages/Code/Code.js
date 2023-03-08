import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import GitHubApps from "./partials/GitHubApps";

import Header from "../../Static/partials/Header";
import Footer from "../../Static/partials/Footer";
import Spacers from "../../Static/partials/Spacers";

export default function Code() {
    return (
        <>
            <Helmet>
                <title>Apps</title>
            </Helmet>
            <div className="m-auto bg-main_bg_color text-text_white">
                <Header />
                <div className="on_mobile:h-[2vh] w-[35vw] ml-0 on_mobile:hidden"></div>
                <div className="m-auto on_desktop:flex on_desktop:flex-col on_desktop:gap-[4vh] ">
                    <div className="on_desktop:bg-black on_desktop:px-[3vw]">
                        <Spacers choice={"item_header"} />
                        <div className="w-[100%] bg-black on_desktop:gap-[2vw]">
                            <div className="flex flex-col justify-center gap-5 on_mobile:py-[4vh] on_mobile:w-[90%] on_mobile:m-auto">
                                <h2 className="text-6xl text-text_pink">Intro</h2>
                                <h3 className="align-middle leading-[1.1] text-[2.5rem] text-wrap">As an extension of this website I wanted to showcase my abilities to create good looking and useful web apps. This page lists all of the web applications I have written and was able to integrate into this firebase website. For more information about this site itself please refrence the link below.</h3>
                                <Link className="text-[2rem] border-b-[1.5px] on_desktop:hover:bg-button_accent_color on_desktop:hover:ease-[cubic-bezier(0.4, 0, 1, 1)] on_desktop:duration-[350ms] on_desktop:hover:px-[1.25vw] py-[.5vh] whitespace-nowrap w-min" to="/about-this-site">About This Site</Link>
                            </div>
                        </div>
                        <Spacers choice={"item_footer"} />
                    </div>
                    <div className="bg-black">
                        <div>
                            <Spacers choice={"item_header"} />
                            <div className="w-[90%] m-auto">
                                <GitHubApps />
                            </div>
                            <Spacers choice={"item_footer"} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
