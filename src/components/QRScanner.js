import React from "react";
import { QrReader } from "react-qr-reader";
import axios from "axios";
import "../styles/qrscanner.css"; // Import the CSS file

const QRScanner = ({ userId }) => {
    const handleError = (err) => {
        console.error(err);
    };
    const API_BASE_URL = process.env.REACT_APP_API_URL

    const handleScan = async (result) => {
        if (result) {
            try {
                const scannedData = JSON.parse(result.text);
                const response = await axios.post(`https://d7bc-103-99-188-128.ngrok-free.app/api/wishes/scan_qr`, {
                    from_user: userId,
                    to_user: scannedData.user_id
                });
                alert(response.data.message);
            } catch (err) {
                alert(err.response?.data?.message || "Error processing QR code");
            }
        }
    };

    return (
        <div className="qr-scanner-container">
            <h2 style={{color:"white"}}>📷 Scan QR Code</h2>
            <div className="qr-scanner-box">
                <QrReader
                    onResult={handleScan}
                    onError={handleError}
                    constraints={{ facingMode: "environment" }}
                    style={{ width: "100%" }}
                />
            </div>
            <p className="qr-scanner-instructions">Align the QR code within the scanner area.</p>
        </div>
    );
};

export default QRScanner;
