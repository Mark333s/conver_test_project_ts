import React, { useEffect, useState, useRef } from 'react';
import { Header } from '../HeaderComponent';
import { Block } from '../BlocksComponent';
import '../../../src/index.scss'
import { useFetchCurrency } from '../customHook/useFetchCurrency';

export const ConvertingComponent = () => {

    const [fromCurrency, setFromCurrency] = useState('UAH')
    const [toCurrency, setToCurrency] = useState('USD')
    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(0)

    const url = 'https://v6.exchangerate-api.com/v6/2857749dfecf23aa3c2a4261/latest/USD'
    const {countsRef} = useFetchCurrency({url})

    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromPrice, fromCurrency])

    useEffect(() => {
        onChangeToPrice(toPrice)
    }, [toPrice, toCurrency])

    const onChangeToPrice = (value: number) => {
        const result = (countsRef?.current[fromCurrency as keyof typeof useState] / countsRef?.current[toCurrency as keyof typeof useState]) * value;
        const valueRound = Math.round(value)
        setFromPrice((Math.round((result) * 100) / 100))
        setToPrice(value)
    }

    const onChangeFromPrice = (value: number) => {
        if (value) {
            const price = value / countsRef?.current[fromCurrency as keyof typeof useState]
            const result = price * countsRef?.current[toCurrency as keyof typeof useState]
            setFromPrice(value)
            setToPrice(result)
        }
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

