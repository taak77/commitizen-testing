function isAlpha(value) {
	return !/[^a-z\xDF-\xFF]|^$/.test(value.toLowerCase());
}

function isUpper(value) {
  return isAlpha(value) && value.toUpperCase() === value;
}

module.exports = {
	isAlpha: isAlpha,
	isUpper: isUpper
};