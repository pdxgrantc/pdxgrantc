import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// Partials
import Header from "../../Static/partials/Header";
import Footer from "../../Static/partials/Footer";
import Spacers from "../../Static/partials/Spacers";
import { WebItems } from "./DataFiles/web-apps";

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
                    <div className="w-[100%] m-auto">
                        <h2 className="text-6xl text-text_pink">Web Apps</h2>
                        <div className="h-[3vh]"></div>
                        <div className="flex flex-wrap justify-between on_mobile:flex-col on_mobile:gap-[5%]">
                            {WebItems.map((data) => {
                                return (
                                    <Application
                                        title={data.title}
                                        description={data.description}
                                        link={data.link}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <Spacers choice={"item_footer"} />
                </div>
                <Footer />
            </div>
        </>
    );
}

function get_link(title) {
    return title;
}

const Application = ({ title, description, link }) => {
    return (
        <>
            <a className="on_desktop:w-[47%] hover:bg-apps_bg_pressed on_desktop:min-w-[400px] w-fit h-fit on_mobile:w-[100%] min-h-[30vh] bg-apps_bg_color" href={get_link(link)}>
                <div className="p-[5%]">
                    <div className="flex flex-nowrap justify-between h-min">
                        <div>
                            <p className="text-[2.5rem]">{title}</p>

                        </div>
                    </div>
                    <p className="text-[1.8rem] on_desktop:max-w-[42vw] leading-[2rem]">{description}</p>
                </div>
            </a>
        </>
    );
};
