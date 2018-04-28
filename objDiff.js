function isDiff(obj1, obj2) {
  for(let key in obj1) {
    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
      return true;
    }

    if(obj2.hasOwnProperty(key) === false) {
      return true;
    }

    if(obj1[key] !== obj2[key]) {
      return true;
    }

    return false;
    }
}
