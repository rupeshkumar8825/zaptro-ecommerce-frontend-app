// this is the filter component to be shown on the products page

export const FilterComponent = (props: { categoryList: string[] }) => {
    return (
        <div>
            {/* product filter section comes here */}
            <div className="border-2 border-black col-span-1 px-5">
                <div>
                    <input type="text" className=" border border-gray-300" placeholder="Search" />
                </div>

                {/* list of categories comes here */}
                <div className="border border-black mt-5">
                    <h1 className="font-semibold">Category</h1>
                    {
                        props.categoryList.map((currCategory : string, index : number) => (
                            <div className="flex flex-row  items-center mb-5">
                                <input type="checkbox" key={index} />
                                <p className="ml-5 uppercase">{currCategory}</p>
                            </div>
                        ))
                    }
                </div>

                {/* option to select the brand comes here */}
                <div className="border border-black">
                    <h1>Brand</h1>
                    <select>
                        
                    </select>
                </div>

            </div>
        </div>
    )
}

// say everything went fine 