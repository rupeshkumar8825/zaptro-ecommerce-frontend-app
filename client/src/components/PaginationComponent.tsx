import { useEffect, useState } from "react";
import type { PaginationComponentProps } from "../types/appTypes";

// this is the pagination component which will be shown on the products page
export const PaginationComponent = (props : PaginationComponentProps) => {
    const [currPage, setCurrPage] = useState<number>(1);

    useEffect(() => {
        // lets find the total number of pages to be considered here for this purpose
    }, [])
    return (
        <div className="border border-black w-full col-span-5 flex flex-row gap-5 justify-center items-center">
            {/* previous  button comes here */}
            <button className="text-white bg-red-500 px-3 py-2 rounded-md ">Prev</button>

            {/* the pagination numbering buttons comes here */}
            {/* <div className="shadow-xl ml-2 cursor-pointer">{props}</div>
            <div className="shadow-xl ml-2 cursor-pointer">2</div>
            <div className="shadow-xl ml-2 cursor-pointer">3</div>
            <div className="shadow-xl ml-2 cursor-pointer">...</div>
            <div className="shadow-xl ml-2 cursor-pointer mr-2">19</div> */}

            {/* Here comes the next button */}
            <button className="text-white bg-red-500 px-3 py-2 rounded-md ">Next</button>

        </div>
    )
}