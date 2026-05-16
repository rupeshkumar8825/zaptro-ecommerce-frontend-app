import React, { useEffect, useState } from "react";
import { CaraouselComponent } from "../components/CaraouselComponent";
import axios from "axios";
import type { ProductDetail } from "../types/appTypes";
import { getAllProductSelectors } from "../state/productSelectors";
import { allProductListAtom } from "../state/productAtoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

export const HomePage = () => {

    // application states to use comes here 
    const setAllProductList = useSetRecoilState(allProductListAtom);
    const allProductList : ProductDetail[] = useRecoilValue(getAllProductSelectors);



    // components use statews to be used comes here 
    


    // const allProductList = useRecoilValue(allProductListAtom)
    // console.log("the value of the allProductlist from selector is as follows\n", allProductList)
    // const allproduc
    const fetchDemoProducts = async () => {
        const getResponse = await axios.get("https://fakestoreapi.com/products")
        console.log("the response of the fake api call is as follows \n", getResponse);
        const productListData = getResponse.data;
        if(!productListData || productListData.length == 0){
            // this means that there is no data at all
            console.log("Failed to fetch the list of products");
            // lets set the state variable for this purpose
            setAllProductList([]);
            // say everything went fine 
            return;            
        }

        // this means that we have got the some list of products 
        // set this into the atom itself and may be the selector will update its value automatically 
        setAllProductList(productListData)

    }

    // lets fetch the list of demo ecommerce products for our frontend project 
    // for this purpose
    useEffect(() => {
        console.log("Home page rendered for the first time");
        // we will fetch the list of demo product when the home page renders for the first time 
        fetchDemoProducts()
    }, [])

    // depending on whether we found the product we need to show different GUIs for this purpose 
    if(!allProductList) {
        // there is no product list defined it seems 
        return (
            <div>
                Something went wrong.
            </div>
        )
    }

    if(allProductList.length == 0){
        return (
            <div>
                Product not found
            </div>
        )
    }

    // otherwise lets show the list of the products for this purpose
    return (
        <div className="">
            <CaraouselComponent autoPlay={true} hoverStop={true} autoPlayDuration={3000}></CaraouselComponent> 
        </div>
    )
}