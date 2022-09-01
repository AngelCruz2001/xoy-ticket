import React from 'react'
import './Ticket.scss'
import { Card } from 'components';

// import * as moment from 'moment';
import 'moment/locale/es';
// moment.locale('es')
// import 'moment-timezone';
import { useNavigate } from "react-router-dom";

import bsPlay from "assets/tickets/bsPlay.svg";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import { startGetTickets } from 'store/tickets/thunks';
import { TicketResp } from 'interfaces/ticket.resp';
import { Datum } from '../../interfaces/ticket.resp';

const dataMatch = [{
    id: 1,
    IdJuego: "2608221930",
    Equipo1: "CHIHUAHUA FC",
    Equipo2: "CIMARRONES DE SONORA FC",
    Fecha: "2022-08-26T00:00:00.000Z",
    Hora: "1970-01-01T19:30:00.000Z",
    Estado: 0
}]



export const TicketContainer = () => {
    const dispatch = useAppDispatch();
    const { tickets } = useAppSelector(state => state.tickets);

    useEffect(() => {
        dispatch(startGetTickets())
    }, [dispatch])

    const [dataMatch, setDataMatch] = useState<Datum[] | null>()

    useEffect(() => {
        setDataMatch(tickets?.map((ticket) => (
            {
                ...ticket,
                JuegoDatos: {
                    ...ticket.JuegoDatos,
                    // Fecha: moment(juego.Fecha, true).format('D/M/Y');
                    // juego.Hora = moment(juego.Hora).format('h:mm a');,
                }
            }
        )))
    }, [tickets])



    let navigate = useNavigate();


    const onClickTicket = (transaction: string) => {
        navigate(`/seats/${transaction}`);
    }

    return (
        <>

            <h1 className='title'>Ultimas compras</h1>
            <div className="tickets">
                {
                    tickets && tickets.map(({ Transaccion, JuegoDatos }) => (
                        <Card key={Transaccion}>
                            <div className='itemTicket' onClick={() => onClickTicket(Transaccion)}>
                                <div className="imageContainer">
                                    <img src={bsPlay} alt="" />
                                </div>

                                <div className="infoContainer">
                                    <div className="infoTitle">
                                        <p>{JuegoDatos.Equipo1}<br /> vs <br />{JuegoDatos.Equipo2}</p>
                                    </div>

                                    <div className="itemDate">
                                        <p>{JuegoDatos.Fecha}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                    ))
                }


            </div>


        </>
    )
}
