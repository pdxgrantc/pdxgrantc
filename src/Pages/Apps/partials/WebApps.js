import React from 'react'

import { web_items } from "./web-apps"

export default function WebApps() {
    return (
        <div class="w-[100%] m-auto">
            <h2 class="text-6xl text-text_teal">Web Apps</h2>
            <div class="h-[4vh]"></div>
            <div class="flex flex-wrap gap-[3vw] justify-between on_mobile:flex-col on_mobile:gap-[6vh]">
                {github_items.map((data) => {
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

function get_link(link, title) {
    let new_title = title.replaceAll(" ", "-");
    let path = link.concat(new_title);
    return path;
}

const Application = ({ title, description, link }) => {
    return (
        <>
            <div class="on_desktop:min-w-[30%] w-fit h-fit on_mobile:w-[100%] min-h-[30vh] bg-apps_bg_color">
                <div class="p-[5%]">
                    <div class="flex flex-nowrap justify-between h-min">
                        <div>
                            <a class="text-[2.5rem]" href={get_link(link, title)}>{title}</a>
                        </div>
                    </div>
                    <p class="text-[1.8rem] on_desktop:max-w-[42vw] leading-[2rem]">{description}</p>
                </div>
            </div>
        </>
    );
};
