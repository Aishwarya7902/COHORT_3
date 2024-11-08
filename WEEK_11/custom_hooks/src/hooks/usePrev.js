import { useEffect, useRef } from "react";

export const usePrev=(value)=>{
    const ref=useRef();
    useEffect(()=>{
      ref.current=value;
    },[value])
    return ref.current;  //IMPORTANT **** ref.current will be returned first ..useEffect will be called later
}