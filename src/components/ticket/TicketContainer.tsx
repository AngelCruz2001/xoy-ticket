import React from 'react'
import './TicketContainer.scss'
import { Navbar, } from 'components';
import { Footer } from '../footer/Footer';
import { Card } from 'components/card/Card';
export const TicketContainer = () => {
    return (
        <>
            <Navbar />

            <Card>
                <h1>Caca</h1>
            </Card>

            <Footer />
        </>
    )
}
