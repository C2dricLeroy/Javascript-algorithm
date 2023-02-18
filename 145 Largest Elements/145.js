function largest(n,xs){
    let largest = [];
    let sorted = xs.sort((a,b) => a - b).reverse();
    for (let i = 0; i < n; i++){
        largest.push(sorted[i])
    } return largest.reverse()
}