import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET } from '../../api';

import './LoadingDataComponent.css';

export default function LoadingDataComponent() {
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false)
    const navigate = useNavigate();

    const fetchDataWithProgress = async () => {
        setLoading(true);

        const simulateProgress = setInterval(() => {
            setProgress((prev) => (prev < 95 ? prev + 1 : prev));
        }, 50);

        try {

            if (!localStorage.getItem('dataFetched')) {
                const res = await GET(`/`);
                localStorage.setItem('dataFetched', JSON.stringify(res));
            }

            setProgress(100);

            setTimeout(() => {
                if (JSON.parse(localStorage.getItem('dataFetched')).error) {
                    setErrorMessage(JSON.parse(localStorage.getItem('dataFetched'))?.error)
                    return () => {
                        <div>
                            error
                        </div>
                    }
                } else {
                    navigate('/');
                }
            }, 500);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            clearInterval(simulateProgress);
            setLoading(false);
        }
    };

    const SimpleComponent = () => {
        return (
            <>
                <p>{progress}%</p>
                {loading && <p>Loading...</p>}
            </>
        )
    }

    useEffect(() => {
        localStorage.removeItem('dataFetched')
        fetchDataWithProgress();

        return () => {
            setLoading(false);
        };
    }, []);

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
            {!errorMessage ? <h2>Data Fetch Progress</h2> : <h2>{errorMessage}</h2>}
            <div
                style={{
                    background: "#e0e0e0",
                    borderRadius: "10px",
                    height: "20px",
                    marginBottom: "10px",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        width: `${progress}%`,
                        background: "#76c7c0",
                        transition: "width 0.2s ease",
                    }}
                />
            </div>
            {!errorMessage ? <SimpleComponent /> : <h3> {errorMessage} Please try again later.</h3>}

        </div>
    );
}
