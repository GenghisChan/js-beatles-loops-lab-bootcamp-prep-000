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

function iLoveTheBeatles(x){
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!") * x
    x += 1
  }  while(x < 7)
  return emptyArray
}










