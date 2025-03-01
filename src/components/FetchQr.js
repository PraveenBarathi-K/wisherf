import React, { useState } from "react";
import axios from "axios";

const FetchQR = () => {
    const [userId, setUserId] = useState("");
    const [qrCode, setQrCode] = useState("");
    const [message, setMessage] = useState("");
    console.log("in frontend");
    const fetchQR = async () => {
        if (!userId) {
            setMessage("User ID is required!");
            return;
        }

        try {
            const response = await axios.get(`https://d7bc-103-99-188-128.ngrok-free.app/api/users/fetch_qr/${userId}`);
            console.log("after response");
            setQrCode(response.data.qr_code);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Error fetching QR Code");
            console.error(error);
            setQrCode("");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Fetch Existing QR Code</h2>
            <input
                type="text"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                style={{ padding: "8px", marginRight: "5px" }}
            />
            <br /><br />
            <button onClick={fetchQR} style={{ padding: "10px 20px", cursor: "pointer" }}>
                Fetch QR Code
            </button>
            <p>{message}</p>
            {qrCode && <img src={qrCode} alt="QR Code" style={{ marginTop: "20px" }} />}
        </div>
    );
};

export default FetchQR;
