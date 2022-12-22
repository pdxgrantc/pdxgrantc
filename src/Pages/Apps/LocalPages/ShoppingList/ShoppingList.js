import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Header from '../../../../Static/partials/Header'
import Footer from '../../../../Static/partials/Footer'

import UnpurchasedItems from './partials/UnpurchasedItems'
import BoughtItems from './partials/BoughtItems'

const LOCAL_STORAGE_KEY = 'ShoppingList.items'

export default function ShoppingList() {
    const [items, setItems] = useState([])
    const itemNameRef = useRef()

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedItems) setItems(storedItems)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
    }, [items])


    function handleAddItem(e) {
        const title = itemNameRef.current.value
        if (title === '') return
        setItems(prevItems => {
            return [...prevItems, { id: uuidv4(), title: title, bought: false }]
        })
        itemNameRef.current.value = null
        console.log("items", title)
    }

    return (
        <div class="m-auto bg-main_bg_color text-text_white" >
            <Header />
            <div class="w-[85vw] m-auto flex gap-[4vw]">
                <div class="flex flex-col gap-[4vh]">
                    {/*<Items items={items} />*/}
                    <div class="bg-black px-[2vw] py-[2vh]">
                        <UnpurchasedItems items={items} />
                        <div>
                            <button class="text-xl font-semibold py-[.25vh] w-fit m-auto border-b-[2.25px] hover:bg-button_accent_color hover:ease-[cubic-bezier(0.4, 0, 1, 1)] duration-[350ms] hover:px-[.45vw]" >Update</button>
                        </div>
                    </div>
                    <BoughtItems />
                </div>
                {/*
                <AddItem />
                */}
                <div class="bg-black h-fit w-full px-[2vw] py-[2vh]">
                    <input class="h-[4.75vh] px-[.75vw] py-[.5vh] text-2xl w-full text-accent_text_color focus:shadow-none focus:outline-none" type="text" placeholder='Item Name' id="ItemTitle" ref={itemNameRef} />
                    {/*
                    <select name="pets" id="pet-select" class="text-black text-2xl w-full p-.5 outline-none">
                        <option value=""> Purchased by: </option>
                        <option value="grant">Grant</option>
                        <option value="daniel">Daniel</option>
                        <option value="quinn">Quinn</option>
                    </select>
                    */}
                    <button class="text-4xl font-semibold py-[.95vh] w-fit m-auto border-b-[2.5px] hover:bg-button_accent_color hover:ease-[cubic-bezier(0.4, 0, 1, 1)] duration-[350ms] hover:px-[1.5vw]" onClick={handleAddItem}>Add Item to List</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
