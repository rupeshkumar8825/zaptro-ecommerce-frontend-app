import { useState } from "react";

// this is the pagination component which will be shown on the products page
export const PaginationComponent = () => {
    const [currPage, setCurrPage] = useState<number>(1);
    return (
        <div className="border border-black w-full col-span-5 flex flex-row justify-center items-center">
            {/* previous  button comes here */}
            <button className="text-white bg-red-500 px-3 py-2 rounded-md ">Prev</button>

            {/* the pagination buttons comes here */}


            {/* Here comes the next button */}
            <button className="text-white bg-red-500 px-3 py-2 rounded-md ">Next</button>

        </div>
    )
}