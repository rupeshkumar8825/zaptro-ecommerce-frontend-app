// this is the page where we will be showing the complete details of a given product given it id

import { useEffect, useState } from "react"
import type { ProductDetail } from "../types/appTypes"
import { useRecoilValue } from "recoil"
import { getAllProductSelectors } from "../state/productSelectors"
import { useParams } from "react-router-dom"
import { SiAframe } from "react-icons/si"

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
        <div>
            hi this is the products page for this purpose
        </div>
    )
}