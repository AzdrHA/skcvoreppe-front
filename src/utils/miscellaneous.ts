/**
 * @param {string} value
 * @param {number} length
 * @return {boolean}
 */
export const isLongEnough = (value: string, length: number): boolean => {
  return value.length >= length;
};

/**
 * @param {string} value
 * @param {number} number
 * @return {boolean}
 */
export const hasUppercase = (value: string, number: number = 1): boolean => {
  return new RegExp('[A-Z]{' + number + ',}').test(value);
};

/**
 * @param {string} value
 * @param {number} number
 * @return {boolean}
 */
export const hasLowercase = (value: string, number: number = 1): boolean => {
  return new RegExp('[a-z]{' + number + ',}').test(value);
};

/**
 * @param {string} value
 * @param {number} number
 * @return {boolean}
 */
export const hasNumber = (value: string, number: number = 1): boolean => {
  return new RegExp('\\d{'+ number + ',}', 'g').test(value);
};
