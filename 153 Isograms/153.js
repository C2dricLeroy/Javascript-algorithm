function isIsogram(str){
    let arr = [];
    let splitted = str.toLowerCase().split('');
    for (let i = 0; i < splitted.length; i++) {
        if (arr.includes(splitted[i])){
            continue;
        } else arr.push(splitted[i])
    } return str.length === arr.length ? true : false
}