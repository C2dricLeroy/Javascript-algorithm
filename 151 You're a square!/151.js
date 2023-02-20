const isSquare = function (n) {
    if (Math.sign(n) === -1) {
        return false
    } else if (Math.sqrt(n) % 1 === 0) {
        return true;
    } else return false;
};