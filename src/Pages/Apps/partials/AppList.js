import React from 'react'



import { data_items } from "./test"

export default function AppList() {
    return (
        <>
            <div class="w-[100%] m-auto">
                <h2 class="text-6xl text-text_teal">Applications</h2>
                <div class="h-[4vh]"></div>
                <div class="flex flex-wrap gap-[3vw] on_mobile:flex-col on_mobile:gap-[4vh]">
                    {data_items.map((data) => {
                        return (
                            <Data
                                title={data.title}
                                description={data.description}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}

const Data = ({ title, description }) => {
    return (
        <>
            <div class="on_desktop:w-[30%] on_mobile:w-[100%] min-h-[30vh] bg-button_pressed_color">
                <div class="p-[5%]">
                    <div class="flex flex-nowrap justify-between h-min">
                        <div>
                            <p class="text-[2.5rem]">{ title }</p>
                        </div>
                        <div>
                            <h4 class="text-[2.2rem] pt-[.3rem]">
                                GitHub Page
                            </h4>
                        </div>
                    </div>
                    <p class="text-[1.8rem] leading-[2rem]">{ description }</p>
                </div>
            </div>
        </>
    );
};
