import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/leaderboard.css"; // Importing styles

const Leaderboard = () => {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        axios.get("https://d7bc-103-99-188-128.ngrok-free.app/api/leader/leaderboard")
            .then(res => setLeaders(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="leaderboard-container">
            <h2>🏆 Leaderboard 🏆</h2>
            <ul className="leaderboard-list">
                {leaders.map((user, index) => (
                    <li key={user.user_id} className={`leaderboard-item rank-${index + 1}`}>
                        <span className="rank">{index + 1}</span>
                        <span className="name">{user.name}</span>
                        <span className="points">{user.total_points} pts</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
