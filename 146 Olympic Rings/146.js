function olympicRing(a){
    let roundCounter = 0;
    let b = a.split('');
    for (let i = 0; i < a.length; i++) {
        switch(b[i]) {
            case 'a':
            case 'b':
            case 'd':
            case 'e':
            case 'g':
            case 'o':
            case 'p':
            case 'q':
            case 'A':
            case 'D':
            case 'O':
            case 'P':
            case 'Q':
            case 'R':
                roundCounter ++;
                break;
            case 'B' : roundCounter += 2; break;
        }

    }

    return Math.floor(roundCounter / 2) <= 1 ? 'Not even a medal!' : Math.floor(roundCounter / 2) === 2 ? 'Bronze!' : Math.floor(roundCounter/2) === 3 ? 'Silver!' : 'Gold!'
}