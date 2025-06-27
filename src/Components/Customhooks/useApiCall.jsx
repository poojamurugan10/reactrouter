import React, { useEffect, useState } from 'react';

const useApiCall = (url) => {
    const [item,setItem]= useState(null)


    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
    },[url])
    return[item]
};

export default useApiCall;