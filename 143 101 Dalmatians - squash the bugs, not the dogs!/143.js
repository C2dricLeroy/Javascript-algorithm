function howManyDalmatians(number) {
    let dogs = ["Hardly any", "More than a handful!", "101 DALMATIANS!!!", "Woah that's a lot of dogs!"];

    return number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[2] : dogs[3];
}