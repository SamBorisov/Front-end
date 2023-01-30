function validateString(string) {
    const firstChar = string.charAt(0);
    if (!firstChar.match(/^[a-zA-Z]/)) {
      return false;
    }
    if (string.length < 4 || string.length > 25) {
      return false;
    }
    if (string.endsWith("_")) {
      return false;
    }
    if (!string.match(/^[a-zA-Z0-9_]+$/)) {
      return false;
    }
    return true;
  }


  // validate string - cannot end it "_"
  // shoud start with letter
  // only letters, numbers and _
  // from 4 to 25 length