// here we will define our custom made typescript types that would be used 

import type { ReactNode } from "react"

// across the complete application for this purpose 
export type AddressInformation = {
    county : string, 
    city : string, 
    suburb : string 
}   


export type ProductDetail = {
    id : string, 
    title : string,
    description : string, 
    image : string, 
    category : string, 
    price : number, 
    rating : number
}


export type CaraouselComponentProps = {
    autoPlay : boolean, 
    pauseOnHover : boolean, 
    autoPlayDuration : number
}

export type SingleServiceComponentProps = {
    icon : ReactNode
    serviceHeadingName : string,
    serviceDescriptionName : string
}


export type ProductCardComponentProps = {
    id : string,
    image : string, 
    title : string,
    price : number
}


export type FilterComponentProps = {
    categoryList : string[], 
    currPriceRange : number, 
    searchKeyWord : string,
    categorySelectionCheckList : boolean[], 
    handleCategorySelectionChange : (index : number) => void;
    handlePriceChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
    handleSearchKeyWordChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
    handleResetFilter : () => void;
}


export type PaginationComponentProps = {
    currActivePageNumber : number, 
    totalNumberOfPages : number, 
    previousPageButtonHandler : () => void, 
    nextPageButtonHandler : () => void
    // handleMiddlePageNumberClick : () => void
}
