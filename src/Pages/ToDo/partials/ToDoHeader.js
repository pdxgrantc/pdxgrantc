import React from 'react'
import { Link } from "react-router-dom"

export default function ToDoHeader() {


    if (window.location.pathname === "/ToDo") {
        return (
            <div class="on_desktop:hidden flex justify-around bg-black w-[90vw] m-auto h-[10vh] text-[1.65rem]">
                <Link class="h-fit my-auto" to="/">Home</Link>
                <Link class="h-fit my-auto" to="/ToDo/New-Item">New Item</Link>
            </div>
        )
    }
    else {
        return (
            <div class="on_desktop:hidden flex justify-around bg-black w-[90vw] m-auto h-[10vh] text-[1.65rem]">
                <Link class="h-fit my-auto" to="/">Home</Link>
                <Link class="h-fit my-auto" to="/ToDo">ToDo</Link>
            </div>
        )
    }

}
