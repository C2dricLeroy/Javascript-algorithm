function getSize(width, height, depth) {
    let area1 = 2 * (width * height) + 2*(depth * height) + 2*(width * depth);
    let volume = width * depth * height;

    return [area1   , volume]
}