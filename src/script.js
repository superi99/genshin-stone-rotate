
function parseNumber(arr) {
	return arr.map(Number)
}

function solve(){
	const topInput = document.getElementById("top").value;
  const botInput = document.getElementById("bot").value;
  let swordsPosArr =  document.getElementById("swordsPos").value.trim().split(" ");
  swordsPosArr = parseNumber(swordsPosArr)
  let swordsValArr =  document.getElementById("swordsVal").value.trim().split(" ");
  swordsValArr = parseNumber(swordsValArr)
  
  let topArr = parseNumber(topInput.trim().split(" "))
  let botArr = parseNumber(botInput.trim().split(" "))
  
  swords = swordsPosArr.map(function(v, i){
    return [v, swordsValArr[i]]
  }.bind(this));
	

	for (let i= 0; i<topArr.length; i++) {
  	for(let j=0; j<botArr.length; j++) {
    	if (checkCorrect(topArr, botArr, swords)) {
      	console.log(topArr)
        console.log(botArr)
        document.getElementById('result').innerHTML += `<h3>Hàng trên: ` +topArr.join(" ")+ `</h3>`;
        document.getElementById('result').innerHTML += `<h3>Hàng dưới: ` +botArr.join(" ")+ `</h3>`;
      	return true
      }
     	botArr = rotate(botArr)
    }
    topArr = rotate(topArr)
	}
  return false
}

function checkCorrect(topArr, botArr, swords){
	for (let i = 0; i < swords.length; i++) {
  	const pos = swords[i][0]
    if (topArr[pos] + botArr[pos] !== swords[i][1]) {
    	return false
    }
    
  }
  return true
}


function rotate(arr) {
  const arrLength = arr.length
  const lastVal = [arr[arrLength -1]]
  return lastVal.concat(arr.slice(0, arrLength-1))
}

function rotateReverse(arr) {
  const arrLength = arr.length
  return arr.slice(1, arrLength).concat(arr[0])
}
