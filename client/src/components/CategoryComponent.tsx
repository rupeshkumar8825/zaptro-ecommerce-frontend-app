import { useRecoilValue } from "recoil"
import { getListOfAllUniqueCategoriesSelector } from "../state/productSelectors"
import { useEffect } from "react";

// this is the category components where we will show the user to all the available categories 
export const CatetgoryComponent = () => {
    // all the recoil related states comes here 
    const categoryList = useRecoilValue(getListOfAllUniqueCategoriesSelector);


    useEffect(() => {
        console.log("The list of categories that we received is : ", categoryList);
    });


    return (
        <div className="border-2 boder-black flex flex-row justify-around items-center bg-[#101829] p-5">
            {
                categoryList.map((currCategory : string, index : number) => (
                    <button key={index} className="bg-red-500 px-3 py-2 text-white text-sm font-semibold rounded-md uppercase  bg-gradient-to-r from-red-500 to-purple-500 cursor-pointer" >{currCategory}</button>
                ))
            }
        </div>
    )
}

// say everything went fine