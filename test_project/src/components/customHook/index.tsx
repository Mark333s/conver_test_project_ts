import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { getCurrency } from "../reduxToolkit/reduxSlice/currencySlice";

interface customHookProps {
  url: string
}

 
export const useFetch = ({url}: any) => {
  const [usd, setUsd] = useState(0 as number);
  const [gbp, setGbp] = useState(0 as number);
  const [eur, setEur] = useState(0 as number);
  const [loading, setloading] = useState(true as boolean);
  const [error, seterror] = useState("" as string);

  const dispatch = useAppDispatch()
 
  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data, 'datadata');
      
        seterror(data.error)
        dispatch(getCurrency(data))
        // setUsd(data[25].rate)
        // setGbp(data[24].rate)
        // setEur(data[32].rate)
        setloading(false)
    })
  }, [url])
 
  return { usd, gbp, eur, loading, error };
}
 
