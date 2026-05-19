import React, { useState } from "react";
import type { CartItemDetails, ProductDetail } from "../types/appTypes";

export const AddToCartPage = () => {

    // all the recoil related variable comes here 


    // all the states of the component comes here
    const [totalCartItems, setTotalCartItems] = useState<number>(0);
    const [cartItemList, setCartItemList] = useState<CartItemDetails[]>([]);


    // all the hooks for the component comes here


    // all the jsx UI related code comes here
    return (
        <div className="border-2 border-black flex flex-col justify-center items-center">
            {/* my cart topic comes here */}
            <div className="border-2 border-red-500">
                <p>My Cart {totalCartItems!==0? `(${totalCartItems})`: null}</p>
            </div>

            {/*  the list of the items that are added to the cart comes here */}
            <div className=" border-2 border-red-500 flex flex-col justify-center items-center">
                {
                    cartItemList.map((currCartItem : CartItemDetails) => {
                        return (
                            <div className="border-2 border-black flex flex-row justify-around items-center">
                                {/* flex box for the image and its cost and its title for this purpose */}
                                <div className="border-2 border-black flex flex-row justify-center items-center">
                                    {/* image tag comes here */}
                                    <img src={currCartItem.image} alt={currCartItem.title}/>
                                    {/* title and price comes here */}
                                    <div className="flex flex-col justify-center items-center">
                                        <p>{currCartItem.title}</p>
                                        <p className="text-red-500">${currCartItem.price}</p>
                                    </div>
                                    {/* quantity increase and decrease button comes here */}
                                    <button className="flex flex-row justify-center items-center">

                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}