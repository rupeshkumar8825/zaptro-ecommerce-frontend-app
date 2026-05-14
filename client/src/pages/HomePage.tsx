import React, { useEffect, useState } from "react";
import { CaraouselComponent } from "../components/CaraouselComponent";
import axios from "axios";
import type { ProductDetail } from "../types/appTypes";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getAllProductSelectors } from "../state/productSelectors";
import { allProductListAtom } from "../state/productAtoms";

export const HomePage = () => {


    // lets use the recoil itself 
    const allProductList : ProductDetail[] = useRecoilValue(getAllProductSelectors)
    const setProductList = useSetRecoilState(allProductListAtom);
    
    const fetchDemoProducts = async () => {
        const getResponse = await axios.get("https://fakestoreapi.com/products")
        console.log("the response of the fake api call is as follows \n", getResponse);
        const productListData : ProductDetail[] = getResponse.data;
        if(!productListData || productListData.length == 0){
            // this means that there is no data at all
            console.log("Failed to fetch the list of products");
            // lets set the state variable for this purpose
            setProductList([]);
            // say everything went fine 
            return;            
        }

        // else set the relevant state to store the value of the product list 
        // may be here we will be using the selectors for this purpose

    }

    // lets fetch the list of demo ecommerce products for our frontend project 
    // for this purpose
    useEffect(() => {
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
        <div>
            
            <CaraouselComponent></CaraouselComponent>
        </div>
    )
}