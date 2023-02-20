function XO(str) {
    let splitted = str.toUpperCase().split('');
    let oCounter = 0;
    let xCounter = 0;
    for (let i = 0; i < splitted.length; i++){
        if (splitted[i] === 'O') {
            oCounter ++;
        } else if (splitted[i] === 'X') {
            xCounter ++
        }
    }if (oCounter === xCounter) {
        return true
    } else return false
    console.log(oCounter)
    console.log(xCounter)
}