import { selector } from "recoil";
import { authTokenAtom, userAtom } from "./authAtoms";

// derived boolean variable "logged in"?
export const isLoggedInSelector = selector<boolean>({
    key : "isLoggedInSelector", 
    get : ({get}) => {
        const token = get(authTokenAtom);
        return Boolean(token)
    }
})


export const greetingSelector = selector<string>({
    key : "greetingSelector", 
    get : ({ get }) => {
        const user = get(userAtom);
        return user? `Hello, ${user.name}` : "Hello, Guest"
    }
});