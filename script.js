function firstWord(s) {
  // your code here
	let str = text.split(" ")
  for(let i=0;i<str.length;i++){
    if(str[i] != ""){
      return str[i];
    }
  }
  return ""
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
