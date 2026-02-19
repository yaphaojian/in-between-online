const createDeck = () =>
    ['s', 'd', 'h', 'c'].flatMap(s =>
        ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'].map(r => r + s)
    );

export default createDeck;
