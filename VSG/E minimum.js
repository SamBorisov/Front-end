function OffLineMinimum(strArr) {
    const result = [];
    const stack = [];
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === 'E') {
        result.push(stack.sort((a, b) => a - b).shift());
      } else {
        stack.push(parseInt(strArr[i]));
      }
    }
    return result.join(',');
  }


  // before each E shoud take the min number of the array 
  // if E are stacked the task shoud behave different and get old data