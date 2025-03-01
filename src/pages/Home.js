import React, { useState } from "react";
import QRGenerator from "../components/QRGenerator";

const Home = () => {
    const [userId, setUserId] = useState("");
  

    const handleWishClick = () => {
        setUserId("user");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
        {!userId ? ( 
            <>
                <h1>🎉 Welcome to the Wishing Competition! 🎉</h1>
                <p>Click below to make a wish and generate your unique QR code.</p>
                
                <button
                    onClick={handleWishClick}
                    style={{
                        padding: "10px 20px",
                        fontSize: "18px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        margin: "20px 0"
                    }}
                >
                    🌟 Make a Wish 🌟
                </button>
            </>
        ) : (
            <QRGenerator /> 
        )}
    </div>
    );
};

export default Home;
