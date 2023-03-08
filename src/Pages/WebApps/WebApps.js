import React from "react";
import { Helmet } from "react-helmet";

// Partials
import Header from "../../Static/partials/Header";
import Footer from "../../Static/partials/Footer";
import Spacers from "../../Static/partials/Spacers";

export default function Code() {
    return (
        <>
            <Helmet>
                <title>Code</title>
            </Helmet>
            <div className="m-auto bg-main_bg_color text-text_white min-h-screen">
                <Header />
                <div className="h-[5vh] on_mobile:h-[2vh] w-[35vw] ml-0 on_mobile:hidden"></div>
                <div className="on_desktop:bg-black on_desktop:px-[3vw]">
                    <Spacers choice={"item_header"} />
                    <div className="w-[100%] m-auto">
                        <h2 className="text-6xl text-text_pink">Web Apps</h2>
                        <div className="h-[3vh]"></div>
                        <div className="grid grid-cols-2 gap-[2.5vw] on_mobile:flex on_mobile:flex-col on_mobile:gap-[5%]">
                            <a className="rounded-low on_desktop:w-[100%] hover:bg-apps_bg_pressed on_desktop:min-w-[400px] w-fit h-fit on_mobile:w-[100%] min-h-[30vh] bg-apps_bg_color" href={"http://www.shopping.pdxgrantc.com"}>
                                <div className="p-[5%] flex flex-col gap-2">
                                    <div className="flex flex-nowrap justify-between h-min">
                                        <p className="text-[2.75rem]">
                                            Shopping List
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[1.8rem] on_desktop:max-w-[42vw] leading-[2rem]">
                                            A web app that allows you to create a shopping list and share it with others. I has functionality to automaticallly split the price by each user for each item.
                                        </p>
                                        <p className="text-[1.8rem] on_desktop:max-w-[42vw] leading-[2rem]">
                                            Currently Still Under Development
                                        </p>
                                    </div>
                                </div>
                            </a>
                            <a className="rounded-low on_desktop:w-[100%] hover:bg-apps_bg_pressed on_desktop:min-w-[400px] w-fit h-fit on_mobile:w-[100%] min-h-[30vh] bg-apps_bg_color" href={"https://www.pdxgrantc.com/WebApps"}>
                                <div className="p-[5%] flex flex-col gap-2">
                                    <div className="flex flex-nowrap justify-between h-min">
                                        <p className="text-[2.75rem]">
                                            ToDo
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[1.8rem] on_desktop:max-w-[42vw] leading-[2rem]">
                                            In Development
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <Spacers choice={"item_footer"} />
                </div>
                <Footer />
            </div>
        </>
    );
}
