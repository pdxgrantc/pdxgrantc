import React from 'react'

/* todo impliment local react router for the applications */

export const Application = ({ title, description }) => {
    return (
        <div class="on_desktop:w-[30%] on_mobile:w-[100%] min-h-[30vh] bg-button_pressed_color">
            <div class="p-[5%]">
                <div class="flex flex-nowrap justify-between h-min">
                    <div>
                        <p class="text-[2.5rem]">{title}</p>
                    </div>
                    <div>
                        <h4 class="text-[2.2rem] pt-[.3rem]">
                            GitHub Page
                        </h4>
                    </div>
                </div>
                <p class="text-[1.8rem] leading-[2rem]">{description}</p>
            </div>
        </div>
    );
};