function descendingOrder(n){
    let m = n.toString();
    return Number(m.split('').sort().reverse().join(''));
}