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

