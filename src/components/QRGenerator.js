import React, { useState } from "react";
import axios from "axios";
import "../styles/qr_generation.css";
const QRGenerator = () => {
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("student");
    const [password, setPassword] = useState("");
    const [qrCode, setQrCode] = useState("");
    const [message, setMessage] = useState("");
    
    const generateQR = async () => {
        if (!userId || !name) {
            setMessage("User ID and Name are required!");
            return;
        }

        if (role !== "student" && !password) {
            setMessage("Password is required for staff and HOD!");
            return;
        }

        try {
            const response = await axios.post("https://d7bc-103-99-188-128.ngrok-free.app/api/users/generate_qr", {
                user_id: userId,
                name: name,
                role: role,
                password: role !== "student" ? password : undefined, 
            }, {
                headers: { "Content-Type": "application/json" }
            });
            

            setQrCode(response.data.qr_code);
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Error generating QR Code");
            console.error(error.response.data);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>QR Code Generator</h2>
            <p><strong>Important:</strong> Take a screenshot of your QR code. It <u style={{color:"red"}}>will not</u> be generated again.</p>

            <input
                type="text"
                placeholder="User ID / Roll Number"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                style={{ padding: "8px", marginRight: "5px" }}
            />
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: "8px", marginRight: "5px" }}
            />
            <select value={role} onChange={(e) => setRole(e.target.value)} style={{ padding: "8px" }}>
                <option value="student">Student</option>
                <option value="staff">Staff</option>
                <option value="hod">HOD</option>
            </select>

            {role !== "student" && (
                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ padding: "8px", marginLeft: "5px" }}
                />
            )}

            <br /><br />
            <button onClick={generateQR} >
                Generate QR Code
            </button>
            <p>{message}</p>
            {qrCode && <img src={qrCode} alt="QR Code" style={{ marginTop: "20px" }} />}
        </div>
    );
};

export default QRGenerator;
