import numeral from "numeral";

// ----------------------------------------------------------------------

type InputValue = string | number | null;

export function fData(number: InputValue) {
  const format = number ? numeral(number).format("0.0 b") : "";

  return result(format, ".0");
}

function result(format: string, key = ".00") {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, "") : format;
}
