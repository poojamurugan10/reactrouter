import React from 'react';
import useApiCall from './useApiCall';


const CompA = () => {
    const [val]= useApiCall("https://fakestoreapi.com/products")
  return (
    <div>
      {val && val.map((ele)=>{
      return(
        <div key={ele.id}>
           <h1>{ele.title}</h1>
           <img src={ele.image}/>
           <h3>{ele.price}</h3>
           <p>{ele.description}</p>
           <h3>{ele.category}</h3>
           <span>{ele.rating.rate}</span>
           <span>{ele.rating.count}</span>
        </div>
      )
     })}
    </div>
    );
};

export default CompA;