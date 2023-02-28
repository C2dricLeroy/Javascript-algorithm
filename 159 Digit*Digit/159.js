function squareDigits(num){
    let splitted = num.toString().split('');
    return Number(splitted.map(element => Math.pow(element, 2)).join(''))
}