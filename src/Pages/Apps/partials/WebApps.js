import React from 'react'
import { Link } from 'react-router-dom';

import { WebItems } from "./DataFiles/web-apps"

export default function WebApps() {
    return (
        <div class="w-[100%] m-auto">
            <h2 class="text-6xl text-text_pink">Web Apps</h2>
            <div class="h-[3vh]"></div>
            <div class="flex flex-wrap justify-between on_mobile:flex-col on_mobile:gap-[5%]">
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
            <Link class="on_desktop:w-[47%] hover:bg-apps_bg_pressed on_desktop:min-w-[400px] w-fit h-fit on_mobile:w-[100%] min-h-[30vh] bg-apps_bg_color" to={get_link(link)}>
                <div class="p-[5%]">
                    <div class="flex flex-nowrap justify-between h-min">
                        <div>
                            <p class="text-[2.5rem]">{title}</p>

                        </div>
                    </div>
                    <p class="text-[1.8rem] on_desktop:max-w-[42vw] leading-[2rem]">{description}</p>
                </div>
            </Link>
        </>
    );
};
