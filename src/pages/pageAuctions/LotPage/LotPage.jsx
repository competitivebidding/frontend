import React, { useState } from 'react'
import AppHeader from '../../../components/appHeader/AppHeader.jsx'
import Lot from './Lot'

const LotPage = ({ title }) => {
    return (
        <>
            <AppHeader title={title} />
            <Lot />
        </>
    )
}

export default LotPage