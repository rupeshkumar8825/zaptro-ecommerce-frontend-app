// this is the filter component to be shown on the products page

import type { FilterComponentProps } from "../types/appTypes";

export const FilterComponent = (props: FilterComponentProps) => {
    // constants for this component comes here 
     const MIN_PRICE_RANGE = 0;
     const MAX_PRICE_RANGE = 5000;


    return (
        <div>
            {/* product filter section comes here */}
            <div className="col-span-1 px-5">
                <div className="px-5 py-5 shadow-2xl rounded-lg">
                    <input type="text" className="border border-gray-300 w-full px-2 py-2  rounded-lg accent-red-500" placeholder="Search" onChange={props.handleSearchKeyWordChange}/>
                </div>

                {/* list of categories comes here */}
                <div className="mt-5 shadow-2xl rounded-md px-5 py-5">
                    <h1 className="font-semibold">Category</h1>
                    {
                        props.categoryList.map((currCategoryItem : string, index : number) => (
                            <div className="flex flex-row  items-center mb-5">
                                <input type="checkbox" className="accent-red-500" key={index} checked={props.categorySelectionCheckList[index]} onChange={() => props.handleCategorySelectionChange(index)} />
                                <p className="ml-5 uppercase">{currCategoryItem}</p>
                            </div>
                        ))
                    }
                </div>

                {/* option to select the brand comes here */}
                {/* <div className="border border-black">
                    <h1>Brand</h1>
                    <select>
                        
                    </select>
                </div> */}

                {/* price range options comes here  */}
                <div className="flex flex-col justify-center items-left shadow-2xl rounded-md px-5 py-5 mt-10">
                    <h1 className="font-semibold">Price Range</h1>
                    <p>Price Range $0 - $5000</p>
                    <input type="range" className="accent-red-500" min={MIN_PRICE_RANGE} max={MAX_PRICE_RANGE} value={props.currPriceRange} onChange={props.handlePriceChange}/>
                </div>

            </div>
        </div>
    )
}

// say everything went fine 