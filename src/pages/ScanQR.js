import React, { useState } from "react";
import QRScanner from "../components/QRScanner";

const ScanQR = () => {
    const [userId, setUserId] = useState("");

    return (
        <div>
            <h1>Scan QR Code</h1>
            <input
                type="text"
                placeholder="Enter your User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            {userId && <QRScanner userId={userId} />}
        </div>
    );
};

export default ScanQR;
