function cpfValidationInput() {
  document.querySelector("#success").style.display = "none";
  document.querySelector("#error").style.display = "none";

  const cpfInput = document.querySelector("#cpf-input").value;
  const validationResult = cpfValidation(cpfInput);

  validationResult
    ? (document.querySelector("#success").style.display = "block")
    : (document.querySelector("#error").style.display = "block");
}

function cpfValidation(cpf) {
  const cpfFormatted = cpf.replace(/\.|\-/gi, "");
  const cpfBlackList = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  if (cpfFormatted.length != 11 || cpfBlackList.includes(cpfFormatted)) {
    return false;
  } else {
    const digits = cpfFormatted.split("");
    const firstVerificationDigit = Number(digits[9]);
    const secondVerificationDigit = Number(digits[10]);

    const firstDigitIsValid = digits.reduce((acc, number, index) => {
      if (index < 9) {
        const multiply = digits.length - 1 - index;
        const sumResult = Number(number) * Number(multiply);

        return acc + sumResult;
      } else if (index === digits.length - 1) {
        const finalResult = (acc * 10) % 11;

        if (finalResult === 10 || finalResult === 11) {
          const firstValidDigit = 0;
          return firstValidDigit === firstVerificationDigit ? true : false;
        } else {
          return finalResult === firstVerificationDigit ? true : false;
        }
      } else {
        return acc;
      }
    }, 0);

    const secondDigitIsValid = digits.reduce((acc, number, index) => {
      if (index < 10) {
        const multiply = digits.length - index;
        const sumResult = Number(number) * Number(multiply);

        return acc + sumResult;
      } else if (index === digits.length - 1) {
        const finalResult = (acc * 10) % 11;

        if (finalResult === 10 || finalResult === 11) {
          const secondValidDigit = 0;
          return secondValidDigit === secondVerificationDigit ? true : false;
        } else {
          return finalResult === secondVerificationDigit ? true : false;
        }
      } else {
        return acc;
      }
    }, 0);

    return firstDigitIsValid && secondDigitIsValid ? true : false;
  }
}
