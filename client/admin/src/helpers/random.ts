const generateRandomNumbers = (): number[] => {
    const randomNumbers: number[] = [];

    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * 150) + 1;
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;
}

