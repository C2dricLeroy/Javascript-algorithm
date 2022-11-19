function nextId(ids) {
  ids.sort((a, b) => a - b);

  for (let i = 0; i < ids.length * 2; i += 1) {
    if (!ids.includes(i)) {
      return i;
    }
  }
}
