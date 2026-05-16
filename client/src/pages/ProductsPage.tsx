import { FooterComponent } from "../components/FooterComponent";
import { useRecoilValue } from "recoil";
import { getAllProductSelectors } from "../state/productSelectors";
import type { ProductDetail } from "../types/appTypes";
import { IoCartOutline } from "react-icons/io5";

export const ProductsPage = () => {
    // all the recoil related variable comes here 
    const allProductList = useRecoilValue(getAllProductSelectors);

    // all the component states comes here 


    // all the application hooks comes here 


    // all the UI related JSX codes comes here for this purpose
    return (
        <div>
            <div className="border-2 border-black grid grid-cols-4">
                <div className="border-2 border-black col-span-1">Filter section of the products page comes here </div>
                <div className="border-2 border-black col-span-3 flex flex-row flex-wrap justify-between items-center p-5">
                    {
                        allProductList.map((currProduct : ProductDetail, index : number) => (
                            <div key={index} className="flex flex-col justify-center items-left w-[20%] ml-10 mb-10 rounded-lg p-5 shadow-2xl">
                                {/* image of the product comes here */}
                                <div className="flex justify-center items-center">
                                   <img src={currProduct.image} alt={currProduct.title} className="h-20 w-20" />
                                </div>
                                {/* heading of this product comes here */}
                                <div className="text-sm w-full">{currProduct.title.length>25 ? `${currProduct.title.slice(0, 25)} ...` : currProduct.title}</div>

                                {/* price of the product comes here */}
                                <div>${currProduct.price}</div>

                                {/* add to cart option comes here */}
                                <button className=" bg-red-500 px-1 py-2 text-white flex flex-row justify-center items-center rounded-sm">
                                    <IoCartOutline></IoCartOutline>
                                    <p className="text-sm ml-3">Add to Cart</p>
                                </button>

                            </div>
                        ))
                    }
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </div>
    )
}