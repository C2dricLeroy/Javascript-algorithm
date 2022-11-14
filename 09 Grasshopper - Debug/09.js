function weatherInfo(temp) {
  const c = convertToCelsius(temp);
  if (c < 0) return (`${c} is freezing temperature`);
  return (`${c} is above freezing temperature`);
}

function convertToCelsius(temperature) {
  const celsius = (Math.floor(temperature) - 32) * (5 / 9);
  return celsius;
}
