function telephoneCheck(str) {
    let index = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gi
    return index.test(str)
  }