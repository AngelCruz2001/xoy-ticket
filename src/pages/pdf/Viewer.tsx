import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { DocumentPdf } from './DocumentPdf'
export const Viewer = ({ qr }: { qr: string }) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <PDFViewer
                width="100%"
                height="100%"

            >
                <DocumentPdf qr={qr}/>
            </PDFViewer>
        </div>
    )
}
