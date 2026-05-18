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
    return (
        <div className="border border-black flex flex-col justify-center items-center">
            {/* the path heading */}
            <div className="border border-red-500">
                here comes the top heading meaning the path for this purpose
            </div>            
            {/* actual product details comes here */}
            <div className="border-2 border-black flex flex-row justify-center items-center">
                {/* product image comes here  */}    
                <div className="border-2 border-red-500">
                    <img src="some imagee comews here" alt="some image comes here" />
                </div>

                {/* the complete product details comes here */}
                <div className="border-2 border-yellow-500 flex flex-col justify-center items-center">
                    {/* top heading of the product comes here  */}
                    <h1 className="font-bold text-3xl">{currProductDetails?.title}</h1>
                    <p>{currProductDetails?.category}</p>

                    {/* price related information comes here */}
                    <div className="border-2 border-orange-500 flex flex-row justify-center items-center">
                        <p>price 1 </p>
                        <p>price 2</p>
                        <button className="text-white px-3 py-2 bg-red-500 font-semibold">4% Discount</button>
                    </div>

                    {/* actual product description comes here */}
                    <p>{currProductDetails?.description}</p>

                    {/* product quantity related details comes here */}
                    <div className="border-2 border-black flex flex-row justify-center items-center">
                        <p>Quantity</p>
                        <input type="text" value={1} placeholder="1" />
                    </div>

                    {/* finally comes the add to cart button for this purpose */}
                    <button className="text-white bg-red-500 flex flex-row justify-center items-center px-3 py-2">
                       <IoCartOutline></IoCartOutline>
                        <p>Add to Cart</p>
                    </button>
                </div>
            </div>
        </div>
    )
}