import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const SplashScreen = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate("/home");
        }, 2500);

        return () => clearTimeout(timeoutId);
    }, [navigate]);

    return (
        <div className='splash-screen'>
            <div> नमस्ते 🙏🏻</div>
            <div className='typewriter '>
                <h1>आपका स्वागत है !</h1>
            </div>
        </div>
    );
}

export default SplashScreen;