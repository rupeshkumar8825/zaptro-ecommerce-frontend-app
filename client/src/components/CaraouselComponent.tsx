// this is caraousel component for the application 
// this component will be used across all the application for this purpose

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import type { ProductDetail } from "../types/appTypes"
import { useRecoilValue } from "recoil"
import { getHomePageCaraouselProductsSelector } from "../state/productSelectors"

export const CaraouselComponent = () => {

    // lets get the list of products to be shown on the caraousel component from the recoil selector itself 
    const caraouselProductList : ProductDetail[] = useRecoilValue(getHomePageCaraouselProductsSelector)


    return (
        <div className="relative">
            {caraouselProductList.map((currProductDetail) => {

                return ( <div className="border-4 border-white flex flex-row justify-around items-center py-5 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10">
                    <div className="border border-red-500">
                        <h1 className="text-sm text-red-500 font-semibold font-sans text-left border border-yellow-400">Powering Your World with the Best in {currProductDetail.category} </h1>
                        <p className="text-4xl font-bold uppercase line-clamp-3 md:w-125 text-white">{currProductDetail.title} </p>
                        <h1 className="md:w-125 line-clamp-3 text-gray-400">{currProductDetail.description}</h1>
                        {/* here comes the button of the shop now */}
                        <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">Shop Now</button>
                    </div>
                    <div className="">
                        <img src={currProductDetail.image} alt={currProductDetail.title} className="rounded-full w-[70%]" />
                    </div>
                </div>
                )
            })}

            {/* lets give the slider for this purpose */}
            <div className="border border-red flex flex-row justify-between items-center absolute bottom-40 w-full px-10 text">
                <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>
                <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
            </div>

        </div>

    )
}