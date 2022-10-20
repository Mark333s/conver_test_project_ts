import { useEffect, useState, useRef } from "react";
import { useAppDispatch } from "../../hooks";
import { getCurrency } from "../reduxToolkit/reduxSlice/currencySlice";

interface customHookProps {
    url: string
}


export const useFetchCurrency = ({ url }: any) => {
    const [data, setData] = useState('')
    const [loading, setloading] = useState(true as boolean);
    const [error, seterror] = useState("" as string);

    
    const countsRef = useRef<HTMLElement | any>(0)

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((response) => {
                countsRef.current = response.conversion_rates;
                seterror(response.error)
                setloading(false)
            })
    }, [url])

    return { data, countsRef, loading, error };
}

