import { useState } from 'react';
import "./Navbar.scss"
import xoyWhite from "assets/xoyTicketWhite.png"
import ham from "assets/ham.svg"
import { Searchbar } from "components/searchbar"
import { NavbarResponsive } from "./responsive"

export const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false)

    return (

        <>
            {
                isOpen
                    ? <NavbarResponsive setIsOpen={setIsOpen} />
                    :

                    <div className='container'>
                        <div className="container__items">
                            <div className="container__items__item--logo">
                                <img src={xoyWhite} alt="Logotipo de la empresa XoyTicket" />

                            </div>
                            {/* <div
                                className="container__items__hamburger__button"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <img src={ham} alt="Hamburguer Menu icon" />
                            </div> */}

                            {/* <div className="container__items__item">
                                <p>Inicio</p>

                            </div>

                            <div className="container__items__item">
                                <p>Eventos</p>
                            </div>

                            <div className="container__items__item">
                                <p>Términos y Condiciones</p>
                            </div>

                            <div className="container__items__item--search">
                                <Searchbar />
                            </div> */}

                        </div>
                    </div>

            }
        </>


    )
}
