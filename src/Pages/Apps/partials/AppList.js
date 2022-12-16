import React from 'react'

import Application from "./Application";

export default function AppList() {
    return (
        <>
            <div class="w-[100%] m-auto">
                <h2 class="text-6xl text-text_teal">Applications</h2>
                <div class="h-[4vh]"></div>
                <div class="flex flex-wrap gap-[3vw]">
                    <Application />
                    <Application />
                    <Application />
                    <Application />
                    <Application />
                    <Application />
                    <Application />
                    <Application />
                    <Application />
                </div>
            </div>
        </>
    )
}