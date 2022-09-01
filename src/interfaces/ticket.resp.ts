
export interface TicketResp {
    message: string;
    data: Datum[];
}

export interface Datum {
    transaccion: string;
    id: number;
    Nombre: string;
    Transaccion: string;
    Importe: number;
    Datos: string;
    idpago: string;
    JuegoDatos: JuegoDatos;
}

export interface JuegoDatos {
    id: number;
    IdJuego: string;
    Equipo1: string;
    Equipo2: string;
    Fecha: string;
    Hora: string;
    Estado: number;
}
