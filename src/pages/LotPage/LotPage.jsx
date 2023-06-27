import React, { useState } from 'react'
import AppHeader from '../../widgets/Header/AppHeader.jsx'
import Lot from '../../shared/ui/lot/Lot'

const LotPage = ({ title }) => {
    return (
        <>
            <AppHeader title={title} />
            <Lot />
        </>
    )
}

export default LotPage
