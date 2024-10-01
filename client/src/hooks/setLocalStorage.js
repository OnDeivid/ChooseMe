import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const currentDate = new Date().toISOString().split('T')[0];
    const oldDate = localStorage.getItem('date')

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
        localStorage.removeItem('heros')
        localStorage.removeItem('cars')
        localStorage.removeItem('lol')

        localStorage.removeItem('heros' + '-Choice')
        localStorage.removeItem('cars' + '-Choice')
        localStorage.removeItem('lol' + '-Choice')

        console.log('data has been deleted')
    }

    return { storedValue, setItem, deleteItem, deleteAllStoredData };
};
