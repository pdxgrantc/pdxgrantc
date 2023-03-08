import React from 'react'

import { github_items } from "./DataFiles/github-apps"

export default function GitHub_Apps() {
    return (
        <div className="w-[100%] m-auto">
            <h2 className="text-6xl text-text_teal">My GitHub Repositories</h2>
            <div className="h-[3vh]"></div>
            <div className="flex flex-wrap justify-between on_mobile:flex-col on_mobile:gap-[6vh]">
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
            <a className="on_desktop:w-[47%] rounded-low hover:bg-apps_bg_pressed on_desktop:min-w-[400px] w-fit h-fit on_mobile:w-[100%] min-h-[30vh] bg-apps_bg_color" href={get_link(link, title)}>
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
