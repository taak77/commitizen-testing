function isAlpha(value) {
	return !/[^a-z\xDF-\xFF]|^$/.test(value.toLowerCase());
}

function isUpper(value) {
  return isAlpha(value) && value.toUpperCase() === value;
}

function isLower(value) {
  return isAlpha(value) && value.toLowerCase() === value;
}

module.exports = {
	isAlpha: isAlpha,
	isUpper: isUpper,
	isLower: isLower
};