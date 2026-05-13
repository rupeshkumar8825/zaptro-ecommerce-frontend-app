import { atom } from "recoil";

export type User = {
    id : string, 
    name : string, 
    email : string
}


/**
 * Atom to get the authentication token of the user which would be sent 
 * to the backend for every request
 */
export const authTokenAtom = atom<string | null>({
    key : "authTokenAtom", 
    default : null
});



/**
 * Atom to fetch the loggedin user information so that 
 * the user data could be accessed across the application for this purpose
 */
export const userAtom = atom<User | null>({
    key : "userAtom", 
    default : null
})