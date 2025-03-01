import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
    const [leaders, setLeaders] = useState([]);
    const API_BASE_URL = process.env.REACT_APP_API_URL
    useEffect(() => {
        axios.get( `https://d7bc-103-99-188-128.ngrok-free.app/api/leader/leaderboard`)
            .then(res => setLeaders(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>Leaderboard</h2>
            <ul>
                {leaders.map(user => (
                    <li key={user.user_id}>
                        {user.name}: {user.total_points} points
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
