export const startLocalStorageWatcher = () => {
    const oldDate = localStorage.getItem('date')
    const currentDate = new Date().toISOString().split('T')[0];

    const checkExpiration = () => {
        if (oldDate < currentDate) {
            localStorage.setItem('date', currentDate)
            console.log('successfully data removed');
        }
    }

    const intervalID = setInterval(() => { checkExpiration() }, 1000)

    return { clear() { clearInterval(intervalID) }, oldDate }

}