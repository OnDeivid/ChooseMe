export const checkWinnerStatus = (choiceNumber, selectedChoice, topic) => {
    const storedChoice = JSON.parse(localStorage.getItem(`${topic}-Choice`));
    if (storedChoice) {
        if (storedChoice['1'] && choiceNumber === 1) return 'winner';
        if (storedChoice['2'] && choiceNumber === 2) return 'winner';
        if (!storedChoice['1']) return 'loser';
        if (!storedChoice['2']) return 'loser';
    }

    if (!selectedChoice) return '';
    if (choiceNumber === selectedChoice) {
        localStorage.setItem(`${topic}-Choice`, JSON.stringify({ [selectedChoice]: 'winner' }));
        return 'winner';
    }

    return 'loser';
};