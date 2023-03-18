import React,{useState,useEffect,createContext} from "react";
//API
import { getProducts } from "../services/api";

export const PruductsContext=createContext();

const PruductsContextProvider=({children})=>{
    const [products,setProducts]=useState([]);
    
    useEffect(()=>{
        const fetchAPI=async()=>{
           setProducts(await getProducts())
        }
        fetchAPI();
    },[]);
    return(
        <PruductsContext.Provider value={products}>
           {children}
        </PruductsContext.Provider>
    )
}
export default PruductsContextProvider