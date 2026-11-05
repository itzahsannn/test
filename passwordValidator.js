
function isStrongPassword(password) {
  if (typeof password !== "string") {
    return false;
  }

  const hasMinimumLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return (
    hasMinimumLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber
  );
}

// Example tests
console.log(isStrongPassword("Hello123"));  // true
console.log(isStrongPassword("hello123"));  // false
console.log(isStrongPassword("HELLO123"));  // false
console.log(isStrongPassword("Hello"));     // false
console.log(isStrongPassword(""));          // false
