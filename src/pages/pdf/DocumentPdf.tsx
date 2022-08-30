import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

import baseBack from 'assets/pdf/baseBack.jpeg'
import brand1 from 'assets/brands/brand1.png'
import brand2 from 'assets/brands/brand2.png'
import brand3 from 'assets/brands/brand3.png'
import brand4 from 'assets/brands/brand4.png'
import brand5 from 'assets/brands/brand5.png'
import brand6 from 'assets/brands/brand6.png'
import xoy from 'assets/xoyTicketColorFont.png'
import promo from 'assets/pdf/promo.png'

const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
const styles = StyleSheet.create({
    page: {
    },
    brands: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '8%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0026A6',
    },
    body: {
        display: 'flex',
        flexDirection: 'row',
        height: '45%',
        borderBottom: '1px solid #CECECE',
        borderBottomStyle: 'dashed',
    },
    body__leftside: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        height: '100%',
        borderRight: '1px solid #CECECE',
        borderRightStyle: 'dashed',
        alignItems: 'center',
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30%',
    },
    image: {
        width: '70%',
        objectFit: 'contain',
    },
    vsContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '80%',
        fontSize: '14px',
        textAlign: 'center',
        marginBottom: '10px',
        color: 'red',
    },
    sideData: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        borderTop: '1px solid #0026A6',
        padding: '10px',

    },
    sideDataInfo: {
        display: 'flex',
        width: '95%',
        fontSize: '12px',
    },
    itemText: {
        marginBottom: '15px',
        color: '#0026A6',
    },
    itemTextTitle: {
        fontWeight: 'bold',
        fontSize: '14px',
        marginBottom: '5px',
        color: 'black',
    },
    body__rightside: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        height: '100%',
        borderRight: '1px solid #CECECE',
        borderRightStyle: 'dashed',
        alignItems: 'center',
    },
    qrContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px',
        width: '100%',
        height: '30%',
    },
    qr: {
        width: '30%',
        objectFit: 'cover',
    },
    ticketInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        borderTop: '1px solid #0026A6',
        padding: '10px',
    },
    ticketInfoDate: {
        width: '80%',
        fontSize: '14px',
        textAlign: 'center',
        marginBottom: '10px',
        color: 'red',
        height: '15%',
        fontWeight: 'bold',
    },
    ticketInfoText: {
        display: 'flex',
        width: '95%',
        fontSize: '12px',
        marginBottom: '15px',
        color: 'red',
    },
    ticketInfoTextTitle: {
        fontWeight: 'bold',
        fontSize: '14px',
        marginBottom: '10px',
        color: 'black',
    },
    sectionSeat: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    price: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',

    },
    additional: {
        display: 'flex',
        flexDirection: 'row',
        height: '40%',
    },
    addleftside: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        height: '100%',
        borderRight: '1px solid #CECECE',
        borderRightStyle: 'dashed',
        alignItems: 'center',
    },
    addImgContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',

    },
    addImg: {
        height: '90%',
        objectFit: 'contain',
    },
    addrightside: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        fontSize: '12px',
        height: '100%',
        borderRight: '1px solid #CECECE',
        borderRightStyle: 'dashed',
        alignItems: 'center',
    },
    addInfo: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',

    },
    addInfoText: {
        display: 'flex',
        width: '270px',
        padding: '10px',
        paddingRight: '20px',
        marginBottom: '10px',
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '7%',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#0026A6',
        fontSize: '10px',
    },
    fooleftside: {
        display: 'flex',
        flexDirection: 'row',
        width: '47%',
        height: '80%',
        justifyContent: 'space-between',
    },
    foorightside: {
        display: 'flex',
        flexDirection: 'column',
        width: '47%',
        height: '100%',
    },
    footextleft: {
        color: '#c6c7c7',
        fontSize: '8px',
        width: '200px',
    },
    fooTerm: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: '10px',
        marginBottom: '5px',
    },


    fooQrContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
    },
    fooQr: {
        width: '100%',
        objectFit: 'contain',
    },

});


