var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array = [0]
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [1]
  
  array.unshift("foo")

  return array
}

function addElementToEndOfArray(array, element) {
  
}
function destructivelyAddElementToEndOfArray(array, element) {
  
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  const days = ["Monday", "Tuesday", "Wednesday"]
  days.shift()
  return days;
}


function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)
}

function accessElementInArray(array, element, index) {
  array[0]; {
    return element;
  }
}

