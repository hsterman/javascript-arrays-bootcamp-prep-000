var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray() {
  array = [1]
  return array;
}

function destructivelyAddElementToBeginningOfArray() {
  array = [1]
  
  array.unshift("foo")

  return array
}


function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}

function accessElementInArray(array, element, index) {
  array[index]; {
    return element;
  }
}