export const DocumentPdf = ({ qr }: { qr: string }) => {

    const dataUser = {
        name: 'Dayana Labrador Espino',
        email: 'day@gmail.com',
        purchaseDate: '8/25/2022 8:24:14 PM',
        localizator: '7650984663',
        zone: 'LATERAL',
        section: 'GENERAL - J',
        row: '1',
        seat: '1',
        type: 'ADULTO',
        price: '$60.00',
        charge: '$6.00',
    }

    return (
        <Document
            title="Boletos"
        >
            <Page
                style={styles.page}
            >
                <View style={styles.brands}> {/* BRANDS */}
                    {
                        brands.map((brand, index) => (
                            <Image
                                key={index}
                                src={brand}
                                style={{
                                }}
                            />
                        ))
                    }
                </View>
                <View style={styles.body}>


                    <View style={styles.body__leftside}>

                        <View style={styles.imageContainer}>
                            <Image
                                src={xoy}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.vsContainer} >
                            <Text >
                                CHIHUAHUA FC
                            </Text>
                            <Text>
                                VS
                            </Text>
                            <Text>
                                CIMARRONES DE SONORA FC
                            </Text>
                        </View>

                        <View style={styles.sideData}>
                            <View style={styles.sideDataInfo}>
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTextTitle}>
                                        Nombre:
                                    </Text>

                                    <Text>
                                        {dataUser.name}
                                    </Text>
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTextTitle}>
                                        Correo:
                                    </Text>
                                    <Text >
                                        {dataUser.email}
                                    </Text>
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTextTitle}>
                                        Fecha de compra:
                                    </Text>
                                    <Text>
                                        {dataUser.purchaseDate}
                                    </Text>
                                </View>
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTextTitle}>
                                        Localizador:
                                    </Text>
                                    <Text>
                                        {dataUser.localizator}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.body__rightside}>
                        <View style={styles.qrContainer}>
                            <Image source={{ uri: qr }} />
                        </View>

                        <View style={styles.ticketInfo}>
                            <View style={styles.ticketInfoDate}>
                                <Text>
                                    Viernes 26 de Agosto 2022
                                </Text>
                                <Text>
                                    19:30 Horas
                                </Text>
                            </View>
                            <View style={styles.ticketInfoText}>
                                <View style={styles.itemText}>
                                    <Text style={styles.ticketInfoTextTitle}>
                                        Zona:
                                    </Text>
                                    <Text>
                                        {dataUser.zone}
                                    </Text>
                                </View>
                                <View style={styles.sectionSeat}>
                                    <View style={styles.itemText}>
                                        <Text style={styles.ticketInfoTextTitle}>
                                            Sección:
                                        </Text>
                                        <Text>
                                            {dataUser.section}
                                        </Text>
                                    </View>
                                    <View style={styles.itemText}>
                                        <Text style={styles.ticketInfoTextTitle}>
                                            Fila:
                                        </Text>

                                        <Text>
                                            {dataUser.row}
                                        </Text>
                                    </View>
                                    <View style={styles.itemText}>
                                        <Text style={styles.ticketInfoTextTitle}>
                                            Asiento:
                                        </Text>
                                        <Text>
                                            {dataUser.seat}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.itemText}>
                                    <Text style={styles.ticketInfoTextTitle}>
                                        Tipo:
                                    </Text>
                                    <Text>
                                        {dataUser.type}
                                    </Text>
                                </View>

                                <View style={styles.price}>
                                    <View style={styles.itemText}>
                                        <Text style={styles.ticketInfoTextTitle}>
                                            Precio:
                                        </Text>
                                        <Text>
                                            {dataUser.price}
                                        </Text>
                                    </View>
                                    <View style={styles.itemText}>
                                        <Text style={styles.ticketInfoTextTitle}>
                                            Cargo por servicio:
                                        </Text>
                                        <Text >
                                            {dataUser.charge}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>



                </View>

                <View style={styles.additional}>
                    <View style={styles.addleftside}>

                        <View style={styles.addImgContainer}>
                            <Image
                                src={promo}
                                style={styles.addImg}
                            />
                        </View>
                    </View>

                    <View style={styles.addrightside}>
                        <View style={styles.addInfo}>
                            <Text style={styles.addInfoText}>
                                1. Para ingresar al recinto, presentar tus
                                boletos electrónicos impresos en una hoja blanca o
                                directamente desde tu celular mediante la página
                                www.xoyticket.com
                            </Text>
                            <Text style={styles.addInfoText}>
                                2. La compra de este boleto aparecerá en tu estado de
                                cuenta como XOYTICKET.
                            </Text>
                            <Text style={styles.addInfoText}>
                                3. No existen cambios o devoluciones en la compra del
                                este boleto electrónico.
                            </Text>
                            <Text style={styles.addInfoText}>
                                4. En caso de detectar hojas duplicadas de este boleto.
                                se retirarán del estadio a todos los poseedores
                                del mismo.
                            </Text>
                            <Text style={styles.addInfoText}>
                                Este boleto fisico y/o electrónicos es único e
                                instransferible, su uso adecuado y manejo es
                                responsabilidad del cliente.
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.footer}>

                    <View style={styles.fooleftside}>
                        <View style={styles.footextleft}>
                            <Text style={styles.fooTerm}>
                                TÉRMINOS Y CONDICIONES:
                            </Text>
                            <Text>
                                Al adquirir este boleto via electrónica o en alguno de
                                los puntos de venta fisico, te obligas a respetar los
                                términos y condiciones disponibles en el siguiente
                                codigo QR
                            </Text>
                        </View>
                        <View style={styles.fooQrContainer}>
                            <Image style={styles.fooQr} source={{ uri: qr }} />
                        </View>
                    </View>

                    <View style={styles.foorightside}>


                    </View>
                </View>
            </Page>
        </Document>
    )
}
