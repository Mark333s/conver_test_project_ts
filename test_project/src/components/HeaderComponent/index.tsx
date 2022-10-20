import * as React from "react";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useFetch } from "../customHook";
import { useAppSelector } from "../../hooks";




export const Header = () => {

    const currency = useAppSelector(state => state?.currency?.counts[0]?.currency)

    console.log(currency  , 'currency');
    
   

    const url = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
    const {loading, error } = useFetch({ url });


    return (
        <>
            <AppBar style={{ background: '#ffff32' }}>
                <Toolbar>
                    <Typography variant="h6"
                        component="div" sx={{ flexGrow: 12, color: '#000000' }}>
                        Average rate at the moment:
                    </Typography>
                    <Typography variant="h6"
                        component="div" sx={{ flexGrow: 25, color: '#000000' }}>
                        {1}€ = {currency && currency[32]?.rate}UAH
                    </Typography>
                    <Typography variant="h6"
                        component="div" sx={{ flexGrow: 30, color: '#000000' }}>
                        {1}$ = {currency && currency[25]?.rate}UAH
                    </Typography>
                    <Typography variant="h6"
                        component="div" sx={{ flexGrow: 30, color: '#000000' }}>
                        {1}£ = {currency && currency[24]?.rate}UAH
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}