import React, {useState} from 'react'

const useCurrency = () => {
    const [currency, setCurrency] = useState({
       dollar:{
         name: "Dollar",
         symbol: "$",         
       },
       naira:{
           name:"Naira",
           symbol:"",
           value: 450
       }
    })

    

    return (
        currency
    )
}

export default useCurrency
