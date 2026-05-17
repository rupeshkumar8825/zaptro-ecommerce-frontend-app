import { FooterComponent } from "../components/FooterComponent";
import { useRecoilValue } from "recoil";
import { getAllProductSelectors, getListOfAllUniqueCategoriesSelector } from "../state/productSelectors";
import type { ProductDetail } from "../types/appTypes";
import { IoCartOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { FilterComponent } from "../components/FilterComponent";
import { ProductCardComponent } from "../components/ProductCardComponent";
import { PRODUCT_MAX_PRICE } from "../constants/appConstants";

export const ProductsPage = () => {
    // all the recoil related variable comes here 
    const allProductList = useRecoilValue(getAllProductSelectors);
    const allCategoryList = useRecoilValue(getListOfAllUniqueCategoriesSelector);
    console.log("the list of all the products that was fetched  in the products page is as follows", allProductList)


    // all the component states comes here 
    const [filteredList, setFilteredList] = useState<ProductDetail[]>([]);
    const [currCategoryCheckList, setCurrCategoryCheckList] = useState<boolean[]>([]);
    const [currPriceRange, setCurrPriceRange] = useState<number>(5000);
    const [searchKeyWord, setSearchKeyWord] = useState<string>("");

    
    // all the handlers like the button handlers, onchange handlers and so on comes here
    const handlePriceChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setCurrPriceRange(Number(e.target.value))
        console.log("the price range changed to : ", currPriceRange);
    }

    const handleCategoryChange = (index : number) => {
        // we just need to toggle the category selection state of that particular index
        let categoryCheckListCopy = [...currCategoryCheckList];
        categoryCheckListCopy[index] = !categoryCheckListCopy[index]
        setCurrCategoryCheckList(categoryCheckListCopy)
    }

    const handleSearchKeyWordChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyWord(e.target.value)
    }

    const handleResetFilter = () => {
        /**
         * Actions to take : 
         *      1. Make the search text to empty value
         *      2. Select "ALL" categories 
         *      3. Set the price to MAX_PRICE_RANGE
         */
        setSearchKeyWord("");
        setCurrPriceRange(PRODUCT_MAX_PRICE)
        setCurrCategoryCheckList(resetCategorySelection)
    }
    

    const getFilteredProducts = () => {
        // check if the "ALL" is selected. if it is selected then we need 
        // do the following : 
        //  1. filter based on the price range
        //  2. filter based on the search keyword
        if((currCategoryCheckList[0] === true)){
            console.log("Finding the products with the applied filter");
            console.log("Below are the user's filter settings", searchKeyWord, currPriceRange, currCategoryCheckList);
            // we need to return all the products that we have
            const listOfFilteredProducts = allProductList.filter((productItem : ProductDetail) => (productItem.description.includes(searchKeyWord) || productItem.title.includes(searchKeyWord)) 
                                                                                                && (productItem.price <= currPriceRange));
            // say everything went fine 
            setFilteredList(listOfFilteredProducts)
            return;
        }else {
            console.log("Finding the products with the applied filter");
            console.log("Below are the user's filter settings", searchKeyWord, currPriceRange, currCategoryCheckList);
            // lets get all the categories  which user has selected 
            const selectedCategoryList : string[] = allCategoryList.filter((category : string, index : number) => currCategoryCheckList[index] === true);
            // this means that we also need to include the category into the filter criteria for this purpose 
            const listOfFilteredProducts = allProductList.filter((productItem : ProductDetail) => (productItem.description.includes(searchKeyWord) || productItem.title.includes(searchKeyWord))
                                                                                                    && (productItem.price <= currPriceRange)
                                                                                                    && (selectedCategoryList.includes(productItem.category)))
            // say everything went fine 
            setFilteredList(listOfFilteredProducts);
            return;
        }
        
    }
        
    const resetCategorySelection = () => {
        let categorySelection : boolean[] = [];

        allCategoryList.forEach(element => {
            if(element === "ALL"){
                categorySelection.push(true)
            }else {
                categorySelection.push(false);
            }
        });

        // say everything went fine 
        return categorySelection;
    }
    
    
    // all the application hooks comes here 
    useEffect(() => {
        // this page has rendered freshly lets try to first set 
        // category selection to its initial state
        // it always be "ALL"
        // and we have reserved the first element of the array as "ALL"
        let categorySelection = resetCategorySelection()
        setCurrCategoryCheckList(categorySelection)
    }, [])

    // now whenever the user selection on the price, category selection 
    // or the search changes then we need to update the filtered product list
    // lets try to do that using the useeffect hookitself
    useEffect(() => {
        // call the filtered list function
        getFilteredProducts()
    }, [currPriceRange, currCategoryCheckList, searchKeyWord])

    // all the UI related JSX codes comes here for this purpose
    return (
        <div>
            <div className="grid grid-cols-4">
                
                <FilterComponent categoryList = {allCategoryList} currPriceRange={currPriceRange} searchKeyWord={searchKeyWord} categorySelectionCheckList = {currCategoryCheckList} handleCategorySelectionChange={handleCategoryChange} handlePriceChange={handlePriceChange} handleSearchKeyWordChange={handleSearchKeyWordChange} handleResetFilter={handleResetFilter} ></FilterComponent>
                {/* Product listing section comes here */}
                <div className="col-span-3 flex flex-row flex-wrap justify-between items-center p-5">
                    {
                        filteredList.map((currProduct : ProductDetail, index : number) => (
                            <ProductCardComponent key={index} image={currProduct.image} title={currProduct.title} price={currProduct.price}></ProductCardComponent>
                        ))
                    }
                </div>
            </div>

            <FooterComponent></FooterComponent>
        </div>
    )
}