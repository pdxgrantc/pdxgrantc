import React from "react";
import { Helmet } from "react-helmet";

import Header from "../../Static/partials/Header";
import Footer from "../../Static/partials/Footer";
import Spacers from "../../Static/partials/Spacers";

export default function Code() {
    return (
        <>
            <Helmet>
                <title>Code</title>
            </Helmet>
            <div className="m-auto bg-main_bg_color text-text_white">
                <Header />
                <div className="h-[2vh] on_mobile:h-[2vh] w-[35vw] on_desktop:bg-black ml-0"></div>
                <div className="h-[5vh] on_mobile:h-[2vh] w-[35vw] ml-0 on_mobile:hidden"></div>
                <div className="on_desktop:bg-black on_desktop:px-[3vw]">
                    <Spacers choice={"item_header"} />
                    <div className="w-[100%] flex on_desktop:gap-[2vw] justify-between on_mobile:flex-col on_mobile:m-auto bg-black">
                        <div className="flex flex-col justify-center gap-5 on_mobile:w-[90%] on_mobile:m-auto on_mobile:py-[4vh]">
                            <h2 className="text-6xl text-text_blue">About This Site</h2>
                            <h3 className="align-middle leading-[1.1] text-[2.5rem] text-wrap">I chose React to develop this site for the ease of getting a modern, responsive, and scaleable user interface.</h3>
                            <h3 className="align-middle leading-[1.1] text-[2.5rem] text-wrap">Compared to my experiences with technologies like EJS or Handlebars, React has allowed me to bring this site to production much quicker than expected even with a learning curve.</h3>
                            <h3 className="align-middle leading-[1.1] text-[2.5rem] text-wrap">For the visual design and layout of the project I used Tailwind to simplify the CSS implimentation and allow for a cleaner development package.</h3>
                        </div>
                    </div>
                    <Spacers choice={"item_footer"} />
                </div>
                <Footer />
            </div>
        </>
    );
}
