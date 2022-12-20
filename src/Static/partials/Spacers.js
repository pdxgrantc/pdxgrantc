import React from 'react'

export default function Spacers({ choice }) {
    if (choice === "section_break") {
        return (
            <>
                <div class="w-[35vw] h-[5vh] on_mobile:h-0"></div>
            </>
        )
    }
    else if (choice === "item_break") {
        return (
            <>
                <div class="on_desktop:h-[5vh] on_mobile:h-[4vh] on_desktop:bg-black"></div>
            </>
        )
    }
    else if (choice === "item_footer") {
        return (
            <>
                <div class="mb-[8vh]"></div>
            </>
        )
    }
    else if (choice === "item_header") {
        return (
            <>
                <div></div>
            </>
        )
    }
    else if (choice === "left_black_break") {
        return (
            <>
                <div class="w-[35vw] h-[5vh] bg-black on_mobile:h-0"></div>
            </>
        )
    }
    else {
        return (
            <></>
        )
    }
}
