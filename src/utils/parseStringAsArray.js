module.exports = arrayAsString => {
  console.log(arrayAsString.includes(","));
  return arrayAsString.includes(",")
    ? arrayAsString.split(",").map(tech => tech.trim())
    : [arrayAsString];
};