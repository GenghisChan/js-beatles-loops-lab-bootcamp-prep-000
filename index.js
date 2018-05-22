function theBeatlesPlay(x, y) {
  let beatles = []
  
  for(var i = 0; i < x.length; i++){
    beatles.push(x[i] + ' plays ' + y[i])
  }
  return beatles
}

function johnLennonFacts(x) {
  var i = 0 
  
  while(i < x.length) {
  x[i] += '!!!'
   i++
  }
  return x
}

function iLoveBeatles(x){
  var emptyArray = []
  do {
    emptyArray.push("I love beatles!")
  } while(x < 15)
  return emptyArray
}










