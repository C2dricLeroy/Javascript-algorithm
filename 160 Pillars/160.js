function pillars(numPill, dist, width) {
    let distance = (numPill - 1) * dist * 100;
    let totalWidth = (numPill - 2) * width;
    if (numPill === 1) {
        return 0
    } else return distance + totalWidth;
}