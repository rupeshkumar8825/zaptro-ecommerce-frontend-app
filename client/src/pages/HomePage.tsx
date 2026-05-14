import React, { useEffect } from "react";
import { CaraouselComponent } from "../components/CaraouselComponent";
import axios from "axios";

export const HomePage = () => {

    
    const fetchDemoProducts = async () => {
        const productListDataResponse = await axios.get("https://fakestoreapi.com/products")
        console.log("the response of the fake api call is as follows \n", productListDataResponse);
    }

    // lets fetch the list of demo ecommerce products for our frontend project 
    // for this purpose
    useEffect(() => {
        // we will fetch the list of demo product when the home page renders for the first time 
        fetchDemoProducts()
    }, [])


    return (
        <div>
            <CaraouselComponent></CaraouselComponent>
        </div>
    )
}