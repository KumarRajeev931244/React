import { useEffect, useState } from "react";

// In react there is standarisation we use "use"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`).then((response) => response.json()).then((response) => setData(response[currency])) //here we are accessing the object by square bracket.       
    }, [currency])
    console.log(`data1: ${data}`);
    return data
    
}
export default useCurrencyInfo;