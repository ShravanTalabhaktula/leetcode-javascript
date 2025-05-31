'use strict';
/**
 * Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
 * You must solve the problem without using any built-in library for handling large integers (such as BigInteger).
 * You must also not convert the inputs to integers directly.
 */

/**
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
export function addStrings(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let res = '';
  let carry = 0;

  if (i < 0 && j < 0) return '0';

  while (i >= 0 || j >= 0 || carry > 0) {
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
    let sum = digit1 + digit2 + carry;
    res = (sum % 10) + res;
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }

  return res;
}
