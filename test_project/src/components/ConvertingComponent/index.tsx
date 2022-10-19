import React, {useEffect, useState, useRef} from 'react';
import { Header } from '../HeaderComponent';
import { Block } from '../BlocksComponent';
import '../../../src/index.scss'

export const ConvertingComponent = () => {

  const [fromCurrency, setFromCurrency] = useState('UAH' as string)
  const [toCurrency, setToCurrency] = useState('USD' as string)
  const [fromPrice, setFromPrice] = useState(0 as number)
  const [toPrice, setToPrice] = useState(0 as number)
  
  const countsRef = useRef<HTMLElement | any>(null)

  useEffect(() => {
      fetch('https://v6.exchangerate-api.com/v6/2857749dfecf23aa3c2a4261/latest/USD')
          .then((res) => res.json())
          .then((response) => {
              countsRef.current = response.conversion_rates;
          }).catch(err => {
          console.log(err)
          alert('something went wrong')
      })
  },[])

  useEffect(() => {
      onChangeFromPrice(fromPrice)
  }, [fromPrice, fromCurrency])

  useEffect(() => {
      onChangeToPrice(toPrice)
  }, [toPrice, toCurrency])

  const onChangeToPrice = (value: number) => {
      const result = (countsRef.current[fromCurrency as keyof typeof useState] / countsRef.current[toCurrency as keyof typeof useState]) * value;
      setFromPrice((Math.round((result) * 100) / 100))
      setToPrice(value)
  }
  
  const onChangeFromPrice = (value: number) => {
      const price = value / countsRef.current[fromCurrency as keyof typeof useState]
      const result = price * countsRef.current[toCurrency as keyof typeof useState]
      setFromPrice(value)
      setToPrice(result)
  }


  return (
    <>
    <Header />
    <div className="App">
                <Block value={fromPrice}
                       currency={fromCurrency}
                       onChangeCurrency={setFromCurrency}
                       onChangeValue={onChangeFromPrice}
                />
                <Block value={toPrice}
                       currency={toCurrency}
                       onChangeCurrency={setToCurrency}
                       onChangeValue={onChangeToPrice}
                />
            </div>
    </>
  )
}

