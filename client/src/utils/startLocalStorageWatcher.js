export const startLocalStorageWatcher = () => {
    
    const oldDate = localStorage.getItem('date')
    const checkExpiration = () => {
        const currentDate = new Date().toISOString().split('T')[0];


        if (oldDate < currentDate) {
            localStorage.setItem('date', currentDate)

        }
    }

    const intervalID = setInterval(() => { checkExpiration() }, 1000)

    return { clear() { clearInterval(intervalID) }, oldDate }

}