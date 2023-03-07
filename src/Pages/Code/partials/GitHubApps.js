import React from 'react'

import { github_items } from "./DataFiles/github-apps"

export default function GitHub_Apps() {
    return (
        <div class="w-[100%] m-auto">
            <h2 class="text-6xl text-text_teal">My GitHub Repositories</h2>
            <div class="h-[3vh]"></div>
            <div class="flex flex-wrap justify-between on_mobile:flex-col on_mobile:gap-[6vh]">
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
            <a class="on_desktop:w-[47%] hover:bg-apps_bg_pressed on_desktop:min-w-[400px] w-fit h-fit on_mobile:w-[100%] min-h-[30vh] bg-apps_bg_color" href={get_link(link, title)}>
                <div class="p-[5%]">
                    <div class="flex flex-nowrap justify-between h-min">
                        <div>
                            <p class="text-[2.5rem]">{title}</p>
                        </div>
                    </div>
                    <p class="text-[1.8rem] on_desktop:max-w-[42vw] leading-[2rem]">{description}</p>
                </div>
            </a>
        </>
    );
};
