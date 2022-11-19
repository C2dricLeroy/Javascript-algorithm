function cookie(x) {
  if (typeof x === 'number') {
    return 'Who ate the last cookie? It was Monica!';
  } if (typeof x === 'string') {
    return 'Who ate the last cookie? It was Zach!';
  } return 'Who ate the last cookie? It was the dog!';
}
