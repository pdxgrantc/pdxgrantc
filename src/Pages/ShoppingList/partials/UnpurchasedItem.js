import React from 'react'

export default function UnpurchasedItem({ item, toggleBought }) {
    function HandleBoughtClick() {
        toggleBought(item.id)
    }

    return (
        <div>
            <div class="flex flex-col">
                <div>
                    <h3 class="text-xl">
                        {item.title}
                    </h3>
                </div>
                <div class="flex gap-2 justify-between">
                    <div class="flex gap-1">
                        <input name="purchased" id="purchased" class="" type="checkbox" checked={item.complete} onChange={HandleBoughtClick} />
                        <label for="purchased" class="inline-block align-middle">Purchased (Y/N)</label>
                    </div>
                    <div class="flex flex-nowrap justify-between">
                        <h4>Purchaser</h4>
                        <select name="purchaser" id="purchaser" class="focus:outline-none text-black py-[0.0rem] px-[0.15rem] h-fit">
                            <option value="grant">Grant</option>
                            <option value="quinn">Quinn</option>
                            <option value="daniel">Daniel</option>
                        </select>
                    </div>
                    <div>
                        <input name="price" id="price" placeholder="Price" required></input>
                    </div>
                </div>
            </div>
        </div>
    )
}
