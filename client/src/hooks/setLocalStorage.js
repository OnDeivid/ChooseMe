import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export const useLocalStorage = (key, initialValue) => {
    const navigate = useNavigate();

    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue));
    }, [key, storedValue]);

    const setItem = (value) => {
        setStoredValue(value);
    };

    const deleteItem = () => {
        localStorage.removeItem(key);
        setStoredValue(initialValue);
    };


    const deleteAllStoredData = () => {
        localStorage.clear()

        console.log('data has been deleted')
    }


    
    const checkDate = (currentDate) => {
        const storedDate = localStorage.getItem('date')
        console.log(currentDate)
        console.log(storedDate)

        if (storedDate) {
            if (storedDate < currentDate) {
                localStorage.setItem('date', currentDate);
                navigate('/');
                deleteAllStoredData();
            }
        } else {
            localStorage.setItem('date', currentDate);
        }
    };

    return { storedValue, setItem, deleteItem, deleteAllStoredData, checkDate };
};
