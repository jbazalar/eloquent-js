function countChar(str,ltr){
  var count = 0;
  for(var i=0;i<str.length;i++){
    if(str.charAt(i)===ltr){
      count++;
    }
  }
  console.log(count);
}
function countBs(str){
  countChar(str,"B");
}
countBs("BBC");
countChar("BBClkdBlkjsB","k");