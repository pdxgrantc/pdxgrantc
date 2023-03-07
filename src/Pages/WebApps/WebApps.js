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
            <div className="m-auto bg-main_bg_color text-text_white min-h-screen">
                <Header />
                <div className="h-[2vh] on_mobile:h-[2vh] w-[35vw] on_desktop:bg-black ml-0"></div>
                <div className="h-[5vh] on_mobile:h-[2vh] w-[35vw] ml-0 on_mobile:hidden"></div>
                <div className="on_desktop:bg-black on_desktop:px-[3vw]">
                    <Spacers choice={"item_header"} />
                    <div className="w-[100%] m-auto">
                        <h2 className="text-6xl text-text_pink">Web Apps</h2>
                        <div className="h-[3vh]"></div>
                        <div className="grid grid-cols-2 gap-[2.5vw] on_mobile:flex on_mobile:flex-col on_mobile:gap-[5%]">
                            {WebItems.map((data) => {
                                return (
                                    <Application
                                        title={data.title}
                                        description={data.description}
                                        link={data.link}
                                        extra={data.extra}
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

const Application = ({ title, description, link, extra }) => {
    if (extra) {
        return (
            <>
                <a className="on_desktop:w-[100%] hover:bg-apps_bg_pressed on_desktop:min-w-[400px] w-fit h-fit on_mobile:w-[100%] min-h-[30vh] bg-apps_bg_color" href={get_link(link)}>
                    <div className="p-[5%] flex flex-col gap-2">
                        <div className="flex flex-nowrap justify-between h-min">
                            <p className="text-[2.75rem]">{title}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-[1.8rem] on_desktop:max-w-[42vw] leading-[2rem]">{description}</p>
                            <p className="text-[1.8rem] on_desktop:max-w-[42vw] leading-[2rem]">{extra}</p>
                        </div>
                    </div>
                </a>
            </>
        );
    } else {
        return (
            <>
                <a className="on_desktop:w-[100%] hover:bg-apps_bg_pressed on_desktop:min-w-[400px] w-fit h-fit on_mobile:w-[100%] min-h-[30vh] bg-apps_bg_color" href={get_link(link)}>
                    <div className="p-[5%] flex flex-col gap-2">
                        <div className="flex flex-nowrap justify-between h-min">
                            <p className="text-[2.75rem]">{title}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-[1.8rem] on_desktop:max-w-[42vw] leading-[2rem]">{description}</p>
                        </div>
                    </div>
                </a>
            </>
        );
    }
};
