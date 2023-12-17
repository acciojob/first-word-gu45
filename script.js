function firstWord(s) {
  // your code here
  let trim = str.trim();
  if(!trim.includes(" ")){
    return trim
  }
  else if(str.length==0){
    return ""
  }
  let strarr = trim.split(" ");
  return strarr[0]
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
