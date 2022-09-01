import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { startGetSeats } from '../../store/seats/thunks';
import QRCode from 'qrcode.react';
export const Seats = () => {
    const { idTransaction } = useParams();
    console.log("idTransaction", idTransaction);
    const dispatch = useAppDispatch();
    const { seats } = useAppSelector(state => state.seats);
    useEffect(() => {
        idTransaction !== undefined && dispatch(startGetSeats(idTransaction));
    }, [dispatch, idTransaction]);
    console.log("Seats cargo");
    const handleDownloadSeat = (seat) => {
        console.log("seat", seat);
    };
    const [base64, setBase64] = useState("");
    useEffect(() => {
        const qrCodeCanvas = document.querySelector('canvas');
        if (qrCodeCanvas) {
            setBase64(qrCodeCanvas.toDataURL());
            console.log(qrCodeCanvas.toDataURL());
        }
    }, []);
    return (<>

            {seats?.map((seat, index) => (<>
                        <QRCode value={seat.id} style={{
                display: 'none'
            }}/>
                        <div className='seatContainer' key={index}>
                            <div className="location">
                                <div>
                                    <p className='titleSeat'>Zona</p>
                                    <p className='text'>{seat.zona}</p>
                                </div>

                                <div>
                                    <p className='titleSeat'>Asiento</p>
                                    <p className='text'>{seat.columna}</p>
                                </div>

                                <div>
                                    <p className='titleSeat'>Sección</p>
                                    <p className='text'>{seat.seccion}</p>
                                </div>
                            </div>

                            <div className="info">
                                <div>
                                    <p className='titleSeat'>Fecha</p>
                                    <p className='text'>{seat.fecha}</p>
                                </div>
                                <div>
                                    <p className='titleSeat'>Costo</p>
                                    <p className='text'>{seat.importe}</p>
                                </div>
                            </div>

                            <div className="download">
                                {/* <PDFDownloadLink document={<DocumentPdf qr={base64} dataUser={seat} />} fileName={`${seat.nombre}.pdf`}>
                {({ blob, url, loading, error }) => (base64 !== "" && loading ? 'Cargando documento' : 'Descargar')}
            </PDFDownloadLink> */}
                                {/* <p className='titleSeat' onClick={() => handleDownloadSeat(seat)}>Descargar</p> */}
                            </div>
                        </div>
                    </>))}
        </>);
};
//# sourceMappingURL=Seats.jsx.map