String.prototype.toJadenCase = function () {
    let splitted = this.split(' ');
    return splitted.map(element => element.charAt(0).toUpperCase() + element.slice(1, element.length)).join(' ')
};