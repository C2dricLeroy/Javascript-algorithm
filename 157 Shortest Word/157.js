function findShort(s){
    let splitted = s.split(' ');
    let result = splitted[0].length;
    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i].length <= result) {
            result = splitted[i].length;
        }
    } return result;
}