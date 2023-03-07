import React from "react";
import { Helmet } from "react-helmet";

import Header from "../../Static/partials/Header";
import Footer from "../../Static/partials/Footer";

import react from "../../Static/Images/react.jpg";
import HomeScreeenshot from "../../Static/Images/HomeScreenshot.jpg";

export default function AboutThisSite() {
    return (
        <>
            <Helmet>
                <title>About This Site</title>
            </Helmet>
            <div className="m-auto bg-main_bg_color text-text_white">
                <Header />
                <div className="h-[2vh] on_mobile:h-[2vh] w-[35vw] on_desktop:bg-black ml-0"></div>
                <div className="h-[5vh] on_mobile:h-[2vh] w-[35vw] ml-0 on_mobile:hidden"></div>
                <div className="py-[5vh] m-auto on_desktop:flex on_desktop:flex-col on_desktop:gap-[3vh] on_desktop:px-[3vw] on_desktop:bg-black">
                    <div className="w-[100%] on_desktop:m-auto on_desktop:flex on_desktop:gap-[3vh] on_desktop:flex-col">
                        <div className="on_mobile:hidden on_desktop:gap-[2vw] w-[100%] flex justify-between bg-black">
                            <img className="py-[1vh] m-auto w-auto h-[43vh]" src={HomeScreeenshot} alt="HomePage"></img>
                            <div className="w-[42%] flex flex-col justify-center gap-5">
                                <h2 className="text-6xl text-text_pink">Origins</h2>
                                <h3 className="align-middle leading-[1.1] text-[2.5rem] text-wrap">I developed this site as a display of my ability in full stack development. As well as to have a place to host my self developed web apps used by myself and my friends.</h3>
                            </div>
                        </div>
                        <div className="on_desktop:hidden bg-black">
                            <div className="flex flex-col justify-center gap-5 pb-2">
                                <h2 className="text-6xl text-text_pink">Origins</h2>
                                <h3 className="align-middle leading-[1.1] text-[2.5rem] text-wrap">I developed this site as a display of ability in full stack development. As well as to have a place to host my self developed web apps.</h3>
                            </div>
                        </div>
                        <div className="on_mobile:hidden bg-black"></div>
                        <div className="w-[100%] flex on_desktop:gap-[2vw] justify-between on_mobile:flex-col bg-black">
                            <img className="h-auto w-[30vw] on_desktop:hidden on_mobile:w-full m-auto" src={react} alt="React"></img>
                            <div className="flex flex-col justify-center gap-5">
                                <h2 className="text-6xl text-text_blue">Framework</h2>
                                <h3 className="align-middle leading-[1.1] text-[2.5rem] text-wrap">I chose React to develop this site for the ease of getting a modern, responsive, and scaleable user interface. For the visual design and layout of the project I used Tailwind to simplify the CSS implimentation and allow for a cleaner development package.</h3>
                                <h3 className="align-middle leading-[1.1] text-[2.5rem] text-wrap">Compared to my experiences with technologies like EJS or Handlebars React allowed me to bring this site to production much quicker than expected.</h3>
                            </div>
                            <img className="py-[2vh] m-auto h-[58vh] w-auto on_mobile:hidden" src={react} alt="React"></img>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
