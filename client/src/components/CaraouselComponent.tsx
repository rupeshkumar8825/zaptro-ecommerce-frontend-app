// this is caraousel component for the application 
// this component will be used across all the application for this purpose

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"

export const CaraouselComponent = () => {
    return (
        <div className="relative">
            <div className="border border-black flex flex-col justify-center items-center py-30 bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
                <h1 className="text-4xl text-red-500">Powering Your World with the Best in Electronics </h1>
                <p>ITEM TITLE COMES HERE </p>
                <h1>The very long description of the item should come here. Meaning we need to be sure that this descriptrion is fairly long enough to be able to test the UI features for this purpose</h1>
            </div>

            {/* lets give the slider for this purpose */}
            <div className="border border-red flex flex-row justify-between items-center absolute bottom-40 w-full px-10 text">
                <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>
                <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
            </div>

        </div>

    )
}