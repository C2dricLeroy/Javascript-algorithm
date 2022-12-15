function all(arr, fun) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (fun(arr[i])) {
      result.push(arr[i]);
    }
  } return result.length === arr.length;
}
