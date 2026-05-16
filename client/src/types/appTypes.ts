// here we will define our custom made typescript types that would be used 
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
    hoverStop : boolean, 
    autoPlayDuration : number
}