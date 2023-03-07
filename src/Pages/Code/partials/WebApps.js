import React from 'react'
import { Link } from 'react-router-dom';

import { WebItems } from "./DataFiles/web-apps"

export default function WebApps() {
    return (
        <div className="w-[100%] m-auto">
            <Link className="text-6xl text-text_pink" href={"https://www.apps.pdxgrantc.com"}>Web Apps</Link>
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
    )
}

function get_link(title) {
    const link = "/Apps/"
    let path = link.concat(title);
    return path;
}

const Application = ({ title, description, link }) => {
    return (
        <>
            <Link className="on_desktop:w-[47%] hover:bg-apps_bg_pressed on_desktop:min-w-[400px] w-fit h-fit on_mobile:w-[100%] min-h-[30vh] bg-apps_bg_color" to={get_link(link)}>
                <div className="p-[5%]">
                    <div className="flex flex-nowrap justify-between h-min">
                        <div>
                            <p className="text-[2.5rem]">{title}</p>

                        </div>
                    </div>
                    <p className="text-[1.8rem] on_desktop:max-w-[42vw] leading-[2rem]">{description}</p>
                </div>
            </Link>
        </>
    );
};
