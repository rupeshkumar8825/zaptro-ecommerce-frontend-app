// this is the page where we will be showing the complete details of a given product given it id

import { useEffect, useState } from "react"
import type { ProductDetail } from "../types/appTypes"
import { useRecoilValue } from "recoil"
import { getAllProductSelectors } from "../state/productSelectors"
import { useParams } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5"

export const SingleProductDetailPage = () => {

    // some common operations to be done for this page component comes here 
    const useParamObject =  useParams()

    // all the recoil related handling and data comes here for this purpose 
    const allProductList : ProductDetail[] = useRecoilValue(getAllProductSelectors);


    // all the states related to the component comes here 
    const [currProductDetails, setCurrProductDetails] = useState<ProductDetail | null>(null);

    useEffect(() => {
        if(useParamObject){
            // then lets try to find out the product from the product id for this purpose 
            const product = allProductList.find((currProduct : ProductDetail) => Number(currProduct.id) === Number(useParamObject.id as string))
            setCurrProductDetails(product? product : null)
        }
    }, [useParamObject])

    useEffect(() => {
        // lets calculate the not discounted price for this purpose
    }, [])

    // the actual jsx/ui component related code comes here 
    return (
        <div className="flex flex-col justify-center items-center">
            {/* the path heading */}
            {/* <div className="border border-red-500 py-5">
                here comes the top heading meaning the path for this purpose
            </div>             */}
            {/* actual product details comes here */}
            <div className="flex flex-row gap-10 justify-center items-top mt-10 mb-10">
                {/* product image comes here  */}    
                <div className="rounded-xl">
                    <img className="h-[90%] w-[90%]" src={currProductDetails?.image} alt={currProductDetails?.title} />
                </div>

                {/* the complete product details comes here */}
                <div className="flex flex-col justify-around items-left px-10 py-10 w-[40%] rounded-xl shadow-2xl">
                    {/* top heading of the product comes here  */}
                    <h1 className="font-bold text-3xl">{currProductDetails?.title}</h1>
                    <p className="uppercase  text-md ">{currProductDetails?.category}</p>

                    {/* price related information comes here */}
                    <div className="flex flex-row gap-2 justify-left items-center">
                        <p className="text-red-500 font-semibold">${currProductDetails?.price}</p>
                        <p className="font-semibold line-through">${currProductDetails? Math.round(currProductDetails.price*100/96) : null}</p>
                        <button className="text-white px-3 py-2 bg-red-500 rounded-md">4% Discount</button>
                    </div>

                    {/* actual product description comes here */}
                    <p className="text-md w-[85%] mt-5 mb-5">{currProductDetails?.description}</p>

                    {/* product quantity related details comes here */}
                    <div className="flex flex-row justify-left items-center">
                        <p>Quantity</p>
                        <input type="text" placeholder="1" className="ml-2 w-15 px-4 py-2 bg-white/20 border border-gray-400 text-black rounded-xl " />

                    </div>

                    {/* finally comes the add to cart button for this purpose */}
                    <button className="mt-5 w-[40%] text-white bg-red-500 flex flex-row justify-center items-center px-3 py-2 shadow-2xl rounded-sm cursor-pointer">
                       <IoCartOutline></IoCartOutline>
                        <p className="shadow-4xl shadow-black">Add to Cart</p>
                    </button>
                </div>
            </div>
        </div>
    )
}