import React from 'react'

/* todo impliment local react router for the applications */

export default function Application() {
    return (
        <>
            <div class="on_desktop:w-[30%] on_mobile:w-[100%] min-h-[30vh] bg-button_pressed_color">
                <div class="p-[5%]">
                    <div class="flex flex-nowrap justify-between h-min">
                        {/* todo add link to application page */}
                        <div>
                            <h3 class="text-[2.5rem]">
                                Title
                            </h3>
                        </div>
                        <div>
                            { /* align text to lower level */}
                            <h4 class="text-[2.2rem] pt-[.3rem]">
                                GitHub Page
                                {/* todo add github link */}
                            </h4>
                        </div>
                    </div>
                    <p class="text-[1.8rem] leading-[2rem]">This is a basic app designed to do some things which are noted later in this paragraph. This is a basic app designed to do some things which are noted later in this paragraph.</p>
                </div>
            </div>
        </>
    )
}