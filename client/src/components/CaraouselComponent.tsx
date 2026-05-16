// this is caraousel component for the application 
// this component will be used across all the application for this purpose

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import type { CaraouselComponentProps, ProductDetail } from "../types/appTypes"
import { useRecoilValue } from "recoil"
import { getHomePageCaraouselProductsSelector } from "../state/productSelectors"
import { useEffect, useState } from "react"

export const CaraouselComponent = (props : CaraouselComponentProps) => {

    // lets get the list of products to be shown on the caraousel component from the recoil selector itself 
    const caraouselProductList : ProductDetail[] = useRecoilValue(getHomePageCaraouselProductsSelector)

    // states of the application comes here 
    const [currentSliderIndex, setCurrentSliderIndex] = useState<number>(0);


    const previousSlideClickHandler = () => {
        // need to decrement the value of the current index 
        console.log("the user is trying to go to the previous slide")
        // const currentSlide = currentSliderIndex;
        console.log("the value of the caraouel component is : ", currentSliderIndex)
        // setCurrentSliderIndex((currentSliderIndex - 1 + caraouselProductList.length) % caraouselProductList.length);
        setCurrentSliderIndex((prev) => prev === 0 ? caraouselProductList.length -1 : prev - 1);

        console.log("the after value of the caraouel component is : ", currentSliderIndex)

    }    
    const nextSlideClickHandler = () => {
        console.log("user is trying to go to the next slide for this purpose")
        // const currentSlide = currentSliderIndex;
        console.log("the value of the caraouel component is : ", currentSliderIndex)
        // setCurrentSliderIndex(currentSliderIndex===caraouselProductList.length-1? 0 : currentSliderIndex + 1);
        setCurrentSliderIndex((prev) => prev === caraouselProductList.length - 1? 0 : prev + 1);
        console.log("the after value of the caraouel component is : ", currentSliderIndex)

    }

    useEffect(() => {
        // we can implement the autoplay feature using the setinterval timer itself for this purpose
        console.log("inside the useeffect hook of the caraousel component")
        if(props.autoPlay){
            // then lets define the setinterval for this purpose 
            const setIntervalInstance = setInterval(() => {
                nextSlideClickHandler()
            }, props.autoPlayDuration);

            return () => {
                // lets clear the setinterval that we have created 
                // so that we can avoid the memory overflow or stack overflow 
                clearInterval(setIntervalInstance)
            }
        }

    }, [props.autoPlay, props.autoPlayDuration])

    // lets also implement the autoplay feature in this for this purpose

    return (
        <div className="overflow-hidden relative">
            <div className="flex relative transition-transform ease-out duration-500" style={{transform : `translateX(-${currentSliderIndex * 100}%)`}}>
                {caraouselProductList.map((currProductDetail, index) => (
                    <div key={index} className="min-w-full shrink-0 flex flex-row justify-around items-center py-5 bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
                        <div >
                            <h1 className="text-xl text-red-500 font-semibold font-sans text-left">Powering Your World with the Best in {currProductDetail.category} </h1>
                            <p className="text-4xl font-bold uppercase line-clamp-3 md:w-125 text-white">{currProductDetail.title} </p>
                            <h1 className="md:w-125 line-clamp-3 text-gray-400">{currProductDetail.description}</h1>
                            {/* here comes the button of the shop now */}
                            <button className="bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">Shop Now</button>
                        </div>
                        <div className="border-4 border-yellow-500 flex justify-center items-center w-[20%] bg-white rounded-full p-10 shadow-2xl shadow-red-400 cursor-pointer">
                            <img src={currProductDetail.image} alt={currProductDetail.title} className="hover:scale-105 transition-all cursor-pointer" />
                        </div>
                    </div>
                    )
                )}
            </div>

            {/* lets give the slider for this purpose */}
            <div className=" flex flex-row justify-between items-center absolute bottom-50 w-full px-6 text-white text-3xl">
                <button className="cursor-pointer" onClick={previousSlideClickHandler}>
                    <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>
                </button>
                <button className="cursor-pointer" onClick={nextSlideClickHandler}>
                    <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                </button>
            </div>

        </div>

    )
}