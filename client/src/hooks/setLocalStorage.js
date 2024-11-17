import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export const useLocalStorage = (key, initialValue) => {
    const navigate = useNavigate();

    const [storedValue, setStoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    useEffect(() => {
        if (localStorage.getItem(key) == null || localStorage.getItem(key) == 'false') {
            localStorage.setItem(key, JSON.stringify(storedValue));
        }
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

        if (typeof currentDate === 'object') {
            return
        }

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
